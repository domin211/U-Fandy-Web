'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

import { useDictionary } from '@/lib/i18n/dictionary-context';

function resolveContactItem(item: string) {
  const trimmed = item.trim();

  if (trimmed.includes('@')) {
    const href = `mailto:${trimmed}`;
    return { href, label: trimmed } as const;
  }

  const numeric = trimmed.replace(/[^+\d]/g, '');
  if (numeric.length >= 5 && /^\+?\d+$/.test(numeric)) {
    const href = `tel:${numeric}`;
    return { href, label: trimmed } as const;
  }

  return null;
}

export default function Footer() {
  const dictionary = useDictionary();
  const locale = useLocale();
  const { brandName, footer } = dictionary.common;
  const currentYear = new Date().getFullYear();

  const focusStyles =
    'transition hover:text-brand-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-light';

  const localePrefix = `/${locale}`;
  const localizeHref = (href: string) => {
    if (!href.startsWith('/')) {
      return href;
    }

    if (href === '/') {
      return localePrefix;
    }

    const normalized = href.replace(/^\/+/, '');
    return `${localePrefix}/${normalized}`;
  };

  const rightsText = footer.rights.replace('{year}', currentYear.toString());

  return (
    <footer className="border-t border-black/20 bg-topbar text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-14">
        <div className="grid gap-10 text-sm text-white/70 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <p className="text-lg font-semibold text-white">{brandName}</p>
            <p>{footer.description}</p>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white">
              {footer.navigation.title}
            </p>
            <nav aria-label={footer.navigation.title}>
              <ul className="grid gap-2 sm:grid-cols-2 sm:gap-3">
                {footer.navigation.links.map((link) => (
                  <li key={link.href}>
                    <Link href={localizeHref(link.href)} className={focusStyles}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white">
              {footer.contact.title}
            </p>
            <ul className="space-y-2" aria-label={footer.contact.title}>
              {footer.contact.items.map((item, index) => {
                const link = resolveContactItem(item);

                return (
                  <li key={`${item}-${index}`}>
                    {link ? (
                      <a href={link.href} className={focusStyles}>
                        {link.label}
                      </a>
                    ) : (
                      <span>{item}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white">
              {footer.legal.title}
            </p>
            <ul className="space-y-2" aria-label={footer.legal.title}>
              {footer.legal.links.map((link) => (
                <li key={link.href}>
                  <Link href={localizeHref(link.href)} className={focusStyles}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-3 py-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>{rightsText}</p>
          <p>{brandName}</p>
        </div>
      </div>
    </footer>
  );
}
