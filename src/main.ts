import { ROUNDS, dollars } from './countries';
import { initInput, keys, mouse, consumeFire, key, rumble } from './input';
import {
  newDuel, step, mulberry32,
  type DuelState, type Side, type SideInputs,
} from './sim';
import { Largo, TAUNTS, pick } from './ai';
import {
  initRender, showAttract, buildRound, drawFrame, ndcToWorld, shake, resize, setIntro,
} from './render';
import {
  initAudio, sfx, startDrone, stopDrone, startAlarm, stopAlarm, announce,
  startMusic, stopMusic,
} from './audio';

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

const SIM_DT = 1 / 60;
let phase: Phase = 'attract';
let phaseT = 0;
let roundIdx = 0;
let cash: Record<Side, number> = { p: 0, l: 0 };
let endurance: Record<Side, number> = { p: 100, l: 100 };
let duel: DuelState | null = null;
let largo: Largo | null = null;
let rng = mulberry32(7);
let prevKeys = new Set<string>();
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

function pressed(k: string): boolean {
  return keys.has(k) && !prevKeys.has(k);
}

function setPhase(p: Phase): void {
  phase = p;
  phaseT = 0;
}

function fmtCash(): void {
  ui.cashP.innerHTML = `<span class="label">007</span>${dollars(cash.p)}`;
  ui.cashL.innerHTML = `<span class="label">LARGO</span>${dollars(cash.l)}`;
  ui.endP.style.width = `${Math.max(0, endurance.p)}%`;
  ui.endL.style.width = `${Math.max(0, endurance.l)}%`;
}

function startMatch(): void {
  roundIdx = 0;
  cash = { p: 0, l: 0 };
  endurance = { p: 100, l: 100 };
  matchWon = false;
  rng = mulberry32((Math.random() * 1e9) | 0); // match seed; sim itself stays deterministic per seed
  startRound();
}

function startRound(): void {
  const r = ROUNDS[roundIdx];
  duel = newDuel(r, roundIdx, rng);
  largo = new Largo(roundIdx, rng);
  buildRound(duel.outline);
  showAttract(false);
  ui.center.textContent = r.name;
  ui.sub.textContent = `FOR ${dollars(r.stake)}`;
  ui.marquee.innerHTML = '';
  ui.taunt.textContent =
    roundIdx === 0 ? pick(TAUNTS.intro, rng) : roundIdx === 3 ? TAUNTS.finalRound[0] : '';
  ui.help.textContent = 'MOUSE: AIM+FIRE LASER · A/D: SHIELD · 1,2: MISSILES · NEVER RELEASE THE GRIPS';
  announce(`${r.name}. ${r.stake.toLocaleString('en-US')} dollars.`);
  warnT = 0;
  prevLargoAmmo = 2;
  lastBeepSecond = -1;
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
  const r = ROUNDS[roundIdx];
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
  ui.flash.style.background = loser === 'p' ? '#ff2200' : '#ff7a00';
  ui.center.textContent =
    loser === 'p' ? `${r.name} FALLS TO LARGO` : `${r.name} IS YOURS`;
  ui.sub.textContent = loser === 'p' ? 'HOLD [SPACE] — ENDURE THE PAIN' : '';
  ui.taunt.textContent =
    loser === 'p' ? pick(TAUNTS.playerShock, rng) : pick(TAUNTS.largoShock, rng);
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
  ui.center.textContent = `${headline}\n${won ? 'THE WORLD IS YOURS' : 'DOMINATION: LARGO'}`;
  ui.sub.textContent = 'PRESS ENTER TO PLAY AGAIN';
  ui.help.textContent = `FINAL — 007 ${dollars(cash.p)} · LARGO ${dollars(cash.l)}`;
  if (won) sfx.win();
  setPhase('over');
}

function afterShock(): void {
  stopAlarm();
  ui.flash.style.opacity = '0';
  const wasVictim = shock!.victim;
  shock = null;
  if (roundIdx === 3) {
    // Ladder complete — the world round decides it.
    finishMatch(wasVictim === 'l', wasVictim === 'l' ? 'LARGO ENDURES, BUT THE WORLD IS LOST' : 'YOU ENDURED — BUT THE WORLD IS HIS');
    return;
  }
  roundIdx++;
  startRound();
}

function tick(dt: number): void {
  phaseT += dt;

  switch (phase) {
    case 'attract': {
      ui.center.textContent = 'DOMINATION';
      ui.sub.textContent = 'PRESS ENTER';
      ui.taunt.textContent = '';
      ui.help.textContent = 'A GAME OF POWER · THE LOSER FEELS PAIN · SPAIN $9,000 — THE WORLD $325,000';
      ui.marquee.innerHTML = '';
      if (pressed('enter')) {
        initAudio();
        startMatch();
      }
      break;
    }
    case 'intro': {
      setIntro(Math.min(1, phaseT / 3));
      if (phaseT > 3.0 || pressed('enter')) beginDuel();
      break;
    }
    case 'duel': {
      if (!duel || !largo) break;
      const r = ROUNDS[roundIdx];
      const fire = consumeFire();
      const w = ndcToWorld(mouse.x, mouse.y);
      const pInputs: SideInputs = {
        shieldDir: (key('d') || key('arrowright') ? 1 : 0) + (key('a') || key('arrowleft') ? -1 : 0),
        fireAt: fire ? { x: w.x, y: w.y } : null,
        launch: pressed('1') || pressed('2') || pressed('e'),
      };
      const inputs: Record<Side, SideInputs> = { p: pInputs, l: largo.think(duel) };
      step(duel, SIM_DT, inputs, roundIdx, rng);

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

      // Largo launched — warn the defender.
      if (duel.ammo.l < prevLargoAmmo) {
        prevLargoAmmo = duel.ammo.l;
        warnT = 1.4;
        sfx.warn();
      }
      if (warnT > 0) {
        warnT -= SIM_DT;
        ui.center.textContent = 'MISSILE INBOUND';
        if (warnT <= 0) ui.center.textContent = '';
      }

      const left = Math.max(0, duel.duration - duel.time);
      if (left <= 5.4 && Math.floor(left) !== lastBeepSecond) {
        lastBeepSecond = Math.floor(left);
        sfx.tick();
      }
      const ammo = '▲'.repeat(duel.ammo.p) + '△'.repeat(2 - duel.ammo.p);
      const ammoL = '▲'.repeat(duel.ammo.l) + '△'.repeat(2 - duel.ammo.l);
      ui.marquee.innerHTML =
        `${r.name} — ${dollars(r.stake)}` +
        `<span class="stake">${ammo} 007 ${duel.strikes.p} — ${duel.strikes.l} LARGO ${ammoL} · ${left.toFixed(0)}s</span>`;

      if (duel.over && duel.loser) endRound(duel.loser, duel.reason);
      break;
    }
    case 'shock': {
      if (!shock) break;
      shock.t += dt;
      const rate = shock.drain / shock.dur;

      if (shock.victim === 'p') {
        if (!key(' ') && shock.t > 0.25) shock.outcome = 'release';
        endurance.p -= rate * dt;
        if (endurance.p <= 0) shock.outcome = 'collapse';
        ui.flash.style.opacity = String(0.25 + 0.3 * Math.abs(Math.sin(shock.t * 26)));
        shake(0.06, 0.2);
        if (shock.t > shock.rumbleAt) {
          rumble(Math.min(1, 0.4 + roundIdx * 0.2), 180);
          shock.rumbleAt = shock.t + 0.2;
        }
      } else {
        endurance.l -= rate * dt;
        ui.flash.style.opacity = String(0.08 + 0.1 * Math.abs(Math.sin(shock.t * 18)));
        if (endurance.l <= 0) shock.outcome = 'collapse';
      }
      fmtCash();

      if (shock.outcome === 'release' || (shock.outcome === 'collapse' && shock.victim === 'p')) {
        finishMatch(false, shock.outcome === 'release' ? 'YOU RELEASED YOUR GRIPS' : 'YOU COLLAPSED');
        shock = null;
        break;
      }
      if (shock.outcome === 'collapse' && shock.victim === 'l') {
        finishMatch(true, 'LARGO COLLAPSES');
        shock = null;
        break;
      }
      if (shock.t >= shock.dur) {
        shock.outcome = 'endured';
        afterShock();
      }
      break;
    }
    case 'over': {
      if (pressed('enter') && phaseT > 1) startMatch();
      break;
    }
  }

  fmtCash();
  prevKeys = new Set(keys);
}

// --- bootstrap ---
const canvas = document.getElementById('game') as HTMLCanvasElement;
initRender(canvas);
initInput(canvas, () => initAudio());
showAttract(true);
fmtCash();

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
  const reticle = phase === 'duel' ? ndcToWorld(mouse.x, mouse.y) : null;
  drawFrame(phase === 'duel' || phase === 'shock' || phase === 'intro' ? duel : null, reticle, dt);
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
  skipToEnd() { if (duel) duel.time = duel.duration - 0.3; },
};
