import { Metadata } from 'next';
import { Nis2Page } from '@/components/Nis2Page';
import { locales } from '@/i18n';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
    const locale = locales.includes(params.locale as any) ? params.locale : 'hu';
    let messages;
    try {
        messages = (await import(`@/locales/${locale}.json`)).default;
    } catch (error) {
        messages = (await import(`@/locales/hu.json`)).default;
    }

    const nis2Meta = messages.meta.pages.nis2 || messages.nis2Page.meta;
    const baseUrl = 'https://sironic.eu';

    return {
        title: nis2Meta.title,
        description: nis2Meta.description,
        keywords: nis2Meta.keywords,
        openGraph: {
            title: nis2Meta.title,
            description: nis2Meta.description,
            url: `${baseUrl}/${locale}/nis2`,
            siteName: messages.meta.companyName,
            images: [
                {
                    url: `${baseUrl}${nis2Meta.ogImage}`,
                    width: 1200,
                    height: 630,
                    alt: nis2Meta.title,
                },
            ],
            locale: locale,
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: nis2Meta.title,
            description: nis2Meta.description,
            images: [`${baseUrl}${nis2Meta.ogImage}`],
        },
        alternates: {
            canonical: `${baseUrl}/${locale}/nis2`,
            languages: {
                'hu': `${baseUrl}/hu/nis2`,
                'en': `${baseUrl}/en/nis2`,
                'de': `${baseUrl}/de/nis2`,
                'sk': `${baseUrl}/sk/nis2`,
                'ro': `${baseUrl}/ro/nis2`,
                'hr': `${baseUrl}/hr/nis2`,
                'sl': `${baseUrl}/sl/nis2`,
                'fr': `${baseUrl}/fr/nis2`,
                'it': `${baseUrl}/it/nis2`,
                'es': `${baseUrl}/es/nis2`,
                'sv': `${baseUrl}/sv/nis2`,
                'da': `${baseUrl}/da/nis2`,
                'no': `${baseUrl}/no/nis2`,
                'nl': `${baseUrl}/nl/nis2`,
                'pl': `${baseUrl}/pl/nis2`,
                'cs': `${baseUrl}/cs/nis2`,
                'x-default': `${baseUrl}/en/nis2`,
            },
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    };
}

export default function Page() {
    return <Nis2Page />;
}
