"use client";

import { useEffect, useRef } from "react";

const MAX_POINTS = 130;
const SPAWN_GAP = 12;
const LINK_DIST = 110;

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
}

function hexToRgb(hex: string): [number, number, number] | null {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex.trim());
  if (!m) return null;
  const n = parseInt(m[1], 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

export function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const points: Point[] = [];
    let raf = 0;
    let lastX = 0;
    let lastY = 0;
    let hasLast = false;
    let colorCache = { accent: "#6d5bff", soft: "#8b7bff" };
    let lastColorRead = 0;

    const readColors = (now: number) => {
      if (now - lastColorRead < 250) return;
      lastColorRead = now;
      const root = getComputedStyle(document.documentElement);
      const accent = root.getPropertyValue("--color-accent").trim() || "#6d5bff";
      const soft = root.getPropertyValue("--color-accent-soft").trim() || "#8b7bff";
      colorCache = { accent, soft };
    };

    const spawn = (x: number, y: number, color: string) => {
      points.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        life: 1,
        maxLife: 40 + Math.random() * 26,
        color,
      });
      if (points.length > MAX_POINTS) points.splice(0, points.length - MAX_POINTS);
    };

    const onMove = (e: MouseEvent) => {
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      const dist = Math.hypot(dx, dy);
      if (hasLast && dist >= SPAWN_GAP) {
        const steps = Math.min(Math.floor(dist / SPAWN_GAP), 5);
        const color = Math.random() < 0.5 ? colorCache.accent : colorCache.soft;
        for (let i = 0; i < steps; i++) {
          const t = (i + 1) / steps;
          spawn(
            lastX + dx * t + (Math.random() - 0.5) * 7,
            lastY + dy * t + (Math.random() - 0.5) * 7,
            color
          );
        }
      } else if (!hasLast) {
        spawn(e.clientX, e.clientY, colorCache.accent);
      }
      lastX = e.clientX;
      lastY = e.clientY;
      hasLast = true;
    };

    const accentRgb = () => hexToRgb(colorCache.accent) ?? [109, 91, 255];

    const tick = (now: number) => {
      readColors(now);
      ctx.clearRect(0, 0, width, height);

      for (let i = points.length - 1; i >= 0; i--) {
        const p = points[i];
        p.life -= 1 / p.maxLife;
        if (p.life <= 0) {
          points.splice(i, 1);
          continue;
        }
        p.x += p.vx;
        p.y += p.vy;
      }

      const [r, g, b] = accentRgb();
      ctx.lineWidth = 1;
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const a = points[i];
          const b2 = points[j];
          const d = Math.hypot(a.x - b2.x, a.y - b2.y);
          if (d < LINK_DIST) {
            const alpha =
              Math.min(a.life, b2.life) * (1 - d / LINK_DIST) * 0.28;
            ctx.strokeStyle = `rgba(${r},${g},${b},${alpha.toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b2.x, b2.y);
            ctx.stroke();
          }
        }
      }

      for (const p of points) {
        ctx.globalAlpha = p.life;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(p.life * 1.8, 0.6), 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[58]"
    />
  );
}