'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

export type HeroBackgroundImage = {
  src: string;
  alt: string;
};

const MAX_IMAGES = 10;
const ROTATION_INTERVAL = 10_000; // 10s

interface HeroBackgroundSlideshowProps {
  images: HeroBackgroundImage[];
}

export default function HeroBackgroundSlideshow({ images }: HeroBackgroundSlideshowProps) {
  const normalizedImages = useMemo(() => {
    const sanitized = images
      .filter((image) => image && typeof image.src === 'string' && image.src.trim().length > 0)
      .slice(0, MAX_IMAGES);

    return sanitized.length > 0
      ? sanitized
      : [{ src: '/images/placeholders/hero.svg', alt: 'Hotel U Fandy v ranním světle' }];
  }, [images]);

  const slideshowKey = useMemo(
    () => normalizedImages.map((image) => `${image.src}|${image.alt}`).join(';'),
    [normalizedImages]
  );

  return <SlideshowContent key={slideshowKey} images={normalizedImages} />;
}

function usePrefersReducedMotion() {
  const getPreference = () => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return false;
    }

    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  };

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(getPreference);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return undefined;
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  return prefersReducedMotion;
}

function SlideshowContent({ images }: { images: HeroBackgroundImage[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();
  const displayedIndex = prefersReducedMotion ? 0 : activeIndex;

  useEffect(() => {
    if (images.length <= 1 || prefersReducedMotion) return;

    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, ROTATION_INTERVAL);

    return () => window.clearInterval(id);
  }, [images.length, prefersReducedMotion]);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      <div className="relative h-full w-full">
        {images.map((image, index) => (
          <Image
            key={`${image.src}-${index}`}
            src={image.src}
            alt={image.alt}
            fill
            priority={index === 0}
            loading={index === 0 ? 'eager' : 'lazy'}
            sizes="(min-width: 1280px) 1920px, 100vw"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-out ${
              index === displayedIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
