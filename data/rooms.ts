import type { Locale } from '@/lib/i18n/config';

export interface RoomInfo {
  title: string;
  priceFrom: string;
  imageSrc: string;
  href: string;
}

const rooms: Record<Locale, RoomInfo[]> = {
  cs: [
    {
      title: 'Dvoulůžkový pokoj',
      priceFrom: 'od 1900 Kč/noc',
      imageSrc: '/images/placeholders/room.svg',
      href: '/ubytovani/dvouluzkovy-pokoj'
    },
    {
      title: 'Třílůžkový pokoj',
      priceFrom: 'od 2500 Kč/noc',
      imageSrc: '/images/placeholders/room.svg',
      href: '/ubytovani/triluzkovy-pokoj'
    },
    {
      title: 'Pokoj Deluxe',
      priceFrom: 'od 2500 Kč/noc',
      imageSrc: '/images/placeholders/room.svg',
      href: '/ubytovani/pokoj-deluxe'
    }
  ],
  en: [
    {
      title: 'Double Room',
      priceFrom: 'from 1900 CZK/night',
      imageSrc: '/images/placeholders/room.svg',
      href: '/ubytovani/dvouluzkovy-pokoj'
    },
    {
      title: 'Triple Room',
      priceFrom: 'from 2500 CZK/night',
      imageSrc: '/images/placeholders/room.svg',
      href: '/ubytovani/triluzkovy-pokoj'
    },
    {
      title: 'Deluxe Room',
      priceFrom: 'from 2500 CZK/night',
      imageSrc: '/images/placeholders/room.svg',
      href: '/ubytovani/pokoj-deluxe'
    }
  ],
  pl: [
    {
      title: 'Pokój dwuosobowy',
      priceFrom: 'od 1900 CZK/noc',
      imageSrc: '/images/placeholders/room.svg',
      href: '/ubytovani/dvouluzkovy-pokoj'
    },
    {
      title: 'Pokój trzyosobowy',
      priceFrom: 'od 2500 CZK/noc',
      imageSrc: '/images/placeholders/room.svg',
      href: '/ubytovani/triluzkovy-pokoj'
    },
    {
      title: 'Pokój Deluxe',
      priceFrom: 'od 2500 CZK/noc',
      imageSrc: '/images/placeholders/room.svg',
      href: '/ubytovani/pokoj-deluxe'
    }
  ],
  de: [
    {
      title: 'Doppelzimmer',
      priceFrom: 'ab 1900 CZK/Nacht',
      imageSrc: '/images/placeholders/room.svg',
      href: '/ubytovani/dvouluzkovy-pokoj'
    },
    {
      title: 'Dreibettzimmer',
      priceFrom: 'ab 2500 CZK/Nacht',
      imageSrc: '/images/placeholders/room.svg',
      href: '/ubytovani/triluzkovy-pokoj'
    },
    {
      title: 'Deluxe Zimmer',
      priceFrom: 'ab 2500 CZK/Nacht',
      imageSrc: '/images/placeholders/room.svg',
      href: '/ubytovani/pokoj-deluxe'
    }
  ],
  sk: [
    {
      title: 'Dvojlôžková izba',
      priceFrom: 'od 1900 CZK/noc',
      imageSrc: '/images/placeholders/room.svg',
      href: '/ubytovani/dvouluzkovy-pokoj'
    },
    {
      title: 'Trojlôžková izba',
      priceFrom: 'od 2500 CZK/noc',
      imageSrc: '/images/placeholders/room.svg',
      href: '/ubytovani/triluzkovy-pokoj'
    },
    {
      title: 'Deluxe izba',
      priceFrom: 'od 2500 CZK/noc',
      imageSrc: '/images/placeholders/room.svg',
      href: '/ubytovani/pokoj-deluxe'
    }
  ]
};

export default rooms;
