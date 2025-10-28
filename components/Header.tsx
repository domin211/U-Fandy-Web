'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';
import { useEffect, useRef } from 'react';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap'
});

const navLinks = [
  { href: '/', label: 'Domů', hasDropdown: true },
  { href: '/ubytovani', label: 'Ubytování' },
  { href: '/restaurace', label: 'Restaurace' },
  { href: '/galerie', label: 'Galerie' },
  { href: '/wellness', label: 'Wellness' },
  { href: '/bowling', label: 'Bowling' },
  { href: '/sal', label: 'Sál' },
  { href: '/rezervovat-pobyt', label: 'Rezervovat pobyt', variant: 'cta' as const }
];

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const headerElement = headerRef.current;

    if (!headerElement) {
      return undefined;
    }

    const updateOffset = () => {
      document.documentElement.style.setProperty(
        '--header-offset',
        `${headerElement.offsetHeight}px`
      );
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
    <header
      ref={headerRef}
      className="sticky top-0 z-40 w-full bg-black/90 text-white"
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
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
          className={`hidden items-center lg:flex ${montserrat.className}`}
          aria-label="Hlavní navigace"
        >
          <ul className="flex items-center">
            {navLinks.map((link) => (
              <li key={link.href} className="mx-[3px]">
                <Link
                  href={link.href}
                  className={`group relative flex items-center gap-1 px-[10px] py-3 text-[15px] font-normal uppercase text-[#969696] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
                    link.variant === 'cta'
                      ? 'outline outline-1 outline-brand text-[#bebebe] hover:bg-brand hover:text-white'
                      : 'hover:text-brand'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.hasDropdown ? (
                    <span className="mt-[1px] text-[9px] text-white/60 transition-colors group-hover:text-brand">▼</span>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <details className={`relative lg:hidden ${montserrat.className}`}>
          <summary className="inline-flex cursor-pointer items-center justify-center rounded-full border border-white/20 px-4 py-2 text-sm font-medium uppercase text-white/80 transition hover:border-brand hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
            Menu
          </summary>
          <nav className="absolute right-0 mt-3 w-64 rounded-3xl border border-black/70 bg-black/90 p-4 shadow-soft">
            <ul className="space-y-3 text-sm font-medium uppercase text-white/80">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block rounded-2xl px-3 py-2 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
                      link.variant === 'cta'
                        ? 'border border-brand text-[#bebebe] hover:bg-brand hover:text-white'
                        : 'hover:bg-white/10 hover:text-brand'
                    }`}
                  >
                    <span className="flex items-center gap-1">
                      <span>{link.label}</span>
                      {link.hasDropdown ? (
                        <span className="text-[10px] text-white/60">▼</span>
                      ) : null}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
