interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <header className={`mx-auto max-w-3xl space-y-3 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-light/80">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      {description ? <p className="text-base text-slate-300">{description}</p> : null}
    </header>
  );
}
