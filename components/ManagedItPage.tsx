'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { CTAButton } from '@/components/CTAButton';
import { SectionTitle } from '@/components/SectionTitle';
import { ServiceSchema } from '@/components/ServiceSchemas';
import {
    Server, Shield, Clock, CheckCircle, ArrowRight, Network,
    Monitor, Wrench, Code, Headphones, TrendingUp, Users
} from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export function ManagedItPage() {
    const { t } = useTranslation();
    const params = useParams();
    const locale = (params?.locale as string) || 'hu';

    const painPoints = t('managedItPage.pain.items', []) as string[];
    const servicesIncluded = t('managedItPage.solution.items', []) as any[];
    const processSteps = t('managedItPage.process.steps', []) as any[];
    const trustPoints = t('managedItPage.trust.points', []) as any[];
    const faqItems = t('managedItPage.faq.items', []) as any[];

    const solutionIcons = [Server, Monitor, Clock, Wrench, Code, Headphones];
    const trustIcons = [TrendingUp, CheckCircle, Users];

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative py-20 lg:py-32 bg-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800" />
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-20 right-10 w-96 h-96 bg-brand-red rounded-full blur-3xl" />
                    <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
                </div>
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red/20 text-brand-red mb-6 border border-brand-red/30">
                            <Server className="h-4 w-4" />
                            <span className="text-sm font-semibold">{t('managedItPage.hero.badge')}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
                            {t('managedItPage.hero.title')}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
                            {t('managedItPage.hero.subtitle')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <CTAButton asChild size="lg" className="text-lg px-8 py-6 h-auto">
                                <Link href={`/${locale}/kapcsolat?subject=Managed+IT+Services`}>
                                    {t('managedItPage.hero.cta')}
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </CTAButton>
                            <CTAButton asChild size="lg" variant="outline" className="text-lg px-8 py-6 h-auto bg-transparent text-white border-white/40 hover:bg-white/10">
                                <Link href={`/${locale}/arak`}>
                                    {t('managedItPage.hero.secondaryCta')}
                                </Link>
                            </CTAButton>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Stats Strip */}
            <div className="bg-brand-red text-white py-4">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm font-semibold">
                        {['✓ 5+ Years', '✓ 100+ Clients', '✓ 16 EU Countries', '✓ 99.9% Uptime'].map((stat) => (
                            <span key={stat}>{stat}</span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Pain / Problem */}
            <section className="py-20 lg:py-32 bg-white dark:bg-gray-950">
                <div className="container mx-auto px-4 md:px-6">
                    <SectionTitle
                        title={t('managedItPage.pain.title')}
                        subtitle={t('managedItPage.pain.subtitle')}
                    />
                    <div className="grid gap-4 md:grid-cols-2 max-w-4xl mx-auto mt-8">
                        {painPoints.map((point, i) => (
                            <div key={i} className="flex gap-3 items-start p-5 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800">
                                <Network className="h-5 w-5 text-brand-red shrink-0 mt-0.5" />
                                <p className="text-sm text-gray-700 dark:text-gray-300">{point}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto italic">
                        {t('managedItPage.pain.transition')}
                    </p>
                </div>
            </section>

            {/* Solution — What's included */}
            <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
                <div className="container mx-auto px-4 md:px-6">
                    <SectionTitle
                        title={t('managedItPage.solution.title')}
                        subtitle={t('managedItPage.solution.subtitle')}
                    />
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto mt-10">
                        {servicesIncluded.map((item: any, i) => {
                            const Icon = solutionIcons[i % solutionIcons.length];
                            return (
                                <div key={i} className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                    <div className="inline-flex p-3 rounded-xl bg-brand-red/10 mb-4">
                                        <Icon className="h-6 w-6 text-brand-red" />
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-20 lg:py-32 bg-white dark:bg-gray-950">
                <div className="container mx-auto px-4 md:px-6">
                    <SectionTitle
                        title={t('managedItPage.process.title')}
                        subtitle={t('managedItPage.process.subtitle')}
                    />
                    <div className="grid gap-8 md:grid-cols-4 max-w-5xl mx-auto mt-10">
                        {processSteps.map((step: any, i: number) => (
                            <div key={i} className="text-center group">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-red text-white text-2xl font-bold mb-4 shadow-lg shadow-red-200 dark:shadow-none group-hover:scale-110 transition-transform duration-300">
                                    {i + 1}
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                                <p className="text-sm text-muted-foreground">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust / Proof */}
            <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
                <div className="container mx-auto px-4 md:px-6">
                    <SectionTitle
                        title={t('managedItPage.trust.title')}
                        subtitle={t('managedItPage.trust.subtitle')}
                    />
                    <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto mt-10">
                        {trustPoints.map((point: any, i: number) => {
                            const Icon = trustIcons[i % trustIcons.length];
                            return (
                                <div key={i} className="p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-center">
                                    <div className="inline-flex p-4 rounded-xl bg-brand-red/10 mb-6">
                                        <Icon className="h-8 w-8 text-brand-red" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{point.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{point.description}</p>
                                </div>
                            );
                        })}
                    </div>
                    {/* SLA highlight */}
                    <div className="mt-12 max-w-3xl mx-auto p-6 rounded-2xl bg-brand-red/5 border border-brand-red/20 flex gap-4 items-start">
                        <Shield className="h-6 w-6 text-brand-red shrink-0 mt-1" />
                        <p className="text-base leading-relaxed">
                            <strong>{t('managedItPage.trust.sla.label')}</strong>{' '}
                            {t('managedItPage.trust.sla.text')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Pricing anchor */}
            <section className="py-20 lg:py-32 bg-white dark:bg-gray-950">
                <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
                    <SectionTitle
                        title={t('managedItPage.pricing.title')}
                        subtitle={t('managedItPage.pricing.subtitle')}
                    />
                    <div className="mt-8 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8">
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                            {t('managedItPage.pricing.description')}
                        </p>
                        <CTAButton asChild size="lg" className="text-lg px-8">
                            <Link href={`/${locale}/kapcsolat?subject=Managed+IT+Pricing`}>
                                {t('managedItPage.pricing.cta')}
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </CTAButton>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
                <div className="container mx-auto px-4 md:px-6">
                    <SectionTitle title={t('managedItPage.faq.title')} />
                    <div className="max-w-3xl mx-auto">
                        <Accordion type="single" collapsible className="w-full space-y-4">
                            {faqItems.map((item: any, i: number) => (
                                <AccordionItem key={i} value={`item-${i}`} className="border border-gray-200 dark:border-gray-800 rounded-lg px-6 bg-white dark:bg-gray-900">
                                    <AccordionTrigger className="text-left text-lg font-semibold hover:text-brand-red transition-colors py-4">
                                        {item.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-base text-muted-foreground pb-4">
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 lg:py-32 bg-brand-red text-white">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                        {t('managedItPage.finalCta.title')}
                    </h2>
                    <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto">
                        {t('managedItPage.finalCta.subtitle')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <CTAButton asChild size="lg" className="bg-white text-brand-red hover:bg-gray-100 border-none text-lg px-8 py-6 h-auto">
                            <Link href={`/${locale}/kapcsolat?subject=Managed+IT+Services`}>
                                {t('managedItPage.finalCta.cta')}
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </CTAButton>
                    </div>
                </div>
            </section>

            {/* Structured Data */}
            <ServiceSchema
                serviceType="Managed IT Services"
                serviceName={t('managedItPage.hero.title')}
                description={t('managedItPage.hero.subtitle')}
                areaServed="EU"
                locale={locale}
                url={`/${locale}/managed-it`}
            />
        </div>
    );
}
