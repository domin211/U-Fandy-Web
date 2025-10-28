import type { Metadata } from 'next';
import SectionHeading from '@/components/SectionHeading';

export const revalidate = 3600;

const vybaveni = [
  'Kapacita až 120 hostů v banketovém uspořádání',
  'LED stěna, profesionální ozvučení a inteligentní osvětlení',
  'Hybridní technika pro konferenční přenosy',
  'Zázemí pro catering a barový servis',
  'Možnost propojení s venkovní terasou'
];

export const metadata: Metadata = {
  title: 'Společenský sál',
  description: 'Flexibilní sál pro svatby, konference i koncerty. Navrhneme scénář na míru.'
};

export default function SalPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-16 px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Společenský sál"
        title="Prostor, který roste s vašimi ambicemi"
        description="Modulární scéna, elegantní interiér a špičková technika. Organizujeme svatby, gala večery i firemní summity."
      />
      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6 text-sm text-slate-200">
          <p>
            Každá událost je unikátní. Náš eventový tým připraví dramaturgii, scénografii i koordinaci hostů tak, aby vše šlapalo
            na minutu přesně.
          </p>
          <ul className="space-y-3">
            {vybaveni.map((item) => (
              <li key={item}>✔️ {item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 text-sm text-slate-200">
          <h2 className="text-lg font-semibold text-white">Event concierge</h2>
          <p className="mt-3">
            Pošlete nám představu na <a href="mailto:event@u-fandy.cz" className="underline">event@u-fandy.cz</a> a připravíme
            vám kompletní nabídku včetně 3D vizualizace prostoru.
          </p>
        </div>
      </div>
    </div>
  );
}
