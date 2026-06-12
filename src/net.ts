// Multiplayer transport. Primary: Supabase Realtime broadcast (works across
// the internet). Fallback: the dev-server /grip-ws relay (LAN only) when no
// Supabase credentials are configured. Same interface either way.

import { createClient, type RealtimeChannel } from '@supabase/supabase-js';

export type NetMsg = { t: string } & Record<string, unknown>;

const SUPA_URL = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const SUPA_KEY = import.meta.env.VITE_SUPABASE_KEY as string | undefined;

let handler: ((m: NetMsg) => void) | null = null;
let ws: WebSocket | null = null;
let channel: RealtimeChannel | null = null;
let supaReady = false;

export function netMode(): 'supabase' | 'relay' {
  return SUPA_URL && SUPA_KEY ? 'supabase' : 'relay';
}

export function netInit(): void {
  if (netMode() === 'supabase') connectSupabase();
  else connectRelay();
  window.addEventListener('beforeunload', () => netSend({ t: 'mp-bye' }));
}

export function netOn(h: (m: NetMsg) => void): void {
  handler = h;
}

export function netReady(): boolean {
  return netMode() === 'supabase' ? supaReady : !!ws && ws.readyState === 1;
}

export function netSend(m: NetMsg): void {
  if (netMode() === 'supabase') {
    if (channel && supaReady) {
      void channel.send({ type: 'broadcast', event: 'mp', payload: m });
    }
  } else if (ws && ws.readyState === 1) {
    ws.send(JSON.stringify(m));
  }
}

function connectSupabase(): void {
  const supa = createClient(SUPA_URL!, SUPA_KEY!, {
    realtime: { params: { eventsPerSecond: 80 } },
  });
  channel = supa.channel('domination-table', {
    config: { broadcast: { self: false } },
  });
  channel.on('broadcast', { event: 'mp' }, (msg) => {
    const m = msg.payload as NetMsg;
    if (m && typeof m.t === 'string' && m.t.startsWith('mp-')) handler?.(m);
  });
  channel.subscribe((status) => {
    supaReady = status === 'SUBSCRIBED';
  });
}

function connectRelay(): void {
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
      setTimeout(connectRelay, 2000);
    };
    ws.onerror = () => ws?.close();
  } catch {}
}
