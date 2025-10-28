import { getRequestConfig } from 'next-intl/server';
import type { Locale } from '@/lib/i18n/config';
import { defaultLocale, locales } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/get-dictionary';

function isLocale(value: string | undefined): value is Locale {
  return value != null && locales.includes(value as Locale);
}

export default getRequestConfig(async ({ locale, requestLocale }) => {
  const inferredLocale = locale ?? (await requestLocale);
  const resolvedLocale = isLocale(inferredLocale) ? inferredLocale : defaultLocale;

  return {
    locale: resolvedLocale,
    messages: await getDictionary(resolvedLocale)
  };
});
