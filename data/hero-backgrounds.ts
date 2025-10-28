import type { Locale } from '@/lib/i18n/config';
import type { HeroBackgroundImage } from '@/components/HeroBackgroundSlideshow';

const heroBackgrounds: Record<Locale, HeroBackgroundImage[]> = {
  cs: [
    { src: '/images/hero/bazen.webp', alt: 'Hotel U Fandy v ranním světle' },
    { src: '/images/hero/pizza.webp', alt: 'Restaurace U Fandy s čerstvě upečenou pizzou' }
  ],
  en: [
    { src: '/images/hero/bazen.webp', alt: 'Hotel U Fandy in the morning light' },
    { src: '/images/hero/pizza.webp', alt: 'Restaurant U Fandy with freshly baked pizza' }
  ],
  pl: [
    { src: '/images/hero/bazen.webp', alt: 'Hotel U Fandy w porannym świetle' },
    { src: '/images/hero/pizza.webp', alt: 'Restauracja U Fandy ze świeżo wypieczoną pizzą' }
  ],
  de: [
    { src: '/images/hero/bazen.webp', alt: 'Hotel U Fandy im Morgenlicht' },
    { src: '/images/hero/pizza.webp', alt: 'Restaurant U Fandy mit frisch gebackener Pizza' }
  ],
  sk: [
    { src: '/images/hero/bazen.webp', alt: 'Hotel U Fandy v rannom svetle' },
    { src: '/images/hero/pizza.webp', alt: 'Reštaurácia U Fandy s čerstvo upečenou pizzou' }
  ]
};

export default heroBackgrounds;
