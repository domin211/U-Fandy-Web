import type { Locale } from './config';
import cs from '@/messages/cs';

const dictionaries = {
  cs: () => import('@/messages/cs'),
  en: () => import('@/messages/en'),
  pl: () => import('@/messages/pl'),
  de: () => import('@/messages/de'),
  sk: () => import('@/messages/sk')
} as const;

export type Dictionary = typeof cs;

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  const loadDictionary = dictionaries[locale] ?? dictionaries.cs;
  const mod = await loadDictionary();
  return mod.default;
}
