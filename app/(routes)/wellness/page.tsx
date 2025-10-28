import type { Metadata } from 'next';
import Link from 'next/link';
import { getLocale } from 'next-intl/server';
import ImageGallery from '@/components/gallery/ImageGallery';
import { getDictionary } from '@/lib/i18n/get-dictionary';
import type { Locale } from '@/lib/i18n/config';

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as Locale;
  const dictionary = await getDictionary(locale);
  const meta = dictionary.wellness.metadata;

  return {
    title: meta.title,
    description: meta.description
  };
}

export default async function WellnessPage() {
  const locale = (await getLocale()) as Locale;
  const dictionary = await getDictionary(locale);
  const content = dictionary.wellness;

  return (
    <div className="mx-auto max-w-6xl space-y-16 px-4 py-16 text-slate-100 sm:px-6">
      <section className="space-y-6 rounded-3xl border border-white/10 bg-slate-950/70 p-8 text-center shadow-xl sm:p-12">
        <p className="text-xs uppercase tracking-[0.45em] text-brand-light sm:text-sm">{content.hero.eyebrow}</p>
        <h1 className="text-3xl font-semibold uppercase text-white sm:text-4xl">{content.hero.title}</h1>
        <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-200">{content.hero.description}</p>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {content.highlights.map((item) => (
          <article
            key={item.title}
            className="space-y-3 rounded-3xl border border-white/10 bg-slate-950/60 p-6 text-sm text-slate-200 shadow-xl"
          >
            <h2 className="text-lg font-semibold text-white">{item.title}</h2>
            <p className="leading-relaxed">{item.description}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">{content.ritualsTitle}</h2>
          <ul className="space-y-3 text-sm text-slate-200">
            {content.rituals.map((item) => (
              <li key={item.title} className="rounded-3xl border border-white/10 bg-slate-950/50 p-4">
                <p className="text-base font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-200">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">{content.amenitiesTitle}</h2>
          <ul className="space-y-3 text-sm text-slate-200">
            {content.amenities.map((item) => (
              <li key={item.title} className="rounded-3xl border border-white/10 bg-slate-950/50 p-4">
                <p className="text-base font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-200">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl border border-brand/30 bg-brand/10 p-8 text-center text-slate-100 shadow-xl sm:p-10">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-white">{content.cta.title}</h2>
          <p className="text-sm leading-relaxed text-slate-100/80">{content.cta.description}</p>
        </div>
        <div className="flex justify-center">
          <Link
            href="/rezervovat-pobyt"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-topbar shadow-soft transition hover:bg-brand-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            {content.cta.buttonLabel}
          </Link>
        </div>
      </section>

      <section className="space-y-6">
        <ImageGallery
          images={content.gallery}
          gridClassName="gap-6 sm:grid-cols-2 xl:grid-cols-3"
          thumbnailAspectClassName="aspect-[4/3]"
        />
      </section>
    </div>
  );
}
