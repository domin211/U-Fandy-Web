'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

export type HeroBackgroundImage = {
  src: string;
  alt: string;
};

const MAX_IMAGES = 10;
const ROTATION_INTERVAL = 10000;

interface HeroBackgroundSlideshowProps {
  images: HeroBackgroundImage[];
}

export default function HeroBackgroundSlideshow({ images }: HeroBackgroundSlideshowProps) {
  const normalizedImages = useMemo(() => {
    const sanitized = images
      .filter((image) => image && typeof image.src === 'string' && image.src.trim().length > 0)
      .slice(0, MAX_IMAGES);

    if (sanitized.length > 0) {
      return sanitized;
    }

    return [
      {
        src: '/images/placeholders/hero.svg',
        alt: 'Hotel U Fandy v ranním světle',
      },
    ];
  }, [images]);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (normalizedImages.length <= 1) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((previous) => (previous + 1) % normalizedImages.length);
    }, ROTATION_INTERVAL);

    return () => window.clearInterval(intervalId);
  }, [normalizedImages]);

  return (
    <div className="absolute inset-0">
      {normalizedImages.map((image, index) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          priority={index === 0}
          sizes="100vw"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-out ${
            index === activeIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-topbar/80 via-topbar/60 to-topbar/85" aria-hidden="true" />
    </div>
  );
}
