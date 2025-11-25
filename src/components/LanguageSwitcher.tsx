import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import type { Language } from '../i18n/translations';

const languageFlags: Record<Language, string> = {
  cs: '🇨🇿',
  en: '🇬🇧'
};

export default function LanguageSwitcher() {
  const { language, setLanguage, availableLanguages, content } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 text-sm border border-zinc-700 text-gray-300 hover:bg-zinc-800 transition-colors"
      >
        <span className="text-lg">{languageFlags[language]}</span>
        <span>{content.languageNames[language]}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-zinc-800 rounded-lg shadow-lg border border-zinc-700 py-1 z-50">
          {availableLanguages.map((lang) => (
            <button
              key={lang}
              type="button"
              onClick={() => handleLanguageChange(lang)}
              className={`w-full flex items-center gap-2 px-4 py-2 text-sm text-left transition-colors ${
                language === lang
                  ? 'bg-red-600 text-white font-medium'
                  : 'text-gray-300 hover:bg-zinc-700'
              }`}
            >
              <span className="text-lg">{languageFlags[lang]}</span>
              <span>{content.languageNames[lang]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
