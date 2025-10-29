import type { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import SectionHeading from '@/components/SectionHeading';
import { getDictionary } from '@/lib/i18n/get-dictionary';
import type { Locale } from '@/lib/i18n/config';

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as Locale;
  const dictionary = await getDictionary(locale);
  const meta = dictionary.hall.metadata;

  return {
    title: meta.title,
    description: meta.description
  };
}

export default async function SalPage() {
  const locale = (await getLocale()) as Locale;
  const dictionary = await getDictionary(locale);
  const content = dictionary.hall;

  return (
    <div className="mx-auto max-w-layout space-y-16 px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow={content.heading.eyebrow}
        title={content.heading.title}
        description={content.heading.description}
      />
      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6 text-sm text-slate-200">
          <p>{content.description}</p>
          <ul className="space-y-3">
            {content.features.map((feature) => (
              <li key={feature}>✔️ {feature}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 text-sm text-slate-200">
          <h2 className="text-lg font-semibold text-white">{content.concierge.title}</h2>
          <p className="mt-3">{content.concierge.description}</p>
        </div>
      </div>
    </div>
  );
}
