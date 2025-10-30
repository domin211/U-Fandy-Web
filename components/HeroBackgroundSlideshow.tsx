import Image from 'next/image';
import type { CSSProperties } from 'react';

export type HeroBackgroundImage = {
  src: string;
  alt: string;
};

const MAX_IMAGES = 10;
const ROTATION_INTERVAL = 10_000; // 10s
const FALLBACK_IMAGE: HeroBackgroundImage = {
  src: '/images/placeholders/hero.svg',
  alt: 'Hotel U Fandy v ranním světle',
};

interface HeroBackgroundSlideshowProps {
  images: HeroBackgroundImage[];
}

function normalizeImages(images: HeroBackgroundImage[]): HeroBackgroundImage[] {
  const sanitized: HeroBackgroundImage[] = [];

  for (const image of images) {
    if (!image || typeof image.src !== 'string') {
      continue;
    }

    const src = image.src.trim();

    if (src.length === 0) {
      continue;
    }

    const alt =
      typeof image.alt === 'string' && image.alt.trim().length > 0
        ? image.alt
        : FALLBACK_IMAGE.alt;

    sanitized.push({ src, alt });

    if (sanitized.length >= MAX_IMAGES) {
      break;
    }
  }

  if (sanitized.length === 0) {
    sanitized.push(FALLBACK_IMAGE);
  }

  return sanitized;
}

export default function HeroBackgroundSlideshow({
  images,
}: HeroBackgroundSlideshowProps) {
  const normalizedImages = normalizeImages(images);
  const isSingleImage = normalizedImages.length <= 1;
  const animationDuration = Math.max(1, normalizedImages.length) * ROTATION_INTERVAL;

  return (
    <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      <div className="relative h-full w-full">
        {normalizedImages.map((image, index) => {
          const style = !isSingleImage
            ? ({
                '--hero-slideshow-duration': `${animationDuration}ms`,
                '--hero-slideshow-delay': `${index * ROTATION_INTERVAL}ms`,
              } as CSSProperties)
            : undefined;

          return (
            <Image
              key={`${image.src}-${index}`}
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              loading={index === 0 ? 'eager' : 'lazy'}
              sizes="(min-width: 1280px) 1920px, 100vw"
              className="hero-slideshow-image absolute inset-0 h-full w-full object-cover"
              style={style}
              data-slideshow-single={isSingleImage ? 'true' : undefined}
            />
          );
        })}
      </div>
    </div>
  );
}
