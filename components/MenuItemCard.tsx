interface MenuItemCardProps {
  title: string;
  description: string;
  price: string;
}

export default function MenuItemCard({ title, description, price }: MenuItemCardProps) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-slate-950/40 p-5 transition hover:border-brand/60">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-slate-300">{description}</p>
      </div>
      <span className="text-sm font-semibold text-brand-light">{price}</span>
    </div>
  );
}
