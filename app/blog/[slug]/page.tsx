import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, ButtonLink } from "@/components/ui";
import { JsonLd } from "@/components/seo";
import { ArrowRightIcon } from "@/components/icons";
import { blogPosts, siteMeta } from "@/lib/content";

function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const older = blogPosts.filter(
    (candidate) => candidate.slug !== post.slug && candidate.category === post.category
  );
  const related = older.length > 0 ? older : blogPosts.filter((c) => c.slug !== post.slug);

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    articleSection: post.category,
    author: {
      "@type": "Organization",
      name: siteMeta.name,
      url: siteMeta.url,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${siteMeta.url}/#organization`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteMeta.url}/blog/${post.slug}`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteMeta.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${siteMeta.url}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${siteMeta.url}/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={blogPostingSchema} />
      <JsonLd data={breadcrumbSchema} />

      <section className="border-b border-[var(--border)]">
        <Container className="max-w-3xl py-14 sm:py-18">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--text-muted)] transition-colors hover:text-[var(--color-accent)]"
          >
            <ArrowRightIcon width={14} height={14} className="rotate-180" />
            All posts
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-[var(--text-faint)]">
            <span className="rounded-full border border-[var(--border)] bg-[var(--bg-muted)]/60 px-2.5 py-0.5 font-medium text-[var(--text-muted)]">
              {post.category}
            </span>
            <span>{post.date}</span>
            <span>· {post.readTime} read</span>
          </div>
          <h1 className="heading-display mt-5 text-3xl text-[var(--text)] sm:text-4xl lg:text-[2.4rem]">
            {post.title}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-[var(--text-muted)]">
            {post.excerpt}
          </p>
        </Container>
      </section>

      <article className="py-14 sm:py-18">
        <Container className="max-w-3xl">
          <div className="space-y-6 text-base leading-[1.8] text-[var(--text)]">
            {post.body.map((paragraph, i) => (
              <p
                key={i}
                className={i === 0 ? "text-lg text-[var(--text-muted)]" : ""}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-[var(--border)] bg-[var(--bg-raised)] p-7 sm:p-8">
            <h2 className="heading-card text-lg text-[var(--text)]">
              Building something similar?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
              We turn ideas and business problems into{" "}
              <Link
                href="/services"
                className="font-semibold text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-deep)]"
              >
                custom software
              </Link>
              ,{" "}
              <Link
                href="/portfolio"
                className="font-semibold text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-deep)]"
              >
                SaaS
              </Link>
              , mobile apps, and AI solutions - scoped honestly, priced up front.
              Tell us what you&apos;re working on.
            </p>
            <div className="mt-6">
              <ButtonLink href="/contact" className="px-6 py-3">
                Start Your Project
              </ButtonLink>
            </div>
          </div>
        </Container>
      </article>

      <section className="pb-20 sm:pb-24">
        <Container className="max-w-3xl">
          <h2 className="heading-section text-xl text-[var(--text)]">
            Keep reading
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {related.slice(0, 2).map((candidate) => (
              <Link
                key={candidate.slug}
                href={`/blog/${candidate.slug}`}
                className="group flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[var(--color-accent)]/50"
              >
                <span className="text-xs text-[var(--text-faint)]">
                  {candidate.category} · {candidate.readTime} read
                </span>
                <h3 className="heading-card mt-3 flex-1 text-base text-[var(--text)] transition-colors group-hover:text-[var(--color-accent)]">
                  {candidate.title}
                </h3>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}