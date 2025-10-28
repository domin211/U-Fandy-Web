import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Domů' },
  { href: '/ubytovani', label: 'Ubytování' },
  { href: '/restaurace', label: 'Restaurace' },
  { href: '/bowling', label: 'Bowling' },
  { href: '/sal', label: 'Sal' },
  { href: '/kariera', label: 'Kariéra' },
  { href: '/kontakt', label: 'Kontakt' }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="text-lg font-semibold tracking-wide text-white">
          U Fandy
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium uppercase tracking-wide text-slate-200 lg:flex">
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
            href="/rezervace"
            className="hidden rounded-full bg-brand px-5 py-2 text-sm font-semibold text-slate-950 shadow-soft transition hover:bg-brand-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-light lg:inline-flex"
          >
            Rezervace
          </Link>
          <details className="relative lg:hidden">
            <summary className="inline-flex cursor-pointer items-center justify-center rounded-full border border-white/20 p-2 text-slate-200 transition hover:border-brand hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
              Menu
            </summary>
            <nav className="absolute right-0 mt-3 w-56 rounded-3xl border border-white/10 bg-slate-950/95 p-4 shadow-soft">
              <ul className="space-y-3 text-sm font-medium text-slate-200">
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
                    href="/rezervace"
                    className="block rounded-2xl bg-brand px-3 py-2 text-center font-semibold text-slate-950"
                  >
                    Rezervace
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
