type Align = 'left' | 'center' | 'right';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: Align;
}

const alignClass: Record<Align, string> = {
  left: 'text-left items-start',
  center: 'text-center items-center',
  right: 'text-right items-end'
};

export default function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  const resolvedAlign: Align = align;

  return (
    <header className={`mx-auto flex max-w-readable flex-col space-y-3 ${alignClass[resolvedAlign]}`}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-dark">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-semibold text-topbar sm:text-4xl">{title}</h2>
      {description ? <p className="text-base text-topbar/80">{description}</p> : null}
    </header>
  );
}
