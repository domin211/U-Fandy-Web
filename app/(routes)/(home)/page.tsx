import Image from 'next/image';
import SectionHeading from '@/components/SectionHeading';
import RoomCard from '@/components/RoomCard';
import MenuItemCard from '@/components/MenuItemCard';
import Gallery, { type GalleryImage } from '@/components/Gallery';
import HoursTable from '@/components/HoursTable';
import ReservationForm from '@/components/ReservationForm';
import rooms from '@/data/rooms.json';
import menu from '@/data/menu.json';
import hours from '@/data/hours.json';

export const revalidate = 3600;

const galleryImages: GalleryImage[] = [
  { src: '/images/placeholders/hero.svg', alt: 'Hotel U Fandy exteriér', width: 1200, height: 800 },
  { src: '/images/placeholders/restaurant.svg', alt: 'Restaurace U Fandy', width: 1200, height: 800 },
  { src: '/images/placeholders/bowling.svg', alt: 'Bowlingové dráhy', width: 1200, height: 800 },
  { src: '/images/placeholders/hall.svg', alt: 'Společenský sál', width: 1200, height: 800 }
];

const BLUR_DATA_URL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAuMBg5fnmWcAAAAASUVORK5CYII=';

export default function HomePage() {
  return (
    <div className="space-y-24 pb-24">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/placeholders/hero.svg"
            alt="Hotel U Fandy v ranním světle"
            fill
            className="object-cover"
            sizes="100vw"
            priority
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
          />
          <div className="absolute inset-0 bg-slate-950/70" />
        </div>
        <div className="relative mx-auto flex max-w-5xl flex-col gap-10 px-4 py-24 sm:px-6 lg:py-32">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-light">Vítejte u Fandy</p>
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">
              Moderní útočiště v Malé Moravě pro gurmány, cestovatele i sportovce
            </h1>
            <p className="text-base text-slate-200 sm:text-lg">
              Spojujeme hotelové pohodlí, autorskou kuchyni a špičkové sportovní vyžití. Užijte si horský vzduch bez kompromisů
              v kvalitě služeb.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#rezervace"
              className="inline-flex w-full items-center justify-center rounded-full bg-brand px-8 py-3 text-sm font-semibold text-slate-950 shadow-soft transition hover:bg-brand-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:w-auto"
            >
              Rezervovat pobyt
            </a>
            <a
              href="/restaurace"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white transition hover:border-brand hover:text-brand-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:w-auto"
            >
              Prozkoumat restauraci
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6">
        <SectionHeading
          eyebrow="Ubytování"
          title="Designové pokoje, které voní dřevem a horským vzduchem"
          description="Každý pokoj je originál inspirovaný okolní přírodou. Všechny disponují nadstandardními matracemi, blackout závěsy a rychlou Wi-Fi."
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <RoomCard key={room.name} {...room} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6">
        <SectionHeading
          eyebrow="Restaurace"
          title="Sezonní menu z lokálních surovin"
          description="Šéfkuchař propojuje tradiční recepty s moderní gastronomií. Denně čerstvé pečivo z vlastní pekárny a široká nabídka moravských vín."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {menu.sections.map((section) => (
            <div key={section.title} className="space-y-5">
              <h3 className="text-lg font-semibold text-white">{section.title}</h3>
              <div className="space-y-4">
                {section.items.map((item) => (
                  <MenuItemCard key={item.title} {...item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6">
        <SectionHeading
          eyebrow="Zážitek"
          title="Bowling, sauna, bike půjčovna a večerní bar"
          description="Zrelaxujte po výletu v privátním wellness nebo si užijte večerní turnaj na profesionálních drahách."
        />
        <Gallery images={galleryImages} />
      </section>

      <section className="mx-auto max-w-6xl space-y-10 px-4 sm:px-6" id="rezervace">
        <SectionHeading
          eyebrow="Rezervace"
          title="Napište nám a připravíme nabídku na míru"
          description="Ozveme se do 24 hodin. Pro skupiny zajistíme catering, techniku i doplňkové aktivity."
          align="center"
        />
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <ReservationForm />
          <div className="space-y-6">
            <HoursTable title="Hotel" rows={hours.hotel} />
            <HoursTable title="Restaurace" rows={hours.restaurant} />
            <HoursTable title="Bowling" rows={hours.bowling} />
          </div>
        </div>
      </section>
    </div>
  );
}
