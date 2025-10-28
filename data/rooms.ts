import type { Locale } from '@/lib/i18n/config';

export interface RoomInfo {
  name: string;
  description: string;
  capacity: string;
  price: string;
  image: string;
}

const rooms: Record<Locale, RoomInfo[]> = {
  cs: [
    {
      name: 'Apartmán Panorama',
      description: 'Prostorný apartmán s výhledem na hory, privátním wellness koutkem a balkónem.',
      capacity: '2–4 osoby',
      price: 'od — Kč',
      image: '/images/placeholders/room.svg'
    },
    {
      name: 'Rodinné studio',
      description: 'Dvoupokojové studio s dětským koutkem, kuchyňským zázemím a moderní koupelnou.',
      capacity: 'až 5 osob',
      price: 'od — Kč',
      image: '/images/placeholders/room.svg'
    },
    {
      name: 'Designový pokoj Loft',
      description: 'Vzdušný loft s industriálními prvky, krbem a chytrým ovládáním světel.',
      capacity: '2 osoby',
      price: 'od — Kč',
      image: '/images/placeholders/room.svg'
    }
  ],
  en: [
    {
      name: 'Panorama Apartment',
      description: 'Spacious apartment with mountain views, a private wellness nook and balcony.',
      capacity: '2–4 guests',
      price: 'from — CZK',
      image: '/images/placeholders/room.svg'
    },
    {
      name: 'Family Studio',
      description: 'Two-room studio with a kids’ corner, kitchenette and modern bathroom.',
      capacity: 'up to 5 guests',
      price: 'from — CZK',
      image: '/images/placeholders/room.svg'
    },
    {
      name: 'Loft Design Room',
      description: 'Airy loft with industrial touches, a fireplace and smart lighting control.',
      capacity: '2 guests',
      price: 'from — CZK',
      image: '/images/placeholders/room.svg'
    }
  ],
  pl: [
    {
      name: 'Apartament Panorama',
      description: 'Przestronny apartament z widokiem na góry, prywatną strefą wellness i balkonem.',
      capacity: '2–4 osoby',
      price: 'od — CZK',
      image: '/images/placeholders/room.svg'
    },
    {
      name: 'Studio rodzinne',
      description: 'Dwupokojowe studio z kącikiem dla dzieci, aneksem kuchennym i nowoczesną łazienką.',
      capacity: 'do 5 osób',
      price: 'od — CZK',
      image: '/images/placeholders/room.svg'
    },
    {
      name: 'Pokój Loft Design',
      description: 'Przestronny loft z industrialnymi detalami, kominkiem i inteligentnym oświetleniem.',
      capacity: '2 osoby',
      price: 'od — CZK',
      image: '/images/placeholders/room.svg'
    }
  ],
  de: [
    {
      name: 'Panorama Apartment',
      description: 'Großzügiges Apartment mit Bergblick, privater Wellness-Ecke und Balkon.',
      capacity: '2–4 Personen',
      price: 'ab — CZK',
      image: '/images/placeholders/room.svg'
    },
    {
      name: 'Familienstudio',
      description: 'Zweiraum-Studio mit Kinderecke, Kitchenette und modernem Bad.',
      capacity: 'bis zu 5 Personen',
      price: 'ab — CZK',
      image: '/images/placeholders/room.svg'
    },
    {
      name: 'Designzimmer Loft',
      description: 'Luftiges Loft mit industriellen Akzenten, Kamin und smarter Lichtsteuerung.',
      capacity: '2 Personen',
      price: 'ab — CZK',
      image: '/images/placeholders/room.svg'
    }
  ],
  sk: [
    {
      name: 'Apartmán Panorama',
      description: 'Priestranný apartmán s výhľadom na hory, súkromným wellness kútikom a balkónom.',
      capacity: '2–4 hostia',
      price: 'od — CZK',
      image: '/images/placeholders/room.svg'
    },
    {
      name: 'Rodinné štúdio',
      description: 'Dvojizbové štúdio s detským kútikom, kuchynským zázemím a modernou kúpeľňou.',
      capacity: 'až 5 hostí',
      price: 'od — CZK',
      image: '/images/placeholders/room.svg'
    },
    {
      name: 'Dizajnová izba Loft',
      description: 'Vzdušný loft s industriálnymi prvkami, krbom a inteligentným ovládaním svetiel.',
      capacity: '2 hostia',
      price: 'od — CZK',
      image: '/images/placeholders/room.svg'
    }
  ]
};

export default rooms;
