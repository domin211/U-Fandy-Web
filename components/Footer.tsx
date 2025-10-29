'use client';

import Link from 'next/link';

const brandName = 'Wellness & Restaurant U Fandy';

const focusStyles =
  'transition hover:text-brand-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-light';

const quickLinks = [
  { href: '/', label: 'Domů' },
  { href: '/ubytovani', label: 'Ubytování' },
  { href: '/restaurace', label: 'Restaurace' },
  { href: '/galerie', label: 'Galerie' },
  { href: '/wellness', label: 'Wellness' },
  { href: '/bowling', label: 'Bowling' },
  { href: '/sal', label: 'Sál' }
] as const;

const socialLinks = [
  {
    href: 'https://www.facebook.com/',
    label: 'Facebook',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M22 12A10 10 0 1 0 10.59 21.9v-6.91H8.08V12h2.51V9.8c0-2.48 1.48-3.85 3.74-3.85 1.08 0 2.22.19 2.22.19v2.43h-1.25c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.99h-2.33v6.91A10 10 0 0 0 22 12" />
      </svg>
    )
  },
  {
    href: 'https://www.instagram.com/',
    label: 'Instagram',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
        <rect x="3.75" y="3.75" width="16.5" height="16.5" rx="4.5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17" cy="7" r="1.2" fill="currentColor" stroke="none" />
      </svg>
    )
  }
] as const;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-black/20 bg-topbar text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-14">
        <div className="grid gap-10 text-sm text-white/70 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <p className="text-lg font-semibold text-white">{brandName}</p>
            <address className="space-y-1 not-italic">
              <p>Lhotka 180</p>
              <p>739 47 Lhotka</p>
              <p>
                <a
                  href="tel:+420733644655"
                  className={focusStyles}
                  aria-label="Zavolat na telefonní číslo +420 733 644 655"
                >
                  (+420) 733 644 655
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@u-fandy.cz"
                  className={focusStyles}
                  aria-label="Napsat na e-mail info@u-fandy.cz"
                >
                  info@u-fandy.cz
                </a>
              </p>
            </address>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white">Rychlé odkazy</p>
            <nav aria-label="Rychlé odkazy">
              <ul className="grid gap-2 sm:grid-cols-2 sm:gap-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={focusStyles}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white">Sledujte nás</p>
            <ul className="flex gap-4" aria-label="Sociální sítě">
              {socialLinks.map((social) => (
                <li key={social.href}>
                  <a
                    href={social.href}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-brand-light hover:text-brand-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-light"
                    aria-label={social.label}
                  >
                    <span className="sr-only">{social.label}</span>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6 text-sm text-white/70">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">Rezervace</p>
            <p>
              Naše recepce je vám k dispozici každý den od 8:00 do 21:00. Zavolejte nebo napište a rádi vám poradíme s výběrem
              pokoje i doplňkovými službami.
            </p>
            <Link href="/rezervovat-pobyt" className="btn-base btn-primary inline-flex text-[0.7rem]">
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

        <div className="container mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/70">© {currentYear} {brandName}</p>
          <p className="text-xs uppercase tracking-[0.25em] text-white/50">powered by …</p>
        </div>
      </div>
    </footer>
  );
}
