export type NavLinkVariant = 'cta' | 'default';

export type NavLink = {
  href: string;
  label: string;
  hasDropdown?: boolean;
  variant?: NavLinkVariant;
};

export type FooterLink = {
  href: string;
  label: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Messages = {
  common: {
    brandName: string;
    skipToContent: string;
    header: {
      menuLabel: string;
      navigationLabel: string;
      navLinks: ReadonlyArray<NavLink>;
      localeSwitcherLabel: string;
    };
    footer: {
      description: string;
      navigation: {
        title: string;
        links: ReadonlyArray<FooterLink>;
      };
      contact: {
        title: string;
        items: ReadonlyArray<string>;
      };
      legal: {
        title: string;
        links: ReadonlyArray<FooterLink>;
      };
      rights: string;
    };
  };
  layout: {
    metadata: {
      title: {
        default: string;
        template: string;
      };
      description: string;
      keywords: ReadonlyArray<string>;
      authors: ReadonlyArray<{ name: string }>;
      creator: string;
      publisher: string;
      openGraph: {
        title: string;
        description: string;
      };
      twitter: {
        title: string;
        description: string;
      };
    };
    structuredData: {
      name: string;
      url: string;
      telephone: string;
      address: {
        streetAddress: string;
        addressLocality: string;
        postalCode: string;
        addressCountry: string;
      };
      servesCuisine: string;
      amenities: ReadonlyArray<string>;
    };
  };
  home: {
    hero: {
      title: string;
      subtitle: string;
    };
    onlineReservation: {
      eyebrow: string;
      title: string;
      description: string;
      callCta: string;
      emailCta: string;
    };
    destination: {
      eyebrow: string;
      title: string;
      description: string;
      features: ReadonlyArray<{
        title: string;
        description: string;
      }>;
      stats: ReadonlyArray<{
        value: string;
        label: string;
      }>;
      imageAlt: string;
    };
    hotelHighlights: ReadonlyArray<{
      eyebrow: string;
      title: string;
      description: string;
    }>;
    roomsSection: {
      eyebrow: string;
      title: string;
      description: string;
    };
    restaurantSection: {
      eyebrow: string;
      title: string;
      description: string;
      highlights: ReadonlyArray<string>;
      cta: string;
      imageAlt: string;
    };
    experienceSection: {
      eyebrow: string;
      title: string;
      description: string;
      gallery: ReadonlyArray<GalleryImage>;
    };
    testimonials: {
      eyebrow: string;
      title: string;
      description: string;
      items: ReadonlyArray<{
        quote: string;
        name: string;
        role: string;
      }>;
    };
    wellness: {
      eyebrow: string;
      title: string;
      description: string;
      highlights: ReadonlyArray<{
        title: string;
        description: string;
      }>;
      imageAlt: string;
    };
    location: {
      eyebrow: string;
      title: string;
      description: string;
      note: string;
      highlights: ReadonlyArray<{
        label: string;
        value: string;
      }>;
      mapAlt: string;
    };
    reservation: {
      eyebrow: string;
      title: string;
      description: string;
      hotelHoursTitle: string;
      restaurantHoursTitle: string;
      bowlingHoursTitle: string;
    };
  };
  accommodation: {
    metadata: {
      title: string;
      description: string;
    };
    heading: {
      eyebrow: string;
      title: string;
      description: string;
    };
    servicesTitle: string;
    services: ReadonlyArray<string>;
    receptionHoursTitle: string;
    checkin: {
      title: string;
      description: string;
    };
  };
  restaurant: {
    metadata: {
      title: string;
      description: string;
    };
    heading: {
      eyebrow: string;
      title: string;
      description: string;
    };
    openingTitle: string;
    tasting: {
      title: string;
      description: string;
    };
    reservation: {
      title: string;
      description: string;
    };
  };
  contact: {
    metadata: {
      title: string;
      description: string;
    };
    heading: {
      eyebrow: string;
      title: string;
      description: string;
    };
    contacts: ReadonlyArray<{
      label: string;
      value: string;
      href?: string;
    }>;
    billing: {
      title: string;
      description: string;
    };
    receptionHoursTitle: string;
    restaurantHoursTitle: string;
  };
  bowling: {
    metadata: {
      title: string;
      description: string;
    };
    hero: {
      eyebrow: string;
      title: string;
      description: string;
    };
    gallery: ReadonlyArray<GalleryImage>;
  };
  hall: {
    metadata: {
      title: string;
      description: string;
    };
    heading: {
      eyebrow: string;
      title: string;
      description: string;
    };
    description: string;
    features: ReadonlyArray<string>;
    concierge: {
      title: string;
      description: string;
    };
  };
  career: {
    metadata: {
      title: string;
      description: string;
    };
    heading: {
      eyebrow: string;
      title: string;
      description: string;
    };
    positions: ReadonlyArray<{
      title: string;
      description: string;
      type: string;
    }>;
    contactCta: string;
    openCall: {
      title: string;
      description: string;
    };
  };
  reservationPage: {
    metadata: {
      title: string;
      description: string;
    };
    heading: {
      eyebrow: string;
      title: string;
      description: string;
      align?: 'start' | 'center' | 'end';
    };
  };
  cookies: {
    metadata: {
      title: string;
      description: string;
    };
    intro: string;
    sections: ReadonlyArray<{
      title: string;
      content: string;
    }>;
  };
  privacy: {
    metadata: {
      title: string;
      description: string;
    };
    intro: string;
    sections: ReadonlyArray<{
      title: string;
      content: string;
    }>;
    title: string;
  };
  reservationForm: {
    submitIdle: string;
    submitPending: string;
    success: string;
    rateLimit: string;
    genericError: string;
    fields: {
      name: {
        label: string;
        error: string;
      };
      email: {
        label: string;
        error: string;
      };
      phone: {
        label: string;
        min: string;
        format: string;
      };
      arrivalDate: {
        label: string;
        error: string;
      };
      guests: {
        label: string;
        required: string;
        min: string;
        max: string;
      };
      note: {
        label: string;
        max: string;
      };
      honeypot: string;
    };
  };
};
