'use client';

import Script from 'next/script';
import { useParams } from 'next/navigation';

interface LocalBusinessSchema {
    locale: string;
}

/**
 * Structured Data Component for LocalBusiness
 * Optimized for:
 * - Google SGE (Search Generative Experience)
 * - Bing AI
 * - Perplexity AI
 * - OpenAI Search
 * - Traditional search engines
 */
export function LocalBusinessSchema({ locale }: LocalBusinessSchema) {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sironic.eu';

    // Locale-specific business data
    const localeData: Record<string, any> = {
        hu: {
            name: 'SIRONIC IT Solutions',
            description: 'Szakmai IT üzemeltetés, webfejlesztés, hálózatépítés és IT biztonság KKV-k számára.',
            alternateName: 'SIRONIC Informatikai Megoldások',
        },
        en: {
            name: 'SIRONIC IT Solutions',
            description: 'Professional IT operations, web development, network infrastructure, and IT security for SMBs.',
            alternateName: 'SIRONIC IT Services',
        },
        de: {
            name: 'SIRONIC IT Solutions',
            description: 'Professionelle IT-Betrieb, Webentwicklung, Netzwerkaufbau und IT-Sicherheit für KMUs.',
            alternateName: 'SIRONIC IT-Lösungen',
        },
        sk: {
            name: 'SIRONIC IT Solutions',
            description: 'Profesionálna správa IT, vývoj webových stránok, budovanie sietí a IT bezpečnosť pre malé a stredné podniky.',
            alternateName: 'SIRONIC IT Riešenia',
        },
        ro: {
            name: 'SIRONIC IT Solutions',
            description: 'Operațiuni IT profesionale, dezvoltare web, infrastructură de rețea și securitate IT pentru IMM-uri.',
            alternateName: 'SIRONIC Soluții IT',
        },
        hr: {
            name: 'SIRONIC IT Solutions',
            description: 'Profesionalna IT podrška, razvoj weba, izgradnja mreže i IT sigurnost za mala i srednja poduzeća.',
            alternateName: 'SIRONIC IT Rješenja',
        },
        sl: {
            name: 'SIRONIC IT Solutions',
            description: 'Profesionalno IT okolje, spletni razvoj, omrežje in IT varnost za mala in srednja podjetja.',
            alternateName: 'SIRONIC IT Rešitve',
        },
        fr: {
            name: 'SIRONIC IT Solutions',
            description: 'Opérations IT professionnelles, développement web, infrastructure réseau et sécurité IT pour les PME.',
            alternateName: 'SIRONIC Solutions Informatiques',
        },
        it: {
            name: 'SIRONIC IT Solutions',
            description: 'Operazioni IT professionali, sviluppo web, infrastruttura di rete e sicurezza IT per le PMI.',
            alternateName: 'SIRONIC Soluzioni IT',
        },
        es: {
            name: 'SIRONIC IT Solutions',
            description: 'Operaciones IT profesionales, desarrollo web, infraestructura de red y seguridad IT para PYMES.',
            alternateName: 'SIRONIC Soluciones Informáticas',
        },
        sv: {
            name: 'SIRONIC IT Solutions',
            description: 'Professionell IT-drift, webbutveckling, nätverksinfrastruktur och IT-säkerhet för små och medelstora företag.',
            alternateName: 'SIRONIC IT-lösningar',
        },
        da: {
            name: 'SIRONIC IT Solutions',
            description: 'Professionel IT-drift, webudvikling, netværksinfrastruktur og IT-sikkerhed for SMV\'er.',
            alternateName: 'SIRONIC IT-løsninger',
        },
        no: {
            name: 'SIRONIC IT Solutions',
            description: 'Profesjonell IT-drift, webutvikling, nettverksinfrastruktur og IT-sikkerhet for SMB-er.',
            alternateName: 'SIRONIC IT-løsninger',
        },
        nl: {
            name: 'SIRONIC IT Solutions',
            description: 'Professionele IT-operaties, webontwikkeling, netwerkinfrastructuur en IT-beveiliging voor het MKB.',
            alternateName: 'SIRONIC IT-oplossingen',
        },
        pl: {
            name: 'SIRONIC IT Solutions',
            description: 'Profesjonalne operacje IT, rozwój stron internetowych, infrastruktura sieciowa i bezpieczeństwo IT dla MŚP.',
            alternateName: 'SIRONIC Rozwiązania IT',
        },
        cs: {
            name: 'SIRONIC IT Solutions',
            description: 'Profesionální IT provoz, vývoj webových stránek, síťová infrastruktura a IT bezpečnost pro malé a střední podniky.',
            alternateName: 'SIRONIC IT Řešení',
        },
    };

    const currentLocaleData = localeData[locale] || localeData.en;

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': `${baseUrl}/#localbusiness`,
        name: currentLocaleData.name,
        alternateName: currentLocaleData.alternateName,
        description: currentLocaleData.description,
        url: `${baseUrl}/${locale}`,
        logo: `${baseUrl}/favicon.svg`,
        image: `${baseUrl}/og/home-${locale}.jpg`,
        telephone: '+36-30-123-4567',
        email: 'hello@sironic.hu',
        priceRange: '€€',
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
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '08:00',
                closes: '17:00',
            },
        ],
        sameAs: [
            'https://www.facebook.com/sironic',
            'https://www.linkedin.com/company/sironic',
        ],
        areaServed: [
            {
                '@type': 'Country',
                name: 'Hungary',
            },
            {
                '@type': 'Country',
                name: 'Austria',
            },
            {
                '@type': 'Country',
                name: 'Slovakia',
            },
            {
                '@type': 'Country',
                name: 'Romania',
            },
            {
                '@type': 'Country',
                name: 'Croatia',
            },
            {
                '@type': 'Country',
                name: 'Slovenia',
            },
            {
                '@type': 'Country',
                name: 'France',
            },
            {
                '@type': 'Country',
                name: 'Italy',
            },
            {
                '@type': 'Country',
                name: 'Spain',
            },
            {
                '@type': 'Country',
                name: 'Sweden',
            },
            {
                '@type': 'Country',
                name: 'Denmark',
            },
            {
                '@type': 'Country',
                name: 'Norway',
            },
            {
                '@type': 'Country',
                name: 'Netherlands',
            },
            {
                '@type': 'Country',
                name: 'Poland',
            },
            {
                '@type': 'Country',
                name: 'Czech Republic',
            },
            {
                '@type': 'Country',
                name: 'Germany',
            },
        ],
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'IT Services',
            itemListElement: [
                {
                    '@type': 'OfferCatalog',
                    name: 'IT Operations & System Administration',
                    itemListElement: [
                        {
                            '@type': 'Offer',
                            itemOffered: {
                                '@type': 'Service',
                                name: 'System Operations & IT Maintenance',
                                description: 'Continuous monitoring and maintenance of IT infrastructure',
                            },
                        },
                    ],
                },
                {
                    '@type': 'OfferCatalog',
                    name: 'Network Infrastructure',
                    itemListElement: [
                        {
                            '@type': 'Offer',
                            itemOffered: {
                                '@type': 'Service',
                                name: 'Network Design & Optimization',
                                description: 'Enterprise network design and Wi-Fi optimization',
                            },
                        },
                    ],
                },
                {
                    '@type': 'OfferCatalog',
                    name: 'Software Development',
                    itemListElement: [
                        {
                            '@type': 'Offer',
                            itemOffered: {
                                '@type': 'Service',
                                name: 'Custom Application Development',
                                description: 'Tailored software solutions for business needs',
                            },
                        },
                    ],
                },
                {
                    '@type': 'OfferCatalog',
                    name: 'IT Security',
                    itemListElement: [
                        {
                            '@type': 'Offer',
                            itemOffered: {
                                '@type': 'Service',
                                name: 'IT Security & Data Protection',
                                description: 'Comprehensive security solutions and GDPR compliance',
                            },
                        },
                    ],
                },
            ],
        },
    };

    return (
        <Script
            id="local-business-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

/**
 * Organization Schema for brand identity
 * Optimized for knowledge graph and AI search
 */
export function OrganizationSchema() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sironic.eu';

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': `${baseUrl}/#organization`,
        name: 'SIRONIC IT Solutions',
        legalName: 'Skoda Dávid András Egyéni Vállalkozó',
        url: baseUrl,
        logo: `${baseUrl}/favicon.svg`,
        foundingDate: '2020',
        founders: [
            {
                '@type': 'Person',
                name: 'Dávid Skoda',
            },
        ],
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Lövölde utca 24 4/15',
            addressLocality: 'Székesfehérvár',
            postalCode: '8000',
            addressCountry: 'HU',
        },
        contactPoint: [
            {
                '@type': 'ContactPoint',
                telephone: '+36-30-123-4567',
                contactType: 'customer service',
                email: 'hello@sironic.hu',
                availableLanguage: ['Hungarian', 'English', 'German', 'Slovak', 'Romanian', 'Croatian', 'Slovenian', 'French', 'Italian', 'Spanish', 'Swedish', 'Danish', 'Norwegian', 'Dutch', 'Polish', 'Czech'],
            },
        ],
        sameAs: [
            'https://www.facebook.com/sironic',
            'https://www.linkedin.com/company/sironic',
        ],
    };

    return (
        <Script
            id="organization-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

/**
 * BreadcrumbList Schema for navigation
 * Helps AI understand site structure
 */
interface BreadcrumbSchemaProps {
    items: Array<{
        name: string;
        url: string;
    }>;
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sironic.eu';

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: `${baseUrl}${item.url}`,
        })),
    };

    return (
        <Script
            id="breadcrumb-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

/**
 * WebSite Schema with search action
 * Enables sitelinks search box
 */
export function WebSiteSchema({ locale }: { locale: string }) {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sironic.eu';

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${baseUrl}/#website`,
        url: `${baseUrl}/${locale}`,
        name: 'SIRONIC IT Solutions',
        description: 'Professional IT solutions for small and medium-sized businesses',
        publisher: {
            '@id': `${baseUrl}/#organization`,
        },
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: `${baseUrl}/${locale}/search?q={search_term_string}`,
            },
            'query-input': 'required name=search_term_string',
        },
        inLanguage: locale,
    };

    return (
        <Script
            id="website-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
