import type { Metadata, Viewport } from 'next';
import { getLocale } from 'next-intl/server';
import './globals.css';
import 'react-day-picker/style.css';
import { Inter } from 'next/font/google';
import { cookies, headers } from 'next/headers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { DictionaryProvider } from '@/lib/i18n/dictionary-context';
import { getDictionary } from '@/lib/i18n/get-dictionary';
import type { Locale } from '@/lib/i18n/config';
import { openGraphLocales } from '@/lib/i18n/config';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-sans'
});

const metadataBase = new URL('https://www.u-fandy.cz');

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as Locale;
  const dictionary = await getDictionary(locale);
  const meta = dictionary.layout.metadata;

  return {
    metadataBase,
    title: meta.title,
    description: meta.description,
    keywords: [...meta.keywords],
    authors: meta.authors?.map((author) => ({ ...author })),
    creator: meta.creator,
    publisher: meta.publisher,
    alternates: {
      canonical: '/'
    },
    openGraph: {
      type: 'website',
      locale: openGraphLocales[locale],
      url: metadataBase.href,
      title: meta.openGraph.title,
      description: meta.openGraph.description,
      siteName: dictionary.common.brandName
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.twitter.title,
      description: meta.twitter.description
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#191919'
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = (await getLocale()) as Locale;
  const dictionary = await getDictionary(locale);
  const structured = dictionary.layout.structuredData;
  const nonce = headers().get('x-nonce') ?? cookies().get('x-nonce')?.value ?? undefined;

  const organizationLd = {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    name: dictionary.common.brandName,
    url: structured.url,
    telephone: structured.telephone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: structured.address.streetAddress,
      addressLocality: structured.address.addressLocality,
      postalCode: structured.address.postalCode,
      addressCountry: structured.address.addressCountry
    },
    servesCuisine: structured.servesCuisine,
    amenityFeature: structured.amenities.map((name) => ({
      '@type': 'LocationFeatureSpecification',
      name,
      value: true
    }))
  };

  return (
    <html lang={locale} className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="bg-canvas-100 text-topbar antialiased">
        <DictionaryProvider dictionary={dictionary} locale={locale}>
          <a
            href="#obsah"
            className="sr-only focus:not-sr-only focus:fixed focus:z-50 focus:m-4 focus:rounded-md focus:bg-canvas-200 focus:px-4 focus:py-2 focus:text-topbar"
          >
            {dictionary.common.skipToContent}
          </a>
          <Header />
          <main
            id="obsah"
            className="min-h-[60vh]"
            style={{ paddingTop: 'var(--header-offset, 6rem)' }}
          >
            {children}
          </main>
          <Footer />
          <script
            nonce={nonce}
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
          />
        </DictionaryProvider>
      </body>
    </html>
  );
}
