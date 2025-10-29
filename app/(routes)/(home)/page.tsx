import Image from 'next/image';
import { getLocale } from 'next-intl/server';
import HeroSlider, { type HeroSlide } from '@/components/HeroSlider';
import RoomCard from '@/components/RoomCard';
import MenuItemCard from '@/components/MenuItemCard';
import Footer from '@/components/Footer';
import HeroSlider from '@/components/HeroBackgroundSlideshow';
import { Playfair_Display } from 'next/font/google';
import { OnlineReservationForm } from '@/components/online-reservation-form';

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

const roomTeasers: Record<Locale, { title: string; priceFrom: string; imageSrc: string; href: string }[]> = {
  cs: [
    { title: 'Dvoulůžkový pokoj', priceFrom: 'od 2 490 Kč / noc', imageSrc: '/images/placeholders/room.svg', href: '/ubytovani' },
    { title: 'Třílůžkový pokoj', priceFrom: 'od 2 890 Kč / noc', imageSrc: '/images/placeholders/hall.svg', href: '/ubytovani' },
    { title: 'Pokoj Deluxe', priceFrom: 'od 3 490 Kč / noc', imageSrc: '/images/placeholders/hero.svg', href: '/ubytovani' }
  ],
  en: [
    { title: 'Double Room', priceFrom: 'from 2 490 CZK / night', imageSrc: '/images/placeholders/room.svg', href: '/ubytovani' },
    { title: 'Triple Room', priceFrom: 'from 2 890 CZK / night', imageSrc: '/images/placeholders/hall.svg', href: '/ubytovani' },
    { title: 'Deluxe Room', priceFrom: 'from 3 490 CZK / night', imageSrc: '/images/placeholders/hero.svg', href: '/ubytovani' }
  ],
  pl: [
    { title: 'Pokój dwuosobowy', priceFrom: 'od 2 490 CZK / noc', imageSrc: '/images/placeholders/room.svg', href: '/ubytovani' },
    { title: 'Pokój trzyosobowy', priceFrom: 'od 2 890 CZK / noc', imageSrc: '/images/placeholders/hall.svg', href: '/ubytovani' },
    { title: 'Pokój Deluxe', priceFrom: 'od 3 490 CZK / noc', imageSrc: '/images/placeholders/hero.svg', href: '/ubytovani' }
  ],
  de: [
    { title: 'Doppelzimmer', priceFrom: 'ab 2 490 CZK / Nacht', imageSrc: '/images/placeholders/room.svg', href: '/ubytovani' },
    { title: 'Dreibettzimmer', priceFrom: 'ab 2 890 CZK / Nacht', imageSrc: '/images/placeholders/hall.svg', href: '/ubytovani' },
    { title: 'Deluxe Zimmer', priceFrom: 'ab 3 490 CZK / Nacht', imageSrc: '/images/placeholders/hero.svg', href: '/ubytovani' }
  ],
  sk: [
    { title: 'Dvojlôžková izba', priceFrom: 'od 2 490 CZK / noc', imageSrc: '/images/placeholders/room.svg', href: '/ubytovani' },
    { title: 'Trojlôžková izba', priceFrom: 'od 2 890 CZK / noc', imageSrc: '/images/placeholders/hall.svg', href: '/ubytovani' },
    { title: 'Izba Deluxe', priceFrom: 'od 3 490 CZK / noc', imageSrc: '/images/placeholders/hero.svg', href: '/ubytovani' }
  ]
};

const heroCtas: Record<Locale, { primary: string; secondary: string }> = {
  cs: { primary: 'Online rezervace', secondary: 'Volné pokoje' },
  en: { primary: 'Online reservation', secondary: 'Available rooms' },
  pl: { primary: 'Rezerwacja online', secondary: 'Wolne pokoje' },
  de: { primary: 'Online-Reservierung', secondary: 'Freie Zimmer' },
  sk: { primary: 'Online rezervácia', secondary: 'Voľné izby' }
};

export const revalidate = 3600;

export default async function HomePage() {
  const locale = (await getLocale()) as Locale;
  const dictionary = await getDictionary(locale);

  const rooms = roomsData[locale];
  const menu = menuData[locale];
  const heroBackgrounds = heroBackgroundsData[locale];

  const home = dictionary.home;
  const ctas = heroCtas[locale] ?? heroCtas.cs;

  const heroSlides: HeroSlide[] = [
    {
      imageSrc: '/images/hero/bazen.webp',
      imageAlt: 'Bazén hotelu U Fandy po západu slunce',
      caption: home.hotelHighlights[0]?.title ?? home.hero.subtitle
    },
    {
      imageSrc: '/images/hero/pizza.webp',
      imageAlt: 'Restaurace U Fandy s čerstvě upečenou pizzou',
      caption: home.restaurantSection.title
    },
    {
      imageSrc: '/images/bowling/bowling3.webp',
      imageAlt: 'Bowlingové dráhy U Fandy připravené na večerní program',
      caption: home.testimonials.title
    },
    {
      imageSrc: '/images/bowling/bowling2.webp',
      imageAlt: 'Atmosféra bowling baru U Fandy',
      caption: home.wellness.title
    }
  ];

  const introParagraphs = (() => {
    const sentences = home.destination.description.split('. ').filter(Boolean);
    if (sentences.length <= 2) {
      return [home.destination.description, home.restaurantSection.description];
    }

    const firstParagraph = sentences.slice(0, 2).join('. ').trim();
    const secondParagraph = sentences.slice(2).join('. ').trim();

    return [
      firstParagraph.endsWith('.') ? firstParagraph : `${firstParagraph}.`,
      secondParagraph.endsWith('.') ? secondParagraph : `${secondParagraph}.`
    ];
  })();

  const rooms = roomTeasers[locale] ?? roomTeasers.cs;

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
              <div className="flex w-full max-w-readable flex-col gap-4 rounded-[32px] border border-white/10 bg-black/35 px-8 py-10 text-white shadow-[0_18px_45px_rgba(0,0,0,0.4)] backdrop-blur-sm">
                <h1 className={`${heroDisplay.className} text-shadow text-4xl font-semibold sm:text-6xl`}>{home.hero.title}</h1>
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

      <section className="bg-brand text-white">
        <div className="mx-auto flex max-w-layout flex-col items-center gap-6 px-4 py-8 sm:flex-row sm:justify-between sm:gap-12 sm:px-6">
          <div className="text-center sm:text-left">
            <p className="text-2xl font-semibold sm:text-3xl">{home.onlineReservation.eyebrow}</p>
            <p className="sr-only">{home.onlineReservation.title}</p>
            <p className="sr-only">{home.onlineReservation.description}</p>
          </div>
          <OnlineReservationForm />
        </div>
      </section>

      <section className="mx-auto max-w-layout px-4 sm:px-6">
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
            <RoomCard key={room.title} {...room} />
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
          <div className="grid gap-8 md:grid-cols-2">
            {home.testimonials.items.slice(0, 3).map((testimonial) => (
              <blockquote
                key={testimonial.name}
                className="flex h-full flex-col justify-between gap-6 rounded-3xl bg-canvas-300 p-8 shadow-soft"
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

      <Footer />
    </div>
  );
}
