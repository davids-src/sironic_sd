'use client';

import { usePathname } from 'next/navigation';
import { locales } from '@/i18n';

// Mapping of localized paths
const pathMapping: Record<string, Record<string, string>> = {
    'repair-service': {
        hu: 'szerviz-javitas',
        en: 'repair-service',
        de: 'reparatur-service',
        sk: 'servisne-sluzby',
        ro: 'servicii-reparatii',
        hr: 'servis-popravak',
        sl: 'servis-racunalnikov',
        fr: 'reparation-et-maintenance',
        it: 'riparazione-e-assistenza',
        es: 'reparacion-y-servicio',
        sv: 'reparation-service',
        da: 'reparation-service',
        no: 'reparasjon-service',
        nl: 'reparatie-service',
        pl: 'serwis-naprawy',
        cs: 'opravy-servis'
    },
    'network-optimization': {
        hu: 'halozat-fejlesztes',
        en: 'network-optimization',
        de: 'netzwerk-optimierung',
        sk: 'optimalizacia-siete',
        ro: 'optimizare-retea',
        hr: 'optimizacija-mreze',
        sl: 'mrezna-infrastruktura',
        fr: 'optimisation-reseau',
        it: 'ottimizzazione-rete',
        es: 'optimizacion-de-red',
        sv: 'natverksoptimering',
        da: 'netvaerksoptimering',
        no: 'nettverksoptimalisering',
        nl: 'netwerkoptimalisatie',
        pl: 'optymalizacja-sieci',
        cs: 'optimalizace-site'
    },
    'it-training': {
        hu: 'oktatas',
        en: 'it-training',
        de: 'it-schulung',
        sk: 'it-vzdelavanie',
        ro: 'training-it',
        hr: 'it-edukacija',
        sl: 'it-usposabljanje',
        fr: 'formation-informatique',
        it: 'formazione-it',
        es: 'formacion-informatica',
        sv: 'it-utbildning',
        da: 'it-uddannelse',
        no: 'it-opplaering',
        nl: 'it-training',
        pl: 'szkolenie-it',
        cs: 'it-skoleni'
    },
    'custom-development': {
        hu: 'egyedi-alkalmazas-fejlesztes',
        en: 'custom-application-development',
        de: 'individuelle-anwendungsentwicklung',
        sk: 'vyvoj-vlastnych-aplikacii',
        ro: 'dezvoltare-aplicatii-personalizate',
        hr: 'razvoj-prilagodenih-aplikacija',
        sl: 'razvoj-spletnih-aplikacij',
        fr: 'developpement-dapplications',
        it: 'sviluppo-applicazioni',
        es: 'desarrollo-de-aplicaciones',
        sv: 'anpassad-applikationsutveckling',
        da: 'skraeddersyet-applikationsudvikling',
        no: 'skreddersydd-applikasjonsutvikling',
        nl: 'maatwerk-applicatieontwikkeling',
        pl: 'dedykowane-tworzenie-aplikacji',
        cs: 'vyvoj-aplikaci-na-miru'
    },
    'products': {
        hu: 'termekeink',
        en: 'termekeink',
        de: 'termekeink',
        sk: 'termekeink',
        ro: 'termekeink',
        hr: 'proizvodi',
        sl: 'produkti',
        fr: 'produits',
        it: 'prodotti',
        es: 'productos',
        sv: 'produkter',
        da: 'produkter',
        no: 'produkter',
        nl: 'producten',
        pl: 'produkty',
        cs: 'produkty'
    },
    'pricing': {
        hu: 'arak',
        en: 'arak',
        de: 'arak',
        sk: 'arak',
        ro: 'arak',
        hr: 'cjenik',
        sl: 'cenik',
        fr: 'tarifs',
        it: 'prezzi',
        es: 'precios',
        sv: 'priser',
        da: 'priser',
        no: 'priser',
        nl: 'prijzen',
        pl: 'cennik',
        cs: 'cenik'
    },
    'about': {
        hu: 'rolunk',
        en: 'rolunk',
        de: 'rolunk',
        sk: 'rolunk',
        ro: 'rolunk',
        hr: 'o-nama',
        sl: 'o-nas',
        fr: 'a-propos',
        it: 'chi-siamo',
        es: 'sobre-nosotros',
        sv: 'om-oss',
        da: 'om-os',
        no: 'om-oss',
        nl: 'over-ons',
        pl: 'o-nas',
        cs: 'o-nas'
    },
    'contact': {
        hu: 'kapcsolat',
        en: 'kapcsolat',
        de: 'kapcsolat',
        sk: 'kapcsolat',
        ro: 'kapcsolat',
        hr: 'kontakt',
        sl: 'kontakt',
        fr: 'contact',
        it: 'contatti',
        es: 'contacto',
        sv: 'kontakt',
        da: 'kontakt',
        no: 'kontakt',
        nl: 'contact',
        pl: 'kontakt',
        cs: 'kontakt'
    },
    'services': {
        hu: 'szolgaltatasok',
        en: 'szolgaltatasok',
        de: 'szolgaltatasok',
        sk: 'szolgaltatasok',
        ro: 'szolgaltatasok',
        hr: 'usluge',
        sl: 'storitve',
        fr: 'services',
        it: 'servizi',
        es: 'servicios',
        sv: 'tjanster',
        da: 'tjenester',
        no: 'tjenester',
        nl: 'diensten',
        pl: 'uslugi',
        cs: 'sluzby'
    },
    'minden-cegnek': {
        hu: 'minden-cegnek-legyen-informatikusa',
        en: 'minden-cegnek-legyen-informatikusa',
        de: 'minden-cegnek-legyen-informatikusa',
        sk: 'minden-cegnek-legyen-informatikusa',
        ro: 'minden-cegnek-legyen-informatikusa',
        hr: 'it-podrska-tvrtkama',
        sl: 'it-podpora-podjetjem',
        fr: 'minden-cegnek-legyen-informatikusa',
        it: 'minden-cegnek-legyen-informatikusa',
        es: 'minden-cegnek-legyen-informatikusa',
        sv: 'it-support-foretag',
        da: 'it-stoette-virksomheder',
        no: 'it-stoette-bedrifter',
        nl: 'it-ondersteuning-bedrijven',
        pl: 'wsparcie-it-firm',
        cs: 'it-podpora-firem'
    },
    'onsite-presence': {
        hu: 'onsite-jelenlet',
        en: 'onsite-presence',
        de: 'onsite-prasenz',
        sk: 'onsite-pritomnost',
        ro: 'prezenta-onsite',
        hr: 'it-onsite-prisutnost',
        sl: 'onsite-it-tehnik',
        fr: 'presence-it-sur-site',
        it: 'presenza-it-onsite',
        es: 'presencia-it-onsite',
        sv: 'onsite-narvaro',
        da: 'onsite-tilstedevarelse',
        no: 'onsite-tilstedevarelse',
        nl: 'onsite-aanwezigheid',
        pl: 'onsite-obecnosc',
        cs: 'onsite-pritomnost'
    }
};

// Reverse mapping helper to find the key from any localized path
const findPathKey = (path: string): string | null => {
    for (const [key, localizedPaths] of Object.entries(pathMapping)) {
        if (Object.values(localizedPaths).some(p => path.includes(p))) {
            return key;
        }
    }
    return null;
};

export default function HreflangTags() {
    const pathname = usePathname();

    // Default to localhost if env var is not set, but in production it should be set
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

    if (!pathname) return null;

    // Find which locale is currently in the pathname
    const currentLocale = locales.find(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    // Get the path without the locale prefix
    let pathWithoutLocale = pathname;
    if (currentLocale) {
        pathWithoutLocale = pathname.replace(`/${currentLocale}`, '');
        // Ensure we don't end up with an empty string if it was just the locale
        if (pathWithoutLocale === '') pathWithoutLocale = '/';
    }

    // Check if this is a localized path
    const pathKey = findPathKey(pathWithoutLocale);

    // Helper to construct full URL
    const getUrl = (locale: string | null, path: string) => {
        let finalPath = path;

        // If we have a localized path key, use the correct slug for the target locale
        if (pathKey && locale && pathMapping[pathKey][locale]) {
            finalPath = `/${pathMapping[pathKey][locale]}`;
        }

        // Clean up path to ensure it starts with /
        const cleanPath = finalPath.startsWith('/') ? finalPath : `/${finalPath}`;

        if (!locale) {
            // For x-default, we use the path without locale (or default to EN/HU if needed)
            // Here we just use the current path structure but stripped of locale prefix
            // ideally x-default should point to a specific language version or a language selector
            if (cleanPath === '/') return baseUrl;
            return `${baseUrl}${cleanPath}`;
        }

        // For specific locales
        if (cleanPath === '/') return `${baseUrl}/${locale}`;
        return `${baseUrl}/${locale}${cleanPath}`;
    };

    return (
        <>
            {locales.map((locale) => {
                // Map locale to proper region code for hreflang
                const regionCode = {
                    'hu': 'hu-HU',
                    'en': 'en-US',
                    'de': 'de-DE',
                    'sk': 'sk-SK',
                    'ro': 'ro-RO',
                    'hr': 'hr-HR',
                    'sl': 'sl-SI',
                    'fr': 'fr-FR',
                    'it': 'it-IT',
                    'es': 'es-ES',
                    'sv': 'sv-SE',
                    'da': 'da-DK',
                    'no': 'no-NO',
                    'nl': 'nl-NL',
                    'pl': 'pl-PL',
                    'cs': 'cs-CZ'
                }[locale] || locale;

                return (
                    <link
                        key={locale}
                        rel="alternate"
                        href={getUrl(locale, pathWithoutLocale)}
                        hrefLang={regionCode}
                    />
                );
            })}
            <link
                rel="alternate"
                href={getUrl(null, pathWithoutLocale)}
                hrefLang="x-default"
            />
        </>
    );
}
