"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/data/dictionaries";
import { isLocale, type Locale } from "@/lib/locales";

export function LocalizedNotFound() {
  const pathname = usePathname();
  const segment = pathname.split("/")[1];
  const locale: Locale = segment && isLocale(segment) ? segment : "en";
  const copy = getDictionary(locale).notFound;

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <main id="main" className="not-found">
      <div>
        <p className="eyebrow">404</p>
        <h1>{copy.title}</h1>
        <p className="lede">{copy.text}</p>
        <Link className="button primary" href={`/${locale}/`}>
          {copy.action}
        </Link>
      </div>
    </main>
  );
}
