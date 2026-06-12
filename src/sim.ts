// Deterministic duel simulation. Pure data + step() — no rendering, no DOM.

import { pointInPoly, type Round } from './countries';

export type Side = 'p' | 'l';

export interface Target {
  id: number;
  x: number;
  y: number;
  age: number;
  ttl: number;
}

export interface Missile {
  id: number;
  owner: Side;
  t: number; // 0..1
  flight: number; // seconds
  x0: number; y0: number;
  cx: number; cy: number;
  x1: number; y1: number;
  x: number; y: number;
  trail: [number, number][];
}

export interface Beam {
  side: Side;
  x: number;
  y: number;
  life: number;
  hit: boolean;
}

export interface Explosion { x: number; y: number; age: number; big: boolean }

export interface SideInputs {
  shieldDir: number; // -1 | 0 | 1
  fireAt: { x: number; y: number } | null;
  launch: boolean;
}

export interface DuelState {
  time: number;
  duration: number;
  outline: [number, number][]; // scaled to map space
  targets: Target[];
  missiles: Missile[];
  beams: Beam[];
  explosions: Explosion[];
  strikes: Record<Side, number>;
  ammo: Record<Side, number>;
  shield: Record<Side, number>; // angle, 0 = facing the map
  cooldown: Record<Side, number>;
  spawnIn: number;
  nextId: number;
  crackTimer: number; // round-3 Largo endurance crack
  over: boolean;
  loser: Side | null;
  reason: 'missile' | 'time' | 'crack' | null;
  events: string[]; // sfx events emitted this tick
}

export const MAP_W = 1.05;
export const MAP_H = 0.78;
export const BASE: Record<Side, { x: number; y: number }> = {
  p: { x: 0, y: -1.18 },
  l: { x: 0, y: 1.18 },
};
export const SHIELD_R = 0.3;
export const SHIELD_HALF = 0.62; // radians
export const SHIELD_MAX = 1.15;
export const TARGET_R = 0.085;

export function forward(side: Side): number {
  return side === 'p' ? 1 : -1;
}

// Angle of a point relative to a base, 0 = straight toward the map.
export function angleFrom(side: Side, x: number, y: number): number {
  const b = BASE[side];
  return Math.atan2(x - b.x, (y - b.y) * forward(side));
}

export function shieldPoint(side: Side, angle: number, r = SHIELD_R): [number, number] {
  const b = BASE[side];
  return [b.x + Math.sin(angle) * r, b.y + Math.cos(angle) * r * forward(side)];
}

export function newDuel(round: Round, roundIdx: number, rng: () => number): DuelState {
  const outline = round.outline.map(
    ([x, y]) => [x * MAP_W, y * MAP_H] as [number, number],
  );
  return {
    time: 0,
    duration: 45,
    outline,
    targets: [],
    missiles: [],
    beams: [],
    explosions: [],
    strikes: { p: 0, l: 0 },
    ammo: { p: 2, l: 2 },
    shield: { p: 0, l: 0 },
    cooldown: { p: 0, l: 0 },
    spawnIn: 1.2,
    nextId: 1,
    crackTimer: 0,
    over: false,
    loser: null,
    reason: null,
    events: [],
  };
}

function spawnTarget(s: DuelState, rng: () => number): void {
  for (let i = 0; i < 30; i++) {
    const x = (rng() * 2 - 1) * MAP_W;
    const y = (rng() * 2 - 1) * MAP_H;
    if (pointInPoly(x, y, s.outline)) {
      s.targets.push({ id: s.nextId++, x, y, age: 0, ttl: 4.2 });
      s.events.push('blip');
      return;
    }
  }
}

function launchMissile(s: DuelState, owner: Side, rng: () => number): void {
  if (s.ammo[owner] <= 0) return;
  s.ammo[owner]--;
  const from = BASE[owner];
  const to = BASE[owner === 'p' ? 'l' : 'p'];
  const mid = { x: (from.x + to.x) / 2, y: (from.y + to.y) / 2 };
  const off = (rng() * 2 - 1) * 1.1;
  s.missiles.push({
    id: s.nextId++,
    owner,
    t: 0,
    flight: 5.5,
    x0: from.x, y0: from.y,
    cx: mid.x + off, cy: mid.y,
    x1: to.x, y1: to.y,
    x: from.x, y: from.y,
    trail: [],
  });
  s.events.push('launch');
}

function fireLaser(s: DuelState, side: Side, at: { x: number; y: number }): void {
  if (s.cooldown[side] > 0) return;
  s.cooldown[side] = 0.35;
  let hit = false;
  for (let i = s.targets.length - 1; i >= 0; i--) {
    const t = s.targets[i];
    if (Math.hypot(t.x - at.x, t.y - at.y) < TARGET_R * 1.15) {
      s.targets.splice(i, 1);
      s.strikes[side]++;
      s.explosions.push({ x: t.x, y: t.y, age: 0, big: false });
      hit = true;
      break;
    }
  }
  s.beams.push({ side, x: at.x, y: at.y, life: 0.12, hit });
  s.events.push(hit ? 'zap' : 'miss');
}

export function step(
  s: DuelState,
  dt: number,
  inputs: Record<Side, SideInputs>,
  roundIdx: number,
  rng: () => number,
): void {
  if (s.over) return;
  s.events.length = 0;
  s.time += dt;

  for (const side of ['p', 'l'] as Side[]) {
    const inp = inputs[side];
    s.cooldown[side] = Math.max(0, s.cooldown[side] - dt);
    s.shield[side] = Math.max(
      -SHIELD_MAX,
      Math.min(SHIELD_MAX, s.shield[side] + inp.shieldDir * 2.4 * dt),
    );
    if (inp.fireAt) fireLaser(s, side, inp.fireAt);
    if (inp.launch) launchMissile(s, side, rng);
  }

  // Targets
  s.spawnIn -= dt;
  if (s.spawnIn <= 0 && s.targets.length < 3) {
    spawnTarget(s, rng);
    s.spawnIn = 2.1 + rng() * 0.8;
  }
  for (let i = s.targets.length - 1; i >= 0; i--) {
    s.targets[i].age += dt;
    if (s.targets[i].age > s.targets[i].ttl) s.targets.splice(i, 1);
  }

  // Missiles
  for (let i = s.missiles.length - 1; i >= 0; i--) {
    const m = s.missiles[i];
    m.t += dt / m.flight;
    const t = Math.min(1, m.t);
    const u = 1 - t;
    m.x = u * u * m.x0 + 2 * u * t * m.cx + t * t * m.x1;
    m.y = u * u * m.y0 + 2 * u * t * m.cy + t * t * m.y1;
    m.trail.push([m.x, m.y]);
    if (m.trail.length > 26) m.trail.shift();

    const defender: Side = m.owner === 'p' ? 'l' : 'p';
    const b = BASE[defender];
    const d = Math.hypot(m.x - b.x, m.y - b.y);
    if (d < SHIELD_R + 0.05 && d > SHIELD_R - 0.07) {
      const ang = angleFrom(defender, m.x, m.y);
      if (Math.abs(ang - s.shield[defender]) < SHIELD_HALF) {
        s.missiles.splice(i, 1);
        s.explosions.push({ x: m.x, y: m.y, age: 0, big: true });
        s.events.push('boom');
        continue;
      }
    }
    if (d < 0.09) {
      s.missiles.splice(i, 1);
      s.explosions.push({ x: b.x, y: b.y, age: 0, big: true });
      s.events.push('boom');
      s.over = true;
      s.loser = defender;
      s.reason = 'missile';
      return;
    }
  }

  // Beams + explosions decay
  for (let i = s.beams.length - 1; i >= 0; i--) {
    s.beams[i].life -= dt;
    if (s.beams[i].life <= 0) s.beams.splice(i, 1);
  }
  for (let i = s.explosions.length - 1; i >= 0; i--) {
    s.explosions[i].age += dt;
    if (s.explosions[i].age > 0.5) s.explosions.splice(i, 1);
  }

  // Final round: Largo's nerve can crack if 007 sustains a clear lead.
  if (roundIdx === 3 && s.strikes.p - s.strikes.l >= 2) {
    s.crackTimer += dt;
    if (s.crackTimer > 6) {
      s.over = true;
      s.loser = 'l';
      s.reason = 'crack';
      return;
    }
  } else if (roundIdx === 3) {
    s.crackTimer = Math.max(0, s.crackTimer - dt * 0.5);
  }

  if (s.time >= s.duration) {
    s.over = true;
    s.reason = 'time';
    // Ties go to the house.
    s.loser = s.strikes.p > s.strikes.l ? 'l' : 'p';
  }
}

// Tiny seeded RNG so the sim stays deterministic (replays / lockstep later).
export function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
