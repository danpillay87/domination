// LARGO — confident, near-optimal early, human enough to beat.
// Side-agnostic so the attract demo can run AI vs AI.

import { angleFrom, type DuelState, type Side, type SideInputs } from './sim';

export class Largo {
  private nextFire = 1.5;
  private launchTimes: number[];
  private rng: () => number;
  private roundIdx: number;
  private side: Side;

  constructor(side: Side, roundIdx: number, rng: () => number) {
    this.side = side;
    this.rng = rng;
    this.roundIdx = roundIdx;
    this.launchTimes = [9 + rng() * 7, 24 + rng() * 10];
  }

  think(s: DuelState): SideInputs {
    const out: SideInputs = { shieldDir: 0, fireAt: null, launch: false };
    const me = this.side;
    const enemy: Side = me === 'p' ? 'l' : 'p';

    // Laser: react to targets that have lived past his reaction time.
    // Beatable on Spain, frightening by the world round.
    const reaction = Math.max(0.5, 1.15 - this.roundIdx * 0.18);
    const accuracy = 0.3 + this.roundIdx * 0.16;
    if (s.time > this.nextFire) {
      const t = s.targets.find((t) => t.age > reaction);
      if (t) {
        const err = this.rng() < accuracy ? 0 : 0.13 + this.rng() * 0.08;
        const a = this.rng() * Math.PI * 2;
        out.fireAt = { x: t.x + Math.cos(a) * err, y: t.y + Math.sin(a) * err };
        this.nextFire = s.time + Math.max(0.9, 2.2 - this.roundIdx * 0.35) + this.rng() * 0.5;
      }
    }

    // Missiles on a loose schedule.
    if (this.launchTimes.length && s.time > this.launchTimes[0] && s.ammo[me] > 0) {
      this.launchTimes.shift();
      out.launch = true;
    }

    // Shield: track the nearest inbound missile with lag.
    const inbound = s.missiles.filter((m) => m.owner === enemy);
    if (inbound.length) {
      let best = inbound[0];
      let bestT = best.t;
      for (const m of inbound) if (m.t > bestT) { best = m; bestT = m.t; }
      const want = angleFrom(me, best.x, best.y);
      const diff = want - s.shield[me];
      const lag = 0.32 - this.roundIdx * 0.06; // smaller = sharper
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
  duel: [
    'THE WORLD BELONGS TO THOSE WHO CAN HOLD ON.',
    'YOUR HAND IS TREMBLING, MR. BOND.',
    'MAGNIFICENT, IS IT NOT? I NEVER TIRE OF IT.',
  ],
  finalRound: ['THEN LET US PLAY FOR THE ONLY STAKE THAT MATTERS.'],
  crack: ['...ENOUGH. ENOUGH!'],
} as const;

export function pick(arr: readonly string[], rng: () => number): string {
  return arr[Math.floor(rng() * arr.length)];
}
