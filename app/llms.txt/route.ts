import { siteMeta } from "@/lib/content";

const sections = [
  { title: "Home", url: "/" },
  { title: "Services", url: "/services" },
  { title: "Products", url: "/products" },
  { title: "Portfolio & Case Studies", url: "/portfolio" },
  { title: "Careers & Internships", url: "/careers" },
  { title: "Blog", url: "/blog" },
  { title: "Contact", url: "/contact" },
];

const content = [
  "# Codeshub",
  "",
  "> Codeshub is a custom software development company in India building SaaS platforms,",
  "> web apps, mobile apps and AI solutions from MVP development to workflow automation.",
  "",
  "Sections:",
  ...sections.map((s) => `- [${s.title}](${siteMeta.url}${s.url})`),
  "",
].join("\n");

export function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}