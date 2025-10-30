interface HoursTableProps {
  title: string;
  rows: { day: string; hours: string }[];
}

export default function HoursTable({ title, rows }: HoursTableProps) {
  return (
    <section className="w-full rounded-none border border-black/5 bg-canvas-200 p-6 shadow-soft">
      <h3 className="text-lg font-semibold text-topbar">{title}</h3>
      <dl className="mt-4 space-y-3 text-sm text-topbar/80">
        {rows.map((row) => (
          <div key={row.day} className="flex items-center justify-between gap-4 border-b border-black/5 pb-2 last:border-0 last:pb-0">
            <dt className="font-medium">{row.day}</dt>
            <dd className="text-right text-topbar/70">{row.hours}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
