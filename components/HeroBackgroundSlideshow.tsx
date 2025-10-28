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

function SlideshowContent({ images }: { images: HeroBackgroundImage[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, ROTATION_INTERVAL);

    return () => window.clearInterval(id);
  }, [images.length]);

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
            sizes="100vw"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-out ${
              index === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        {/* gradient overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-topbar/80 via-topbar/60 to-topbar/85" aria-hidden="true" />
      </div>
    </div>
  );
}
