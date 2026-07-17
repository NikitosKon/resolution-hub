import "../globals.css";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `Choose a language | ${siteConfig.name}`,
  description:
    "Choose English, Russian or Ukrainian for independent guidance about account restrictions, verification and payout holds.",
  alternates: {
    canonical: "/",
    languages: { en: "/en/", ru: "/ru/", uk: "/uk/", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: `Choose a language | ${siteConfig.name}`,
    description:
      "Choose English, Russian or Ukrainian for independent guidance about account restrictions, verification and payout holds.",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `Choose a language | ${siteConfig.name}`,
    description:
      "Choose English, Russian or Ukrainian for independent guidance about account restrictions, verification and payout holds.",
  },
  verification: {
    google: siteConfig.googleSiteVerification,
  },
};

export default function RootLandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={inter.variable}
    >
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
