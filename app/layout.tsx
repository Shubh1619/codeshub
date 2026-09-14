import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { CursorEffect } from "@/components/cursor-effect";
import { AmbientEffect } from "@/components/ambient-effect";
import { JsonLd } from "@/components/seo";
import { siteMeta } from "@/lib/content";

const display = Sora({
  subsets: ["latin"],
  variable: "--font-display-family",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body-family",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMeta.url),
  title: {
    default: "Custom Software & SaaS Development in India | Codeshub",
    template: "%s | Codeshub",
  },
  description:
    "Codeshub is a custom software development company in India building SaaS platforms, web apps, mobile apps and AI solutions that help businesses launch, automate and scale - with project-based internships for developers.",
  icons: {
    icon: [
      {
        url: "/favicons/favicon-dark.png",
        type: "image/png",
        sizes: "64x64",
      },
    ],
    apple: "/favicons/apple-touch-icon.png",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteMeta.url}/#organization`,
  name: siteMeta.name,
  url: siteMeta.url,
  logo: `${siteMeta.url}/logos/logo-dark.png`,
  email: siteMeta.email,
  telephone: siteMeta.phoneIntl,
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressRegion: "India",
  },
  sameAs: siteMeta.sameAs,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <JsonLd data={organizationSchema} />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("codeshub-theme");var light=t==="light";document.documentElement.classList.toggle("dark",!light);var f=document.querySelector('link[rel="icon"]');if(!f){f=document.createElement("link");f.rel="icon";f.type="image/png";f.sizes="64x64";document.head.appendChild(f);}f.href=light?"/favicons/favicon-light.png":"/favicons/favicon-dark.png";}catch(e){document.documentElement.classList.add("dark");}})();`,
          }}
        />
      </head>
      <body className={`${display.variable} ${body.variable} antialiased`}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <AmbientEffect />
          <WhatsAppButton />
          <CursorEffect />
        </ThemeProvider>
      </body>
    </html>
  );
}
