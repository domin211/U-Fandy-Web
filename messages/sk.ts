import type { Messages, NavLink } from './schema';

const sk: Messages = {
  common: {
    brandName: 'U Fandy',
    skipToContent: 'Preskočiť na obsah',
    header: {
      menuLabel: 'Menu',
      navigationLabel: 'Hlavná navigácia',
      navLinks: [
        { href: '/', label: 'Domov', hasDropdown: true },
        { href: '/ubytovani', label: 'Ubytovanie' },
        { href: '/restaurace', label: 'Reštaurácia' },
        { href: '/galerie', label: 'Galéria' },
        { href: '/wellness', label: 'Wellness' },
        { href: '/bowling', label: 'Bowling' },
        { href: '/sal', label: 'Sála' },
        { href: '/rezervovat-pobyt', label: 'Rezervovať pobyt', variant: 'cta' }
      ] satisfies readonly NavLink[],
      localeSwitcherLabel: 'Zmeniť jazyk'
    },
    footer: {
      description:
        'Hotel, reštaurácia a športové zázemie v srdci Jeseníkov. Spájame komfortné ubytovanie, kulinárske zážitky a aktívny oddych.',
      navigation: {
        title: 'Navigácia',
        links: [
          { href: '/', label: 'Domov' },
          { href: '/ubytovani', label: 'Ubytovanie' },
          { href: '/restaurace', label: 'Reštaurácia' },
          { href: '/bowling', label: 'Bowling' }
        ] satisfies readonly NavLink[]
      },
      contact: {
        title: 'Kontakt',
        items: ['Malá Morava 123', '788 33 Malá Morava', '+420 000 000 000', 'info@u-fandy.cz']
      },
      legal: {
        title: 'Právne',
        links: [
          { href: '/cookies', label: 'Cookies' },
          { href: '/zasady-ochrany-osobnich-udaju', label: 'Ochrana údajov' }
        ] satisfies readonly NavLink[]
      },
      rights: '© {year} U Fandy. Všetky práva vyhradené.'
    }
  },
  layout: {
    metadata: {
      title: {
        default: 'U Fandy — Hotel, reštaurácia a zážitky v srdci Orlických hôr',
        template: '%s | U Fandy'
      },
      description:
        'Moderné ubytovanie, výborná gastronómia, bowling a spoločenské zázemie v Malej Morave. Rezervujte si pobyt U Fandy ešte dnes.',
      keywords: ['hotel', 'reštaurácia', 'bowling', 'Malá Morava', 'Orlické hory', 'ubytovanie'],
      authors: [{ name: 'U Fandy' }],
      creator: 'U Fandy',
      publisher: 'U Fandy',
      openGraph: {
        title: 'U Fandy — Hotel, reštaurácia a zážitky',
        description: 'Moderné ubytovanie, výborná gastronómia a voľnočasové aktivity v Malej Morave.'
      },
      twitter: {
        title: 'U Fandy — Hotel, reštaurácia a zážitky',
        description: 'Moderné ubytovanie, výborná gastronómia a voľnočasové aktivity v Malej Morave.'
      }
    },
    structuredData: {
      name: 'U Fandy',
      url: 'https://www.u-fandy.cz',
      telephone: '+420000000000',
      address: {
        streetAddress: 'Malá Morava 123',
        addressLocality: 'Malá Morava',
        postalCode: '78833',
        addressCountry: 'CZ'
      },
      servesCuisine: 'Moderná česká kuchyňa',
      amenities: ['Bowlingové dráhy', 'Wellness']
    }
  },
  home: {
    hero: {
      title: 'Dokonalý pobyt v srdci Beskyd',
      subtitle: 'Skvelý oddych, príjemná relaxácia.'
    },
    intro: [
      'U Fandy prepája moderné ubytovanie s tichým wellness a reštauráciou inšpirovanou Jeseníkmi.',
      'Po dni na chodníkoch si oddýchnete v bylinných saunách a vychutnáte sezónne menu pripravené na dlhé večery.'
    ],
    onlineReservation: {
      eyebrow: 'Online rezervácia',
      title: 'Pripravení na váš ďalší útek do hôr',
      description: 'Recepcia odpovedá do 24 hodín a pomôže vybrať izbu aj doplnkové služby.',
      loadingMessage: 'Načítavam rezervačný formulár…',
      submitCta: 'Rezervovať teraz',
      datePicker: {
        arrivalLabel: 'Dátum príchodu',
        arrivalPlaceholder: 'Vyberte dátum',
        departureLabel: 'Dátum odchodu',
        departurePlaceholder: 'Vyberte dátum',
        helperText: 'Vyberte dátum príchodu aj odchodu.',
        clearLabel: 'Vymazať',
        buttonLabelEmpty: 'Vyberte dátum príchodu a odchodu',
        buttonLabelFrom: 'Príchod {from}, vyberte dátum odchodu',
        buttonLabelRange: 'Pobyt od {from} do {to}'
      },
      errors: {
        incompleteRange: 'Prosím, vyberte dátum príchodu aj odchodu.',
        invalidRange: 'Dátum odchodu musí nasledovať po dátume príchodu.'
      },
      callCta: 'Zavolajte nám',
      emailCta: 'info@u-fandy.cz'
    },
    wellnessHighlight: {
      eyebrow: 'Wellness',
      title: 'Objavte najčarovnejšie wellness v Beskydoch!',
      description:
        'Wellness & Restaurant U Fandy je zasadený v prírodnom srdci podhoria Beskýd, v malebnej obci Lobodice. Doprajte si štedré pohodlie v prírode s reštauráciou, kde podávame tradičné aj moderné špeciality, doplnené o relaxačné wellness zóny a zázemie pre aktívny aj pokojný oddych pod dohľadom nášho skúseného tímu. Naše beskydské wellness je ideálne pre hostí hľadajúcich pokoj, krásu prírody a dokonalý relax – či už na prvotriedny pobyt, alebo tematickú beskydskú degustáciu.',
      note:
        'Pre dohodnutie privátneho rituálu alebo prenájmu wellness kontaktujte recepciu na info@u-fandy.cz.',
      imageAlt: 'Wellness zóna s bazénom a výhľadom na hory'
    },
    destination: {
      eyebrow: 'Destinácia',
      title: 'Najkrajšie miesto v Malej Morave',
      description:
        'Hotel U Fandy je domovom pre gurmánov, rodiny aj športovcov. Stačí otvoriť okno a ucítite vôňu lesa, zatiaľ čo v reštaurácii sa pečie čerstvé pečivo a bowlingový turnaj práve začína.',
      features: [
        {
          title: 'Architektúra inšpirovaná horami',
          description:
            'Masívne drevo, prírodné textílie a panoramatické okná vytvárajú atmosféru, ktorá vás prenesie do srdca Jeseníkov.'
        },
        {
          title: '38 štýlových izieb a apartmánov',
          description:
            'Od útulných dvojlôžkových izieb až po rodinné apartmány s terasou. Všetky so smart ovládaním a klimatizáciou.'
        },
        {
          title: 'Zázemie pre aktívny aj pokojný oddych',
          description:
            'Bowling, wellness, požičovňa elektrobicyklov a tematické večery v bare so skúseným tímom.'
        }
      ],
      stats: [
        { value: '38', label: 'IZIEB' },
        { value: '120', label: 'MIEST V REŠTAURÁCII' },
        { value: '4', label: 'BOWLING DRÁHY' },
        { value: '2 km', label: 'K ZJAZDOVKÁM' }
      ],
      imageAlt: 'Dizajnové izby U Fandy'
    },
    hotelHighlights: [
      {
        eyebrow: 'Hotel',
        title: 'Komfort v objatí hôr',
        description: 'Prémiové matrace, zatemňujúce závesy, aromaterapia a concierge pre dokonalý pokoj.'
      },
      {
        eyebrow: 'Gastronómia',
        title: 'Autorská kuchyňa šéfkuchára',
        description: 'Sezónne menu z lokálnych surovín, domáce pečivo a vinotéka so 120 etiketami.'
      },
      {
        eyebrow: 'Zážitky',
        title: 'Program na každý deň',
        description: 'Privátne wellness, bowlingové turnaje, firemné eventy aj tematické večery so živou hudbou.'
      }
    ],
    roomsSection: {
      eyebrow: 'Ubytovanie',
      title: 'Dizajnové izby, ktoré voňajú drevom a horským vzduchom',
      description:
        'Každá izba je originál inšpirovaný prírodou. Všetky majú nadštandardné matrace, zatemnenie a rýchlu Wi-Fi.'
    },
    restaurantSection: {
      eyebrow: 'Reštaurácia & Bar',
      title: 'Sezónne menu z lokálnych surovín',
      description:
        'Večer patrí našej reštaurácii a baru. Sezónne suroviny dopĺňame domácim pečivom, výraznými omáčkami a autorskými kokteilmi.',
      specials: [
        'Pečené kačacie prsia · tekvicové pyré · karamelizovaná hruška',
        'Pomaly dusené jahňacie ragú · červené víno · bylinková polenta',
        'Pstruh na panvici · bylinkové maslo · chrumkavá zelenina',
        'Teplý čokoládový fondant · slaný karamel · vanilková zmrzlina'
      ],
      cta: 'Denné menu',
      imageAlt: 'Reštaurácia U Fandy'
    },
    experienceSection: {
      eyebrow: 'Zážitok',
      title: 'Bowling, sauna, bike požičovňa a večerný bar',
      description: 'Zrelaxujte po výlete v privátnom wellness alebo si užite turnaj na profesionálnych dráhach.',
      gallery: [
        { src: '/images/placeholders/hero.svg', alt: 'Exteriér hotela U Fandy', width: 1200, height: 800 },
        { src: '/images/placeholders/restaurant.svg', alt: 'Reštaurácia U Fandy', width: 1200, height: 800 },
        { src: '/images/placeholders/bowling.svg', alt: 'Bowlingové dráhy', width: 1200, height: 800 },
        { src: '/images/placeholders/hall.svg', alt: 'Spoločenská sála', width: 1200, height: 800 }
      ]
    },
    testimonials: {
      eyebrow: 'Hodnotenia',
      title: 'Čo o nás hovoria hostia',
      description: 'Autentické recenzie rodín, športovcov aj firemných klientov, ktorí sa k nám radi vracajú.',
      items: [
        {
          quote:
            'Milujeme atmosféru U Fandy. Personál si pamätá naše obľúbené víno a deti sa tešia na bowling aj wellness.',
          name: 'Lucia a Peter',
          role: 'rodina z Prahy'
        },
        {
          quote: 'Perfektné zázemie pre firemný retreat. Moderná technika v sále, skvelé jedlo a inšpiratívne okolie.',
          name: 'Jana',
          role: 'HR manažérka, Brno'
        },
        {
          quote: 'Wellness s bylinkovou saunou a masážami bol splnený sen. Radi sa vraciame každú sezónu.',
          name: 'Marek',
          role: 'stály hosť'
        }
      ]
    },
    wellness: {
      eyebrow: 'Wellness',
      title: 'Horský pokoj v modernom wellness',
      description:
        'Po dni v horách sa ponorte do tepla sauny, vírivky a relaxačnej zóny s pohárom prosecca.',
      highlights: [
        { title: 'Privátna sauna & vírivka', description: 'Rezervujte si čas len pre seba a doprajte telu relax po celodennom výlete.' },
        { title: 'Rituály s horskými bylinami', description: 'Aromaterapia a procedúry s lokálnymi bylinami a pramenitou vodou.' },
        { title: 'Relax zóna s výhľadom', description: 'Pohodlné ležadlá, krb a upokojujúci výhľad do údolia.' }
      ],
      imageAlt: 'Wellness a relaxačná zóna'
    },
    location: {
      eyebrow: 'Lokalita',
      title: 'Hotel U Fandy',
      description: 'Malá Morava 123, 788 33 Malá Morava',
      note:
        'Parkovanie je zdarma priamo pri hoteli. Recepcia je otvorená denne od 7:00 do 22:00 a radi odporučíme najlepšie výlety v okolí.',
      highlights: [
        { label: 'Ski areál Dolní Morava', value: '1,8 km' },
        { label: 'Stezka v oblacích', value: '2,5 km' },
        { label: 'Trail park & požičovňa bicyklov', value: 'priamo pri hoteli' },
        { label: 'Letisko Pardubice', value: '90 min autom' }
      ],
      mapAlt: 'Mapa cesty k hotelu U Fandy'
    },
    reservation: {
      eyebrow: 'Rezervácia',
      title: 'Napíšte nám a pripravíme ponuku na mieru',
      description: 'Ozveme sa do 24 hodín. Pre skupiny zabezpečíme catering, techniku aj doplnkové aktivity.',
      hotelHoursTitle: 'Hotel',
      restaurantHoursTitle: 'Reštaurácia',
      bowlingHoursTitle: 'Bowling'
    }
  },
  accommodation: {
    metadata: {
      title: 'Ubytovanie',
      description: 'Dizajnové izby, privátne wellness a concierge. Objavte komfort v hoteli U Fandy.'
    },
    heading: {
      eyebrow: 'Ubytovanie',
      title: 'Spánok, na ktorý sa budete tešiť',
      description:
        'Vyberte si izbu či apartmán podľa nálady. Každý má klimatizáciu, kvalitnú kozmetiku a smart televíziu.'
    },
    servicesTitle: 'Služby v cene pobytu',
    services: [
      '✔️ Bohaté raňajky s domácim pečivom',
      '✔️ Vstup do wellness zóny na 60 minút denne',
      '✔️ Parkovanie pri hoteli a úschovňa bicyklov',
      '✔️ Rýchla Wi-Fi a streamingové platformy',
      '✔️ Concierge tím pripravený splniť vaše želania'
    ],
    receptionHoursTitle: 'Recepcia',
    checkin: {
      title: 'Check-in & check-out',
      description:
        'Štandardný check-in prebieha od 15:00, check-out do 11:00. Potrebujete inak? Dajte nám vedieť a prispôsobíme sa.'
    }
  },
  restaurant: {
    metadata: {
      title: 'Reštaurácia',
      description: 'Autorská kuchyňa a bar s regionálnymi ingredienciami. Ochutnajte sezónne menu U Fandy.'
    },
    heading: {
      eyebrow: 'Reštaurácia',
      title: 'Suroviny z Jeseníkov, techniky z celého sveta',
      description:
        'Každý chod rozpráva príbeh. Čerpáme z lokálnych fariem, sezónnych bylín a svetovej gastronómie.'
    },
    openingTitle: 'Otváracie hodiny',
    tasting: {
      title: 'Degustačné večery',
      description: 'Každý piatok pripravujeme sedemchodové menu s párovaním vín. Rezervujte aspoň 48 hodín vopred.'
    },
    reservation: {
      title: 'Rezervácia stola',
      description: 'Volajte +420 000 000 000 alebo napíšte na restaurace@u-fandy.cz.'
    }
  },
  contact: {
    metadata: {
      title: 'Kontakt',
      description: 'Sme tu pre vás každý deň. Zavolajte, napíšte alebo sa zastavte v hoteli U Fandy.'
    },
    heading: {
      eyebrow: 'Kontakt',
      title: 'Ozvite sa, poradíme s pobytom aj akciou',
      description:
        'Máme tím, ktorý vám pomôže s rezerváciou, darčekovým voucherom alebo plánovaním teambuildingu.'
    },
    contacts: [
      { label: 'Recepcia', value: '+420 000 000 000', href: 'tel:+420000000000' },
      { label: 'E-mail', value: 'info@u-fandy.cz', href: 'mailto:info@u-fandy.cz' },
      { label: 'Adresa', value: 'Malá Morava 123, 788 33 Malá Morava' }
    ],
    billing: {
      title: 'Fakturačné údaje',
      description: 'U Fandy s.r.o., IČO 00000000\nDIČ CZ00000000'
    },
    receptionHoursTitle: 'Recepcia',
    restaurantHoursTitle: 'Reštaurácia'
  },
  bowling: {
    metadata: {
      title: 'Bowling',
      description: 'Bowling – dve moderné dráhy s možnosťou detských mantinelov a pohodlným zázemím pre celú rodinu.'
    },
    hero: {
      eyebrow: 'Bowling',
      title: 'PRÍĎTE SI ZAHRÁŤ NA MODERNÉ DRÁHY',
      description:
        'Príďte si zahrať na dve moderné bowlingové dráhy. Jedna z nich sa dá upraviť pre deti pomocou výsuvného mantinelu.'
    },
    gallery: [
      { src: '/images/bowling/bowling1.webp', alt: 'Bowlingová dráha s barom', width: 1200, height: 800 },
      { src: '/images/bowling/bowling2.webp', alt: 'Osvetlené bowlingové dráhy', width: 1200, height: 800 },
      { src: '/images/bowling/bowling3.webp', alt: 'Bowlingová herňa s posedením', width: 1200, height: 800 },
      { src: '/images/bowling/bowling4.webp', alt: 'Bowlingová dráha s mantinelom', width: 1200, height: 800 }
    ]
  },
  wellness: {
    metadata: {
      title: 'Wellness',
      description: 'Súkromné wellness s fínskou saunou, parnou kabínou a vírivkou v U Fandy. Rezervujte si spa len pre seba.'
    },
    hero: {
      eyebrow: 'Wellness',
      title: 'Pokoj hôr v privátnom spa',
      description:
        'Zarezervujte si fínsku saunu, parnú kabínu a vírivku iba pre vašu skupinu. Uteráky, aromaterapia a prosecco sú pripravené.'
    },
    highlights: [
      {
        title: 'Fínska aj bylinná sauna',
        description: 'Cedrové drevo s chromoterapiou dopĺňa bylinná parná kabína pre jemnú regeneráciu.'
      },
      {
        title: 'Vírivka s výhľadom',
        description: 'Vyhrievaná vírivka až pre šesť hostí s masážnymi tryskami a atmosférickým svetlom.'
      },
      {
        title: 'Relax zóna',
        description: 'Pohodlné ležadlá, atmosféra krbu a playlisty na hlboké uvoľnenie.'
      }
    ] satisfies readonly { title: string; description: string }[],
    rituals: [
      {
        title: 'Súkromný vstup pre 6 osôb',
        description: 'Celá wellness zóna vrátane šatní je iba pre vašu skupinu.'
      },
      {
        title: 'Občerstvenie na želanie',
        description: 'Objednajte si prosecco, sezónne ovocie alebo domáce limonády priamo do spa.'
      },
      {
        title: 'Masáže a rituály',
        description: 'Zabezpečíme profesionálne masáže a telové rituály pri objednávke aspoň 24 hodín vopred.'
      }
    ] satisfies readonly { title: string; description: string }[],
    ritualsTitle: 'Rituály na mieru',
    amenities: [
      {
        title: 'Otváracie hodiny',
        description: 'Denne 10:00–22:00. Posledný vstup o 20:30, aby ste si užili plných 90 minút.'
      },
      {
        title: 'Vybavenie',
        description: 'Pre každého hosťa sú pripravené uteráky, prestieradlá, kozmetika aj fén.'
      },
      {
        title: 'Rezervácie',
        description: 'Kontaktujte recepciu na +420 000 000 000 alebo info@u-fandy.cz. Ozveme sa do 24 hodín.'
      }
    ] satisfies readonly { title: string; description: string }[],
    amenitiesTitle: 'Čo je zahrnuté',
    cta: {
      title: 'Rezervujte si privátne spa',
      description: 'Napíšte nám preferovaný termín a prispôsobíme rituál vašim želaniam.',
      buttonLabel: 'Dopytovať termín'
    },
    gallery: [
      { src: '/images/hero/bazen.webp', alt: 'Wellness bazén s jemným osvetlením', width: 1200, height: 800 },
      { src: '/images/placeholders/hero.svg', alt: 'Výhľad na hory z relax zóny', width: 1200, height: 800 },
      { src: '/images/placeholders/room.svg', alt: 'Vyhrievané ležadlá v privátnom spa', width: 1200, height: 800 },
      { src: '/images/placeholders/restaurant.svg', alt: 'Občerstvenie s proseccem vo wellness', width: 1200, height: 800 },
      { src: '/images/bowling/bowling2.webp', alt: 'Atmosférické osvetlenie večerného rituálu', width: 1200, height: 800 },
      { src: '/images/placeholders/hall.svg', alt: 'Relax lounge pripravená pre páry', width: 1200, height: 800 }
    ] satisfies readonly { src: string; alt: string; width: number; height: number }[]
  },
  gallery: {
    metadata: {
      title: 'Galéria',
      description: 'Pozrite si fotografie izieb, gastronómie, wellness aj podujatí v hoteli U Fandy.'
    },
    heading: {
      eyebrow: 'Galéria',
      title: 'Nazrite k U Fandy',
      description: 'Výber momentiek z ubytovania, gastronómie a zážitkov v Malej Morave.'
    },
    info: [
      {
        title: 'Dizajnové ubytovanie',
        description: 'Izby inšpirované horami, prírodné materiály a panoramatické výhľady.'
      },
      {
        title: 'Gastronómia',
        description: 'Sezónne menu, otvorená kuchyňa a degustácie vín s naším someliérom.'
      },
      {
        title: 'Wellness & šport',
        description: 'Privátne spa, vírivka a bowlingové dráhy pre aktívny relax.'
      },
      {
        title: 'Podujatia & oslavy',
        description: 'Banketová sála, terasa a výzdoba na mieru svadbám aj firemným večierkom.'
      }
    ] satisfies readonly { title: string; description: string }[],
    images: [
      { src: '/images/hero/bazen.webp', alt: 'Súkromné wellness s bazénom a ležadlami', width: 1200, height: 800 },
      { src: '/images/hero/pizza.webp', alt: 'Reštaurácia pripravená na večeru', width: 1200, height: 800 },
      { src: '/images/bowling/bowling1.webp', alt: 'Bowlingová lounge s atmosférickým osvetlením', width: 1200, height: 800 },
      { src: '/images/bowling/bowling2.webp', alt: 'Farebne nasvietené bowlingové dráhy', width: 1200, height: 800 },
      { src: '/images/bowling/bowling3.webp', alt: 'Posedenie pri bowlingových dráhach', width: 1200, height: 800 },
      { src: '/images/bowling/bowling4.webp', alt: 'Bowlingová dráha s detskými mantinelmi', width: 1200, height: 800 },
      { src: '/images/placeholders/room.svg', alt: 'Dizajnová hotelová izba s drevenými detailmi', width: 1200, height: 800 },
      { src: '/images/placeholders/restaurant.svg', alt: 'Šéfkuchár servíruje sezónne jedlo', width: 1200, height: 800 },
      { src: '/images/placeholders/hall.svg', alt: 'Sála vyzdobená na oslavu', width: 1200, height: 800 },
      { src: '/images/placeholders/bowling.svg', alt: 'Ilustrácia bowlingového zážitku', width: 1200, height: 800 },
      { src: '/images/placeholders/hero.svg', alt: 'Exteriér hotela U Fandy medzi stromami', width: 1200, height: 800 },
      { src: '/images/placeholders/career.svg', alt: 'Tím U Fandy usmiaty na recepcii', width: 1200, height: 800 }
    ] satisfies readonly { src: string; alt: string; width: number; height: number }[]
  },
  hall: {
    metadata: {
      title: 'Spoločenská sála',
      description: 'Flexibilná sála pre svadby, konferencie aj koncerty. Pripravíme scénar na mieru.'
    },
    heading: {
      eyebrow: 'Spoločenská sála',
      title: 'Priestor, ktorý rastie s vašimi ambíciami',
      description:
        'Modulárna scéna, elegantný interiér a špičková technika. Organizujeme svadby, gala večery aj firemné summity.'
    },
    description:
      'Každé podujatie je jedinečné. Náš eventový tím pripraví dramaturgiu, scenériu aj koordináciu hostí tak, aby všetko prebiehalo na minútu presne.',
    features: [
      'Kapacita až 120 hostí v banketovom usporiadaní',
      'LED stena, profesionálne ozvučenie a inteligentné osvetlenie',
      'Hybridná technika pre konferenčné prenosy',
      'Zázemie pre catering a barový servis',
      'Možnosť prepojenia s vonkajšou terasou'
    ],
    concierge: {
      title: 'Event concierge',
      description:
        'Napíšte nám na event@u-fandy.cz a pripravíme kompletnú ponuku vrátane 3D vizualizácie.'
    }
  },
  career: {
    metadata: {
      title: 'Kariéra',
      description: 'Pridajte sa k tímu U Fandy. Vytvárame prostredie, kde rastie talent a vášeň pre pohostinstvo.'
    },
    heading: {
      eyebrow: 'Kariéra',
      title: 'Hľadáme ľudí, ktorí milujú hostí',
      description:
        'U Fandy je tímová spolupráca základ. Ponúkame férové odmeny, školenia aj možnosť ubytovania.'
    },
    positions: [
      {
        title: 'Chef de partie',
        description: 'Skúsený kuchár zameraný na modernú gastronómiu a vedenie juniorného tímu.',
        type: 'Plný úväzok'
      },
      {
        title: 'Recepčný s AJ/NJ',
        description: 'Komunikácia s hosťami, práca s rezervačným systémom a concierge služby.',
        type: 'Krátky/dlhý týždeň'
      },
      {
        title: 'Event koordinátor/ka',
        description: 'Plánovanie svadieb a firemných akcií, práca s dodávateľmi a dohľad nad realizáciou.',
        type: 'Plný úväzok'
      }
    ],
    contactCta: 'Pošlite CV na kariera@u-fandy.cz',
    openCall: {
      title: 'Nenašli ste svoju pozíciu?',
      description:
        'Napíšte nám, čo by vás bavilo, a vytvoríme rolu na mieru. Radi privítame aj brigády a stáže pre študentov hotelových škôl.'
    }
  },
  reservationPage: {
    metadata: {
      title: 'Rezervácia',
      description: 'Pošlite nám dopyt na pobyt, firemné podujatie alebo oslavu. Ozveme sa do 24 hodín.'
    },
    heading: {
      eyebrow: 'Rezervácia',
      title: 'Doprajte si zážitok u Fandy',
      description:
        'Napíšte nám, pre koľko osôb plánujete pobyt a aké služby vás lákajú. Ozveme sa s ponukou.',
      align: 'center'
    }
  },
  cookies: {
    metadata: {
      title: 'Cookies',
      description: 'Informácie o používaní súborov cookies na webe U Fandy.'
    },
    intro: 'Dbáme na súkromie. Cookies používame len v nevyhnutnom rozsahu.',
    sections: [
      {
        title: 'Čo sú cookies',
        content:
          'Cookies sú malé textové súbory ukladané do vášho zariadenia. Pomáhajú nám analyzovať návštevnosť a zlepšovať služby.'
      },
      {
        title: 'Aké cookies používame',
        content:
          'Používame iba technické cookies nevyhnutné pre fungovanie webu a anonymizovanú analytiku. Nepoužívame marketingové cookies.'
      },
      {
        title: 'Ako odmietnuť cookies',
        content:
          'Nastavenie cookies môžete upraviť vo svojom prehliadači. Vypnutie technických cookies môže obmedziť funkčnosť webu.'
      }
    ]
  },
  privacy: {
    metadata: {
      title: 'Zásady ochrany osobných údajov',
      description: 'Ako nakladáme s osobnými údajmi hostí a partnerov hotela U Fandy.'
    },
    intro:
      'Veríme v otvorenosť. Preto prehľadne opisujeme, ako chránime vaše dáta a na koho sa môžete obrátiť.',
    sections: [
      {
        title: 'Prevádzkovateľ osobných údajov',
        content: 'Prevádzkovateľom údajov je U Fandy s.r.o., Malá Morava 123, 788 33 Malá Morava.'
      },
      {
        title: 'Aké údaje spracúvame',
        content:
          'Meno, kontaktné údaje, informácie o rezervácii, platobné údaje a komunikáciu. Údaje uchovávame po dobu zákonných povinností.'
      },
      {
        title: 'Účely spracovania',
        content:
          'Spracovanie rezervácií, plnenie zmluvy, účtovníctvo a zasielanie informácií o službách na základe vášho súhlasu.'
      },
      {
        title: 'Vaše práva',
        content:
          'Máte právo na prístup, opravu, vymazanie, obmedzenie spracovania, prenositeľnosť údajov aj podanie sťažnosti na dozornom orgáne.'
      },
      {
        title: 'Kontakt na poverenca',
        content: 'privacy@u-fandy.cz'
      }
    ],
    title: 'Zásady ochrany osobných údajov'
  },
  reservationForm: {
    submitIdle: 'Odoslať dopyt',
    submitPending: 'Odosielam…',
    success: 'Ďakujeme! Čoskoro sa vám ozveme s potvrdením.',
    rateLimit: 'Odosielate príliš často, skúste to neskôr.',
    genericError: 'Skontrolujte, prosím, zvýraznené polia.',
    fields: {
      name: { label: 'Meno a priezvisko', error: 'Zadajte, prosím, svoje meno.' },
      email: { label: 'E-mail', error: 'Zadajte platný e-mail.' },
      phone: {
        label: 'Telefón',
        min: 'Telefón musí mať aspoň 9 číslic.',
        format: 'Telefónne číslo môže obsahovať iba číslice a +.'
      },
      arrivalDate: { label: 'Dátum príchodu', error: 'Vyberte dátum príchodu.' },
      guests: {
        label: 'Počet hostí',
        required: 'Zadajte počet hostí.',
        min: 'Aspoň jeden hosť.',
        max: 'Pri väčších skupinách nás prosím kontaktujte.'
      },
      note: { label: 'Poznámka', max: 'Správa môže mať maximálne 500 znakov.' },
      honeypot: 'Nechajte prázdne'
    }
  }
};

export default sk;
