import Script from 'next/script';

/**
 * Service Schema for individual service pages
 * Optimized for AI search engines (Google SGE, Bing AI, Perplexity)
 */

interface ServiceSchemaProps {
    serviceType: string;
    serviceName: string;
    description: string;
    areaServed: 'EU' | 'Hungary';
    locale: string;
    url: string;
}

export function ServiceSchema({
    serviceType,
    serviceName,
    description,
    areaServed,
    locale,
    url,
}: ServiceSchemaProps) {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sironic.eu';

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${baseUrl}${url}#service`,
        serviceType,
        category: 'Information Technology Services',
        name: serviceName,
        description,
        audience: {
            '@type': 'Audience',
            audienceType: 'Small and Medium-sized Enterprises',
            geographicArea: {
                '@type': 'Place',
                name: 'European Union'
            }
        },
        provider: {
            '@type': 'Organization',
            '@id': `${baseUrl}/#organization`,
            name: 'SIRONIC IT Solutions',
            logo: `${baseUrl}/favicon.svg`,
            url: baseUrl
        },
        areaServed:
            areaServed === 'EU'
                ? [
                    {
                        '@type': 'Place',
                        name: 'European Union',
                    },
                    {
                        '@type': 'Country',
                        name: 'Hungary'
                    }
                ]
                : [
                    { '@type': 'City', name: 'Székesfehérvár' },
                    { '@type': 'City', name: 'Budapest' },
                    { '@type': 'AdministrativeArea', name: 'Fejér megye' },
                    { '@type': 'Country', name: 'Hungary' },
                    { '@type': 'Place', name: 'European Union' },
                ],
        url: `${baseUrl}${url}`,
        inLanguage: locale,
        availableLanguage: ['hu', 'en', 'de', 'sk', 'ro', 'hr', 'sl', 'fr', 'it', 'es', 'sv', 'da', 'no', 'nl', 'pl', 'cs'],
        availableChannel: {
            '@type': 'ServiceChannel',
            serviceUrl: `${baseUrl}${url}`,
            availableLanguage: {
                '@type': 'Language',
                name: locale,
            },
        },
        offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
            priceCurrency: 'EUR'
        }
    };

    return (
        <Script
            id={`service-schema-${serviceType}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

/**
 * FAQ Schema for service pages
 * Optimized for rich snippets and AI answer extraction
 */

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSchemaProps {
    faqs: FAQItem[];
    url: string;
}

export function FAQSchema({ faqs, url }: FAQSchemaProps) {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sironic.eu';

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        '@id': `${baseUrl}${url}#faq`,
        mainEntity: faqs.map((faq, index) => ({
            '@type': 'Question',
            '@id': `${baseUrl}${url}#faq-question-${index + 1}`,
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };

    return (
        <Script
            id="faq-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

/**
 * Enhanced LocalBusiness Schema for Hungarian service pages
 * Combines with Service schema for comprehensive coverage
 */

interface LocalServiceSchemaProps {
    serviceName: string;
    serviceDescription: string;
    url: string;
}

export function LocalServiceSchema({
    serviceName,
    serviceDescription,
    url,
}: LocalServiceSchemaProps) {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sironic.eu';

    const schema = {
        '@context': 'https://schema.org',
        '@type': ['LocalBusiness', 'ProfessionalService'],
        '@id': `${baseUrl}${url}#localbusiness`,
        name: `SIRONIC - ${serviceName}`,
        description: serviceDescription,
        url: `${baseUrl}${url}`,
        telephone: '+36-30-123-4567',
        email: 'hello@sironic.hu',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Lövölde utca 24 4/15',
            addressLocality: 'Székesfehérvár',
            postalCode: '8000',
            addressCountry: 'HU',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: '47.1875',
            longitude: '18.4258',
        },
        areaServed: [
            { '@type': 'City', name: 'Székesfehérvár' },
            { '@type': 'City', name: 'Budapest' },
            { '@type': 'AdministrativeArea', name: 'Fejér megye' },
            { '@type': 'Country', name: 'Magyarország' },
        ],
        priceRange: '€€',
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:00',
            closes: '17:00',
        },
    };

    return (
        <Script
            id="local-service-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
