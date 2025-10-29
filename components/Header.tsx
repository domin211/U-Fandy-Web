'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';
import { useEffect, useRef, useState } from 'react';
import type { NavLink } from '@/messages/schema';
import LanguageSwitcher from './LanguageSwitcher';
import { useDictionary } from '@/lib/i18n/dictionary-context';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap'
});

export default function Header() {
  const dictionary = useDictionary();
  const navLinks = dictionary.common.header.navLinks as readonly NavLink[];
  const headerRef = useRef<HTMLElement>(null);
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const headerElement = headerRef.current;

    if (!headerElement) {
      return undefined;
    }

    const updateOffset = () => {
      document.documentElement.style.setProperty('--header-offset', `${headerElement.offsetHeight}px`);
    };

    updateOffset();

    const handleResize = () => {
      updateOffset();
    };

    const handleScroll = () => {
      setHasShadow(window.scrollY > 10);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });

    let resizeObserver: ResizeObserver | undefined;

    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        updateOffset();
      });

      resizeObserver.observe(headerElement);
    }

    handleScroll();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      resizeObserver?.disconnect();
      document.documentElement.style.removeProperty('--header-offset');
    };
  }, []);

  const primaryLinks = navLinks.filter((link) => link.variant !== 'cta');
  const reservationLink = navLinks.find((link) => link.variant === 'cta');

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 w-full border-b border-white/5 bg-topbar/90 backdrop-blur transition-shadow ${
        hasShadow ? 'shadow-header' : ''
      }`}
    >
      <div className="container flex items-center gap-6 py-5">
        <Link
          href="/"
          className="group flex items-center gap-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <Image
            src="/images/logo.webp"
            alt="U Fandy Hotel & Restaurant"
            width={172}
            height={64}
            priority
            className="h-14 w-auto transition group-hover:opacity-90"
          />
          <span className="sr-only">U Fandy Hotel &amp; Restaurant</span>
        </Link>

        <nav
          className={`flex flex-1 justify-center overflow-x-auto ${montserrat.className}`}
          aria-label={dictionary.common.header.navigationLabel}
        >
          <ul className="flex min-w-max items-center gap-4 lg:gap-6">
            {primaryLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center justify-center text-[0.7rem] font-semibold uppercase tracking-nav text-white/70 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-3 sm:gap-4">
          <LanguageSwitcher className="hidden sm:flex" />
          {reservationLink ? (
            <Link href={reservationLink.href} className="btn-base btn-primary whitespace-nowrap text-[0.7rem]">
              {reservationLink.label}
            </Link>
          ) : null}
        </div>
      </div>
    </header>
  );
}
