// Keyboard + mouse + gamepad. Mouse position kept in NDC (-1..1, y up).

export const keys = new Set<string>();
export const mouse = { x: 0, y: 0, fired: false };

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
    first();
  });
  window.addEventListener('keyup', (e) => keys.delete(e.key.toLowerCase()));
  window.addEventListener('mousemove', (e) => {
    if (!canvas) return;
    const r = canvas.getBoundingClientRect();
    mouse.x = ((e.clientX - r.left) / r.width) * 2 - 1;
    mouse.y = -(((e.clientY - r.top) / r.height) * 2 - 1);
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
