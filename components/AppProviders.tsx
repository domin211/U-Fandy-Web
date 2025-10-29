'use client';

import type { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';

import type { Dictionary } from '@/lib/i18n/get-dictionary';
import type { Locale } from '@/lib/i18n/config';
import { DictionaryProvider } from '@/lib/i18n/dictionary-context';

interface AppProvidersProps {
  locale: Locale;
  dictionary: Dictionary;
  children: ReactNode;
}

export function AppProviders({ locale, dictionary, children }: AppProvidersProps) {
  return (
    <NextIntlClientProvider locale={locale} messages={dictionary}>
      <DictionaryProvider locale={locale} dictionary={dictionary}>
        {children}
      </DictionaryProvider>
    </NextIntlClientProvider>
  );
}
