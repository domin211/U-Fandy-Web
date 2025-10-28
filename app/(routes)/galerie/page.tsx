import type { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import ImageGallery from '@/components/gallery/ImageGallery';
import { getDictionary } from '@/lib/i18n/get-dictionary';
import type { Locale } from '@/lib/i18n/config';

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as Locale;
  const dictionary = await getDictionary(locale);
  const meta = dictionary.gallery.metadata;

  return {
    title: meta.title,
    description: meta.description
  };
}

export default async function GaleriePage() {
  const locale = (await getLocale()) as Locale;
  const dictionary = await getDictionary(locale);
  const content = dictionary.gallery;

  return (
    <div className="mx-auto max-w-6xl space-y-16 px-4 py-16 text-slate-100 sm:px-6">
      <section className="space-y-6 rounded-3xl border border-white/10 bg-slate-950/70 p-8 text-center shadow-xl sm:p-12">
        <p className="text-xs uppercase tracking-[0.45em] text-brand-light sm:text-sm">{content.heading.eyebrow}</p>
        <h1 className="text-3xl font-semibold uppercase text-white sm:text-4xl">{content.heading.title}</h1>
        <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-200">{content.heading.description}</p>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        {content.info.map((item) => (
          <article
            key={item.title}
            className="space-y-3 rounded-3xl border border-white/10 bg-slate-950/60 p-6 text-sm text-slate-200 shadow-xl"
          >
            <h2 className="text-lg font-semibold text-white">{item.title}</h2>
            <p className="leading-relaxed">{item.description}</p>
          </article>
        ))}
      </section>

      <section className="space-y-6">
        <ImageGallery images={content.images} gridClassName="gap-6 sm:grid-cols-2 xl:grid-cols-4" />
      </section>
    </div>
  );
}
