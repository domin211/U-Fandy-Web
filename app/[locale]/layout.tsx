export { generateMetadata, viewport } from '../layout';

import type { ReactNode } from 'react';
import { unstable_setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/lib/i18n/config';
import { locales } from '@/lib/i18n/config';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: { locale: Locale };
}) {
  unstable_setRequestLocale(params.locale);

  return <>{children}</>;
}
