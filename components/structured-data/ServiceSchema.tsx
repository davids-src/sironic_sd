/**
 * Service Schema Component
 * Schema.org/Service structured data optimized for AI-SEO
 * Enhanced with audience, category, and comprehensive area coverage
 */

'use client';

import { SEO } from '../SEO';

interface ServiceSchemaProps {
    locale: string;
    serviceName: string;
    serviceDescription: string;
    serviceType?: string;
    category?: string;
    audience?: string;
}

export function ServiceSchema({
    locale,
    serviceName,
    serviceDescription,
    serviceType = 'IT Training',
    category = 'Information Technology Services',
    audience = 'Small and Medium-sized Enterprises'
}: ServiceSchemaProps) {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sironic.eu';

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType,
        category,
        name: serviceName,
        description: serviceDescription,
        audience: {
            '@type': 'Audience',
            audienceType: audience,
            geographicArea: {
                '@type': 'Place',
                name: 'European Union'
            }
        },
        provider: {
            '@type': 'Organization',
            '@id': `${baseUrl}/#organization`,
            name: 'SIRONIC IT Solutions',
            url: baseUrl,
            logo: `${baseUrl}/favicon.svg`
        },
        areaServed: [
            {
                '@type': 'Country',
                name: 'Hungary'
            },
            {
                '@type': 'Place',
                name: 'European Union'
            }
        ],
        availableLanguage: ['hu', 'en', 'de', 'sk', 'ro', 'hr', 'sl', 'fr', 'it', 'es', 'sv', 'da', 'no', 'nl', 'pl', 'cs'],
        inLanguage: locale,
        offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
            priceCurrency: 'EUR'
        }
    };

    return <SEO jsonLd={schema} />;
}
