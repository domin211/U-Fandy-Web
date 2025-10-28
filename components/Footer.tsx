'use client';

import Link from 'next/link';
import type { NavLink } from '@/messages/cs';
import { useDictionary } from '@/lib/i18n/dictionary-context';

export default function Footer() {
  const dictionary = useDictionary();
  const { footer, brandName } = dictionary.common;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 bg-topbar text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:justify-between lg:py-12">
        <div className="max-w-md space-y-4">
          <p className="text-lg font-semibold">{brandName}</p>
          <p className="text-sm text-white/70">{footer.description}</p>
          <p className="text-sm text-white/60">{footer.rights.replace('{year}', currentYear.toString())}</p>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm text-white/70 sm:grid-cols-3">
          <div>
            <p className="mb-3 font-semibold">{footer.navigation.title}</p>
            <ul className="space-y-2">
              {footer.navigation.links.map((link: NavLink) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-brand-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-3 font-semibold">{footer.contact.title}</p>
            <ul className="space-y-2">
              {footer.contact.items.map((item: string) => {
                if (item.startsWith('+')) {
                  return (
                    <li key={item}>
                      <a href={`tel:${item.replace(/\s+/g, '')}`} className="transition hover:text-brand-light">
                        {item}
                      </a>
                    </li>
                  );
                }

                if (item.includes('@')) {
                  return (
                    <li key={item}>
                      <a href={`mailto:${item}`} className="transition hover:text-brand-light">
                        {item}
                      </a>
                    </li>
                  );
                }

                return <li key={item}>{item}</li>;
              })}
            </ul>
          </div>
          <div>
            <p className="mb-3 font-semibold">{footer.legal.title}</p>
            <ul className="space-y-2">
              {footer.legal.links.map((link: NavLink) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-brand-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
