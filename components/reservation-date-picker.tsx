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
  labels: {
    arrivalLabel: string;
    arrivalPlaceholder: string;
    departureLabel: string;
    departurePlaceholder: string;
    helperText: string;
    clearLabel: string;
    buttonLabelEmpty: string;
    buttonLabelFrom: string;
    buttonLabelRange: string;
  };
};

export function ReservationDatePicker({
  selectedRange,
  onSelect,
  minDate,
  labels,
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
  const arrivalLabel = hasFrom ? formattedFrom : labels.arrivalPlaceholder;
  const departureLabel = hasTo ? formattedTo : labels.departurePlaceholder;
  const arrivalTextClass = `text-base font-semibold leading-6 ${
    hasFrom ? "text-topbar" : "text-topbar/50"
  }`;
  const departureTextClass = `text-base font-semibold leading-6 ${
    hasTo ? "text-topbar" : "text-topbar/50"
  }`;
  const { buttonLabelEmpty, buttonLabelFrom, buttonLabelRange } = labels;

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

  const buttonLabel = useMemo(() => {
    if (formattedFrom && formattedTo) {
      return buttonLabelRange
        .replace("{from}", formattedFrom)
        .replace("{to}", formattedTo);
    }

    if (formattedFrom) {
      return buttonLabelFrom.replace("{from}", formattedFrom);
    }

    return buttonLabelEmpty;
  }, [buttonLabelEmpty, buttonLabelFrom, buttonLabelRange, formattedFrom, formattedTo]);

  const handleToggle = () => {
    setIsOpen((previous) => !previous);
  };

  const handleClear = () => {
    onSelect(undefined);
    setIsOpen(false);
  };

  const handleRangeSelect = (range: DateRange | undefined) => {
    onSelect(range);

    if (range?.from && range?.to) {
      setIsOpen(false);
    }
  };

  return (
    <div ref={containerRef} className="relative w-full sm:flex-1">
      <button
        type="button"
        onClick={handleToggle}
        aria-label={buttonLabel}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        className="group inline-flex h-[4.25rem] w-full items-stretch gap-3 rounded-md text-left outline-none transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <span className="flex h-full flex-1 flex-col justify-center rounded-md bg-white px-4 py-2 text-brand-dark shadow-soft">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-topbar/50">
            {labels.arrivalLabel}
          </span>
          <span className={arrivalTextClass}>{arrivalLabel}</span>
        </span>
        <span
          aria-hidden
          className="flex h-full items-center justify-center px-1 text-2xl font-semibold text-white/80 transition group-hover:text-white"
        >
          →
        </span>
        <span className="flex h-full flex-1 flex-col justify-center rounded-md bg-white px-4 py-2 text-brand-dark shadow-soft">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-topbar/50">
            {labels.departureLabel}
          </span>
          <span className={departureTextClass}>{departureLabel}</span>
        </span>
      </button>

      {isOpen ? (
        <div
          role="dialog"
          aria-modal="false"
          className="absolute left-0 right-0 z-50 mt-3 origin-top overflow-hidden rounded-md border border-white/40 bg-white p-4 text-brand-dark shadow-xl"
        >
          <DayPicker
            mode="range"
            selected={selectedRange}
            defaultMonth={selectedRange?.from ?? minDate}
            onSelect={(range) => handleRangeSelect(range ?? undefined)}
            disabled={{ before: minDate }}
            weekStartsOn={1}
            numberOfMonths={1}
            className="rdp-theme"
            captionLayout={BUTTONS_CAPTION_LAYOUT}
            fromMonth={minDate}
            showOutsideDays
          />
          <div className="mt-3 flex items-center justify-between text-xs text-topbar/70">
            <p>{labels.helperText}</p>
            <button
              type="button"
              onClick={handleClear}
              className="rounded-md border border-brand-dark/20 px-3 py-1 font-semibold uppercase tracking-[0.2em] text-[10px] text-topbar transition hover:border-brand-dark/40 hover:bg-brand-dark/5"
            >
              {labels.clearLabel}
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
