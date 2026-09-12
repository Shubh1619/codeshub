import type { Metadata } from "next";
import { Container, ButtonLink } from "@/components/ui";
import { ArrowDownIcon } from "@/components/icons";
import { ProjectShowcase } from "@/components/project-showcase";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies | Software Development Company | Codeshub",
  description:
    "Browse the mobile apps, SaaS platforms, websites and custom software built by Codeshub - with the problems, solutions and measurable outcomes behind each project.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(20,20,35,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(20,20,35,0.03)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_75%)] dark:bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]"
        />
        <Container className="relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div className="max-w-2xl">
            <p className="label-eyebrow mb-4 text-xs uppercase tracking-widest text-[var(--color-accent)]">
              Our work
            </p>
            <h1 className="heading-display text-3xl text-[var(--text)] sm:text-4xl lg:text-[2.75rem]">
              Products, platforms and experiences we&apos;ve built
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
              A selection of websites, mobile apps, SaaS platforms and software
              we&apos;ve designed and engineered for real-world use.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href="/contact" className="px-6 py-3">
                Start Your Project
              </ButtonLink>
              <a
                href="#projects"
                className="group inline-flex items-center gap-1.5 rounded-xl border border-[var(--border)] bg-[var(--bg-raised)] px-5 py-3 text-sm font-semibold text-[var(--text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                Explore Projects
                <ArrowDownIcon
                  width={16}
                  height={16}
                  className="transition-transform group-hover:translate-y-0.5"
                />
              </a>
            </div>
          </div>
          <ProjectCollage />
        </Container>
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-mt-24 py-16 sm:py-20">
        <Container>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="heading-section text-2xl text-[var(--text)] sm:text-3xl">
              Selected work
            </h2>
            <p className="text-sm text-[var(--text-muted)]">
              Six projects across web, mobile, SaaS and AI
            </p>
          </div>
          <div className="mt-8 space-y-8 sm:mt-10">
            <ProjectShowcase />
          </div>
        </Container>
      </section>

      {/* CTA */}
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
                Start a project
              </p>
              <h2 className="heading-section text-3xl text-[var(--text)] sm:text-4xl">
                Have a project worth building?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-[var(--text-muted)]">
                Tell us what you&apos;re trying to solve. We&apos;ll help turn
                the idea into a product that works.
              </p>
              <div className="mt-8 flex justify-center">
                <ButtonLink href="/contact" className="px-7 py-3.5">
                  Start Your Project
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function ProjectCollage() {
  const bars = [18, 30, 24, 42, 34, 52, 44, 60, 50, 66, 56, 46];
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-sm py-6">
      <span className="absolute -top-1 left-0 z-10 rounded-full border border-[var(--border)] bg-[var(--bg-raised)] px-3 py-1.5 text-[11px] font-medium text-[var(--text-muted)] shadow-[0_10px_24px_-12px_rgba(0,0,0,0.3)]">
        Web · Mobile · SaaS · AI/ML
      </span>

      <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[#0c0c14] p-4 font-mono text-[11px] shadow-[0_30px_70px_-40px_rgba(0,0,0,0.55)] sm:p-5">
        <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-3">
          <span className="text-white/50">retailscope · forecast</span>
          <span className="rounded-full bg-[#f472b622] px-2 py-0.5 text-[10px] text-[#f472b6]">
            model trained
          </span>
        </div>
        <div className="mt-3 flex items-end gap-1.5">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-sm"
              style={{
                height: `${h}px`,
                background: `linear-gradient(to top, rgba(244,114,182,0.2), #f472b6)`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="absolute -bottom-2 right-0 w-44 rounded-2xl border border-[var(--border)] bg-[#0c0c14] p-3 font-mono text-[10px] shadow-[0_30px_70px_-30px_rgba(0,0,0,0.6)]">
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <span className="text-white/50">rallypoint · book</span>
          <span className="rounded-full bg-[#8b7bff22] px-2 py-0.5 text-white/[0.85]">
            live
          </span>
        </div>
        <div className="mt-2 rounded-md bg-white/[0.05] px-2 py-1.5">
          <div className="flex items-center justify-between">
            <span className="text-white/80">HIIT 30</span>
            <span className="text-white/40">18:30</span>
          </div>
        </div>
        <div className="mt-1.5 rounded-md bg-white/[0.05] px-2 py-1.5">
          <div className="flex items-center justify-between">
            <span className="text-white/80">Strength</span>
            <span className="text-white/40">19:15</span>
          </div>
        </div>
        <div className="mt-2 rounded-md bg-[#8b7bff] py-1.5 text-center font-semibold text-white">
          book your spot
        </div>
      </div>
    </div>
  );
}