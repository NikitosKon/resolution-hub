export const locales = ["en", "ru", "uk"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const localeNames: Record<Locale, string> = {
  en: "English",
  ru: "Русский",
  uk: "Українська",
};
