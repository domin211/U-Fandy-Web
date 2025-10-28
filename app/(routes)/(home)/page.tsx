import Image from 'next/image';
import SectionHeading from '@/components/SectionHeading';
import RoomCard from '@/components/RoomCard';
import MenuItemCard from '@/components/MenuItemCard';
import Gallery, { type GalleryImage } from '@/components/Gallery';
import HoursTable from '@/components/HoursTable';
import ReservationForm from '@/components/ReservationForm';
import HeroBackgroundSlideshow, { type HeroBackgroundImage } from '@/components/HeroBackgroundSlideshow';
import { OnlineReservationForm } from '@/components/online-reservation-form';
import rooms from '@/data/rooms.json';
import menu from '@/data/menu.json';
import hours from '@/data/hours.json';
import heroBackgrounds from '@/data/hero-backgrounds.json';

export const revalidate = 3600;

const galleryImages: GalleryImage[] = [
  { src: '/images/placeholders/hero.svg', alt: 'Hotel U Fandy exteriér', width: 1200, height: 800 },
  { src: '/images/placeholders/restaurant.svg', alt: 'Restaurace U Fandy', width: 1200, height: 800 },
  { src: '/images/placeholders/bowling.svg', alt: 'Bowlingové dráhy', width: 1200, height: 800 },
  { src: '/images/placeholders/hall.svg', alt: 'Společenský sál', width: 1200, height: 800 }
];

const heroBackgroundImages = heroBackgrounds as HeroBackgroundImage[];

const welcomeFeatures = [
  {
    title: 'Architektura inspirovaná horami',
    description: 'Masivní dřevo, přírodní textilie a panoramatická okna vytvářejí atmosféru, která vás přenese do srdce Jeseníků.'
  },
  {
    title: '38 stylových pokojů a apartmánů',
    description: 'Od útulných dvoulůžkových pokojů až po rodinné apartmány s terasou. Všechny s chytrým ovládáním a klimatizací.'
  },
  {
    title: 'Zázemí pro aktivní i klidný odpočinek',
    description: 'Bowling, wellness, půjčovna elektrokol i tematické večery v baru pod vedením zkušeného týmu.'
  }
];

const locationStats = [
  { value: '38', label: 'POKOJŮ' },
  { value: '120', label: 'MÍST V RESTAURACI' },
  { value: '4', label: 'BOWLING DRÁHY' },
  { value: '2 km', label: 'NA SJEZDOVKY' }
];

const hotelHighlights = [
  {
    eyebrow: 'Hotel',
    title: 'Komfort v objetí hor',
    description: 'Nadstandardní matrace, blackout závěsy, aromaterapie a služba concierge pro dokonalý klid.'
  },
  {
    eyebrow: 'Gastronomie',
    title: 'Autorská kuchyně šéfkuchaře',
    description: 'Sezonní menu z lokálních surovin, domácí pečivo a vinný sklep se 120 etiketami.'
  },
  {
    eyebrow: 'Zážitky',
    title: 'Program na každý den',
    description: 'Privátní wellness, bowlingové turnaje, firemní eventy i tematické večery s živou hudbou.'
  }
];

const restaurantHighlights = [
  'Degustační menu v pěti chodech',
  'Každodenní snídaně formou bufetu',
  'Výběrová káva a signature koktejly',
  'Menu pro vegetariány i bezlepkové hosty'
];

const testimonials = [
  {
    quote:
      'Milujeme atmosféru U Fandy. Personál si pamatuje naše oblíbené víno a děti se těší na bowling i wellness.',
    name: 'Lucie a Petr',
    role: 'rodina z Prahy'
  },
  {
    quote: 'Perfektní zázemí pro firemní retreat. Moderní technika v sále, skvělé jídlo a inspirativní okolí.',
    name: 'Jana',
    role: 'HR manažerka, Brno'
  },
  {
    quote: 'Wellness s bylinkovou saunou a masážemi byl splněný sen. Rádi se vracíme každou sezonu.',
    name: 'Marek',
    role: 'stálý host'
  }
];

const wellnessHighlights = [
  {
    title: 'Privátní sauna & vířivka',
    description: 'Rezervujte si čas jen pro sebe a dopřejte tělu relax po celodenním výletu.'
  },
  {
    title: 'Rituály s horskými bylinami',
    description: 'Aromaterapie a procedury, které využívají lokální byliny a pramenitou vodu.'
  },
  {
    title: 'Relax zóna s výhledem',
    description: 'Pohodlná lehátka, krb a uklidňující výhled do údolí Malé Moravy.'
  }
];

const locationHighlights = [
  { label: 'Ski areál Dolní Morava', value: '1,8 km' },
  { label: 'Stezka v oblacích', value: '2,5 km' },
  { label: 'Trail park & bike půjčovna', value: 'přímo u hotelu' },
  { label: 'Letiště Pardubice', value: '90 min autem' }
];

export default function HomePage() {
  return (
    <div className="space-y-24 pb-24">
      <section className="relative isolate overflow-hidden rounded-b-[56px] bg-topbar text-white">
        <HeroBackgroundSlideshow images={heroBackgroundImages} />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-24 sm:px-6 lg:py-32">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">Vítejte u Fandy</p>
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">
              Moderní útočiště v Malé Moravě pro gurmány, cestovatele i sportovce
            </h1>
            <p className="text-base text-white/80 sm:text-lg">
              Spojujeme hotelové pohodlí, autorskou kuchyni a špičkové sportovní vyžití. Užijte si horský vzduch bez kompromisů v kvalitě
              služeb.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#rezervace"
              className="inline-flex w-full items-center justify-center rounded-full bg-brand px-8 py-3 text-sm font-semibold text-topbar shadow-soft transition hover:bg-brand-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:w-auto"
            >
              Rezervovat pobyt
            </a>
            <a
              href="/restaurace"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/40 px-8 py-3 text-sm font-semibold text-white transition hover:border-brand hover:bg-brand hover:text-topbar focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:w-auto"
            >
              Prozkoumat restauraci
            </a>
          </div>
        </div>
      </section>

      <section className="bg-brand text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:flex-row sm:items-start sm:justify-between sm:px-6">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">Online rezervace</p>
            <h2 className="text-2xl font-semibold">Připraveno pro váš další útěk do hor</h2>
            <p className="text-sm text-white/80">Náš tým recepce reaguje do 24 hodin a pomůže s výběrem pokoje i doplňkových služeb.</p>
          </div>
          <div className="flex w-full flex-col gap-4 sm:max-w-xl sm:items-end">
            <OnlineReservationForm />
            <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
              <a
                href="tel:+420000000000"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white hover:text-topbar focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Zavolejte nám
              </a>
              <a
                href="mailto:info@u-fandy.cz"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white hover:text-topbar focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                info@u-fandy.cz
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 overflow-hidden rounded-3xl bg-canvas-200 p-8 shadow-soft lg:grid-cols-[1.1fr_1fr]">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-canvas-300">
            <Image
              src="/images/placeholders/room.svg"
              alt="Designové pokoje U Fandy"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-dark">Destinace</p>
            <h2 className="text-3xl font-semibold text-topbar sm:text-4xl">Nejkouzelnější místo v Malé Moravě</h2>
            <p className="text-base text-topbar/80">
              Hotel U Fandy je domovem pro gurmány, rodiny i sportovce. Stačí otevřít okno a ucítíte vůni lesa, zatímco v restauraci se
              připravuje čerstvé pečivo a v bowlingu startuje večerní turnaj.
            </p>
            <ul className="space-y-4">
              {welcomeFeatures.map((feature) => (
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
              {locationStats.map((stat) => (
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
          {hotelHighlights.map((highlight) => (
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
        <div className="grid gap-10 overflow-hidden rounded-3xl bg-canvas-200 p-8 shadow-soft lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-dark">Restaurace &amp; Bar</p>
            <h2 className="text-3xl font-semibold text-topbar sm:text-4xl">Sezonní menu z lokálních surovin</h2>
            <p className="text-base text-topbar/80">
              Šéfkuchař propojuje tradiční recepty s moderní gastronomií. Každý den pečeme vlastní pečivo, připravujeme domácí dezerty a v
              baru mícháme signature koktejly.
            </p>
            <ul className="space-y-3 text-sm text-topbar/80">
              {restaurantHighlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="/restaurace"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-topbar shadow-soft transition hover:bg-brand-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              Zjistit více o restauraci
            </a>
          </div>
          <div className="space-y-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-canvas-300">
              <Image
                src="/images/placeholders/restaurant.svg"
                alt="Restaurace U Fandy"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-5">
              {menu.sections.map((section) => (
                <div key={section.title} className="space-y-5">
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

      <section className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6">
        <SectionHeading
          eyebrow="Zážitek"
          title="Bowling, sauna, bike půjčovna a večerní bar"
          description="Zrelaxujte po výletu v privátním wellness nebo si užijte večerní turnaj na profesionálních drahách."
        />
        <Gallery images={galleryImages} />
      </section>

      <section className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6">
        <div className="space-y-6 rounded-3xl bg-canvas-200 p-8 shadow-soft">
          <SectionHeading
            eyebrow="Hodnocení"
            title="Co o nás říkají hosté"
            description="Autentické recenze rodin, sportovců i firemních klientů, kteří se k nám rádi vracejí."
            align="center"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
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
            eyebrow="Wellness"
            title="Horský klid v moderním wellness"
            description="Po náročném dni v horách se ponořte do tepla sauny, vířivky a relaxační zóny se sklenkou prosecca."
          />
          <ul className="space-y-4">
            {wellnessHighlights.map((item) => (
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
            alt="Wellness a relax zóna"
            width={900}
            height={700}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl grid gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-6 rounded-3xl bg-canvas-200 p-8 shadow-soft">
          <SectionHeading
            eyebrow="Lokalita"
            title="Hotel U Fandy"
            description="Malá Morava 123, 788 33 Malá Morava"
          />
          <p className="text-sm text-topbar/80">
            Parkování je zdarma přímo u hotelu. Recepce je otevřená denně od 7:00 do 22:00 a rádi vám doporučíme nejlepší výlety v okolí.
          </p>
          <dl className="grid gap-4 text-sm text-topbar/80 sm:grid-cols-2">
            {locationHighlights.map((item) => (
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
            alt="Mapa cesty k hotelu U Fandy"
            width={1000}
            height={700}
            className="h-full w-full object-cover"
          />
        </div>
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
