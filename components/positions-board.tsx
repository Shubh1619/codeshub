"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ButtonLink } from "@/components/ui";
import { ArrowRightIcon } from "@/components/icons";
import { openings } from "@/lib/content";

const FILTERS = [
  { label: "All Positions", value: "all" },
  { label: "Full-time", value: "full-time" },
  { label: "Part-time", value: "part-time" },
  { label: "Internships", value: "internships" },
];

const TYPE_BY_VALUE: Record<string, string | null> = {
  all: null,
  "full-time": "Full-time",
  "part-time": "Part-time",
  internships: "Internship",
};

export function PositionsFallback() {
  return (
    <div className="mt-6 grid gap-5 sm:grid-cols-2">
      {openings.map((opening) => (
        <PositionCard key={opening.title} opening={opening} />
      ))}
    </div>
  );
}

export function PositionsBoard() {
  const params = useSearchParams();
  const [active, setActive] = useState(() => {
    const type = params.get("type");
    if (type && TYPE_BY_VALUE[type] !== undefined) return type;
    return "all";
  });

  const visible = useMemo(() => {
    const match = TYPE_BY_VALUE[active];
    if (!match) return openings;
    return openings.filter((o) => o.type === match);
  }, [active]);

  return (
    <>
      <div
        role="group"
        aria-label="Filter open positions"
        className="mt-8 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:mt-10"
      >
        {FILTERS.map((filter) => {
          const isActive = active === filter.value;
          return (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActive(filter.value)}
              aria-pressed={isActive}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-[background-color,color,border-color,transform] duration-200 ${
                isActive
                  ? "bg-[var(--color-accent)] text-white shadow-[0_10px_24px_-12px_var(--color-accent-glow)]"
                  : "border border-[var(--border)] bg-[var(--card)] text-[var(--text-muted)] hover:-translate-y-0.5 hover:border-[var(--color-accent)]/50 hover:text-[var(--text)]"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      {visible.length === 0 ? (
        <div className="mt-6 rounded-[22px] border border-dashed border-[var(--border)] bg-[var(--bg-muted)] px-6 py-14 text-center">
          <h3 className="heading-card text-xl text-[var(--text)]">
            No openings in this category right now.
          </h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-[var(--text-muted)]">
            You can still send us your resume for future opportunities.
          </p>
          <div className="mt-7 flex justify-center">
            <ButtonLink href="/contact">Send Your Resume</ButtonLink>
          </div>
        </div>
      ) : (
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {visible.map((opening) => (
            <PositionCard key={opening.title} opening={opening} />
          ))}
        </div>
      )}
    </>
  );
}

function PositionCard({
  opening,
}: {
  opening: (typeof openings)[number];
}) {
  return (
    <article className="flex flex-col rounded-[22px] border border-[var(--border)] bg-[var(--card)] p-7 transition-all duration-200 ease-out hover:-translate-y-[3px] hover:border-[var(--color-accent)]/40 hover:shadow-[0_18px_40px_-24px_var(--color-accent-glow)]">
      <div className="flex items-start justify-between gap-4">
        <h3 className="heading-card text-lg text-[var(--text)]">
          {opening.title}
        </h3>
        <span className="shrink-0 rounded-full border border-[var(--border)] bg-[var(--bg-muted)] px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-[var(--text-muted)]">
          {opening.type}
        </span>
      </div>

      <p className="mt-1.5 font-mono text-xs text-[var(--text-faint)]">
        {opening.location}
      </p>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">
        {opening.description}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {opening.stack.split(" · ").map((item) => (
          <li
            key={item}
            className="rounded-lg border border-[var(--border)] bg-[var(--bg)]/60 px-2.5 py-1 text-xs font-medium text-[var(--text-muted)]"
          >
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center justify-between gap-3 border-t border-[var(--border)] pt-5">
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          {opening.status}
        </span>
        <a
          href="/contact"
          className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--text)] transition-colors hover:text-[var(--color-accent)]"
        >
          View Position
          <ArrowRightIcon
            width={15}
            height={15}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </a>
      </div>
    </article>
  );
}