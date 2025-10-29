import Image from 'next/image';
import Link from 'next/link';
import { getLocale } from 'next-intl/server';
import SectionHeading from '@/components/SectionHeading';
import RoomCard from '@/components/RoomCard';
import Gallery from '@/components/Gallery';
import HoursTable from '@/components/HoursTable';
import ReservationForm from '@/components/ReservationForm';
import HeroBackgroundSlideshow from '@/components/HeroBackgroundSlideshow';
import { OnlineReservationForm } from '@/components/online-reservation-form';
import { Playfair_Display } from 'next/font/google';

import roomsData from '@/data/rooms';
import hoursData from '@/data/hours';
import heroBackgroundsData from '@/data/hero-backgrounds';

const heroDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap'
});

import { getDictionary } from '@/lib/i18n/get-dictionary';
import type { Locale } from '@/lib/i18n/config';

export const revalidate = 3600;

export default async function HomePage() {
  const locale = (await getLocale()) as Locale;
  const dictionary = await getDictionary(locale);

  const rooms = roomsData[locale];
  const hours = hoursData[locale];
  const heroBackgrounds = heroBackgroundsData[locale];

  const home = dictionary.home;

  return (
    <div className="space-y-24 pb-24">
      <section
        className="relative isolate overflow-hidden rounded-b-[56px] bg-topbar text-white"
        style={{ marginTop: 'calc(var(--header-offset, 6rem) * -1)' }}
      >
        <div className="relative aspect-[1920/1100] w-full min-h-[28rem] sm:min-h-[36rem] lg:min-h-[48rem]">
          <HeroBackgroundSlideshow images={heroBackgrounds} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-4 py-16 text-center sm:px-6 lg:py-24">
              <div className="flex w-full max-w-3xl flex-col gap-4 rounded-[32px] border border-white/10 bg-black/35 px-8 py-10 text-white shadow-[0_18px_45px_rgba(0,0,0,0.4)] backdrop-blur-sm">
                <h1 className={`${heroDisplay.className} text-shadow text-4xl font-semibold sm:text-6xl`}>{home.hero.title}</h1>
                <p className="text-shadow text-lg sm:text-2xl">{home.hero.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-8 sm:flex-row sm:justify-between sm:gap-12 sm:px-6">
          <div className="text-center sm:text-left">
            <p className="text-2xl font-semibold sm:text-3xl">{home.onlineReservation.eyebrow}</p>
            <p className="sr-only">{home.onlineReservation.title}</p>
            <p className="sr-only">{home.onlineReservation.description}</p>
          </div>
          <OnlineReservationForm />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 overflow-hidden rounded-3xl bg-canvas-200 p-8 shadow-soft lg:grid-cols-[1.1fr_1fr]">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-canvas-300">
            <Image
              src="/images/placeholders/room.svg"
              alt={home.destination.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-dark">{home.destination.eyebrow}</p>
            <h2 className="text-3xl font-semibold text-topbar sm:text-4xl">{home.destination.title}</h2>
            <p className="text-base text-topbar/80">{home.destination.description}</p>
            <ul className="space-y-4">
              {home.destination.features.map((feature) => (
                <li key={feature.title} className="flex gap-4">
                  <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand-dark">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-semibold text-topbar">{feature.title}</p>
                    <p className="text-sm text-topbar/70">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {home.destination.stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-canvas-300 px-4 py-3 text-center shadow-soft">
                  <p className="text-2xl font-semibold text-topbar">{stat.value}</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-topbar/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-3">
          {home.hotelHighlights.map((highlight) => (
            <article key={highlight.title} className="space-y-4 rounded-3xl bg-canvas-300 p-6 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-dark/90">{highlight.eyebrow}</p>
              <h3 className="text-xl font-semibold text-topbar">{highlight.title}</h3>
              <p className="text-sm text-topbar/70">{highlight.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6">
        <SectionHeading
          eyebrow={home.roomsSection.eyebrow}
          title={home.roomsSection.title}
          description={home.roomsSection.description}
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <RoomCard key={room.name} {...room} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 overflow-hidden rounded-3xl bg-canvas-200 p-8 shadow-soft lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-canvas-300">
            <Image
              src="/images/placeholders/restaurant.svg"
              alt={home.restaurantSection.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </div>
          <div className="flex flex-col gap-6">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-dark">{home.restaurantSection.eyebrow}</p>
              <h2 className="text-3xl font-semibold text-topbar sm:text-4xl">{home.restaurantSection.title}</h2>
              <p className="text-base text-topbar/80">{home.restaurantSection.description}</p>
            </div>
            <div className="rounded-3xl border border-white/50 bg-white/80 p-6 shadow-soft backdrop-blur-sm">
              <ul className="list-none divide-y divide-topbar/10 text-sm text-topbar">
                {home.restaurantSection.specials.map((item) => (
                  <li key={item} className="py-3 first:pt-0 last:pb-0">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/restaurace"
              className="inline-flex w-fit items-center justify-center rounded-full border border-topbar/20 px-5 py-2 text-sm font-semibold text-topbar transition hover:border-brand hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              {home.restaurantSection.cta}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6">
        <SectionHeading
          eyebrow={home.experienceSection.eyebrow}
          title={home.experienceSection.title}
          description={home.experienceSection.description}
        />
        <Gallery images={home.experienceSection.gallery} />
      </section>

      <section className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6">
        <div className="space-y-6 rounded-3xl bg-canvas-200 p-8 shadow-soft">
          <SectionHeading
            eyebrow={home.testimonials.eyebrow}
            title={home.testimonials.title}
            description={home.testimonials.description}
            align="center"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {home.testimonials.items.map((testimonial) => (
              <blockquote key={testimonial.name} className="flex h-full flex-col justify-between rounded-3xl bg-canvas-300 p-6 shadow-soft">
                <p className="text-base text-topbar/80">„{testimonial.quote}“</p>
                <footer className="mt-6">
                  <p className="font-semibold text-topbar">{testimonial.name}</p>
                  <p className="text-sm text-topbar/60">{testimonial.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl grid gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-6 rounded-3xl bg-canvas-200 p-8 shadow-soft">
          <SectionHeading
            eyebrow={home.wellness.eyebrow}
            title={home.wellness.title}
            description={home.wellness.description}
          />
          <ul className="space-y-4">
            {home.wellness.highlights.map((item) => (
              <li key={item.title} className="rounded-3xl bg-canvas-300 p-5 shadow-soft">
                <p className="font-semibold text-topbar">{item.title}</p>
                <p className="text-sm text-topbar/70">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative overflow-hidden rounded-3xl bg-canvas-300 shadow-soft">
          <Image
            src="/images/placeholders/hall.svg"
            alt={home.wellness.imageAlt}
            width={900}
            height={700}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl grid gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-6 rounded-3xl bg-canvas-200 p-8 shadow-soft">
          <SectionHeading
            eyebrow={home.location.eyebrow}
            title={home.location.title}
            description={home.location.description}
          />
          <p className="text-sm text-topbar/80">{home.location.note}</p>
          <dl className="grid gap-4 text-sm text-topbar/80 sm:grid-cols-2">
            {home.location.highlights.map((item) => (
              <div key={item.label} className="rounded-3xl bg-canvas-300 p-5 shadow-soft">
                <dt className="text-xs font-semibold uppercase tracking-[0.25em] text-topbar/60">{item.label}</dt>
                <dd className="mt-1 text-lg font-semibold text-topbar">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="overflow-hidden rounded-3xl bg-canvas-300 shadow-soft">
          <Image
            src="/images/placeholders/contact.svg"
            alt={home.location.mapAlt}
            width={1000}
            height={700}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-10 px-4 sm:px-6" id="rezervace">
        <SectionHeading
          eyebrow={home.reservation.eyebrow}
          title={home.reservation.title}
          description={home.reservation.description}
          align="center"
        />
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <ReservationForm />
          <div className="space-y-6">
            <HoursTable title={home.reservation.hotelHoursTitle} rows={hours.hotel} />
            <HoursTable title={home.reservation.restaurantHoursTitle} rows={hours.restaurant} />
            <HoursTable title={home.reservation.bowlingHoursTitle} rows={hours.bowling} />
          </div>
        </div>
      </section>
    </div>
  );
}
