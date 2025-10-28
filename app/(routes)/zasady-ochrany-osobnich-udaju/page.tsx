import type { Metadata } from 'next';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Zásady ochrany osobních údajů',
  description: 'Jak nakládáme s osobními údaji hostů a partnerů hotelu U Fandy.'
};

const sections = [
  {
    title: 'Správce osobních údajů',
    content: 'Správcem vašich údajů je společnost U Fandy s.r.o., Malá Morava 123, 788 33 Malá Morava.'
  },
  {
    title: 'Jaké údaje zpracováváme',
    content:
      'Jméno, kontaktní údaje, informace o rezervaci, platební údaje a komunikaci s vámi. Údaje uchováváme po dobu zákonných povinností.'
  },
  {
    title: 'Účely zpracování',
    content:
      'Zpracování rezervací, plnění smlouvy, účetnictví a zasílání informací o službách na základě vašeho souhlasu.'
  },
  {
    title: 'Vaše práva',
    content:
      'Máte právo na přístup, opravu, výmaz, omezení zpracování, přenositelnost údajů i podání stížnosti u ÚOOÚ.'
  },
  {
    title: 'Kontakt na pověřence',
    content: 'privacy@u-fandy.cz'
  }
];

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-12 px-4 py-16 sm:px-6">
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold text-white">Zásady ochrany osobních údajů</h1>
        <p className="text-sm text-slate-300">
          Věříme v otevřenost. Proto přehledně popisujeme, jak chráníme vaše data a na koho se můžete obrátit.
        </p>
      </header>
      <div className="space-y-6 text-sm text-slate-200">
        {sections.map((section) => (
          <section key={section.title} className="space-y-2">
            <h2 className="text-lg font-semibold text-white">{section.title}</h2>
            <p>{section.content}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
