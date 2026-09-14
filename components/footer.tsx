import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { BrandLogo } from "@/components/brand-logo";

const companyLinks = [
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
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
    href: "https://www.linkedin.com/company/codeshubit/",
    icon: <LinkedInIcon />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/codeshub.in/",
    icon: <InstagramIcon />,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61594363167517",
    icon: <FacebookIcon />,
  },
  {
    label: "GitHub",
    href: "https://github.com/codeshub-in",
    icon: <GitHubIcon />,
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
                href="tel:+917841951305"
                className="block text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--color-accent)]"
              >
                +91 78419 51305
              </a>
              <p className="text-[var(--text-faint)]">
                Software development company in India · working worldwide
              </p>
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
          <p>
            © {new Date().getFullYear()} Codeshub · Since 2026 · All rights
            reserved.
          </p>
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

function InstagramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}