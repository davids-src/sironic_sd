'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { CTAButton } from '@/components/CTAButton';
import { SectionTitle } from '@/components/SectionTitle';
import { ServiceSchema } from '@/components/ServiceSchemas';
import {
    Cloud, Server, Globe, TrendingUp, Shield, CheckCircle,
    ArrowRight, Network, Monitor, Code
} from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export function CloudPage() {
    const { t } = useTranslation();
    const params = useParams();
    const locale = (params?.locale as string) || 'hu';

    const painPoints = t('cloudPage.pain.items', []) as string[];
    const pillars = t('cloudPage.solution.pillars', []) as any[];
    const includedItems = t('cloudPage.solution.included', []) as string[];
    const trustPoints = t('cloudPage.trust.points', []) as any[];
    const faqItems = t('cloudPage.faq.items', []) as any[];

    const pillarIcons = [Globe, Cloud, Monitor];

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-900 to-gray-800 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-10 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
                    <div className="absolute bottom-10 left-20 w-72 h-72 bg-brand-red rounded-full blur-3xl" />
                </div>
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 mb-6 border border-blue-500/30">
                            <Cloud className="h-4 w-4" />
                            <span className="text-sm font-semibold">{t('cloudPage.hero.badge')}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
                            {t('cloudPage.hero.title')}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
                            {t('cloudPage.hero.subtitle')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <CTAButton asChild size="lg" className="text-lg px-8 py-6 h-auto">
                                <Link href={`/${locale}/kapcsolat?subject=Cloud+Infrastructure`}>
                                    {t('cloudPage.hero.cta')}
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </CTAButton>
                            <CTAButton asChild size="lg" variant="outline" className="text-lg px-8 py-6 h-auto bg-transparent text-white border-white/40 hover:bg-white/10">
                                <Link href={`/${locale}/arak`}>
                                    {t('cloudPage.hero.secondaryCta')}
                                </Link>
                            </CTAButton>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pain / Problem */}
            <section className="py-20 lg:py-32 bg-white dark:bg-gray-950">
                <div className="container mx-auto px-4 md:px-6">
                    <SectionTitle
                        title={t('cloudPage.pain.title')}
                        subtitle={t('cloudPage.pain.subtitle')}
                    />
                    <div className="grid gap-4 md:grid-cols-2 max-w-4xl mx-auto mt-8">
                        {painPoints.map((point, i) => (
                            <div key={i} className="flex gap-3 items-start p-5 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800">
                                <Network className="h-5 w-5 text-brand-red shrink-0 mt-0.5" />
                                <p className="text-sm text-gray-700 dark:text-gray-300">{point}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Three Service Pillars */}
            <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
                <div className="container mx-auto px-4 md:px-6">
                    <SectionTitle
                        title={t('cloudPage.solution.title')}
                        subtitle={t('cloudPage.solution.subtitle')}
                    />
                    <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto mt-10">
                        {pillars.map((pillar: any, i: number) => {
                            const Icon = pillarIcons[i % pillarIcons.length];
                            return (
                                <div key={i} className="p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                    <div className="inline-flex p-4 rounded-xl bg-brand-red/10 mb-6">
                                        <Icon className="h-8 w-8 text-brand-red" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                                </div>
                            );
                        })}
                    </div>

                    {/* What's always included */}
                    <div className="mt-16 max-w-4xl mx-auto">
                        <h3 className="text-center text-xl font-bold mb-8">{t('cloudPage.solution.includedTitle')}</h3>
                        <div className="grid gap-4 md:grid-cols-2">
                            {includedItems.map((item, i) => (
                                <div key={i} className="flex gap-3 items-start p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800">
                                    <CheckCircle className="h-5 w-5 text-brand-red shrink-0 mt-0.5" />
                                    <p className="text-sm">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust / Proof */}
            <section className="py-20 lg:py-32 bg-white dark:bg-gray-950">
                <div className="container mx-auto px-4 md:px-6">
                    <SectionTitle
                        title={t('cloudPage.trust.title')}
                        subtitle={t('cloudPage.trust.subtitle')}
                    />
                    <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto mt-10">
                        {trustPoints.map((point: any, i: number) => {
                            const icons = [TrendingUp, Globe, Shield];
                            const Icon = icons[i % icons.length];
                            return (
                                <div key={i} className="p-6 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-start gap-4">
                                    <div className="inline-flex p-3 rounded-lg bg-brand-red/10 shrink-0">
                                        <Icon className="h-5 w-5 text-brand-red" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1">{point.title}</h4>
                                        <p className="text-sm text-muted-foreground">{point.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="mt-10 max-w-3xl mx-auto p-6 rounded-2xl bg-slate-900 text-slate-300 font-mono text-sm">
                        <p className="text-slate-500 mb-2">// Technology stack</p>
                        <p><span className="text-brand-red">infrastructure:</span> <span className="text-green-400">Linux, Windows Server, VMware</span></p>
                        <p><span className="text-brand-red">cloud:</span> <span className="text-green-400">AWS, Hetzner, private EU datacentres</span></p>
                        <p><span className="text-brand-red">networking:</span> <span className="text-green-400">MikroTik, Ubiquiti</span></p>
                        <p><span className="text-brand-red">compliance:</span> <span className="text-green-400">GDPR, NIS2-ready</span></p>
                    </div>
                </div>
            </section>

            {/* Pricing Anchor */}
            <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
                <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
                    <SectionTitle
                        title={t('cloudPage.pricing.title')}
                        subtitle={t('cloudPage.pricing.subtitle')}
                    />
                    <div className="mt-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8">
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                            {t('cloudPage.pricing.description')}
                        </p>
                        <CTAButton asChild size="lg">
                            <Link href={`/${locale}/kapcsolat?subject=Cloud+Infrastructure+Review`}>
                                {t('cloudPage.pricing.cta')}
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </CTAButton>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 lg:py-32 bg-white dark:bg-gray-950">
                <div className="container mx-auto px-4 md:px-6">
                    <SectionTitle title={t('cloudPage.faq.title')} />
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
                        {t('cloudPage.finalCta.title')}
                    </h2>
                    <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto">
                        {t('cloudPage.finalCta.subtitle')}
                    </p>
                    <CTAButton asChild size="lg" className="bg-white text-brand-red hover:bg-gray-100 border-none text-lg px-8 py-6 h-auto">
                        <Link href={`/${locale}/kapcsolat?subject=Cloud+Infrastructure`}>
                            {t('cloudPage.finalCta.cta')}
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </CTAButton>
                </div>
            </section>

            <ServiceSchema
                serviceType="Cloud Infrastructure"
                serviceName={t('cloudPage.hero.title')}
                description={t('cloudPage.hero.subtitle')}
                areaServed="EU"
                locale={locale}
                url={`/${locale}/cloud-infrastructure`}
            />
        </div>
    );
}
