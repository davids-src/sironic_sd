'use client';

import { SEO } from '../SEO';
import { useTranslation } from '@/hooks/useTranslation';

interface ServiceListSchemaProps {
    locale: string;
}

export function ServiceListSchema({ locale }: ServiceListSchemaProps) {
    const { t } = useTranslation();
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sironic.eu';

    const services = [
        {
            id: 'systemOperation',
            name: t('services.systemOperation.title'),
            description: t('services.systemOperation.description'),
            url: `${baseUrl}/${locale}/szolgaltatasok#systemOperation`
        },
        {
            id: 'networking',
            name: t('services.networking.title'),
            description: t('services.networking.description'),
            url: `${baseUrl}/${locale}/halozat-fejlesztes`
        },
        {
            id: 'security',
            name: t('services.security.title'),
            description: t('services.security.description'),
            url: `${baseUrl}/${locale}/szolgaltatasok#security`
        },
        {
            id: 'development',
            name: t('services.development.title'),
            description: t('services.development.description'),
            url: `${baseUrl}/${locale}/egyedi-alkalmazas-fejlesztes`
        },
        {
            id: 'commerce',
            name: t('services.commerce.title'),
            description: t('services.commerce.description'),
            url: `${baseUrl}/${locale}/szolgaltatasok#commerce`
        },
        {
            id: 'hosting',
            name: t('services.hosting.title'),
            description: t('services.hosting.description'),
            url: `${baseUrl}/${locale}/szolgaltatasok#hosting`
        },
        {
            id: 'repair',
            name: t('services.repair.title'),
            description: t('services.repair.description'),
            url: `${baseUrl}/${locale}/szerviz-javitas`
        },
        {
            id: 'training',
            name: t('servicesPage.details.training.title'),
            description: t('servicesPage.details.training.description'),
            url: `${baseUrl}/${locale}/oktatas`
        }
    ];

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: t('servicesPage.title') || 'Our Services',
        description: t('servicesPage.subtitle') || 'Comprehensive IT solutions for your business',
        itemListElement: services.map((service, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
                '@type': 'Service',
                '@id': `${service.url}#service`,
                name: service.name,
                description: service.description,
                url: service.url,
                category: 'Information Technology Services',
                audience: {
                    '@type': 'Audience',
                    audienceType: 'Small and Medium-sized Enterprises'
                },
                provider: {
                    '@type': 'Organization',
                    '@id': `${baseUrl}/#organization`,
                    name: 'SIRONIC IT Solutions',
                    logo: `${baseUrl}/favicon.svg`,
                    url: baseUrl
                },
                areaServed: [
                    {
                        '@type': 'City',
                        name: 'Székesfehérvár'
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
                availableLanguage: ['hu', 'en', 'de', 'sk', 'ro', 'hr', 'sl', 'fr', 'it', 'es', 'sv', 'da', 'no', 'nl', 'pl', 'cs'],
                inLanguage: locale,
                offers: {
                    '@type': 'Offer',
                    availability: 'https://schema.org/InStock',
                    priceCurrency: 'EUR'
                }
            }
        }))
    };

    return <SEO jsonLd={schema} />;
}
