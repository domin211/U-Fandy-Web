import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

export default function Footer() {
  const {
    content: { footer, navigation }
  } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-4">
        <div className="space-y-3">
          <h2 className="text-xl font-serif font-semibold text-amber-300">{footer.claim}</h2>
          <p className="text-white/70">{footer.address}</p>
          <a href="tel:+420602184540" className="block text-white hover:text-amber-300">
            {footer.phone}
          </a>
          <a href="mailto:info@u-fandy.cz" className="block text-white hover:text-amber-300">
            {footer.email}
          </a>
          <p className="text-white/60 text-sm">{footer.opening}</p>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-[0.25em] text-white/60 mb-4">Menu</h3>
          <ul className="space-y-2 text-white/80">
            <li>
              <Link to="/" className="hover:text-amber-300">
                {navigation.home}
              </Link>
            </li>
            <li>
              <Link to="/accommodation" className="hover:text-amber-300">
                {navigation.accommodation}
              </Link>
            </li>
            <li>
              <Link to="/restaurant" className="hover:text-amber-300">
                {navigation.restaurant}
              </Link>
            </li>
            <li>
              <Link to="/wellness" className="hover:text-amber-300">
                {navigation.wellness}
              </Link>
            </li>
            <li>
              <Link to="/experiences" className="hover:text-amber-300">
                {navigation.experiences}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-amber-300">
                {navigation.contact}
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-sm uppercase tracking-[0.25em] text-white/60 mb-4">{footer.newsHeading}</h3>
          <p className="text-white/70 text-sm mb-4">{footer.newsText}</p>
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/penzionufandy"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-full border border-white/30 hover:border-amber-300 hover:text-amber-300 transition-colors text-sm"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-full border border-white/30 hover:border-amber-300 hover:text-amber-300 transition-colors text-sm"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center text-xs text-white/50">
        © {new Date().getFullYear()} U Fandy. {footer.rights}
      </div>
    </footer>
  );
}
