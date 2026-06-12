// Three.js vector-wireframe renderer: ortho camera, additive lines, bloom + CRT post.
// All per-frame dynamic objects (targets, missiles, beams, shields, explosions,
// reticle) are POOLED — geometry buffers are allocated once and mutated in place.
// Nothing is created or disposed during a duel frame.

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
const POOL = { targets: 4, missiles: 4, beams: 6, explosions: 8 };
const TRAIL_MAX = 26;
const SHIELD_SEGS = 17;

let renderer: THREE.WebGLRenderer;
let scene: THREE.Scene;
let camera: THREE.OrthographicCamera;
let composer: EffectComposer;
let crtPass: ShaderPass;

let attractGroup: THREE.Group;
let duelGroup: THREE.Group;
let staticGroup: THREE.Group; // grid + country + bases, rebuilt per round
let globe: THREE.Group;

let shakeT = 0;
let shakeMag = 0;
let aspect = 1.5;
let introP: number | null = null;

// Shared materials — one per colour, reused by every pooled object.
const mat = {
  p: new THREE.LineBasicMaterial({ color: COL.p }),
  l: new THREE.LineBasicMaterial({ color: COL.l }),
  amber: new THREE.LineBasicMaterial({ color: COL.amber }),
  white: new THREE.LineBasicMaterial({ color: COL.white }),
  grid: new THREE.LineBasicMaterial({ color: COL.grid }),
};

interface MissileSlot { head: THREE.LineSegments; trail: THREE.Line; trailPos: THREE.BufferAttribute }
interface ShieldSlot { line: THREE.Line; pos: THREE.BufferAttribute }
interface BeamSlot { line: THREE.Line; pos: THREE.BufferAttribute }
interface TargetSlot { ring: THREE.LineLoop; inner: THREE.LineLoop }

const pool = {
  targets: [] as TargetSlot[],
  missiles: [] as MissileSlot[],
  beams: [] as BeamSlot[],
  explosions: [] as THREE.LineLoop[],
  shields: {} as Record<Side, ShieldSlot>,
  reticle: null as THREE.Group | null,
};

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
  const m = new THREE.LineBasicMaterial({ color });
  return closed ? new THREE.LineLoop(g, m) : new THREE.Line(g, m);
}

function unitCircleGeo(segs: number): THREE.BufferGeometry {
  const pts: THREE.Vector3[] = [];
  for (let i = 0; i < segs; i++) {
    const a = (i / segs) * Math.PI * 2;
    pts.push(new THREE.Vector3(Math.cos(a), Math.sin(a), 0));
  }
  return new THREE.BufferGeometry().setFromPoints(pts);
}

function dynamicBuffer(points: number): { geo: THREE.BufferGeometry; pos: THREE.BufferAttribute } {
  const pos = new THREE.BufferAttribute(new Float32Array(points * 3), 3);
  pos.setUsage(THREE.DynamicDrawUsage);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', pos);
  return { geo, pos };
}

function buildPools(parent: THREE.Group): void {
  const circle32 = unitCircleGeo(32);
  const circle12 = unitCircleGeo(12);

  for (let i = 0; i < POOL.targets; i++) {
    const ring = new THREE.LineLoop(circle32, mat.white);
    const inner = new THREE.LineLoop(circle12, mat.amber);
    for (const o of [ring, inner]) {
      o.visible = false;
      o.frustumCulled = false;
      parent.add(o);
    }
    pool.targets.push({ ring, inner });
  }

  const c = 0.035;
  const headGeo = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(-c, -c, 0), new THREE.Vector3(c, c, 0),
    new THREE.Vector3(-c, c, 0), new THREE.Vector3(c, -c, 0),
  ]);
  for (let i = 0; i < POOL.missiles; i++) {
    const head = new THREE.LineSegments(headGeo, mat.white);
    const t = dynamicBuffer(TRAIL_MAX);
    const trail = new THREE.Line(t.geo, mat.p);
    for (const o of [head, trail]) {
      o.visible = false;
      o.frustumCulled = false;
      parent.add(o);
    }
    pool.missiles.push({ head, trail, trailPos: t.pos });
  }

  for (let i = 0; i < POOL.beams; i++) {
    const b = dynamicBuffer(2);
    const l = new THREE.Line(b.geo, mat.white);
    l.visible = false;
    l.frustumCulled = false;
    parent.add(l);
    pool.beams.push({ line: l, pos: b.pos });
  }

  for (let i = 0; i < POOL.explosions; i++) {
    const e = new THREE.LineLoop(circle32, mat.white);
    e.visible = false;
    e.frustumCulled = false;
    parent.add(e);
    pool.explosions.push(e);
  }

  for (const side of ['p', 'l'] as Side[]) {
    const s = dynamicBuffer(SHIELD_SEGS);
    const l = new THREE.Line(s.geo, side === 'p' ? mat.p : mat.l);
    l.visible = false;
    l.frustumCulled = false;
    parent.add(l);
    pool.shields[side] = { line: l, pos: s.pos };
  }

  const ret = new THREE.Group();
  const r = 0.05;
  const ring = new THREE.LineLoop(unitCircleGeo(16), mat.p);
  ring.scale.setScalar(r);
  const ticks = new THREE.LineSegments(
    new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-r * 1.8, 0, 0), new THREE.Vector3(-r * 0.6, 0, 0),
      new THREE.Vector3(r * 0.6, 0, 0), new THREE.Vector3(r * 1.8, 0, 0),
      new THREE.Vector3(0, -r * 1.8, 0), new THREE.Vector3(0, -r * 0.6, 0),
      new THREE.Vector3(0, r * 0.6, 0), new THREE.Vector3(0, r * 1.8, 0),
    ]),
    mat.p,
  );
  ret.add(ring, ticks);
  ret.visible = false;
  for (const o of [ring, ticks]) o.frustumCulled = false;
  parent.add(ret);
  pool.reticle = ret;
}

export function initRender(canvas: HTMLCanvasElement): void {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(Math.min(1.5, window.devicePixelRatio));
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
  const dynamicGroup = new THREE.Group();
  duelGroup.add(staticGroup, dynamicGroup);
  scene.add(attractGroup, duelGroup);
  buildPools(dynamicGroup);

  // Attract globe: wireframe lat/long sphere, laser-lit.
  globe = new THREE.Group();
  const R = 0.85;
  for (let lat = -60; lat <= 60; lat += 30) {
    const phi = (lat * Math.PI) / 180;
    const ring = new THREE.LineLoop(unitCircleGeo(48), new THREE.LineBasicMaterial({
      color: COL.amber, transparent: true, opacity: 0.65,
    }));
    ring.scale.setScalar(R * Math.cos(phi));
    ring.rotation.x = Math.PI / 2;
    ring.position.y = R * Math.sin(phi);
    globe.add(ring);
  }
  for (let i = 0; i < 9; i++) {
    const ring = new THREE.LineLoop(unitCircleGeo(48), new THREE.LineBasicMaterial({
      color: COL.l, transparent: true, opacity: 0.5,
    }));
    ring.scale.setScalar(R);
    ring.rotation.y = (i / 9) * Math.PI;
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
  staticGroup.add(new THREE.LineSegments(gridGeo, mat.grid));

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
    // Targets — pulsing rings
    for (let i = 0; i < pool.targets.length; i++) {
      const slot = pool.targets[i];
      const t = s.targets[i];
      slot.ring.visible = slot.inner.visible = !!t;
      if (t) {
        const pulse = TARGET_R * (1 + 0.18 * Math.sin(t.age * 7));
        slot.ring.position.set(t.x, t.y, 0.02);
        slot.ring.scale.setScalar(pulse);
        slot.inner.position.set(t.x, t.y, 0.02);
        slot.inner.scale.setScalar(pulse * 0.45);
      }
    }

    // Shields
    for (const side of ['p', 'l'] as Side[]) {
      const slot = pool.shields[side];
      slot.line.visible = true;
      for (let i = 0; i < SHIELD_SEGS; i++) {
        const a = s.shield[side] + ((i - 8) / 8) * SHIELD_HALF;
        const [x, y] = shieldPoint(side, a, SHIELD_R);
        slot.pos.setXYZ(i, x, y, 0.03);
      }
      slot.pos.needsUpdate = true;
    }

    // Missiles — head cross + trail
    for (let i = 0; i < pool.missiles.length; i++) {
      const slot = pool.missiles[i];
      const m = s.missiles[i];
      slot.head.visible = slot.trail.visible = !!m;
      if (m) {
        slot.head.position.set(m.x, m.y, 0.04);
        slot.trail.material = m.owner === 'p' ? mat.p : mat.l;
        const n = Math.min(m.trail.length, TRAIL_MAX);
        for (let k = 0; k < n; k++) slot.trailPos.setXYZ(k, m.trail[k][0], m.trail[k][1], 0.02);
        slot.trail.geometry.setDrawRange(0, n);
        slot.trailPos.needsUpdate = true;
      }
    }

    // Laser beams
    for (let i = 0; i < pool.beams.length; i++) {
      const slot = pool.beams[i];
      const b = s.beams[i];
      slot.line.visible = !!b;
      if (b) {
        const from = BASE[b.side];
        slot.line.material = b.hit ? mat.white : b.side === 'p' ? mat.p : mat.l;
        slot.pos.setXYZ(0, from.x, from.y, 0.05);
        slot.pos.setXYZ(1, b.x, b.y, 0.05);
        slot.pos.needsUpdate = true;
      }
    }

    // Explosions — expanding rings
    for (let i = 0; i < pool.explosions.length; i++) {
      const obj = pool.explosions[i];
      const e = s.explosions[i];
      obj.visible = !!e;
      if (e) {
        obj.material = e.big ? mat.l : mat.white;
        obj.position.set(e.x, e.y, 0.02);
        obj.scale.setScalar((e.big ? 0.3 : 0.14) * (e.age / 0.5) + 0.02);
      }
    }

    // Player reticle
    if (pool.reticle) {
      pool.reticle.visible = !!reticle;
      if (reticle) pool.reticle.position.set(reticle.x, reticle.y, 0.05);
    }
  } else {
    if (pool.reticle) pool.reticle.visible = false;
    for (const side of ['p', 'l'] as Side[]) pool.shields[side].line.visible = false;
    for (const t of pool.targets) t.ring.visible = t.inner.visible = false;
    for (const m of pool.missiles) m.head.visible = m.trail.visible = false;
    for (const b of pool.beams) b.line.visible = false;
    for (const e of pool.explosions) e.visible = false;
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

  // Don't burn GPU on a hidden window — the sim keeps ticking regardless.
  if (!document.hidden) composer.render();
}

export function shake(mag: number, dur = 0.6): void {
  shakeMag = mag;
  shakeT = dur;
}

export function setCrt(on: boolean): void {
  crtPass.enabled = on;
}

export function renderStats(): { geometries: number; textures: number } {
  return {
    geometries: renderer.info.memory.geometries,
    textures: renderer.info.memory.textures,
  };
}
