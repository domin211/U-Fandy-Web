import type { Metadata } from 'next';
import SectionHeading from '@/components/SectionHeading';

export const revalidate = 3600;

const pozice = [
  {
    title: 'Chef de partie',
    description: 'Zkušený kuchař se zaměřením na moderní gastronomii a vedení juniorního týmu.',
    type: 'Plný úvazek'
  },
  {
    title: 'Recepční s AJ/NJ',
    description: 'Komunikace s hosty, práce s rezervačním systémem a concierge služby.',
    type: 'Krátký/dlouhý týden'
  },
  {
    title: 'Event koordinátor/ka',
    description: 'Plánování svateb a firemních akcí, práce s dodavateli a dohled nad realizací.',
    type: 'Plný úvazek'
  }
];

export const metadata: Metadata = {
  title: 'Kariéra',
  description: 'Přidejte se k týmu U Fandy. Tvoříme prostředí, kde roste talent a vášeň pro hospitality.'
};

export default function KarieraPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-16 px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Kariéra"
        title="Hledáme lidi, kteří milují hosty"
        description="U Fandy je týmová spolupráce základ. Nabízíme férové odměny, školení i možnost ubytování."
      />
      <div className="space-y-6">
        {pozice.map((pozice) => (
          <article
            key={pozice.title}
            className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 text-sm text-slate-200 shadow-soft"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-xl font-semibold text-white">{pozice.title}</h2>
              <span className="rounded-full bg-brand/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-light">
                {pozice.type}
              </span>
            </div>
            <p className="mt-4">{pozice.description}</p>
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-slate-400">
              Pošlete CV na <a href="mailto:kariera@u-fandy.cz" className="underline">kariera@u-fandy.cz</a>
            </p>
          </article>
        ))}
      </div>
      <div className="rounded-3xl border border-brand/30 bg-brand/10 p-6 text-sm text-brand-light">
        <h2 className="text-lg font-semibold text-white">Nepíšeme pro vás pozici?</h2>
        <p className="mt-3 text-slate-100">
          Napište nám, co by vás bavilo, a vytvoříme roli na míru. Vítáme i brigády a stáže pro studenty hotelových škol.
        </p>
      </div>
    </div>
  );
}
