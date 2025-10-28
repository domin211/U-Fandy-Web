'use server';

import { headers } from 'next/headers';
import { reservationSchema, type ActionResult } from '@/lib/validation';

const submissions = new Map<string, { count: number; timestamp: number }>();
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 3;

export async function createReservation(_: ActionResult | undefined, formData: FormData): Promise<ActionResult> {
  const ip = headers().get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  const now = Date.now();
  const entry = submissions.get(ip);

  if (!entry || now - entry.timestamp > WINDOW_MS) {
    submissions.set(ip, { count: 1, timestamp: now });
  } else if (entry.count >= MAX_REQUESTS) {
    return {
      success: false,
      message: 'Odesíláte příliš často, zkuste to prosím později.'
    };
  } else {
    submissions.set(ip, { count: entry.count + 1, timestamp: entry.timestamp });
  }

  const raw = Object.fromEntries(formData.entries());
  const parseResult = reservationSchema.safeParse(raw);

  if (!parseResult.success) {
    return {
      success: false,
      message: 'Zkontrolujte prosím zvýrazněná pole.',
      fieldErrors: Object.fromEntries(
        Object.entries(parseResult.error.flatten().fieldErrors).map(([key, value]) => [key, value?.[0]])
      )
    };
  }

  console.info('Reservation request', parseResult.data);

  return {
    success: true,
    message: 'Děkujeme! Ozveme se vám co nejdříve s potvrzením.'
  };
}
