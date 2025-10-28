'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { Locale } from '@/lib/i18n/config';
import { localeLabels, locales } from '@/lib/i18n/config';
import { useCurrentLocale, useDictionary } from '@/lib/i18n/dictionary-context';

interface LanguageSwitcherProps {
  className?: string;
  linkClassName?: (isActive: boolean) => string;
  variant?: 'dropdown' | 'list';
}

const localeFlags: Record<Locale, string> = {
  cs: '🇨🇿',
  en: '🇬🇧',
  pl: '🇵🇱',
  de: '🇩🇪',
  sk: '🇸🇰'
};

export default function LanguageSwitcher({
  className,
  linkClassName,
  variant = 'dropdown'
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const activeLocale = useCurrentLocale();
  const dictionary = useDictionary();

  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const closeDropdown = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (variant !== 'dropdown' || !isOpen) {
      return undefined;
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        closeDropdown();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeDropdown, isOpen, variant]);

  useEffect(() => {
    closeDropdown();
  }, [closeDropdown, pathname]);

  const defaultListLinkClassName = useCallback(
    (isActive: boolean) =>
      `rounded-full px-3 py-1 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
        isActive ? 'bg-white text-topbar shadow-soft' : 'hover:bg-white/10'
      }`,
    []
  );

  const defaultDropdownLinkClassName = useCallback(
    (isActive: boolean) =>
      `flex w-full items-center gap-2 px-4 py-2 text-xs uppercase tracking-[0.2em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
        isActive ? 'bg-white/10 text-white' : 'text-white/80 hover:bg-white/10 hover:text-white'
      }`,
    []
  );

  const resolveLinkClassName = useMemo(() => {
    if (linkClassName) {
      return linkClassName;
    }

    return variant === 'dropdown' ? defaultDropdownLinkClassName : defaultListLinkClassName;
  }, [defaultDropdownLinkClassName, defaultListLinkClassName, linkClassName, variant]);

  if (variant === 'list') {
    return (
      <div className={className} aria-label={dictionary.common.header.localeSwitcherLabel}>
        {locales.map((locale) => {
          const isActive = locale === activeLocale;
          return (
            <Link key={locale} href={pathname || '/'} locale={locale} className={resolveLinkClassName(isActive)}>
              <span className="flex items-center gap-2">
                <span aria-hidden className="text-lg leading-none">{localeFlags[locale]}</span>
                <span>{localeLabels[locale]}</span>
              </span>
            </Link>
          );
        })}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative hidden lg:block ${className ?? ''}`.trim()}
      aria-label={dictionary.common.header.localeSwitcherLabel}
    >
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/70 transition hover:border-brand hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span aria-hidden className="text-lg leading-none">
          {localeFlags[activeLocale]}
        </span>
        <span>{localeLabels[activeLocale]}</span>
        <svg
          aria-hidden
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`h-3 w-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.939l3.71-3.71a.75.75 0 1 1 1.06 1.061l-4.24 4.243a.75.75 0 0 1-1.06 0L5.25 8.27a.75.75 0 0 1-.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={`absolute right-0 z-50 mt-3 w-52 overflow-hidden rounded-3xl border border-black/60 bg-black/90 shadow-soft backdrop-blur ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <ul role="listbox" className="py-2">
          {locales.map((locale) => {
            const isActive = locale === activeLocale;

            return (
              <li key={locale}>
                <Link
                  href={pathname || '/'}
                  locale={locale}
                  className={resolveLinkClassName(isActive)}
                  onClick={closeDropdown}
                >
                  <span className="flex items-center gap-2">
                    <span aria-hidden className="text-lg leading-none">
                      {localeFlags[locale]}
                    </span>
                    <span>{localeLabels[locale]}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
