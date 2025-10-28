import { z } from 'zod';

export const reservationSchema = z
  .object({
    jmeno: z.string().min(2, 'Zadejte prosím své jméno.'),
    email: z.string().email('Zadejte platný e-mail.'),
    telefon: z
      .string()
      .min(9, 'Telefon musí mít alespoň 9 číslic.')
      .regex(/^[0-9+ ]+$/, 'Telefonní číslo může obsahovat pouze číslice a +.'),
    datum: z.string().min(1, 'Vyberte prosím datum příjezdu.'),
    hoste: z.coerce
      .number({ invalid_type_error: 'Zadejte počet hostů.' })
      .min(1, 'Alespoň jeden host.')
      .max(12, 'Pro větší skupiny nás prosím kontaktujte.'),
    zprava: z.string().max(500, 'Zpráva může mít maximálně 500 znaků.').optional().default(''),
    honey: z.string().length(0, 'Formulář nebyl odeslán.').optional()
  })
  .refine((data) => !data.honey, {
    message: 'Formulář nebyl odeslán.',
    path: ['honey']
  });

export type ReservationFormInput = z.infer<typeof reservationSchema>;

export interface ActionResult {
  success: boolean;
  message: string;
  fieldErrors?: Record<string, string | undefined>;
}
