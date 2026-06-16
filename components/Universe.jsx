"use client";
import { useMemo, useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { EffectComposer, Bloom, ChromaticAberration, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";

/* ---------- aT0 — CIRCUIT BOARD (replaces the old biology-sphere) ---------- */
function genCircuit(N) {
  const a = new Float32Array(N * 3);
  const HORIZ = [
    { y:  1.6, x0: -3.4, x1:  2.4 },
    { y:  0.8, x0: -3.0, x1:  3.2 },
    { y:  0.0, x0: -3.2, x1:  3.2 },
    { y: -0.8, x0: -3.2, x1:  2.6 },
    { y: -1.6, x0: -2.6, x1:  3.0 },
  ];
  const VERT = [
    { x: -2.6, y0: -1.6, y1:  1.6 },
    { x: -1.3, y0: -1.6, y1:  0.0 },
    { x: -0.4, y0: -0.8, y1:  1.6 },
    { x:  0.6, y0: -1.6, y1:  0.8 },
    { x:  1.7, y0: -1.6, y1:  1.6 },
    { x:  2.6, y0: -0.8, y1:  0.8 },
  ];
  const CHIPS = [
    { cx: -2.0, cy:  1.0, w: 0.9, h: 0.7 },
    { cx:  1.5, cy: -1.2, w: 1.0, h: 0.6 },
  ];
  const totalLen = HORIZ.reduce((s, l) => s + Math.abs(l.x1 - l.x0), 0)
                 + VERT.reduce((s, l) => s + Math.abs(l.y1 - l.y0), 0);
  const chipArea = CHIPS.reduce((s, c) => s + c.w * c.h, 0);
  const totalW = totalLen + (HORIZ.length + VERT.length) * 6 + chipArea * 4;

  function pickPoint() {
    const r = Math.random() * totalW;
    let acc = 0;
    for (const l of HORIZ) { acc += Math.abs(l.x1 - l.x0); if (r < acc) return [l.x0 + Math.random() * Math.abs(l.x1 - l.x0), l.y, 0]; }
    for (const l of VERT) { acc += Math.abs(l.y1 - l.y0); if (r < acc) return [l.x, l.y0 + Math.random() * Math.abs(l.y1 - l.y0), 0]; }
    for (let i = 0; i < HORIZ.length + VERT.length; i++) {
      acc += 6;
      if (r < acc) {
        if (i < HORIZ.length) { const l = HORIZ[i]; return [Math.random() < 0.5 ? l.x0 : l.x1, l.y, 0]; }
        const l = VERT[i - HORIZ.length]; return [l.x, Math.random() < 0.5 ? l.y0 : l.y1, 0];
      }
    }
    for (const c of CHIPS) { acc += c.w * c.h * 4; if (r < acc) return [c.cx + (Math.random() - 0.5) * c.w, c.cy + (Math.random() - 0.5) * c.h, 0]; }
    return [0, 0, 0];
  }

  for (let i = 0; i < N; i++) {
    const p = pickPoint();
    a[i * 3]     = p[0] + (Math.random() - 0.5) * 0.04;
    a[i * 3 + 1] = p[1] + (Math.random() - 0.5) * 0.04;
    a[i * 3 + 2] = p[2] + (Math.random() - 0.5) * 0.06;
  }
  return a;
}

/* ---------- aT1 — GEAR (engineering) ---------- */
function genGear(N) {
  const a = new Float32Array(N * 3);
  const TEETH = 12;
  for (let i = 0; i < N; i++) {
    const pick = Math.random();
    let x, y;
    if (pick < 0.62) {
      const ang = Math.random() * Math.PI * 2;
      const tooth = Math.pow(Math.max(0, Math.sin(ang * TEETH)), 3);
      const rr = 1.85 + Math.random() * 0.35 + tooth * 0.55;
      x = Math.cos(ang) * rr; y = Math.sin(ang) * rr;
    } else if (pick < 0.8) {
      const ang = Math.random() * Math.PI * 2;
      const rr = 0.55 + Math.random() * 0.25;
      x = Math.cos(ang) * rr; y = Math.sin(ang) * rr;
    } else {
      const s = Math.floor(Math.random() * 4) * (Math.PI / 2) + Math.PI / 4;
      const d = 0.8 + Math.random() * 1.0;
      const w = (Math.random() - 0.5) * 0.16;
      x = Math.cos(s) * d - Math.sin(s) * w;
      y = Math.sin(s) * d + Math.cos(s) * w;
    }
    a[i * 3] = x; a[i * 3 + 1] = y; a[i * 3 + 2] = (Math.random() - 0.5) * 0.34;
  }
  return a;
}

/* ---------- aT2 — WAVE FIELD (data flow) ---------- */
function genWave(N) {
  const a = new Float32Array(N * 3);
  const ROWS = 16;
  for (let i = 0; i < N; i++) {
    const row = i % ROWS;
    const x = (Math.random() - 0.5) * 7.4;
    const y = (row - ROWS / 2) * 0.26 + Math.sin(x * 1.4 + row * 0.7) * 0.55 + (Math.random() - 0.5) * 0.06;
    a[i * 3] = x; a[i * 3 + 1] = y; a[i * 3 + 2] = Math.cos(x * 0.9 + row) * 0.5;
  }
  return a;
}

/* ---------- aT3 — OJIX WORDMARK (brand reveal) ---------- */
function genText(N) {
  const a = new Float32Array(N * 3);
  const cv = document.createElement("canvas");
  cv.width = 560; cv.height = 180;
  const cx = cv.getContext("2d");
  cx.fillStyle = "#fff";
  cx.font = '700 150px "Roboto", Arial, sans-serif';
  cx.textAlign = "center"; cx.textBaseline = "middle";
  cx.fillText("OJIX", 280, 96);
  const px = cx.getImageData(0, 0, 560, 180).data;
  const filled = [];
  for (let y = 0; y < 180; y += 2) for (let x = 0; x < 560; x += 2)
    if (px[(y * 560 + x) * 4 + 3] > 128) filled.push([x, y]);
  for (let i = 0; i < N; i++) {
    const [x, y] = filled[(Math.random() * filled.length) | 0];
    a[i * 3] = (x / 560 - 0.5) * 7.6 + (Math.random() - 0.5) * 0.03;
    a[i * 3 + 1] = (0.5 - y / 180) * 2.45 + (Math.random() - 0.5) * 0.03;
    a[i * 3 + 2] = (Math.random() - 0.5) * 0.22;
  }
  return a;
}

const VERT = /* glsl */ `
attribute vec3 aT0; attribute vec3 aT1; attribute vec3 aT2; attribute vec3 aT3;
attribute float aDelay; attribute float aSize; attribute float aSeed;
uniform float uProgress; uniform float uTime; uniform float uPixelRatio;
varying float vSeed; varying float vFlight;
vec3 pick(float s){
  if(s < 0.5) return aT0;
  if(s < 1.5) return aT1;
  if(s < 2.5) return aT2;
  return aT3;
}
void main(){
  float seg = clamp(floor(uProgress), 0.0, 2.0);
  float local = clamp(uProgress - seg, 0.0, 1.0);
  float t = smoothstep(0.0, 1.0, clamp((local - aDelay*0.35) / 0.65, 0.0, 1.0));
  vec3 pos = mix(pick(seg), pick(seg + 1.0), t);
  float flight = t * (1.0 - t) * 4.0;
  pos.x += sin(uTime*0.8 + aSeed*40.0) * flight * 0.45;
  pos.y += cos(uTime*0.7 + aSeed*55.0) * flight * 0.45;
  pos.z += sin(uTime*0.9 + aSeed*30.0) * flight * 0.6;
  pos += normalize(pos + 0.0001) * sin(uTime*1.2 + aSeed*6.283) * 0.025;
  vSeed = aSeed; vFlight = flight;
  vec4 mv = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = aSize * uPixelRatio * (38.0 / -mv.z) * (1.0 + flight*0.6);
}`;
const FRAG = /* glsl */ `
varying float vSeed; varying float vFlight;
void main(){
  float d = length(gl_PointCoord - 0.5);
  if(d > 0.5) discard;
  float glow = pow(smoothstep(0.5, 0.0, d), 1.8);
  // OJIX brand palette (orange + warm white) — matches the new light theme
  vec3 orange = vec3(1.0, 0.361, 0.0);
  vec3 warmWhite = vec3(1.0, 0.92, 0.82);
  vec3 col = mix(orange, warmWhite, vSeed * 0.6);
  col += vFlight * 0.3;
  gl_FragColor = vec4(col, glow * 0.9);
}`;

function Cloud() {
  const mat = useRef();
  const cloud = useRef();
  const { size } = useThree();
  const isMobile = size.width < 820;
  const N = isMobile ? 3000 : 6500;

  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(genCircuit(N), 3));
    g.setAttribute("aT0", new THREE.BufferAttribute(genCircuit(N), 3));
    g.setAttribute("aT1", new THREE.BufferAttribute(genGear(N), 3));
    g.setAttribute("aT2", new THREE.BufferAttribute(genWave(N), 3));
    g.setAttribute("aT3", new THREE.BufferAttribute(genText(N), 3));
    const delays = new Float32Array(N), sizes = new Float32Array(N), seeds = new Float32Array(N);
    for (let i = 0; i < N; i++) { delays[i] = Math.random(); sizes[i] = 0.6 + Math.random() * 1.5; seeds[i] = Math.random(); }
    g.setAttribute("aDelay", new THREE.BufferAttribute(delays, 1));
    g.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));
    g.setAttribute("aSeed", new THREE.BufferAttribute(seeds, 1));
    g.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 10);
    return g;
  }, [N]);

  // regenerate wordmark once Roboto is loaded
  useEffect(() => {
    if (!document.fonts) return;
    document.fonts.ready.then(() => {
      geo.getAttribute("aT3").copyArray(genText(N));
      geo.getAttribute("aT3").needsUpdate = true;
    });
  }, [geo, N]);

  const state = useRef({ progress: 0, target: 0, vel: 0, last: 0, smx: 0, smy: 0 });
  const OFFSETS = isMobile
    ? [[0, 0.2, 0], [0, 0.4, 0], [0, 0, 0], [0, 0.2, 0]]
    : [[0, 0, 0], [0, -0.2, 0], [0, 0, 0], [0, 0.4, 0]];

  useFrame(({ clock, pointer }) => {
    const s = state.current;
    const doc = document.documentElement;
    const max = doc.scrollHeight - innerHeight;
    s.target = max > 0 ? (scrollY / max) * 3 : 0;
    s.vel += (scrollY - s.last) * 0.00012; s.last = scrollY; s.vel *= 0.92;
    s.progress += (s.target - s.progress) * 0.06;

    const t = clock.elapsedTime;
    mat.current.uniforms.uProgress.value = s.progress;
    mat.current.uniforms.uTime.value = t;

    const seg = Math.min(2, Math.floor(s.progress));
    const lt = Math.min(1, Math.max(0, s.progress - seg));
    const e = lt * lt * (3 - 2 * lt);
    const o0 = OFFSETS[seg], o1 = OFFSETS[seg + 1];
    cloud.current.position.set(o0[0] + (o1[0] - o0[0]) * e, o0[1] + (o1[1] - o0[1]) * e, 0);

    s.smx += (pointer.x * 0.5 - s.smx) * 0.04;
    s.smy += (pointer.y * 0.5 - s.smy) * 0.04;
    const damp = 1 - Math.max(0, Math.min(1, s.progress - 2));
    cloud.current.rotation.y = (s.smx * 1.1 + Math.sin(t * 0.2) * 0.08 + s.vel * 8) * damp;
    cloud.current.rotation.x = (-s.smy * 0.7 + Math.cos(t * 0.16) * 0.05) * damp;
    cloud.current.rotation.z = (t * 0.04 + s.vel * 3) * damp * (seg === 1 ? 2.6 : 1);
  });

  return (
    <points ref={cloud} geometry={geo} frustumCulled={false}>
      <shaderMaterial
        ref={mat}
        transparent depthWrite={false} blending={THREE.AdditiveBlending}
        uniforms={{
          uProgress: { value: 0 },
          uTime: { value: 0 },
          uPixelRatio: { value: Math.min(typeof devicePixelRatio !== "undefined" ? devicePixelRatio : 1, 1.5) },
        }}
        vertexShader={VERT}
        fragmentShader={FRAG}
      />
    </points>
  );
}

export default function Universe() {
  const reduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return (
    <Canvas
      className="universe"
      camera={{ position: [0, 0, 9], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}
      frameloop={reduced ? "demand" : "always"}
      eventSource={typeof document !== "undefined" ? document.body : undefined}
    >
      <Cloud />
      <EffectComposer disableNormalPass multisampling={0}>
        <Bloom intensity={0.85} luminanceThreshold={0.2} luminanceSmoothing={0.3} mipmapBlur radius={0.6} />
        <ChromaticAberration offset={[0.0008, 0.0006]} radialModulation modulationOffset={0.6} />
        <Vignette eskil={false} offset={0.2} darkness={0.45} />
      </EffectComposer>
    </Canvas>
  );
}
