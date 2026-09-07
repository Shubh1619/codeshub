"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/components/theme-provider";

const LOGOS = {
  dark: "/logos/logo-dark.png",
  light: "/logos/logo-light.png",
} as const;

export function BrandLogo({
  height = 32,
  className = "",
}: {
  height?: number;
  className?: string;
}) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <span
        aria-hidden="true"
        className={`block ${className}`}
        style={{ height, width: height * 3 }}
      />
    );
  }

  return (
    <img
      src={LOGOS[theme]}
      alt="Codeshub"
      width={816}
      height={272}
      className={`block ${className}`}
      style={{ height, width: "auto" }}
    />
  );
}