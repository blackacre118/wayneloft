import type { Metadata, Viewport } from "next";
import { Inter_Tight, Saira } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";
import "./globals.css";

const saira = Saira({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-saira",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.address}, Detroit`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — ${site.address}, Detroit`,
    description: site.description,
    url: site.url,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#05070D",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${saira.variable} ${interTight.variable}`}>
      <body>
        <a
          href="#main"
          className="label sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-night focus:px-4 focus:py-3"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
