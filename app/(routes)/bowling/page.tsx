import type { Metadata } from 'next';
import ImageGallery from '@/components/gallery/ImageGallery';
import HoursTable from '@/components/HoursTable';
import SectionHeading from '@/components/SectionHeading';
import hours from '@/data/hours.json';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Bowling',
  description: 'Čtyři profesionální bowlingové dráhy, neon bar a vlastní scoring systém. Přijďte zažít večer plný energie.'
};

const galleryImages = [
  { src: '/images/bowling/gallery-1.jpg', alt: 'Bowlingová dráha s barem', width: 1600, height: 1066 },
  { src: '/images/bowling/gallery-2.jpg', alt: 'Rozsvícené bowlingové dráhy', width: 1600, height: 1066 },
  { src: '/images/bowling/gallery-3.jpg', alt: 'Bowlingová herna s posezením', width: 1600, height: 1066 },
  { src: '/images/bowling/gallery-4.jpg', alt: 'Bowlingová herna s mantinelem', width: 1600, height: 1066 }
];

const vybaveni = [
  '4 profesionální dráhy Brunswick s možností dětských mantinelů',
  'Soukromý salonek pro team-buildingy a oslavy',
  'Neonový bar s autorskými koktejly',
  'Sound system s možností vlastních playlistů',
  'Pronájem trenéra pro firemní turnaje'
];

export default function BowlingPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-16 px-4 py-16 sm:px-6">
      <div className="space-y-6 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-brand-light">Bowling</p>
        <h1 className="text-3xl font-semibold uppercase text-white sm:text-4xl">Přijďte si zahrát na moderní dráhy</h1>
        <p className="mx-auto max-w-3xl text-base text-slate-200">
          Přijďte si zahrát na naše moderní bowlingové dráhy. Každá z nich je vybavená výsuvnými mantinely pro děti a
          profesionálním scoringem, takže si hru vychutná celá rodina.
        </p>
      </div>

      <ImageGallery images={galleryImages} gridClassName="lg:grid-cols-4" />

      <SectionHeading
        eyebrow="Bowling"
        title="Sportovní zážitek s atmosférou klubu"
        description="Moderní technologie, ambientní osvětlení a bar přímo u drah. Perfektní místo pro přátele i firemní akce."
      />
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6 text-sm text-slate-200">
          <p>
            Naše bowlingové centrum je navrženo pro hráče všech úrovní. Díky inteligentnímu scoringu a LED efektnímu
            osvětlení si užijete každé roztočení koule.
          </p>
          <ul className="space-y-3">
            {vybaveni.map((item) => (
              <li key={item}>✔️ {item}</li>
            ))}
          </ul>
          <div className="rounded-3xl border border-brand/40 bg-brand/10 p-6 text-brand-light">
            <h2 className="text-lg font-semibold text-white">Rezervujte dráhu</h2>
            <p className="mt-3 text-slate-100">
              Zavolejte na +420 000 000 000 nebo napište na{' '}
              <a href="mailto:bowling@u-fandy.cz" className="underline">
                bowling@u-fandy.cz
              </a>
              .
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <HoursTable title="Otevírací doba" rows={hours.bowling} />
          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 text-sm text-slate-200">
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
