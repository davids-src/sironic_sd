'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { CTAButton } from '@/components/CTAButton';
import { SectionTitle } from '@/components/SectionTitle';
import { ServiceSchema } from '@/components/ServiceSchemas';
import {
    Shield, Code, Users, Network, Wrench, GraduationCap,
    ArrowRight, Monitor, Zap, CheckCircle, Clock
} from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export function CybersecurityPage() {
    const { t } = useTranslation();
    const params = useParams();
    const locale = (params?.locale as string) || 'hu';

    const painPoints = t('cybersecurityPage.pain.items', []) as string[];
    const services = t('cybersecurityPage.solution.services', []) as any[];
    const trustPoints = t('cybersecurityPage.trust.points', []) as any[];
    const faqItems = t('cybersecurityPage.faq.items', []) as any[];

    const serviceIcons = [Code, Shield, Users, Network, Wrench, GraduationCap];

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative py-20 lg:py-32 bg-gray-950 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-900 via-transparent to-transparent" />
                </div>
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-900/30 text-brand-red mb-6 border border-brand-red/30">
                            <Shield className="h-4 w-4" />
                            <span className="text-sm font-semibold">{t('cybersecurityPage.hero.badge')}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
                            {t('cybersecurityPage.hero.title')}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
                            {t('cybersecurityPage.hero.subtitle')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <CTAButton asChild size="lg" className="text-lg px-8 py-6 h-auto">
                                <Link href={`/${locale}/kapcsolat?subject=Security+Assessment`}>
                                    {t('cybersecurityPage.hero.cta')}
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </CTAButton>
                            <CTAButton asChild size="lg" variant="outline" className="text-lg px-8 py-6 h-auto bg-transparent text-white border-white/40 hover:bg-white/10">
                                <Link href={`/${locale}/checklist`}>
                                    {t('cybersecurityPage.hero.secondaryCta')}
                                </Link>
                            </CTAButton>
                        </div>
                    </div>
                </div>
            </section>

            {/* Risk context banner */}
            <div className="bg-amber-950/80 border-y border-amber-800/50 py-5">
                <div className="container mx-auto px-4 md:px-6">
                    <p className="text-center text-amber-300 text-sm md:text-base font-medium">
                        <Zap className="inline h-4 w-4 mr-2 mb-0.5" />
                        {t('cybersecurityPage.riskBanner')}
                    </p>
                </div>
            </div>

            {/* Pain / Problem */}
            <section className="py-20 lg:py-32 bg-white dark:bg-gray-950">
                <div className="container mx-auto px-4 md:px-6">
                    <SectionTitle
                        title={t('cybersecurityPage.pain.title')}
                        subtitle={t('cybersecurityPage.pain.subtitle')}
                    />
                    <div className="grid gap-4 md:grid-cols-2 max-w-4xl mx-auto mt-8">
                        {painPoints.map((point, i) => (
                            <div key={i} className="flex gap-3 items-start p-5 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-100 dark:border-red-900/30">
                                <Monitor className="h-5 w-5 text-brand-red shrink-0 mt-0.5" />
                                <p className="text-sm text-gray-700 dark:text-gray-300">{point}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Security Services */}
            <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
                <div className="container mx-auto px-4 md:px-6">
                    <SectionTitle
                        title={t('cybersecurityPage.solution.title')}
                        subtitle={t('cybersecurityPage.solution.subtitle')}
                    />
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mt-10">
                        {services.map((service: any, i: number) => {
                            const Icon = serviceIcons[i % serviceIcons.length];
                            return (
                                <div key={i} className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:shadow-xl hover:border-brand-red/30 hover:-translate-y-1 transition-all duration-300">
                                    <div className="inline-flex p-3 rounded-xl bg-brand-red/10 mb-4">
                                        <Icon className="h-6 w-6 text-brand-red" />
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                                </div>
                            );
                        })}
                    </div>

                    {/* NIS2 Highlight block */}
                    <div className="mt-16 max-w-3xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 text-white">
                        <div className="flex items-start gap-4">
                            <div className="shrink-0 p-3 rounded-xl bg-brand-red/20">
                                <Shield className="h-6 w-6 text-brand-red" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">{t('cybersecurityPage.nis2Block.title')}</h3>
                                <p className="text-gray-300 leading-relaxed">{t('cybersecurityPage.nis2Block.description')}</p>
                                <div className="mt-4">
                                    <Link href={`/${locale}/nis2`} className="text-brand-red hover:underline font-semibold text-sm flex items-center gap-1">
                                        {t('cybersecurityPage.nis2Block.link')}
                                        <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust / Proof */}
            <section className="py-20 lg:py-32 bg-white dark:bg-gray-950">
                <div className="container mx-auto px-4 md:px-6">
                    <SectionTitle
                        title={t('cybersecurityPage.trust.title')}
                        subtitle={t('cybersecurityPage.trust.subtitle')}
                    />
                    <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto mt-10">
                        {trustPoints.map((point: any, i: number) => {
                            const icons = [CheckCircle, Users, Shield];
                            const Icon = icons[i % icons.length];
                            return (
                                <div key={i} className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-center">
                                    <div className="inline-flex p-4 rounded-xl bg-brand-red/10 mb-6">
                                        <Icon className="h-8 w-8 text-brand-red" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{point.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{point.description}</p>
                                </div>
                            );
                        })}
                    </div>
                    <div className="mt-10 max-w-3xl mx-auto p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
                        <p className="text-center text-muted-foreground italic">{t('cybersecurityPage.trust.disclaimer')}</p>
                    </div>
                </div>
            </section>

            {/* Pricing anchor */}
            <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
                <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
                    <SectionTitle
                        title={t('cybersecurityPage.pricing.title')}
                        subtitle={t('cybersecurityPage.pricing.subtitle')}
                    />
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <CTAButton asChild size="lg">
                            <Link href={`/${locale}/kapcsolat?subject=Security+Assessment`}>
                                {t('cybersecurityPage.pricing.cta')}
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </CTAButton>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 lg:py-32 bg-white dark:bg-gray-950">
                <div className="container mx-auto px-4 md:px-6">
                    <SectionTitle title={t('cybersecurityPage.faq.title')} />
                    <div className="max-w-3xl mx-auto">
                        <Accordion type="single" collapsible className="w-full space-y-4">
                            {faqItems.map((item: any, i: number) => (
                                <AccordionItem key={i} value={`item-${i}`} className="border border-gray-200 dark:border-gray-800 rounded-lg px-6 bg-gray-50 dark:bg-gray-900">
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
                        {t('cybersecurityPage.finalCta.title')}
                    </h2>
                    <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto">
                        {t('cybersecurityPage.finalCta.subtitle')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <CTAButton asChild size="lg" className="bg-white text-brand-red hover:bg-gray-100 border-none text-lg px-8 py-6 h-auto">
                            <Link href={`/${locale}/kapcsolat?subject=Security+Assessment`}>
                                {t('cybersecurityPage.finalCta.cta')}
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </CTAButton>
                        <CTAButton asChild size="lg" variant="outline" className="bg-transparent text-white border-white/40 hover:bg-white/10 text-lg px-8 py-6 h-auto">
                            <Link href={`/${locale}/checklist`}>
                                {t('cybersecurityPage.finalCta.secondaryCta')}
                            </Link>
                        </CTAButton>
                    </div>
                </div>
            </section>

            <ServiceSchema
                serviceType="Cybersecurity"
                serviceName={t('cybersecurityPage.hero.title')}
                description={t('cybersecurityPage.hero.subtitle')}
                areaServed="EU"
                locale={locale}
                url={`/${locale}/cybersecurity`}
            />
        </div>
    );
}
