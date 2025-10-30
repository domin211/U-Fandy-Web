import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import { getLocale } from 'next-intl/server';
import HeroBackgroundSlideshow from '@/components/HeroBackgroundSlideshow';
import RoomCard from '@/components/RoomCard';
import MenuItemCard from '@/components/MenuItemCard';
import SectionHeading from '@/components/SectionHeading';
import { OnlineReservationForm } from '@/components/online-reservation-form';

import roomsData from '@/data/rooms';
import menuData from '@/data/menu';
import heroBackgroundsData from '@/data/hero-backgrounds';

import { getDictionary } from '@/lib/i18n/get-dictionary';
import type { Locale } from '@/lib/i18n/config';

function OnlineReservationFormFallback({ message }: { message: string }) {
  return (
    <div
      className="flex w-full flex-col gap-3"
      role="status"
      aria-live="polite"
    >
      <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center">
        <div className="hidden h-[4.25rem] flex-1 rounded-md bg-white/40 sm:block" />
        <div className="h-[4.25rem] w-full rounded-md bg-white/40 sm:w-44" />
      </div>
      <p className="text-sm font-medium text-white/80">{message}</p>
    </div>
  );
}

export const revalidate = 3600;

export default async function HomePage() {
  const locale = (await getLocale()) as Locale;
  const dictionary = await getDictionary(locale);

  const rooms = roomsData[locale] ?? roomsData.cs;
  const menu = menuData[locale] ?? menuData.cs;
  const heroBackgrounds = heroBackgroundsData[locale] ?? heroBackgroundsData.cs;

  const home = dictionary.home;

  return (
    <div className="space-y-24 pb-24">
      <section
        className="relative isolate overflow-hidden rounded-none bg-topbar text-white"
        style={{ marginTop: 'calc(var(--header-offset, 6rem) * -1)' }}
      >
        <div className="relative aspect-[1920/1100] w-full min-h-[28rem] sm:min-h-[36rem] lg:min-h-[48rem]">
          <HeroBackgroundSlideshow images={heroBackgrounds} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-4 py-16 text-center sm:px-6 lg:py-24">
              <div className="flex w-full max-w-readable flex-col gap-4 rounded-none border border-white/10 bg-black/35 px-8 py-10 text-white shadow-[0_18px_45px_rgba(0,0,0,0.4)] backdrop-blur-sm">
                <h1 className="font-display text-shadow text-4xl font-semibold sm:text-6xl">{home.hero.title}</h1>
                <p className="text-shadow text-lg sm:text-2xl">{home.hero.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6">
        <div className="prose prose-neutral mx-auto max-w-3xl text-center">
          {home.intro.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="bg-[#f04d52] text-white">
        <div className="mx-auto flex max-w-layout flex-col items-center gap-6 px-4 py-8 sm:flex-row sm:justify-between sm:gap-10 sm:px-6">
          <div className="text-center sm:text-left">
            <p className="font-display text-2xl font-semibold italic sm:text-3xl">
              {home.onlineReservation.eyebrow}
            </p>
            <p className="sr-only">{home.onlineReservation.title}</p>
            <p className="sr-only">{home.onlineReservation.description}</p>
          </div>
          <Suspense
            fallback={
              <OnlineReservationFormFallback message={home.onlineReservation.loadingMessage} />
            }
          >
            <OnlineReservationForm />
          </Suspense>
        </div>
      </section>

      <section className="mx-auto max-w-layout px-4 sm:px-6">
        <div className="grid gap-8 overflow-hidden rounded-none bg-canvas-200 p-8 shadow-soft lg:grid-cols-[1.1fr_1fr]">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-none bg-canvas-300">
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
            <ul className="space-y-4 text-sm text-topbar/80">
              {home.destination.features.map((feature) => (
                <li key={feature.title}>
                  <p className="font-semibold text-topbar">{feature.title}</p>
                  <p className="text-topbar/70">{feature.description}</p>
                </li>
              ))}
            </ul>
          </div>
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
            <RoomCard key={room.title} {...room} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 overflow-hidden rounded-none bg-canvas-200 p-8 shadow-soft lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-none bg-canvas-300">
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
            <div className="rounded-none border border-white/50 bg-white/80 p-6 shadow-soft backdrop-blur-sm">
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
              className="inline-flex w-fit items-center justify-center rounded-none border border-topbar/20 px-5 py-2 text-sm font-semibold text-topbar transition hover:border-brand hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              {home.restaurantSection.cta}
            </Link>
          </div>
          <div className="space-y-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-none bg-canvas-300">
              <Image
                src="/images/placeholders/restaurant.svg"
                alt={home.restaurantSection.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-5">
              {menu.sections.slice(0, 2).map((section) => (
                <div key={section.title} className="space-y-4">
                  <h3 className="text-lg font-semibold text-topbar">{section.title}</h3>
                  <div className="space-y-4">
                    {section.items.map((item) => (
                      <MenuItemCard key={item.title} {...item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6">
        <div className="space-y-6 rounded-none bg-canvas-200 p-8 shadow-soft">
          <SectionHeading
            eyebrow={home.testimonials.eyebrow}
            title={home.testimonials.title}
            description={home.testimonials.description}
            align="center"
          />
          <div className="grid gap-8 md:grid-cols-2">
            {home.testimonials.items.slice(0, 3).map((testimonial) => (
              <blockquote
                key={testimonial.name}
                className="flex h-full flex-col justify-between gap-6 rounded-none bg-canvas-300 p-8 shadow-soft"
              >
                <p className="text-lg leading-relaxed text-topbar/80">„{testimonial.quote}“</p>
                <footer className="text-sm font-semibold uppercase tracking-[0.2em] text-topbar/60">
                  {testimonial.name} · {testimonial.role}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
