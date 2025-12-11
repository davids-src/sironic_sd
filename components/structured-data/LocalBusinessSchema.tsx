/**
 * LocalBusiness Schema Component
 * Schema.org/LocalBusiness structured data for local SEO
 */

'use client';

import { SEO } from '../SEO';

interface LocalBusinessSchemaProps {
    locale: string;
}

export function LocalBusinessSchema({ locale }: LocalBusinessSchemaProps) {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sironic.eu';

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'SIRONIC IT Rendszerház',
        image: `${baseUrl}/logo.png`,
        '@id': baseUrl,
        url: baseUrl,
        telephone: '+36702735532',
        email: 'hello@sironic.hu',
        priceRange: '$$',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Lövölde utca 24 4/15',
            addressLocality: 'Székesfehérvár',
            postalCode: '8000',
            addressCountry: 'HU'
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 47.1926,
            longitude: 18.4289
        },
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday'
            ],
            opens: '08:00',
            closes: '17:00'
        },
        areaServed: {
            '@type': 'City',
            name: 'Székesfehérvár'
        }
    };

    return <SEO jsonLd={schema} />;
}
