import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRightIcon } from "@/components/icons";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 ${className}`}>
      {children}
    </div>
  );
}

export function SectionHeading({
  kicker,
  title,
  intro,
  align = "left",
  as = "h2",
}: {
  kicker?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
}) {
  const Heading = as;
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl"
      }
    >
      {kicker && (
        <p className="label-eyebrow mb-4 text-xs uppercase tracking-widest text-[var(--color-accent)]">
          {kicker}
        </p>
      )}
      <Heading className="heading-section text-3xl sm:text-4xl lg:text-[2.75rem] text-[var(--text)]">
        {title}
      </Heading>
      {intro && (
        <p className="mt-5 text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
          {intro}
        </p>
      )}
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  icon = true,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  icon?: boolean;
  className?: string;
}) {
  const styles =
    variant === "primary"
      ? "bg-[var(--color-accent)] text-white shadow-[0_12px_30px_-12px_var(--color-accent-glow)] hover:-translate-y-0.5 hover:shadow-[0_16px_34px_-12px_var(--color-accent-glow)]"
      : "border border-[var(--border)] bg-[var(--bg-raised)] text-[var(--text)] hover:border-[var(--color-accent)] hover:bg-[var(--card)]";

  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-[transform,box-shadow,border-color,background-color] ${styles} ${className}`}
    >
      {children}
      {icon && (
        <ArrowRightIcon
          className="transition-transform group-hover:translate-x-0.5"
          width={16}
          height={16}
        />
      )}
    </Link>
  );
}
