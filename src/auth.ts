// Google sign-in (Supabase Auth) + the World Domination Ledger.
// Playing never requires sign-in; the ledger only records signed-in players.

import { getSupa } from './net';

interface LedgerRow {
  player: string;
  career_winnings: number;
  wins: number;
  matches: number;
}

let userId: string | null = null;

export function initAuth(): void {
  const supa = getSupa();
  if (!supa) return;
  supa.auth.onAuthStateChange((_evt, session) => {
    userId = session?.user?.id ?? null;
  });
  void supa.auth.getSession().then(({ data }) => {
    userId = data.session?.user?.id ?? null;
  });
}

export function signedIn(): boolean {
  return userId !== null;
}

export function signInGoogle(): void {
  const supa = getSupa();
  if (!supa) return;
  void supa.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo: location.origin + location.pathname },
  });
}

export function signOut(): void {
  void getSupa()?.auth.signOut();
}

export function recordMatch(player: string, opponent: string, won: boolean, winnings: number): void {
  const supa = getSupa();
  if (!supa || !userId) return;
  void supa.from('ledger').insert({ player, opponent, won, winnings });
}

export async function topLedger(): Promise<LedgerRow[]> {
  const supa = getSupa();
  if (!supa) return [];
  const { data } = await supa.from('world_domination_ledger').select('*').limit(8);
  return (data as LedgerRow[] | null) ?? [];
}
