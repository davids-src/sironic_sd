'use client';

import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';
import { useParams } from 'next/navigation';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CTAButton } from '@/components/CTAButton';
import { ArrowRight, ExternalLink, Users, Globe, Shield, Clock } from 'lucide-react';
import { getLocalizedPath } from '@/lib/routes';
import { Locale } from '@/i18n';

export default function PartnersPage() {
    const { t } = useTranslation();
    const params = useParams();
    const locale = (params?.locale as string) || 'hu';
    const currentLocale = locale as Locale;

    const partners = t('partnersPage.partners', []);

    const partnerSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: t('meta.companyName'),
        url: 'https://sironic.eu',
        description: t('partnersPage.intro'),
        member: Array.isArray(partners)
            ? partners.map((p: any) => ({
                '@type': 'Organization',
                name: p.name,
                description: p.description,
            }))
            : [],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(partnerSchema) }}
            />

            {/* Hero Section */}
            <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <Breadcrumbs
                        items={[{ label: t('nav.partners'), href: `/${locale}/${getLocalizedPath('partners', currentLocale)}` }]}
                    />
                    <div className="mx-auto max-w-3xl text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-brand-red/10 text-brand-red px-4 py-2 rounded-full text-sm font-semibold mb-6">
                            <Users className="h-4 w-4" />
                            {t('partnersPage.badge')}
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
                            {t('partnersPage.heroTitle')}
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {t('partnersPage.heroSubtitle')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Intro Text */}
            <section className="py-16 bg-white dark:bg-gray-950">
                <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        {t('partnersPage.intro')}
                    </p>
                </div>
            </section>

            {/* Partners Grid */}
            <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                            {t('partnersPage.gridTitle')}
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            {t('partnersPage.gridSubtitle')}
                        </p>
                    </div>

                    {Array.isArray(partners) && partners.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {partners.map((partner: any, index: number) => (
                                <div
                                    key={index}
                                    className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-14 h-14 rounded-xl bg-brand-red/10 flex items-center justify-center flex-shrink-0">
                                            <span className="text-2xl font-bold text-brand-red">
                                                {partner.name?.charAt(0) || '?'}
                                            </span>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold leading-snug">{partner.name}</h3>
                                            {partner.category && (
                                                <span className="text-xs text-brand-red font-semibold uppercase tracking-wide">
                                                    {partner.category}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                                        {partner.description}
                                    </p>
                                    {partner.url && (
                                        <a
                                            href={partner.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-4 inline-flex items-center gap-1 text-sm text-brand-red hover:underline font-medium"
                                        >
                                            {t('partnersPage.visitWebsite')}
                                            <ExternalLink className="h-3.5 w-3.5" />
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-24 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
                            <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-brand-red/10 mb-6">
                                <Users className="h-10 w-10 text-brand-red" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Hamarosan...</h3>
                            <p className="text-muted-foreground max-w-md mx-auto">
                                Partnercégeink listája hamarosan elérhető lesz ezen az oldalon.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* Why Trust Us */}
            <section className="py-20 lg:py-32 bg-white dark:bg-gray-950">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                            {t('partnersPage.whyTitle')}
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Clock, key: 'reach' },
                            { icon: Shield, key: 'trust' },
                            { icon: Globe, key: 'innovation' },
                        ].map(({ icon: Icon, key }) => (
                            <div key={key} className="text-center p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
                                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-red/10 mb-6">
                                    <Icon className="h-8 w-8 text-brand-red" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">
                                    {t(`partnersPage.why.${key}.title`)}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {t(`partnersPage.why.${key}.description`)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 lg:py-32 bg-brand-red text-white">
                <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                        {t('partnersPage.cta.title')}
                    </h2>
                    <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto font-medium">
                        {t('partnersPage.cta.subtitle')}
                    </p>
                    <CTAButton
                        asChild
                        size="lg"
                        className="bg-white text-brand-red hover:bg-gray-100 border-none text-lg px-8 py-6 h-auto"
                    >
                        <Link href={`/${locale}/${getLocalizedPath('contact', currentLocale)}`}>
                            {t('partnersPage.cta.button')}
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </CTAButton>
                </div>
            </section>
        </>
    );
}
