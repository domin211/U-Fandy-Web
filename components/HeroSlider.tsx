import dynamic from 'next/dynamic';
import type { ComponentType } from 'react';

const HeroSliderClient = dynamic(() => import('./HeroSlider.client'), {
  ssr: false,
  loading: () => (
    <div className="relative w-full">
      <div className="aspect-[16/9] w-full bg-black/40" aria-hidden />
    </div>
  )
}) as ComponentType;

export default function HeroSlider() {
  return (
    <div className="relative w-full">
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/40 sm:aspect-[3/1]">
        <HeroSliderClient />
      </div>
    </div>
  );
}
