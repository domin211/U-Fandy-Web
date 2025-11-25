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
      claim: 'Wellness & Restaurant U Fandy',
      address: 'Lhotka 180, 739 47 Lhotka',
      phone: '+420 733 644 655',
      email: 'info@u-fandy.cz',
      opening: 'Otevřeno denně. Bowling a wellness na objednání.',
      newsHeading: 'Novinky',
      newsText:
        'Sledujte nás na Facebooku pro aktuální polední menu a informace o víkendových akcích a grilování.',
      rights: 'Všechna práva vyhrazena.'
    },
    home: {
      hero: {
        title: 'Wellness & Restaurant U Fandy',
        subtitle:
          'Relaxace v srdci Beskyd. Komfortní ubytování, skvělá gastronomie, bowling a wellness centrum pod masívem Ondřejníku.',
        ctaPrimary: 'Rezervovat pobyt',
        ctaSecondary: 'Naše služby'
      },
      intro: {
        heading: 'Vítejte v Beskydech',
        paragraphs: [
          'Nacházíme se v malebné obci Lhotka pod Ondřejníkem. Jsme ideálním místem pro rodinnou dovolenou, romantický víkend i firemní teambuilding.',
          'Kromě stylového ubytování u nás najdete restauraci s pravou italskou pecí na pizzu, dvě bowlingové dráhy a moderní wellness centrum s bazénem.'
        ],
        highlights: [
          {
            title: 'Komfortní ubytování',
            description: 'Moderní pokoje s vlastní koupelnou, Wi-Fi a výhledem na hory. Kapacita až 60 lůžek.'
          },
          {
            title: 'Gastronomie & Pizza',
            description: 'Poctivá česká kuchyně, burgery a pizza přímo z pece na dřevo. Venkovní posezení s hřištěm.'
          },
          {
            title: 'Wellness & Zábava',
            description: 'Vnitřní bazén, vířivka, sauny a dvě profesionální bowlingové dráhy pro vaši zábavu.'
          }
        ]
      }
    },
    accommodation: {
      heading: 'Ubytování',
      intro: [
        'Nabízíme ubytování v nově zrekonstruovaných pokojích, které uspokojí páry, rodiny s dětmi i větší skupiny.',
        'Součástí pobytu je snídaně a pro ubytované hosty nabízíme zvýhodněný vstup do našeho wellness centra.'
      ],
      rooms: [
        {
          name: 'Dvoulůžkové pokoje',
          description: 'Útulné pokoje ideální pro páry. Některé s balkonem a výhledem na Beskydy.',
          amenities: ['manželská postel', 'koupelna se sprchou', 'TV a Wi-Fi', 'pracovní stůl']
        },
        {
          name: 'Pokoj Deluxe s vířivkou',
          description: 'Pro náročnější hosty nebo romantické pobyty. Součástí pokoje je privátní hydromasážní vana.',
          amenities: ['privátní vířivka', 'župany a pantofle', 'minibar', 'luxusní kosmetika']
        },
        {
          name: 'Rodinné apartmány',
          description: 'Víceprostorové pokoje vhodné pro rodiny s dětmi. Dostatek prostoru pro všechny.',
          amenities: ['oddělené ložnice', 'možnost přistýlky', 'prostorná koupelna', 'dětská postýlka na vyžádání']
        }
      ],
      note: 'Rezervace přijímáme telefonicky nebo přes náš online formulář. Check-in od 14:00, check-out do 10:00.'
    },
    restaurant: {
      heading: 'Restaurace',
      intro: [
        'Naše restaurace je vyhlášená nejen skvělou českou kuchyní, ale také pizzou, kterou pečeme v originální italské peci na dřevo.',
        'V létě je k dispozici prostorná terasa s dětským hřištěm, v zimě vás zahřeje krb v hlavním sále.'
      ],
      sections: [
        {
          title: 'Pizza z pece na dřevo',
          description: 'Křupavé těsto, kvalitní suroviny a vůně dřeva. Připravujeme klasické i speciální druhy.'
        },
        {
          title: 'Polední menu a minutky',
          description: 'Každý den čerstvé polední menu a stálý lístek plný steaků, salátů a těstovin.'
        },
        {
          title: 'Oslavy a svatby',
          description: 'Zajistíme catering pro vaši rodinnou oslavu, svatbu nebo firemní večírek v našem sále.'
        }
      ],
      reservationNote: 'Pro rezervaci stolu nebo objednávku pizzy sebou volejte +420 733 644 655.'
    },
    wellness: {
      heading: 'Wellness & Bowling',
      intro: [
        'Odpočiňte si v našem wellness centru nebo se pobavte při hře bowlingu. Nabízíme komplexní služby pro relaxaci i aktivní odpočinek.',
        'Wellness zóna je přístupná i pro veřejnost (nutná rezervace předem).'
      ],
      experiences: [
        {
          title: 'Bazén a Whirlpool',
          description: 'Vnitřní nerezový bazén s protiproudem a relaxační vířivka pro dokonalé uvolnění.'
        },
        {
          title: 'Saunový svět',
          description: 'Finská sauna, parní sauna a ochlazovací bazének. Ideální regenerace po túře.'
        },
        {
          title: 'Bowling',
          description: 'Dvě profesionální dráhy přímo v budově. Skvělá zábava k pivečku a pizze.'
        }
      ],
      wellnessNote: 'Masáže a privátní pronájem wellness je nutné objednat minimálně 24 hodin předem.'
    },
    experiences: {
      heading: 'Tipy na výlet',
      intro: [
        'Lhotka je skvělým výchozím bodem pro turistiku v Beskydech. Ať už pěšky nebo na kole, nudit se nebudete.',
        'Přímo kolem penzionu vedou cyklostezky a turistické trasy na okolní vrcholy.'
      ],
      tips: [
        {
          title: 'Ondřejník',
          description: 'Oblíbený vrchol s krásnými výhledy na Lysou horu a Smrk, dostupný přímo od penzionu.'
        },
        {
          title: 'Hukvaldy',
          description: 'Zřícenina hradu a krásná obora s daňky a liškou Bystrouškou, rodiště Leoše Janáčka.'
        },
        {
          title: 'Pustevny a Radhošť',
          description: 'Legendární socha Radegasta a jurkovičovy stavby, dostupné lanovkou z Trojanovic.'
        }
      ]
    },
    contact: {
      heading: 'Kontakt',
      intro: 'Těšíme se na vaši návštěvu v Lhotce pod Ondřejníkem.',
      addressHeading: 'Adresa',
      addressLines: ['Wellness & Restaurant U Fandy', 'Lhotka 180', '739 47 Lhotka'],
      contactsHeading: 'Recepce a rezervace',
      contacts: [
        {
          label: 'Restaurace a Bowling',
          value: '+420 733 644 655',
          href: 'tel:+420733644655'
        },
        {
          label: 'Ubytování a Wellness',
          value: '+420 733 644 659',
          href: 'tel:+420733644659'
        },
        {
          label: 'E-mail',
          value: 'info@u-fandy.cz',
          href: 'mailto:info@u-fandy.cz'
        }
      ],
      openingHeading: 'Otevírací doba',
      openingLines: ['Po-Čt: 11:00 – 22:00', 'Pá-So: 11:00 – 23:00', 'Ne: 11:00 – 21:00']
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
      experiences: 'Trips',
      contact: 'Contact'
    },
    footer: {
      claim: 'Wellness & Restaurant U Fandy',
      address: 'Lhotka 180, 739 47 Lhotka, Czechia',
      phone: '+420 733 644 655',
      email: 'info@u-fandy.cz',
      opening: 'Open daily. Bowling and wellness upon reservation.',
      newsHeading: 'News',
      newsText:
        'Follow us on Facebook for daily lunch menus and information about weekend grilling events.',
      rights: 'All rights reserved.'
    },
    home: {
      hero: {
        title: 'Wellness & Restaurant U Fandy',
        subtitle:
          'Relaxation in the heart of Beskydy. Comfortable accommodation, great gastronomy, bowling and wellness center under Ondřejník mountain.',
        ctaPrimary: 'Book a stay',
        ctaSecondary: 'Our services'
      },
      intro: {
        heading: 'Welcome to Beskydy',
        paragraphs: [
          'We are located in the picturesque village of Lhotka pod Ondřejníkem. We are the ideal place for a family holiday, romantic weekend, or corporate teambuilding.',
          'Besides stylish accommodation, you will find a restaurant with a genuine Italian wood-fired pizza oven, two bowling lanes, and a modern wellness center with a pool.'
        ],
        highlights: [
          {
            title: 'Comfortable Accommodation',
            description: 'Modern rooms with private bathroom, Wi-Fi, and mountain views. Capacity up to 60 beds.'
          },
          {
            title: 'Gastronomy & Pizza',
            description: 'Honest Czech cuisine, burgers, and pizza straight from the wood oven. Outdoor seating with a playground.'
          },
          {
            title: 'Wellness & Fun',
            description: 'Indoor pool, whirlpool, saunas, and two professional bowling lanes for your entertainment.'
          }
        ]
      }
    },
    accommodation: {
      heading: 'Accommodation',
      intro: [
        'We offer accommodation in newly renovated rooms that satisfy couples, families with children, and larger groups.',
        'Breakfast is included in the stay, and we offer discounted access to our wellness center for hotel guests.'
      ],
      rooms: [
        {
          name: 'Double Rooms',
          description: 'Cozy rooms ideal for couples. Some with a balcony and views of the Beskydy mountains.',
          amenities: ['double bed', 'bathroom with shower', 'TV and Wi-Fi', 'work desk']
        },
        {
          name: 'Deluxe Room with Whirlpool',
          description: 'For demanding guests or romantic stays. The room includes a private hydromassage bathtub.',
          amenities: ['private whirlpool', 'robes and slippers', 'minibar', 'luxury cosmetics']
        },
        {
          name: 'Family Apartments',
          description: 'Multi-room apartments suitable for families with children. Plenty of space for everyone.',
          amenities: ['separate bedrooms', 'extra bed available', 'spacious bathroom', 'baby cot on request']
        }
      ],
      note: 'We accept reservations by phone or via our online form. Check-in from 14:00, check-out by 10:00.'
    },
    restaurant: {
      heading: 'Restaurant',
      intro: [
        'Our restaurant is renowned not only for great Czech cuisine but also for pizza baked in an original Italian wood-fired oven.',
        'In summer, a spacious terrace with a playground is available; in winter, the fireplace in the main hall will warm you up.'
      ],
      sections: [
        {
          title: 'Wood-fired Pizza',
          description: 'Crispy dough, quality ingredients, and the scent of wood. We prepare classic and special types.'
        },
        {
          title: 'Lunch Menu & A la Carte',
          description: 'Fresh lunch menu every day and a permanent menu full of steaks, salads, and pasta.'
        },
        {
          title: 'Celebrations & Weddings',
          description: 'We can arrange catering for your family celebration, wedding, or corporate party in our hall.'
        }
      ],
      reservationNote: 'To reserve a table or order takeaway pizza, call +420 733 644 655.'
    },
    wellness: {
      heading: 'Wellness & Bowling',
      intro: [
        'Relax in our wellness center or have fun playing bowling. We offer comprehensive services for relaxation and active rest.',
        'The wellness zone is also open to the public (reservation required in advance).'
      ],
      experiences: [
        {
          title: 'Pool and Whirlpool',
          description: 'Indoor stainless steel pool with counter-current and relaxing whirlpool for perfect relaxation.'
        },
        {
          title: 'Sauna World',
          description: 'Finnish sauna, steam sauna, and cooling pool. Ideal regeneration after a hike.'
        },
        {
          title: 'Bowling',
          description: 'Two professional lanes right in the building. Great fun with beer and pizza.'
        }
      ],
      wellnessNote: 'Massages and private wellness rental must be booked at least 24 hours in advance.'
    },
    experiences: {
      heading: 'Trip Tips',
      intro: [
        'Lhotka is a great starting point for hiking in the Beskydy mountains. Whether on foot or by bike, you won\'t be bored.',
        'Cycle paths and hiking trails to nearby peaks lead directly around the guesthouse.'
      ],
      tips: [
        {
          title: 'Ondřejník',
          description: 'Popular peak with beautiful views of Lysá hora and Smrk, accessible directly from the guesthouse.'
        },
        {
          title: 'Hukvaldy',
          description: 'Castle ruins and a beautiful game reserve with fallow deer, birthplace of Leoš Janáček.'
        },
        {
          title: 'Pustevny and Radhošť',
          description: 'Legendary statue of Radegast and Jurkovič buildings, accessible by cable car from Trojanovice.'
        }
      ]
    },
    contact: {
      heading: 'Contact',
      intro: 'We look forward to your visit in Lhotka pod Ondřejníkem.',
      addressHeading: 'Address',
      addressLines: ['Wellness & Restaurant U Fandy', 'Lhotka 180', '739 47 Lhotka', 'Czech Republic'],
      contactsHeading: 'Reception & Reservations',
      contacts: [
        {
          label: 'Restaurant & Bowling',
          value: '+420 733 644 655',
          href: 'tel:+420733644655'
        },
        {
          label: 'Accommodation & Wellness',
          value: '+420 733 644 659',
          href: 'tel:+420733644659'
        },
        {
          label: 'E-mail',
          value: 'info@u-fandy.cz',
          href: 'mailto:info@u-fandy.cz'
        }
      ],
      openingHeading: 'Opening Hours',
      openingLines: ['Mon-Thu: 11:00 – 22:00', 'Fri-Sat: 11:00 – 23:00', 'Sun: 11:00 – 21:00']
    },
    languageNames: {
      cs: 'Czech',
      en: 'English'
    }
  }
};
