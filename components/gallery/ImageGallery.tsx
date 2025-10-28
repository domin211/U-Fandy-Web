'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type ImageGalleryProps = {
  images: GalleryImage[];
  /**
   * Tailwind class controlling the aspect ratio of the thumbnails (e.g. "aspect-[4/3]", "aspect-square").
   */
  thumbnailAspectClassName?: string;
  /**
   * Extra Tailwind classes for the responsive grid so the layout can be reused on multiple pages.
   */
  gridClassName?: string;
};

const blurPlaceholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 12'%3E%3Crect width='16' height='12' fill='%23212B36'/%3E%3C/svg%3E";

export default function ImageGallery({
  images,
  thumbnailAspectClassName = 'aspect-[4/3]',
  gridClassName
}: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openAt = useCallback((index: number) => {
    if (images.length === 0) return;
    setActiveIndex(index);
  }, [images.length]);

  const close = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const showPrevious = useCallback(() => {
    if (images.length === 0) return;
    setActiveIndex((current) => {
      if (current === null) return current;
      return (current - 1 + images.length) % images.length;
    });
  }, [images.length]);

  const showNext = useCallback(() => {
    if (images.length === 0) return;
    setActiveIndex((current) => {
      if (current === null) return current;
      return (current + 1) % images.length;
    });
  }, [images.length]);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        close();
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        showPrevious();
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault();
        showNext();
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeIndex, close, showNext, showPrevious]);

  const isOpen = activeIndex !== null && images.length > 0;
  const aspectClass = thumbnailAspectClassName;
  const baseGridClasses = 'grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4';
  const gridClasses = [baseGridClasses, gridClassName].filter(Boolean).join(' ');

  return (
    <>
      <div className={gridClasses}>
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => openAt(index)}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 shadow-lg transition focus:outline-none focus:ring-2 focus:ring-brand/60"
            aria-label={`Otevřít fotografii: ${image.alt}`}
          >
            <div className={`relative ${aspectClass} w-full`}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                className="object-cover transition duration-300 group-hover:scale-105"
                placeholder="blur"
                blurDataURL={blurPlaceholder}
                priority={index === 0}
              />
            </div>
          </button>
        ))}
      </div>

      {isOpen && activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 px-4 py-8 backdrop-blur-sm"
          onClick={close}
        >
          <button
            type="button"
            aria-label="Zavřít galerii"
            className="absolute right-5 top-5 rounded-full bg-black/60 p-2 text-2xl text-white transition hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-white"
            onClick={(event) => {
              event.stopPropagation();
              close();
            }}
          >
            ×
          </button>

          <button
            type="button"
            aria-label="Předchozí fotografie"
            className="absolute left-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-black/60 p-3 text-2xl text-white transition hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-white sm:flex"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
          >
            ‹
          </button>

          <div
            className="relative flex w-full max-w-4xl items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              width={images[activeIndex].width}
              height={images[activeIndex].height}
              className="h-auto max-h-[80vh] w-full rounded-3xl object-contain shadow-2xl"
              sizes="(max-width: 768px) 100vw, 70vw"
              priority
            />
          </div>

          <button
            type="button"
            aria-label="Další fotografie"
            className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-black/60 p-3 text-2xl text-white transition hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-white sm:flex"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
          >
            ›
          </button>

          <div className="absolute bottom-6 left-1/2 flex w-full max-w-md -translate-x-1/2 items-center justify-between gap-3 sm:hidden">
            <button
              type="button"
              aria-label="Předchozí fotografie"
              className="flex-1 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
            >
              Předchozí
            </button>
            <button
              type="button"
              aria-label="Další fotografie"
              className="flex-1 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
            >
              Další
            </button>
          </div>
        </div>
      )}
    </>
  );
}
