import { Metadata } from 'next';
import { locales } from '@/i18n';
import { notFound } from 'next/navigation';
import { CTAButton } from '@/components/CTAButton';
import { SectionTitle } from '@/components/SectionTitle';
import Link from 'next/link';
import { Shield, Server, Network } from 'lucide-react';
import { ServiceCard } from '@/components/ServiceCard';

const euLocations = [
    { slug: 'vienna', hu: 'Bécs', en: 'Vienna', de: 'Wien', country: 'Austria' },
    { slug: 'berlin', hu: 'Berlin', en: 'Berlin', de: 'Berlin', country: 'Germany' },
    { slug: 'paris', hu: 'Párizs', en: 'Paris', de: 'Paris', country: 'France' },
    { slug: 'rome', hu: 'Róma', en: 'Rome', de: 'Rom', country: 'Italy' },
    { slug: 'madrid', hu: 'Madrid', en: 'Madrid', de: 'Madrid', country: 'Spain' },
    { slug: 'prague', hu: 'Prága', en: 'Prague', de: 'Prag', country: 'Czechia' },
    { slug: 'warsaw', hu: 'Varsó', en: 'Warsaw', de: 'Warschau', country: 'Poland' },
    { slug: 'bratislava', hu: 'Pozsony', en: 'Bratislava', de: 'Pressburg', country: 'Slovakia' },
];

export async function generateStaticParams() {
    const params: { locale: string; city: string }[] = [];
    euLocations.forEach(location => {
        locales.forEach(locale => {
            params.push({ locale, city: location.slug });
        });
    });
    return params;
}

export async function generateMetadata({ params }: { params: { locale: string; city: string } }): Promise<Metadata> {
    const locationInfo = euLocations.find(l => l.slug === params.city);
    if (!locationInfo) return {};

    const cityName = (locationInfo as any)[params.locale] || locationInfo.en;

    return {
        title: `IT Support & Managed Services in ${cityName} | Sironic`,
        description: `Reliable IT operations, network engineering, and cybersecurity services for SMBs in ${cityName}, ${locationInfo.country}. Connect with Sironic today.`,
        alternates: {
            canonical: `https://sironic.eu/${params.locale}/locations/${params.city}`,
        }
    };
}

export default async function LocationLandingPage({ params }: { params: { locale: string; city: string } }) {
    const locationInfo = euLocations.find(l => l.slug === params.city);

    if (!locationInfo) {
        notFound();
    }

    const cityName = (locationInfo as any)[params.locale] || locationInfo.en;
    let messages: Record<string, any>;
    try {
        messages = (await import(`@/locales/${params.locale}.json`)).default;
    } catch {
        messages = (await import(`@/locales/en.json`)).default;
    }

    const t = (key: string) => {
        return key.split('.').reduce((obj: any, k) => (obj || {})[k], messages) || key;
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 bg-gray-50 dark:bg-gray-900 overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 text-brand-red text-sm font-semibold mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
                        </span>
                        EU Presence: {cityName}
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        Reliable IT Operations in <span className="text-brand-red">{cityName}</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto">
                        We provide enterprise-grade IT support, cybersecurity, and network infrastructure for growing companies in {cityName} and across {locationInfo.country}.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <CTAButton asChild size="lg" className="text-lg px-8 py-6">
                            <Link href={`/${params.locale}/kapcsolat?subject=IT%20Support%20in%20${cityName}`}>
                                {t('mindenCegnekPage.hero.cta')}
                            </Link>
                        </CTAButton>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-white dark:bg-gray-950">
                <div className="container mx-auto px-4 md:px-6">
                    <SectionTitle
                        title={`Our Core IT Services in ${cityName}`}
                        subtitle="Everything your business needs to stay secure, fast, and operational."
                    />
                    <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto mt-12">
                        <ServiceCard
                            title="Managed IT Support"
                            description={`24/7 monitoring and remote support for your ${cityName} office.`}
                            icon={Server}
                        />
                        <ServiceCard
                            title="Network Optimization"
                            description="Fast, reliable, and secure Wi-Fi and corporate network setups."
                            icon={Network}
                        />
                        <ServiceCard
                            title="Cybersecurity & NIS2"
                            description={`EU-compliant data protection and security audits covering ${locationInfo.country} regulations.`}
                            icon={Shield}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
