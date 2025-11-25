import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import { Language, Translation, translations } from './translations';

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  content: Translation;
  availableLanguages: Language[];
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('cs');

  const value = useMemo<LanguageContextValue>(() => {
    return {
      language,
      setLanguage,
      content: translations[language],
      availableLanguages: Object.keys(translations) as Language[]
    };
  }, [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
