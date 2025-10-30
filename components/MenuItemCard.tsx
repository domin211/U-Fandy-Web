interface MenuItemCardProps {
  title: string;
  description: string;
  price: string;
}

export default function MenuItemCard({ title, description, price }: MenuItemCardProps) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-none border border-black/5 bg-canvas-200 p-5 transition hover:border-brand/40">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-topbar">{title}</h3>
        <p className="text-sm text-topbar/70">{description}</p>
      </div>
      <span className="text-sm font-semibold text-brand-dark">{price}</span>
    </div>
  );
}
