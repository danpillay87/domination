// Phone grip stations: WebSocket relay via the dev server (/grip-ws).
// Phones report grip held/released + heartbeats; the game pushes shock events.

import type { Side } from './sim';

let ws: WebSocket | null = null;
const lastSeen: Record<Side, number> = { p: 0, l: 0 };
const held: Record<Side, boolean> = { p: false, l: false };

function connect(): void {
  try {
    ws = new WebSocket(`ws://${location.host}/grip-ws`);
    ws.onmessage = (e) => {
      let m: { t?: string; player?: Side; held?: boolean };
      try {
        m = JSON.parse(e.data as string);
      } catch {
        return;
      }
      if (!m.player || (m.player !== 'p' && m.player !== 'l')) return;
      if (m.t === 'grip') {
        held[m.player] = !!m.held;
        lastSeen[m.player] = performance.now();
      } else if (m.t === 'hello') {
        if (typeof m.held === 'boolean') held[m.player] = m.held;
        lastSeen[m.player] = performance.now();
      }
    };
    ws.onclose = () => {
      ws = null;
      setTimeout(connect, 3000);
    };
    ws.onerror = () => ws?.close();
  } catch {}
}

export function initHaptics(): void {
  connect();
}

export function phoneConnected(s: Side): boolean {
  return performance.now() - lastSeen[s] < 12000;
}

export function phoneHeld(s: Side): boolean {
  return held[s];
}

export function sendShock(player: Side, level: number, ms: number): void {
  if (ws && ws.readyState === 1) {
    ws.send(JSON.stringify({ t: 'shock', player, level, ms }));
  }
}
