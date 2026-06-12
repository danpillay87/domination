// All sound synthesised with WebAudio. Announcer via SpeechSynthesis.
// Chain: voice → master gain → compressor → out. Every voice gets an attack
// ramp (no zero-attack clicks) and soft waveforms at low gain (no clip fuzz).

let ctx: AudioContext | null = null;
let master: GainNode | null = null;
let droneNodes: AudioScheduledSourceNode[] = [];
let alarmTimer: number | null = null;

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
  master.gain.value = 0.35;
  master.connect(comp).connect(ctx.destination);
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
  boom: () => {
    if (!ctx || !master) return;
    const t = ctx.currentTime;
    const buf = ctx.createBuffer(1, ctx.sampleRate * 0.45, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / d.length) ** 2;
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const f = ctx.createBiquadFilter();
    f.type = 'lowpass';
    f.frequency.setValueAtTime(500, t);
    f.frequency.exponentialRampToValueAtTime(120, t + 0.4);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(0.4, t + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.42);
    src.connect(f).connect(g).connect(master);
    src.start(t);
  },
  win: () => {
    env(523, 'triangle', 0.14, 0.1);
    setTimeout(() => env(659, 'triangle', 0.14, 0.1), 140);
    setTimeout(() => env(784, 'triangle', 0.3, 0.1), 280);
  },
};

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
  try {
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 0.88;
    u.pitch = 0.7;
    u.volume = 0.75;
    speechSynthesis.speak(u);
  } catch {}
}
