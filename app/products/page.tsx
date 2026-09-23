import type { Metadata } from "next";
import { Container, ButtonLink } from "@/components/ui";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";
import { products, type Product } from "@/lib/content";

export const metadata: Metadata = {
  title: "SaaS Products for Business Workflows",
  description:
    "Explore products built by Codeshub for real workflows - BkAgro for pure nutrition eCommerce, LaunchPad for agency delivery tracking, ClientHub for client handoff, and PulseBoard for uptime monitoring. Live, in production, free trials available.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  const [featured, ...rest] = products;
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
              Products we run
            </p>
            <h1 className="heading-display text-3xl text-[var(--text)] sm:text-4xl lg:text-[2.75rem]">
              SaaS tools we built because the market was missing them
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
              These aren&apos;t white-paper ideas - they&apos;re products we use
              internally and ship for real. Each solves a problem we kept
              running into ourselves.
            </p>
          </div>
          <ProductEcosystem />
        </Container>
      </section>

      {/* Products */}
      <section className="pb-16 pt-14 sm:pb-20 sm:pt-16">
        <Container className="space-y-14">
          <FeaturedProduct product={featured} number="01" />
          <div className="grid gap-6 lg:grid-cols-2">
            {rest.map((product, i) => (
              <ProductCard
                key={product.slug}
                product={product}
                number={`0${i + 2}`}
              />
            ))}
          </div>
        </Container>
      </section>

      <ProductsCta />
    </>
  );
}

function ProductEcosystem() {
  const items = [
    { name: "BkAgro", desc: "Pure nutrition store", accent: "#34d399" },
    { name: "LaunchPad", desc: "Agency delivery ops", accent: "#6d5bff" },
    { name: "ClientHub", desc: "Client-facing portal", accent: "#22d3ee" },
    { name: "PulseBoard", desc: "Uptime & releases", accent: "#f472b6" },
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
            Product ecosystem
          </p>
          <span className="inline-flex shrink-0 items-center gap-1.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            actively maintained
          </span>
        </div>

        <ul className="mt-4 space-y-2.5">
          {items.map((item) => (
            <li
              key={item.name}
              className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--bg)]/50 px-4 py-3"
            >
              <span
                aria-hidden="true"
                className="h-2 w-2 shrink-0 rounded-full"
                style={{
                  backgroundColor: item.accent,
                  boxShadow: `0 0 0 4px ${item.accent}26`,
                }}
              />
              <span className="text-sm font-medium text-[var(--text)]">
                {item.name}
              </span>
              <span className="ml-auto text-xs text-[var(--text-muted)]">
                {item.desc}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-center justify-between border-t border-[var(--border)] pt-4">
          <span className="font-mono text-[11px] text-[var(--text-faint)]">
            4 Products · Built · Shipped · Maintained
          </span>
          <span className="hidden font-mono text-[11px] text-[var(--text-faint)] sm:block">
            v2.4
          </span>
        </div>
      </div>
    </div>
  );
}

function StatusPills({ tags }: { tags: string[] }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-2">
      {tags.map((tag, i) => (
        <li
          key={tag}
          className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide ${
            i === 0
              ? "border-emerald-500/25 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
              : "border-[var(--border)] bg-[var(--bg-muted)] text-[var(--text-muted)]"
          }`}
        >
          {i === 0 && (
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          )}
          {tag}
        </li>
      ))}
    </ul>
  );
}

function CapabilityChips({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border)] bg-[var(--bg)]/60 px-2.5 py-1.5 text-xs font-medium text-[var(--text-muted)]"
        >
          <CheckIcon width={11} height={11} className="shrink-0 text-[var(--color-accent)]" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function ProductCta({ product }: { product: Product }) {
  const external = product.href.startsWith("http");
  return (
    <div className="flex flex-wrap items-center gap-4">
      {external ? (
        <a
          href={product.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_-12px_var(--color-accent-glow)] transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_16px_34px_-12px_var(--color-accent-glow)]"
        >
          {product.cta}
          <ArrowRightIcon
            width={16}
            height={16}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </a>
      ) : (
        <ButtonLink href={product.href}>{product.cta}</ButtonLink>
      )}
      <a
        href="/contact"
        className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--text-muted)] transition-colors hover:text-[var(--color-accent)]"
      >
        View pricing
        <ArrowRightIcon
          width={14}
          height={14}
          className="transition-transform group-hover:translate-x-0.5"
        />
      </a>
    </div>
  );
}

function FeaturedProduct({ product, number }: { product: Product; number: string }) {
  return (
    <article
      id={product.slug}
      className="grid scroll-mt-24 overflow-hidden rounded-[22px] border border-[var(--border)] bg-[var(--card)] lg:grid-cols-2"
    >
      <div className="flex flex-col p-8 sm:p-10">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[var(--color-accent)]/25 bg-[var(--color-accent)]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-[var(--color-accent)]">
          <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[var(--color-accent)]" />
          Featured product
        </span>

        <div className="mt-5 flex items-center gap-3">
          <span className="font-mono text-xs font-medium tracking-wider text-[var(--text-faint)]">
            {number}
          </span>
          <span aria-hidden="true" className="h-3.5 w-px bg-[var(--border)]" />
          <p className="label-eyebrow text-xs uppercase tracking-widest text-[var(--color-accent)]">
            {product.name}
          </p>
        </div>

        <h2 className="heading-card mt-2 text-2xl text-[var(--text)] sm:text-[1.7rem]">
          {product.tagline}
        </h2>

        <StatusPills tags={product.tags} />

        <p className="mt-5 text-sm leading-relaxed text-[var(--text-muted)]">
          <span className="font-semibold text-[var(--text)]">The problem:</span>{" "}
          {product.problem}
        </p>

        <p className="label-eyebrow mt-6 text-xs uppercase tracking-widest text-[var(--text-faint)]">
          Key capabilities
        </p>
        <CapabilityChips items={product.features} />

        <div className="mt-auto pt-8">
          <ProductCta product={product} />
        </div>
      </div>

      <ProductMockup
        product={product}
        featured
        className="border-t border-[var(--border)] lg:border-l lg:border-t-0"
      />
    </article>
  );
}

function ProductCard({
  product,
  number,
}: {
  product: Product;
  number: string;
}) {
  return (
    <article
      id={product.slug}
      className="flex scroll-mt-24 flex-col overflow-hidden rounded-[22px] border border-[var(--border)] bg-[var(--card)] transition-all duration-200 ease-out hover:-translate-y-[3px] hover:border-[var(--color-accent)]/40 hover:shadow-[0_18px_40px_-24px_var(--color-accent-glow)]"
    >
      <ProductMockup product={product} className="h-72 border-b border-[var(--border)]" />
      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-medium tracking-wider text-[var(--text-faint)]">
            {number}
          </span>
          <span aria-hidden="true" className="h-3.5 w-px bg-[var(--border)]" />
          <p className="label-eyebrow text-xs uppercase tracking-widest text-[var(--color-accent)]">
            {product.name}
          </p>
        </div>

        <h2 className="heading-card mt-2 text-xl text-[var(--text)]">
          {product.tagline}
        </h2>

        <StatusPills tags={product.tags} />

        <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
          <span className="font-semibold text-[var(--text)]">The problem:</span>{" "}
          {product.problem}
        </p>

        <CapabilityChips items={product.features} />

        <div className="mt-auto pt-7">
          <ProductCta product={product} />
        </div>
      </div>
    </article>
  );
}

function HeaderBadge({ label, accent }: { label: string; accent: string }) {
  return (
    <span
      className="rounded-full px-2 py-0.5 text-[10px]"
      style={{ backgroundColor: `${accent}22`, color: accent }}
    >
      {label}
    </span>
  );
}

function ProductMockup({
  product,
  className = "border-b",
  featured = false,
}: {
  product: Product;
  className?: string;
  featured?: boolean;
}) {
  const shell = `flex flex-col overflow-hidden bg-[#0c0c14] p-5 font-mono text-xs ${
    featured ? "h-72 lg:h-full" : ""
  } ${className}`;

  if (product.slug === "bkagro") {
    return (
      <div className={shell} aria-hidden="true">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <span className="text-white/50">bkagro - natural nutrition store</span>
          <HeaderBadge label="live" accent={product.accent} />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {[
            { name: "Pure Honey", price: "₹349", stock: "128 units" },
            { name: "Flax Seeds", price: "₹210", stock: "87 units" },
            { name: "Haldi Powder", price: "₹165", stock: "203 units" },
            { name: "Almonds", price: "₹499", stock: "64 units" },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-lg bg-white/[0.04] p-3"
            >
              <p className="text-white/80">{item.name}</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-white/90 font-semibold">{item.price}</span>
                <span className="text-white/40">{item.stock}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between rounded-lg bg-white/[0.04] px-3 py-2">
          <span className="text-white/40">today&apos;s orders</span>
          <span className="text-white/80">17 orders · ₹12,430</span>
        </div>
      </div>
    );
  }

  if (product.slug === "launchpad") {
    return (
      <div className={shell} aria-hidden="true">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <span className="text-white/50">launchpad - client dashboard</span>
          <HeaderBadge label="on track" accent={product.accent} />
        </div>
        <div className="mt-4 flex min-h-0 flex-1 flex-col rounded-lg bg-white/[0.03] p-3">
          <p className="text-white/40">delivery momentum</p>
          <div className="mt-3 flex flex-1 items-end gap-3">
            {[{ h: 34, l: "M1" }, { h: 48, l: "M2" }, { h: 62, l: "M3" }, { h: 78, l: "M4" }, { h: 40, l: "M5" }].map(
              (bar, i) => (
                <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
                  <div
                    className="w-full rounded-t"
                    style={{
                      height: `${bar.h}px`,
                      background: `linear-gradient(to top,${product.accent}33,${product.accent})`,
                    }}
                  />
                  <span className="text-white/40">{bar.l}</span>
                </div>
              )
            )}
          </div>
        </div>
        <div className="mt-3 grid flex-none grid-cols-2 gap-3">
          <div className="rounded-lg bg-white/[0.04] p-3">
            <p className="text-white/40">budget burn</p>
            <p className="text-lg font-semibold text-white/90">72%</p>
          </div>
          <div className="rounded-lg bg-white/[0.04] p-3">
            <p className="text-white/40">days until review</p>
            <p className="text-lg font-semibold text-white/90">6</p>
          </div>
        </div>
      </div>
    );
  }

  if (product.slug === "clienthub") {
    return (
      <div className={shell} aria-hidden="true">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <span className="text-white/50">clienthub - shared workspace</span>
          <HeaderBadge label="live" accent={product.accent} />
        </div>
        <div className="mt-4 space-y-2">
          {[
            { name: "homepage-v3.fig", state: "approved", color: "#34d399" },
            { name: "api-contract.md", state: "approved", color: "#34d399" },
            { name: "onboarding-flow.fig", state: "review", color: "#fbbf24" },
          ].map((file, i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded-lg bg-white/[0.04] px-3 py-2"
            >
              <span className="text-white/80">{file.name}</span>
              <span
                className="rounded-full px-2 py-0.5 text-[10px]"
                style={{ backgroundColor: `${file.color}1a`, color: file.color }}
              >
                {file.state}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-3 h-16 overflow-hidden rounded-lg bg-white/[0.04] p-3">
          <p className="text-white/40">client feedback</p>
          <p className="truncate text-white/80">
            &quot;Love the new checkout. Ship it.&quot;
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={shell} aria-hidden="true">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <span className="text-white/50">pulseboard - release monitor</span>
        <HeaderBadge label="all systems up" accent={product.accent} />
      </div>
      <div className="mt-4 flex min-h-0 flex-1 items-end gap-2">
        {Array.from({ length: 42 }).map((_, i) => {
          const spike = i === 20 || i === 21;
          const color = spike ? "#f87171" : product.accent;
          return (
            <div
              key={i}
              className="flex-1 rounded-sm"
              style={{
                height: `${16 + ((i * 37) % 64)}px`,
                backgroundColor: color,
                opacity: spike ? 1 : 0.4,
              }}
            />
          );
        })}
      </div>
      <div className="mt-3 flex flex-none items-center justify-between rounded-lg bg-white/[0.04] px-3 py-2">
        <span className="text-white/40">incident 21:42</span>
        <span className="text-white/80">recovered in 4m</span>
      </div>
    </div>
  );
}

function ProductsCta() {
  return (
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
              Work with us
            </p>
            <h2 className="heading-section text-3xl text-[var(--text)] sm:text-4xl">
              Building something useful?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-[var(--text-muted)]">
              Tell us what you&apos;re working on. We may be able to help you
              design, build, or ship it.
            </p>
            <div className="mt-8 flex justify-center">
              <ButtonLink href="/contact" className="px-7 py-3.5">
                Tell us your idea
              </ButtonLink>
            </div>
            <p className="mt-6 text-sm text-[var(--text-faint)]">
              Product strategy · Engineering · Launch
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}