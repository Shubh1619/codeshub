"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowRightIcon } from "@/components/icons";
import { caseStudies, type CaseStudy } from "@/lib/content";

const FILTERS = ["All", "Web", "Mobile", "SaaS", "AI / ML", "Business Software"];

export function ProjectShowcase() {
  const [active, setActive] = useState("All");
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const visible = useMemo(
    () =>
      active === "All"
        ? caseStudies
        : caseStudies.filter((s) => s.category === active),
    [active]
  );

  const openStudy = caseStudies.find((s) => s.slug === openSlug) ?? null;

  return (
    <>
      <div
        role="group"
        aria-label="Filter projects"
        className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {FILTERS.map((filter) => {
          const isActive = active === filter;
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              aria-pressed={isActive}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-[background-color,color,border-color,transform] duration-200 ${
                isActive
                  ? "bg-[var(--color-accent)] text-white shadow-[0_10px_24px_-12px_var(--color-accent-glow)]"
                  : "border border-[var(--border)] bg-[var(--card)] text-[var(--text-muted)] hover:-translate-y-0.5 hover:border-[var(--color-accent)]/50 hover:text-[var(--text)]"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      {visible.length === 0 ? (
        <div className="mt-6 rounded-[22px] border border-dashed border-[var(--border)] bg-[var(--bg-muted)] px-6 py-14 text-center">
          <h3 className="heading-card text-xl text-[var(--text)]">
            Nothing here yet.
          </h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-[var(--text-muted)]">
            We&apos;ll add the first project to this category as soon as it
            ships.
          </p>
        </div>
      ) : active !== "All" && visible.length === 1 ? (
        <FeaturedProject
          study={visible[0]}
          onOpen={() => setOpenSlug(visible[0].slug)}
        />
      ) : (
        <>
          <FeaturedProject
            study={visible[0]}
            onOpen={() => setOpenSlug(visible[0].slug)}
          />
          <div className="grid gap-6 md:grid-cols-2">
            {visible.slice(1).map((study) => (
              <ProjectCard
                key={study.slug}
                study={study}
                onOpen={() => setOpenSlug(study.slug)}
              />
            ))}
          </div>
        </>
      )}

      {openStudy && (
        <CaseStudyModal study={openStudy} onClose={() => setOpenSlug(null)} />
      )}
    </>
  );
}

function CategoryBadge({ study }: { study: CaseStudy }) {
  return (
    <span
      className="inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium"
      style={{ backgroundColor: `${study.accent}16`, color: study.accent }}
    >
      {study.category}
    </span>
  );
}

function TechChips({ technology }: { technology: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {technology.map((tech) => (
        <li
          key={tech}
          className="rounded-lg border border-[var(--border)] bg-[var(--bg)]/60 px-2.5 py-1 font-mono text-xs text-[var(--text-muted)]"
        >
          {tech}
        </li>
      ))}
    </ul>
  );
}

function MetricRow({ study }: { study: CaseStudy }) {
  return (
    <dl className="grid grid-cols-3 gap-4">
      {study.metrics.map((metric) => (
        <div key={metric.label}>
          <dt className="sr-only">{metric.label}</dt>
          <dd
            className="font-display text-lg font-semibold sm:text-xl"
            style={{ color: study.accent }}
          >
            {metric.value}
          </dd>
          <p className="mt-1 text-[11px] leading-snug text-[var(--text-faint)]">
            {metric.label}
          </p>
        </div>
      ))}
    </dl>
  );
}

function CaseStudyLink({
  study,
  onOpen,
}: {
  study: CaseStudy;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--text)] transition-colors hover:text-[var(--color-accent)]"
    >
      View Case Study
      <ArrowRightIcon
        width={15}
        height={15}
        className="transition-transform group-hover/link:translate-x-0.5"
      />
    </button>
  );
}

function FeaturedProject({
  study,
  onOpen,
}: {
  study: CaseStudy;
  onOpen: () => void;
}) {
  return (
    <article className="group grid overflow-hidden rounded-[22px] border border-[var(--border)] bg-[var(--card)] lg:grid-cols-[1.05fr_1fr]">
      <ProjectPreview
        study={study}
        featured
        className="border-b border-[var(--border)] lg:border-b-0 lg:border-r"
      />
      <div className="flex flex-col p-8 sm:p-10">
        <div className="flex items-center gap-3">
          <CategoryBadge study={study} />
          <span className="label-eyebrow text-[11px] uppercase tracking-widest text-[var(--text-faint)]">
            Featured project
          </span>
        </div>
        <h2 className="heading-card mt-4 text-2xl text-[var(--text)] sm:text-[1.7rem]">
          {study.title}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">
          {study.summary}
        </p>
        <div className="mt-5">
          <TechChips technology={study.technology} />
        </div>
        <div className="mt-auto border-t border-[var(--border)] pt-6">
          <MetricRow study={study} />
        </div>
        <div className="mt-7">
          <CaseStudyLink study={study} onOpen={onOpen} />
        </div>
      </div>
    </article>
  );
}

function ProjectCard({
  study,
  onOpen,
}: {
  study: CaseStudy;
  onOpen: () => void;
}) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-[22px] border border-[var(--border)] bg-[var(--card)] transition-all duration-200 ease-out hover:-translate-y-[3px] hover:border-[var(--color-accent)]/45 hover:shadow-[0_18px_40px_-24px_var(--color-accent-glow)]">
      <ProjectPreview
        study={study}
        className="h-64 border-b border-[var(--border)]"
      />
      <div className="flex flex-1 flex-col p-7">
        <CategoryBadge study={study} />
        <h3 className="heading-card mt-3 text-xl text-[var(--text)]">
          {study.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
          {study.summary}
        </p>
        <div className="mt-5">
          <TechChips technology={study.technology} />
        </div>
        <div className="mt-6 border-t border-[var(--border)] pt-5">
          <MetricRow study={study} />
        </div>
        <div className="mt-auto pt-6">
          <CaseStudyLink study={study} onOpen={onOpen} />
        </div>
      </div>
    </article>
  );
}

function ProjectPreview({
  study,
  className = "",
  featured = false,
}: {
  study: CaseStudy;
  className?: string;
  featured?: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      className={`flex flex-col overflow-hidden bg-[#0c0c14] p-4 font-mono text-[11px] sm:p-5 sm:text-xs ${
        featured ? "h-72 lg:h-full" : ""
      } transition-transform duration-300 ease-out group-hover:scale-[1.02] ${className}`}
    >
      <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-3">
        <span className="truncate text-white/50">{previewHeader(study.slug)}</span>
        <span
          className="shrink-0 rounded-full px-2 py-0.5 text-[10px]"
          style={{
            backgroundColor: `${study.accent}22`,
            color: study.accent,
          }}
        >
          {previewStatus(study.slug)}
        </span>
      </div>
      {study.slug === "fieldmate" && <FieldmatePreview accent={study.accent} />}
      {study.slug === "retailscope" && (
        <RetailscopePreview accent={study.accent} />
      )}
      {study.slug === "ledgerflow" && (
        <LedgerflowPreview accent={study.accent} />
      )}
      {study.slug === "rallypoint" && (
        <RallypointPreview accent={study.accent} />
      )}
      {study.slug === "nordhavn" && <NordhavnPreview accent={study.accent} />}
      {study.slug === "opsdeck" && <OpsdeckPreview accent={study.accent} />}
    </div>
  );
}

function previewHeader(slug: string) {
  const labels: Record<string, string> = {
    fieldmate: "fieldmate · dispatch",
    retailscope: "retailscope · forecast",
    ledgerflow: "ledgerflow · reconcile",
    rallypoint: "rallypoint · book",
    nordhavn: "nordhavn · studio site",
    opsdeck: "opsdeck · deploy",
  };
  return labels[slug] ?? slug;
}

function previewStatus(slug: string) {
  const labels: Record<string, string> = {
    fieldmate: "on schedule",
    retailscope: "model trained",
    ledgerflow: "auto-matched",
    rallypoint: "live",
    nordhavn: "fast · 98",
    opsdeck: "green",
  };
  return labels[slug] ?? "live";
}

function FieldmatePreview({ accent }: { accent: string }) {
  return (
    <div className="mt-3 flex grow flex-col gap-2">
      <div className="grid grid-cols-5 gap-1.5">
        {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day, i) => (
          <div key={day} className="rounded-md bg-white/[0.04] p-1.5">
            <p className="text-[10px] text-white/40">{day}</p>
            <div
              className={`mt-1 ${i === 2 ? "h-6" : "h-4"} w-full rounded-sm`}
              style={{ backgroundColor: `${accent}${i === 2 ? "50" : "30"}` }}
            />
            <div className="mt-1 h-2 w-3/4 rounded-sm bg-white/10" />
          </div>
        ))}
      </div>
      <div className="mt-auto grid grid-cols-2 gap-1.5">
        <div className="rounded-md bg-white/[0.04] px-2.5 py-2">
          <p className="flex items-center gap-1.5 text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            A. Shah
          </p>
          <p className="mt-0.5 text-[10px] text-white/40">on site · #1041</p>
        </div>
        <div className="rounded-md bg-white/[0.04] px-2.5 py-2">
          <p className="flex items-center gap-1.5 text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            M. Rao
          </p>
          <p className="mt-0.5 text-[10px] text-white/40">en route · #1042</p>
        </div>
      </div>
    </div>
  );
}

function RetailscopePreview({ accent }: { accent: string }) {
  const bars = [18, 26, 20, 32, 40, 34, 46, 52, 44, 58, 50, 64];
  return (
    <div className="mt-3 flex grow flex-col gap-2">
      <div className="flex grow flex-col rounded-md bg-white/[0.03] p-2.5">
        <p className="text-white/40">inventory forecast</p>
        <div className="mt-2 flex grow items-end gap-1">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-sm"
              style={{
                height: `${h}px`,
                background: `linear-gradient(to top, ${accent}30, ${accent})`,
              }}
            />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-1.5">
        <div className="rounded-md bg-white/[0.04] px-2.5 py-2">
          <p className="text-white/40">reorder</p>
          <p className="text-white/90">1,240 units</p>
        </div>
        <div className="rounded-md bg-white/[0.04] px-2.5 py-2">
          <p className="text-white/40">stockout risk</p>
          <p className="text-emerald-400">low</p>
        </div>
      </div>
    </div>
  );
}

function LedgerflowPreview({ accent }: { accent: string }) {
  const rows = [
    { name: "INV-2041", amount: "$4,120", state: "matched", color: "#34d399" },
    { name: "INV-2044", amount: "$1,080", state: "matched", color: "#34d399" },
    { name: "INV-2048", amount: "$3,690", state: "flagged", color: "#fbbf24" },
  ];
  return (
    <div className="mt-3 flex grow flex-col gap-1.5">
      {rows.map((row) => (
        <div
          key={row.name}
          className="flex items-center justify-between rounded-md bg-white/[0.04] px-3 py-2"
        >
          <span className="text-white/70">{row.name}</span>
          <span className="text-white/90">{row.amount}</span>
          <span
            className="rounded-full px-2 py-0.5 text-[10px]"
            style={{ backgroundColor: `${row.color}1a`, color: row.color }}
          >
            {row.state}
          </span>
        </div>
      ))}
      <div className="mt-auto flex items-center justify-between rounded-md bg-white/[0.04] px-3 py-2">
        <span className="text-white/40">batch · 212/223 matched</span>
        <span className="text-emerald-400">posted</span>
      </div>
    </div>
  );
}

function RallypointPreview({ accent }: { accent: string }) {
  const classes = [
    { name: "HIIT 30", time: "18:30" },
    { name: "Strength", time: "19:15" },
    { name: "Yoga Flow", time: "20:00" },
  ];
  return (
    <div className="mt-3 flex grow justify-center">
      <div className="flex w-44 flex-col overflow-hidden rounded-xl border border-white/10 bg-[#0e0e15] p-2.5">
        <p className="text-center text-[10px] text-white/40">today · classes</p>
        {classes.map((klass) => (
          <div key={klass.name} className="mt-1.5 rounded-md bg-white/[0.05] px-2 py-1.5">
            <div className="flex items-center justify-between">
              <span className="text-white/80">{klass.name}</span>
              <span className="text-[10px] text-white/40">{klass.time}</span>
            </div>
          </div>
        ))}
        <div
          className="mt-2 rounded-md py-1.5 text-center text-[10px] font-semibold text-white"
          style={{ backgroundColor: accent }}
        >
          book your spot
        </div>
      </div>
    </div>
  );
}

function NordhavnPreview({ accent }: { accent: string }) {
  return (
    <div className="mt-3 flex grow flex-col gap-2">
      <div className="flex items-center justify-between gap-2">
        <span className="text-white/70">Studio · Portfolio</span>
        <div className="flex gap-1">
          {["work", "about", "contact"].map((label) => (
            <span
              key={label}
              className="rounded-sm bg-white/[0.04] px-1.5 py-0.5 text-[10px] text-white/50"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
      <div className="relative flex grow flex-col rounded-lg bg-white/[0.03] px-3 py-3">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.03)_0,rgba(255,255,255,0.03)_1px,transparent_1px,transparent_7px)]" />
        <div className="relative h-4 w-3/4 rounded-sm bg-white/20" />
        <div className="relative mt-2 h-2 w-1/2 rounded-sm bg-white/10" />
        <div
          className="relative mt-3 inline-block w-fit rounded-sm px-2 py-1 text-[10px] text-white"
          style={{ backgroundColor: accent }}
        >
          View case study
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {["one", "two", "three"].map((x) => (
          <div key={x} className="h-8 rounded-md bg-white/[0.05]" />
        ))}
      </div>
    </div>
  );
}

function OpsdeckPreview({ accent }: { accent: string }) {
  const steps = [
    { label: "build", state: "done", color: "#34d399" },
    { label: "tests", state: "pass", color: "#34d399" },
    { label: "deploy", state: "run", color: accent },
  ];
  return (
    <div className="mt-3 flex grow flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-white/70">api-checkout</span>
        <span
          className="rounded-full px-2 py-0.5 text-[10px]"
          style={{ backgroundColor: `${accent}22`, color: accent }}
        >
          staging
        </span>
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {steps.map((step, i) => (
          <div key={i} className="rounded-md bg-white/[0.04] px-2 py-1.5">
            <p className="text-[10px] text-white/40">{step.label}</p>
            <p className="mt-0.5 flex items-center gap-1 text-white/80">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: step.color }}
              />
              {step.state}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-auto rounded-md bg-white/[0.04] px-3 py-2">
        <p className="text-white/40">deploy logs</p>
        <p className="mt-0.5 text-white/80">
          OK image built · 3/3 tests passed · live in 42s
        </p>
      </div>
    </div>
  );
}

function CaseStudyModal({
  study,
  onClose,
}: {
  study: CaseStudy;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={study.title}
    >
      <div
        aria-hidden="true"
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />
      <div className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-[22px] border border-[var(--border)] bg-[var(--bg-raised)] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-[var(--border)] bg-[var(--bg-raised)]/95 px-6 py-4 backdrop-blur sm:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <CategoryBadge study={study} />
            <h2 className="heading-card truncate text-lg text-[var(--text)]">
              {study.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            autoFocus
            aria-label="Close case study"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-[var(--border)] text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="px-6 py-6 sm:px-8 sm:py-8">
          <p className="text-base leading-relaxed text-[var(--text-muted)]">
            {study.summary}
          </p>

          <div className="mt-6 space-y-6">
            <DetailBlock term="Challenge" value={study.problem} />
            <DetailBlock term="What we built" value={study.solution} />
            <DetailBlock term="Outcome" value={study.result} />
          </div>

          <div className="mt-6">
            <p className="label-eyebrow mb-2 text-xs uppercase tracking-widest text-[var(--text)]">
              Technology
            </p>
            <TechChips technology={study.technology} />
          </div>

          <div className="mt-7 rounded-xl border border-[var(--border)] p-6">
            <p className="label-eyebrow mb-4 text-xs uppercase tracking-widest text-[var(--text)]">
              Key results
            </p>
            <MetricRow study={study} />
          </div>

          <div className="mt-8">
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_-12px_var(--color-accent-glow)] transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_16px_34px_-12px_var(--color-accent-glow)]"
            >
              Build something like this
              <ArrowRightIcon
                width={16}
                height={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

function DetailBlock({ term, value }: { term: string; value: string }) {
  return (
    <div>
      <p className="label-eyebrow mb-1.5 text-xs uppercase tracking-widest text-[var(--text)]">
        {term}
      </p>
      <p className="text-sm leading-relaxed text-[var(--text-muted)]">
        {value}
      </p>
    </div>
  );
}

function CloseIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}