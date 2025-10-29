'use client';

import HeroSliderClient from './HeroSlider.client';

export default function HeroSlider() {
  return (
    <div className="relative w-full">
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/40 sm:aspect-[3/1]">
        <HeroSliderClient />
      </div>
    </div>
  );
}
