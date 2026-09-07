"use client";

import { useEffect, useState } from "react";

const SHAPES = [
  <path key="0" d="M45 30L15 60L45 90" />,
  <path key="1" d="M75 30L105 60L75 90" />,
  <path key="2" d="M70 25L50 95" />,
  <path key="3" d="M38 35L20 60L38 85M82 35L100 60L82 85" />,
  <path key="4" d="M35 42L20 60L35 78M85 42L100 60L85 78" />,
  <path key="5" d="M40 30L30 45L30 60L40 75M80 30L90 45L90 60L80 75" />,
  <path key="6" d="M42 28L18 60L42 92M78 28L102 60L78 92" />,
];

const COMBOS = [
  [0],
  [1],
  [0, 1, 2],
  [3],
  [4],
  [5],
  [6],
  [0, 1],
  [3, 4],
];

export function CodeWatermark() {
  const [shapeIndex, setShapeIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setShapeIndex((i) => (i + 1) % COMBOS.length);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  const combo = COMBOS[shapeIndex];

  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute bottom-6 right-6 h-28 w-28 text-[var(--color-accent)] opacity-[0.04] dark:opacity-[0.06] transition-opacity duration-700"
      viewBox="0 0 120 120"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {combo.map((index) => SHAPES[index])}
    </svg>
  );
}
