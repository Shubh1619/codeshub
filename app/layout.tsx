import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

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
  title: {
    default: "Codeshub - Software, Websites, Apps, SaaS. Built for Growth.",
    template: "%s · Codeshub",
  },
  description:
    "We design and develop modern digital products that help businesses launch, automate, and scale - plus project-based internships for the next generation of developers.",
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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
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
        </ThemeProvider>
      </body>
    </html>
  );
}
