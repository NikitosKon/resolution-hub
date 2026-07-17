import "../globals.css";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header, Footer } from "@/components/site";
import { isLocale, locales } from "@/lib/locales";
import { siteConfig } from "@/lib/config";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.name, template: `%s | ${siteConfig.name}` },
  applicationName: siteConfig.name,
  formatDetection: { email: false, address: false, telephone: false },
  verification: {
    google: siteConfig.googleSiteVerification,
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
export const dynamicParams = true;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <html
      lang={locale}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={inter.variable}
    >
      <body>
        <a className="skip-link" href="#main">
          {locale === "en"
            ? "Skip to content"
            : locale === "ru"
              ? "К содержанию"
              : "До вмісту"}
        </a>
        <Header locale={locale} />
        {children}
        <Footer locale={locale} />
      </body>
    </html>
  );
}
