'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useLocale } from 'next-intl';
import { createReservation } from '@/app/actions/reservation';
import type { ActionResult } from '@/lib/validation';
import { useDictionary } from '@/lib/i18n/dictionary-context';

const initialState: ActionResult = {
  success: false,
  message: '',
  fieldErrors: {},
};

function SubmitButton({
  idleLabel,
  pendingLabel,
}: {
  idleLabel: string;
  pendingLabel: string;
}) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-topbar shadow-soft transition hover:bg-brand-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? pendingLabel : idleLabel}
    </button>
  );
}

export default function ReservationForm() {
  const dictionary = useDictionary();
  const locale = useLocale();
  const form = dictionary.reservationForm;
  const [state, formAction] = useFormState(createReservation, initialState);

  return (
    <form action={formAction} className="space-y-6 rounded-3xl border border-black/5 bg-canvas-200 p-6 shadow-soft">
      <input type="hidden" name="locale" value={locale} />
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="jmeno" className="text-sm font-medium text-topbar">
            {form.fields.name.label}
          </label>
          <input
            id="jmeno"
            name="jmeno"
            type="text"
            autoComplete="name"
            className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-topbar shadow-inner focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            aria-invalid={Boolean(state.fieldErrors?.jmeno)}
            aria-describedby={state.fieldErrors?.jmeno ? 'jmeno-error' : undefined}
          />
          {state.fieldErrors?.jmeno ? (
            <p id="jmeno-error" className="text-xs text-brand-dark">
              {state.fieldErrors.jmeno}
            </p>
          ) : null}
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-topbar">
            {form.fields.email.label}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-topbar shadow-inner focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            aria-invalid={Boolean(state.fieldErrors?.email)}
            aria-describedby={state.fieldErrors?.email ? 'email-error' : undefined}
          />
          {state.fieldErrors?.email ? (
            <p id="email-error" className="text-xs text-brand-dark">
              {state.fieldErrors.email}
            </p>
          ) : null}
        </div>
        <div className="space-y-2">
          <label htmlFor="telefon" className="text-sm font-medium text-topbar">
            {form.fields.phone.label}
          </label>
          <input
            id="telefon"
            name="telefon"
            type="tel"
            autoComplete="tel"
            className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-topbar shadow-inner focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            aria-invalid={Boolean(state.fieldErrors?.telefon)}
            aria-describedby={state.fieldErrors?.telefon ? 'telefon-error' : undefined}
          />
          {state.fieldErrors?.telefon ? (
            <p id="telefon-error" className="text-xs text-brand-dark">
              {state.fieldErrors.telefon}
            </p>
          ) : null}
        </div>
        <div className="space-y-2">
          <label htmlFor="datum" className="text-sm font-medium text-topbar">
            {form.fields.arrivalDate.label}
          </label>
          <input
            id="datum"
            name="datum"
            type="date"
            className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-topbar shadow-inner focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            aria-invalid={Boolean(state.fieldErrors?.datum)}
            aria-describedby={state.fieldErrors?.datum ? 'datum-error' : undefined}
          />
          {state.fieldErrors?.datum ? (
            <p id="datum-error" className="text-xs text-brand-dark">
              {state.fieldErrors.datum}
            </p>
          ) : null}
        </div>
        <div className="space-y-2">
          <label htmlFor="hoste" className="text-sm font-medium text-topbar">
            {form.fields.guests.label}
          </label>
          <input
            id="hoste"
            name="hoste"
            type="number"
            min={1}
            max={12}
            inputMode="numeric"
            className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-topbar shadow-inner focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            aria-invalid={Boolean(state.fieldErrors?.hoste)}
            aria-describedby={state.fieldErrors?.hoste ? 'hoste-error' : undefined}
          />
          {state.fieldErrors?.hoste ? (
            <p id="hoste-error" className="text-xs text-brand-dark">
              {state.fieldErrors.hoste}
            </p>
          ) : null}
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="zprava" className="text-sm font-medium text-topbar">
          {form.fields.note.label}
        </label>
        <textarea
          id="zprava"
          name="zprava"
          rows={4}
          className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-topbar shadow-inner focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          aria-invalid={Boolean(state.fieldErrors?.zprava)}
          aria-describedby={state.fieldErrors?.zprava ? 'zprava-error' : undefined}
        />
        {state.fieldErrors?.zprava ? (
          <p id="zprava-error" className="text-xs text-brand-dark">
            {state.fieldErrors.zprava}
          </p>
        ) : null}
      </div>
      <div className="hidden">
        <label htmlFor="honey">{form.fields.honeypot}</label>
        <input id="honey" type="text" name="honey" tabIndex={-1} autoComplete="off" />
      </div>
      {state.message ? (
        <p className={`text-sm ${state.success ? 'text-emerald-600' : 'text-brand-dark'}`}>{state.message}</p>
      ) : null}
      <SubmitButton idleLabel={form.submitIdle} pendingLabel={form.submitPending} />
    </form>
  );
}
