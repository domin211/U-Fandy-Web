export type Language = 'cs' | 'en';

type Highlight = {
  title: string;
  description: string;
};

type HeroContent = {
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

type IntroContent = {
  heading: string;
  paragraphs: string[];
  highlights: Highlight[];
};

type AccommodationContent = {
  heading: string;
  intro: string[];
  rooms: {
    name: string;
    description: string;
    amenities: string[];
  }[];
  note: string;
};

type RestaurantContent = {
  heading: string;
  intro: string[];
  sections: {
    title: string;
    description: string;
  }[];
  reservationNote: string;
};

type WellnessContent = {
  heading: string;
  intro: string[];
  experiences: Highlight[];
  wellnessNote: string;
};

type ExperiencesContent = {
  heading: string;
  intro: string[];
  tips: Highlight[];
};

type ContactContent = {
  heading: string;
  intro: string;
  addressHeading: string;
  addressLines: string[];
  contactsHeading: string;
  contacts: {
    label: string;
    value: string;
    href: string;
  }[];
  openingHeading: string;
  openingLines: string[];
};

type FooterContent = {
  claim: string;
  address: string;
  phone: string;
  email: string;
  opening: string;
  newsHeading: string;
  newsText: string;
  rights: string;
};

type NavigationContent = {
  home: string;
  accommodation: string;
  restaurant: string;
  wellness: string;
  experiences: string;
  contact: string;
};

type HomeContent = {
  hero: HeroContent;
  intro: IntroContent;
};

export type Translation = {
  navigation: NavigationContent;
  footer: FooterContent;
  home: HomeContent;
  accommodation: AccommodationContent;
  restaurant: RestaurantContent;
  wellness: WellnessContent;
  experiences: ExperiencesContent;
  contact: ContactContent;
  languageNames: Record<Language, string>;
};

export const translations: Record<Language, Translation> = {
  cs: {
    navigation: {
      home: 'Domů',
      accommodation: 'Ubytování',
      restaurant: 'Restaurace',
      wellness: 'Wellness',
      experiences: 'Zážitky',
      contact: 'Kontakt'
    },
    footer: {
      claim: 'Penzion, restaurace a wellness U Fandy',
      address: 'Novohradská 136, 373 33 Nové Hrady',
      phone: '+420 602 184 540',
      email: 'info@u-fandy.cz',
      opening: 'Otevřeno denně dle aktuální nabídky a rezervací.',
      newsHeading: 'Novinky',
      newsText:
        'Sledujte nás na sociálních sítích, aby vám neunikly víkendové speciality, degustační menu ani zvýhodněné balíčky.',
      rights: 'Všechna práva vyhrazena.'
    },
    home: {
      hero: {
        title: 'Penzion U Fandy',
        subtitle:
          'Rodinný penzion v historických Nových Hradech s pohodlným ubytováním, poctivou kuchyní a privátním wellness.',
        ctaPrimary: 'Rezervovat pobyt',
        ctaSecondary: 'Naše služby'
      },
      intro: {
        heading: 'Vítejte u Fandy',
        paragraphs: [
          'U Fandy je útulný penzion nacházející se v centru Nových Hradů, jen pár kroků od renesančního zámku a ticha Novohradských hor.',
          'Nabízíme stylově zařízené pokoje, domácí kuchyni zaměřenou na regionální suroviny a relaxaci ve vlastním wellness. O vaši pohodovou dovolenou se stará rodina, která penzion provozuje s láskou a respektem k místní tradici.'
        ],
        highlights: [
          {
            title: 'Komfortní ubytování',
            description: 'Dvoulůžkové pokoje i rodinné apartmány s vlastní koupelnou, Wi‑Fi a bohatou snídaní.'
          },
          {
            title: 'Domácí kuchyně',
            description: 'Restaurace s českými klasikami, sezónními specialitami a víny od českých vinařů.'
          },
          {
            title: 'Privátní wellness',
            description: 'Vířivka, sauna i masáže jen pro vás. Dopřejte si chvíli klidu po výletech po Novohradsku.'
          }
        ]
      }
    },
    accommodation: {
      heading: 'Ubytování',
      intro: [
        'Pokoje penzionu U Fandy jsou zařízené v příjemném venkovském stylu s důrazem na pohodlí a praktické detaily.',
        'Všichni hosté mají v ceně bohatou snídani, připojení k Wi‑Fi a možnost využít privátní wellness. Po domluvě rádi připravíme dětskou postýlku i bezlepkové pečivo.'
      ],
      rooms: [
        {
          name: 'Dvoulůžkové pokoje',
          description: 'Ideální pro páry nebo jednotlivce. Pohodlné postele, vlastní koupelna se sprchou a výhledem do klidného dvora.',
          amenities: ['manželská postel nebo dvě samostatná lůžka', 'koupelna se sprchou', 'televize a Wi‑Fi', 'snídaně v ceně']
        },
        {
          name: 'Rodinný apartmán',
          description: 'Prostorný apartmán se dvěma ložnicemi a obývacím koutem s pohovkou.',
          amenities: ['maximálně čtyři osoby', 'kuchyňský kout s lednicí', 'koupelna s vanou', 'možnost přistýlky']
        },
        {
          name: 'Podkrovní studio',
          description: 'Romantický pokoj s dřevěnými trámy a výhledem na novohradské náměstí.',
          amenities: ['otevřený prostor s posezením', 'koupelna s vanou', 'klimatizace', 'privátní vstup do wellness']
        }
      ],
      note: 'Pro rezervaci ubytování nás kontaktujte telefonicky nebo e‑mailem. Pobyt na jednu noc je možný po domluvě.'
    },
    restaurant: {
      heading: 'Restaurace',
      intro: [
        'Restaurace U Fandy navazuje na tradici jihočeské kuchyně. Vaříme z čerstvých surovin od místních farmářů a rádi připravujeme menu podle sezóny.',
        'V nabídce nechybí domácí dezerty, polední menu ani moravská i zahraniční vína. Každý víkend pro vás chystáme tematické speciality.'
      ],
      sections: [
        {
          title: 'Poctivá česká kuchyně',
          description: 'Svíčková, vepřová pečeně i domácí knedlíky připravené podle rodinných receptů.'
        },
        {
          title: 'Sezónní speciality',
          description: 'V létě lehké saláty a bylinkové limonády, na podzim zvěřina a houbové menu.'
        },
        {
          title: 'Sladká tečka',
          description: 'Domácí koláče, lívance s tvarohem nebo náš vyhlášený jablečný štrúdl.'
        }
      ],
      reservationNote: 'Rezervace stolů přijímáme na telefonu +420 602 184 540. Rádi zajistíme oslavy i firemní večírky.'
    },
    wellness: {
      heading: 'Wellness',
      intro: [
        'Po aktivním dni v Novohradských horách si dopřejte odpočinek v našem privátním wellness. V klidném prostoru kombinujeme vodní relaxaci, teplo sauny i profesionální masáže.',
        'Wellness je určeno pouze pro ubytované hosty po předchozí rezervaci. Připravíme pro vás osušky, župany i drobné občerstvení.'
      ],
      experiences: [
        {
          title: 'Vířivka s výhledem',
          description: 'Hydromasážní vana pro dva až čtyři hosty s barevným podsvícením.'
        },
        {
          title: 'Finská a infra sauna',
          description: 'Střídání tepla a ochlazení posiluje imunitu a uvolňuje svaly po celodenním výletu.'
        },
        {
          title: 'Masáže na přání',
          description: 'Klasická, sportovní i relaxační masáž v podání zkušených terapeutů.'
        }
      ],
      wellnessNote: 'Balíčky wellness služeb si můžete rezervovat společně s ubytováním.'
    },
    experiences: {
      heading: 'Zážitky v okolí',
      intro: [
        'Novohradské hory nabízejí desítky kilometrů cyklotras, lesy plné hub a historické památky. Rádi vám poradíme, kam se vydat.',
        'Penzion U Fandy je ideálním výchozím místem pro objevování přírody i kulturních zajímavostí regionu.'
      ],
      tips: [
        {
          title: 'Nové Hrady',
          description: 'Renesanční zámek, klášter s knihovnou i přírodní park Terčino údolí.'
        },
        {
          title: 'Pohraniční opevnění',
          description: 'Naučné stezky po stopách vojenské historie a výhledy do rakouského pohraničí.'
        },
        {
          title: 'Cyklistika a turistika',
          description: 'Dobře značené trasy pro rodiny i sportovce, možnost zapůjčení kol v penzionu.'
        }
      ]
    },
    contact: {
      heading: 'Kontakt',
      intro: 'Napište nebo zavolejte, rádi vám připravíme pobyt podle vašich představ.',
      addressHeading: 'Najdete nás',
      addressLines: ['Penzion U Fandy', 'Novohradská 136', '373 33 Nové Hrady'],
      contactsHeading: 'Kontaktujte nás',
      contacts: [
        {
          label: 'Telefon',
          value: '+420 602 184 540',
          href: 'tel:+420602184540'
        },
        {
          label: 'E-mail',
          value: 'info@u-fandy.cz',
          href: 'mailto:info@u-fandy.cz'
        }
      ],
      openingHeading: 'Otevírací doba restaurace',
      openingLines: ['Pondělí – Neděle: 11:00 – 22:00 (dle rezervací)', 'Snídaně pro hosty: 07:30 – 09:30']
    },
    languageNames: {
      cs: 'Čeština',
      en: 'English'
    }
  },
  en: {
    navigation: {
      home: 'Home',
      accommodation: 'Accommodation',
      restaurant: 'Restaurant',
      wellness: 'Wellness',
      experiences: 'Experiences',
      contact: 'Contact'
    },
    footer: {
      claim: 'U Fandy Guesthouse, Restaurant & Wellness',
      address: 'Novohradská 136, 373 33 Nové Hrady, Czechia',
      phone: '+420 602 184 540',
      email: 'info@u-fandy.cz',
      opening: 'Open daily subject to current menu and reservations.',
      newsHeading: 'News',
      newsText:
        'Follow us on social media to catch our weekend specials, tasting menus and seasonal wellness offers.',
      rights: 'All rights reserved.'
    },
    home: {
      hero: {
        title: 'Pension U Fandy',
        subtitle:
          'A family-run guesthouse in historic Nové Hrady with cosy rooms, honest local cuisine and a private wellness zone.',
        ctaPrimary: 'Book your stay',
        ctaSecondary: 'Discover our services'
      },
      intro: {
        heading: 'Welcome to U Fandy',
        paragraphs: [
          'U Fandy is a charming guesthouse located in the centre of Nové Hrady, just a few steps from the Renaissance chateau and the quiet countryside of the Novohradské Mountains.',
          'We offer stylish rooms, a restaurant focused on regional produce and moments of rest in our private wellness. Our family looks after every detail to make your holiday carefree.'
        ],
        highlights: [
          {
            title: 'Comfortable rooms',
            description: 'Double rooms and family apartments with private bathroom, Wi-Fi and generous breakfast.'
          },
          {
            title: 'Homestyle cuisine',
            description: 'A restaurant serving Czech classics, seasonal specials and a curated wine list.'
          },
          {
            title: 'Private wellness',
            description: 'Hot tub, sauna and massages just for you after a day of exploring the Novohradsko region.'
          }
        ]
      }
    },
    accommodation: {
      heading: 'Accommodation',
      intro: [
        'Rooms at Pension U Fandy follow a cosy country style with an emphasis on comfort and smart details.',
        'Breakfast, Wi-Fi access and the option to book the private wellness are included for all guests. We are happy to provide a baby cot or gluten-free pastry upon request.'
      ],
      rooms: [
        {
          name: 'Double rooms',
          description: 'Perfect for couples or solo travellers. Comfortable beds, private bathroom with shower and views of the peaceful courtyard.',
          amenities: ['double or twin beds', 'bathroom with shower', 'TV and Wi-Fi', 'breakfast included']
        },
        {
          name: 'Family apartment',
          description: 'A spacious apartment with two bedrooms and a lounge area with sofa.',
          amenities: ['up to four guests', 'kitchenette with fridge', 'bathroom with bathtub', 'extra bed available']
        },
        {
          name: 'Attic studio',
          description: 'A romantic studio with wooden beams overlooking the main square of Nové Hrady.',
          amenities: ['open-plan layout with seating', 'bathroom with bathtub', 'air conditioning', 'private wellness access']
        }
      ],
      note: 'Please contact us by phone or e-mail to arrange your reservation. One-night stays are available upon agreement.'
    },
    restaurant: {
      heading: 'Restaurant',
      intro: [
        'The U Fandy restaurant continues the South Bohemian culinary tradition. We cook with fresh ingredients from local farmers and design our menu around the seasons.',
        'Expect homemade desserts, daily lunch specials and a selection of Moravian and international wines. Every weekend we prepare themed menus for our guests.'
      ],
      sections: [
        {
          title: 'Honest Czech classics',
          description: 'Beef sirloin in cream sauce, roast pork and dumplings made from treasured family recipes.'
        },
        {
          title: 'Seasonal creations',
          description: 'Light summer salads and herbal lemonades, autumn game dishes and mushroom feasts.'
        },
        {
          title: 'Sweet treats',
          description: 'Homemade cakes, pancakes with curd cheese and our signature apple strudel.'
        }
      ],
      reservationNote: 'Call +420 602 184 540 to book your table. We are happy to arrange celebrations or company dinners.'
    },
    wellness: {
      heading: 'Wellness',
      intro: [
        'After an active day in the Novohradské Mountains, unwind in our private wellness area. The calm space combines water relaxation, sauna heat and professional massages.',
        'The wellness zone is reserved for house guests with prior booking. We prepare towels, robes and small refreshments for you.'
      ],
      experiences: [
        {
          title: 'Hot tub with a view',
          description: 'Hydromassage tub for two to four guests with atmospheric lighting.'
        },
        {
          title: 'Finnish & infrared sauna',
          description: 'Alternate heat and cooling to boost immunity and relax your muscles after a day outdoors.'
        },
        {
          title: 'Tailor-made massages',
          description: 'Classic, sports and relaxing massages delivered by experienced therapists.'
        }
      ],
      wellnessNote: 'You can reserve wellness packages together with your accommodation.'
    },
    experiences: {
      heading: 'Things to do',
      intro: [
        'The Novohradsko region invites you to explore countless cycling paths, forests full of mushrooms and historical monuments. We are ready to recommend trips that suit your plans.',
        'Pension U Fandy is the ideal base for discovering both the nature and culture of South Bohemia.'
      ],
      tips: [
        {
          title: 'Nové Hrady town',
          description: 'Visit the Renaissance chateau, the monastery library and the romantic Terčino valley park.'
        },
        {
          title: 'Border fortifications',
          description: 'Educational trails following the military history and views across the Austrian border.'
        },
        {
          title: 'Cycling & hiking',
          description: 'Well-marked routes for families and athletes, bike rental available at the guesthouse.'
        }
      ]
    },
    contact: {
      heading: 'Contact',
      intro: 'Call or write to us and we will tailor a stay to match your wishes.',
      addressHeading: 'Find us',
      addressLines: ['Pension U Fandy', 'Novohradská 136', '373 33 Nové Hrady', 'Czech Republic'],
      contactsHeading: 'Get in touch',
      contacts: [
        {
          label: 'Phone',
          value: '+420 602 184 540',
          href: 'tel:+420602184540'
        },
        {
          label: 'E-mail',
          value: 'info@u-fandy.cz',
          href: 'mailto:info@u-fandy.cz'
        }
      ],
      openingHeading: 'Restaurant opening hours',
      openingLines: ['Monday – Sunday: 11:00 – 22:00 (depending on reservations)', 'Breakfast for guests: 07:30 – 09:30']
    },
    languageNames: {
      cs: 'Czech',
      en: 'English'
    }
  }
};
