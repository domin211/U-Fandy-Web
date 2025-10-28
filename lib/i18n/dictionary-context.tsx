'use client';

import { createContext, useContext } from 'react';
import type { Dictionary } from './get-dictionary';
import type { Locale } from './config';

type DictionaryContextValue = {
  dictionary: Dictionary;
  locale: Locale;
};

const DictionaryContext = createContext<DictionaryContextValue | null>(null);

export function DictionaryProvider({
  dictionary,
  locale,
  children
}: {
  dictionary: Dictionary;
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <DictionaryContext.Provider value={{ dictionary, locale }}>{children}</DictionaryContext.Provider>
  );
}

export function useDictionary() {
  const value = useContext(DictionaryContext);

  if (!value) {
    throw new Error('useDictionary must be used within a DictionaryProvider');
  }

  return value.dictionary;
}

export function useCurrentLocale() {
  const value = useContext(DictionaryContext);

  if (!value) {
    throw new Error('useCurrentLocale must be used within a DictionaryProvider');
  }

  return value.locale;
}
