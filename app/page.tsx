import Link from "next/link";
import type { Metadata } from "next";
import { Container, SectionHeading, ButtonLink } from "@/components/ui";
import { JsonLd } from "@/components/seo";
import { HeroTerminal } from "@/components/hero-terminal";
import { CodeWatermark } from "@/components/code-watermark";
import {
  ArrowRightIcon,
  BriefcaseIcon,
  CheckIcon,
  CodeIcon,
  GlobeIcon,
  GraduationIcon,
  MailIcon,
} from "@/components/icons";
import { buildStrip, siteMeta } from "@/lib/content";

export const metadata: Metadata = {
  title: "Custom Software & SaaS Development Company in India",
  description:
    "Codeshub is a custom software development company in India building SaaS, web & mobile apps and AI - from MVP development to workflow automation.",
  alternates: { canonical: "/" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteMeta.url}/#localbusiness`,
  name: siteMeta.name,
  url: siteMeta.url,
  logo: `${siteMeta.url}/logos/logo-dark.png`,
  email: siteMeta.email,
  telephone: siteMeta.phoneIntl,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressRegion: "India",
  },
  areaServed: "IN",
  knowsAbout: [
    "Custom Software Development",
    "SaaS Development",
    "Mobile App Development",
    "Web Development",
    "Website Development",
    "AI/ML Development",
    "Software Development",
  ],
  sameAs: siteMeta.sameAs,
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <Hero />
      <WhatWeBuild />
      <TwoAudiences />
      <Teasers />
      <ClientStories />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* soft glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,var(--color-accent-glow),transparent)] blur-3xl"
      />
      {/* subtle technical grid backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(20,20,35,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(20,20,35,0.03)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)] dark:bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]"
      />
      <Container className="relative grid items-center gap-12 pb-16 pt-12 sm:pt-16 lg:grid-cols-[1fr_0.92fr] lg:gap-12 lg:pb-20 lg:pt-16">
        <div className="lg:pr-4">
          <p className="mb-5 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-faint)]">
            <span
              aria-hidden="true"
              className="h-px w-8 bg-[var(--color-accent)]"
            />
            Digital Product Studio
            <span className="rounded-full border border-[var(--border)] bg-[var(--bg-raised)]/80 px-2.5 py-0.5 text-[10px] font-semibold normal-case tracking-normal text-[var(--text-muted)]">
              Since 2026
            </span>
          </p>
          <h1 className="font-display text-[2.5rem] font-bold leading-[1.04] tracking-tight text-[var(--text)] sm:text-5xl lg:text-[3.2rem]">
            We turn ambitious ideas into{" "}
            <span className="text-[var(--color-accent)]">digital products</span>{" "}
            that scale.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
            We design and build software, websites, mobile apps, SaaS platforms
            and AI solutions that help businesses grow.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink href="/contact" className="px-6 py-3.5">
              Start Your Project
            </ButtonLink>
            <ButtonLink href="/services" variant="ghost" icon={false}>
              Explore Services
            </ButtonLink>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <HeroTerminal />
        </div>
      </Container>
    </section>
  );
}

function WhatWeBuild() {
  const items = buildStrip;

  const Row = ({ hidden = false }: { hidden?: boolean }) => (
    <div
      aria-hidden={hidden || undefined}
      className="flex items-center"
    >
      {items.map((item, i) => (
        <span
          key={`${hidden ? "b" : "a"}-${item}`}
          className="flex items-center gap-4 pr-4 sm:gap-6 sm:pr-6 lg:gap-10 lg:pr-10"
        >
          <span className="whitespace-nowrap text-base font-medium text-[var(--text)] sm:text-lg">
            {item}
          </span>
          <span
            aria-hidden="true"
            className="h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)] sm:h-1.5 sm:w-1.5"
          />
        </span>
      ))}
    </div>
  );

  return (
    <section className="border-y border-[var(--border)] bg-[var(--bg-raised)]">
      <Container className="py-8 sm:py-9">
        <p className="sr-only">We build</p>
        <div className="ticker-mask">
          <div className="ticker-track">
            <Row />
            <Row hidden />
          </div>
        </div>
      </Container>
    </section>
  );
}

function TwoAudiences() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          kicker="Two ways to work with us"
          title="One team, building for businesses and training developers"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <AudienceCard
            tag="For businesses"
            title="We turn ideas and business problems into scalable technology."
            description="From a first web app to a multi-tenant SaaS, we take ownership of the build, keep scope honest, and ship software that earns its keep."
            links={[{ label: "Build a Product", href: "/products" }]}
            icon="code"
            variant="business"
          />
          <AudienceCard
            tag="For students"
            title="We provide practical, project-based internships built around real development experience."
            description="Learn by shipping. Work on real assignments with a mentor, build something you can show, and earn a certificate that reflects actual work."
            links={[{ label: "Explore Careers", href: "/careers" }]}
            icon="students"
            variant="student"
          />
        </div>
      </Container>
    </section>
  );
}

function AudienceCard({
  tag,
  title,
  description,
  links,
  icon,
  variant,
}: {
  tag: string;
  title: string;
  description: string;
  links: { label: string; href: string }[];
  icon: "code" | "students";
  variant: "business" | "student";
}) {
  const business = variant === "business";

  return (
    <div
      className={`flex flex-col rounded-3xl border p-8 transition-transform duration-200 hover:-translate-y-1 ${
        business
          ? "border-[#26263a] bg-[#14141f] text-white shadow-[0_24px_60px_-30px_rgba(0,0,0,0.65)] dark:border-[var(--color-accent)]/25 dark:bg-[#0c0c13] dark:shadow-none"
          : "border-[var(--border)] bg-[var(--card)] hover:border-[var(--color-accent)]/40"
      }`}
    >
      <span
        className={`mb-5 grid h-12 w-12 place-items-center rounded-xl ${
          business
            ? "bg-[var(--color-accent)]/15 text-[var(--color-accent-soft)]"
            : "bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
        }`}
      >
        {icon === "code" ? (
          <BriefcaseIcon width={22} height={22} />
        ) : (
          <GraduationIcon width={22} height={22} />
        )}
      </span>
      <p
        className={`mb-2 text-sm font-semibold ${
          business ? "text-[var(--color-accent-soft)]" : "text-[var(--color-accent)]"
        }`}
      >
        {tag}
      </p>
      <h3
        className={`heading-card text-xl ${
          business ? "text-white" : "text-[var(--text)]"
        }`}
      >
        {title}
      </h3>
      <p
        className={`mt-3 flex-1 leading-relaxed ${
          business
            ? "text-[#a8a6c1]"
            : "text-[var(--text-muted)]"
        }`}
      >
        {description}
      </p>
      <div className="mt-7 flex flex-wrap gap-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`group inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
              business
                ? "rounded-lg bg-[var(--color-accent)] px-5 py-3 text-white shadow-sm hover:-translate-y-0.5 hover:shadow-[0_10px_28px_-10px_var(--color-accent-glow)]"
                : "text-[var(--text)] hover:text-[var(--color-accent)]"
            }`}
          >
            {link.label}
            <ArrowRightIcon
              width={16}
              height={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

function Teasers() {
  const techChips = ["Web", "Mobile", "SaaS", "AI", "Cloud"];

  return (
    <section className="bg-[var(--bg-muted)] py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="label-eyebrow mb-4 text-xs uppercase tracking-widest text-[var(--color-accent)]">
            What we do
          </p>
          <h2 className="heading-section text-3xl text-[var(--text)] sm:text-4xl lg:text-[2.75rem]">
            Everything you need to build, launch &amp; grow.
          </h2>
        </div>

        <div className="bento-grid mt-12">
          {/* Services — large featured card */}
          <Link
            href="/services"
            className="group relative flex flex-col overflow-hidden rounded-[22px] border border-[var(--border)] bg-[var(--card)] p-8 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[var(--color-accent)] md:row-span-2 md:p-10"
          >
            <span className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
              <CodeIcon width={22} height={22} strokeWidth={1.5} />
            </span>
            <h3 className="heading-card text-xl text-[var(--text)] sm:text-2xl">
              Services
            </h3>
            <p className="mt-3 max-w-sm text-base leading-relaxed text-[var(--text-muted)]">
              Custom software, web, mobile, SaaS, AI and cloud.
            </p>

            {/* Subtle technical decor in the empty space */}
            <div
              aria-hidden="true"
              className="pointer-events-none mt-8 flex-1 select-none"
            >
              <div className="flex flex-wrap gap-2">
                {techChips.map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--bg)]/70 px-2.5 py-1 text-[11px] font-medium text-[var(--text-faint)]"
                  >
                    {chip}
                  </span>
                ))}
              </div>
              <div className="mt-6 rounded-xl border border-[var(--border)] bg-[var(--bg)]/60 p-4 font-mono text-[11px] leading-[1.6rem] text-[var(--text-faint)]">
                <div>
                  <span className="text-[var(--color-accent)]/80">const</span>{" "}
                  <span className="text-[var(--text-muted)]">ship</span> = async{" "}
                  {"()"} =&gt; {"{"}
                </div>
                <div className="pl-4">
                  <span className="text-[var(--color-accent)]/80">await</span>{" "}
                  build();
                </div>
                <div className="pl-4">
                  <span className="text-[var(--color-accent)]/80">await</span>{" "}
                  deploy();
                </div>
                <div className="pl-4">
                  return {"status: "}
                  <span className="text-emerald-500/70">"live"</span>;
                </div>
                <div>{"}"};</div>
              </div>
            </div>

            <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--text)] transition-colors group-hover:text-[var(--color-accent)]">
              Explore services
              <ArrowRightIcon
                width={15}
                height={15}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </span>
            <CodeWatermark />
          </Link>

          {/* Products */}
          <Link
            href="/products"
            className="group flex flex-col overflow-hidden rounded-[22px] border border-[var(--border)] bg-[var(--card)] p-7 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[var(--color-accent)]"
          >
            <span className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
              <GlobeIcon width={20} height={20} strokeWidth={1.5} />
            </span>
            <h3 className="heading-card text-lg text-[var(--text)]">
              Products
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">
              SaaS products built for real workflows.
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--text)] transition-colors group-hover:text-[var(--color-accent)]">
              Explore products
              <ArrowRightIcon
                width={15}
                height={15}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </span>
          </Link>

          {/* Careers */}
          <Link
            href="/careers"
            className="group flex flex-col overflow-hidden rounded-[22px] border border-[var(--border)] bg-[var(--card)] p-7 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[var(--color-accent)]"
          >
            <span className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
              <BriefcaseIcon width={20} height={20} strokeWidth={1.5} />
            </span>
            <h3 className="heading-card text-lg text-[var(--text)]">
              Careers
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">
              Real projects, mentorship, and open roles.
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--text)] transition-colors group-hover:text-[var(--color-accent)]">
              See open roles
              <ArrowRightIcon
                width={15}
                height={15}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </span>
          </Link>

          {/* Portfolio */}
          <Link
            href="/portfolio"
            className="group flex flex-col overflow-hidden rounded-[22px] border border-[var(--border)] bg-[var(--card)] p-7 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[var(--color-accent)]"
          >
            <span className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
              <CheckIcon width={20} height={20} strokeWidth={1.5} />
            </span>
            <h3 className="heading-card text-lg text-[var(--text)]">
              Portfolio
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">
              Selected work and case studies.
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--text)] transition-colors group-hover:text-[var(--color-accent)]">
              View case studies
              <ArrowRightIcon
                width={15}
                height={15}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </span>
          </Link>

          {/* Contact */}
          <Link
            href="/contact"
            className="group flex flex-col overflow-hidden rounded-[22px] border border-[var(--border)] bg-[var(--card)] p-7 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[var(--color-accent)]"
          >
            <span className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
              <MailIcon width={20} height={20} strokeWidth={1.5} />
            </span>
            <h3 className="heading-card text-lg text-[var(--text)]">
              Contact
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">
              Have something in mind? Let&apos;s build it.
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--text)] transition-colors group-hover:text-[var(--color-accent)]">
              Start a conversation
              <ArrowRightIcon
                width={15}
                height={15}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}

const clientLogos = [
  { name: "FieldMate", mark: "◩" },
  { name: "RetailScope", mark: "⌁" },
  { name: "Nordhavn", mark: "⣀" },
  { name: "RallyPoint", mark: "◉" },
  { name: "OpsDeck", mark: "▤" },
];

const clientTestimonials = [
  {
    quote:
      "Codeshub took a scheduling workflow we'd been running on spreadsheets and turned it into a platform our whole operations team relies on every day.",
    name: "Aarav Mehta",
    role: "Head of Operations",
    company: "FieldMate",
  },
  {
    quote:
      "The app shipped on time and genuinely reduced no-shows. Communication through the build was the best part - nothing was a mystery.",
    name: "Priya Nair",
    role: "Founder",
    company: "RallyPoint",
  },
  {
    quote:
      "Our studio site went from a slow template to something that finally looks like our work. Qualified leads from the site have more than doubled.",
    name: "Elias Berg",
    role: "Creative Director",
    company: "Nordhavn Studio",
  },
];

function ClientStories() {
  return (
    <section className="border-t border-[var(--border)] bg-[var(--bg-raised)] py-20 sm:py-24">
      <Container>
        <SectionHeading
          kicker="Client stories"
          title="Teams we've helped ship"
          intro="Products and platforms our clients rely on daily - built together, and kept running since."
        />

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 border-y border-[var(--border)] py-8">
          {clientLogos.map((logo) => (
            <span
              key={logo.name}
              className="flex items-center gap-2 text-lg font-semibold text-[var(--text-faint)] transition-colors hover:text-[var(--text)]"
            >
              <span
                aria-hidden="true"
                className="grid h-8 w-8 place-items-center rounded-lg border border-[var(--border)] bg-[var(--bg-muted)] text-sm text-[var(--color-accent)]"
              >
                {logo.mark}
              </span>
              {logo.name}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {clientTestimonials.map((t) => (
            <figure
              key={t.company}
              className="flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--card)] p-7"
            >
              <blockquote className="flex-1 text-sm leading-relaxed text-[var(--text-muted)]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-[var(--border)] pt-5">
                <p className="text-sm font-semibold text-[var(--text)]">
                  {t.name}
                </p>
                <p className="mt-0.5 text-xs text-[var(--text-faint)]">
                  {t.role} · {t.company}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
