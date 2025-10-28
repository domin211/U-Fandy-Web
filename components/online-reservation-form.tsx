"use client";

import { FormEvent, useMemo, useState } from "react";

const TREVLIX_BASE_URL = "https://book.trevlix.com/book/app/";
const TREVLIX_CID = "7901170";

const toInputDateValue = (date: Date) => {
  const offsetDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return offsetDate.toISOString().split("T")[0];
};

const formatForTrevlix = (value: string) => {
  const [year, month, day] = value.split("-");
  return `${day}.${month}.${year}`;
};

export function OnlineReservationForm() {
  const todayInputValue = useMemo(() => toInputDateValue(new Date()), []);

  const [checkIn, setCheckIn] = useState(() => todayInputValue);
  const [checkOut, setCheckOut] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return toInputDateValue(tomorrow);
  });
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!checkIn || !checkOut) {
      setError("Vyberte prosím datum příjezdu i odjezdu.");
      return;
    }

    const arrival = new Date(checkIn);
    const departure = new Date(checkOut);

    if (arrival >= departure) {
      setError("Datum odjezdu musí následovat po datu příjezdu.");
      return;
    }

    setError(null);

    const params = new URLSearchParams({
      date_from: formatForTrevlix(checkIn),
      date_to: formatForTrevlix(checkOut),
      cid: TREVLIX_CID,
      mode: "window",
    });

    const reservationUrl = `${TREVLIX_BASE_URL}?${params.toString()}`;

    window.open(reservationUrl, "_blank", "noopener");
  };

  return (
    <div className="flex w-full flex-col gap-2 sm:max-w-xl">
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col gap-3 sm:flex-row sm:items-center"
      >
        <label className="flex w-full flex-col gap-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/70 sm:gap-2">
          <span className="sr-only">Datum příjezdu</span>
          <input
            type="date"
            value={checkIn}
            onChange={(event) => {
              const value = event.target.value;
              setCheckIn(value);
              setError(null);

              if (!value || !checkOut) {
                return;
              }

              const nextAllowedDeparture = new Date(value);
              nextAllowedDeparture.setDate(nextAllowedDeparture.getDate() + 1);
              if (new Date(checkOut) <= new Date(value)) {
                setCheckOut(toInputDateValue(nextAllowedDeparture));
              }
            }}
            className="w-full rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white shadow-soft outline-none transition focus:border-white/60 focus:bg-white/20"
            min={todayInputValue}
            required
          />
        </label>
        <label className="flex w-full flex-col gap-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/70 sm:gap-2">
          <span className="sr-only">Datum odjezdu</span>
          <input
            type="date"
            value={checkOut}
            onChange={(event) => {
              setCheckOut(event.target.value);
              setError(null);
            }}
            className="w-full rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white shadow-soft outline-none transition focus:border-white/60 focus:bg-white/20"
            min={checkIn || todayInputValue}
            required
          />
        </label>
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand transition hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
        >
          Volné pokoje
          <span aria-hidden className="ml-2">→</span>
        </button>
      </form>
      {error ? (
        <p className="text-sm font-medium text-white" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
