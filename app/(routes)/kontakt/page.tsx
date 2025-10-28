import type { Metadata } from 'next';
import SectionHeading from '@/components/SectionHeading';
import HoursTable from '@/components/HoursTable';
import hours from '@/data/hours.json';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Jsme tu pro vás každý den. Zavolejte, napište nebo se zastavte v hotelu U Fandy.'
};

const contacts = [
  {
    label: 'Recepce',
    value: '+420 000 000 000',
    href: 'tel:+420000000000'
  },
  {
    label: 'E-mail',
    value: 'info@u-fandy.cz',
    href: 'mailto:info@u-fandy.cz'
  },
  {
    label: 'Adresa',
    value: 'Malá Morava 123, 788 33 Malá Morava'
  }
];

export default function KontaktPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-16 px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Kontakt"
        title="Ozvěte se, poradíme s pobytem i akcí"
        description="Máme tým, který vám pomůže s rezervací, dárkovým voucherem nebo plánováním teambuildingu."
      />
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6 text-sm text-slate-200">
          <ul className="space-y-4">
            {contacts.map((contact) => (
              <li key={contact.label} className="rounded-3xl border border-white/10 bg-slate-950/60 p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{contact.label}</p>
                {contact.href ? (
                  <a href={contact.href} className="mt-2 block text-lg font-semibold text-white">
                    {contact.value}
                  </a>
                ) : (
                  <p className="mt-2 text-lg font-semibold text-white">{contact.value}</p>
                )}
              </li>
            ))}
          </ul>
          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 text-sm text-slate-200">
            <h2 className="text-lg font-semibold text-white">Fakturační údaje</h2>
            <p className="mt-3">
              U Fandy s.r.o., IČO 00000000<br />
              DIČ CZ00000000
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <HoursTable title="Recepce" rows={hours.hotel} />
          <HoursTable title="Restaurace" rows={hours.restaurant} />
        </div>
      </div>
    </div>
  );
}
