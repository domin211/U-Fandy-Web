"use client";

import { FormEvent, useMemo, useState } from "react";
import { DateRange } from "react-day-picker";

import { ReservationDatePicker } from "./reservation-date-picker";

const TREVLIX_BASE_URL = "https://book.trevlix.com/book/app/";
const TREVLIX_CID = "7901170";

const startOfDay = (date: Date) => {
  const value = new Date(date);
  value.setHours(0, 0, 0, 0);
  return value;
};

const toInputDateValue = (date: Date) => {
  const offsetDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return offsetDate.toISOString().split("T")[0];
};

const formatForTrevlix = (value: string) => {
  const [year, month, day] = value.split("-");
  return `${day}.${month}.${year}`;
};

const buildTrevlixUrl = (arrival: Date, departure: Date) => {
  const params = new URLSearchParams({
    date_from: formatForTrevlix(toInputDateValue(arrival)),
    date_to: formatForTrevlix(toInputDateValue(departure)),
    cid: TREVLIX_CID,
    mode: "window",
  });

  return `${TREVLIX_BASE_URL}?${params.toString()}`;
};

const redirectToTrevlix = (arrival: Date, departure: Date) => {
  const reservationUrl = buildTrevlixUrl(arrival, departure);

  if (typeof window !== "undefined") {
    window.location.href = reservationUrl;
  }
};

export function OnlineReservationForm() {
  const today = useMemo(() => startOfDay(new Date()), []);

  const [selectedRange, setSelectedRange] = useState<DateRange | undefined>(() => {
    const initialFrom = startOfDay(today);
    const initialTo = startOfDay(today);
    initialTo.setDate(initialTo.getDate() + 1);
    return { from: initialFrom, to: initialTo };
  });
  const [error, setError] = useState<string | null>(null);

  const handleRangeSelect = (range: DateRange | undefined) => {
    if (!range?.from) {
      setSelectedRange(undefined);
      setError(null);
      return;
    }

    const normalizedFrom = startOfDay(range.from);

    if (!range.to) {
      setSelectedRange({ from: normalizedFrom });
      setError(null);
      return;
    }

    const normalizedTo = startOfDay(range.to);

    if (normalizedTo <= normalizedFrom) {
      const adjustedDeparture = new Date(normalizedFrom);
      adjustedDeparture.setDate(adjustedDeparture.getDate() + 1);
      setSelectedRange({ from: normalizedFrom, to: adjustedDeparture });
      setError(null);
      return;
    }

    setSelectedRange({ from: normalizedFrom, to: normalizedTo });
    setError(null);
    redirectToTrevlix(normalizedFrom, normalizedTo);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedRange?.from || !selectedRange?.to) {
      setError("Vyberte prosím datum příjezdu i odjezdu.");
      return;
    }

    const arrival = selectedRange.from;
    const departure = selectedRange.to;

    if (arrival >= departure) {
      setError("Datum odjezdu musí následovat po datu příjezdu.");
      return;
    }

    setError(null);

    redirectToTrevlix(arrival, departure);
  };

  return (
    <div className="flex w-full flex-col gap-3 sm:max-w-3xl">
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col gap-3 sm:flex-row sm:items-center"
      >
        <ReservationDatePicker
          selectedRange={selectedRange}
          onSelect={handleRangeSelect}
          minDate={today}
        />
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-brand transition hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-dark sm:w-auto"
        >
          Volné pokoje
          <span aria-hidden className="ml-2">→</span>
        </button>
      </form>
      {error ? (
        <p className="text-sm font-medium text-white/90" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
