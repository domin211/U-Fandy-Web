import type { Dictionary, NavLink } from './cs';

const dictionary: Dictionary = {
  common: {
    brandName: 'U Fandy',
    skipToContent: 'Przejdź do treści',
    header: {
      menuLabel: 'Menu',
      navigationLabel: 'Nawigacja główna',
      navLinks: [
        { href: '/', label: 'Strona główna', hasDropdown: true },
        { href: '/ubytovani', label: 'Noclegi' },
        { href: '/restaurace', label: 'Restauracja' },
        { href: '/galerie', label: 'Galeria' },
        { href: '/wellness', label: 'Wellness' },
        { href: '/bowling', label: 'Kręgle' },
        { href: '/sal', label: 'Sala' },
        { href: '/rezervovat-pobyt', label: 'Zarezerwuj pobyt', variant: 'cta' }
      ] satisfies readonly NavLink[],
      localeSwitcherLabel: 'Zmień język'
    },
    footer: {
      description:
        'Hotel, restauracja i zaplecze sportowe w sercu gór Jesionik. Łączymy komfortowy wypoczynek, kulinarne doznania i aktywny relaks.',
      navigation: {
        title: 'Nawigacja',
        links: [
          { href: '/', label: 'Strona główna' },
          { href: '/ubytovani', label: 'Noclegi' },
          { href: '/restaurace', label: 'Restauracja' },
          { href: '/bowling', label: 'Kręgle' }
        ]
      },
      contact: {
        title: 'Kontakt',
        items: ['Malá Morava 123', '788 33 Malá Morava', '+420 000 000 000', 'info@u-fandy.cz']
      },
      legal: {
        title: 'Prawne',
        links: [
          { href: '/cookies', label: 'Cookies' },
          { href: '/zasady-ochrany-osobnich-udaju', label: 'Ochrona danych' }
        ]
      },
      rights: '© {year} U Fandy. Wszelkie prawa zastrzeżone.'
    }
  },
  layout: {
    metadata: {
      title: {
        default: 'U Fandy — Hotel, restauracja i doświadczenia w górach Jesionik',
        template: '%s | U Fandy'
      },
      description:
        'Nowoczesne noclegi, wyśmienita gastronomia, kręgle i przestrzeń eventowa w Malá Morava. Zarezerwuj pobyt w U Fandy już dziś.',
      keywords: ['hotel', 'restauracja', 'kręgle', 'Malá Morava', 'Jesioniki', 'noclegi'],
      authors: [{ name: 'U Fandy' }],
      creator: 'U Fandy',
      publisher: 'U Fandy',
      openGraph: {
        title: 'U Fandy — Hotel, restauracja i doświadczenia',
        description: 'Nowoczesne noclegi, wyśmienita gastronomia i atrakcje w Malá Morava.'
      },
      twitter: {
        title: 'U Fandy — Hotel, restauracja i doświadczenia',
        description: 'Nowoczesne noclegi, wyśmienita gastronomia i atrakcje w Malá Morava.'
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
      servesCuisine: 'Nowoczesna kuchnia czeska',
      amenities: ['Tory do kręgli', 'Wellness']
    }
  },
  home: {
    hero: {
      eyebrow: 'Witamy w U Fandy',
      title: 'Nowoczesne górskie schronienie dla smakoszy, podróżników i sportowców',
      description:
        'Łączymy hotelowy komfort, autorską kuchnię i topowe aktywności. Ciesz się górskim powietrzem bez kompromisów w jakości obsługi.',
      primaryCta: 'Zarezerwuj pobyt',
      secondaryCta: 'Poznaj restaurację'
    },
    onlineReservation: {
      eyebrow: 'Rezerwacja online',
      title: 'Gotowi na twój kolejny wypad w góry',
      description: 'Recepcja odpowiada w ciągu 24 godzin i pomoże wybrać pokój oraz dodatki.',
      callCta: 'Zadzwoń do nas',
      emailCta: 'info@u-fandy.cz'
    },
    destination: {
      eyebrow: 'Destynacja',
      title: 'Najbardziej magiczne miejsce w Malá Morava',
      description:
        'Hotel U Fandy to dom dla smakoszy, rodzin i miłośników sportu. Wystarczy otworzyć okno, by poczuć zapach lasu, gdy w restauracji pieczemy świeże pieczywo, a wieczorny turniej w kręgle właśnie startuje.',
      features: [
        {
          title: 'Architektura inspirowana górami',
          description:
            'Lite drewno, naturalne tkaniny i panoramiczne okna tworzą atmosferę przenoszącą prosto w serce Jesioników.'
        },
        {
          title: '38 stylowych pokoi i apartamentów',
          description:
            'Od przytulnych pokoi dwuosobowych po rodzinne apartamenty z tarasem. Wszystkie z inteligentnym sterowaniem i klimatyzacją.'
        },
        {
          title: 'Zaplecze dla aktywnego i spokojnego wypoczynku',
          description:
            'Kręgle, wellness, wypożyczalnia rowerów elektrycznych oraz tematyczne wieczory w barze prowadzone przez doświadczony zespół.'
        }
      ],
      stats: [
        { value: '38', label: 'POKOJÓW' },
        { value: '120', label: 'MIEJSC W RESTAURACJI' },
        { value: '4', label: 'TORY DO KRĘGLI' },
        { value: '2 km', label: 'DO STOKÓW' }
      ],
      imageAlt: 'Designerskie pokoje U Fandy'
    },
    hotelHighlights: [
      {
        eyebrow: 'Hotel',
        title: 'Komfort otulony górami',
        description: 'Najwyższej jakości materace, zasłony zaciemniające, aromaterapia i concierge dla pełnego spokoju.'
      },
      {
        eyebrow: 'Gastronomia',
        title: 'Autorska kuchnia szefa',
        description: 'Sezonowe menu z lokalnych składników, domowe pieczywo i piwnica win z 120 etykietami.'
      },
      {
        eyebrow: 'Atrakcje',
        title: 'Program na każdy dzień',
        description: 'Prywatne wellness, turnieje w kręgle, eventy firmowe i tematyczne wieczory z muzyką na żywo.'
      }
    ],
    roomsSection: {
      eyebrow: 'Noclegi',
      title: 'Pokoje pachnące drewnem i górskim powietrzem',
      description:
        'Każdy pokój to oryginał inspirowany okoliczną przyrodą. Wszystkie mają najlepsze materace, zasłony zaciemniające i szybkie Wi-Fi.'
    },
    restaurantSection: {
      eyebrow: 'Restauracja i Bar',
      title: 'Sezonowe menu z lokalnych produktów',
      description:
        'Szef kuchni łączy tradycyjne receptury z nowoczesną gastronomią. Codziennie pieczemy własne pieczywo, przygotowujemy desery i mieszamy autorskie koktajle.',
      highlights: [
        'Degustacyjne menu pięciodaniowe',
        'Codzienne śniadanie w formie bufetu',
        'Wyborna kawa i autorskie koktajle',
        'Opcje dla wegetarian i bez glutenu'
      ],
      cta: 'Dowiedz się więcej o restauracji',
      imageAlt: 'Restauracja U Fandy'
    },
    experienceSection: {
      eyebrow: 'Doświadczenia',
      title: 'Kręgle, sauna, wypożyczalnia rowerów i wieczorny bar',
      description: 'Zrelaksuj się po wędrówce w prywatnym wellness lub zagraj w turnieju na profesjonalnych torach.',
      gallery: [
        { src: '/images/placeholders/hero.svg', alt: 'Elewacja hotelu U Fandy', width: 1200, height: 800 },
        { src: '/images/placeholders/restaurant.svg', alt: 'Restauracja U Fandy', width: 1200, height: 800 },
        { src: '/images/placeholders/bowling.svg', alt: 'Tory do kręgli', width: 1200, height: 800 },
        { src: '/images/placeholders/hall.svg', alt: 'Sala eventowa', width: 1200, height: 800 }
      ]
    },
    testimonials: {
      eyebrow: 'Opinie',
      title: 'Co mówią nasi goście',
      description: 'Autentyczne opinie rodzin, sportowców i klientów firmowych, którzy chętnie do nas wracają.',
      items: [
        {
          quote:
            'Uwielbiamy atmosferę U Fandy. Obsługa pamięta nasze ulubione wino, a dzieci nie mogą się doczekać kręgli i wellness.',
          name: 'Lucie i Petr',
          role: 'rodzina z Pragi'
        },
        {
          quote: 'Idealne zaplecze na firmowy wyjazd. Nowoczesna technika w sali, świetne jedzenie i inspirujące otoczenie.',
          name: 'Jana',
          role: 'menedżer HR, Brno'
        },
        {
          quote: 'Wellness z ziołową sauną i masażami to spełnienie marzeń. Wracamy tu w każdą porę roku.',
          name: 'Marek',
          role: 'stały gość'
        }
      ]
    },
    wellness: {
      eyebrow: 'Wellness',
      title: 'Górski spokój w nowoczesnym spa',
      description:
        'Po dniu w górach zanurz się w cieple sauny, jacuzzi i strefy relaksu z kieliszkiem prosecco.',
      highlights: [
        { title: 'Prywatna sauna i jacuzzi', description: 'Zarezerwuj czas tylko dla siebie i zregeneruj ciało po całym dniu.' },
        { title: 'Rytuały z górskimi ziołami', description: 'Aromaterapia i zabiegi z wykorzystaniem lokalnych ziół i źródlanej wody.' },
        { title: 'Strefa relaksu z widokiem', description: 'Wygodne leżaki, kominek i kojący widok na dolinę.' }
      ],
      imageAlt: 'Strefa wellness i relaksu'
    },
    location: {
      eyebrow: 'Lokalizacja',
      title: 'Hotel U Fandy',
      description: 'Malá Morava 123, 788 33 Malá Morava',
      note:
        'Parking jest bezpłatny tuż przy hotelu. Recepcja czynna codziennie od 7:00 do 22:00 i chętnie poleci najlepsze wycieczki w okolicy.',
      highlights: [
        { label: 'Ośrodek narciarski Dolní Morava', value: '1,8 km' },
        { label: 'Ścieżka w obłokach', value: '2,5 km' },
        { label: 'Park trail & wypożyczalnia rowerów', value: 'na miejscu' },
        { label: 'Lotnisko Pardubice', value: '90 min autem' }
      ],
      mapAlt: 'Mapa dojazdu do hotelu U Fandy'
    },
    reservation: {
      eyebrow: 'Rezerwacja',
      title: 'Napisz do nas, przygotujemy ofertę na miarę',
      description: 'Odezwiemy się w ciągu 24 godzin. Dla grup zapewniamy catering, technikę i dodatkowe atrakcje.',
      hotelHoursTitle: 'Hotel',
      restaurantHoursTitle: 'Restauracja',
      bowlingHoursTitle: 'Kręgle'
    }
  },
  accommodation: {
    metadata: {
      title: 'Noclegi',
      description: 'Designerskie pokoje, prywatne wellness i usługi concierge. Odkryj komfort w hotelu U Fandy.'
    },
    heading: {
      eyebrow: 'Noclegi',
      title: 'Sen, na który czekasz z niecierpliwością',
      description:
        'Wybierz pokój lub apartament w zależności od nastroju. Każdy ma klimatyzację, markowe kosmetyki i inteligentny telewizor.'
    },
    servicesTitle: 'Usługi w cenie pobytu',
    services: [
      '✔️ Bogate śniadanie z domowym pieczywem',
      '✔️ Wejście do strefy wellness 60 minut dziennie',
      '✔️ Parking przy hotelu i przechowalnia rowerów',
      '✔️ Szybkie Wi-Fi i platformy streamingowe',
      '✔️ Zespół concierge gotowy spełniać twoje życzenia'
    ],
    receptionHoursTitle: 'Recepcja',
    checkin: {
      title: 'Check-in i check-out',
      description:
        'Standardowy check-in od 15:00, check-out do 11:00. Potrzebujesz inaczej? Daj nam znać, dostosujemy się.'
    }
  },
  restaurant: {
    metadata: {
      title: 'Restauracja',
      description: 'Autorska kuchnia i bar z regionalnymi składnikami. Skosztuj sezonowego menu U Fandy.'
    },
    heading: {
      eyebrow: 'Restauracja',
      title: 'Składniki z Jesioników, techniki z całego świata',
      description:
        'Każde danie opowiada historię. Czerpiemy z lokalnych gospodarstw, sezonowych ziół i inspiracji światową gastronomią.'
    },
    openingTitle: 'Godziny otwarcia',
    tasting: {
      title: 'Wieczory degustacyjne',
      description: 'W każdy piątek przygotowujemy siedmiodaniowe menu z doborem win. Zarezerwuj stolik co najmniej 48 godzin wcześniej.'
    },
    reservation: {
      title: 'Rezerwacja stolika',
      description: 'Zadzwoń +420 000 000 000 lub napisz na restaurace@u-fandy.cz.'
    }
  },
  contact: {
    metadata: {
      title: 'Kontakt',
      description: 'Jesteśmy do dyspozycji codziennie. Zadzwoń, napisz lub odwiedź hotel U Fandy.'
    },
    heading: {
      eyebrow: 'Kontakt',
      title: 'Skontaktuj się, doradzimy w sprawie pobytu i wydarzeń',
      description:
        'Nasz zespół pomoże w rezerwacji, bonie podarunkowym lub planowaniu integracji.'
    },
    contacts: [
      { label: 'Recepcja', value: '+420 000 000 000', href: 'tel:+420000000000' },
      { label: 'E-mail', value: 'info@u-fandy.cz', href: 'mailto:info@u-fandy.cz' },
      { label: 'Adres', value: 'Malá Morava 123, 788 33 Malá Morava' }
    ],
    billing: {
      title: 'Dane do faktury',
      description: 'U Fandy s.r.o., IČO 00000000\nDIČ CZ00000000'
    },
    receptionHoursTitle: 'Recepcja',
    restaurantHoursTitle: 'Restauracja'
  },
  bowling: {
    metadata: {
      title: 'Kręgle',
      description: 'Kręgle – dwa nowoczesne tory z opcją band dla dzieci i przyjazną atmosferą dla całej rodziny.'
    },
    hero: {
      eyebrow: 'Kręgle',
      title: 'ZAGRAJ NA NOWOCZESNYCH TORACH',
      description:
        'Zapraszamy na dwa nowoczesne tory. Jeden z nich możemy dostosować dla dzieci dzięki wysuwanym bandom chroniącym przed wypadnięciem kuli.'
    },
    gallery: [
      { src: '/images/bowling/bowling1.webp', alt: 'Tor do kręgli z barem', width: 1200, height: 800 },
      { src: '/images/bowling/bowling2.webp', alt: 'Podświetlone tory do kręgli', width: 1200, height: 800 },
      { src: '/images/bowling/bowling3.webp', alt: 'Strefa kręgli z miejscem do siedzenia', width: 1200, height: 800 },
      { src: '/images/bowling/bowling4.webp', alt: 'Tor do kręgli z bandą dla dzieci', width: 1200, height: 800 }
    ]
  },
  hall: {
    metadata: {
      title: 'Sala eventowa',
      description: 'Elastyczna sala na wesela, konferencje i koncerty. Przygotujemy scenariusz na miarę.'
    },
    heading: {
      eyebrow: 'Sala eventowa',
      title: 'Przestrzeń rosnąca wraz z twoimi ambicjami',
      description:
        'Modułowa scena, eleganckie wnętrze i topowa technika. Organizujemy wesela, gale i firmowe szczyty.'
    },
    description:
      'Każde wydarzenie jest wyjątkowe. Nasz zespół eventowy przygotuje dramaturgię, scenografię i koordynację gości tak, by wszystko przebiegło idealnie.',
    features: [
      'Pojemność do 120 osób w układzie bankietowym',
      'Ściana LED, profesjonalne nagłośnienie i inteligentne oświetlenie',
      'Technika hybrydowa do transmisji konferencyjnych',
      'Zaplecze cateringowe i barowe',
      'Możliwość połączenia z tarasem zewnętrznym'
    ],
    concierge: {
      title: 'Event concierge',
      description:
        'Napisz do nas na event@u-fandy.cz, przygotujemy kompletną ofertę wraz z wizualizacją 3D.'
    }
  },
  career: {
    metadata: {
      title: 'Kariera',
      description: 'Dołącz do zespołu U Fandy. Tworzymy miejsce, w którym talent i pasja do gościnności mogą się rozwijać.'
    },
    heading: {
      eyebrow: 'Kariera',
      title: 'Szukamy osób kochających gości',
      description:
        'W U Fandy stawiamy na współpracę. Oferujemy uczciwe wynagrodzenie, szkolenia i możliwość zakwaterowania.'
    },
    positions: [
      {
        title: 'Chef de partie',
        description: 'Doświadczony kucharz ukierunkowany na nowoczesną gastronomię i prowadzenie młodszego zespołu.',
        type: 'Pełny etat'
      },
      {
        title: 'Recepcjonista z językiem angielskim/niemieckim',
        description: 'Kontakt z gośćmi, obsługa systemu rezerwacji i usługi concierge.',
        type: 'System zmianowy'
      },
      {
        title: 'Koordynator wydarzeń',
        description: 'Planowanie wesel i eventów firmowych, współpraca z dostawcami i nadzór nad realizacją.',
        type: 'Pełny etat'
      }
    ],
    contactCta: 'Wyślij CV na kariera@u-fandy.cz',
    openCall: {
      title: 'Nie ma tu twojej roli?',
      description:
        'Napisz nam, co cię interesuje, a stworzymy stanowisko dopasowane do ciebie. Oferujemy także staże i pracę dorywczą dla studentów szkół hotelarskich.'
    }
  },
  reservationPage: {
    metadata: {
      title: 'Rezerwacja',
      description: 'Wyślij zapytanie o pobyt, imprezę firmową lub przyjęcie. Odpowiemy w ciągu 24 godzin.'
    },
    heading: {
      eyebrow: 'Rezerwacja',
      title: 'Poproś o doświadczenie U Fandy',
      description:
        'Napisz nam, dla ilu osób planujesz pobyt i jakie usługi cię interesują. Odezwiemy się z ofertą.',
      align: 'center'
    }
  },
  cookies: {
    metadata: {
      title: 'Cookies',
      description: 'Informacje o wykorzystaniu plików cookie na stronie U Fandy.'
    },
    intro: 'Dbamy o prywatność. Cookies wykorzystujemy tylko w niezbędnym zakresie.',
    sections: [
      {
        title: 'Czym są cookies',
        content:
          'Cookies to małe pliki tekstowe zapisywane na twoim urządzeniu. Pomagają nam analizować ruch i ulepszać usługi.'
      },
      {
        title: 'Jakie cookies stosujemy',
        content:
          'Używamy wyłącznie technicznych cookies niezbędnych do działania strony oraz anonimowej analityki. Nie korzystamy z cookies marketingowych.'
      },
      {
        title: 'Jak odrzucić cookies',
        content:
          'Ustawienia cookies możesz zmienić w przeglądarce. Wyłączenie technicznych cookies może ograniczyć funkcjonalność strony.'
      }
    ]
  },
  privacy: {
    metadata: {
      title: 'Polityka prywatności',
      description: 'Jak przetwarzamy dane osobowe gości i partnerów hotelu U Fandy.'
    },
    intro:
      'Stawiamy na transparentność. Wyjaśniamy, jak chronimy twoje dane i z kim się skontaktować.',
    sections: [
      {
        title: 'Administrator danych',
        content: 'Administratorem twoich danych jest U Fandy s.r.o., Malá Morava 123, 788 33 Malá Morava.'
      },
      {
        title: 'Jakie dane przetwarzamy',
        content:
          'Imię i nazwisko, dane kontaktowe, informacje o rezerwacji, dane płatnicze oraz korespondencję. Dane przechowujemy przez okres wymagany przepisami.'
      },
      {
        title: 'Cele przetwarzania',
        content:
          'Realizacja rezerwacji, wykonanie umowy, księgowość oraz przesyłanie informacji o usługach na podstawie zgody.'
      },
      {
        title: 'Twoje prawa',
        content:
          'Masz prawo do dostępu, sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia danych i złożenia skargi do organu nadzorczego.'
      },
      {
        title: 'Kontakt do inspektora',
        content: 'privacy@u-fandy.cz'
      }
    ],
    title: 'Polityka prywatności'
  },
  reservationForm: {
    submitIdle: 'Wyślij zapytanie',
    submitPending: 'Wysyłam…',
    success: 'Dziękujemy! Wkrótce odezwiemy się z potwierdzeniem.',
    rateLimit: 'Wysyłasz zapytania zbyt często, spróbuj ponownie później.',
    genericError: 'Sprawdź proszę wyróżnione pola.',
    fields: {
      name: { label: 'Imię i nazwisko', error: 'Podaj swoje imię i nazwisko.' },
      email: { label: 'E-mail', error: 'Wpisz poprawny adres e-mail.' },
      phone: {
        label: 'Telefon',
        min: 'Numer telefonu musi mieć co najmniej 9 cyfr.',
        format: 'Numer telefonu może zawierać tylko cyfry i znak +.'
      },
      arrivalDate: { label: 'Data przyjazdu', error: 'Wybierz datę przyjazdu.' },
      guests: {
        label: 'Liczba gości',
        required: 'Podaj liczbę gości.',
        min: 'Przynajmniej jeden gość.',
        max: 'W przypadku większych grup skontaktuj się z nami.'
      },
      note: { label: 'Wiadomość', max: 'Wiadomość może mieć maksymalnie 500 znaków.' },
      honeypot: 'Zostaw puste'
    }
  }
};

export default dictionary;
