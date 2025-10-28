import type { Messages, NavLink } from './schema';

const en: Messages = {
  common: {
    brandName: 'U Fandy',
    skipToContent: 'Skip to content',
    header: {
      menuLabel: 'Menu',
      navigationLabel: 'Main navigation',
      navLinks: [
        { href: '/', label: 'Home', hasDropdown: true },
        { href: '/ubytovani', label: 'Accommodation' },
        { href: '/restaurace', label: 'Restaurant' },
        { href: '/galerie', label: 'Gallery' },
        { href: '/wellness', label: 'Wellness' },
        { href: '/bowling', label: 'Bowling' },
        { href: '/sal', label: 'Hall' },
        { href: '/rezervovat-pobyt', label: 'Book your stay', variant: 'cta' }
      ] satisfies readonly NavLink[],
      localeSwitcherLabel: 'Change language'
    },
    footer: {
      description:
        'Hotel, restaurant and sports facilities in the heart of the Jeseníky mountains. We blend comfortable stays, culinary experiences and active relaxation.',
      navigation: {
        title: 'Navigation',
        links: [
          { href: '/', label: 'Home' },
          { href: '/ubytovani', label: 'Accommodation' },
          { href: '/restaurace', label: 'Restaurant' },
          { href: '/bowling', label: 'Bowling' }
        ] satisfies readonly NavLink[]
      },
      contact: {
        title: 'Contact',
        items: ['Malá Morava 123', '788 33 Malá Morava', '+420 000 000 000', 'info@u-fandy.cz']
      },
      legal: {
        title: 'Legal',
        links: [
          { href: '/cookies', label: 'Cookies' },
          { href: '/zasady-ochrany-osobnich-udaju', label: 'Privacy' }
        ] satisfies readonly NavLink[]
      },
      rights: '© {year} U Fandy. All rights reserved.'
    }
  },
  layout: {
    metadata: {
      title: {
        default: 'U Fandy — Hotel, Restaurant & Experiences in the Jeseníky Mountains',
        template: '%s | U Fandy'
      },
      description:
        'Contemporary accommodation, outstanding gastronomy, bowling and event spaces in Malá Morava. Book your stay at U Fandy today.',
      keywords: ['hotel', 'restaurant', 'bowling', 'Malá Morava', 'Jeseníky', 'accommodation'],
      authors: [{ name: 'U Fandy' }],
      creator: 'U Fandy',
      publisher: 'U Fandy',
      openGraph: {
        title: 'U Fandy — Hotel, Restaurant & Experiences',
        description: 'Modern accommodation, excellent gastronomy and leisure activities in Malá Morava.'
      },
      twitter: {
        title: 'U Fandy — Hotel, Restaurant & Experiences',
        description: 'Modern accommodation, excellent gastronomy and leisure activities in Malá Morava.'
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
      servesCuisine: 'Modern Czech cuisine',
      amenities: ['Bowling lanes', 'Wellness']
    }
  },
  home: {
    hero: {
      eyebrow: 'Welcome to U Fandy',
      title: 'A modern mountain hideaway for food lovers, travellers and athletes',
      description:
        'We combine hotel comfort, signature cuisine and top-tier activities. Enjoy fresh mountain air without compromising on service quality.',
      primaryCta: 'Book your stay',
      secondaryCta: 'Explore the restaurant'
    },
    onlineReservation: {
      eyebrow: 'Online reservation',
      title: 'Ready for your next escape to the mountains',
      description: 'Our reception replies within 24 hours and helps you choose the right room and extras.',
      callCta: 'Call us',
      emailCta: 'info@u-fandy.cz'
    },
    destination: {
      eyebrow: 'Destination',
      title: 'The most magical spot in Malá Morava',
      description:
        'U Fandy is home to gourmets, families and sports enthusiasts. Open the window and breathe in the forest while fresh pastries are baked and the evening bowling tournament begins.',
      features: [
        {
          title: 'Architecture inspired by the mountains',
          description:
            'Solid wood, natural textiles and panoramic windows create an atmosphere that transports you to the heart of Jeseníky.'
        },
        {
          title: '38 stylish rooms and suites',
          description:
            'From cosy double rooms to family apartments with terraces. All feature smart controls and air conditioning.'
        },
        {
          title: 'Facilities for active and calm relaxation',
          description:
            'Bowling, wellness, e-bike rentals and themed evenings at the bar led by an experienced team.'
        }
      ],
      stats: [
        { value: '38', label: 'ROOMS' },
        { value: '120', label: 'RESTAURANT SEATS' },
        { value: '4', label: 'BOWLING LANES' },
        { value: '2 km', label: 'TO THE SLOPES' }
      ],
      imageAlt: 'Design rooms at U Fandy'
    },
    hotelHighlights: [
      {
        eyebrow: 'Hotel',
        title: 'Comfort embraced by mountains',
        description: 'Premium mattresses, blackout curtains, aromatherapy and concierge services for complete calm.'
      },
      {
        eyebrow: 'Gastronomy',
        title: 'Signature cuisine by our chef',
        description: 'Seasonal menus from local produce, homemade bakery items and a wine cellar with 120 labels.'
      },
      {
        eyebrow: 'Experiences',
        title: 'A programme for every day',
        description: 'Private wellness, bowling tournaments, corporate events and themed nights with live music.'
      }
    ],
    roomsSection: {
      eyebrow: 'Accommodation',
      title: 'Design rooms scented with wood and mountain air',
      description:
        'Each room is an original inspired by the surrounding nature. They all feature premium mattresses, blackout curtains and fast Wi-Fi.'
    },
    restaurantSection: {
      eyebrow: 'Restaurant & Bar',
      title: 'Seasonal menus from local ingredients',
      description:
        'Our chef blends traditional recipes with modern gastronomy. We bake our own bread, craft desserts and shake signature cocktails every day.',
      highlights: [
        'Five-course tasting menu',
        'Daily breakfast buffet',
        'Specialty coffee and signature cocktails',
        'Vegetarian and gluten-free options'
      ],
      cta: 'Learn more about the restaurant',
      imageAlt: 'Restaurant U Fandy'
    },
    experienceSection: {
      eyebrow: 'Experience',
      title: 'Bowling, sauna, bike rentals and an evening bar',
      description: 'Unwind after a trip in our private wellness or enjoy an evening tournament on professional lanes.',
      gallery: [
        { src: '/images/placeholders/hero.svg', alt: 'Exterior of Hotel U Fandy', width: 1200, height: 800 },
        { src: '/images/placeholders/restaurant.svg', alt: 'Restaurant U Fandy', width: 1200, height: 800 },
        { src: '/images/placeholders/bowling.svg', alt: 'Bowling lanes', width: 1200, height: 800 },
        { src: '/images/placeholders/hall.svg', alt: 'Event hall', width: 1200, height: 800 }
      ]
    },
    testimonials: {
      eyebrow: 'Reviews',
      title: 'What guests say about us',
      description: 'Authentic reviews from families, athletes and corporate clients who love to return.',
      items: [
        {
          quote:
            'We adore the atmosphere at U Fandy. The staff remembers our favourite wine and the kids can’t wait for bowling and wellness.',
          name: 'Lucie & Petr',
          role: 'family from Prague'
        },
        {
          quote: 'Perfect facilities for a company retreat. Modern tech in the hall, great food and inspiring surroundings.',
          name: 'Jana',
          role: 'HR manager, Brno'
        },
        {
          quote: 'Wellness with herbal sauna and massages was a dream come true. We love coming back every season.',
          name: 'Marek',
          role: 'regular guest'
        }
      ]
    },
    wellness: {
      eyebrow: 'Wellness',
      title: 'Mountain calm in a modern spa',
      description:
        'After a day in the mountains, sink into the warmth of the sauna, whirlpool and relaxation lounge with a glass of prosecco.',
      highlights: [
        { title: 'Private sauna & whirlpool', description: 'Reserve time just for you and treat your body after a full day outside.' },
        { title: 'Rituals with alpine herbs', description: 'Aromatherapy and treatments using local herbs and spring water.' },
        { title: 'Relax lounge with a view', description: 'Comfortable loungers, a fireplace and calming views over the valley.' }
      ],
      imageAlt: 'Wellness and relaxation zone'
    },
    location: {
      eyebrow: 'Location',
      title: 'Hotel U Fandy',
      description: 'Malá Morava 123, 788 33 Malá Morava',
      note:
        'Parking is free right at the hotel. Reception is open daily from 7 a.m. to 10 p.m. and gladly recommends the best trips nearby.',
      highlights: [
        { label: 'Dolní Morava ski resort', value: '1.8 km' },
        { label: 'Sky Walk', value: '2.5 km' },
        { label: 'Trail park & bike rental', value: 'on site' },
        { label: 'Pardubice Airport', value: '90 min by car' }
      ],
      mapAlt: 'Map to Hotel U Fandy'
    },
    reservation: {
      eyebrow: 'Reservation',
      title: 'Contact us and we will tailor an offer',
      description: 'We respond within 24 hours. For groups we arrange catering, tech support and additional activities.',
      hotelHoursTitle: 'Hotel',
      restaurantHoursTitle: 'Restaurant',
      bowlingHoursTitle: 'Bowling'
    }
  },
  accommodation: {
    metadata: {
      title: 'Accommodation',
      description: 'Design rooms, private wellness and concierge service. Discover comfortable stays at U Fandy.'
    },
    heading: {
      eyebrow: 'Accommodation',
      title: 'Sleep you’ll look forward to',
      description:
        'Choose a room or apartment to fit your mood. Each offers air conditioning, premium toiletries and a smart TV.'
    },
    servicesTitle: 'Services included in your stay',
    services: [
      '✔️ Hearty breakfast with homemade bakery',
      '✔️ Daily access to the wellness zone for 60 minutes',
      '✔️ On-site parking and bike storage',
      '✔️ Fast Wi-Fi and streaming platforms',
      '✔️ Concierge team ready to fulfil your wishes'
    ],
    receptionHoursTitle: 'Reception',
    checkin: {
      title: 'Check-in & check-out',
      description:
        'Standard check-in is from 3 p.m., check-out by 11 a.m. Need different times? Let us know and we’ll adapt.'
    }
  },
  restaurant: {
    metadata: {
      title: 'Restaurant',
      description: 'Signature cuisine and bar with regional ingredients. Come taste U Fandy’s seasonal menu.'
    },
    heading: {
      eyebrow: 'Restaurant',
      title: 'Ingredients from Jeseníky, techniques from around the world',
      description:
        'Every course tells a story. We draw from local farms, seasonal herbs and inspiration from world gastronomy.'
    },
    openingTitle: 'Opening hours',
    tasting: {
      title: 'Tasting evenings',
      description: 'Every Friday we prepare a seven-course menu with wine pairing. Book at least 48 hours in advance.'
    },
    reservation: {
      title: 'Table reservation',
      description: 'Call +420 000 000 000 or email restaurace@u-fandy.cz.'
    }
  },
  contact: {
    metadata: {
      title: 'Contact',
      description: 'We are here for you every day. Call, write or visit Hotel U Fandy.'
    },
    heading: {
      eyebrow: 'Contact',
      title: 'Get in touch – we will advise on stays and events',
      description:
        'Our team will help with reservations, gift vouchers or planning your teambuilding.'
    },
    contacts: [
      { label: 'Reception', value: '+420 000 000 000', href: 'tel:+420000000000' },
      { label: 'E-mail', value: 'info@u-fandy.cz', href: 'mailto:info@u-fandy.cz' },
      { label: 'Address', value: 'Malá Morava 123, 788 33 Malá Morava' }
    ],
    billing: {
      title: 'Billing details',
      description: 'U Fandy s.r.o., Company ID 00000000\nVAT CZ00000000'
    },
    receptionHoursTitle: 'Reception',
    restaurantHoursTitle: 'Restaurant'
  },
  bowling: {
    metadata: {
      title: 'Bowling',
      description: 'Bowling – two modern lanes with optional bumpers and a relaxed setting for the whole family.'
    },
    hero: {
      eyebrow: 'Bowling',
      title: 'PLAY ON MODERN LANES',
      description:
        'Come play on two state-of-the-art lanes. One lane can be adapted for your children with pop-up bumpers that keep the ball out of the gutter.'
    },
    gallery: [
      { src: '/images/bowling/bowling1.webp', alt: 'Bowling lane with bar', width: 1200, height: 800 },
      { src: '/images/bowling/bowling2.webp', alt: 'Bowling lanes illuminated', width: 1200, height: 800 },
      { src: '/images/bowling/bowling3.webp', alt: 'Bowling lounge with seating', width: 1200, height: 800 },
      { src: '/images/bowling/bowling4.webp', alt: 'Bowling alley with bumper system', width: 1200, height: 800 }
    ]
  },
  hall: {
    metadata: {
      title: 'Event Hall',
      description: 'Flexible hall for weddings, conferences and concerts. We design a tailor-made experience.'
    },
    heading: {
      eyebrow: 'Event hall',
      title: 'A space that grows with your ambition',
      description:
        'Modular stage, elegant interior and top technology. We host weddings, gala dinners and corporate summits.'
    },
    description:
      'Every event is unique. Our event team prepares the programme, scenography and guest coordination so everything runs to the minute.',
    features: [
      'Capacity up to 120 guests in banquet layout',
      'LED wall, professional sound and intelligent lighting',
      'Hybrid technology for conference streaming',
      'Facilities for catering and bar service',
      'Option to connect with the outdoor terrace'
    ],
    concierge: {
      title: 'Event concierge',
      description:
        'Send us your idea at event@u-fandy.cz and we will prepare a full proposal including a 3D visualisation.'
    }
  },
  career: {
    metadata: {
      title: 'Careers',
      description: 'Join the U Fandy team. We create an environment where talent and passion for hospitality thrive.'
    },
    heading: {
      eyebrow: 'Careers',
      title: 'We look for people who love guests',
      description:
        'Teamwork is essential at U Fandy. We offer fair rewards, training and optional staff accommodation.'
    },
    positions: [
      {
        title: 'Chef de partie',
        description: 'Experienced cook focused on modern gastronomy and leading junior colleagues.',
        type: 'Full-time'
      },
      {
        title: 'Receptionist with English/German',
        description: 'Guest communication, reservation system management and concierge services.',
        type: 'Shift rotation'
      },
      {
        title: 'Event coordinator',
        description: 'Planning weddings and corporate events, working with suppliers and overseeing execution.',
        type: 'Full-time'
      }
    ],
    contactCta: 'Send your CV to kariera@u-fandy.cz',
    openCall: {
      title: 'No role for you yet?',
      description:
        'Tell us what you enjoy and we will craft a position to fit. We welcome part-time roles and internships for hospitality students.'
    }
  },
  reservationPage: {
    metadata: {
      title: 'Reservation',
      description: 'Send us a request for a stay, corporate event or celebration. We will reply within 24 hours.'
    },
    heading: {
      eyebrow: 'Reservation',
      title: 'Request your U Fandy experience',
      description:
        'Tell us how many guests you are planning for and which services you are interested in. We will respond with an offer.',
      align: 'center'
    }
  },
  cookies: {
    metadata: {
      title: 'Cookies',
      description: 'Information about the use of cookies on the U Fandy website.'
    },
    intro: 'We value privacy. Cookies are used only to the extent necessary.',
    sections: [
      {
        title: 'What are cookies',
        content:
          'Cookies are small text files stored on your device. They help us analyse traffic and improve our services.'
      },
      {
        title: 'Which cookies we use',
        content:
          'We only use technical cookies essential for the website to function and anonymised analytics. We do not use marketing cookies.'
      },
      {
        title: 'How to decline cookies',
        content:
          'You can adjust cookie settings in your browser. Disabling technical cookies may limit the functionality of the site.'
      }
    ]
  },
  privacy: {
    metadata: {
      title: 'Privacy policy',
      description: 'How we process personal data of guests and partners of Hotel U Fandy.'
    },
    intro:
      'Transparency matters to us. Here we clearly describe how we protect your data and who to contact.',
    sections: [
      {
        title: 'Data controller',
        content: 'The controller of your data is U Fandy s.r.o., Malá Morava 123, 788 33 Malá Morava.'
      },
      {
        title: 'Data we process',
        content:
          'Name, contact details, reservation information, payment data and our communication. We keep data for the period required by law.'
      },
      {
        title: 'Purpose of processing',
        content:
          'Processing reservations, fulfilling contracts, accounting and sending information about services based on your consent.'
      },
      {
        title: 'Your rights',
        content:
          'You have the right to access, rectification, erasure, restriction, data portability and to lodge a complaint with the supervisory authority.'
      },
      {
        title: 'Contact for the DPO',
        content: 'privacy@u-fandy.cz'
      }
    ],
    title: 'Privacy policy'
  },
  reservationForm: {
    submitIdle: 'Send request',
    submitPending: 'Sending…',
    success: 'Thank you! We will get back to you shortly with a confirmation.',
    rateLimit: 'You are sending requests too often, please try again later.',
    genericError: 'Please check the highlighted fields.',
    fields: {
      name: { label: 'Full name', error: 'Please enter your name.' },
      email: { label: 'E-mail', error: 'Enter a valid email address.' },
      phone: {
        label: 'Phone',
        min: 'The phone number must have at least 9 digits.',
        format: 'The phone number may contain digits and + only.'
      },
      arrivalDate: { label: 'Arrival date', error: 'Please choose an arrival date.' },
      guests: {
        label: 'Number of guests',
        required: 'Enter the number of guests.',
        min: 'At least one guest.',
        max: 'For larger groups please contact us directly.'
      },
      note: { label: 'Message', max: 'The message can contain up to 500 characters.' },
      honeypot: 'Leave blank'
    }
  }
};

export default en;
