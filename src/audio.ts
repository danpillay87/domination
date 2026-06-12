// All sound synthesised with WebAudio. Announcer via SpeechSynthesis.

let ctx: AudioContext | null = null;
let master: GainNode | null = null;
let droneOsc: OscillatorNode | null = null;
let droneGain: GainNode | null = null;
let alarmTimer: number | null = null;

export function initAudio(): void {
  if (ctx) return;
  ctx = new AudioContext();
  master = ctx.createGain();
  master.gain.value = 0.5;
  master.connect(ctx.destination);
}

function env(freq: number, type: OscillatorType, dur: number, vol: number, slideTo?: number): void {
  if (!ctx || !master) return;
  const t = ctx.currentTime;
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.type = type;
  o.frequency.setValueAtTime(freq, t);
  if (slideTo !== undefined) o.frequency.exponentialRampToValueAtTime(Math.max(20, slideTo), t + dur);
  g.gain.setValueAtTime(vol, t);
  g.gain.exponentialRampToValueAtTime(0.001, t + dur);
  o.connect(g).connect(master);
  o.start(t);
  o.stop(t + dur + 0.05);
}

export const sfx = {
  blip: () => env(660, 'square', 0.06, 0.12),
  zap: () => env(1400, 'sawtooth', 0.12, 0.18, 180),
  miss: () => env(220, 'square', 0.08, 0.08, 110),
  launch: () => env(110, 'sawtooth', 0.7, 0.22, 40),
  boom: () => {
    if (!ctx || !master) return;
    const t = ctx.currentTime;
    const buf = ctx.createBuffer(1, ctx.sampleRate * 0.4, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / d.length) ** 2;
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const f = ctx.createBiquadFilter();
    f.type = 'lowpass';
    f.frequency.value = 420;
    const g = ctx.createGain();
    g.gain.value = 0.5;
    src.connect(f).connect(g).connect(master);
    src.start(t);
  },
  win: () => {
    env(523, 'square', 0.12, 0.15);
    setTimeout(() => env(659, 'square', 0.12, 0.15), 130);
    setTimeout(() => env(784, 'square', 0.25, 0.15), 260);
  },
};

export function startDrone(round: number): void {
  stopDrone();
  if (!ctx || !master) return;
  droneOsc = ctx.createOscillator();
  droneGain = ctx.createGain();
  const f = ctx.createBiquadFilter();
  f.type = 'lowpass';
  f.frequency.value = 240;
  droneOsc.type = 'sawtooth';
  droneOsc.frequency.value = 55 * Math.pow(2, round / 12); // up a semitone per rung
  droneGain.gain.value = 0.06;
  droneOsc.connect(f).connect(droneGain).connect(master);
  droneOsc.start();
}

export function stopDrone(): void {
  try {
    droneOsc?.stop();
  } catch {}
  droneOsc = null;
}

export function startAlarm(): void {
  if (alarmTimer !== null) return;
  let hi = true;
  const beep = () => {
    env(hi ? 640 : 440, 'square', 0.14, 0.2);
    hi = !hi;
  };
  beep();
  alarmTimer = window.setInterval(beep, 180);
}

export function stopAlarm(): void {
  if (alarmTimer !== null) window.clearInterval(alarmTimer);
  alarmTimer = null;
}

export function announce(text: string): void {
  try {
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 0.82;
    u.pitch = 0.5;
    u.volume = 0.9;
    speechSynthesis.speak(u);
  } catch {}
}
