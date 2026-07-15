"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type ContinuousStatProps = {
  value: number;
  unit?: string;
  suffix?: string;
  prefix?: string;
  durationMs?: number;
  loopPauseMs?: number;
  className?: string;
};

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export function ContinuousStat({
  value,
  unit = "",
  suffix = "",
  prefix = "",
  durationMs = 1800,
  loopPauseMs = 500,
  className,
}: ContinuousStatProps) {
  const prefersReducedMotion = useRef(false);
  const [display, setDisplay] = useState(0);

  const config = useMemo(() => {
    const decimals = Number.isInteger(value) ? 0 : Math.min(2, value.toString().split(".")[1]?.length ?? 0);
    return { decimals };
  }, [value]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    prefersReducedMotion.current = mq.matches;
    if (prefersReducedMotion.current) {
      setDisplay(value);
      return;
    }

    let raf = 0;
    let start = 0;
    let phase: "rise" | "hold" = "rise";
    let phaseStart = performance.now();

    const loop = (now: number) => {
      if (!start) start = now;

      if (phase === "rise") {
        const elapsed = now - phaseStart;
        const t = clamp(elapsed / durationMs, 0, 1);
        const eased = easeOutCubic(t);
        const next = value * eased;
        setDisplay(next);
        if (t >= 1) {
          phase = "hold";
          phaseStart = now;
        }
      } else {
        // hold at max then reset
        if (now - phaseStart >= loopPauseMs) {
          phase = "rise";
          phaseStart = now;
          start = 0;
          setDisplay(0);
        }
      }

      raf = window.requestAnimationFrame(loop);
    };

    raf = window.requestAnimationFrame(loop);
    return () => window.cancelAnimationFrame(raf);
  }, [durationMs, loopPauseMs, value]);

  const formatted = useMemo(() => {
    const decimals = config.decimals;
    const safeDisplay = Number.isFinite(display) ? display : 0;
    if (decimals === 0) return Math.round(safeDisplay).toString();
    return safeDisplay.toFixed(decimals);
  }, [config.decimals, display]);

  return (
    <b className={className}>
      {prefix}
      {formatted}
      {unit}
      {suffix}
    </b>
  );
}

