import type { Messages, NavLink } from './schema';

const de: Messages = {
  common: {
    brandName: 'U Fandy',
    skipToContent: 'Zum Inhalt springen',
    header: {
      menuLabel: 'Menü',
      navigationLabel: 'Hauptnavigation',
      navLinks: [
        { href: '/', label: 'Startseite', hasDropdown: true },
        { href: '/ubytovani', label: 'Zimmer' },
        { href: '/restaurace', label: 'Restaurant' },
        { href: '/galerie', label: 'Galerie' },
        { href: '/wellness', label: 'Wellness' },
        { href: '/bowling', label: 'Bowling' },
        { href: '/sal', label: 'Saal' },
        { href: '/rezervovat-pobyt', label: 'Aufenthalt buchen', variant: 'cta' }
      ] satisfies readonly NavLink[],
      localeSwitcherLabel: 'Sprache ändern'
    },
    footer: {
      description:
        'Hotel, Restaurant und Sportangebot im Herzen des Altvatergebirges. Wir verbinden komfortables Wohnen, kulinarische Erlebnisse und aktive Erholung.',
      navigation: {
        title: 'Navigation',
        links: [
          { href: '/', label: 'Startseite' },
          { href: '/ubytovani', label: 'Zimmer' },
          { href: '/restaurace', label: 'Restaurant' },
          { href: '/bowling', label: 'Bowling' }
        ] satisfies readonly NavLink[]
      },
      contact: {
        title: 'Kontakt',
        items: ['Malá Morava 123', '788 33 Malá Morava', '+420 000 000 000', 'info@u-fandy.cz']
      },
      legal: {
        title: 'Rechtliches',
        links: [
          { href: '/cookies', label: 'Cookies' },
          { href: '/zasady-ochrany-osobnich-udaju', label: 'Datenschutz' }
        ] satisfies readonly NavLink[]
      },
      rights: '© {year} U Fandy. Alle Rechte vorbehalten.'
    }
  },
  layout: {
    metadata: {
      title: {
        default: 'U Fandy — Hotel, Restaurant und Erlebnisse im Altvatergebirge',
        template: '%s | U Fandy'
      },
      description:
        'Modernes Wohnen, exzellente Gastronomie, Bowling und Eventflächen in Malá Morava. Buchen Sie Ihren Aufenthalt bei U Fandy.',
      keywords: ['Hotel', 'Restaurant', 'Bowling', 'Malá Morava', 'Altvatergebirge', 'Unterkunft'],
      authors: [{ name: 'U Fandy' }],
      creator: 'U Fandy',
      publisher: 'U Fandy',
      openGraph: {
        title: 'U Fandy — Hotel, Restaurant und Erlebnisse',
        description: 'Modernes Wohnen, ausgezeichnete Gastronomie und Freizeitangebote in Malá Morava.'
      },
      twitter: {
        title: 'U Fandy — Hotel, Restaurant und Erlebnisse',
        description: 'Modernes Wohnen, ausgezeichnete Gastronomie und Freizeitangebote in Malá Morava.'
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
      servesCuisine: 'Moderne tschechische Küche',
      amenities: ['Bowlingbahnen', 'Wellness']
    }
  },
  home: {
    hero: {
      title: 'Perfekter Aufenthalt im Herzen der Beskiden',
      subtitle: 'Große Erholung, angenehme Entspannung.'
    },
    onlineReservation: {
      eyebrow: 'Online-Reservierung',
      title: 'Bereit für Ihren nächsten Ausflug in die Berge',
      description: 'Unsere Rezeption antwortet innerhalb von 24 Stunden und hilft bei der Wahl des passenden Zimmers und Extras.',
      callCta: 'Rufen Sie uns an',
      emailCta: 'info@u-fandy.cz'
    },
    destination: {
      eyebrow: 'Destination',
      title: 'Der magischste Ort in Malá Morava',
      description:
        'U Fandy ist ein Zuhause für Feinschmecker, Familien und Sportfans. Öffnen Sie das Fenster und riechen Sie den Wald, während in der Küche frisches Gebäck entsteht und das Bowlingturnier startet.',
      features: [
        {
          title: 'Von den Bergen inspirierte Architektur',
          description:
            'Massives Holz, natürliche Textilien und Panoramafenster schaffen eine Atmosphäre wie im Herzen des Altvatergebirges.'
        },
        {
          title: '38 stilvolle Zimmer und Apartments',
          description:
            'Von gemütlichen Doppelzimmern bis zu Familienapartments mit Terrasse. Alle mit Smart-Steuerung und Klimaanlage.'
        },
        {
          title: 'Angebote für aktive und ruhige Erholung',
          description:
            'Bowling, Wellness, E-Bike-Verleih und Themenabende an der Bar mit einem erfahrenen Team.'
        }
      ],
      stats: [
        { value: '38', label: 'ZIMMER' },
        { value: '120', label: 'SITZPLÄTZE IM RESTAURANT' },
        { value: '4', label: 'BOWLINGBAHNEN' },
        { value: '2 km', label: 'ZU DEN PISTEN' }
      ],
      imageAlt: 'Designzimmer im U Fandy'
    },
    hotelHighlights: [
      {
        eyebrow: 'Hotel',
        title: 'Komfort in den Bergen',
        description: 'Premium-Matratzen, Verdunkelungsvorhänge, Aromatherapie und Concierge-Service für absolute Entspannung.'
      },
      {
        eyebrow: 'Gastronomie',
        title: 'Signature-Küche des Chefkochs',
        description: 'Saisonale Menüs aus regionalen Zutaten, hausgebackenes Brot und ein Weinkeller mit 120 Etiketten.'
      },
      {
        eyebrow: 'Erlebnisse',
        title: 'Programm für jeden Tag',
        description: 'Privates Wellness, Bowlingturniere, Firmenevents und Themenabende mit Livemusik.'
      }
    ],
    roomsSection: {
      eyebrow: 'Zimmer',
      title: 'Designzimmer mit dem Duft von Holz und Bergluft',
      description:
        'Jedes Zimmer ist ein Unikat, inspiriert von der Natur. Alle verfügen über Premium-Matratzen, Verdunkelung und schnelles WLAN.'
    },
    restaurantSection: {
      eyebrow: 'Restaurant & Bar',
      title: 'Saisonale Menüs aus regionalen Zutaten',
      description:
        'Die Abende gehören unserem Restaurant und der Bar: saisonale Zutaten, hausgebackenes Brot, kräftige Saucen und Signature-Cocktails.',
      specials: [
        'Gebratene Entenbrust · Kürbispüree · karamellisierte Birne',
        'Langsam geschmortes Lammragout · Rotweinjus · Kräuterpolenta',
        'Gebratene Forelle · Kräuterbutter · knackiges Gartengemüse',
        'Warmer Schokoladenfondant · Salzkaramell · Vanilleeis'
      ],
      cta: 'Tagesmenü',
      imageAlt: 'Restaurant U Fandy'
    },
    experienceSection: {
      eyebrow: 'Erlebnis',
      title: 'Bowling, Sauna, Bike-Verleih und Abendbar',
      description: 'Entspannen Sie nach einem Ausflug im privaten Wellness oder spielen Sie ein Turnier auf Profi-Bahnen.',
      gallery: [
        { src: '/images/placeholders/hero.svg', alt: 'Außenansicht Hotel U Fandy', width: 1200, height: 800 },
        { src: '/images/placeholders/restaurant.svg', alt: 'Restaurant U Fandy', width: 1200, height: 800 },
        { src: '/images/placeholders/bowling.svg', alt: 'Bowlingbahnen', width: 1200, height: 800 },
        { src: '/images/placeholders/hall.svg', alt: 'Veranstaltungssaal', width: 1200, height: 800 }
      ]
    },
    testimonials: {
      eyebrow: 'Bewertungen',
      title: 'Was unsere Gäste sagen',
      description: 'Echte Stimmen von Familien, Sportlern und Firmenkunden, die gerne zurückkehren.',
      items: [
        {
          quote:
            'Wir lieben die Atmosphäre bei U Fandy. Das Team kennt unseren Lieblingswein und die Kinder freuen sich auf Bowling und Wellness.',
          name: 'Lucie & Petr',
          role: 'Familie aus Prag'
        },
        {
          quote: 'Perfekte Location für unseren Firmen-Retreat. Moderne Technik im Saal, großartiges Essen und inspirierende Umgebung.',
          name: 'Jana',
          role: 'HR-Managerin, Brünn'
        },
        {
          quote: 'Wellness mit Kräutersauna und Massagen war ein Traum. Wir kommen jede Saison wieder.',
          name: 'Marek',
          role: 'Stammgast'
        }
      ]
    },
    wellness: {
      eyebrow: 'Wellness',
      title: 'Bergruhe im modernen Spa',
      description:
        'Nach einem Tag in den Bergen wartet Wärme in Sauna, Whirlpool und Relaxzone – gern mit einem Glas Prosecco.',
      highlights: [
        { title: 'Private Sauna & Whirlpool', description: 'Buchen Sie Zeit nur für sich und entspannen Sie nach einem aktiven Tag.' },
        { title: 'Rituale mit Alpenkräutern', description: 'Aromatherapie und Anwendungen mit regionalen Kräutern und Quellwasser.' },
        { title: 'Relax-Lounge mit Aussicht', description: 'Bequeme Liegen, Kamin und beruhigender Blick ins Tal.' }
      ],
      imageAlt: 'Wellness- und Relaxbereich'
    },
    location: {
      eyebrow: 'Lage',
      title: 'Hotel U Fandy',
      description: 'Malá Morava 123, 788 33 Malá Morava',
      note:
        'Parkplätze stehen kostenlos direkt am Hotel zur Verfügung. Die Rezeption ist täglich von 7 bis 22 Uhr geöffnet und empfiehlt gern Ausflüge.',
      highlights: [
        { label: 'Skigebiet Dolní Morava', value: '1,8 km' },
        { label: 'Sky Walk', value: '2,5 km' },
        { label: 'Trailpark & Bike-Verleih', value: 'direkt beim Hotel' },
        { label: 'Flughafen Pardubice', value: '90 Min. mit dem Auto' }
      ],
      mapAlt: 'Anfahrtskarte zum Hotel U Fandy'
    },
    reservation: {
      eyebrow: 'Reservierung',
      title: 'Kontaktieren Sie uns – wir erstellen ein individuelles Angebot',
      description: 'Wir melden uns innerhalb von 24 Stunden. Für Gruppen organisieren wir Catering, Technik und Zusatzprogramme.',
      hotelHoursTitle: 'Hotel',
      restaurantHoursTitle: 'Restaurant',
      bowlingHoursTitle: 'Bowling'
    }
  },
  accommodation: {
    metadata: {
      title: 'Zimmer',
      description: 'Designzimmer, privates Wellness und Concierge-Service. Entdecken Sie komfortable Aufenthalte bei U Fandy.'
    },
    heading: {
      eyebrow: 'Zimmer',
      title: 'Schlaf, auf den Sie sich freuen',
      description:
        'Wählen Sie das Zimmer oder Apartment nach Stimmung. Alle bieten Klimaanlage, hochwertige Kosmetik und Smart-TV.'
    },
    servicesTitle: 'Leistungen inklusive',
    services: [
      '✔️ Reichhaltiges Frühstück mit hausgebackenem Brot',
      '✔️ Täglich 60 Minuten Zugang zum Wellnessbereich',
      '✔️ Parken am Hotel und Fahrradaufbewahrung',
      '✔️ Schnelles WLAN und Streamingplattformen',
      '✔️ Concierge-Team, das Wünsche erfüllt'
    ],
    receptionHoursTitle: 'Rezeption',
    checkin: {
      title: 'Check-in & Check-out',
      description:
        'Check-in ab 15 Uhr, Check-out bis 11 Uhr. Sie benötigen andere Zeiten? Sagen Sie uns Bescheid.'
    }
  },
  restaurant: {
    metadata: {
      title: 'Restaurant',
      description: 'Signature-Küche und Bar mit regionalen Zutaten. Probieren Sie das saisonale Menü von U Fandy.'
    },
    heading: {
      eyebrow: 'Restaurant',
      title: 'Zutaten aus Jeseníky, Techniken aus aller Welt',
      description:
        'Jeder Gang erzählt eine Geschichte. Wir beziehen Produkte von lokalen Höfen, nutzen saisonale Kräuter und Inspiration aus der Weltküche.'
    },
    openingTitle: 'Öffnungszeiten',
    tasting: {
      title: 'Degustationsabende',
      description: 'Jeden Freitag servieren wir ein Sieben-Gänge-Menü mit Weinbegleitung. Bitte 48 Stunden im Voraus reservieren.'
    },
    reservation: {
      title: 'Tischreservierung',
      description: 'Rufen Sie +420 000 000 000 an oder schreiben Sie an restaurace@u-fandy.cz.'
    }
  },
  contact: {
    metadata: {
      title: 'Kontakt',
      description: 'Wir sind täglich für Sie da. Rufen Sie an, schreiben Sie oder besuchen Sie Hotel U Fandy.'
    },
    heading: {
      eyebrow: 'Kontakt',
      title: 'Melden Sie sich – wir beraten zu Aufenthalt und Events',
      description:
        'Unser Team hilft bei Reservierungen, Gutscheinen oder der Planung Ihres Teambuildings.'
    },
    contacts: [
      { label: 'Rezeption', value: '+420 000 000 000', href: 'tel:+420000000000' },
      { label: 'E-Mail', value: 'info@u-fandy.cz', href: 'mailto:info@u-fandy.cz' },
      { label: 'Adresse', value: 'Malá Morava 123, 788 33 Malá Morava' }
    ],
    billing: {
      title: 'Rechnungsdaten',
      description: 'U Fandy s.r.o., Firmen-Nr. 00000000\nUSt-ID CZ00000000'
    },
    receptionHoursTitle: 'Rezeption',
    restaurantHoursTitle: 'Restaurant'
  },
  bowling: {
    metadata: {
      title: 'Bowling',
      description: 'Bowling – zwei moderne Bahnen mit optionalen Kinderbumpern und gemütlichem Ambiente für die ganze Familie.'
    },
    hero: {
      eyebrow: 'Bowling',
      title: 'SPIELEN SIE AUF MODERNEN BAHNEN',
      description:
        'Spielen Sie auf zwei modernen Bahnen. Eine Bahn lässt sich mit ausfahrbaren Bumpern kinderfreundlich gestalten, damit keine Kugel im Gutter landet.'
    },
    gallery: [
      { src: '/images/bowling/bowling1.webp', alt: 'Bowlingbahn mit Bar', width: 1200, height: 800 },
      { src: '/images/bowling/bowling2.webp', alt: 'Beleuchtete Bowlingbahnen', width: 1200, height: 800 },
      { src: '/images/bowling/bowling3.webp', alt: 'Bowling-Lounge mit Sitzbereich', width: 1200, height: 800 },
      { src: '/images/bowling/bowling4.webp', alt: 'Bowlingbahn mit Bumper-System', width: 1200, height: 800 }
    ]
  },
  wellness: {
    metadata: {
      title: 'Wellness',
      description: 'Privates Wellness mit finnischer Sauna, Dampfkabine und Whirlpool im U Fandy. Reservieren Sie den Spa-Bereich exklusiv für sich.'
    },
    hero: {
      eyebrow: 'Wellness',
      title: 'Bergruhe im privaten Spa',
      description:
        'Reservieren Sie finnische Sauna, Dampfkabine und Whirlpool exklusiv für Ihre Gruppe. Handtücher, Aromatherapie und Prosecco stehen bereit.'
    },
    highlights: [
      {
        title: 'Finnische & Kräutersauna',
        description: 'Zedernholzsauna mit Chromotherapie, ergänzt durch ein Kräuterdampfbad für sanfte Regeneration.'
      },
      {
        title: 'Whirlpool mit Ausblick',
        description: 'Beheizter Whirlpool für bis zu sechs Gäste mit Massagedüsen und stimmungsvollem Licht.'
      },
      {
        title: 'Ruhelounge',
        description: 'Bequeme Liegen, Kaminatmosphäre und kuratierte Playlists zum Abschalten.'
      }
    ] satisfies readonly { title: string; description: string }[],
    rituals: [
      {
        title: 'Privater Eintritt für bis zu 6 Personen',
        description: 'Der gesamte Wellnessbereich inklusive Umkleiden gehört nur Ihrer Gruppe.'
      },
      {
        title: 'Erfrischungen auf Wunsch',
        description: 'Bestellen Sie Prosecco, saisonales Obst oder hausgemachte Limonaden direkt in den Spa.'
      },
      {
        title: 'Massageanwendungen',
        description: 'Wir organisieren professionelle Massagen und Körperrituale bei Buchung mindestens 24 Stunden im Voraus.'
      }
    ] satisfies readonly { title: string; description: string }[],
    ritualsTitle: 'Maßgeschneiderte Rituale',
    amenities: [
      {
        title: 'Öffnungszeiten',
        description: 'Täglich 10:00–22:00. Letzter Einlass 20:30, damit Sie 90 Minuten voll auskosten können.'
      },
      {
        title: 'Ausstattung',
        description: 'Handtücher, Laken, Kosmetik und Föhn stehen für jeden Gast bereit.'
      },
      {
        title: 'Reservierungen',
        description: 'Kontaktieren Sie die Rezeption unter +420 000 000 000 oder info@u-fandy.cz. Wir melden uns innerhalb von 24 Stunden.'
      }
    ] satisfies readonly { title: string; description: string }[],
    amenitiesTitle: 'Leistungen inklusive',
    cta: {
      title: 'Buchen Sie Ihr privates Spa',
      description: 'Senden Sie uns Ihren Wunschtermin und wir gestalten das Ritual nach Ihren Vorstellungen.',
      buttonLabel: 'Termin anfragen'
    },
    gallery: [
      { src: '/images/hero/bazen.webp', alt: 'Wellness-Pool mit sanfter Beleuchtung', width: 1200, height: 800 },
      { src: '/images/placeholders/hero.svg', alt: 'Blick auf die Berge aus der Ruhezone', width: 1200, height: 800 },
      { src: '/images/placeholders/room.svg', alt: 'Beheizte Liegen im privaten Spa', width: 1200, height: 800 },
      { src: '/images/placeholders/restaurant.svg', alt: 'Erfrischungen mit Prosecco im Wellnessbereich', width: 1200, height: 800 },
      { src: '/images/bowling/bowling2.webp', alt: 'Stimmungsbeleuchtung für das Abendritual', width: 1200, height: 800 },
      { src: '/images/placeholders/hall.svg', alt: 'Ruhelounge vorbereitet für Paare', width: 1200, height: 800 }
    ] satisfies readonly { src: string; alt: string; width: number; height: number }[]
  },
  gallery: {
    metadata: {
      title: 'Galerie',
      description: 'Entdecken Sie Fotos von Zimmern, Gastronomie, Wellness und Events im Hotel U Fandy.'
    },
    heading: {
      eyebrow: 'Galerie',
      title: 'Ein Blick in das U Fandy',
      description: 'Eine kuratierte Auswahl aus Unterkunft, Kulinarik und Freizeitmomenten in Malá Morava.'
    },
    info: [
      {
        title: 'Design-Unterkünfte',
        description: 'Zimmer im Bergstil, natürliche Materialien und Panoramablicke.'
      },
      {
        title: 'Gastronomie',
        description: 'Saisonale Menüs, offene Küche und Weinverkostungen unseres Sommeliers.'
      },
      {
        title: 'Wellness & Sport',
        description: 'Privates Spa, Whirlpool und Bowlingbahnen für aktive Erholung.'
      },
      {
        title: 'Events & Feiern',
        description: 'Bankettsaal, Terrasse und Dekorationen maßgeschneidert für Hochzeiten und Firmenfeiern.'
      }
    ] satisfies readonly { title: string; description: string }[],
    images: [
      { src: '/images/hero/bazen.webp', alt: 'Privates Wellness mit Pool und Liegen', width: 1200, height: 800 },
      { src: '/images/hero/pizza.webp', alt: 'Restaurantterrasse vorbereitet für das Abendessen', width: 1200, height: 800 },
      { src: '/images/bowling/bowling1.webp', alt: 'Bowling-Lounge mit stimmungsvollem Barlicht', width: 1200, height: 800 },
      { src: '/images/bowling/bowling2.webp', alt: 'Farbig beleuchtete Bowlingbahnen', width: 1200, height: 800 },
      { src: '/images/bowling/bowling3.webp', alt: 'Sitzbereich neben den Bowlingbahnen', width: 1200, height: 800 },
      { src: '/images/bowling/bowling4.webp', alt: 'Bowlingbahn mit kindgerechten Banden', width: 1200, height: 800 },
      { src: '/images/placeholders/room.svg', alt: 'Design-Hotelzimmer mit Holzakzenten', width: 1200, height: 800 },
      { src: '/images/placeholders/restaurant.svg', alt: 'Küchenchef richtet ein saisonales Gericht an', width: 1200, height: 800 },
      { src: '/images/placeholders/hall.svg', alt: 'Festlich dekorierter Veranstaltungssaal', width: 1200, height: 800 },
      { src: '/images/placeholders/bowling.svg', alt: 'Illustration des Bowling-Erlebnisses', width: 1200, height: 800 },
      { src: '/images/placeholders/hero.svg', alt: 'Außenansicht des Hotels U Fandy zwischen Bäumen', width: 1200, height: 800 },
      { src: '/images/placeholders/career.svg', alt: 'U-Fandy-Team lächelt an der Rezeption', width: 1200, height: 800 }
    ] satisfies readonly { src: string; alt: string; width: number; height: number }[]
  },
  hall: {
    metadata: {
      title: 'Veranstaltungssaal',
      description: 'Flexibler Saal für Hochzeiten, Konferenzen und Konzerte. Wir gestalten das passende Konzept.'
    },
    heading: {
      eyebrow: 'Veranstaltungssaal',
      title: 'Ein Raum, der mit Ihren Ansprüchen wächst',
      description:
        'Modulare Bühne, elegantes Interieur und modernste Technik. Wir organisieren Hochzeiten, Galaabende und Business-Summits.'
    },
    description:
      'Jede Veranstaltung ist einzigartig. Unser Event-Team übernimmt Dramaturgie, Szenografie und Gästekoordination, damit alles minutengenau läuft.',
    features: [
      'Kapazität bis 120 Gäste im Bankett-Setup',
      'LED-Wand, professionelle Beschallung und intelligentes Licht',
      'Hybride Technik für Konferenz-Streams',
      'Backstage für Catering und Barservice',
      'Anbindung an die Außenterrasse möglich'
    ],
    concierge: {
      title: 'Event-Concierge',
      description:
        'Schreiben Sie an event@u-fandy.cz und wir erstellen ein komplettes Angebot inklusive 3D-Visualisierung.'
    }
  },
  career: {
    metadata: {
      title: 'Karriere',
      description: 'Werden Sie Teil des U-Fandy-Teams. Wir schaffen ein Umfeld, in dem Talent und Leidenschaft für Gastfreundschaft wachsen.'
    },
    heading: {
      eyebrow: 'Karriere',
      title: 'Wir suchen Menschen mit Gastgeberherz',
      description:
        'Teamarbeit ist bei U Fandy essenziell. Wir bieten faire Bezahlung, Schulungen und optional Unterkunft.'
    },
    positions: [
      {
        title: 'Chef de Partie',
        description: 'Erfahrener Koch mit Fokus auf moderne Gastronomie und Führung eines Junior-Teams.',
        type: 'Vollzeit'
      },
      {
        title: 'Rezeptionist/in mit EN/DE',
        description: 'Gästekommunikation, Reservierungsmanagement und Concierge-Dienste.',
        type: 'Wechselschicht'
      },
      {
        title: 'Eventkoordinator/in',
        description: 'Planung von Hochzeiten und Firmenevents, Zusammenarbeit mit Dienstleistern und Überwachung der Umsetzung.',
        type: 'Vollzeit'
      }
    ],
    contactCta: 'Senden Sie Ihren Lebenslauf an kariera@u-fandy.cz',
    openCall: {
      title: 'Keine passende Stelle dabei?',
      description:
        'Schreiben Sie uns, was Sie begeistert, und wir schaffen eine Rolle nach Maß. Auch Studentenpraktika und Aushilfen sind willkommen.'
    }
  },
  reservationPage: {
    metadata: {
      title: 'Reservierung',
      description: 'Senden Sie uns Ihre Anfrage für Aufenthalt, Firmenevent oder Feier. Wir antworten innerhalb von 24 Stunden.'
    },
    heading: {
      eyebrow: 'Reservierung',
      title: 'Ihr U-Fandy-Erlebnis anfragen',
      description:
        'Teilen Sie uns Anzahl der Gäste und gewünschte Services mit. Wir melden uns mit einem Angebot.',
      align: 'center'
    }
  },
  cookies: {
    metadata: {
      title: 'Cookies',
      description: 'Informationen über den Einsatz von Cookies auf der Website von U Fandy.'
    },
    intro: 'Datenschutz ist uns wichtig. Wir verwenden Cookies nur im notwendigen Umfang.',
    sections: [
      {
        title: 'Was sind Cookies',
        content:
          'Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden. Sie helfen uns, den Traffic zu analysieren und Services zu verbessern.'
      },
      {
        title: 'Welche Cookies wir nutzen',
        content:
          'Wir setzen ausschließlich technisch notwendige Cookies und anonymisierte Analysen ein. Marketing-Cookies verwenden wir nicht.'
      },
      {
        title: 'Cookies ablehnen',
        content:
          'Sie können die Cookie-Einstellungen im Browser anpassen. Das Deaktivieren technischer Cookies kann die Funktionalität einschränken.'
      }
    ]
  },
  privacy: {
    metadata: {
      title: 'Datenschutzerklärung',
      description: 'Wie wir personenbezogene Daten von Gästen und Partnern des Hotels U Fandy verarbeiten.'
    },
    intro:
      'Transparenz ist uns wichtig. Hier erklären wir, wie wir Ihre Daten schützen und wer Ihr Ansprechpartner ist.',
    sections: [
      {
        title: 'Verantwortlicher',
        content: 'Verantwortlich für Ihre Daten ist U Fandy s.r.o., Malá Morava 123, 788 33 Malá Morava.'
      },
      {
        title: 'Welche Daten wir verarbeiten',
        content:
          'Name, Kontaktdaten, Reservierungsinformationen, Zahlungsdaten und unsere Kommunikation. Wir speichern Daten so lange, wie es gesetzlich erforderlich ist.'
      },
      {
        title: 'Zweck der Verarbeitung',
        content:
          'Bearbeitung von Reservierungen, Vertragserfüllung, Buchhaltung und Informationsversand auf Basis Ihrer Einwilligung.'
      },
      {
        title: 'Ihre Rechte',
        content:
          'Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit sowie das Recht auf Beschwerde bei der Aufsichtsbehörde.'
      },
      {
        title: 'Kontakt Datenschutzbeauftragter',
        content: 'privacy@u-fandy.cz'
      }
    ],
    title: 'Datenschutzerklärung'
  },
  reservationForm: {
    submitIdle: 'Anfrage senden',
    submitPending: 'Sende…',
    success: 'Vielen Dank! Wir melden uns in Kürze mit einer Bestätigung.',
    rateLimit: 'Sie senden zu häufig Anfragen, bitte versuchen Sie es später erneut.',
    genericError: 'Bitte überprüfen Sie die markierten Felder.',
    fields: {
      name: { label: 'Vor- und Nachname', error: 'Bitte geben Sie Ihren Namen ein.' },
      email: { label: 'E-Mail', error: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.' },
      phone: {
        label: 'Telefon',
        min: 'Die Telefonnummer muss mindestens 9 Ziffern haben.',
        format: 'Die Telefonnummer darf nur Ziffern und + enthalten.'
      },
      arrivalDate: { label: 'Anreisedatum', error: 'Bitte wählen Sie ein Anreisedatum.' },
      guests: {
        label: 'Anzahl der Gäste',
        required: 'Bitte geben Sie die Anzahl der Gäste an.',
        min: 'Mindestens ein Gast.',
        max: 'Für größere Gruppen kontaktieren Sie uns bitte direkt.'
      },
      note: { label: 'Nachricht', max: 'Die Nachricht darf maximal 500 Zeichen enthalten.' },
      honeypot: 'Leer lassen'
    }
  }
};

export default de;
