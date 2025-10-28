import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-sans'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.u-fandy.cz'),
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
  alternates: {
    canonical: '/' 
  },
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    url: 'https://www.u-fandy.cz',
    title: 'U Fandy — Hotel, Restaurace a Zážitky',
    description:
      'Moderní ubytování, výborná gastronomie a volnočasové aktivity v Malé Moravě.',
    siteName: 'U Fandy'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'U Fandy — Hotel, Restaurace a Zážitky',
    description:
      'Moderní ubytování, výborná gastronomie a volnočasové aktivity v Malé Moravě.'
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#191919'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationLd = {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    name: 'U Fandy',
    url: 'https://www.u-fandy.cz',
    telephone: '+420000000000',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Malá Morava 123',
      addressLocality: 'Malá Morava',
      postalCode: '78833',
      addressCountry: 'CZ'
    },
    servesCuisine: 'Moderní česká kuchyně',
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Bowlingové dráhy', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Wellness', value: true }
    ]
  };

  return (
    <html lang="cs" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="bg-canvas-100 text-topbar antialiased">
        <a
          href="#obsah"
          className="sr-only focus:not-sr-only focus:fixed focus:z-50 focus:m-4 focus:rounded-md focus:bg-canvas-200 focus:px-4 focus:py-2 focus:text-topbar"
        >
          Přeskočit na obsah
        </a>
        <Header />
        <main id="obsah" className="min-h-[60vh]">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
      </body>
    </html>
  );
}
