'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { defaultLocale } from '@/lib/i18n/config';
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
  const pathname = usePathname();
  const locale = useLocale();
  const headerRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const { navigationLinks, reservationLink } = useMemo(() => {
    const ctaLink = navLinks.find((link) => link.variant === 'cta');

    return {
      navigationLinks: navLinks.filter((link) => link.variant !== 'cta'),
      reservationLink: ctaLink ?? { href: '/rezervovat-pobyt', label: 'Rezervovat pobyt' }
    };
  }, [navLinks]);

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const resolveHref = (href: string) => {
    const localePrefix = locale === defaultLocale ? '' : `/${locale}`;

    if (href === '/') {
      return localePrefix || '/';
    }

    return `${localePrefix}${href}`;
  };

  const isActive = (href: string) => {
    const fullPath = resolveHref(href);
    if (!pathname) return false;

    return pathname === fullPath || pathname.startsWith(`${fullPath}/`);
  };

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-40 w-full border-b transition-colors ${
        isScrolled ? 'border-white/10 bg-black/85 backdrop-blur' : 'border-transparent bg-black/75'
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center gap-6 px-4 py-4 text-white sm:px-6">
        <Link
          href={resolveHref('/')}
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
          <ul className="flex min-w-max items-center gap-2">
            {navigationLinks.map((link) => {
              const href = resolveHref(link.href);
              const active = isActive(link.href);

              return (
                <li key={link.href} className="flex">
                  <Link
                    href={href}
                    className={`relative inline-flex items-center px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/70 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand after:absolute after:left-4 after:right-4 after:-bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:content-[''] hover:text-white hover:after:scale-x-100 ${
                      active ? 'text-white after:scale-x-100' : ''
                    }`}
                  >
                    <span className="relative z-10">{link.label.toUpperCase()}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="ml-auto flex items-center gap-4">
          <LanguageSwitcher className="flex-shrink-0" />
          <Link
            href={resolveHref(reservationLink.href)}
            className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:border-white/40 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            {reservationLink.label.toUpperCase()}
          </Link>
        </div>
      </div>
    </header>
  );
}
