"use client";

import { useMemo } from "react";
import { useTheme } from "@/components/theme-provider";

const SNOW_COUNT = 60;
const EMBER_COUNT = 40;

function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function AmbientEffect() {
  const { theme } = useTheme();

  const snowflakes = useMemo(() => {
    const rand = mulberry32(20260214);
    return Array.from({ length: SNOW_COUNT }, (_, i) => ({
      id: i,
      left: `${rand() * 100}%`,
      size: 2 + rand() * 3.5,
      duration: 12 + rand() * 14,
      delay: -rand() * 24,
      drift: 20 + rand() * 60,
      opacity: 0.3 + rand() * 0.5,
    }));
  }, []);

  const embers = useMemo(() => {
    const rand = mulberry32(20260817);
    return Array.from({ length: EMBER_COUNT }, (_, i) => ({
      id: i,
      left: `${rand() * 100}%`,
      size: 2 + rand() * 3,
      duration: 9 + rand() * 11,
      delay: -rand() * 18,
      sway: 25 + rand() * 70,
      opacity: 0.35 + rand() * 0.45,
    }));
  }, []);

  if (theme === "dark") {
    return (
      <div aria-hidden="true" className="ambient-layer pointer-events-none fixed inset-0 z-[60] overflow-hidden">
        {snowflakes.map((s) => (
          <span
            key={s.id}
            className="snowflake"
            style={{
              left: s.left,
              width: `${s.size}px`,
              height: `${s.size}px`,
              ["--opacity" as string]: s.opacity,
              ["--drift" as string]: `${s.drift}px`,
              animationDuration: `${s.duration}s`,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div aria-hidden="true" className="ambient-layer pointer-events-none fixed inset-0 z-[60] overflow-hidden">
      {embers.map((e) => (
        <span
          key={e.id}
          className="ember"
          style={{
            left: e.left,
            width: `${e.size}px`,
            height: `${e.size}px`,
            ["--opacity" as string]: e.opacity,
            ["--sway" as string]: `${e.sway}px`,
            animationDuration: `${e.duration}s`,
            animationDelay: `${e.delay}s`,
          }}
        />
      ))}
    </div>
  );
}