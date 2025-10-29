import type { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import SectionHeading from '@/components/SectionHeading';
import RoomCard from '@/components/RoomCard';
import HoursTable from '@/components/HoursTable';
import roomsData from '@/data/rooms';
import hoursData from '@/data/hours';
import { getDictionary } from '@/lib/i18n/get-dictionary';
import type { Locale } from '@/lib/i18n/config';

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as Locale;
  const dictionary = await getDictionary(locale);
  const meta = dictionary.accommodation.metadata;

  return {
    title: meta.title,
    description: meta.description
  };
}

export default async function UbytovaniPage() {
  const locale = (await getLocale()) as Locale;
  const dictionary = await getDictionary(locale);
  const rooms = roomsData[locale];
  const hours = hoursData[locale];
  const content = dictionary.accommodation;
  const roomCards = rooms.map((room) => ({
    title: room.name,
    priceFrom: room.price,
    imageSrc: room.image,
    href: '/rezervovat-pobyt'
  }));

  return (
    <div className="mx-auto max-w-6xl space-y-16 px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow={content.heading.eyebrow}
        title={content.heading.title}
        description={content.heading.description}
      />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {roomCards.map((room) => (
          <RoomCard key={room.title} {...room} />
        ))}
      </div>
      <section className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">{content.servicesTitle}</h2>
          <ul className="space-y-3 text-sm text-slate-200">
            {content.services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>
        <div className="space-y-6">
          <HoursTable title={content.receptionHoursTitle} rows={hours.hotel} />
          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 text-sm text-slate-200">
            <h3 className="text-lg font-semibold text-white">{content.checkin.title}</h3>
            <p className="mt-3">{content.checkin.description}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
