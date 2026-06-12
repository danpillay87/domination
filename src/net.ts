// Multiplayer transport. Primary: Supabase Realtime broadcast — one channel
// PER TABLE (join code), so concurrent matches never share a wire. Fallback:
// the dev-server /grip-ws relay (LAN only) when no Supabase credentials are
// configured; relay messages carry the room and are filtered on receive.

import { createClient, type RealtimeChannel, type SupabaseClient } from '@supabase/supabase-js';

export type NetMsg = { t: string } & Record<string, unknown>;

const SUPA_URL = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const SUPA_KEY = import.meta.env.VITE_SUPABASE_KEY as string | undefined;

let handler: ((m: NetMsg) => void) | null = null;
let supa: SupabaseClient | null = null;
let channel: RealtimeChannel | null = null;
let channelReady = false;
let ws: WebSocket | null = null;
let room: string | null = null;
let relayRetryMs = 2000;

export function netMode(): 'supabase' | 'relay' {
  return SUPA_URL && SUPA_KEY ? 'supabase' : 'relay';
}

export function getSupa(): SupabaseClient | null {
  return supa;
}

export function netInit(): void {
  if (netMode() === 'supabase') {
    supa = createClient(SUPA_URL!, SUPA_KEY!, {
      realtime: { params: { eventsPerSecond: 80 } },
    });
  } else {
    connectRelay();
  }
  window.addEventListener('beforeunload', () => netSend({ t: 'mp-bye' }));
}

export function netOn(h: (m: NetMsg) => void): void {
  handler = h;
}

// Join a table. Supabase: dedicated broadcast channel per code.
export function netJoin(r: string): void {
  room = r;
  if (netMode() !== 'supabase' || !supa) return;
  netLeaveChannel();
  channel = supa.channel(`dom-${r}`, { config: { broadcast: { self: false } } });
  channel.on('broadcast', { event: 'mp' }, (msg) => {
    const m = msg.payload as NetMsg;
    if (m && typeof m.t === 'string' && m.t.startsWith('mp-')) handler?.(m);
  });
  channel.subscribe((status) => {
    channelReady = status === 'SUBSCRIBED';
  });
}

export function netLeave(): void {
  room = null;
  netLeaveChannel();
}

function netLeaveChannel(): void {
  if (channel && supa) void supa.removeChannel(channel);
  channel = null;
  channelReady = false;
}

export function netReady(): boolean {
  return netMode() === 'supabase' ? channelReady : !!ws && ws.readyState === 1;
}

export function netSend(m: NetMsg): void {
  if (netMode() === 'supabase') {
    if (channel && channelReady) {
      void channel.send({ type: 'broadcast', event: 'mp', payload: m });
    }
  } else if (ws && ws.readyState === 1 && room) {
    ws.send(JSON.stringify({ ...m, room }));
  }
}

function connectRelay(): void {
  try {
    ws = new WebSocket(`ws://${location.host}/grip-ws`);
    ws.onopen = () => {
      relayRetryMs = 2000;
    };
    ws.onmessage = (e) => {
      let m: unknown;
      try {
        m = JSON.parse(e.data as string);
      } catch {
        return;
      }
      const msg = m as NetMsg;
      if (
        msg && typeof msg.t === 'string' && msg.t.startsWith('mp-') &&
        room && msg.room === room
      ) {
        handler?.(msg);
      }
    };
    ws.onclose = () => {
      ws = null;
      relayRetryMs = Math.min(relayRetryMs * 2, 30000);
      setTimeout(connectRelay, relayRetryMs);
    };
    ws.onerror = () => ws?.close();
  } catch {}
}
