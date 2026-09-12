import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Start Your Software Project | Codeshub",
  description:
    "Tell us what you want to build. Contact Codeshub for custom software, website, mobile app or SaaS development in India. Email contact@codeshub.in or call +91 78419 51305 for an honest fixed-price quote.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}