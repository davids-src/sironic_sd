/**
 * NIS2 Schema Component
 * Combines Service and FAQPage structured data for the NIS2 compliance page
 * Optimized for AI-SEO and rich snippets in search results
 */

'use client';

import { SEO } from '../SEO';

interface Nis2SchemaProps {
    locale: string;
    faqItems?: Array<{ question: string; answer: string }>;
}

export function Nis2Schema({ locale, faqItems = [] }: Nis2SchemaProps) {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sironic.eu';
    const pageUrl = `${baseUrl}/${locale}/nis2`;

    // Service Schema for NIS2 Compliance Consulting
    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        serviceType: 'NIS2 Compliance Consulting',
        category: 'Information Security & Compliance Services',
        name: 'NIS2 Compliance Consulting & Implementation',
        description: 'Professional NIS2 directive compliance consulting services for EU businesses. Gap analysis, risk assessment, policy development, and implementation support.',
        audience: {
            '@type': 'Audience',
            audienceType: 'Small and Medium-sized Enterprises, Essential and Important Entities',
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
                '@type': 'Country',
                name: 'Slovakia'
            },
            {
                '@type': 'Country',
                name: 'Romania'
            },
            {
                '@type': 'Country',
                name: 'Croatia'
            },
            {
                '@type': 'Country',
                name: 'Slovenia'
            },
            {
                '@type': 'Country',
                name: 'Germany'
            },
            {
                '@type': 'Country',
                name: 'Austria'
            },
            {
                '@type': 'Country',
                name: 'Czech Republic'
            },
            {
                '@type': 'Country',
                name: 'Poland'
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
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'NIS2 Compliance Services',
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'NIS2 Gap Analysis',
                        description: 'Comprehensive assessment of current security posture against NIS2 requirements'
                    }
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Risk Assessment & Management',
                        description: 'Identification and evaluation of cybersecurity risks'
                    }
                },
                {
                    '@type': 'Service',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Policy & Procedure Development',
                        description: 'Creation of NIS2-compliant security policies and procedures'
                    }
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Implementation Support',
                        description: 'Hands-on assistance with implementing NIS2 requirements'
                    }
                }
            ]
        }
    };

    // FAQ Schema for rich snippets
    const faqSchema = faqItems.length > 0 ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        mainEntity: faqItems.map((item, index) => ({
            '@type': 'Question',
            '@id': `${pageUrl}#faq-question-${index + 1}`,
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer
            }
        }))
    } : null;

    // Combine schemas
    const schemas = faqSchema ? [serviceSchema, faqSchema] : [serviceSchema];

    return <SEO jsonLd={schemas} />;
}
