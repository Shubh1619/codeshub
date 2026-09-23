import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start Your Software Project",
  description:
    "Tell us what you want to build. Contact Codeshub for custom software, website, mobile app or SaaS development in India. Email contact@codeshub.in or call +91 78419 51305 for an honest fixed-price quote.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}