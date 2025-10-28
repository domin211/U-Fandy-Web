import { getRequestConfig } from 'next-intl/server';
import { defaultLocale, locales, type Locale } from '@/lib/i18n/config';

export default getRequestConfig(({ locale }) => ({
  locale: (locale as Locale | undefined) ?? defaultLocale
}));

export const config = {
  locales,
  defaultLocale,
  localePrefix: 'as-needed' as const
};
