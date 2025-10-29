import Image from 'next/image';
import Link from 'next/link';
import { getLocale } from 'next-intl/server';
import SectionHeading from '@/components/SectionHeading';
import RoomCard from '@/components/RoomCard';
import MenuItemCard from '@/components/MenuItemCard';
import Footer from '@/components/Footer';
import HeroSlider from '@/components/HeroBackgroundSlideshow';
import { Playfair_Display } from 'next/font/google';

import roomsData from '@/data/rooms';
import menuData from '@/data/menu';
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
  const menu = menuData[locale];
  const heroBackgrounds = heroBackgroundsData[locale];

  const home = dictionary.home;

  return (
    <div className="space-y-24 pb-24">
      <section
        className="relative isolate overflow-hidden rounded-b-[56px] bg-topbar text-white"
        style={{ marginTop: 'calc(var(--header-offset, 6rem) * -1)' }}
      >
        <div className="relative aspect-[1920/1100] w-full min-h-[28rem] sm:min-h-[36rem] lg:min-h-[48rem]">
          <HeroSlider images={heroBackgrounds} />
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
            <RoomCard key={room.name} {...room} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6">
        <div className="grid gap-10 overflow-hidden rounded-3xl bg-canvas-200 p-8 shadow-soft lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-dark">{home.restaurantSection.eyebrow}</p>
            <h2 className="text-3xl font-semibold text-topbar sm:text-4xl">{home.restaurantSection.title}</h2>
            <p className="text-base text-topbar/80">{home.restaurantSection.description}</p>
            <ul className="space-y-3 text-sm text-topbar/80">
              {home.restaurantSection.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/restaurace"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-topbar shadow-soft transition hover:bg-brand-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              {home.restaurantSection.cta}
            </Link>
          </div>
          <div className="space-y-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-canvas-300">
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

      <Footer />
    </div>
  );
}
