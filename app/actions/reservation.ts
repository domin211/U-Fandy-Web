'use server';

import { headers } from 'next/headers';
import { getDictionary } from '@/lib/i18n/get-dictionary';
import { createReservationSchema, type ActionResult } from '@/lib/validation';
import { defaultLocale, locales, type Locale } from '@/lib/i18n/config';

const submissions = new Map<string, { count: number; timestamp: number }>();
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 3;
const localeSet = new Set<Locale>(locales);

export async function createReservation(_: ActionResult | undefined, formData: FormData): Promise<ActionResult> {
  const headerList = await headers();
  const ip = headerList.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  const now = Date.now();
  const entry = submissions.get(ip);

  if (!entry || now - entry.timestamp > WINDOW_MS) {
    submissions.set(ip, { count: 1, timestamp: now });
  } else if (entry.count >= MAX_REQUESTS) {
    const localeValue = formData.get('locale');
    const locale = typeof localeValue === 'string' && localeSet.has(localeValue as Locale) ? (localeValue as Locale) : defaultLocale;
    const dictionary = await getDictionary(locale);
    return {
      success: false,
      message: dictionary.reservationForm.rateLimit,
    };
  } else {
    submissions.set(ip, { count: entry.count + 1, timestamp: entry.timestamp });
  }

  const localeValue = formData.get('locale');
  const locale = typeof localeValue === 'string' && localeSet.has(localeValue as Locale) ? (localeValue as Locale) : defaultLocale;
  formData.delete('locale');

  const dictionary = await getDictionary(locale);
  const formDictionary = dictionary.reservationForm;
  const reservationSchema = createReservationSchema(formDictionary);

  const rawEntries = Object.fromEntries(formData.entries()) as Record<string, string>;
  const parseResult = reservationSchema.safeParse(rawEntries);

  if (!parseResult.success) {
    return {
      success: false,
      message: formDictionary.genericError,
      fieldErrors: Object.fromEntries(
        Object.entries(parseResult.error.flatten().fieldErrors).map(([key, value]) => [key, value?.[0]])
      ),
    };
  }

  console.info('Reservation request', parseResult.data);

  return {
    success: true,
    message: formDictionary.success,
  };
}
