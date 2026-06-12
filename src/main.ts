import { buildLadder, dollars, type Round } from './countries';
import { initInput, mouse, consumeFire, consumePresses, key, rumble, pollPad } from './input';
import {
  newDuel, step, mulberry32,
  type DuelState, type Side, type SideInputs,
} from './sim';
import { Largo, TAUNTS, pick } from './ai';
import {
  initRender, showAttract, buildRound, drawFrame, ndcToWorld, shake, resize, setIntro, setCrt,
  renderStats,
} from './render';
import {
  initAudio, sfx, startDrone, stopDrone, startAlarm, stopAlarm, announceRound,
  startMusic, stopMusic, startTitleMusic, stopTitleMusic, setMuted,
} from './audio';
import { initAuth, signedIn, signInGoogle, signOut, recordMatch, topLedger } from './auth';
import { initHaptics, phoneConnected, phoneHeld, sendShock } from './haptics';
import { netInit, netOn, netSend, netJoin, netLeave, netMode, type NetMsg } from './net';
import QRCode from 'qrcode';

type Phase = 'attract' | 'intro' | 'duel' | 'shock' | 'over';

const $ = (id: string) => document.getElementById(id)!;
const ui = {
  marquee: $('marquee'),
  cashP: $('cashP'),
  cashL: $('cashL'),
  endP: $('endP').querySelector('.endbar') as HTMLElement,
  endL: $('endL').querySelector('.endbar') as HTMLElement,
  center: $('centerMsg'),
  sub: $('subMsg'),
  taunt: $('taunt'),
  help: $('help'),
  flash: $('shockFlash'),
};

// DOM writes only when the value actually changed — the HUD was being
// rewritten at 60Hz. setTxt compares live DOM; setHTML caches the last string.
function setTxt(el: HTMLElement, s: string): void {
  if (el.textContent !== s) el.textContent = s;
}
const htmlCache = new WeakMap<HTMLElement, string>();
function setHTML(el: HTMLElement, s: string): void {
  if (htmlCache.get(el) !== s) {
    htmlCache.set(el, s);
    el.innerHTML = s;
  }
}

const SIM_DT = 1 / 60;
let phase: Phase = 'attract';
let phaseT = 0;
let roundIdx = 0;
let matchRounds: Round[] = [];
let cash: Record<Side, number> = { p: 0, l: 0 };
let endurance: Record<Side, number> = { p: 100, l: 100 };
let duel: DuelState | null = null;
let largo: Largo | null = null;
let rng = mulberry32(7);
let presses = new Set<string>();
let pressSeq: string[] = []; // ordered, duplicates kept — text entry needs both
let shock: {
  victim: Side;
  drain: number;
  t: number;
  dur: number;
  outcome: 'release' | 'collapse' | 'endured' | null;
  rumbleAt: number;
} | null = null;
let matchWon = false;
let warnT = 0; // "missile inbound" banner countdown
let prevLargoAmmo = 2;
let lastBeepSecond = -1;
let quipShown = false;

// Attract: cycle title globe ↔ AI-vs-AI demonstration, like a real cabinet.
let attractMode: 'title' | 'demo' = 'title';
let demo: { duel: DuelState; aiP: Largo; aiL: Largo; rng: () => number; round: Round } | null = null;

// Gamepad reticle lives in world coords; last-moved device owns the reticle.
const padRet = { x: 0, y: 0 };
let lastDevice: 'mouse' | 'pad' = 'mouse';
let currentReticle: { x: number; y: number } | null = null;

// Multiplayer: lockstep over the relay. Host plays 007 (bottom), guest plays
// LARGO's seat (top). Inputs for tick T are exchanged at T - INPUT_DELAY.
const INPUT_DELAY = 8; // ticks of input latency budget — covers cloud-relay RTT + send cadence
const REDUNDANCY = 12; // each input message carries this many trailing ticks — heals dropped messages
let mp: { role: 'host' | 'guest'; mySide: Side; seed: number } | null = null;
let mpWait: 'hosting' | 'entering' | 'joining' | null = null;
let tableCode = '';
let codeBuf = '';

function makeTableCode(): string {
  const A = 'ABCDEFGHJKLMNPQRSTUVWXYZ'; // no I/O — they read badly on a CRT
  let c = '';
  for (let i = 0; i < 4; i++) c += A[Math.floor(Math.random() * A.length)];
  return c;
}
let mpHelloTimer: number | null = null;
let duelTick = 0;
let stallT = 0;
let stallResendAt = 0;
const inBuf: Record<Side, Map<number, SideInputs>> = { p: new Map(), l: new Map() };
let mpShockResult: { outcome: 'release' | 'collapse' | 'endured'; endurance: number } | null = null;
const mySums = new Map<number, number>();

function my(): Side {
  return mp ? mp.mySide : 'p';
}

function oppName(): string {
  return mp ? names[my() === 'p' ? 'l' : 'p'] : 'LARGO';
}

const NEUTRAL: SideInputs = { shieldDir: 0, fireAt: null, launch: false };

function stopHello(): void {
  if (mpHelloTimer !== null) window.clearInterval(mpHelloTimer);
  mpHelloTimer = null;
}

function beginMpMatch(role: 'host' | 'guest', seed: number, opponentName?: string): void {
  stopHello();
  mpWait = null;
  mp = { role, mySide: role === 'host' ? 'p' : 'l', seed };
  if (role === 'host') names = { p: playerName, l: (opponentName || 'CHALLENGER').slice(0, 8) };
  else names = { p: (opponentName || 'HOST').slice(0, 8), l: playerName };
  setEnduranceTags();
  initAudio();
  roundIdx = 0;
  cash = { p: 0, l: 0 };
  endurance = { p: 100, l: 100 };
  matchWon = false;
  demo = null;
  attractMode = 'title';
  ui.flash.style.background = '#ff2200';
  ui.flash.style.opacity = '0';
  rng = mulberry32(seed);
  matchRounds = buildLadder(rng); // identical on both clients — same seed
  startRound();
}

function leaveMp(): void {
  if (mp) netSend({ t: 'mp-bye' });
  mp = null;
  mpWait = null;
  stopHello();
  netLeave();
}

// Lockstep over a lossy broadcast channel: every message carries the last
// REDUNDANCY ticks of our inputs, so any single drop is healed by the next.
function sendInputWindow(target: number): void {
  if (!mp) return;
  const from = Math.max(0, target - (REDUNDANCY - 1));
  const ins: SideInputs[] = [];
  for (let t = from; t <= target; t++) ins.push(inBuf[mp.mySide].get(t) ?? NEUTRAL);
  netSend({ t: 'mp-in', sid: mp.seed, side: mp.mySide, from, ins });
}

let gripInfoOk = false;
let ledgerText: string | null = null;
let rulesOpen = false;

function setRules(open: boolean): void {
  rulesOpen = open;
  $('rules').style.display = open ? 'block' : 'none';
  if (!open) {
    try {
      localStorage.setItem('dom.seenRules', '1');
    } catch {}
  }
}

// Player identity — arcade name entry, persisted. Sign-in can layer on later.
let playerName: string = (() => {
  try {
    return (localStorage.getItem('dom.name') || '007').slice(0, 8);
  } catch {
    return '007';
  }
})();
let names: Record<Side, string> = { p: '007', l: 'LARGO' };
let naming = false;
let nameBuf = '';

function setEnduranceTags(): void {
  const tp = document.querySelector('#endP .tag');
  const tl = document.querySelector('#endL .tag');
  if (tp) tp.textContent = `${names.p} — ENDURANCE`;
  if (tl) tl.textContent = `${names.l} — ENDURANCE`;
}

const settings: { muted: boolean; crt: boolean } = (() => {
  try {
    return { muted: false, crt: true, ...JSON.parse(localStorage.getItem('dom.settings') ?? '{}') };
  } catch {
    return { muted: false, crt: true };
  }
})();

function saveSettings(): void {
  try {
    localStorage.setItem('dom.settings', JSON.stringify(settings));
  } catch {}
}

function pressed(k: string): boolean {
  return presses.has(k);
}

function setPhase(p: Phase): void {
  phase = p;
  phaseT = 0;
}

const shown = { endP: -1, endL: -1 };
function fmtCash(): void {
  setHTML(ui.cashP, `<span class="label">${names.p}</span>${dollars(cash.p)}`);
  setHTML(ui.cashL, `<span class="label">${names.l}</span>${dollars(cash.l)}`);
  const ep = Math.max(0, Math.round(endurance.p * 2) / 2);
  const el = Math.max(0, Math.round(endurance.l * 2) / 2);
  if (ep !== shown.endP) {
    shown.endP = ep;
    ui.endP.style.width = `${ep}%`;
  }
  if (el !== shown.endL) {
    shown.endL = el;
    ui.endL.style.width = `${el}%`;
  }
}

function startMatch(): void {
  mpWait = null;
  stopHello();
  names = { p: playerName, l: 'LARGO' };
  setEnduranceTags();
  roundIdx = 0;
  cash = { p: 0, l: 0 };
  endurance = { p: 100, l: 100 };
  matchWon = false;
  demo = null;
  attractMode = 'title';
  ui.flash.style.background = '#ff2200';
  ui.flash.style.opacity = '0';
  rng = mulberry32((Math.random() * 1e9) | 0); // match seed; sim itself stays deterministic per seed
  matchRounds = buildLadder(rng);
  startRound();
}

function makeDemo(): void {
  const seed = mulberry32((Math.random() * 1e9) | 0);
  const round = buildLadder(seed)[0];
  demo = {
    duel: newDuel(round, 1, seed),
    aiP: new Largo('p', 1, seed),
    aiL: new Largo('l', 1, seed),
    rng: seed,
    round,
  };
  buildRound(demo.duel.outline);
}

function startRound(): void {
  stopTitleMusic();
  $('joinInfo').style.display = 'none';
  const r = matchRounds[roundIdx];
  duel = newDuel(r, roundIdx, rng, !!mp);
  largo = new Largo('l', roundIdx, rng);
  duelTick = 0;
  stallT = 0;
  mpShockResult = null;
  mySums.clear();
  inBuf.p.clear();
  inBuf.l.clear();
  for (let t = 0; t < INPUT_DELAY; t++) {
    inBuf.p.set(t, NEUTRAL);
    inBuf.l.set(t, NEUTRAL);
  }
  buildRound(duel.outline);
  showAttract(false);
  ui.center.textContent = r.name;
  ui.sub.textContent = `FOR ${dollars(r.stake)}`;
  setHTML(ui.marquee, '');
  ui.taunt.textContent = mp
    ? roundIdx === 3
      ? 'THE FINAL TABLE — FOR THE REST OF THE WORLD'
      : ''
    : roundIdx === 0
      ? pick(TAUNTS.intro, rng)
      : roundIdx === 3
        ? TAUNTS.finalRound[0]
        : '';
  ui.help.textContent = 'MOUSE: AIM+FIRE LASER · A/D: SHIELD · 1,2: MISSILES · NEVER RELEASE THE GRIPS';
  announceRound(r.name, `${r.name}. ${r.stake.toLocaleString('en-US')} dollars.`);
  warnT = 0;
  prevLargoAmmo = 2;
  lastBeepSecond = -1;
  quipShown = false;
  setIntro(0);
  setPhase('intro');
}

function beginDuel(): void {
  ui.center.textContent = '';
  ui.sub.textContent = '';
  setIntro(null);
  startDrone(roundIdx);
  startMusic(roundIdx);
  setPhase('duel');
}

function endRound(loser: Side, reason: DuelState['reason']): void {
  stopDrone();
  stopMusic();
  const r = matchRounds[roundIdx];
  const winner: Side = loser === 'p' ? 'l' : 'p';

  if (reason === 'crack') {
    // Largo releases his grips mid-game — instant match win.
    cash.p += r.stake;
    ui.taunt.textContent = TAUNTS.crack[0];
    finishMatch(true, 'LARGO RELEASES HIS GRIPS');
    return;
  }

  cash[winner] += r.stake;
  fmtCash();
  shock = {
    victim: loser,
    drain: r.drain,
    t: 0,
    dur: 3.0,
    outcome: null,
    rumbleAt: 0,
  };
  ui.flash.style.background = loser === my() ? '#ff2200' : '#ff7a00';
  sendShock(loser, roundIdx, 3000);
  ui.center.textContent =
    loser === my() ? `${r.name} FALLS TO ${oppName()}` : `${r.name} IS YOURS`;
  ui.sub.textContent = loser === my() ? 'HOLD [SPACE] OR YOUR GRIPS — ENDURE THE PAIN' : '';
  ui.taunt.textContent = mp
    ? ''
    : loser === 'p'
      ? pick(TAUNTS.playerShock, rng)
      : pick(TAUNTS.largoShock, rng);
  startAlarm();
  setPhase('shock');
}

function finishMatch(won: boolean, headline: string): void {
  stopDrone();
  stopMusic();
  stopAlarm();
  ui.flash.style.opacity = '0';
  matchWon = won;
  fmtCash();
  ui.center.textContent = `${headline}\n${won ? 'THE WORLD IS YOURS' : mp ? 'THE TABLE IS LOST' : 'DOMINATION: LARGO'}`;
  ui.sub.textContent = 'PRESS ENTER TO PLAY AGAIN';
  ui.help.textContent = `FINAL — ${names.p} ${dollars(cash.p)} · ${names.l} ${dollars(cash.l)}`;
  if (won) sfx.win();
  recordMatch(names[my()], names[my() === 'p' ? 'l' : 'p'], won, won ? cash[my()] : 0);
  setPhase('over');
}

function afterShock(): void {
  stopAlarm();
  ui.flash.style.opacity = '0';
  const wasVictim = shock!.victim;
  shock = null;
  if (roundIdx === 3) {
    // Ladder complete — the world round decides it.
    const won = wasVictim !== my();
    finishMatch(
      won,
      won ? `${oppName()} ENDURES, BUT THE WORLD IS LOST` : 'YOU ENDURED — BUT THE WORLD IS THEIRS',
    );
    return;
  }
  roundIdx++;
  startRound();
}

function tick(dt: number): void {
  phaseT += dt;
  pressSeq = consumePresses();
  presses = new Set(pressSeq);

  if (mpWait !== 'entering' && !naming) {
    if (pressed('m')) {
      settings.muted = !settings.muted;
      setMuted(settings.muted);
      saveSettings();
    }
    if (pressed('c')) {
      settings.crt = !settings.crt;
      setCrt(settings.crt);
      saveSettings();
    }
  }

  switch (phase) {
    case 'attract': {
      startTitleMusic(); // no-op until the audio context exists (first interaction)
      // The rules card swallows every key while open.
      if (rulesOpen) {
        if (pressSeq.length > 0) setRules(false);
        break;
      }
      if (attractMode === 'title') {
        setTxt(ui.center, ledgerText ?? 'DOMINATION');
        setTxt(
          ui.sub,
          ledgerText
            ? 'L: CLOSE THE LEDGER'
            : naming
            ? `YOUR NAME: ${nameBuf}_`
            : mpWait === 'hosting'
              ? `TABLE ${tableCode} — TELL YOUR CHALLENGER THE CODE`
              : mpWait === 'entering'
                ? `ENTER TABLE CODE: ${codeBuf}${'·'.repeat(4 - codeBuf.length)}`
                : mpWait === 'joining'
                  ? `SEEKING TABLE ${codeBuf}…`
                  : 'PRESS ENTER',
        );
        setTxt(ui.taunt, '');
        setTxt(
          ui.help,
          `ENTER: VS LARGO · H: HOW TO PLAY · O: HOST · J: JOIN · N: NAME (${playerName}) · G: ${
            signedIn() ? 'SIGNED IN ◉' : 'SIGN IN'
          } · L: LEDGER · M: MUTE · C: CRT · LINK: ${netMode() === 'supabase' ? 'GLOBAL ◉' : 'LOCAL RELAY'}`,
        );
        setHTML(ui.marquee, '');
        $('joinInfo').style.display = gripInfoOk ? 'flex' : 'none';
        if (!mpWait && !naming && phaseT > 9) {
          makeDemo();
          showAttract(false);
          attractMode = 'demo';
          setPhase('attract');
        }
      } else if (demo) {
        $('joinInfo').style.display = 'none';
        setTxt(ui.center, '');
        setTxt(ui.sub, 'DEMONSTRATION — PRESS ENTER');
        const inputs: Record<Side, SideInputs> = {
          p: demo.aiP.think(demo.duel),
          l: demo.aiL.think(demo.duel),
        };
        step(demo.duel, SIM_DT, inputs, 1, demo.rng);
        const left = Math.max(0, demo.duel.duration - demo.duel.time);
        setHTML(
          ui.marquee,
          `${demo.round.name} — ${dollars(demo.round.stake)}` +
            `<span class="stake">DEMO ${demo.duel.strikes.p} — ${demo.duel.strikes.l} · ${left.toFixed(0)}s</span>`,
        );
        if (demo.duel.over || phaseT > 30) {
          demo = null;
          attractMode = 'title';
          showAttract(true);
          setPhase('attract');
        }
      }
      // Name entry captures the keyboard.
      if (naming) {
        for (const k of pressSeq) {
          if (/^[a-z0-9]$/.test(k) && nameBuf.length < 8) nameBuf += k.toUpperCase();
          else if (k === 'backspace') nameBuf = nameBuf.slice(0, -1);
          else if (k === 'enter') {
            playerName = nameBuf || '007';
            try {
              localStorage.setItem('dom.name', playerName);
            } catch {}
            naming = false;
          } else if (k === 'escape') naming = false;
        }
        break;
      }

      // Code entry captures the keyboard; other lobby keys are suspended.
      if (mpWait === 'entering') {
        for (const k of pressSeq) {
          if (/^[a-z]$/.test(k) && codeBuf.length < 4) codeBuf += k.toUpperCase();
          else if (k === 'backspace') codeBuf = codeBuf.slice(0, -1);
          else if (k === 'escape') {
            mpWait = null;
            codeBuf = '';
          }
        }
        if (mpWait === 'entering' && codeBuf.length === 4) {
          netJoin(codeBuf);
          mpWait = 'joining';
          stopHello();
          netSend({ t: 'mp-hello', name: playerName });
          mpHelloTimer = window.setInterval(() => netSend({ t: 'mp-hello', name: playerName }), 1200);
        }
        break;
      }

      if (pressed('h')) {
        if (attractMode === 'demo') {
          demo = null;
          attractMode = 'title';
          showAttract(true);
          setPhase('attract');
        }
        setRules(true);
        break;
      }
      if (pressed('g')) {
        if (signedIn()) signOut();
        else signInGoogle();
      }
      if (pressed('l')) {
        if (ledgerText) ledgerText = null;
        else {
          ledgerText = 'WORLD DOMINATION LEDGER\nCONSULTING THE HOUSE…';
          void topLedger().then((rows) => {
            ledgerText =
              'WORLD DOMINATION LEDGER\n' +
              (rows.length
                ? rows.map((r, i) => `${i + 1}. ${r.player} — ${dollars(r.career_winnings)} (${r.wins}W)`).join('\n')
                : 'NO CONQUERORS YET');
          });
        }
      }

      // Lobby keys work from the title AND mid-demonstration.
      if (pressed('o') || pressed('j') || pressed('escape') || pressed('n')) {
        if (attractMode === 'demo') {
          demo = null;
          attractMode = 'title';
          showAttract(true);
          setPhase('attract');
        }
        if (pressed('n')) {
          if (!mpWait) {
            naming = true;
            nameBuf = playerName === '007' ? '' : playerName;
          }
        } else if (pressed('o')) {
          if (mpWait === 'hosting') {
            mpWait = null;
            netLeave();
          } else {
            tableCode = makeTableCode();
            netJoin(tableCode);
            mpWait = 'hosting';
          }
          stopHello();
        } else if (pressed('j')) {
          stopHello();
          netLeave();
          mpWait = 'entering';
          codeBuf = '';
        } else {
          mpWait = null;
          stopHello();
          netLeave();
        }
      }
      if (pressed('enter') && !mpWait) {
        initAudio();
        startMatch();
      }
      break;
    }
    case 'intro': {
      setIntro(Math.min(1, phaseT / 3));
      // No skip in multiplayer — both clients must enter the duel in lockstep.
      if (phaseT > 3.0 || (!mp && pressed('enter'))) beginDuel();
      break;
    }
    case 'duel': {
      if (!duel || !largo) break;
      const r = matchRounds[roundIdx];
      const pad = pollPad();
      if (mouse.moved) {
        mouse.moved = false;
        lastDevice = 'mouse';
      }
      if (pad.aimDX || pad.aimDY) {
        lastDevice = 'pad';
        padRet.x = Math.max(-1.3, Math.min(1.3, padRet.x + pad.aimDX * 2.4 * SIM_DT));
        padRet.y = Math.max(-1.0, Math.min(1.0, padRet.y + pad.aimDY * 2.4 * SIM_DT));
      }
      const w = ndcToWorld(mouse.x, mouse.y);
      currentReticle = lastDevice === 'pad' ? { x: padRet.x, y: padRet.y } : w;
      const fire = consumeFire();
      const myIn: SideInputs = {
        shieldDir:
          (key('d') || key('arrowright') ? 1 : 0) +
          (key('a') || key('arrowleft') ? -1 : 0) +
          pad.shieldDir,
        fireAt: fire ? { x: w.x, y: w.y } : pad.fire ? { x: padRet.x, y: padRet.y } : null,
        launch: pressed('1') || pressed('2') || pressed('e') || pad.launch,
      };
      myIn.shieldDir = Math.max(-1, Math.min(1, myIn.shieldDir));

      let inputs: Record<Side, SideInputs>;
      if (mp) {
        const target = duelTick + INPUT_DELAY;
        if (!inBuf[mp.mySide].has(target)) {
          inBuf[mp.mySide].set(target, myIn);
          // Send every other tick — halves message rate; redundancy covers the gap.
          if (target % 2 === 0) sendInputWindow(target);
        }
        const a = inBuf.p.get(duelTick);
        const b = inBuf.l.get(duelTick);
        if (!a || !b) {
          stallT += dt;
          // Keep re-broadcasting our window while stalled or a mutual stall deadlocks.
          if (stallT > stallResendAt) {
            sendInputWindow(target);
            stallResendAt = stallT + 0.3;
          }
          if (stallT > 0.6) setTxt(ui.sub, 'AWAITING OPPONENT');
          if (stallT > 20) {
            finishMatch(true, 'OPPONENT CONNECTION LOST');
            leaveMp();
          }
          break;
        }
        if (stallT > 0.6) setTxt(ui.sub, '');
        stallT = 0;
        stallResendAt = 0;
        inputs = { p: a, l: b };
      } else {
        inputs = { p: myIn, l: largo.think(duel) };
      }
      step(duel, SIM_DT, inputs, roundIdx, rng);
      duelTick++;
      if (mp && duelTick % 120 === 0) {
        for (const buf of [inBuf.p, inBuf.l]) {
          for (const k of buf.keys()) if (k < duelTick - 60) buf.delete(k);
        }
      }
      if (mp && duelTick % 300 === 0 && duel && !duel.over) {
        const sum =
          duel.strikes.p * 1e6 + duel.strikes.l * 1e3 + duel.missiles.length * 10 + duel.targets.length;
        mySums.set(duelTick, sum);
        netSend({ t: 'mp-sum', sid: mp.seed, tick: duelTick, sum });
        for (const k of mySums.keys()) if (k < duelTick - 1200) mySums.delete(k);
      }

      for (const ev of duel.events) {
        if (ev === 'blip') sfx.blip();
        else if (ev === 'zap') sfx.zap();
        else if (ev === 'miss') sfx.miss();
        else if (ev === 'launch') sfx.launch();
        else if (ev === 'boom') {
          sfx.boom();
          shake(0.05, 0.4);
          rumble(0.4, 200);
        }
      }

      // Opponent launched — warn the defender.
      const oppSide: Side = my() === 'p' ? 'l' : 'p';
      if (duel.ammo[oppSide] < prevLargoAmmo) {
        prevLargoAmmo = duel.ammo[oppSide];
        warnT = 1.4;
        sfx.warn();
      }
      if (warnT > 0) {
        warnT -= SIM_DT;
        setTxt(
          ui.center,
          warnT > 0 ? (roundIdx === 0 && !mp ? 'MISSILE INBOUND\nA/D — SWING YOUR SHIELD' : 'MISSILE INBOUND') : '',
        );
      }

      if (!mp && !quipShown && duel.time > 18 && warnT <= 0) {
        quipShown = true;
        ui.taunt.textContent = pick(TAUNTS.duel, rng);
      }

      const left = Math.max(0, duel.duration - duel.time);
      if (left <= 5.4 && Math.floor(left) !== lastBeepSecond) {
        lastBeepSecond = Math.floor(left);
        sfx.tick();
      }
      const ammo = '▲'.repeat(duel.ammo.p) + '△'.repeat(2 - duel.ammo.p);
      const ammoL = '▲'.repeat(duel.ammo.l) + '△'.repeat(2 - duel.ammo.l);
      setHTML(
        ui.marquee,
        `${r.name} — ${dollars(r.stake)}` +
          `<span class="stake">${ammo} ${names.p} ${duel.strikes.p} — ${duel.strikes.l} ${names.l} ${ammoL} · ${left.toFixed(0)}s</span>`,
      );

      if (duel.over && duel.loser) endRound(duel.loser, duel.reason);
      break;
    }
    case 'shock': {
      if (!shock) break;
      shock.t += dt;
      const rate = shock.drain / shock.dur;
      const meVictim = shock.victim === my();

      if (meVictim) {
        const s = shock.victim;
        const gripping = key(' ') || pollPad().grip || (phoneConnected(s) && phoneHeld(s));
        if (!gripping && shock.t > 0.25) shock.outcome = 'release';
        endurance[s] -= rate * dt;
        if (endurance[s] <= 0) shock.outcome = 'collapse';
        ui.flash.style.opacity = String(0.25 + 0.3 * Math.abs(Math.sin(shock.t * 26)));
        shake(0.06, 0.2);
        if (shock.t > shock.rumbleAt) {
          rumble(Math.min(1, 0.4 + roundIdx * 0.2), 180);
          shock.rumbleAt = shock.t + 0.2;
        }
        if (shock.t >= shock.dur && !shock.outcome) shock.outcome = 'endured';
        if (mp && shock.outcome) {
          // Repeat the verdict — a single lost message must not desync the match result.
          const verdict = { t: 'mp-shock', sid: mp.seed, outcome: shock.outcome, endurance: endurance[s] };
          netSend(verdict);
          setTimeout(() => netSend(verdict), 400);
          setTimeout(() => netSend(verdict), 900);
        }
      } else {
        endurance[shock.victim] -= rate * dt;
        ui.flash.style.opacity = String(0.08 + 0.1 * Math.abs(Math.sin(shock.t * 18)));
        if (mp) {
          if (mpShockResult) {
            endurance[shock.victim] = mpShockResult.endurance;
            shock.outcome = mpShockResult.outcome;
            mpShockResult = null;
          } else if (shock.t > shock.dur + 4) {
            shock.outcome = 'endured'; // opponent silent — assume survival, stall handling catches the rest
          }
        } else {
          if (endurance.l <= 0) shock.outcome = 'collapse';
          if (shock.t >= shock.dur && !shock.outcome) shock.outcome = 'endured';
        }
      }
      fmtCash();

      if (shock.outcome === 'release' || shock.outcome === 'collapse') {
        const iLost = shock.victim === my();
        const headline = iLost
          ? shock.outcome === 'release'
            ? 'YOU RELEASED YOUR GRIPS'
            : 'YOU COLLAPSED'
          : mp
            ? shock.outcome === 'release'
              ? 'YOUR OPPONENT RELEASES'
              : 'YOUR OPPONENT COLLAPSES'
            : 'LARGO COLLAPSES';
        finishMatch(!iLost, headline);
        shock = null;
        break;
      }
      if (shock.outcome === 'endured') {
        afterShock();
      }
      break;
    }
    case 'over': {
      if (pressed('enter') && phaseT > 1) {
        if (mp) {
          // Back to the title — a fresh table needs a fresh handshake.
          leaveMp();
          attractMode = 'title';
          showAttract(true);
          setPhase('attract');
        } else {
          startMatch();
        }
      }
      break;
    }
  }

  fmtCash();
}

// --- bootstrap ---
const canvas = document.getElementById('game') as HTMLCanvasElement;
initRender(canvas);
initInput(canvas, () => initAudio());
initHaptics();
netInit();
initAuth();
netOn((m: NetMsg) => {
  switch (m.t) {
    case 'mp-hello': {
      if (mpWait === 'hosting' && phase === 'attract') {
        const seed = (Math.random() * 1e9) | 0;
        netSend({ t: 'mp-start', seed, name: playerName });
        beginMpMatch('host', seed, typeof m.name === 'string' ? m.name : undefined);
      } else if (mp && mp.role === 'host' && phase !== 'over') {
        // Guest missed the first mp-start (lossy channel) — repeat it.
        netSend({ t: 'mp-start', seed: mp.seed, name: playerName });
      }
      break;
    }
    case 'mp-start': {
      if (mpWait === 'joining' && typeof m.seed === 'number') {
        beginMpMatch('guest', m.seed, typeof m.name === 'string' ? m.name : undefined);
      }
      break;
    }
    case 'mp-in': {
      const side = m.side as Side;
      if (
        mp && m.sid === mp.seed &&
        side !== mp.mySide && (side === 'p' || side === 'l') &&
        typeof m.from === 'number' && Array.isArray(m.ins)
      ) {
        for (let i = 0; i < m.ins.length; i++) {
          const tk = m.from + i;
          if (!inBuf[side].has(tk)) inBuf[side].set(tk, m.ins[i] as SideInputs);
        }
      }
      break;
    }
    case 'mp-shock': {
      if (mp && m.sid === mp.seed && typeof m.endurance === 'number') {
        mpShockResult = {
          outcome: m.outcome as 'release' | 'collapse' | 'endured',
          endurance: m.endurance,
        };
      }
      break;
    }
    case 'mp-sum': {
      if (mp && m.sid === mp.seed && typeof m.tick === 'number' && typeof m.sum === 'number') {
        const mine = mySums.get(m.tick);
        if (mine !== undefined && mine !== m.sum) {
          ui.taunt.textContent = 'SYNC DRIFT DETECTED — RESULT MAY DIVERGE';
        }
      }
      break;
    }
    case 'mp-bye': {
      if (mp && phase !== 'over') {
        finishMatch(true, 'YOUR OPPONENT LEFT THE TABLE');
        leaveMp();
      }
      break;
    }
  }
});
showAttract(true);
setMuted(settings.muted);
setCrt(settings.crt);
fmtCash();

// Grip-station join QR for the title screen — dev server only (the relay and
// grip.html don't exist on the published build).
// First visit: show the rules of the table before anything else.
try {
  if (!localStorage.getItem('dom.seenRules')) setRules(true);
} catch {}

fetch('/grip-info')
  .then((r) => (r.ok ? r.json() : Promise.reject(new Error('no relay'))))
  .then((info: { ip: string; port: number }) => {
    const url = `http://${info.ip}:${info.port}/grip.html`;
    $('joinUrl').textContent = url.replace('http://', '');
    gripInfoOk = true;
    return QRCode.toCanvas($('joinQr') as HTMLCanvasElement, url, {
      width: 92,
      margin: 1,
      color: { dark: '#ffd24aff', light: '#00000000' },
    });
  })
  .catch(() => {});

let last = performance.now();
let acc = 0;
function pump(now: number): void {
  const dt = Math.min(0.1, (now - last) / 1000);
  last = now;
  acc += dt;
  while (acc >= SIM_DT) {
    tick(SIM_DT);
    acc -= SIM_DT;
  }
  const reticle = phase === 'duel' ? currentReticle : null;
  const simToDraw =
    phase === 'duel' || phase === 'shock' || phase === 'intro'
      ? duel
      : phase === 'attract' && demo
        ? demo.duel
        : null;
  drawFrame(simToDraw, reticle, dt);
}
function frame(now: number): void {
  pump(now);
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
// rAF stops when the window is occluded; keep the sim alive via interval fallback.
setInterval(() => {
  const now = performance.now();
  if (now - last > 45) pump(now);
}, 33);
resize();

// Debug/verification hook (harmless in play; used by automated checks).
(window as unknown as Record<string, unknown>).__dom = {
  get phase() { return phase; },
  get duel() { return duel; },
  get cash() { return cash; },
  get endurance() { return endurance; },
  get attractMode() { return attractMode; },
  get demo() { return demo; },
  get settings() { return settings; },
  get phone() { return { connected: phoneConnected('p'), held: phoneHeld('p') }; },
  get mp() { return mp ? { role: mp.role, mySide: mp.mySide, seed: mp.seed, duelTick, stallT } : null; },
  get mpWait() { return mpWait; },
  get renderStats() { return renderStats(); },
  get ladder() { return matchRounds.map((r) => `${r.name} ${r.stake}`); },
  skipToEnd() { if (duel) duel.time = duel.duration - 0.3; },
};
