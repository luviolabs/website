"use client";

import { useEffect, useRef } from "react";

// ─── Floating Glow Particles ─────────────────────────────────────────────────

function GlowParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    let w = window.innerWidth;
    let h = window.innerHeight;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      pulseSpeed: number;
      phase: number;
    }> = [];

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.scale(dpr, dpr);
    };

    const initParticles = () => {
      const count = Math.min(Math.floor((w * h) / 60000), 35);
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2.5 + 1,
        opacity: Math.random() * 0.5 + 0.15,
        pulseSpeed: Math.random() * 0.015 + 0.005,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    resize();
    initParticles();

    let animId: number;
    let time = 0;

    const draw = () => {
      time += 1;
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.phase += p.pulseSpeed;

        // Wrap
        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20;
        if (p.y > h + 20) p.y = -20;

        const pulse = 0.5 + 0.5 * Math.sin(p.phase);
        const alpha = p.opacity * pulse;

        // Outer glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(138, 53, 255, ${alpha * 0.06})`;
        ctx.fill();

        // Mid glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(138, 53, 255, ${alpha * 0.15})`;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 170, 255, ${alpha * 0.8})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="hero-bg__canvas"
      aria-hidden="true"
    />
  );
}

// ─── Hero Background Component ───────────────────────────────────────────────

export function HeroBackground() {
  return (
    <div className="hero-bg" aria-hidden="true">
      {/* Layer 1: Base color */}
      <div className="hero-bg__base" />

      {/* Layer 2: Large Purple Aurora (blur 180px, opacity 30%) */}
      <div className="hero-bg__aurora" />

      {/* Layer 3: Radial Gradient (15% opacity) */}
      <div className="hero-bg__radial" />

      {/* Layer 4: Noise Texture (4% opacity) */}
      <div className="hero-bg__noise" />

      {/* Layer 5: Floating Glow Particles */}
      <GlowParticles />
    </div>
  );
}
