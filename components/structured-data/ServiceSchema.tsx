/**
 * Service Schema Component
 * Schema.org/Service structured data for IT Training service
 */

'use client';

import { SEO } from '../SEO';

interface ServiceSchemaProps {
    locale: string;
    serviceName: string;
    serviceDescription: string;
    serviceType?: string;
}

export function ServiceSchema({
    locale,
    serviceName,
    serviceDescription,
    serviceType = 'IT Training'
}: ServiceSchemaProps) {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sironic.hu';

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType,
        name: serviceName,
        description: serviceDescription,
        provider: {
            '@type': 'Organization',
            name: 'SIRONIC',
            url: baseUrl
        },
        areaServed: {
            '@type': 'Country',
            name: 'Hungary'
        },
        availableLanguage: ['hu', 'en', 'de', 'sk', 'ro']
    };

    return <SEO jsonLd={schema} />;
}
