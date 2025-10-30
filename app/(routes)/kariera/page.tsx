import type { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import SectionHeading from '@/components/SectionHeading';
import { getDictionary } from '@/lib/i18n/get-dictionary';
import type { Locale } from '@/lib/i18n/config';

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as Locale;
  const dictionary = await getDictionary(locale);
  const meta = dictionary.career.metadata;
  return {
    title: meta.title,
    description: meta.description
  };
}

export default async function KarieraPage() {
  const locale = (await getLocale()) as Locale;
  const dictionary = await getDictionary(locale);
  const content = dictionary.career;

  return (
    <div className="mx-auto max-w-layout space-y-16 px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow={content.heading.eyebrow}
        title={content.heading.title}
        description={content.heading.description}
      />
      <div className="space-y-6">
        {content.positions.map((position) => (
          <article
            key={position.title}
            className="rounded-none border border-white/10 bg-slate-950/60 p-6 text-sm text-slate-200 shadow-soft"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-xl font-semibold text-white">{position.title}</h2>
              <span className="rounded-none bg-brand/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-light">
                {position.type}
              </span>
            </div>
            <p className="mt-4">{position.description}</p>
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-slate-400">
              {content.contactCta}
            </p>
          </article>
        ))}
      </div>
      <div className="rounded-none border border-brand/30 bg-brand/10 p-6 text-sm text-brand-light">
        <h2 className="text-lg font-semibold text-white">{content.openCall.title}</h2>
        <p className="mt-3 text-slate-100">{content.openCall.description}</p>
      </div>
    </div>
  );
}
