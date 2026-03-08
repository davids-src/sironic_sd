'use client';

import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';
import { useParams } from 'next/navigation';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CTAButton } from '@/components/CTAButton';
import { ArrowRight, CheckCircle, CheckCircle2, Briefcase } from 'lucide-react';
import { getLocalizedPath } from '@/lib/routes';
import { Locale } from '@/i18n';

const categoryColors: Record<string, string> = {
    IT: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    automation: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
    AI: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
    security: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
    network: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    development: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
};

export default function ReferencePage() {
    const { t } = useTranslation();
    const params = useParams();
    const locale = (params?.locale as string) || 'hu';
    const currentLocale = locale as Locale;

    const references = t('referencesPage.references', []);

    const referencesSchema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: t('referencesPage.heroTitle'),
        description: t('referencesPage.intro'),
        itemListElement: Array.isArray(references)
            ? references.map((ref: any, index: number) => ({
                '@type': 'ListItem',
                position: index + 1,
                item: {
                    '@type': 'CreativeWork',
                    name: ref.title,
                    description: ref.description,
                },
            }))
            : [],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(referencesSchema) }}
            />

            {/* Hero Section */}
            <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <Breadcrumbs
                        items={[{ label: t('nav.references'), href: `/${locale}/${getLocalizedPath('references', currentLocale)}` }]}
                    />
                    <div className="mx-auto max-w-3xl text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-brand-red/10 text-brand-red px-4 py-2 rounded-full text-sm font-semibold mb-6">
                            <CheckCircle className="h-4 w-4" />
                            {t('referencesPage.badge')}
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
                            {t('referencesPage.heroTitle')}
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {t('referencesPage.heroSubtitle')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Intro Text */}
            <section className="py-16 bg-white dark:bg-gray-950">
                <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        {t('referencesPage.intro')}
                    </p>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="py-12 bg-brand-red">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {t('referencesPage.stats', []).map((stat: any, index: number) => (
                            <div key={index} className="text-center text-white">
                                <div className="text-4xl font-bold mb-1">{stat.value}</div>
                                <div className="text-sm text-white/80">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* References Grid */}
            <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                            {t('referencesPage.gridTitle')}
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            {t('referencesPage.gridSubtitle')}
                        </p>
                    </div>

                    {Array.isArray(references) && references.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {references.map((ref: any, index: number) => (
                                <div
                                    key={index}
                                    className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                                >
                                    {/* Image placeholder area */}
                                    <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center relative">
                                        <Briefcase className="h-12 w-12 text-gray-400 dark:text-gray-500" />
                                        {ref.tag && (
                                            <div className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full bg-brand-red/10 text-brand-red`}>
                                                <div className="flex items-center gap-1">
                                                    <CheckCircle2 className="h-3 w-3" />
                                                    {ref.tag}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    {/* Content */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-lg font-bold mb-2 leading-snug">{ref.title}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                                            {ref.description}
                                        </p>
                                        {ref.outcome && (
                                            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                                                <p className="text-xs text-brand-red font-semibold uppercase tracking-wide mb-1">
                                                    {t('referencesPage.outcomeLabel')}
                                                </p>
                                                <p className="text-sm font-medium">{ref.outcome}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-24 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
                            <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-brand-red/10 mb-6">
                                <Briefcase className="h-10 w-10 text-brand-red" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Hamarosan...</h3>
                            <p className="text-muted-foreground max-w-md mx-auto">
                                Valódi projektjeink és referenciáink hamarosan megjelennek ezen az oldalon.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 lg:py-32 bg-white dark:bg-gray-950">
                <div className="mx-auto max-w-4xl px-4 lg:px-8">
                    <div className="bg-brand-red rounded-2xl p-10 text-center text-white">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                            {t('referencesPage.cta.title')}
                        </h2>
                        <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto font-medium">
                            {t('referencesPage.cta.subtitle')}
                        </p>
                        <CTAButton
                            asChild
                            size="lg"
                            className="bg-white text-brand-red hover:bg-gray-100 border-none text-lg px-8 py-6 h-auto"
                        >
                            <Link href={`/${locale}/${getLocalizedPath('contact', currentLocale)}`}>
                                {t('referencesPage.cta.button')}
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </CTAButton>
                    </div>
                </div>
            </section>
        </>
    );
}
