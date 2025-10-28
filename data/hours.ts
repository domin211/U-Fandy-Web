import type { Locale } from '@/lib/i18n/config';

export interface HoursRow {
  day: string;
  hours: string;
}

export interface HoursTableData {
  hotel: HoursRow[];
  restaurant: HoursRow[];
  bowling: HoursRow[];
}

const hours: Record<Locale, HoursTableData> = {
  cs: {
    hotel: [
      { day: 'Pondělí – Neděle', hours: 'Recepce 7:00 – 22:00' },
      { day: 'Late check-in', hours: 'Po domluvě' }
    ],
    restaurant: [
      { day: 'Pondělí – Čtvrtek', hours: '11:00 – 22:00' },
      { day: 'Pátek – Sobota', hours: '11:00 – 23:30' },
      { day: 'Neděle', hours: '11:00 – 21:00' }
    ],
    bowling: [
      { day: 'Pondělí – Čtvrtek', hours: '14:00 – 22:00' },
      { day: 'Pátek – Sobota', hours: '14:00 – 24:00' },
      { day: 'Neděle', hours: '14:00 – 21:00' }
    ]
  },
  en: {
    hotel: [
      { day: 'Monday – Sunday', hours: 'Reception 7:00 – 22:00' },
      { day: 'Late check-in', hours: 'On request' }
    ],
    restaurant: [
      { day: 'Monday – Thursday', hours: '11:00 – 22:00' },
      { day: 'Friday – Saturday', hours: '11:00 – 23:30' },
      { day: 'Sunday', hours: '11:00 – 21:00' }
    ],
    bowling: [
      { day: 'Monday – Thursday', hours: '14:00 – 22:00' },
      { day: 'Friday – Saturday', hours: '14:00 – 24:00' },
      { day: 'Sunday', hours: '14:00 – 21:00' }
    ]
  },
  pl: {
    hotel: [
      { day: 'Poniedziałek – Niedziela', hours: 'Recepcja 7:00 – 22:00' },
      { day: 'Późny check-in', hours: 'Po uzgodnieniu' }
    ],
    restaurant: [
      { day: 'Poniedziałek – Czwartek', hours: '11:00 – 22:00' },
      { day: 'Piątek – Sobota', hours: '11:00 – 23:30' },
      { day: 'Niedziela', hours: '11:00 – 21:00' }
    ],
    bowling: [
      { day: 'Poniedziałek – Czwartek', hours: '14:00 – 22:00' },
      { day: 'Piątek – Sobota', hours: '14:00 – 24:00' },
      { day: 'Niedziela', hours: '14:00 – 21:00' }
    ]
  },
  de: {
    hotel: [
      { day: 'Montag – Sonntag', hours: 'Rezeption 7:00 – 22:00' },
      { day: 'Später Check-in', hours: 'Nach Vereinbarung' }
    ],
    restaurant: [
      { day: 'Montag – Donnerstag', hours: '11:00 – 22:00' },
      { day: 'Freitag – Samstag', hours: '11:00 – 23:30' },
      { day: 'Sonntag', hours: '11:00 – 21:00' }
    ],
    bowling: [
      { day: 'Montag – Donnerstag', hours: '14:00 – 22:00' },
      { day: 'Freitag – Samstag', hours: '14:00 – 24:00' },
      { day: 'Sonntag', hours: '14:00 – 21:00' }
    ]
  },
  sk: {
    hotel: [
      { day: 'Pondelok – Nedeľa', hours: 'Recepcia 7:00 – 22:00' },
      { day: 'Neskorý check-in', hours: 'Po dohode' }
    ],
    restaurant: [
      { day: 'Pondelok – Štvrtok', hours: '11:00 – 22:00' },
      { day: 'Piatok – Sobota', hours: '11:00 – 23:30' },
      { day: 'Nedeľa', hours: '11:00 – 21:00' }
    ],
    bowling: [
      { day: 'Pondelok – Štvrtok', hours: '14:00 – 22:00' },
      { day: 'Piatok – Sobota', hours: '14:00 – 24:00' },
      { day: 'Nedeľa', hours: '14:00 – 21:00' }
    ]
  }
};

export default hours;
