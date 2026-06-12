// Multiplayer transport. v1 rides the dev-server /grip-ws broadcast relay
// (works across the LAN); the interface is transport-agnostic so a Supabase
// Realtime adapter can replace connect() without touching game code.

export type NetMsg = { t: string } & Record<string, unknown>;

let ws: WebSocket | null = null;
let handler: ((m: NetMsg) => void) | null = null;

export function netInit(): void {
  connect();
  window.addEventListener('beforeunload', () => netSend({ t: 'mp-bye' }));
}

export function netOn(h: (m: NetMsg) => void): void {
  handler = h;
}

export function netReady(): boolean {
  return !!ws && ws.readyState === 1;
}

export function netSend(m: NetMsg): void {
  if (netReady()) ws!.send(JSON.stringify(m));
}

function connect(): void {
  try {
    ws = new WebSocket(`ws://${location.host}/grip-ws`);
    ws.onmessage = (e) => {
      let m: unknown;
      try {
        m = JSON.parse(e.data as string);
      } catch {
        return;
      }
      const msg = m as NetMsg;
      if (msg && typeof msg.t === 'string' && msg.t.startsWith('mp-')) handler?.(msg);
    };
    ws.onclose = () => {
      ws = null;
      setTimeout(connect, 2000);
    };
    ws.onerror = () => ws?.close();
  } catch {}
}
