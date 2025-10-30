import type { Messages, NavLink } from './schema';

const cs: Messages = {
  common: {
    brandName: 'U Fandy',
    skipToContent: 'Přeskočit na obsah',
    header: {
      menuLabel: 'Menu',
      navigationLabel: 'Hlavní navigace',
      navLinks: [
        { href: '/', label: 'Domů', hasDropdown: true },
        { href: '/ubytovani', label: 'Ubytování' },
        { href: '/restaurace', label: 'Restaurace' },
        { href: '/galerie', label: 'Galerie' },
        { href: '/wellness', label: 'Wellness' },
        { href: '/bowling', label: 'Bowling' },
        { href: '/sal', label: 'Sál' },
        { href: '/rezervovat-pobyt', label: 'Rezervovat pobyt', variant: 'cta' }
      ] satisfies readonly NavLink[],
      localeSwitcherLabel: 'Změnit jazyk'
    },
    footer: {
      description:
        'Hotel, restaurace a sportovní zázemí v srdci Jeseníků. Spojujeme komfortní ubytování, kulinářské zážitky a aktivní odpočinek.',
      navigation: {
        title: 'Navigace',
        links: [
          { href: '/', label: 'Domů' },
          { href: '/ubytovani', label: 'Ubytování' },
          { href: '/restaurace', label: 'Restaurace' },
          { href: '/bowling', label: 'Bowling' }
        ] satisfies readonly NavLink[]
      },
      contact: {
        title: 'Kontakt',
        items: ['Malá Morava 123', '788 33 Malá Morava', '+420 000 000 000', 'info@u-fandy.cz']
      },
      legal: {
        title: 'Právní',
        links: [
          { href: '/cookies', label: 'Cookies' },
          { href: '/zasady-ochrany-osobnich-udaju', label: 'Ochrana údajů' }
        ] satisfies readonly NavLink[]
      },
      rights: '© {year} U Fandy. Všechna práva vyhrazena.'
    }
  },
  layout: {
    metadata: {
      title: {
        default: 'U Fandy — Hotel, Restaurace a Zážitky v srdci Orlických hor',
        template: '%s | U Fandy'
      },
      description:
        'Moderní ubytování, výborná gastronomie, bowling a společenské zázemí v Malé Moravě. Rezervujte si pobyt u Fandy ještě dnes.',
      keywords: ['hotel', 'restaurace', 'bowling', 'Malá Morava', 'Orlické hory', 'ubytování'],
      authors: [{ name: 'U Fandy' }],
      creator: 'U Fandy',
      publisher: 'U Fandy',
      openGraph: {
        title: 'U Fandy — Hotel, Restaurace a Zážitky',
        description: 'Moderní ubytování, výborná gastronomie a volnočasové aktivity v Malé Moravě.'
      },
      twitter: {
        title: 'U Fandy — Hotel, Restaurace a Zážitky',
        description: 'Moderní ubytování, výborná gastronomie a volnočasové aktivity v Malé Moravě.'
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
      servesCuisine: 'Moderní česká kuchyně',
      amenities: ['Bowlingové dráhy', 'Wellness']
    }
  },
  home: {
    hero: {
      title: 'Dokonalý pobyt v srdci Beskyd',
      subtitle: 'Skvělý odpočinek, příjemná relaxace.'
    },
    intro: [
      'U Fandy spojuje moderní ubytování s klidným wellness a restaurací inspirovanou Jeseníky.',
      'Jen pár kroků od lesů načerpáte síly v bylinných saunách a užijete si sezónní menu pro příjemné večery.'
    ],
    onlineReservation: {
      eyebrow: 'Online rezervace',
      title: 'Připraveno pro váš další útěk do hor',
      description: 'Náš tým recepce reaguje do 24 hodin a pomůže s výběrem pokoje i doplňkových služeb.',
      loadingMessage: 'Načítání rezervačního formuláře…',
      submitCta: 'Rezervujte',
      datePicker: {
        arrivalLabel: 'Datum příjezdu',
        arrivalPlaceholder: 'Vyberte datum',
        departureLabel: 'Datum odjezdu',
        departurePlaceholder: 'Vyberte datum',
        helperText: 'Vyberte datum příjezdu i odjezdu.',
        clearLabel: 'Vymazat',
        buttonLabelEmpty: 'Vyberte datum příjezdu a odjezdu',
        buttonLabelFrom: 'Příjezd {from}, vyberte datum odjezdu',
        buttonLabelRange: 'Pobyt od {from} do {to}'
      },
      errors: {
        incompleteRange: 'Vyberte prosím datum příjezdu i odjezdu.',
        invalidRange: 'Datum odjezdu musí následovat po datu příjezdu.'
      },
      callCta: 'Zavolejte nám',
      emailCta: 'info@u-fandy.cz'
    },
    destination: {
      eyebrow: 'Destinace',
      title: 'Nejkouzelnější místo v Malé Moravě',
      description:
        'Hotel U Fandy je domovem pro gurmány, rodiny i sportovce. Stačí otevřít okno a ucítíte vůni lesa, zatímco v restauraci se připravuje čerstvé pečivo a v bowlingu startuje večerní turnaj.',
      features: [
        {
          title: 'Architektura inspirovaná horami',
          description:
            'Masivní dřevo, přírodní textilie a panoramatická okna vytvářejí atmosféru, která vás přenese do srdce Jeseníků.'
        },
        {
          title: '38 stylových pokojů a apartmánů',
          description:
            'Od útulných dvoulůžkových pokojů až po rodinné apartmány s terasou. Všechny s chytrým ovládáním a klimatizací.'
        },
        {
          title: 'Zázemí pro aktivní i klidný odpočinek',
          description:
            'Bowling, wellness, půjčovna elektrokol i tematické večery v baru pod vedením zkušeného týmu.'
        }
      ],
      stats: [
        { value: '38', label: 'POKOJŮ' },
        { value: '120', label: 'MÍST V RESTAURACI' },
        { value: '4', label: 'BOWLING DRÁHY' },
        { value: '2 km', label: 'NA SJEZDOVKY' }
      ] satisfies readonly { value: string; label: string }[],
      imageAlt: 'Designové pokoje U Fandy'
    },
    hotelHighlights: [
      {
        eyebrow: 'Hotel',
        title: 'Komfort v objetí hor',
        description: 'Nadstandardní matrace, blackout závěsy, aromaterapie a služba concierge pro dokonalý klid.'
      },
      {
        eyebrow: 'Gastronomie',
        title: 'Autorská kuchyně šéfkuchaře',
        description: 'Sezonní menu z lokálních surovin, domácí pečivo a vinný sklep se 120 etiketami.'
      },
      {
        eyebrow: 'Zážitky',
        title: 'Program na každý den',
        description: 'Privátní wellness, bowlingové turnaje, firemní eventy i tematické večery s živou hudbou.'
      }
    ],
    roomsSection: {
      eyebrow: 'Ubytování',
      title: 'Designové pokoje, které voní dřevem a horským vzduchem',
      description:
        'Každý pokoj je originál inspirovaný okolní přírodou. Všechny disponují nadstandardními matracemi, blackout závěsy a rychlou Wi-Fi.'
    },
    restaurantSection: {
      eyebrow: 'Restaurace & Bar',
      title: 'Sezonní menu z lokálních surovin',
      description:
        'Večer u nás patří restauraci a baru. Sezonní suroviny doplňujeme domácím pečivem, poctivými omáčkami a autorskými koktejly.',
      specials: [
        'Pečená kachní prsa · dýňové pyré · hrušky v karamelu',
        'Jehněčí ragú · červené víno · bylinková polenta',
        'Čerstvý pstruh · bylinkové máslo · křupavá zelenina',
        'Čokoládový fondant · slaný karamel · vanilka'
      ],
      cta: 'Denní menu',
      imageAlt: 'Restaurace U Fandy'
    },
    experienceSection: {
      eyebrow: 'Zážitek',
      title: 'Bowling, sauna, bike půjčovna a večerní bar',
      description: 'Zrelaxujte po výletu v privátním wellness nebo si užijte večerní turnaj na profesionálních drahách.',
      gallery: [
        { src: '/images/placeholders/hero.svg', alt: 'Hotel U Fandy exteriér', width: 1200, height: 800 },
        { src: '/images/placeholders/restaurant.svg', alt: 'Restaurace U Fandy', width: 1200, height: 800 },
        { src: '/images/placeholders/bowling.svg', alt: 'Bowlingové dráhy', width: 1200, height: 800 },
        { src: '/images/placeholders/hall.svg', alt: 'Společenský sál', width: 1200, height: 800 }
      ]
    },
    testimonials: {
      eyebrow: 'Hodnocení',
      title: 'Co o nás říkají hosté',
      description: 'Autentické recenze rodin, sportovců i firemních klientů, kteří se k nám rádi vracejí.',
      items: [
        {
          quote:
            'Milujeme atmosféru U Fandy. Personál si pamatuje naše oblíbené víno a děti se těší na bowling i wellness.',
          name: 'Lucie a Petr',
          role: 'rodina z Prahy'
        },
        {
          quote: 'Perfektní zázemí pro firemní retreat. Moderní technika v sále, skvělé jídlo a inspirativní okolí.',
          name: 'Jana',
          role: 'HR manažerka, Brno'
        },
        {
          quote: 'Wellness s bylinkovou saunou a masážemi byl splněný sen. Rádi se vracíme každou sezonu.',
          name: 'Marek',
          role: 'stálý host'
        }
      ]
    },
    wellness: {
      eyebrow: 'Wellness',
      title: 'Horský klid v moderním wellness',
      description:
        'Po náročném dni v horách se ponořte do tepla sauny, vířivky a relaxační zóny se sklenkou prosecca.',
      highlights: [
        { title: 'Privátní sauna & vířivka', description: 'Rezervujte si čas jen pro sebe a dopřejte tělu relax po celodenním výletu.' },
        { title: 'Rituály s horskými bylinami', description: 'Aromaterapie a procedury, které využívají lokální byliny a pramenitou vodu.' },
        { title: 'Relax zóna s výhledem', description: 'Pohodlná lehátka, krb a uklidňující výhled do údolí Malé Moravy.' }
      ],
      imageAlt: 'Wellness a relax zóna'
    },
    location: {
      eyebrow: 'Lokalita',
      title: 'Hotel U Fandy',
      description: 'Malá Morava 123, 788 33 Malá Morava',
      note:
        'Parkování je zdarma přímo u hotelu. Recepce je otevřená denně od 7:00 do 22:00 a rádi vám doporučíme nejlepší výlety v okolí.',
      highlights: [
        { label: 'Ski areál Dolní Morava', value: '1,8 km' },
        { label: 'Stezka v oblacích', value: '2,5 km' },
        { label: 'Trail park & bike půjčovna', value: 'přímo u hotelu' },
        { label: 'Letiště Pardubice', value: '90 min autem' }
      ],
      mapAlt: 'Mapa cesty k hotelu U Fandy'
    },
    reservation: {
      eyebrow: 'Rezervace',
      title: 'Napište nám a připravíme nabídku na míru',
      description: 'Ozveme se do 24 hodin. Pro skupiny zajistíme catering, techniku i doplňkové aktivity.',
      hotelHoursTitle: 'Hotel',
      restaurantHoursTitle: 'Restaurace',
      bowlingHoursTitle: 'Bowling'
    }
  },
  accommodation: {
    metadata: {
      title: 'Ubytování',
      description: 'Designové pokoje, privátní wellness a servis concierge. Objevte komfortní ubytování v hotelu U Fandy.'
    },
    heading: {
      eyebrow: 'Ubytování',
      title: 'Spaní, na které se budete těšit',
      description:
        'Vyberte si pokoj či apartmán podle své nálady. Každý má vlastní klimatizaci, kvalitní kosmetiku a chytrou televizi.'
    },
    servicesTitle: 'Služby v ceně pobytu',
    services: [
      '✔️ Bohatá snídaně s domácím pečivem',
      '✔️ Vstup do wellness zóny na 60 minut denně',
      '✔️ Parkování u hotelu a úschovna kol',
      '✔️ Rychlá Wi-Fi a streamingové platformy',
      '✔️ Concierge tým připravený splnit vaše přání'
    ],
    receptionHoursTitle: 'Recepce',
    checkin: {
      title: 'Check-in & check-out',
      description:
        'Standardní check-in probíhá od 15:00, check-out do 11:00. Potřebujete jinak? Ozvěte se nám a přizpůsobíme se.'
    }
  },
  restaurant: {
    metadata: {
      title: 'Restaurace',
      description: 'Autorská kuchyně a bar s regionálními ingrediencemi. Přijďte ochutnat sezónní menu U Fandy.'
    },
    heading: {
      eyebrow: 'Restaurace',
      title: 'Suroviny z Jeseníků, techniky z celého světa',
      description:
        'Každý chod vypráví příběh. Čerpáme z lokálních farem, sezonních bylin a inspirace světovou gastronomií.'
    },
    openingTitle: 'Otevírací doba',
    tasting: {
      title: 'Degustační večery',
      description: 'Každý pátek připravujeme sedmichodové menu s párováním vín. Rezervujte si místo alespoň 48 hodin předem.'
    },
    reservation: {
      title: 'Rezervace stolu',
      description: 'Volejte +420 000 000 000 nebo napište na restaurace@u-fandy.cz.'
    }
  },
  contact: {
    metadata: {
      title: 'Kontakt',
      description: 'Jsme tu pro vás každý den. Zavolejte, napište nebo se zastavte v hotelu U Fandy.'
    },
    heading: {
      eyebrow: 'Kontakt',
      title: 'Ozvěte se, poradíme s pobytem i akcí',
      description:
        'Máme tým, který vám pomůže s rezervací, dárkovým voucherem nebo plánováním teambuildingu.'
    },
    contacts: [
      { label: 'Recepce', value: '+420 000 000 000', href: 'tel:+420000000000' },
      { label: 'E-mail', value: 'info@u-fandy.cz', href: 'mailto:info@u-fandy.cz' },
      { label: 'Adresa', value: 'Malá Morava 123, 788 33 Malá Morava' }
    ] satisfies readonly { label: string; value: string; href?: string }[],
    billing: {
      title: 'Fakturační údaje',
      description: 'U Fandy s.r.o., IČO 00000000\nDIČ CZ00000000'
    },
    receptionHoursTitle: 'Recepce',
    restaurantHoursTitle: 'Restaurace'
  },
  bowling: {
    metadata: {
      title: 'Bowling',
      description: 'Bowling – dvě moderní dráhy s možností dětských mantinelů a pohodovým zázemím pro celou rodinu.'
    },
    hero: {
      eyebrow: 'Bowling',
      title: 'PŘIJĎTE SI ZAHRÁT NA MODERNÍ DRÁHY',
      description:
        'Přijďte si zahrát na dvě moderní bowlingové dráhy. Nabízíme dvě špičkové dráhy, kde jedna z drah může být upravena pro vaše děti pomocí výsuvného mantinelu, který zabraňuje vypadnutí koule do žlabu.'
    },
    gallery: [
      { src: '/images/bowling/bowling1.webp', alt: 'Bowlingová dráha s barem', width: 1200, height: 800 },
      { src: '/images/bowling/bowling2.webp', alt: 'Rozsvícené bowlingové dráhy', width: 1200, height: 800 },
      { src: '/images/bowling/bowling3.webp', alt: 'Bowlingová herna s posezením', width: 1200, height: 800 },
      { src: '/images/bowling/bowling4.webp', alt: 'Bowlingová herna s mantinelem', width: 1200, height: 800 }
    ]
  },
  wellness: {
    metadata: {
      title: 'Wellness',
      description: 'Privátní wellness s finskou saunou, parní kabinou a vířivkou v U Fandy. Rezervujte si spa jen pro sebe.'
    },
    hero: {
      eyebrow: 'Wellness',
      title: 'Klid hor v privátním spa',
      description:
        'Zarezervujte si finskou saunu, parní kabinu a vířivku pouze pro vaši skupinu. Ručníky, aromaterapie a prosecco jsou nachystané.'
    },
    highlights: [
      {
        title: 'Finská i bylinná sauna',
        description: 'Cedrové dřevo s chromoterapií doplňuje bylinná parní kabina pro jemnou regeneraci.'
      },
      {
        title: 'Vířivka s výhledem',
        description: 'Vyhřívaná vířivka až pro šest hostů s masážními tryskami a intimním osvětlením.'
      },
      {
        title: 'Relax lounge',
        description: 'Pohodlná lehátka, atmosféra krbu a playlisty pro hluboký odpočinek.'
      }
    ] satisfies readonly { title: string; description: string }[],
    rituals: [
      {
        title: 'Soukromý vstup až pro 6 osob',
        description: 'Celá wellness zóna včetně šaten je vyhrazena jen vaší skupině.'
      },
      {
        title: 'Občerstvení na přání',
        description: 'Objednejte si prosecco, sezónní ovoce nebo domácí limonády přímo do spa.'
      },
      {
        title: 'Masáže a rituály',
        description: 'Zajistíme profesionální masáže a tělové rituály při objednání alespoň 24 hodin předem.'
      }
    ] satisfies readonly { title: string; description: string }[],
    ritualsTitle: 'Rituály na míru',
    amenities: [
      {
        title: 'Otevírací doba',
        description: 'Denně 10:00–22:00. Poslední vstup ve 20:30, abyste si užili plných 90 minut.'
      },
      {
        title: 'Vybavení',
        description: 'Pro každého hosta jsou připravené ručníky, prostěradla, kosmetika i fén.'
      },
      {
        title: 'Rezervace',
        description: 'Kontaktujte recepci na +420 000 000 000 nebo info@u-fandy.cz. Ozveme se do 24 hodin.'
      }
    ] satisfies readonly { title: string; description: string }[],
    amenitiesTitle: 'Co je v ceně',
    cta: {
      title: 'Rezervujte si privátní spa',
      description: 'Napište nám preferovaný termín a přizpůsobíme rituál vašim přáním.',
      buttonLabel: 'Poptat termín'
    },
    gallery: [
      { src: '/images/hero/bazen.webp', alt: 'Wellness bazén s jemným osvětlením', width: 1200, height: 800 },
      { src: '/images/placeholders/hero.svg', alt: 'Výhled na hory z relax zóny', width: 1200, height: 800 },
      { src: '/images/placeholders/room.svg', alt: 'Vyhřívaná lehátka v privátním spa', width: 1200, height: 800 },
      { src: '/images/placeholders/restaurant.svg', alt: 'Občerstvení s proseccem ve wellness', width: 1200, height: 800 },
      { src: '/images/bowling/bowling2.webp', alt: 'Atmosférické osvětlení večerního rituálu', width: 1200, height: 800 },
      { src: '/images/placeholders/hall.svg', alt: 'Relax lounge připravená pro páry', width: 1200, height: 800 }
    ] satisfies readonly { src: string; alt: string; width: number; height: number }[]
  },
  gallery: {
    metadata: {
      title: 'Galerie',
      description: 'Prohlédněte si fotografie pokojů, gastronomie, wellness i akcí v hotelu U Fandy.'
    },
    heading: {
      eyebrow: 'Galerie',
      title: 'Nakoukněte k U Fandy',
      description: 'Výběr momentek z ubytování, gastronomie a zážitků v Malé Moravě.'
    },
    info: [
      {
        title: 'Designové ubytování',
        description: 'Pokoje inspirované horami, přírodní materiály a panoramatické výhledy.'
      },
      {
        title: 'Gastronomie',
        description: 'Sezónní menu, otevřená kuchyně a degustace vín s naším someliérem.'
      },
      {
        title: 'Wellness & sport',
        description: 'Privátní spa, vířivka a bowlingové dráhy pro aktivní relax.'
      },
      {
        title: 'Akce & oslavy',
        description: 'Banketní sál, terasa a dekorace na míru svatbám i firemním akcím.'
      }
    ] satisfies readonly { title: string; description: string }[],
    images: [
      { src: '/images/hero/bazen.webp', alt: 'Privátní wellness s bazénem a lehátky', width: 1200, height: 800 },
      { src: '/images/hero/pizza.webp', alt: 'Restaurace připravená na večeři', width: 1200, height: 800 },
      { src: '/images/bowling/bowling1.webp', alt: 'Bowlingová lounge s barovým osvětlením', width: 1200, height: 800 },
      { src: '/images/bowling/bowling2.webp', alt: 'Barevně nasvícené bowlingové dráhy', width: 1200, height: 800 },
      { src: '/images/bowling/bowling3.webp', alt: 'Posezení u bowlingových drah', width: 1200, height: 800 },
      { src: '/images/bowling/bowling4.webp', alt: 'Bowlingová dráha s dětskými mantinely', width: 1200, height: 800 },
      { src: '/images/placeholders/room.svg', alt: 'Designový hotelový pokoj s dřevěnými detaily', width: 1200, height: 800 },
      { src: '/images/placeholders/restaurant.svg', alt: 'Šéfkuchař servíruje sezónní chod', width: 1200, height: 800 },
      { src: '/images/placeholders/hall.svg', alt: 'Sál vyzdobený na oslavu', width: 1200, height: 800 },
      { src: '/images/placeholders/bowling.svg', alt: 'Ilustrace bowlingového zážitku', width: 1200, height: 800 },
      { src: '/images/placeholders/hero.svg', alt: 'Exteriér hotelu U Fandy mezi stromy', width: 1200, height: 800 },
      { src: '/images/placeholders/career.svg', alt: 'Tým U Fandy usmívající se na recepci', width: 1200, height: 800 }
    ] satisfies readonly { src: string; alt: string; width: number; height: number }[]
  },
  hall: {
    metadata: {
      title: 'Společenský sál',
      description: 'Flexibilní sál pro svatby, konference i koncerty. Navrhneme scénář na míru.'
    },
    heading: {
      eyebrow: 'Společenský sál',
      title: 'Prostor, který roste s vašimi ambicemi',
      description:
        'Modulární scéna, elegantní interiér a špičková technika. Organizujeme svatby, gala večery i firemní summity.'
    },
    description:
      'Každá událost je unikátní. Náš eventový tým připraví dramaturgii, scénografii i koordinaci hostů tak, aby vše šlapalo na minutu přesně.',
    features: [
      'Kapacita až 120 hostů v banketovém uspořádání',
      'LED stěna, profesionální ozvučení a inteligentní osvětlení',
      'Hybridní technika pro konferenční přenosy',
      'Zázemí pro catering a barový servis',
      'Možnost propojení s venkovní terasou'
    ],
    concierge: {
      title: 'Event concierge',
      description:
        'Pošlete nám představu na event@u-fandy.cz a připravíme vám kompletní nabídku včetně 3D vizualizace prostoru.'
    }
  },
  career: {
    metadata: {
      title: 'Kariéra',
      description: 'Přidejte se k týmu U Fandy. Tvoříme prostředí, kde roste talent a vášeň pro hospitality.'
    },
    heading: {
      eyebrow: 'Kariéra',
      title: 'Hledáme lidi, kteří milují hosty',
      description:
        'U Fandy je týmová spolupráce základ. Nabízíme férové odměny, školení i možnost ubytování.'
    },
    positions: [
      {
        title: 'Chef de partie',
        description: 'Zkušený kuchař se zaměřením na moderní gastronomii a vedení juniorního týmu.',
        type: 'Plný úvazek'
      },
      {
        title: 'Recepční s AJ/NJ',
        description: 'Komunikace s hosty, práce s rezervačním systémem a concierge služby.',
        type: 'Krátký/dlouhý týden'
      },
      {
        title: 'Event koordinátor/ka',
        description: 'Plánování svateb a firemních akcí, práce s dodavateli a dohled nad realizací.',
        type: 'Plný úvazek'
      }
    ],
    contactCta: 'Pošlete CV na kariera@u-fandy.cz',
    openCall: {
      title: 'Nepíšeme pro vás pozici?',
      description:
        'Napište nám, co by vás bavilo, a vytvoříme roli na míru. Vítáme i brigády a stáže pro studenty hotelových škol.'
    }
  },
  reservationPage: {
    metadata: {
      title: 'Rezervace',
      description: 'Pošlete nám poptávku na pobyt, firemní akci nebo oslavu. Ozveme se do 24 hodin.'
    },
    heading: {
      eyebrow: 'Rezervace',
      title: 'Poptejte svůj zážitek u Fandy',
      description:
        'Napište nám, pro kolik osob plánujete pobyt a jaké služby vás lákají. Ozveme se s nabídkou.',
      align: 'center'
    }
  },
  cookies: {
    metadata: {
      title: 'Cookies',
      description: 'Informace o používání souborů cookies na webu U Fandy.'
    },
    intro: 'Na webu U Fandy dbáme na soukromí. Cookies používáme jen v nezbytném rozsahu.',
    sections: [
      {
        title: 'Co jsou cookies',
        content:
          'Cookies jsou malé textové soubory ukládané do vašeho zařízení. Pomáhají nám analyzovat návštěvnost a zlepšovat služby.'
      },
      {
        title: 'Jaké cookies používáme',
        content:
          'Používáme pouze technické cookies nezbytné pro fungování webu a anonymizovanou analytiku. Nepoužíváme marketingové cookies.'
      },
      {
        title: 'Jak odmítnout cookies',
        content:
          'Nastavení cookies lze upravit v nastavení vašeho prohlížeče. Vypnutí technických cookies může omezit funkčnost webu.'
      }
    ]
  },
  privacy: {
    metadata: {
      title: 'Zásady ochrany osobních údajů',
      description: 'Jak nakládáme s osobními údaji hostů a partnerů hotelu U Fandy.'
    },
    intro:
      'Věříme v otevřenost. Proto přehledně popisujeme, jak chráníme vaše data a na koho se můžete obrátit.',
    sections: [
      {
        title: 'Správce osobních údajů',
        content: 'Správcem vašich údajů je společnost U Fandy s.r.o., Malá Morava 123, 788 33 Malá Morava.'
      },
      {
        title: 'Jaké údaje zpracováváme',
        content:
          'Jméno, kontaktní údaje, informace o rezervaci, platební údaje a komunikaci s vámi. Údaje uchováváme po dobu zákonných povinností.'
      },
      {
        title: 'Účely zpracování',
        content:
          'Zpracování rezervací, plnění smlouvy, účetnictví a zasílání informací o službách na základě vašeho souhlasu.'
      },
      {
        title: 'Vaše práva',
        content:
          'Máte právo na přístup, opravu, výmaz, omezení zpracování, přenositelnost údajů i podání stížnosti u ÚOOÚ.'
      },
      {
        title: 'Kontakt na pověřence',
        content: 'privacy@u-fandy.cz'
      }
    ],
    title: 'Zásady ochrany osobních údajů'
  },
  reservationForm: {
    submitIdle: 'Odeslat poptávku',
    submitPending: 'Odesílám…',
    success: 'Děkujeme! Ozveme se vám co nejdříve s potvrzením.',
    rateLimit: 'Odesíláte příliš často, zkuste to prosím později.',
    genericError: 'Zkontrolujte prosím zvýrazněná pole.',
    fields: {
      name: { label: 'Jméno a příjmení', error: 'Zadejte prosím své jméno.' },
      email: { label: 'E-mail', error: 'Zadejte platný e-mail.' },
      phone: {
        label: 'Telefon',
        min: 'Telefon musí mít alespoň 9 číslic.',
        format: 'Telefonní číslo může obsahovat pouze číslice a +.'
      },
      arrivalDate: { label: 'Datum příjezdu', error: 'Vyberte prosím datum příjezdu.' },
      guests: {
        label: 'Počet hostů',
        required: 'Zadejte počet hostů.',
        min: 'Alespoň jeden host.',
        max: 'Pro větší skupiny nás prosím kontaktujte.'
      },
      note: { label: 'Poznámka', max: 'Zpráva může mít maximálně 500 znaků.' },
      honeypot: 'Nechte prázdné'
    }
  }
};

export default cs;
