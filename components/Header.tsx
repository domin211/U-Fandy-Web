'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

const navLinks = [
  { href: '/', label: 'Domů' },
  { href: '/ubytovani', label: 'Ubytování' },
  { href: '/restaurace', label: 'Restaurace' },
  { href: '/bowling', label: 'Bowling' },
  { href: '/sal', label: 'Sál' },
  { href: '/kariera', label: 'Kariéra' },
  { href: '/kontakt', label: 'Kontakt' }
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
      className="sticky top-0 z-40 w-full border-b border-black/10 bg-topbar/95 text-white backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
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
            className="h-[71px] w-auto transition group-hover:opacity-90"
          />
          <span className="sr-only">U Fandy Hotel &amp; Restaurant</span>
        </Link>
        <nav className="hidden items-center gap-6 text-xs font-semibold uppercase tracking-[0.32em] text-white/70 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="/darkovy-poukaz"
            className="hidden rounded-full border border-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-white transition hover:border-brand hover:bg-brand hover:text-topbar focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand lg:inline-flex"
          >
            Dárkový poukaz
          </Link>
          <details className="relative lg:hidden">
            <summary className="inline-flex cursor-pointer items-center justify-center rounded-full border border-white/20 p-2 text-white/80 transition hover:border-brand hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
              Menu
            </summary>
            <nav className="absolute right-0 mt-3 w-56 rounded-3xl border border-black/10 bg-topbar p-4 shadow-soft">
              <ul className="space-y-3 text-sm font-medium text-white/80">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block rounded-2xl px-3 py-2 transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/darkovy-poukaz"
                    className="block rounded-2xl border border-white/20 px-3 py-2 text-center font-semibold text-white transition hover:border-brand hover:bg-brand hover:text-topbar"
                  >
                    Dárkový poukaz
                  </Link>
                </li>
              </ul>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
