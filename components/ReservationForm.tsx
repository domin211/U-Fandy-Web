'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { createReservation } from '@/app/actions/reservation';
import type { ActionResult } from '@/lib/validation';

const initialState: ActionResult = {
  success: false,
  message: '',
  fieldErrors: {}
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-slate-950 shadow-soft transition hover:bg-brand-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? 'Odesílám…' : 'Odeslat poptávku'}
    </button>
  );
}

export default function ReservationForm() {
  const [state, formAction] = useFormState(createReservation, initialState);

  return (
    <form action={formAction} className="space-y-6 rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-soft">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="jmeno" className="text-sm font-medium text-white">
            Jméno a příjmení
          </label>
          <input
            id="jmeno"
            name="jmeno"
            type="text"
            autoComplete="name"
            className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-white shadow-inner focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            aria-invalid={Boolean(state.fieldErrors?.jmeno)}
            aria-describedby={state.fieldErrors?.jmeno ? 'jmeno-error' : undefined}
          />
          {state.fieldErrors?.jmeno ? (
            <p id="jmeno-error" className="text-xs text-red-300">
              {state.fieldErrors.jmeno}
            </p>
          ) : null}
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-white">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-white shadow-inner focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            aria-invalid={Boolean(state.fieldErrors?.email)}
            aria-describedby={state.fieldErrors?.email ? 'email-error' : undefined}
          />
          {state.fieldErrors?.email ? (
            <p id="email-error" className="text-xs text-red-300">
              {state.fieldErrors.email}
            </p>
          ) : null}
        </div>
        <div className="space-y-2">
          <label htmlFor="telefon" className="text-sm font-medium text-white">
            Telefon
          </label>
          <input
            id="telefon"
            name="telefon"
            type="tel"
            autoComplete="tel"
            className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-white shadow-inner focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            aria-invalid={Boolean(state.fieldErrors?.telefon)}
            aria-describedby={state.fieldErrors?.telefon ? 'telefon-error' : undefined}
          />
          {state.fieldErrors?.telefon ? (
            <p id="telefon-error" className="text-xs text-red-300">
              {state.fieldErrors.telefon}
            </p>
          ) : null}
        </div>
        <div className="space-y-2">
          <label htmlFor="datum" className="text-sm font-medium text-white">
            Datum příjezdu
          </label>
          <input
            id="datum"
            name="datum"
            type="date"
            className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-white shadow-inner focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            aria-invalid={Boolean(state.fieldErrors?.datum)}
            aria-describedby={state.fieldErrors?.datum ? 'datum-error' : undefined}
          />
          {state.fieldErrors?.datum ? (
            <p id="datum-error" className="text-xs text-red-300">
              {state.fieldErrors.datum}
            </p>
          ) : null}
        </div>
        <div className="space-y-2">
          <label htmlFor="hoste" className="text-sm font-medium text-white">
            Počet hostů
          </label>
          <input
            id="hoste"
            name="hoste"
            type="number"
            min={1}
            max={12}
            inputMode="numeric"
            className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-white shadow-inner focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            aria-invalid={Boolean(state.fieldErrors?.hoste)}
            aria-describedby={state.fieldErrors?.hoste ? 'hoste-error' : undefined}
          />
          {state.fieldErrors?.hoste ? (
            <p id="hoste-error" className="text-xs text-red-300">
              {state.fieldErrors.hoste}
            </p>
          ) : null}
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="zprava" className="text-sm font-medium text-white">
          Poznámka
        </label>
        <textarea
          id="zprava"
          name="zprava"
          rows={4}
          className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-white shadow-inner focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          aria-invalid={Boolean(state.fieldErrors?.zprava)}
          aria-describedby={state.fieldErrors?.zprava ? 'zprava-error' : undefined}
        />
        {state.fieldErrors?.zprava ? (
          <p id="zprava-error" className="text-xs text-red-300">
            {state.fieldErrors.zprava}
          </p>
        ) : null}
      </div>
      <div className="hidden">
        <label htmlFor="honey">Nechte prázdné</label>
        <input id="honey" type="text" name="honey" tabIndex={-1} autoComplete="off" />
      </div>
      {state.message ? (
        <p className={`text-sm ${state.success ? 'text-emerald-300' : 'text-red-300'}`}>{state.message}</p>
      ) : null}
      <SubmitButton />
    </form>
  );
}
