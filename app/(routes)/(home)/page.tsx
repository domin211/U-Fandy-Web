import Image from 'next/image';
import { getLocale } from 'next-intl/server';
import HeroSlider, { type HeroSlide } from '@/components/HeroSlider';
import RoomCard from '@/components/RoomCard';
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
      <HeroSlider
        headline={home.hero.title}
        subtitle={home.hero.subtitle}
        slides={heroSlides.slice(0, 4)}
        primaryCta={{ label: ctas.primary, href: '/rezervovat-pobyt' }}
        secondaryCta={{ label: ctas.secondary, href: '/ubytovani' }}
      />

      <section className="px-4">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          {introParagraphs.map((paragraph, index) => (
            <p key={index} className="text-base text-topbar/80 sm:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="bg-canvas-200 px-4 py-20">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="space-y-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-dark">{home.roomsSection.eyebrow}</p>
            <h2 className="text-3xl font-semibold text-topbar sm:text-4xl">{home.roomsSection.title}</h2>
            <p className="mx-auto max-w-2xl text-sm text-topbar/70 sm:text-base">{home.roomsSection.description}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {rooms.map((room) => (
              <RoomCard key={room.title} {...room} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4">
        <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-dark">{home.restaurantSection.eyebrow}</p>
            <h2 className="text-3xl font-semibold text-topbar sm:text-4xl">{home.restaurantSection.title}</h2>
            <p className="text-base text-topbar/80">{home.restaurantSection.description}</p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {home.restaurantSection.highlights.slice(0, 4).map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-full border border-brand/10 px-4 py-3 text-sm text-topbar/80"
                >
                  <span className="inline-flex h-2 w-2 rounded-full bg-brand" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
            <Image
              src="/images/hero/pizza.webp"
              alt={home.restaurantSection.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-topbar px-4 py-20 text-white">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="space-y-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">{home.testimonials.eyebrow}</p>
            <h2 className="text-3xl font-semibold uppercase tracking-[0.18em]">{home.testimonials.title}</h2>
            <p className="mx-auto max-w-2xl text-sm text-white/70 sm:text-base">{home.testimonials.description}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {home.testimonials.items.slice(0, 3).map((testimonial) => (
              <blockquote
                key={testimonial.name}
                className="flex h-full flex-col justify-between rounded-3xl bg-white/5 p-8 text-left backdrop-blur-sm"
              >
                <p className="text-base text-white/80">„{testimonial.quote}“</p>
                <footer className="mt-6 space-y-1">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">{testimonial.name}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/60">{testimonial.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
