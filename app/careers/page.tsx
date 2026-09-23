import { Suspense } from "react";
import type { Metadata } from "next";
import { Container, SectionHeading, ButtonLink } from "@/components/ui";
import {
  BriefcaseIcon,
  GlobeIcon,
  UsersIcon,
  RocketIcon,
  ArrowDownIcon,
} from "@/components/icons";
import { PositionsBoard, PositionsFallback } from "@/components/positions-board";
import { openings, hiringSteps } from "@/lib/content";

export const metadata: Metadata = {
  title: "Software Development Internships in India",
  description:
    "Apply for software development internships in India at Codeshub - project-based learning on real builds with mentorship. Open positions in web, Python, JavaScript, app development, AI/ML and full stack.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(20,20,35,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(20,20,35,0.03)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_75%)] dark:bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]"
        />
        <Container className="relative grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div className="max-w-2xl">
            <p className="label-eyebrow mb-4 text-xs uppercase tracking-widest text-[var(--color-accent)]">
              Careers
            </p>
            <h1 className="heading-display text-3xl text-[var(--text)] sm:text-4xl lg:text-[2.75rem]">
              Build your software career in India with a project-based internship
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
              We&apos;re looking for curious people who want to work on real
              products, solve real problems, and grow with a team that ships.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href="#open-positions" className="px-6 py-3">
                View Open Positions
              </ButtonLink>
              <a
                href="/contact"
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--text-muted)] transition-colors hover:text-[var(--color-accent)]"
              >
                Send Your Resume
                <ArrowDownIcon className="transition-transform group-hover:translate-y-0.5" width={16} height={16} />
              </a>
            </div>
          </div>
          <CareersVisual />
        </Container>
      </section>

      {/* Open positions */}
      <section id="open-positions" className="scroll-mt-24 py-16 sm:py-20">
        <Container>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="label-eyebrow text-xs uppercase tracking-widest text-[var(--color-accent)]">
                Open positions
              </p>
              <h2 className="heading-section mt-2 text-2xl text-[var(--text)] sm:text-3xl">
                Currently hiring: software internships in India
              </h2>
            </div>
            <p className="text-sm text-[var(--text-muted)]">
              {openings.length} openings · filter to find your fit
            </p>
          </div>
          <Suspense fallback={<PositionsFallback />}>
            <PositionsBoard />
          </Suspense>
        </Container>
      </section>

      {/* Internships at Codeshub */}
      <section className="border-y border-[var(--border)] bg-[var(--bg-raised)] py-16 sm:py-20">
        <Container>
          <div className="flex flex-col gap-8 rounded-[22px] border border-[var(--border)] bg-[var(--card)] p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="label-eyebrow text-xs uppercase tracking-widest text-[var(--color-accent)]">
                For students & early-career
              </p>
              <h2 className="heading-section mt-2 text-2xl text-[var(--text)] sm:text-3xl">
                Project-based internships at Codeshub
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[var(--text-muted)]">
                Learn by working on real software, with mentorship from
                developers who actually ship products.
              </p>
            </div>
            <div className="shrink-0">
              <ButtonLink href="/careers?type=internships" className="px-6 py-3">
                Explore Internships
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* Why build your career */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            kicker="Why Codeshub"
            title="Why build your career at Codeshub"
            intro="We keep the team small, the work real, and the feedback honest. You won't be polishing a deck - you'll be shipping."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((perk) => (
              <div
                key={perk.title}
                className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6"
              >
                <span className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                  <perk.icon width={20} height={20} strokeWidth={1.5} />
                </span>
                <h3 className="heading-card text-lg text-[var(--text)]">
                  {perk.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                  {perk.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How we hire */}
      <section className="border-y border-[var(--border)] bg-[var(--bg-muted)] py-16 sm:py-20">
        <Container>
          <SectionHeading
            kicker="Process"
            title="How we hire"
            intro="Four steps, no long loops. If it's not a good fit, we'll tell you quickly."
          />
          <ol className="mt-10 grid gap-px overflow-hidden rounded-[22px] border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-4">
            {hiringSteps.map((step) => (
              <li key={step.step} className="flex flex-col bg-[var(--card)] p-7">
                <span className="font-display text-3xl font-semibold text-[var(--color-accent)]">
                  {step.step}
                </span>
                <h3 className="heading-card mt-4 text-lg text-[var(--text)]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Don't see your role */}
      <section className="pb-20 sm:pb-24">
        <Container>
          <div className="relative overflow-hidden rounded-[22px] border border-[var(--border)] bg-[var(--bg-raised)] px-6 py-14 text-center sm:px-16 sm:py-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,rgba(109,91,255,0.08),transparent_60%)]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-20 right-1/4 h-52 w-80 rounded-full bg-[radial-gradient(closest-side,var(--color-accent-glow),transparent)] blur-2xl"
            />
            <div className="relative">
              <p className="label-eyebrow mb-3 text-xs uppercase tracking-widest text-[var(--color-accent)]">
                Open application
              </p>
              <h2 className="heading-section text-3xl text-[var(--text)] sm:text-4xl">
                Don&apos;t see your role?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-[var(--text-muted)]">
                We&apos;re always interested in meeting good builders. If you
                think you&apos;d be a good fit for Codeshub, send us your
                resume and tell us what you&apos;d like to build.
              </p>
              <div className="mt-8 flex justify-center">
                <ButtonLink href="/contact" className="px-7 py-3.5">
                  Send Your Resume
                </ButtonLink>
              </div>
              <p className="mt-6 text-sm text-[var(--text-faint)]">
                Resume · Portfolio · GitHub
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

const perks = [
  {
    icon: BriefcaseIcon,
    title: "Real projects",
    description:
      "Work on software that solves actual business problems - not boilerplate exercises.",
  },
  {
    icon: UsersIcon,
    title: "Mentorship",
    description:
      "Learn directly from developers working on production systems.",
  },
  {
    icon: RocketIcon,
    title: "Growth",
    description:
      "Build practical skills through real ownership and feedback.",
  },
  {
    icon: GlobeIcon,
    title: "Flexible work",
    description:
      "A practical work environment designed around getting good work shipped.",
  },
];

function CareersVisual() {
  const columns = [
    { label: "In progress", items: ["checkout flow", "auth v2", "reports"] },
    { label: "In review", items: ["api pagination", "onboarding"] },
    { label: "Shipped", items: ["landing v2.4", "pricing page", "analytics"] },
  ];
  return (
    <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[0_30px_70px_-40px_rgba(0,0,0,0.45)] sm:p-7">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 right-0 h-48 w-72 rounded-full bg-[radial-gradient(closest-side,var(--color-accent-glow),transparent)] blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(20,20,35,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(20,20,35,0.035)_1px,transparent_1px)] bg-[size:28px_28px] dark:bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]"
      />
      <div className="relative">
        <div className="flex items-center justify-between gap-3">
          <p className="label-eyebrow text-xs uppercase tracking-widest text-[var(--text-faint)]">
            Engineering team
          </p>
          <span className="inline-flex shrink-0 items-center gap-1.5 text-[11px] font-medium text-[var(--color-accent)]">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]"
            />
            we&apos;re hiring
          </span>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2.5">
          {columns.map((column) => (
            <div
              key={column.label}
              className="rounded-xl border border-[var(--border)] bg-[var(--bg)]/50 p-2.5"
            >
              <p className="text-[10px] font-medium uppercase tracking-wider text-[var(--text-faint)]">
                {column.label}
              </p>
              <ul className="mt-2 space-y-1.5">
                {column.items.map((item) => (
                  <li
                    key={item}
                    className="truncate rounded-md border border-[var(--border)]/60 bg-[var(--card)] px-2 py-1 font-mono text-[10px] text-[var(--text-muted)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-[var(--border)] pt-3">
          <span className="font-mono text-[11px] text-[var(--text-faint)]">
            small team · real products · big ownership
          </span>
        </div>
      </div>
    </div>
  );
}