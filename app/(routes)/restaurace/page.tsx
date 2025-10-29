import type { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import SectionHeading from '@/components/SectionHeading';
import MenuItemCard from '@/components/MenuItemCard';
import HoursTable from '@/components/HoursTable';
import menuData from '@/data/menu';
import hoursData from '@/data/hours';
import { getDictionary } from '@/lib/i18n/get-dictionary';
import type { Locale } from '@/lib/i18n/config';

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as Locale;
  const dictionary = await getDictionary(locale);
  const meta = dictionary.restaurant.metadata;
  return {
    title: meta.title,
    description: meta.description
  };
}

export default async function RestauracePage() {
  const locale = (await getLocale()) as Locale;
  const dictionary = await getDictionary(locale);
  const menu = menuData[locale];
  const hours = hoursData[locale];
  const content = dictionary.restaurant;

  return (
    <div className="mx-auto max-w-layout space-y-16 px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow={content.heading.eyebrow}
        title={content.heading.title}
        description={content.heading.description}
      />
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-8">
          {menu.sections.map((section) => (
            <section key={section.title} className="space-y-4">
              <h2 className="text-xl font-semibold text-white">{section.title}</h2>
              <div className="space-y-3">
                {section.items.map((item) => (
                  <MenuItemCard key={item.title} {...item} />
                ))}
              </div>
            </section>
          ))}
        </div>
        <aside className="space-y-6">
          <HoursTable title={content.openingTitle} rows={hours.restaurant} />
          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 text-sm text-slate-200">
            <h3 className="text-lg font-semibold text-white">{content.tasting.title}</h3>
            <p className="mt-3">{content.tasting.description}</p>
          </div>
          <div className="rounded-3xl border border-brand/30 bg-brand/10 p-6 text-sm text-brand-light">
            <h3 className="text-lg font-semibold text-white">{content.reservation.title}</h3>
            <p className="mt-3 text-slate-100">{content.reservation.description}</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
