import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:justify-between lg:py-12">
        <div className="max-w-md space-y-4">
          <p className="text-lg font-semibold text-white">U Fandy</p>
          <p className="text-sm text-slate-300">
            Hotel, restaurace a sportovní zázemí v srdci Jeseníků. Spojujeme komfortní ubytování, kulinářské zážitky a aktivní
            odpočinek.
          </p>
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} U Fandy. Všechna práva vyhrazena.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm text-slate-300 sm:grid-cols-3">
          <div>
            <p className="mb-3 font-semibold text-white">Navigace</p>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white">
                  Domů
                </Link>
              </li>
              <li>
                <Link href="/ubytovani" className="hover:text-white">
                  Ubytování
                </Link>
              </li>
              <li>
                <Link href="/restaurace" className="hover:text-white">
                  Restaurace
                </Link>
              </li>
              <li>
                <Link href="/bowling" className="hover:text-white">
                  Bowling
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-3 font-semibold text-white">Kontakt</p>
            <ul className="space-y-2">
              <li>Malá Morava 123</li>
              <li>788 33 Malá Morava</li>
              <li>
                <a href="tel:+420000000000" className="hover:text-white">
                  +420 000 000 000
                </a>
              </li>
              <li>
                <a href="mailto:info@u-fandy.cz" className="hover:text-white">
                  info@u-fandy.cz
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-3 font-semibold text-white">Právní</p>
            <ul className="space-y-2">
              <li>
                <Link href="/cookies" className="hover:text-white">
                  Cookies
                </Link>
              </li>
              <li>
                <Link href="/zasady-ochrany-osobnich-udaju" className="hover:text-white">
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
