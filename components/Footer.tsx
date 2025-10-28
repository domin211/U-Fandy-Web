import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-topbar text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:justify-between lg:py-12">
        <div className="max-w-md space-y-4">
          <p className="text-lg font-semibold">U Fandy</p>
          <p className="text-sm text-white/70">
            Hotel, restaurace a sportovní zázemí v srdci Jeseníků. Spojujeme komfortní ubytování, kulinářské zážitky a aktivní
            odpočinek.
          </p>
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} U Fandy. Všechna práva vyhrazena.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm text-white/70 sm:grid-cols-3">
          <div>
            <p className="mb-3 font-semibold">Navigace</p>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="transition hover:text-brand-light">
                  Domů
                </Link>
              </li>
              <li>
                <Link href="/ubytovani" className="transition hover:text-brand-light">
                  Ubytování
                </Link>
              </li>
              <li>
                <Link href="/restaurace" className="transition hover:text-brand-light">
                  Restaurace
                </Link>
              </li>
              <li>
                <Link href="/bowling" className="transition hover:text-brand-light">
                  Bowling
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-3 font-semibold">Kontakt</p>
            <ul className="space-y-2">
              <li>Malá Morava 123</li>
              <li>788 33 Malá Morava</li>
              <li>
                <a href="tel:+420000000000" className="transition hover:text-brand-light">
                  +420 000 000 000
                </a>
              </li>
              <li>
                <a href="mailto:info@u-fandy.cz" className="transition hover:text-brand-light">
                  info@u-fandy.cz
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-3 font-semibold">Právní</p>
            <ul className="space-y-2">
              <li>
                <Link href="/cookies" className="transition hover:text-brand-light">
                  Cookies
                </Link>
              </li>
              <li>
                <Link href="/zasady-ochrany-osobnich-udaju" className="transition hover:text-brand-light">
                  Ochrana údajů
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
