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
    telephone: '+36-70-273-5532',
    contactType: 'customer service',
    email: 'hello@sironic.hu',
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
  description: 'Professzionális IT szolgáltatások Budapesten: rendszerüzemeltetés, hálózatépítés, IT biztonság, webfejlesztés, IT oktatás és vállalati tudásfejlesztés.',
  image: 'https://sironic.hu/images/logo.png',
  '@id': 'https://sironic.hu',
  url: 'https://sironic.hu',
  telephone: '+36-70-273-5532',
  email: 'hello@sironic.hu',
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
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 47.4979,
      longitude: 19.0402,
    },
    geoRadius: '50000',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'IT szolgáltatások',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Rendszerüzemeltetés és IT karbantartás',
          description: 'Folyamatos monitoring, karbantartás és hibaelhárítás',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'IT oktatás és tudásfejlesztés',
          description: 'Személyre szabott IT oktatások és biztonságtudatossági tréningek',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Hálózatépítés és fejlesztés',
          description: 'Hálózattervezés, kiépítés és optimalizálás',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'IT biztonság és adatvédelem',
          description: 'Tűzfal konfiguráció, biztonsági mentések, GDPR megfelelés',
        },
      },
    ],
  },
};
