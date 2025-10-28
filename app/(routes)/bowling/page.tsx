import type { Metadata } from 'next';
import ImageGallery from '@/components/gallery/ImageGallery';
import HoursTable from '@/components/HoursTable';
import SectionHeading from '@/components/SectionHeading';
import hours from '@/data/hours.json';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Bowling',
  description:
    'Čtyři profesionální bowlingové dráhy, neon bar a vlastní scoring systém. Přijďte zažít večer plný energie.',
};

const galleryImages = [
  { src: '/images/bowling/bowling1.webp', alt: 'Bowlingová dráha s barem', width: 1200, height: 800 },
  { src: '/images/bowling/bowling2.webp', alt: 'Rozsvícené bowlingové dráhy', width: 1200, height: 800 },
  { src: '/images/bowling/bowling3.webp', alt: 'Bowlingová herna s posezením', width: 1200, height: 800 },
  { src: '/images/bowling/bowling4.webp', alt: 'Bowlingová herna s mantinelem', width: 1200, height: 800 },
];

const vybaveni = [
  '4 profesionální dráhy Brunswick s možností dětských mantinelů',
  'Soukromý salonek pro team-buildingy a oslavy',
  'Neonový bar s autorskými koktejly',
  'Sound system s možností vlastních playlistů',
  'Pronájem trenéra pro firemní turnaje',
];

export default function BowlingPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-16 px-4 py-16 text-slate-100 sm:px-6">
      {/* Hero */}
      <section className="space-y-6 rounded-3xl border border-white/10 bg-slate-950/70 p-8 text-center shadow-xl sm:p-12">
        <p className="text-xs uppercase tracking-[0.45em] text-brand-light sm:text-sm">Bowling</p>
        <h1 className="text-3xl font-semibold uppercase text-white sm:text-4xl">
          Přijďte si zahrát na moderní dráhy
        </h1>
        <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-200">
          Čtyři profesionální bowlingové dráhy, ambientní osvětlení a bar přímo v herně. Připravili jsme prostředí, kde se
          budou dobře bavit jak úplní začátečníci, tak ostřílení hráči.
        </p>
      </section>

      {/* Galerie */}
      <section className="rounded-3xl border border-white/10 bg-slate-950/60 p-4 shadow-xl sm:p-6">
        <ImageGallery images={galleryImages} gridClassName="sm:grid-cols-2 lg:grid-cols-4" />
        <p className="mt-4 text-center text-sm text-slate-300">
          Kliknutím otevřete fotografii na celou obrazovku, procházejte šipkami nebo přejetím prstu.
        </p>
      </section>

      {/* Sekční nadpis */}
      <SectionHeading
        eyebrow="Bowling"
        title="Sportovní zážitek s atmosférou klubu"
        description="Moderní technologie, ambientní osvětlení a bar přímo u drah. Perfektní místo pro přátele i firemní akce."
      />

      {/* Dvě sloupce */}
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        {/* Vybavení + Rezervace */}
        <div className="space-y-6 text-sm leading-relaxed">
          <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-8 shadow-xl">
            <p>
              Naše bowlingové centrum je navrženo pro hráče všech úrovní. Díky inteligentnímu scoringu, LED efektům a
              pohodlnému zázemí si užijete každé roztočení koule.
            </p>
            <ul className="mt-6 space-y-3 text-slate-200">
              {vybaveni.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span aria-hidden="true" className="mt-1 text-brand-light">
                    ●
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-brand/40 bg-brand/10 p-8 text-brand-light shadow-lg">
            <h2 className="text-lg font-semibold text-white">Rezervujte dráhu</h2>
            <p className="mt-4 text-slate-100">
              Zavolejte na{' '}
              <a href="tel:+420000000000" className="font-semibold underline decoration-brand-light">
                +420 000 000 000
              </a>{' '}
              nebo napište na{' '}
              <a href="mailto:bowling@u-fandy.cz" className="font-semibold underline decoration-brand-light">
                bowling@u-fandy.cz
              </a>
              . Ozveme se s potvrzením.
            </p>
          </div>
        </div>

        {/* Otevírací doba + Firemní turnaje */}
        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-xl">
            <HoursTable title="Otevírací doba" rows={hours.bowling} />
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 text-sm text-slate-200 shadow-xl">
            <h3 className="text-lg font-semibold text-white">Firemní turnaje</h3>
            <p className="mt-3">
              Připravíme kompletní program včetně moderátora, cateringu a personalizovaných cen pro vítěze.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
