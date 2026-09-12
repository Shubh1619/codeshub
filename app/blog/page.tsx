import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui";
import { ArrowRightIcon } from "@/components/icons";
import { blogPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog | Software Development Insights | Codeshub",
  description:
    "Guides, tutorials and case studies on custom software development, SaaS platforms, mobile apps and AI for business - from the engineering team at Codeshub in India.",
  alternates: { canonical: "/blog" },
};

const categories = Array.from(new Set(blogPosts.map((post) => post.category)));

export default function BlogPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(20,20,35,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(20,20,35,0.03)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_75%)] dark:bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]"
        />
        <Container className="relative py-14 sm:py-18">
          <p className="label-eyebrow mb-4 text-xs uppercase tracking-widest text-[var(--color-accent)]">
            Blog
          </p>
          <h1 className="heading-display text-3xl text-[var(--text)] sm:text-4xl lg:text-[2.75rem]">
            Notes from building software for real businesses
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
            Pricing guides, technical deep-dives, and honest case studies from
            the team shipping custom software, SaaS, mobile and AI products in
            India.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((category) => (
              <span
                key={category}
                className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--bg-raised)] px-3 py-1 text-xs font-medium text-[var(--text-muted)]"
              >
                {category}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--card)] p-7 transition-all duration-200 hover:-translate-y-1 hover:border-[var(--color-accent)]/50 hover:shadow-[0_20px_44px_-28px_var(--color-accent-glow)]"
              >
                <div className="flex items-center gap-3 text-xs text-[var(--text-faint)]">
                  <span className="rounded-full border border-[var(--border)] bg-[var(--bg)]/60 px-2.5 py-0.5 font-medium text-[var(--text-muted)]">
                    {post.category}
                  </span>
                  <span>{post.date}</span>
                  <span>· {post.readTime}</span>
                </div>
                <h2 className="heading-card mt-4 flex-1 text-lg text-[var(--text)]">
                  <Link href={`/blog/${post.slug}`} className="transition-colors group-hover:text-[var(--color-accent)]">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--text)] transition-colors group-hover:text-[var(--color-accent)]"
                >
                  Read post
                  <ArrowRightIcon
                    width={15}
                    height={15}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}