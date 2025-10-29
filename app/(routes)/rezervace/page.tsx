import type { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import SectionHeading from '@/components/SectionHeading';
import ReservationForm from '@/components/ReservationForm';
import { getDictionary } from '@/lib/i18n/get-dictionary';
import type { Locale } from '@/lib/i18n/config';

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as Locale;
  const dictionary = await getDictionary(locale);
  const meta = dictionary.reservationPage.metadata;

  return {
    title: meta.title,
    description: meta.description
  };
}

const toHeadingAlign = (
  a: 'start' | 'center' | 'end' | undefined
): 'left' | 'center' | 'right' | undefined => {
  if (a === 'start') return 'left';
  if (a === 'end') return 'right';
  return a;
};

export default async function RezervacePage() {
  const locale = (await getLocale()) as Locale;
  const dictionary = await getDictionary(locale);
  const content = dictionary.reservationPage;

  return (
    <div className="mx-auto max-w-layout space-y-12 px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow={content.heading.eyebrow}
        title={content.heading.title}
        description={content.heading.description}
        align={toHeadingAlign(content.heading.align)}
      />
      <ReservationForm />
    </div>
  );
}
