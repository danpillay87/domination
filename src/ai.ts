// LARGO — confident, near-optimal early, human enough to beat.

import { angleFrom, type DuelState, type SideInputs } from './sim';

export class Largo {
  private nextFire = 1.5;
  private launchTimes: number[];
  private rng: () => number;
  private roundIdx: number;

  constructor(roundIdx: number, rng: () => number) {
    this.rng = rng;
    this.roundIdx = roundIdx;
    this.launchTimes = [9 + rng() * 7, 24 + rng() * 10];
  }

  think(s: DuelState): SideInputs {
    const out: SideInputs = { shieldDir: 0, fireAt: null, launch: false };

    // Laser: react to targets that have lived past his reaction time.
    const reaction = Math.max(0.35, 0.75 - this.roundIdx * 0.08);
    const accuracy = 0.5 + this.roundIdx * 0.11;
    if (s.time > this.nextFire) {
      const t = s.targets.find((t) => t.age > reaction);
      if (t) {
        const err = this.rng() < accuracy ? 0 : 0.13 + this.rng() * 0.08;
        const a = this.rng() * Math.PI * 2;
        out.fireAt = { x: t.x + Math.cos(a) * err, y: t.y + Math.sin(a) * err };
        this.nextFire = s.time + Math.max(0.55, 1.5 - this.roundIdx * 0.18) + this.rng() * 0.4;
      }
    }

    // Missiles on a loose schedule.
    if (this.launchTimes.length && s.time > this.launchTimes[0] && s.ammo.l > 0) {
      this.launchTimes.shift();
      out.launch = true;
    }

    // Shield: track the nearest inbound missile with lag.
    const inbound = s.missiles.filter((m) => m.owner === 'p');
    if (inbound.length) {
      let best = inbound[0];
      let bestT = best.t;
      for (const m of inbound) if (m.t > bestT) { best = m; bestT = m.t; }
      const want = angleFrom('l', best.x, best.y);
      const diff = want - s.shield.l;
      const lag = 0.18 - this.roundIdx * 0.03; // smaller = sharper
      if (Math.abs(diff) > lag) out.shieldDir = Math.sign(diff);
    }

    return out;
  }
}

export const TAUNTS = {
  intro: [
    'I DESIGNED THIS GAME MYSELF. I HAVE YET TO MEET A WORTHY ADVERSARY.',
    'YOU UNDERSTAND THE STAKES, MR. BOND. AND THE PRICE OF LOSING.',
  ],
  playerShock: [
    'PAIN, MR. BOND, CONCENTRATES THE MIND WONDERFULLY.',
    'GENERALS FEEL NOTHING WHEN THEIR SOLDIERS FALL. WE ARE NOT SO FORTUNATE.',
    'YOU MAY RELEASE THE GRIPS AT ANY TIME. AND LOSE.',
  ],
  largoShock: [
    'A LUCKY ROUND. IT CHANGES NOTHING.',
    'INTERESTING. FEW MEN HAVE MADE ME FEEL ANYTHING AT ALL.',
  ],
  finalRound: ['THEN LET US PLAY FOR THE ONLY STAKE THAT MATTERS.'],
  crack: ['...ENOUGH. ENOUGH!'],
} as const;

export function pick(arr: readonly string[], rng: () => number): string {
  return arr[Math.floor(rng() * arr.length)];
}
