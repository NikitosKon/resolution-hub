import Link from "next/link";
import { ArrowRight, Languages, ShieldCheck } from "lucide-react";
import { localeNames, locales } from "@/lib/locales";
import { siteConfig } from "@/lib/config";

export default function LanguagePage() {
  return (
    <main id="main" className="language-picker">
      <section className="language-card">
        <span className="brand-mark">
          <ShieldCheck size={21} />
        </span>
        <p className="eyebrow" style={{ marginTop: 30 }}>
          <Languages size={15} />
          Independent guidance
        </p>
        <h1 style={{ fontSize: "clamp(2.6rem, 7vw, 4.6rem)" }}>
          Choose your language
        </h1>
        <p className="lede">
          {siteConfig.name} explains account restrictions, verification checks
          and payout holds. No forced redirect — you stay in control.
        </p>
        <div className="language-options">
          {locales.map((locale) => (
            <Link
              className="language-option"
              key={locale}
              href={`/${locale}/`}
              hrefLang={locale}
            >
              <strong>{localeNames[locale]}</strong>
              <ArrowRight size={18} />
            </Link>
          ))}
        </div>
        <p className="legal-note">
          Independent information resource. Not official support for any
          platform.
        </p>
      </section>
    </main>
  );
}
