import type { Metadata } from 'next';
import SectionHeading from '@/components/SectionHeading';
import MenuItemCard from '@/components/MenuItemCard';
import HoursTable from '@/components/HoursTable';
import menu from '@/data/menu.json';
import hours from '@/data/hours.json';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Restaurace',
  description: 'Autorská kuchyně a bar s regionálními ingrediencemi. Přijďte ochutnat sezónní menu U Fandy.'
};

export default function RestauracePage() {
  return (
    <div className="mx-auto max-w-6xl space-y-16 px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Restaurace"
        title="Suroviny z Jeseníků, techniky z celého světa"
        description="Každý chod vypráví příběh. Čerpáme z lokálních farem, sezonních bylin a inspirace světovou gastronomií."
      />
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-8">
          {menu.sections.map((section) => (
            <section key={section.title} className="space-y-4">
              <h2 className="text-xl font-semibold text-white">{section.title}</h2>
              <div className="space-y-3">
                {section.items.map((item) => (
                  <MenuItemCard key={item.title} {...item} />
                ))}
              </div>
            </section>
          ))}
        </div>
        <aside className="space-y-6">
          <HoursTable title="Otevírací doba" rows={hours.restaurant} />
          <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 text-sm text-slate-200">
            <h3 className="text-lg font-semibold text-white">Degustační večery</h3>
            <p className="mt-3">
              Každý pátek připravujeme sedmichodové menu s párováním vín. Rezervujte si místo alespoň 48 hodin předem.
            </p>
          </div>
          <div className="rounded-3xl border border-brand/30 bg-brand/10 p-6 text-sm text-brand-light">
            <h3 className="text-lg font-semibold text-white">Rezervace stolu</h3>
            <p className="mt-3 text-slate-100">
              Volejte +420 000 000 000 nebo napište na <a href="mailto:restaurace@u-fandy.cz" className="underline">restaurace@u-fandy.cz</a>.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
