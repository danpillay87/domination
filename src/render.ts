// Three.js vector-wireframe renderer: ortho camera, additive lines, bloom + CRT post.

import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import {
  BASE, SHIELD_HALF, SHIELD_R, TARGET_R, forward, shieldPoint,
  type DuelState, type Side,
} from './sim';

export const COL = {
  p: 0x2ee6ff,
  l: 0xff6a1f,
  amber: 0xffd24a,
  grid: 0x0e2c42,
  white: 0xffffff,
};

const VIEW_Y = 1.6;

let renderer: THREE.WebGLRenderer;
let scene: THREE.Scene;
let camera: THREE.OrthographicCamera;
let composer: EffectComposer;
let crtPass: ShaderPass;

let attractGroup: THREE.Group;
let duelGroup: THREE.Group;
let staticGroup: THREE.Group; // grid + country + bases, rebuilt per round
let dynamicGroup: THREE.Group; // rebuilt every frame
let globe: THREE.Group;

let shakeT = 0;
let shakeMag = 0;
let aspect = 1.5;
let introP: number | null = null;

function easeOutCubic(x: number): number {
  return 1 - Math.pow(1 - x, 3);
}

// Round intro: the world recedes as the target country resolves out of it.
export function setIntro(p: number | null): void {
  introP = p;
}

const CRTShader = {
  uniforms: {
    tDiffuse: { value: null as THREE.Texture | null },
    time: { value: 0 },
    res: { value: new THREE.Vector2(1024, 768) },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform float time;
    uniform vec2 res;
    varying vec2 vUv;
    void main() {
      vec2 c = vUv - 0.5;
      float r2 = dot(c, c);
      vec2 uv = 0.5 + c * (1.0 + 0.07 * r2);
      if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) { gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0); return; }
      vec3 col;
      col.r = texture2D(tDiffuse, uv + vec2(0.0009, 0.0)).r;
      col.g = texture2D(tDiffuse, uv).g;
      col.b = texture2D(tDiffuse, uv - vec2(0.0009, 0.0)).b;
      col *= 0.9 + 0.1 * sin(uv.y * res.y * 3.14159 + time * 8.0);
      col *= 1.0 - 0.55 * r2 * 1.6;
      gl_FragColor = vec4(col, 1.0);
    }
  `,
};

function line(pts: [number, number][], color: number, closed = false, z = 0): THREE.Line {
  const v = pts.map(([x, y]) => new THREE.Vector3(x, y, z));
  const g = new THREE.BufferGeometry().setFromPoints(v);
  const m = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 1 });
  return closed ? new THREE.LineLoop(g, m) : new THREE.Line(g, m);
}

function circle(cx: number, cy: number, r: number, color: number, segs = 28): THREE.LineLoop {
  const pts: [number, number][] = [];
  for (let i = 0; i < segs; i++) {
    const a = (i / segs) * Math.PI * 2;
    pts.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r]);
  }
  return line(pts, color, true) as THREE.LineLoop;
}

export function initRender(canvas: HTMLCanvasElement): void {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x01030a);
  camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
  camera.position.z = 5;

  composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(1024, 768), 1.15, 0.55, 0.0);
  composer.addPass(bloom);
  crtPass = new ShaderPass(CRTShader);
  composer.addPass(crtPass);

  attractGroup = new THREE.Group();
  duelGroup = new THREE.Group();
  staticGroup = new THREE.Group();
  dynamicGroup = new THREE.Group();
  duelGroup.add(staticGroup, dynamicGroup);
  scene.add(attractGroup, duelGroup);

  // Attract globe: wireframe lat/long sphere, laser-lit.
  globe = new THREE.Group();
  const R = 0.85;
  for (let lat = -60; lat <= 60; lat += 30) {
    const phi = (lat * Math.PI) / 180;
    const ring = circle(0, 0, R * Math.cos(phi), COL.amber, 48);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = R * Math.sin(phi);
    (ring.material as THREE.LineBasicMaterial).opacity = 0.65;
    (ring.material as THREE.LineBasicMaterial).transparent = true;
    globe.add(ring);
  }
  for (let i = 0; i < 9; i++) {
    const ring = circle(0, 0, R, COL.l, 48);
    ring.rotation.y = (i / 9) * Math.PI;
    (ring.material as THREE.LineBasicMaterial).opacity = 0.5;
    (ring.material as THREE.LineBasicMaterial).transparent = true;
    globe.add(ring);
  }
  globe.rotation.z = 0.28;
  globe.position.y = -0.08;
  attractGroup.add(globe);

  resize();
  window.addEventListener('resize', resize);
}

export function resize(): void {
  const c = renderer.domElement;
  const w = c.clientWidth || 800;
  const h = c.clientHeight || 533;
  aspect = w / h;
  renderer.setSize(w, h, false);
  composer.setSize(w, h);
  camera.left = -VIEW_Y * aspect;
  camera.right = VIEW_Y * aspect;
  camera.top = VIEW_Y;
  camera.bottom = -VIEW_Y;
  camera.updateProjectionMatrix();
  crtPass.uniforms.res.value.set(w, h);
}

export function ndcToWorld(nx: number, ny: number): { x: number; y: number } {
  return { x: nx * VIEW_Y * aspect, y: ny * VIEW_Y };
}

export function showAttract(on: boolean): void {
  attractGroup.visible = on;
  duelGroup.visible = !on;
}

function clearGroup(g: THREE.Group): void {
  for (const child of [...g.children]) {
    g.remove(child);
    const obj = child as THREE.Line;
    obj.geometry?.dispose();
    (obj.material as THREE.Material)?.dispose();
  }
}

export function buildRound(outline: [number, number][]): void {
  clearGroup(staticGroup);

  // Map grid
  const gridPts: THREE.Vector3[] = [];
  const GW = 1.25, GH = 0.95, STEP = 0.21;
  for (let x = -GW; x <= GW + 0.001; x += STEP) {
    gridPts.push(new THREE.Vector3(x, -GH, -0.01), new THREE.Vector3(x, GH, -0.01));
  }
  for (let y = -GH; y <= GH + 0.001; y += STEP) {
    gridPts.push(new THREE.Vector3(-GW, y, -0.01), new THREE.Vector3(GW, y, -0.01));
  }
  const gridGeo = new THREE.BufferGeometry().setFromPoints(gridPts);
  staticGroup.add(new THREE.LineSegments(gridGeo, new THREE.LineBasicMaterial({ color: COL.grid })));

  // Country
  staticGroup.add(line(outline, COL.amber, true, 0.01));

  // Bases: chevrons
  for (const side of ['p', 'l'] as Side[]) {
    const b = BASE[side];
    const f = forward(side);
    const col = COL[side];
    staticGroup.add(line(
      [[b.x - 0.1, b.y - 0.05 * f], [b.x, b.y + 0.07 * f], [b.x + 0.1, b.y - 0.05 * f]],
      col, false, 0.02,
    ));
    staticGroup.add(line([[b.x - 0.16, b.y - 0.08 * f], [b.x + 0.16, b.y - 0.08 * f]], col, false, 0.02));
  }
}

export function drawFrame(s: DuelState | null, reticle: { x: number; y: number } | null, dt: number): void {
  crtPass.uniforms.time.value += dt;

  if (introP !== null) {
    // Zoom past the globe while the country resolves to full size.
    attractGroup.visible = introP < 0.62;
    globe.scale.setScalar(1 + introP * 2.2);
    duelGroup.visible = true;
    const e = easeOutCubic(Math.min(1, introP * 1.25));
    duelGroup.scale.setScalar(0.18 + 0.82 * e);
  } else if (duelGroup.visible) {
    duelGroup.scale.setScalar(1);
    globe.scale.setScalar(1);
  }

  if (attractGroup.visible) {
    globe.rotation.y += dt * 0.45;
  }

  if (s && duelGroup.visible) {
    clearGroup(dynamicGroup);

    // Targets — pulsing rings
    for (const t of s.targets) {
      const pulse = TARGET_R * (1 + 0.18 * Math.sin(t.age * 7));
      dynamicGroup.add(circle(t.x, t.y, pulse, COL.white));
      dynamicGroup.add(circle(t.x, t.y, pulse * 0.45, COL.amber, 12));
    }

    // Shields
    for (const side of ['p', 'l'] as Side[]) {
      const pts: [number, number][] = [];
      for (let i = -8; i <= 8; i++) {
        const a = s.shield[side] + (i / 8) * SHIELD_HALF;
        pts.push(shieldPoint(side, a, SHIELD_R));
      }
      dynamicGroup.add(line(pts, COL[side], false, 0.03));
    }

    // Missiles — head cross + trail
    for (const m of s.missiles) {
      const col = COL[m.owner];
      if (m.trail.length > 1) dynamicGroup.add(line(m.trail, col, false, 0.02));
      const c = 0.035;
      dynamicGroup.add(line([[m.x - c, m.y - c], [m.x + c, m.y + c]], COL.white, false, 0.04));
      dynamicGroup.add(line([[m.x - c, m.y + c], [m.x + c, m.y - c]], COL.white, false, 0.04));
    }

    // Laser beams
    for (const b of s.beams) {
      const from = BASE[b.side];
      dynamicGroup.add(line([[from.x, from.y], [b.x, b.y]], b.hit ? COL.white : COL[b.side], false, 0.05));
    }

    // Explosions — expanding rings
    for (const e of s.explosions) {
      const r = (e.big ? 0.3 : 0.14) * (e.age / 0.5) + 0.02;
      dynamicGroup.add(circle(e.x, e.y, r, e.big ? COL.l : COL.white));
    }

    // Player reticle
    if (reticle) {
      const r = 0.05;
      dynamicGroup.add(circle(reticle.x, reticle.y, r, COL.p, 16));
      dynamicGroup.add(line([[reticle.x - r * 1.8, reticle.y], [reticle.x - r * 0.6, reticle.y]], COL.p));
      dynamicGroup.add(line([[reticle.x + r * 0.6, reticle.y], [reticle.x + r * 1.8, reticle.y]], COL.p));
      dynamicGroup.add(line([[reticle.x, reticle.y - r * 1.8], [reticle.x, reticle.y - r * 0.6]], COL.p));
      dynamicGroup.add(line([[reticle.x, reticle.y + r * 0.6], [reticle.x, reticle.y + r * 1.8]], COL.p));
    }
  }

  // Screen shake
  if (shakeT > 0) {
    shakeT -= dt;
    camera.position.x = (Math.random() * 2 - 1) * shakeMag * shakeT;
    camera.position.y = (Math.random() * 2 - 1) * shakeMag * shakeT;
  } else {
    camera.position.x = 0;
    camera.position.y = 0;
  }

  composer.render();
}

export function shake(mag: number, dur = 0.6): void {
  shakeMag = mag;
  shakeT = dur;
}

export function setCrt(on: boolean): void {
  crtPass.enabled = on;
}
