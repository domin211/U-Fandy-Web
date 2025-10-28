import type { Metadata } from 'next';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Cookies',
  description: 'Informace o používání souborů cookies na webu U Fandy.'
};

const sections = [
  {
    title: 'Co jsou cookies',
    content:
      'Cookies jsou malé textové soubory ukládané do vašeho zařízení. Pomáhají nám analyzovat návštěvnost a zlepšovat služby.'
  },
  {
    title: 'Jaké cookies používáme',
    content:
      'Používáme pouze technické cookies nezbytné pro fungování webu a anonymizovanou analytiku. Nepoužíváme marketingové cookies.'
  },
  {
    title: 'Jak odmítnout cookies',
    content:
      'Nastavení cookies lze upravit v nastavení vašeho prohlížeče. Vypnutí technických cookies může omezit funkčnost webu.'
  }
];

export default function CookiesPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-12 px-4 py-16 sm:px-6">
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold text-white">Cookies</h1>
        <p className="text-sm text-slate-300">
          Na webu U Fandy dbáme na soukromí. Cookies používáme jen v nezbytném rozsahu.
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
