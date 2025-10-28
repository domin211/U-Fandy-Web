import type { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import { getDictionary } from '@/lib/i18n/get-dictionary';
import type { Locale } from '@/lib/i18n/config';

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as Locale;
  const dictionary = await getDictionary(locale);
  const meta = dictionary.privacy.metadata;

  return {
    title: meta.title,
    description: meta.description
  };
}

export default async function PrivacyPage() {
  const locale = (await getLocale()) as Locale;
  const dictionary = await getDictionary(locale);
  const content = dictionary.privacy;

  return (
    <div className="mx-auto max-w-4xl space-y-12 px-4 py-16 sm:px-6">
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold text-white">{content.title}</h1>
        <p className="text-sm text-slate-300">{content.intro}</p>
      </header>
      <div className="space-y-6 text-sm text-slate-200">
        {content.sections.map((section) => (
          <section key={section.title} className="space-y-2">
            <h2 className="text-lg font-semibold text-white">{section.title}</h2>
            <p>{section.content}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
