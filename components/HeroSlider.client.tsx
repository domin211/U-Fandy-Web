'use client';

import { useMemo } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { Autoplay, EffectFade, Keyboard } from 'swiper/modules';
import type { SwiperProps, SwiperSlideProps } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';

type Slide = {
  readonly id: number;
  readonly image: string;
  readonly alt: string;
};

const Swiper = dynamic<SwiperProps>(
  () => import('swiper/react').then((mod) => mod.Swiper),
  {
    ssr: false
  }
);

const SwiperSlide = dynamic<SwiperSlideProps>(
  () => import('swiper/react').then((mod) => mod.SwiperSlide),
  {
    ssr: false
  }
);

const slides: readonly Slide[] = [
  {
    id: 1,
    image: '/images/hero/bazen.webp',
    alt: 'Designový hotelový bazén s lehátky a atmosférickým osvětlením'
  },
  {
    id: 2,
    image: '/images/hero/pizza.webp',
    alt: 'Čerstvě upečená pizza a sklenka vína v hotelové restauraci'
  },
  {
    id: 3,
    image: '/images/bowling/bowling3.webp',
    alt: 'Bowlingová dráha s moderním osvětlením připravená na hru'
  }
];

export default function HeroSliderClient() {
  const modules = useMemo(() => [Autoplay, EffectFade, Keyboard], []);

  return (
    <div className="relative h-full w-full">
      <Swiper
        modules={modules}
        slidesPerView={1}
        loop
        effect="fade"
        speed={900}
        autoplay={{ delay: 6000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        keyboard={{ enabled: true, onlyInViewport: true }}
        allowTouchMove
        className="h-full"
        fadeEffect={{ crossFade: true }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} className="relative">
            <div className="relative h-full w-full">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />
              <div className="absolute inset-0 flex items-center justify-center px-6 py-10 sm:px-12">
                <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center text-white">
                  <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                    Dokonalý pobyt v srdci Beskyd
                  </h1>
                  <p className="mt-3 text-lg font-light italic text-white sm:mt-4 sm:text-xl">
                    pizza a pivéčko z místního pivovaru skvělá kombinace...
                  </p>
                  <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <Link
                      href="/rezervace"
                      className="inline-flex items-center justify-center rounded-none bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-wide text-black transition hover:bg-brand/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      Online rezervace
                    </Link>
                    <Link
                      href="/pokoje"
                      className="inline-flex items-center justify-center rounded-none border border-white/80 bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      Volné pokoje
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
