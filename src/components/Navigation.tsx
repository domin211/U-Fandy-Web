import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Crown } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../i18n/LanguageContext';

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const {
    content: { navigation }
  } = useLanguage();

  const links = [
    { to: '/', label: navigation.home },
    { to: '/accommodation', label: navigation.accommodation },
    { to: '/restaurant', label: navigation.restaurant },
    { to: '/wellness', label: navigation.wellness },
    { to: '/experiences', label: navigation.experiences, submenu: true },
    { to: '/contact', label: navigation.contact }
  ];

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `block px-4 py-2 text-sm font-medium uppercase tracking-wider transition-colors ${
      isActive ? 'text-red-600' : 'text-gray-300 hover:text-white'
    }`;

  return (
    <header className="sticky top-0 z-50 bg-zinc-900 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <Crown className="w-10 h-10 text-yellow-500" fill="currentColor" />
            <div className="text-white">
              <div className="text-3xl font-serif italic font-bold">U Fandy</div>
              <div className="text-xs tracking-widest text-gray-400">wellness & restaurant</div>
            </div>
          </Link>
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClasses} end={link.to === '/'}>
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />
            <Link
              to="/contact"
              className="px-6 py-2 border-2 border-red-600 text-red-600 text-sm font-semibold uppercase tracking-wider hover:bg-red-600 hover:text-white transition-colors"
            >
              Rezervovat pobyt
            </Link>
          </div>
          <button
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-300"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-zinc-800 bg-zinc-900">
          <div className="px-4 py-4 space-y-2">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={linkClasses}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-4 border-t border-zinc-800">
              <LanguageSwitcher />
            </div>
            <Link
              to="/contact"
              className="block mt-4 px-6 py-2 border-2 border-red-600 text-red-600 text-sm font-semibold uppercase tracking-wider hover:bg-red-600 hover:text-white transition-colors text-center"
              onClick={() => setOpen(false)}
            >
              Rezervovat pobyt
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
