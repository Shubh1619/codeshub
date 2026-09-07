import type { Metadata } from "next";
import { Container, ButtonLink } from "@/components/ui";
import { ServiceStack } from "@/components/service-stack";
import { ServiceDirectory } from "@/components/service-directory";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom software, web, mobile, SaaS, PaaS, AI, cloud, and support - engineered by Codeshub to scale with your business.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(20,20,35,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(20,20,35,0.03)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_75%)] dark:bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]"
        />
        <Container className="relative grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-16">
          <div className="max-w-2xl">
            <p className="label-eyebrow mb-4 text-xs uppercase tracking-widest text-[var(--color-accent)]">
              Services
            </p>
            <h1 className="heading-display text-3xl text-[var(--text)] sm:text-4xl lg:text-[2.75rem]">
              Software engineering that takes ownership of the outcome
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
              Whatever you&apos;re building - or whatever&apos;s slowing you down -
              we bring the right stack, honest scoping, and a team that ships.
              Each engagement is scoped to your problem, not a template.
            </p>
          </div>
          <ServiceStack />
        </Container>
      </section>

      {/* Directory */}
      <section className="pb-16 pt-14 sm:pb-20 sm:pt-16">
        <Container>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="heading-section text-2xl text-[var(--text)] sm:text-3xl">
              What we build
            </h2>
            <p className="text-sm text-[var(--text-muted)]">
              Nine disciplines, one delivery team. Filter to find yours.
            </p>
          </div>
          <ServiceDirectory />
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}

function CtaBanner() {
  return (
    <section className="pb-20 sm:pb-24">
      <Container>
        <div className="relative overflow-hidden rounded-[22px] border border-[var(--border)] bg-[var(--bg-raised)] px-6 py-14 text-center sm:px-16 sm:py-16">
          {/* soft lavender wash */}
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
              Free project consult
            </p>
            <h2 className="heading-section text-3xl text-[var(--text)] sm:text-4xl">
              Have a problem to solve?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-[var(--text-muted)]">
              Tell us what you&apos;re trying to build. We&apos;ll help you figure
              out the right approach.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/contact" className="px-7 py-3.5">
                Start Your Project
              </ButtonLink>
            </div>
            <p className="mt-6 text-sm text-[var(--text-faint)]">
              No pressure. No jargon. Just a practical conversation.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}