import type { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import SectionHeading from '@/components/SectionHeading';
import HoursTable from '@/components/HoursTable';
import hoursData from '@/data/hours';
import { getDictionary } from '@/lib/i18n/get-dictionary';
import type { Locale } from '@/lib/i18n/config';

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as Locale;
  const dictionary = await getDictionary(locale);
  const meta = dictionary.contact.metadata;
  return {
    title: meta.title,
    description: meta.description
  };
}

export default async function KontaktPage() {
  const locale = (await getLocale()) as Locale;
  const dictionary = await getDictionary(locale);
  const hours = hoursData[locale];
  const content = dictionary.contact;

  return (
    <div className="mx-auto max-w-5xl space-y-16 px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow={content.heading.eyebrow}
        title={content.heading.title}
        description={content.heading.description}
      />
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6 text-sm text-slate-200">
          <ul className="space-y-4">
            {content.contacts.map((contact) => {
              const hasHref = 'href' in contact && typeof contact.href === 'string';

              return (
                <li key={contact.label} className="rounded-3xl border border-white/10 bg-slate-950/60 p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{contact.label}</p>
                  {hasHref ? (
                    <a href={contact.href} className="mt-2 block text-lg font-semibold text-white">
                      {contact.value}
                    </a>
                  ) : (
                    <p className="mt-2 text-lg font-semibold text-white">{contact.value}</p>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 text-sm text-slate-200">
            <h2 className="text-lg font-semibold text-white">{content.billing.title}</h2>
            {content.billing.description.split('\n').map((line) => (
              <p key={line} className="mt-3">
                {line}
              </p>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <HoursTable title={content.receptionHoursTitle} rows={hours.hotel} />
          <HoursTable title={content.restaurantHoursTitle} rows={hours.restaurant} />
        </div>
      </div>
    </div>
  );
}
