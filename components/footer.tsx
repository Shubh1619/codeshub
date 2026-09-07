import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { BrandLogo } from "@/components/brand-logo";

const companyLinks = [
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Careers", href: "/careers" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

const servicesLinks = [
  { label: "Custom Software", href: "/services#custom-software" },
  { label: "Web Development", href: "/services#websites" },
  { label: "Mobile Apps", href: "/services#mobile" },
  { label: "SaaS Development", href: "/services#saas" },
  { label: "AI/ML Solutions", href: "/services#ai-ml" },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: <LinkedInIcon />,
  },
  {
    label: "GitHub",
    href: "https://github.com/",
    icon: <GitHubIcon />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: <InstagramIcon />,
  },
  {
    label: "X",
    href: "https://x.com/",
    icon: <XIcon />,
  },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="heading-card text-sm text-[var(--text)]">{title}</h3>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="inline-block text-sm text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--color-accent)]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="mt-6 flex items-center gap-2">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="grid h-8 w-8 place-items-center rounded-full border border-[var(--border)] text-[var(--text-muted)] transition-colors duration-200 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-muted)]">
      <div className="mx-auto w-full max-w-6xl px-5 pb-12 pt-16 lg:pt-20">
        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          {/* Brand */}
          <div className="max-w-xs">
            <BrandLogo height={85} />
            <p className="mt-5 text-sm leading-relaxed text-[var(--text-muted)]">
              Software. Websites. Apps. SaaS. Built for Growth. A development
              agency that turns ideas and business problems into scalable
              technology - and trains the next generation of developers along
              the way.
            </p>
            <SocialLinks />
            <div className="mt-6 space-y-2 text-sm">
              <a
                href="mailto:contact@codeshub.in"
                className="inline-block text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--color-accent)]"
              >
                contact@codeshub.in
              </a>
              <a
                href="tel:+918888184205"
                className="block text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--color-accent)]"
              >
                +91 88881 84205
              </a>
              <a
                href="tel:+917517932501"
                className="block text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--color-accent)]"
              >
                +91 751 793 2501
              </a>
            </div>
          </div>

          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Services" links={servicesLinks} />

          {/* Start a Project */}
          <div className="self-start">
            <h3 className="heading-card text-sm text-[var(--text)]">
              Start a Project
            </h3>
            <div className="mt-4 rounded-[20px] border border-[var(--border)] bg-[var(--card)] p-5">
              <p className="heading-card text-base text-[var(--text)]">
                Have a project in mind?
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-muted)]">
                Let&apos;s build something that actually moves your business
                forward.
              </p>
              <Link
                href="/contact"
                className="group mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--color-accent)] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_10px_28px_-10px_var(--color-accent-glow)]"
              >
                Start Your Project
                <ArrowRightIcon
                  width={15}
                  height={15}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-[var(--border)] pt-7 text-sm text-[var(--text-faint)] sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Codeshub. All rights reserved.</p>
          <p>Built for growth, engineered for scale.</p>
        </div>
      </div>
    </footer>
  );
}

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.86-3.04-1.85 0-2.13 1.44-2.13 2.93v5.68H9.34V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}