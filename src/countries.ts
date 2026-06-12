// Stylized vector outlines, unit space roughly [-1,1]² — scaled onto the map plane at runtime.
// Canon stakes ladder from the film: $9,000 → $16,000 → $42,000 → the world at $325,000.
// Each match draws its early countries from per-rung pools (deterministic from the match seed,
// so multiplayer clients build identical ladders).

export interface Round {
  name: string;
  stake: number;
  drain: number; // endurance cost of enduring this round's shock
  outline: [number, number][];
}

interface Country {
  name: string;
  outline: [number, number][];
}

const SPAIN: Country = {
  name: 'SPAIN',
  outline: [
    [-0.95, 0.32], [-0.88, 0.48], [-0.55, 0.55], [-0.18, 0.62], [0.18, 0.58],
    [0.52, 0.55], [0.72, 0.38], [0.78, 0.15], [0.6, -0.1], [0.66, -0.38],
    [0.5, -0.6], [0.18, -0.72], [-0.2, -0.78], [-0.45, -0.68], [-0.72, -0.52],
    [-0.88, -0.2], [-1.0, 0.02],
  ],
};

const FRANCE: Country = {
  name: 'FRANCE',
  outline: [
    [-0.9, 0.4], [-0.45, 0.62], [0.1, 0.85], [0.62, 0.55], [0.55, 0.05],
    [0.7, -0.5], [0.15, -0.8], [-0.4, -0.75], [-0.6, -0.2], [-0.55, 0.15],
  ],
};

const ITALY: Country = {
  name: 'ITALY',
  outline: [
    [-0.6, 0.6], [-0.2, 0.85], [0.25, 0.9], [0.45, 0.68], [0.2, 0.45],
    [0.45, 0.1], [0.72, -0.3], [0.85, -0.55], [0.6, -0.52], [0.45, -0.7],
    [0.52, -0.95], [0.25, -0.82], [0.28, -0.4], [0.0, 0.0], [-0.25, 0.38],
  ],
};

const BRITAIN: Country = {
  name: 'GREAT BRITAIN',
  outline: [
    [-0.15, 0.92], [0.2, 0.75], [0.05, 0.55], [0.25, 0.4], [0.15, 0.15],
    [0.35, -0.1], [0.5, -0.38], [0.38, -0.62], [0.1, -0.72], [-0.28, -0.65],
    [-0.05, -0.42], [-0.32, -0.2], [-0.05, -0.05], [-0.25, 0.2], [-0.15, 0.45],
    [-0.42, 0.7],
  ],
};

const JAPAN: Country = {
  name: 'JAPAN',
  outline: [
    [-0.52, -0.78], [-0.3, -0.62], [-0.18, -0.42], [-0.05, -0.18], [0.05, 0.05],
    [0.18, 0.28], [0.38, 0.5], [0.6, 0.68], [0.82, 0.78], [0.9, 0.62],
    [0.7, 0.45], [0.5, 0.25], [0.35, 0.02], [0.22, -0.25], [0.08, -0.5],
    [-0.1, -0.72], [-0.32, -0.9],
  ],
};

const BRAZIL: Country = {
  name: 'BRAZIL',
  outline: [
    [-0.5, 0.6], [0.0, 0.75], [0.4, 0.5], [0.75, 0.25], [0.5, -0.1],
    [0.45, -0.5], [0.1, -0.85], [-0.15, -0.6], [-0.3, -0.2], [-0.7, 0.0],
    [-0.8, 0.35],
  ],
};

const INDIA: Country = {
  name: 'INDIA',
  outline: [
    [-0.6, 0.55], [-0.2, 0.8], [0.4, 0.7], [0.7, 0.4], [0.45, 0.2],
    [0.25, -0.1], [0.05, -0.6], [-0.05, -0.95], [-0.25, -0.5], [-0.5, 0.0],
    [-0.75, 0.3],
  ],
};

const AUSTRALIA: Country = {
  name: 'AUSTRALIA',
  outline: [
    [-0.85, 0.3], [-0.45, 0.55], [-0.1, 0.4], [0.15, 0.62], [0.35, 0.25],
    [0.75, 0.05], [0.8, -0.35], [0.45, -0.6], [0.05, -0.5], [-0.4, -0.6],
    [-0.8, -0.3],
  ],
};

const USA: Country = {
  name: 'UNITED STATES',
  outline: [
    [-1.1, 0.45], [-0.75, 0.52], [-0.35, 0.55], [0.1, 0.55], [0.55, 0.5],
    [0.88, 0.45], [0.8, 0.22], [0.72, 0.02], [0.62, -0.18], [0.68, -0.45],
    [0.74, -0.7], [0.6, -0.62], [0.48, -0.38], [0.2, -0.42], [-0.05, -0.45],
    [-0.28, -0.62], [-0.38, -0.45], [-0.62, -0.32], [-0.85, -0.22], [-1.05, -0.05],
    [-1.15, 0.2],
  ],
};

const CHINA: Country = {
  name: 'CHINA',
  outline: [
    [-0.9, 0.2], [-0.5, 0.6], [0.0, 0.8], [0.5, 0.65], [0.85, 0.3],
    [0.6, -0.1], [0.7, -0.45], [0.2, -0.7], [-0.2, -0.45], [-0.6, -0.3],
    [-1.0, -0.05],
  ],
};

const SOVIET: Country = {
  name: 'SOVIET UNION',
  outline: [
    [-1.1, 0.1], [-0.8, 0.5], [-0.3, 0.65], [0.2, 0.8], [0.7, 0.7],
    [1.1, 0.5], [1.0, 0.05], [0.6, -0.2], [0.2, -0.5], [-0.3, -0.4],
    [-0.7, -0.5], [-1.05, -0.25],
  ],
};

// "The rest of the world" — the planet itself. Always the final table.
const WORLD: Country = {
  name: 'THE REST OF THE WORLD',
  outline: Array.from({ length: 36 }, (_, i) => {
    const a = (i / 36) * Math.PI * 2;
    return [Math.cos(a) * 0.92, Math.sin(a) * 0.92] as [number, number];
  }),
};

const RUNGS: { pool: Country[]; stake: number; drain: number }[] = [
  { pool: [SPAIN, FRANCE, ITALY, BRITAIN], stake: 9_000, drain: 14 },
  { pool: [JAPAN, BRAZIL, INDIA, AUSTRALIA], stake: 16_000, drain: 22 },
  { pool: [USA, CHINA, SOVIET], stake: 42_000, drain: 40 },
  { pool: [WORLD], stake: 325_000, drain: 70 },
];

export function buildLadder(rng: () => number): Round[] {
  return RUNGS.map((r) => {
    const c = r.pool[Math.floor(rng() * r.pool.length)];
    return { name: c.name, stake: r.stake, drain: r.drain, outline: c.outline };
  });
}

export function dollars(n: number): string {
  return '$' + n.toLocaleString('en-US');
}

export function pointInPoly(x: number, y: number, poly: [number, number][]): boolean {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i];
    const [xj, yj] = poly[j];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}
