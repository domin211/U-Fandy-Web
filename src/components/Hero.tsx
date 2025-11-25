import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

export default function Hero() {
  const {
    content: {
      home: { hero }
    },
    language
  } = useLanguage();

  return (
    <section className="relative h-[70vh] min-h-[480px] flex items-center justify-center overflow-hidden bg-gray-900 text-white">
      <img
        src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt="Penzion U Fandy"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 max-w-3xl px-6 text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-serif font-semibold">{hero.title}</h1>
        <p className="text-lg md:text-2xl leading-relaxed">{hero.subtitle}</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/contact"
            className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md text-lg font-medium transition-colors"
          >
            {hero.ctaPrimary}
          </Link>
          <Link
            to="/accommodation"
            className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-md text-lg font-medium border border-white/40 transition-colors"
          >
            {hero.ctaSecondary}
          </Link>
        </div>
        <p className="text-sm uppercase tracking-[0.35em] text-white/70">
          {language === 'cs' ? 'Novohradské hory · Jižní Čechy' : 'Novohradské Mountains · South Bohemia'}
        </p>
      </div>
    </section>
  );
}
