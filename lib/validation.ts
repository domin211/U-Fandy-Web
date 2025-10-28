import { z } from 'zod';
import type { Dictionary } from '@/lib/i18n/get-dictionary';

export function createReservationSchema(form: Dictionary['reservationForm']) {
  return z
    .object({
      jmeno: z.string().min(2, form.fields.name.error),
      email: z.string().email(form.fields.email.error),
      telefon: z
        .string()
        .min(9, form.fields.phone.min)
        .regex(/^[0-9+ ]+$/, form.fields.phone.format),
      datum: z.string().min(1, form.fields.arrivalDate.error),
      hoste: z.coerce
        .number({ invalid_type_error: form.fields.guests.required })
        .min(1, form.fields.guests.min)
        .max(12, form.fields.guests.max),
      zprava: z.string().max(500, form.fields.note.max).optional().default(''),
      honey: z.string().length(0, form.genericError).optional(),
    })
    .refine((data) => !data.honey, {
      message: form.genericError,
      path: ['honey'],
    });
}

export type ReservationSchema = ReturnType<typeof createReservationSchema>;
export type ReservationFormInput = z.infer<ReservationSchema>;

export interface ActionResult {
  success: boolean;
  message: string;
  fieldErrors?: Record<string, string | undefined>;
}
