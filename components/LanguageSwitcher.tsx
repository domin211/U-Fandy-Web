'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { localeLabels, locales } from '@/lib/i18n/config';
import { useCurrentLocale, useDictionary } from '@/lib/i18n/dictionary-context';

interface LanguageSwitcherProps {
  className?: string;
  linkClassName?: (isActive: boolean) => string;
}

export default function LanguageSwitcher({
  className = 'hidden items-center gap-1 text-xs uppercase tracking-[0.2em] text-white/70 lg:flex',
  linkClassName = (isActive: boolean) =>
    `rounded-full px-3 py-1 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
      isActive ? 'bg-white text-topbar shadow-soft' : 'hover:bg-white/10'
    }`
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const activeLocale = useCurrentLocale();
  const dictionary = useDictionary();

  return (
    <div className={className} aria-label={dictionary.common.header.localeSwitcherLabel}>
      {locales.map((locale) => {
        const isActive = locale === activeLocale;
        return (
          <Link key={locale} href={pathname || '/'} locale={locale} className={linkClassName(isActive)}>
            {localeLabels[locale]}
          </Link>
        );
      })}
    </div>
  );
}
