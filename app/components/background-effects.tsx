"use client";

import { useEffect, useRef, useMemo } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

type Particle = {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseOpacity: number;
  hue: number;
  pulsePhase: number;
  pulseSpeed: number;
};

type BgEffectsProps = {
  enabled?: boolean;
  intensity?: "low" | "medium" | "high";
};

// ─── Device detection ────────────────────────────────────────────────────────

function isTouchDevice() {
  if (typeof window === "undefined") return false;
  return (
    "ontouchstart" in window ||
    (navigator.maxTouchPoints ?? 0) > 0 ||
    window.matchMedia("(pointer: coarse)").matches
  );
}

function isLowPerfDevice() {
  if (typeof window === "undefined") return false;
  const cores = navigator.hardwareConcurrency ?? 8;
  const mem = (navigator as any).deviceMemory ?? 8;
  return cores < 4 || mem < 4;
}

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

// ─── Component ───────────────────────────────────────────────────────────────

export function BackgroundEffect({
  enabled = true,
  intensity = "medium",
}: BgEffectsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const rafRef = useRef<number | null>(null);
  const lastMoveRef = useRef(performance.now());

  // Normalized cursor (0–1)
  const cursorX = useRef(0.5);
  const cursorY = useRef(0.5);
  const cursorPxX = useRef(0);
  const cursorPxY = useRef(0);

  // Eased orb position
  const orbX = useRef(0.5);
  const orbY = useRef(0.5);

  // Second orb (offset for dual-layer richness)
  const orb2X = useRef(0.3);
  const orb2Y = useRef(0.7);

  // Fade
  const fadeOpacity = useRef(1);
  const wasEverActive = useRef(false);

  // Particles
  const particles = useRef<Particle[]>([]);

  const caps = useRef({
    isTouch: false,
    isLowPerf: false,
    reducedMotion: false,
  });

  // ── Particle count ──
  const particleCount = useMemo(() => {
    if (!enabled) return 0;
    if (isLowPerfDevice() || prefersReducedMotion()) return 0;
    const base = intensity === "low" ? 20 : intensity === "high" ? 45 : 30;
    return isTouchDevice() ? Math.floor(base * 0.4) : base;
  }, [enabled, intensity]);

  // ── Init particles ──
  useEffect(() => {
    if (!enabled || particleCount === 0) return;
    const w = window.innerWidth;
    const h = window.innerHeight;
    particles.current = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: rand(0, w),
      y: rand(0, h),
      vx: rand(-0.2, 0.2),
      vy: rand(-0.2, 0.2),
      size: rand(1.5, 4.5),
      baseOpacity: rand(0.2, 0.7),
      hue: rand(250, 310),
      pulsePhase: rand(0, Math.PI * 2),
      pulseSpeed: rand(0.005, 0.02),
    }));
  }, [enabled, particleCount]);

  // ── Pointer tracking ──
  useEffect(() => {
    if (!enabled) return;
    const onPointerMove = (e: PointerEvent) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      cursorPxX.current = e.clientX;
      cursorPxY.current = e.clientY;
      cursorX.current = clamp(e.clientX / w, 0, 1);
      cursorY.current = clamp(e.clientY / h, 0, 1);
      lastMoveRef.current = performance.now();
      wasEverActive.current = true;
    };
    document.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => document.removeEventListener("pointermove", onPointerMove);
  }, [enabled]);

  // ── Animation loop ──
  useEffect(() => {
    if (!enabled) return;
    const orb = orbRef.current;
    const canvas = canvasRef.current;
    if (!orb && !canvas) return;

    const dpr = window.devicePixelRatio || 1;
    const inactivityDelay = 4000;
    const fadeSpeed = 0.02;
    const orbLerp = 0.07;
    const orb2Lerp = 0.04;
    const particleAttraction = 0.0008;
    const maxAttractionDist = 300;

    caps.current = {
      isTouch: isTouchDevice(),
      isLowPerf: isLowPerfDevice(),
      reducedMotion: prefersReducedMotion(),
    };

    // Resize canvas
    const resizeCanvas = () => {
      if (!canvas) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      const ctx = canvas.getContext("2d");
      if (ctx) ctx.scale(dpr, dpr);
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let time = 0;

    const tick = (now: number) => {
      time += 1;
      const inactiveDuration = now - lastMoveRef.current;

      // Fade
      if (inactiveDuration > inactivityDelay) {
        fadeOpacity.current = Math.max(0.12, fadeOpacity.current - fadeSpeed);
      } else {
        fadeOpacity.current = Math.min(1, fadeOpacity.current + fadeSpeed * 2);
      }
      const fade = fadeOpacity.current;

      // ── Dual orbs ──
      if (orb) {
        orbX.current = lerp(orbX.current, cursorX.current, orbLerp);
        orbY.current = lerp(orbY.current, cursorY.current, orbLerp);
        orb2X.current = lerp(orb2X.current, 1 - cursorX.current, orb2Lerp);
        orb2Y.current = lerp(orb2Y.current, 1 - cursorY.current, orb2Lerp);

        // Primary orb – larger, purple-dominant
        const primaryX = orbX.current * 100;
        const primaryY = orbY.current * 100;
        // Secondary orb – offset, blue-cyan, smaller
        const secondaryX = orb2X.current * 100;
        const secondaryY = orb2Y.current * 100;

        orb.style.background = `
          radial-gradient(circle at ${primaryX}% ${primaryY}%, rgba(138, 53, 255, ${0.18 * fade}) 0%, transparent 60%),
          radial-gradient(circle at ${secondaryX}% ${secondaryY}%, rgba(22, 184, 255, ${0.10 * fade}) 0%, transparent 50%),
          radial-gradient(circle at ${50}% ${50}%, rgba(109, 92, 255, ${0.05 * fade}) 0%, transparent 70%)
        `;
        orb.style.opacity = "1";
        orb.style.transform = "translateZ(0)";
        orb.style.left = "0";
        orb.style.top = "0";
        orb.style.width = "100%";
        orb.style.height = "100%";
      }

      // ── Canvas particles ──
      if (canvas && !caps.current.isLowPerf) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          const w = window.innerWidth;
          const h = window.innerHeight;
          ctx.clearRect(0, 0, w, h);

          if (fade > 0.05) {
            const pts = particles.current;
            for (let i = 0; i < pts.length; i++) {
              const p = pts[i];

              // Movement
              p.x += p.vx;
              p.y += p.vy;

              // Wrap
              if (p.x < -30) p.x = w + 30;
              if (p.x > w + 30) p.x = -30;
              if (p.y < -30) p.y = h + 30;
              if (p.y > h + 30) p.y = -30;

              // Pulsing opacity
              p.pulsePhase += p.pulseSpeed;
              const pulseFactor = 0.5 + 0.5 * Math.sin(p.pulsePhase);

              // Cursor attraction
              const dx = cursorPxX.current - p.x;
              const dy = cursorPxY.current - p.y;
              const dist = Math.sqrt(dx * dx + dy * dy);
              if (dist < maxAttractionDist && dist > 1) {
                const force = (1 - dist / maxAttractionDist) * particleAttraction;
                p.vx += dx * force;
                p.vy += dy * force;
              }

              // Damping
              p.vx *= 0.995;
              p.vy *= 0.995;

              const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
              if (speed > 2) {
                p.vx = (p.vx / speed) * 2;
                p.vy = (p.vy / speed) * 2;
              }

              // Proximity factor (brighter when closer to cursor)
              const proximityFactor = dist < maxAttractionDist
                ? 0.3 + 0.7 * (1 - dist / maxAttractionDist)
                : 0.3;

              const opacity = p.baseOpacity * fade * pulseFactor * proximityFactor;

              // Glow ring
              ctx.beginPath();
              ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
              ctx.fillStyle = `hsla(${p.hue}, 70%, 60%, ${opacity * 0.08})`;
              ctx.fill();

              // Mid glow
              ctx.beginPath();
              ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
              ctx.fillStyle = `hsla(${p.hue}, 80%, 70%, ${opacity * 0.25})`;
              ctx.fill();

              // Core dot
              ctx.beginPath();
              ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
              ctx.fillStyle = `hsla(${p.hue}, 90%, 85%, ${opacity})`;
              ctx.fill();
            }

            // ── Connection lines between nearby particles ──
            if (fade > 0.2) {
              for (let i = 0; i < pts.length; i++) {
                for (let j = i + 1; j < pts.length; j++) {
                  const dx = pts[i].x - pts[j].x;
                  const dy = pts[i].y - pts[j].y;
                  const dist = Math.sqrt(dx * dx + dy * dy);
                  if (dist < 120) {
                    const lineOpacity = (1 - dist / 120) * 0.12 * fade;
                    ctx.beginPath();
                    ctx.moveTo(pts[i].x, pts[i].y);
                    ctx.lineTo(pts[j].x, pts[j].y);
                    ctx.strokeStyle = `hsla(270, 60%, 70%, ${lineOpacity})`;
                    ctx.lineWidth = 0.6;
                    ctx.stroke();
                  }
                }
              }
            }
          }
        }
      }

      rafRef.current = window.requestAnimationFrame(tick);
    };

    rafRef.current = window.requestAnimationFrame(tick);

    return () => {
      if (rafRef.current != null) {
        window.cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div ref={containerRef} className="bg-effects" aria-hidden="true">
      <div ref={orbRef} className="bg-effects__orb" />
      <canvas ref={canvasRef} className="bg-effects__canvas" />
    </div>
  );
}
