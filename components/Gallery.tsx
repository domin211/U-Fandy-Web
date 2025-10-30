'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import NextImage from 'next/image';

export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface GalleryProps {
  images: ReadonlyArray<GalleryImage>;
}

const BLUR_DATA_URL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAuMBg5fnmWcAAAAASUVORK5CYII=';

export default function Gallery({ images }: GalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const orderedImages = useMemo(() => images.slice(0, 12), [images]);

  const close = useCallback(() => setActiveIndex(null), []);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        close();
      }
      if (event.key === 'ArrowRight') {
        setActiveIndex((current) => (current === null ? null : (current + 1) % orderedImages.length));
      }
      if (event.key === 'ArrowLeft') {
        setActiveIndex((current) =>
          current === null ? null : (current - 1 + orderedImages.length) % orderedImages.length,
        );
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex, close, orderedImages.length]);

  useEffect(() => {
    if (activeIndex === null) return;

    const nextIndex = (activeIndex + 1) % orderedImages.length;
    const prevIndex = (activeIndex - 1 + orderedImages.length) % orderedImages.length;

    [orderedImages[nextIndex], orderedImages[prevIndex]].forEach((image) => {
      if (!image) return;
      const preloadImage = new window.Image();
      preloadImage.src = image.src;
    });
  }, [activeIndex, orderedImages]);

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      {orderedImages.map((image, index) => (
        <button
          key={image.src}
          type="button"
          className="group relative overflow-hidden rounded-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          onClick={() => setActiveIndex(index)}
        >
          <span className="sr-only">Zobrazit fotografii {image.alt}</span>
          <NextImage
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
            loading="lazy"
            decoding="async"
          />
        </button>
      ))}
      {activeIndex !== null ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-topbar/95 p-4"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-6 top-6 rounded-none bg-white/10 p-2 text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            aria-label="Zavřít galerii"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6m0 12L6 6" />
            </svg>
          </button>
          <div className="relative h-[60vh] w-full max-w-4xl">
            <NextImage
              src={orderedImages[activeIndex]?.src ?? ''}
              alt={orderedImages[activeIndex]?.alt ?? ''}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 70vw"
              priority={false}
            />
          </div>
          <div className="absolute inset-x-0 bottom-8 flex items-center justify-center gap-6 text-sm text-white/80">
            <button
              type="button"
              onClick={() =>
                setActiveIndex((prev) => (prev === null ? prev : (prev - 1 + orderedImages.length) % orderedImages.length))
              }
              className="rounded-none border border-white/20 px-4 py-2 hover:border-brand hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              Předchozí
            </button>
            <button
              type="button"
              onClick={() => setActiveIndex((prev) => (prev === null ? prev : (prev + 1) % orderedImages.length))}
              className="rounded-none border border-white/20 px-4 py-2 hover:border-brand hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              Další
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
