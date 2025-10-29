import type { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import ImageGallery from '@/components/gallery/ImageGallery';
import { getDictionary } from '@/lib/i18n/get-dictionary';
import type { Locale } from '@/lib/i18n/config';

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as Locale;
  const dictionary = await getDictionary(locale);
  const meta = dictionary.bowling.metadata;
  return {
    title: meta.title,
    description: meta.description
  };
}

export default async function BowlingPage() {
  const locale = (await getLocale()) as Locale;
  const dictionary = await getDictionary(locale);
  const content = dictionary.bowling;

  return (
    <div className="mx-auto max-w-layout space-y-16 px-4 py-16 text-slate-100 sm:px-6">
      <section className="space-y-6 rounded-3xl border border-white/10 bg-slate-950/70 p-8 text-center shadow-xl sm:p-12">
        <p className="text-xs uppercase tracking-[0.45em] text-brand-light sm:text-sm">{content.hero.eyebrow}</p>
        <h1 className="text-3xl font-semibold uppercase text-white sm:text-4xl">{content.hero.title}</h1>
        <p className="mx-auto max-w-readable text-base leading-relaxed text-slate-200">{content.hero.description}</p>
      </section>

      <section className="space-y-4">
        <ImageGallery
          images={content.gallery}
          gridClassName="gap-6 sm:grid-cols-2 lg:grid-cols-4"
          thumbnailButtonClassName="rounded-none border-none bg-transparent p-0 shadow-none focus:ring-brand/40"
          thumbnailImageClassName="rounded-none"
        />
      </section>
    </div>
  );
}
