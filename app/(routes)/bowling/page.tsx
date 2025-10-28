import type { Metadata } from 'next';
import ImageGallery from '@/components/gallery/ImageGallery';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Bowling',
  description:
    'Bowling – dvě moderní dráhy s možností dětských mantinelů a pohodovým zázemím pro celou rodinu.',
};

const galleryImages = [
  { src: '/images/bowling/bowling1.webp', alt: 'Bowlingová dráha s barem', width: 1200, height: 800 },
  { src: '/images/bowling/bowling2.webp', alt: 'Rozsvícené bowlingové dráhy', width: 1200, height: 800 },
  { src: '/images/bowling/bowling3.webp', alt: 'Bowlingová herna s posezením', width: 1200, height: 800 },
  { src: '/images/bowling/bowling4.webp', alt: 'Bowlingová herna s mantinelem', width: 1200, height: 800 },
];

export default function BowlingPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-16 px-4 py-16 text-slate-100 sm:px-6">
      {/* Hero */}
      <section className="space-y-6 rounded-3xl border border-white/10 bg-slate-950/70 p-8 text-center shadow-xl sm:p-12">
        <p className="text-xs uppercase tracking-[0.45em] text-brand-light sm:text-sm">Bowling</p>
        <h1 className="text-3xl font-semibold uppercase text-white sm:text-4xl">
          PŘIJĎTE SI ZAHRÁT NA MODERNÍ DRÁHY
        </h1>
        <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-200">
          Přijďte si zahrát na dvě moderní bowlingové dráhy. Nabízíme dvě špičkové dráhy, kde jedna z drah může být
          upravena pro Vaše děti pomocí výsuvného mantinelu, který zabraňuje vypadnutí koule do žlabu.
        </p>
      </section>

      {/* Galerie */}
      <section className="rounded-3xl border border-white/10 bg-slate-950/60 p-4 shadow-xl sm:p-6">
        <ImageGallery images={galleryImages} gridClassName="sm:grid-cols-2 lg:grid-cols-4" />
        <p className="mt-4 text-center text-sm text-slate-300">
          Kliknutím otevřete fotografii na celou obrazovku, procházejte šipkami nebo přejetím prstu.
        </p>
      </section>
    </div>
  );
}
