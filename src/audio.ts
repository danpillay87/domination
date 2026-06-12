// All sound synthesised with WebAudio. Announcer via SpeechSynthesis.
// Chain: voice → master gain → compressor → out. Every voice gets an attack
// ramp (no zero-attack clicks) and soft waveforms at low gain (no clip fuzz).

let ctx: AudioContext | null = null;
let master: GainNode | null = null;
let droneNodes: AudioScheduledSourceNode[] = [];
let alarmTimer: number | null = null;
let noiseBuf: AudioBuffer | null = null; // shared — never re-allocated per hit

let muted = false;

export function initAudio(): void {
  if (ctx) return;
  ctx = new AudioContext();
  const comp = ctx.createDynamicsCompressor();
  comp.threshold.value = -20;
  comp.knee.value = 12;
  comp.ratio.value = 6;
  comp.attack.value = 0.003;
  comp.release.value = 0.2;
  master = ctx.createGain();
  master.gain.value = muted ? 0 : 0.35;
  master.connect(comp).connect(ctx.destination);

  noiseBuf = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
  const d = noiseBuf.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
}

function noise(dur: number, filterType: BiquadFilterType, filterHz: number, vol: number, sweepTo?: number): void {
  if (!ctx || !master || !noiseBuf) return;
  const t = ctx.currentTime;
  const src = ctx.createBufferSource();
  src.buffer = noiseBuf;
  const f = ctx.createBiquadFilter();
  f.type = filterType;
  f.frequency.setValueAtTime(filterHz, t);
  if (sweepTo) f.frequency.exponentialRampToValueAtTime(sweepTo, t + dur);
  const g = ctx.createGain();
  g.gain.setValueAtTime(0.0001, t);
  g.gain.linearRampToValueAtTime(vol, t + 0.008);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  src.connect(f).connect(g).connect(master);
  src.start(t, Math.random() * 0.5, dur + 0.05);
}

export function setMuted(b: boolean): void {
  muted = b;
  if (master) master.gain.value = b ? 0 : 0.35;
  if (b) {
    try {
      speechSynthesis.cancel();
    } catch {}
  }
}

function env(
  freq: number,
  type: OscillatorType,
  dur: number,
  vol: number,
  slideTo?: number,
  filterHz?: number,
): void {
  if (!ctx || !master) return;
  const t = ctx.currentTime;
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.type = type;
  o.frequency.setValueAtTime(freq, t);
  if (slideTo !== undefined) o.frequency.exponentialRampToValueAtTime(Math.max(20, slideTo), t + dur);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.linearRampToValueAtTime(vol, t + 0.012);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  let head: AudioNode = o;
  if (filterHz) {
    const f = ctx.createBiquadFilter();
    f.type = 'lowpass';
    f.frequency.value = filterHz;
    o.connect(f);
    head = f;
  }
  head.connect(g);
  g.connect(master);
  o.start(t);
  o.stop(t + dur + 0.05);
}

export const sfx = {
  blip: () => env(660, 'triangle', 0.06, 0.07),
  zap: () => env(1400, 'triangle', 0.13, 0.11, 180),
  miss: () => env(220, 'triangle', 0.09, 0.05, 110),
  launch: () => env(110, 'triangle', 0.7, 0.16, 38),
  boom: () => noise(0.42, 'lowpass', 500, 0.4, 120),
  win: () => {
    env(523, 'triangle', 0.14, 0.1);
    setTimeout(() => env(659, 'triangle', 0.14, 0.1), 140);
    setTimeout(() => env(784, 'triangle', 0.3, 0.1), 280);
  },
  tick: () => env(980, 'triangle', 0.05, 0.06),
  warn: () => {
    env(520, 'triangle', 0.1, 0.09);
    setTimeout(() => env(520, 'triangle', 0.1, 0.09), 130);
  },
};

function hat(): void {
  noise(0.03, 'highpass', 6000, 0.03);
}

// Original 8-step bass figure, transposed up a semitone per ladder rung,
// tempo creeping up with the stakes.
const PATTERN = [0, 0, 7, 0, 3, 0, 5, -2];
let musicTimer: number | null = null;

export function startMusic(round: number): void {
  stopMusic();
  if (!ctx) return;
  const root = 110 * Math.pow(2, round / 12);
  const stepMs = 60000 / (96 + round * 10) / 2;
  let stepIdx = 0;
  musicTimer = window.setInterval(() => {
    const st = PATTERN[stepIdx % 8];
    env(root * Math.pow(2, st / 12), 'triangle', 0.18, 0.09, undefined, 700);
    if (stepIdx % 2 === 1) hat();
    stepIdx++;
  }, stepMs);
}

export function stopMusic(): void {
  if (musicTimer !== null) window.clearInterval(musicTimer);
  musicTimer = null;
}

// Title theme — original 8-bar loop: Am / F / Dm / E around A2, kick on the
// downbeats, offbeat hats, octave-lifting bass, chord-tone arp on 16ths.
const TITLE_PROG = [
  { root: 0, minor: true },   // Am
  { root: -4, minor: false }, // F
  { root: -7, minor: true },  // Dm
  { root: -5, minor: false }, // E
];
let titleTimer: number | null = null;

export function startTitleMusic(): void {
  if (titleTimer !== null || !ctx) return;
  const sixteenth = 60000 / 92 / 4;
  let step = 0;
  titleTimer = window.setInterval(() => {
    const bar = Math.floor(step / 16);
    const chord = TITLE_PROG[Math.floor(bar / 2)];
    const root = 110 * Math.pow(2, chord.root / 12);
    const s = step % 16;
    if (s === 0 || s === 8) env(95, 'sine', 0.13, 0.16, 38);
    if (s % 4 === 2) noise(0.03, 'highpass', 7000, 0.018);
    if (s % 2 === 0) {
      const oct = s === 12 ? 12 : 0;
      env(root * Math.pow(2, oct / 12), 'triangle', 0.17, 0.08, undefined, 500);
    }
    const arp = chord.minor ? [0, 3, 7, 12] : [0, 4, 7, 12];
    const tone = arp[s % 4] + (s % 8 >= 4 ? 12 : 0);
    env(root * 4 * Math.pow(2, tone / 12), 'triangle', 0.11, 0.032, undefined, 2400);
    step = (step + 1) % 128;
  }, sixteenth);
}

export function stopTitleMusic(): void {
  if (titleTimer !== null) window.clearInterval(titleTimer);
  titleTimer = null;
}

export function startDrone(round: number): void {
  stopDrone();
  if (!ctx || !master) return;
  const t = ctx.currentTime;
  const base = 55 * Math.pow(2, round / 12); // up a semitone per rung
  const f = ctx.createBiquadFilter();
  f.type = 'lowpass';
  f.frequency.value = 130;
  const g = ctx.createGain();
  g.gain.setValueAtTime(0.0001, t);
  g.gain.linearRampToValueAtTime(0.05, t + 0.8);
  f.connect(g).connect(master);

  for (const mul of [1, 1.004]) {
    const o = ctx.createOscillator();
    o.type = 'triangle';
    o.frequency.value = base * mul;
    o.connect(f);
    o.start(t);
    droneNodes.push(o);
  }
  // Slow filter sweep so the bed breathes instead of buzzing.
  const lfo = ctx.createOscillator();
  const lfoGain = ctx.createGain();
  lfo.frequency.value = 0.09;
  lfoGain.gain.value = 35;
  lfo.connect(lfoGain).connect(f.frequency);
  lfo.start(t);
  droneNodes.push(lfo);
}

export function stopDrone(): void {
  for (const n of droneNodes) {
    try {
      n.stop();
    } catch {}
  }
  droneNodes = [];
}

export function startAlarm(): void {
  if (alarmTimer !== null) return;
  let hi = true;
  const beep = () => {
    env(hi ? 620 : 440, 'triangle', 0.16, 0.09);
    hi = !hi;
  };
  beep();
  alarmTimer = window.setInterval(beep, 250);
}

export function stopAlarm(): void {
  if (alarmTimer !== null) window.clearInterval(alarmTimer);
  alarmTimer = null;
}

export function announce(text: string): void {
  if (muted) return;
  try {
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 0.88;
    u.pitch = 0.7;
    u.volume = 0.75;
    speechSynthesis.speak(u);
  } catch {}
}
