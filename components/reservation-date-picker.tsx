"use client";

import { ComponentProps, useEffect, useMemo, useRef, useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";

// Temporary assertion until the upstream types include the "buttons" caption layout.
const BUTTONS_CAPTION_LAYOUT =
  "buttons" as ComponentProps<typeof DayPicker>["captionLayout"];

const formatDisplayDate = (date?: Date | null) => {
  if (!date) {
    return null;
  }

  return new Intl.DateTimeFormat("cs-CZ", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
};

type ReservationDatePickerProps = {
  selectedRange: DateRange | undefined;
  onSelect: (range: DateRange | undefined) => void;
  minDate: Date;
};

export function ReservationDatePicker({
  selectedRange,
  onSelect,
  minDate,
}: ReservationDatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const formattedFrom = useMemo(
    () => formatDisplayDate(selectedRange?.from ?? null),
    [selectedRange?.from]
  );
  const formattedTo = useMemo(
    () => formatDisplayDate(selectedRange?.to ?? null),
    [selectedRange?.to]
  );

  const hasFrom = Boolean(formattedFrom);
  const hasTo = Boolean(formattedTo);
  const arrivalLabel = hasFrom ? formattedFrom : "Vyberte příjezd";
  const departureLabel = hasTo ? formattedTo : "Vyberte odjezd";
  const arrivalTextClass = `text-sm font-semibold leading-5 ${
    hasFrom ? "" : "text-white/70"
  }`;
  const departureTextClass = `text-sm font-semibold leading-5 ${
    hasTo ? "" : "text-white/70"
  }`;

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handlePointerDown = (event: MouseEvent) => {
      if (
        containerRef.current &&
        event.target instanceof Node &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && selectedRange?.from && selectedRange?.to) {
      setIsOpen(false);
    }
  }, [isOpen, selectedRange?.from, selectedRange?.to]);

  const buttonLabel = useMemo(() => {
    if (formattedFrom && formattedTo) {
      return `Pobyt od ${formattedFrom} do ${formattedTo}`;
    }

    if (formattedFrom) {
      return `Příjezd ${formattedFrom}, vyberte datum odjezdu`;
    }

    return "Vyberte datum příjezdu a odjezdu";
  }, [formattedFrom, formattedTo]);

  const handleToggle = () => {
    setIsOpen((previous) => !previous);
  };

  const handleClear = () => {
    onSelect(undefined);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative w-full sm:flex-1">
      <button
        type="button"
        onClick={handleToggle}
        aria-label={buttonLabel}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        className="group inline-flex w-full items-center justify-between rounded-full border border-white/20 bg-white/10 px-6 py-3 text-left text-white shadow-soft outline-none transition focus:border-white/60 focus:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <span className="flex w-full items-center gap-4">
          <span className="flex flex-1 flex-col">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
              Příjezd
            </span>
            <span className={arrivalTextClass}>{arrivalLabel}</span>
          </span>
          <span
            aria-hidden
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-lg font-semibold text-white"
          >
            →
          </span>
          <span className="flex flex-1 flex-col">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
              Odjezd
            </span>
            <span className={departureTextClass}>{departureLabel}</span>
          </span>
        </span>
        <span
          aria-hidden
          className="ml-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition group-hover:border-white/60 group-focus:border-white/60"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path
              fillRule="evenodd"
              d="M5.22 7.22a.75.75 0 0 1 1.06 0L10 10.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 8.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>

      {isOpen ? (
        <div
          role="dialog"
          aria-modal="false"
          className="absolute left-0 right-0 z-50 mt-3 origin-top overflow-hidden rounded-3xl border border-white/20 bg-brand/95 p-4 text-white shadow-xl backdrop-blur"
        >
          <DayPicker
            mode="range"
            selected={selectedRange}
            defaultMonth={selectedRange?.from ?? minDate}
            onSelect={(range) => onSelect(range ?? undefined)}
            disabled={{ before: minDate }}
            weekStartsOn={1}
            numberOfMonths={1}
            className="rdp-theme"
            captionLayout={BUTTONS_CAPTION_LAYOUT}
            fromMonth={minDate}
            showOutsideDays
          />
          <div className="mt-3 flex items-center justify-between text-xs text-white/80">
            <p>Vyberte datum příjezdu i odjezdu.</p>
            <button
              type="button"
              onClick={handleClear}
              className="rounded-full border border-white/40 px-3 py-1 font-semibold uppercase tracking-[0.2em] text-[10px] text-white transition hover:border-white/70 hover:bg-white/10"
            >
              Vymazat
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
