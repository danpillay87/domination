// Stylized vector outlines, unit space roughly [-1,1]² — scaled onto the map plane at runtime.
// Canon stakes ladder from the film: Spain 9k → Japan 16k → USA 42k → Rest of the World 325k.

export interface Round {
  name: string;
  stake: number;
  drain: number; // endurance cost of enduring this round's shock
  outline: [number, number][];
}

const SPAIN: [number, number][] = [
  [-0.95, 0.32], [-0.88, 0.48], [-0.55, 0.55], [-0.18, 0.62], [0.18, 0.58],
  [0.52, 0.55], [0.72, 0.38], [0.78, 0.15], [0.6, -0.1], [0.66, -0.38],
  [0.5, -0.6], [0.18, -0.72], [-0.2, -0.78], [-0.45, -0.68], [-0.72, -0.52],
  [-0.88, -0.2], [-1.0, 0.02],
];

const JAPAN: [number, number][] = [
  [-0.52, -0.78], [-0.3, -0.62], [-0.18, -0.42], [-0.05, -0.18], [0.05, 0.05],
  [0.18, 0.28], [0.38, 0.5], [0.6, 0.68], [0.82, 0.78], [0.9, 0.62],
  [0.7, 0.45], [0.5, 0.25], [0.35, 0.02], [0.22, -0.25], [0.08, -0.5],
  [-0.1, -0.72], [-0.32, -0.9],
];

const USA: [number, number][] = [
  [-1.1, 0.45], [-0.75, 0.52], [-0.35, 0.55], [0.1, 0.55], [0.55, 0.5],
  [0.88, 0.45], [0.8, 0.22], [0.72, 0.02], [0.62, -0.18], [0.68, -0.45],
  [0.74, -0.7], [0.6, -0.62], [0.48, -0.38], [0.2, -0.42], [-0.05, -0.45],
  [-0.28, -0.62], [-0.38, -0.45], [-0.62, -0.32], [-0.85, -0.22], [-1.05, -0.05],
  [-1.15, 0.2],
];

// "The rest of the world" — the planet itself.
const WORLD: [number, number][] = Array.from({ length: 36 }, (_, i) => {
  const a = (i / 36) * Math.PI * 2;
  return [Math.cos(a) * 0.92, Math.sin(a) * 0.92] as [number, number];
});

export const ROUNDS: Round[] = [
  { name: 'SPAIN', stake: 9_000, drain: 14, outline: SPAIN },
  { name: 'JAPAN', stake: 16_000, drain: 22, outline: JAPAN },
  { name: 'UNITED STATES', stake: 42_000, drain: 40, outline: USA },
  { name: 'THE REST OF THE WORLD', stake: 325_000, drain: 70, outline: WORLD },
];

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
