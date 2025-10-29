'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';
import { useEffect, useRef } from 'react';
import type { NavLink } from '@/messages/schema';
import LanguageSwitcher from './LanguageSwitcher';
import { useDictionary } from '@/lib/i18n/dictionary-context';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap'
});

export default function Header() {
  const dictionary = useDictionary();
  const navLinks = dictionary.common.header.navLinks as readonly NavLink[];
  const headerRef = useRef<HTMLElement>(null);

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

    window.addEventListener('resize', handleResize);

    let resizeObserver: ResizeObserver | undefined;

    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        updateOffset();
      });

      resizeObserver.observe(headerElement);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      resizeObserver?.disconnect();
      document.documentElement.style.removeProperty('--header-offset');
    };
  }, []);

  return (
    <header ref={headerRef} className="sticky top-0 z-40 w-full bg-black/90 text-white">
      <div className="mx-auto flex w-full max-w-layout items-center gap-4 px-4 py-5 sm:px-6">
        <Link
          href="/"
          className="group flex items-center gap-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <Image
            src="/images/logo.webp"
            alt="U Fandy Hotel & Restaurant"
            width={190}
            height={71}
            priority
            className="h-[66px] w-auto transition group-hover:opacity-90"
          />
          <span className="sr-only">U Fandy Hotel &amp; Restaurant</span>
        </Link>
        <nav
          className={`flex flex-1 justify-center overflow-x-auto ${montserrat.className}`}
          aria-label={dictionary.common.header.navigationLabel}
        >
          <ul className="flex min-w-max items-center">
            {navLinks.map((link) => {
              const isCTA = link.variant === 'cta';

              return (
                <li key={link.href} className="mx-[3px]">
                  <Link
                    href={link.href}
                    className={`group relative inline-flex items-center justify-center gap-1 whitespace-nowrap px-[10px] py-3 text-[15px] font-semibold uppercase tracking-[.08em] text-[#969696] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand${
                      isCTA
                        ? ' outline outline-1 outline-brand text-[#bebebe] hover:bg-brand hover:text-white'
                        : ' hover:text-brand'
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.hasDropdown ? (
                      <span className="mt-[1px] text-[9px] text-white/60 transition-colors group-hover:text-brand">▼</span>
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <LanguageSwitcher className="flex-shrink-0" />
      </div>
    </header>
  );
}
