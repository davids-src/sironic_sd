/**
 * Organization Schema Component
 * Schema.org/Organization structured data for the company
 */

'use client';

import { SEO } from '../SEO';

interface OrganizationSchemaProps {
    locale: string;
}

export function OrganizationSchema({ locale }: OrganizationSchemaProps) {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sironic.eu';

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': `${baseUrl}/#organization`,
        name: 'SIRONIC IT Solutions',
        alternateName: 'SIRONIC IT Rendszerház',
        legalName: 'Skoda Dávid András Egyéni Vállalkozó',
        url: baseUrl,
        logo: `${baseUrl}/logo.png`,
        description: locale === 'hu'
            ? 'Teljes körű IT megoldások kis- és középvállalkozásoknak Székesfehérváron. Rendszerüzemeltetés, hálózatépítés, webfejlesztés, IT biztonság, hosting és szerviz szolgáltatások 24/7 támogatással.'
            : 'Comprehensive IT solutions for small and medium-sized businesses. System management, network development, web development, IT security, hosting, and repair services with 24/7 support.',
        email: 'hello@sironic.hu',
        telephone: '+36702735532',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Lövölde utca 24 4/15',
            addressLocality: 'Székesfehérvár',
            postalCode: '8000',
            addressCountry: 'HU',
        },
        areaServed: [
            {
                '@type': 'GeoCircle',
                geoMidpoint: {
                    '@type': 'GeoCoordinates',
                    latitude: 47.1926,
                    longitude: 18.4289,
                },
                geoRadius: '50000', // 50km radius
            },
            {
                '@type': 'Country',
                name: 'Hungary'
            },
            {
                '@type': 'Place',
                name: 'European Union'
            }
        ],
        knowsAbout: [
            'IT System Management',
            'Network Infrastructure',
            'Web Development',
            'Cybersecurity',
            'Cloud Hosting',
            'IT Support for SMEs',
            'GDPR Compliance',
            'Network Security',
            'Custom Software Development'
        ],
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Customer Service',
            telephone: '+36702735532',
            email: 'hello@sironic.hu',
            availableLanguage: ['hu', 'en', 'de', 'sk', 'ro', 'hr', 'sl', 'fr', 'it', 'es', 'sv', 'da', 'no', 'nl', 'pl', 'cs'],
            hoursAvailable: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '08:00',
                closes: '17:00',
            },
        },
        sameAs: [
            // Add social media links when available
            // 'https://www.facebook.com/sironic',
            // 'https://www.linkedin.com/company/sironic',
        ],
    };

    return <SEO jsonLd={schema} />;
}
