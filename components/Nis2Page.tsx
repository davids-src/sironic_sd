'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { CTAButton } from '@/components/CTAButton';
import { SectionTitle } from '@/components/SectionTitle';
import { Shield, Network, CheckCircle, FileText, Clock, ArrowRight, AlertCircle } from 'lucide-react';
import { Locale } from '@/i18n';
import { Nis2Schema } from '@/components/structured-data/Nis2Schema';

export function Nis2Page() {
    const { t } = useTranslation();
    const params = useParams();
    const locale = (params?.locale as string) || 'hu';

    const pillars = t('nis2Page.whatWeDo.pillars', []);
    const deliverables = t('nis2Page.deliverables.items', []);
    const phases = t('nis2Page.timeline.phases', []);
    const faqItems = t('nis2Page.faq.items', []);

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900/50 dark:to-gray-950 overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red/10 text-brand-red mb-6">
                            <Shield className="h-4 w-4" />
                            <span className="text-sm font-semibold">{t('nis2Page.hero.badge')}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                            {t('nis2Page.hero.title')}
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-10">
                            {t('nis2Page.hero.subtitle')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <CTAButton asChild size="lg" className="text-lg px-8 py-6 h-auto">
                                <Link href={`/${locale}/kapcsolat`}>
                                    {t('nis2Page.hero.cta.primary')}
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </CTAButton>
                            <CTAButton
                                asChild
                                size="lg"
                                variant="outline"
                                className="text-lg px-8 py-6 h-auto border-2"
                            >
                                <Link href={`/${locale}/kapcsolat`}>
                                    {t('nis2Page.hero.cta.secondary')}
                                </Link>
                            </CTAButton>
                        </div>
                    </div>
                </div>
                {/* Decorative background */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-brand-red rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
                </div>
            </section>

            {/* AI Summary Section */}
            <section className="py-12 bg-white dark:bg-gray-950 border-y border-gray-200 dark:border-gray-800">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">
                        <p className="text-lg md:text-xl leading-relaxed text-center font-medium">
                            {t('nis2Page.aiSummary')}
                        </p>
                    </div>
                </div>
            </section>

            {/* What We Do Section */}
            <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
                <div className="container mx-auto px-4 md:px-6">
                    <SectionTitle
                        title={t('nis2Page.whatWeDo.title')}
                        subtitle={t('nis2Page.whatWeDo.subtitle')}
                    />
                    <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
                        {pillars.map((pillar: any, index: number) => (
                            <div
                                key={index}
                                className="p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="mb-6">
                                    <div className="inline-flex p-4 rounded-xl bg-brand-red/10">
                                        {index === 0 && <Shield className="h-8 w-8 text-brand-red" />}
                                        {index === 1 && <Network className="h-8 w-8 text-brand-red" />}
                                        {index === 2 && <CheckCircle className="h-8 w-8 text-brand-red" />}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-4">{pillar.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What We Do NOT Section */}
            <section className="py-20 bg-white dark:bg-gray-950">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="p-8 rounded-2xl bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-900">
                            <div className="flex items-start gap-4">
                                <div className="shrink-0">
                                    <AlertCircle className="h-8 w-8 text-amber-600 dark:text-amber-500" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold mb-4">{t('nis2Page.whatWeDoNot.title')}</h2>
                                    <p className="text-lg leading-relaxed">{t('nis2Page.whatWeDoNot.description')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Deliverables Section */}
            <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900/50 dark:to-gray-950">
                <div className="container mx-auto px-4 md:px-6">
                    <SectionTitle
                        title={t('nis2Page.deliverables.title')}
                        subtitle={t('nis2Page.deliverables.subtitle')}
                    />
                    <div className="max-w-4xl mx-auto">
                        <div className="grid gap-4 md:grid-cols-2">
                            {deliverables.map((item: string, index: number) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 p-4 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
                                >
                                    <div className="shrink-0 mt-1">
                                        <CheckCircle className="h-5 w-5 text-brand-red" />
                                    </div>
                                    <p className="font-medium">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-20 lg:py-32 bg-white dark:bg-gray-950">
                <div className="container mx-auto px-4 md:px-6">
                    <SectionTitle
                        title={t('nis2Page.timeline.title')}
                        subtitle={t('nis2Page.timeline.subtitle')}
                    />
                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-8">
                            {phases.map((phase: any, index: number) => (
                                <div
                                    key={index}
                                    className="relative pl-8 pb-8 border-l-2 border-brand-red/30 last:border-l-0 last:pb-0"
                                >
                                    <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-brand-red flex items-center justify-center">
                                        <div className="w-3 h-3 rounded-full bg-white dark:bg-gray-950" />
                                    </div>
                                    <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl">
                                        <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                                            <Clock className="h-4 w-4" />
                                            <span>{phase.duration}</span>
                                        </div>
                                        <p className="leading-relaxed">{phase.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
                <div className="container mx-auto px-4 md:px-6">
                    <SectionTitle title={t('nis2Page.faq.title')} />
                    <div className="max-w-4xl mx-auto space-y-4">
                        {faqItems.map((item: any, index: number) => (
                            <details
                                key={index}
                                className="group p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:shadow-md transition-all duration-300"
                            >
                                <summary className="flex items-center justify-between cursor-pointer list-none">
                                    <h3 className="text-lg font-bold pr-4">{item.question}</h3>
                                    <div className="shrink-0 text-brand-red">
                                        <svg
                                            className="h-6 w-6 transform group-open:rotate-180 transition-transform duration-300"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </summary>
                                <p className="mt-4 text-muted-foreground leading-relaxed">{item.answer}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-20 lg:py-32 bg-brand-red text-white">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                        {t('nis2Page.finalCta.title')}
                    </h2>
                    <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto font-medium">
                        {t('nis2Page.finalCta.subtitle')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <CTAButton
                            asChild
                            size="lg"
                            className="bg-white text-brand-red hover:bg-gray-100 border-none text-lg px-8 py-6 h-auto"
                        >
                            <Link href={`/${locale}/kapcsolat`}>
                                {t('nis2Page.finalCta.cta.primary')}
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </CTAButton>
                        <CTAButton
                            asChild
                            size="lg"
                            variant="outline"
                            className="bg-transparent text-white border-white hover:bg-white/10 text-lg px-8 py-6 h-auto border-2"
                        >
                            <Link href={`/${locale}/kapcsolat`}>
                                {t('nis2Page.finalCta.cta.secondary')}
                            </Link>
                        </CTAButton>
                    </div>
                </div>
            </section>

            {/* Structured Data */}
            <Nis2Schema locale={locale} faqItems={faqItems} />
        </div>
    );
}
