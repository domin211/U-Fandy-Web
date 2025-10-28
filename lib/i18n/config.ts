export const locales = ['cs', 'en', 'pl', 'de', 'sk'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'cs';

export const localeLabels: Record<Locale, string> = {
  cs: 'Čeština',
  en: 'English',
  pl: 'Polski',
  de: 'Deutsch',
  sk: 'Slovenčina'
};

export const openGraphLocales: Record<Locale, string> = {
  cs: 'cs_CZ',
  en: 'en_US',
  pl: 'pl_PL',
  de: 'de_DE',
  sk: 'sk_SK'
};
