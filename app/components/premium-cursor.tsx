"use client";

import { useEffect, useMemo, useRef } from "react";

type CursorConfig = {
  primaryColor: string;
  dotSize: number; // px
  ringSize: number; // px
};

function usePrefersReducedMotion() {
  const reducedMotion = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotion.current = mq.matches;
  }, []);

  return reducedMotion;
}

export function PremiumCursor({
  primaryColor = "#8a35ff",
}: {
  primaryColor?: string;
}) {
  const prefersReducedMotion = usePrefersReducedMotion();

  const config: CursorConfig = useMemo(
    () => ({
      primaryColor,
      dotSize: 9,
      ringSize: 30,
    }),
    [primaryColor]
  );

  const rafRef = useRef<number | null>(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const ringX = useRef(0);
  const ringY = useRef(0);
  const lastHoverTs = useRef(0);

  // CTA magnet state
  const magnetActive = useRef(false);
  const magnetTargetX = useRef(0);
  const magnetTargetY = useRef(0);
  const magneticStrength = 0.18; // subtle pull

  const dotElRef = useRef<HTMLDivElement | null>(null);
  const ringElRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    const dotEl = dotElRef.current;
    const ringEl = ringElRef.current;
    if (!dotEl || !ringEl) return;

    const isTouchDevice =
      typeof window !== "undefined" &&
      ("ontouchstart" in window ||
        (navigator.maxTouchPoints ?? 0) > 0 ||
        window.matchMedia("(pointer: coarse)").matches);

    if (isTouchDevice) {
      dotEl.style.display = "none";
      ringEl.style.display = "none";
      return;
    }

    // Hide native cursor while hovering the page.
    // Cursor still remains clickable because we set pointer-events: none.
    // Note: This doesn't affect accessibility since it's purely visual.
    const prevCursor = document.body.style.cursor;
    document.body.style.cursor = "none";

    const canAnimate = !prefersReducedMotion.current;

    const setPositions = (x: number, y: number) => {
      const dotSize = config.dotSize;
      const ringSize = config.ringSize;

      dotEl.style.transform = `translate(${x - dotSize / 2}px, ${y - dotSize / 2}px)`;
      ringEl.style.transform = `translate(${x - ringSize / 2}px, ${y - ringSize / 2}px)`;
    };

    const applyMagnet = (x: number, y: number) => {
      if (!magnetActive.current) return { x, y };
      const tx = x + (magnetTargetX.current - x) * magneticStrength;
      const ty = y + (magnetTargetY.current - y) * magneticStrength;
      return { x: tx, y: ty };
    };

    // Dual-circle: dot is immediate, ring is eased (rAF)
    const onPointerMove = (e: PointerEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;

      // inner dot follows instantly
      setPositions(e.clientX, e.clientY);

      if (!canAnimate) {
        ringX.current = e.clientX;
        ringY.current = e.clientY;
        const m = applyMagnet(ringX.current, ringY.current);
        setPositions(m.x, m.y);
        return;
      }

      if (rafRef.current == null) {
        const tick = () => {
          rafRef.current = null;

          // Ease outer ring toward target
          const lerp = 0.18;
          ringX.current += (mouseX.current - ringX.current) * lerp;
          ringY.current += (mouseY.current - ringY.current) * lerp;

          const m = applyMagnet(ringX.current, ringY.current);
          setPositions(m.x, m.y);

          rafRef.current = window.requestAnimationFrame(tick);
        };
        rafRef.current = window.requestAnimationFrame(tick);
      }
    };

    const isInteractiveTarget = (el: Element | null) => {
      if (!el) return false;
      const interactive = el.closest(
        "a, button, input, textarea, select, label, [role='button'], .btn, .text-link, .work-card, .service-card, .package-card, .blog-card, .role-card, .testimonial-card"
      );
      return !!interactive;
    };



    const setTextEditing = (isEditing: boolean) => {
      if (isEditing) {
        ringEl.classList.add("pc--textedit");
        document.body.style.cursor = "text";
      } else {
        ringEl.classList.remove("pc--textedit");
        document.body.style.cursor = "none";
      }
    };

    const isTextTarget = (el: Element | null) => {
      if (!el) return false;
      return !!el.closest(
        "input, textarea, select, [contenteditable='true']"
      );
    };

    const onPointerOver = (e: PointerEvent) => {
      const target = e.target as Element | null;

      // Text editing cursor
      if (isTextTarget(target)) {
        setTextEditing(true);
      } else {
        setTextEditing(false);
      }

      if (!isInteractiveTarget(target)) return;

      ringEl.classList.add("pc--hover");
      dotEl.classList.add("pc--hover");

      // CTA magnet activation (hover over .btn-primary)
      const cta = target?.closest?.(".btn-primary") as HTMLElement | null;
      const isCta = !!cta;
      if (isCta) {
        ringEl.classList.add("pc--cta");
        dotEl.classList.add("pc--cta");

        const r = cta.getBoundingClientRect();
        magnetActive.current = true;
        magnetTargetX.current = r.left + r.width / 2;
        magnetTargetY.current = r.top + r.height / 2;
      }

      lastHoverTs.current = performance.now();
    };

    const onPointerOut = (e: PointerEvent) => {
      const related = e.relatedTarget as Element | null;
      const target = e.target as Element | null;

      // Text editing exit
      if (isTextTarget(target) && !isTextTarget(related)) {
        setTextEditing(false);
      }

      const leavingInteractive = isInteractiveTarget(target);
      const enteringInteractive = isInteractiveTarget(related);

      if (leavingInteractive && !enteringInteractive) {
        ringEl.classList.remove("pc--hover");
        dotEl.classList.remove("pc--hover");
      }

      // CTA magnet exit
      const leavingCta = !!target?.closest?.(".btn-primary");
      const enteringCta = !!related?.closest?.(".btn-primary");
      if (leavingCta && !enteringCta) {
        ringEl.classList.remove("pc--cta");
        dotEl.classList.remove("pc--cta");
        magnetActive.current = false;
      }
    };

    const onPointerDown = () => {
      ringEl.classList.add("pc--down");
      dotEl.classList.add("pc--down");
    };

    const onPointerUp = () => {
      ringEl.classList.remove("pc--down");
      dotEl.classList.remove("pc--down");
    };

    // Button click shrink (brief). pointerdown/up works even if mouseup misses.
    const onPointerCancel = () => {
      ringEl.classList.remove("pc--down");
      dotEl.classList.remove("pc--down");
    };

    document.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerover", onPointerOver);
    document.addEventListener("pointerout", onPointerOut);
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("pointerup", onPointerUp);
    document.addEventListener("pointercancel", onPointerCancel);

    // Focus fallback for keyboards (CTA + text edit)
    const onFocusIn = (e: FocusEvent) => {
      const t = e.target as Element | null;
      if (t && t.closest(".btn-primary")) {
        ringEl.classList.add("pc--cta");
        dotEl.classList.add("pc--cta");
        magnetActive.current = false;
      }

      if (isTextTarget(t)) {
        setTextEditing(true);
      }
    };

    const onFocusOut = () => {
      ringEl.classList.remove("pc--cta");
      dotEl.classList.remove("pc--cta");
      magnetActive.current = false;
      setTextEditing(false);
    };

    document.addEventListener("focusin", onFocusIn);
    document.addEventListener("focusout", onFocusOut);


    return () => {
      if (rafRef.current != null) {
        window.cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }

      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("pointerout", onPointerOut);
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("pointerup", onPointerUp);
      document.removeEventListener("pointercancel", onPointerCancel);
      document.removeEventListener("focusin", onFocusIn);
      document.removeEventListener("focusout", onFocusOut);


      document.body.style.cursor = prevCursor;

      ringEl.classList.remove("pc--hover", "pc--down", "pc--cta");
      dotEl.classList.remove("pc--hover", "pc--down", "pc--cta");
    };
  }, [config.dotSize, config.ringSize, prefersReducedMotion]);

  useEffect(() => {
    // set colors via inline style once
    if (dotElRef.current) dotElRef.current.style.background = config.primaryColor;
    if (ringElRef.current) {
      ringElRef.current.style.borderColor = config.primaryColor;
      ringElRef.current.style.boxShadow = `0 0 0 1px rgba(138,53,255,0.35), 0 0 32px rgba(138,53,255,0.22)`;
    }
  }, [config.primaryColor]);

  return (
    <>
      <div
        ref={ringElRef}
        className="pc pc--ring"
        aria-hidden="true"
      />
      <div
        ref={dotElRef}
        className="pc pc--dot"
        aria-hidden="true"
      />
    </>
  );
}

