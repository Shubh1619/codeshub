"use client";

import { useEffect, useRef } from "react";

const RING = 36;
const DOT = 8;
const LERP = 0.16;

function isFinePointer(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(pointer: fine)").matches;
}

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function CursorEffect() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;
    if (!isFinePointer() || prefersReducedMotion()) return;

    const root = document.documentElement;
    root.classList.add("has-cursor");

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const pos = { ...target };
    let targetScale = 1;
    let scale = 1;
    let visible = false;
    let raf = 0;

    const move = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (!visible) {
        visible = true;
        pos.x = target.x;
        pos.y = target.y;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
      }
      dot.style.transform = `translate3d(${target.x - DOT / 2}px, ${target.y - DOT / 2}px, 0)`;
    };

    const over = (e: MouseEvent) => {
      const el = e.target as HTMLElement | null;
      const interactive =
        el &&
        el.closest(
          'a, button, input, textarea, select, label, [role="button"], summary, [data-cursor]'
        );
      targetScale = interactive ? 1.8 : 1;
    };

    const leave = () => {
      visible = false;
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const tick = () => {
      pos.x += (target.x - pos.x) * LERP;
      pos.y += (target.y - pos.y) * LERP;
      scale += (targetScale - scale) * 0.18;
      ring.style.transform = `translate3d(${pos.x - RING / 2}px, ${pos.y - RING / 2}px, 0) scale(${scale})`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    root.addEventListener("mouseleave", leave);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      root.removeEventListener("mouseleave", leave);
      root.classList.remove("has-cursor");
    };
  }, []);

  return (
    <>
      <div aria-hidden="true" ref={ringRef} className="cursor-ring" />
      <div aria-hidden="true" ref={dotRef} className="cursor-dot" />
    </>
  );
}