// Keyboard + mouse + gamepad. Mouse position kept in NDC (-1..1, y up).

export const keys = new Set<string>();
export const mouse = { x: 0, y: 0, fired: false, moved: false };

// One-shot presses are queued at the event, not edge-detected from the polled
// set — a focus blur between ticks can't eat them.
const queue: string[] = [];

export function consumePresses(): string[] {
  return queue.splice(0);
}

// Touch UI buttons inject presses through the same queue as the keyboard.
export function pushPress(k: string): void {
  queue.push(k.toLowerCase());
}

// Touchscreen play: drag to aim, tap to fire, hold anywhere to grip.
export const touch = {
  aimX: 0,
  aimY: 0,
  aiming: false,
  fired: false,
  shieldDir: 0, // driven by the on-screen ◀ ▶ buttons
  held: false,
};

export function initTouch(c: HTMLCanvasElement): void {
  const pos = (t: Touch) => {
    const r = c.getBoundingClientRect();
    touch.aimX = ((t.clientX - r.left) / r.width) * 2 - 1;
    touch.aimY = -(((t.clientY - r.top) / r.height) * 2 - 1);
  };
  c.addEventListener(
    'touchstart',
    (e) => {
      e.preventDefault();
      pos(e.touches[0]);
      touch.aiming = true;
      touch.fired = true;
      touch.held = true;
    },
    { passive: false },
  );
  c.addEventListener(
    'touchmove',
    (e) => {
      e.preventDefault();
      pos(e.touches[0]);
    },
    { passive: false },
  );
  for (const ev of ['touchend', 'touchcancel'] as const) {
    c.addEventListener(ev, (e) => {
      if (e.touches.length === 0) touch.held = false;
    });
  }
}

export function consumeTouchFire(): boolean {
  const f = touch.fired;
  touch.fired = false;
  return f;
}

let canvas: HTMLCanvasElement | null = null;

export function initInput(c: HTMLCanvasElement, onFirstInteract: () => void): void {
  canvas = c;
  let interacted = false;
  const first = () => {
    if (!interacted) {
      interacted = true;
      onFirstInteract();
    }
  };
  window.addEventListener('keydown', (e) => {
    keys.add(e.key.toLowerCase());
    if (!e.repeat) queue.push(e.key.toLowerCase());
    first();
  });
  window.addEventListener('keyup', (e) => keys.delete(e.key.toLowerCase()));
  window.addEventListener('mousemove', (e) => {
    if (!canvas) return;
    const r = canvas.getBoundingClientRect();
    mouse.x = ((e.clientX - r.left) / r.width) * 2 - 1;
    mouse.y = -(((e.clientY - r.top) / r.height) * 2 - 1);
    mouse.moved = true;
  });
  window.addEventListener('mousedown', () => {
    mouse.fired = true;
    first();
  });
  window.addEventListener('blur', () => keys.clear());
}

export function consumeFire(): boolean {
  const f = mouse.fired;
  mouse.fired = false;
  return f;
}

export function key(k: string): boolean {
  return keys.has(k);
}

// Gamepad: left stick = shield, right stick = reticle, RT fire, A/RB launch,
// LT/LB held = the grips. Untested wiring until a pad is plugged in.
export interface PadState {
  connected: boolean;
  shieldDir: number;
  aimDX: number;
  aimDY: number;
  fire: boolean;
  launch: boolean;
  grip: boolean;
}

// Polled at 60Hz — reuse one state object and one prev-button array, no allocs.
const prevPad = new Array<boolean>(8).fill(false);
const padState: PadState = {
  connected: false, shieldDir: 0, aimDX: 0, aimDY: 0,
  fire: false, launch: false, grip: false,
};

export function pollPad(): PadState {
  const pads = navigator.getGamepads?.() ?? [];
  let p: Gamepad | null = null;
  for (const g of pads) if (g && g.connected) { p = g; break; }
  if (!p) {
    padState.connected = false;
    padState.shieldDir = padState.aimDX = padState.aimDY = 0;
    padState.fire = padState.launch = padState.grip = false;
    prevPad.fill(false);
    return padState;
  }
  const dz = (v: number) => (Math.abs(v) > 0.25 ? v : 0);
  const btn = (i: number) => !!p.buttons[i] && (p.buttons[i].pressed || p.buttons[i].value > 0.5);
  padState.connected = true;
  padState.shieldDir = Math.sign(dz(p.axes[0] ?? 0));
  padState.aimDX = dz(p.axes[2] ?? 0);
  padState.aimDY = -dz(p.axes[3] ?? 0);
  padState.fire = btn(7) && !prevPad[7];
  padState.launch = (btn(0) && !prevPad[0]) || (btn(5) && !prevPad[5]);
  padState.grip = btn(6) || btn(4);
  for (let i = 0; i < 8; i++) prevPad[i] = btn(i);
  return padState;
}

export function rumble(intensity: number, ms: number): void {
  const pads = navigator.getGamepads?.() ?? [];
  for (const p of pads) {
    const act = (p as Gamepad | null)?.vibrationActuator;
    act?.playEffect?.('dual-rumble', {
      duration: ms,
      strongMagnitude: Math.min(1, intensity),
      weakMagnitude: Math.min(1, intensity * 0.7),
    }).catch(() => {});
  }
}
