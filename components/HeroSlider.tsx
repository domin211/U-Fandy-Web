'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useRef } from 'react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperInstance } from 'swiper/types';

import 'swiper/css';
import 'swiper/css/effect-fade';

export type HeroSlide = {
  imageSrc: string;
  imageAlt: string;
  caption: string;
};

interface HeroSliderProps {
  headline: string;
  subtitle: string;
  slides: HeroSlide[];
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

export default function HeroSlider({ headline, subtitle, slides, primaryCta, secondaryCta }: HeroSliderProps) {
  const swiperRef = useRef<SwiperInstance | null>(null);

  const normalizedSlides = useMemo(() => {
    if (!slides.length) {
      return [
        {
          imageSrc: '/images/placeholders/hero.svg',
          imageAlt: 'Hotel U Fandy exteriér v ranním světle',
          caption: subtitle
        }
      ];
    }

    return slides;
  }, [slides, subtitle]);

  return (
    <section
      className="relative isolate overflow-hidden text-white"
      style={{ marginTop: 'calc(var(--header-offset, 6rem) * -1)' }}
    >
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        speed={900}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onMouseEnter={() => {
          if (swiperRef.current?.autoplay) {
            swiperRef.current.autoplay.stop();
          }
        }}
        onMouseLeave={() => {
          if (swiperRef.current?.autoplay) {
            swiperRef.current.autoplay.start();
          }
        }}
        className="hero-swiper"
      >
        {normalizedSlides.map((slide, index) => (
          <SwiperSlide key={`${slide.imageSrc}-${index}`}>
            <div className="relative h-[70vh] min-h-[520px] w-full lg:h-[78vh]">
              <Image
                src={slide.imageSrc}
                alt={slide.imageAlt}
                fill
                priority={index === 0}
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="container relative z-10 flex flex-col items-center gap-6 text-center">
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">{slide.caption}</span>
                  <h1 className="max-w-4xl text-4xl font-bold uppercase tracking-[0.12em] sm:text-5xl lg:text-6xl">
                    {headline}
                  </h1>
                  <p className="max-w-2xl text-base text-white/80 sm:text-lg">{subtitle}</p>
                  <div className="flex flex-col items-center gap-3 sm:flex-row">
                    <Link href={primaryCta.href} className="btn-base btn-primary">
                      {primaryCta.label}
                    </Link>
                    <Link href={secondaryCta.href} className="btn-base btn-secondary">
                      {secondaryCta.label}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
