export interface SEOData {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
}

export function generateMetadata(data: SEOData) {
  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      type: data.ogType || 'website',
      images: data.ogImage ? [{ url: data.ogImage }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: data.title,
      description: data.description,
      images: data.ogImage ? [data.ogImage] : [],
    },
    alternates: {
      canonical: data.canonical,
    },
  };
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SIRONIC Rendszerház',
  url: 'https://sironic.hu',
  logo: 'https://sironic.hu/images/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+36-30-123-4567',
    contactType: 'customer service',
    email: 'info@sironic.hu',
    availableLanguage: ['Hungarian'],
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Budapest',
    addressCountry: 'HU',
  },
  sameAs: [],
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'SIRONIC Rendszerház',
  image: 'https://sironic.hu/images/logo.png',
  '@id': 'https://sironic.hu',
  url: 'https://sironic.hu',
  telephone: '+36-30-123-4567',
  email: 'info@sironic.hu',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Budapest',
    addressCountry: 'HU',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 47.4979,
    longitude: 19.0402,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
  ],
  priceRange: '$$',
};
