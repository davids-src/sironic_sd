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

    // Locale-specific descriptions optimized for AI search
    const descriptions: Record<string, string> = {
        hu: 'SIRONIC IT Rendszerház - Informatikai cég Székesfehérváron. Teljes körű IT szolgáltatások: rendszerüzemeltetés, webfejlesztés, hálózatépítés, IT biztonság, IT oktatás és szerviz kis- és középvállalkozások számára.',
        en: 'SIRONIC IT Solutions - IT company in Székesfehérvár, Hungary. Comprehensive IT services: system administration, web development, network infrastructure, IT security, IT training and repair services for SMEs.',
        de: 'SIRONIC IT Solutions - IT-Unternehmen in Székesfehérvár, Ungarn. Umfassende IT-Dienstleistungen: Systemadministration, Webentwicklung, Netzwerkinfrastruktur, IT-Sicherheit, IT-Schulung und Reparaturservice für KMU.',
        sk: 'SIRONIC IT Solutions - IT spoločnosť v Székesfehérváre, Maďarsko. Komplexné IT služby: systémová administrácia, webový vývoj, sieťová infraštruktúra, IT bezpečnosť, IT vzdelávanie a servisné služby pre malé a stredné podniky.',
        ro: 'SIRONIC IT Solutions - Companie IT în Székesfehérvár, Ungaria. Servicii IT complete: administrare sisteme, dezvoltare web, infrastructură rețea, securitate IT, formare IT și servicii de reparații pentru IMM-uri.',
        hr: 'SIRONIC IT Solutions - IT tvrtka u Székesfehérváru, Mađarska. Sveobuhvatne IT usluge: administracija sustava, web razvoj, mrežna infrastruktura, IT sigurnost, IT edukacija i servisni usluge za mala i srednja poduzeća.',
        sl: 'SIRONIC IT Solutions - IT podjetje v Székesfehérváru, Madžarska. Obsežne IT storitve: sistemska administracija, spletni razvoj, omrežna infrastruktura, IT varnost, IT izobraževanje in servisne storitve za mala in srednja podjetja.',
        fr: 'SIRONIC IT Solutions - Entreprise informatique à Székesfehérvár, Hongrie. Services IT complets: administration système, développement web, infrastructure réseau, sécurité IT, formation IT et services de réparation pour PME.',
        it: 'SIRONIC IT Solutions - Azienda IT a Székesfehérvár, Ungheria. Servizi IT completi: amministrazione sistemi, sviluppo web, infrastruttura di rete, sicurezza IT, formazione IT e servizi di riparazione per PMI.',
        es: 'SIRONIC IT Solutions - Empresa de TI en Székesfehérvár, Hungría. Servicios de TI completos: administración de sistemas, desarrollo web, infraestructura de red, seguridad de TI, formación de TI y servicios de reparación para PYMES.',
    };

    const alternateNames: Record<string, string[]> = {
        hu: ['SIRONIC Informatikai Megoldások', 'SIRONIC IT Solutions', 'informatikai cég Székesfehérvár', 'IT cég Székesfehérvár'],
        en: ['SIRONIC IT Services', 'IT company Székesfehérvár', 'IT company Hungary'],
        de: ['SIRONIC IT-Lösungen', 'IT-Unternehmen Székesfehérvár'],
        sk: ['SIRONIC IT Riešenia', 'IT spoločnosť Székesfehérvár'],
        ro: ['SIRONIC Soluții IT', 'companie IT Székesfehérvár'],
        hr: ['SIRONIC IT Rješenja', 'IT tvrtka Székesfehérvár'],
        sl: ['SIRONIC IT Rešitve', 'IT podjetje Székesfehérvár'],
        fr: ['SIRONIC Solutions Informatiques', 'entreprise informatique Székesfehérvár'],
        it: ['SIRONIC Soluzioni IT', 'azienda IT Székesfehérvár'],
        es: ['SIRONIC Soluciones Informáticas', 'empresa de TI Székesfehérvár'],
    };

    const currentDescription = descriptions[locale] || descriptions.hu;
    const currentAlternateNames = alternateNames[locale] || alternateNames.hu;

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': `${baseUrl}/#localbusiness`,
        name: 'SIRONIC IT Rendszerház',
        alternateName: currentAlternateNames,
        description: currentDescription,
        image: `${baseUrl}/logo.png`,
        url: baseUrl,
        telephone: '+36702735532',
        email: 'hello@sironic.hu',
        priceRange: '$$',
        serviceType: [
            'IT Services',
            'Informatikai szolgáltatások',
            'System Administration',
            'Web Development',
            'Network Infrastructure',
            'IT Security',
            'IT Training',
            'Computer Repair',
        ],
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Lövölde utca 24 4/15',
            addressLocality: 'Székesfehérvár',
            postalCode: '8000',
            addressCountry: 'HU',
            addressRegion: 'Fejér megye',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 47.1926,
            longitude: 18.4289,
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
        areaServed: [
            {
                '@type': 'City',
                name: 'Székesfehérvár',
            },
            {
                '@type': 'City',
                name: 'Budapest',
            },
            {
                '@type': 'State',
                name: 'Fejér megye',
            },
            {
                '@type': 'Country',
                name: 'Hungary',
            },
            {
                '@type': 'Place',
                name: 'European Union',
            },
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
            'Custom Software Development',
            'Next.js Development',
            'React Development',
            'TypeScript Development'
        ],
        availableLanguage: ['hu', 'en', 'de', 'sk', 'ro', 'hr', 'sl', 'fr', 'it', 'es', 'sv', 'da', 'no', 'nl', 'pl', 'cs'],
    };

    return <SEO jsonLd={schema} />;
}
