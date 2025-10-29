'use client';

import Link from 'next/link';
import { useDictionary } from '@/lib/i18n/dictionary-context';

const quickLinks = [
  { href: '/', label: 'Domů' },
  { href: '/ubytovani', label: 'Ubytování' },
  { href: '/restaurace', label: 'Restaurace' },
  { href: '/galerie', label: 'Galerie' },
  { href: '/wellness', label: 'Wellness' },
  { href: '/bowling', label: 'Bowling' },
  { href: '/sal', label: 'Sál' }
];

const socialLinks = [
  {
    href: 'https://www.facebook.com',
    label: 'Facebook',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M13.5 9H16l.5-3h-3V4.75c0-.86.17-1.25 1.39-1.25H16.5V1.1C15.94 1.04 15.07 1 14.07 1 11.9 1 10.5 2.24 10.5 4.52V6H8v3h2.5v9H13.5z" />
      </svg>
    )
  },
  {
    href: 'https://www.instagram.com',
    label: 'Instagram',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm5 3.75A4.25 4.25 0 1 1 7.75 12 4.25 4.25 0 0 1 12 7.75zm0 2A2.25 2.25 0 1 0 14.25 12 2.25 2.25 0 0 0 12 9.75zm6.5-3.75a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 18.5 6z" />
      </svg>
    )
  }
];

export default function Footer() {
  const dictionary = useDictionary();
  const { brandName } = dictionary.common;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-topbar text-white">
      <div className="border-t border-white/10">
        <div className="container grid gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr_0.8fr]">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">Kontakt</p>
            <h2 className="text-2xl font-semibold uppercase tracking-[0.25em]">{brandName}</h2>
            <address className="not-italic space-y-2 text-sm text-white/70">
              <p>Lhotka 180</p>
              <p>739 47 Lhotka</p>
              <p>
                <a
                  href="tel:+420734123456"
                  className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  +420 734 123 456
                </a>
              </p>
              <p>
                <a
                  href="mailto:recepce@u-fandy.cz"
                  className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  recepce@u-fandy.cz
                </a>
              </p>
            </address>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.href}
                  href={social.href}
                  aria-label={social.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-6 text-sm text-white/70">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">Rychlé odkazy</p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-6 text-sm text-white/70">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">Rezervace</p>
            <p>
              Naše recepce je vám k dispozici každý den od 8:00 do 21:00. Zavolejte nebo napište a rádi vám poradíme s výběrem
              pokoje i doplňkovými službami.
            </p>
            <Link
              href="/rezervovat-pobyt"
              className="btn-base btn-primary inline-flex text-[0.7rem]"
            >
              Rezervovat pobyt
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-3 py-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} {brandName}. Všechna práva vyhrazena.</p>
          <p>
            Web by{' '}
            <a
              href="https://www.u-fandy.cz"
              className="text-white transition hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              Fandy Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
