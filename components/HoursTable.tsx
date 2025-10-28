interface HoursTableProps {
  title: string;
  rows: { day: string; hours: string }[];
}

export default function HoursTable({ title, rows }: HoursTableProps) {
  return (
    <section className="w-full rounded-3xl border border-white/10 bg-slate-950/50 p-6 shadow-soft">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <dl className="mt-4 space-y-3 text-sm text-slate-200">
        {rows.map((row) => (
          <div key={row.day} className="flex items-center justify-between gap-4 border-b border-white/5 pb-2 last:border-0 last:pb-0">
            <dt className="font-medium">{row.day}</dt>
            <dd className="text-right text-slate-300">{row.hours}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
