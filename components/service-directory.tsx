"use client";

import { useMemo, useState } from "react";
import { CheckIcon, serviceIcons } from "@/components/icons";
import { services } from "@/lib/content";
import type { ReactElement } from "react";

const CATEGORIES = [
  { label: "All", value: "all" },
  { label: "Web & Mobile", value: "web-mobile" },
  { label: "SaaS", value: "saas" },
  { label: "Backend", value: "backend" },
  { label: "AI/ML", value: "ai-ml" },
  { label: "Cloud", value: "cloud" },
];

const CATEGORY_SLUGS: Record<string, string[]> = {
  all: services.map((s) => s.slug),
  "web-mobile": ["websites", "mobile"],
  saas: ["saas"],
  backend: ["custom-software", "api-backend"],
  "ai-ml": ["ai-ml"],
  cloud: ["paas", "cloud", "maintenance"],
};

const FEATURED = new Set(["custom-software", "websites", "mobile"]);
const COMPACT = "maintenance";

export function ServiceDirectory() {
  const [active, setActive] = useState("all");

  const visible = useMemo(
    () => services.filter((s) => CATEGORY_SLUGS[active].includes(s.slug)),
    [active]
  );

  return (
    <>
      <div
        role="group"
        aria-label="Filter services by category"
        className="mt-12 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:mt-14"
      >
        {CATEGORIES.map((cat) => {
          const isActive = active === cat.value;
          return (
            <button
              key={cat.value}
              type="button"
              onClick={() => setActive(cat.value)}
              aria-pressed={isActive}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-[background-color,color,border-color,transform] duration-200 ${
                isActive
                  ? "bg-[var(--color-accent)] text-white shadow-[0_10px_24px_-12px_var(--color-accent-glow)]"
                  : "border border-[var(--border)] bg-[var(--card)] text-[var(--text-muted)] hover:-translate-y-0.5 hover:border-[var(--color-accent)]/50 hover:text-[var(--text)]"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      <div
        key={active}
        className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
      >
        {visible.map((service, index) => {
          const Icon = serviceIcons[service.slug] ?? CheckIcon;
          const originalIndex = services.indexOf(service);
          const number = String(originalIndex + 1).padStart(2, "0");
          return (
            <ServiceCard
              key={service.slug}
              service={service}
              icon={<Icon width={20} height={20} strokeWidth={1.5} />}
              number={number}
              index={index}
              featured={FEATURED.has(service.slug)}
              compact={service.slug === COMPACT}
            />
          );
        })}
      </div>
    </>
  );
}

function ServiceCard({
  service,
  icon,
  number,
  index,
  featured,
  compact,
}: {
  service: (typeof services)[number];
  icon: ReactElement;
  number: string;
  index: number;
  featured: boolean;
  compact: boolean;
}) {
  return (
    <article
      id={service.slug}
      className={`group relative flex scroll-mt-24 animate-[service-in_280ms_ease-out_both] flex-col rounded-[22px] border border-[var(--border)] bg-[var(--card)] transition-all duration-200 ease-out hover:-translate-y-[3px] hover:border-[var(--color-accent)]/55 hover:shadow-[0_24px_48px_-28px_var(--color-accent-glow)] ${
        compact ? "p-6" : featured ? "p-8" : "p-7"
      }`}
      style={{ animationDelay: `${index * 45}ms` }}
    >
      {featured && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/50 to-transparent"
        />
      )}

      <div className="flex items-start justify-between gap-4">
        <span
          className={`grid place-items-center rounded-xl bg-[var(--color-accent)]/10 text-[var(--color-accent)] transition-[background-color,color] duration-200 group-hover:bg-[var(--color-accent)] group-hover:text-white ${
            compact ? "h-10 w-10" : featured ? "h-12 w-12" : "h-11 w-11"
          }`}
        >
          {icon}
        </span>
        <span className="font-mono text-xs font-medium tracking-wider text-[var(--text-faint)]">
          {number}
        </span>
      </div>

      <h2
        className={`heading-card mt-5 text-[var(--text)] ${
          featured ? "text-xl" : "text-lg"
        }`}
      >
        {service.name}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
        {service.description}
      </p>

      <ul
        className={`flex flex-wrap gap-2 ${
          compact ? "mt-4" : "mt-6"
        } [&:empty]:hidden`}
      >
        {service.items.map((item) => (
          <li
            key={item}
            className="inline-flex items-center rounded-lg border border-[var(--border)] bg-[var(--bg)]/60 px-2.5 py-1 text-xs font-medium text-[var(--text-muted)]"
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}