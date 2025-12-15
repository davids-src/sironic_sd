'use client';

import { Hero } from '@/components/Hero';
import { ServiceCard } from '@/components/ServiceCard';
import { Testimonial } from '@/components/Testimonial';
import { FaqSection } from '@/components/FaqSection';
import { OrganizationSchema } from '@/components/structured-data/OrganizationSchema';
import { LocalBusinessSchema } from '@/components/structured-data/LocalBusinessSchema';
import { Button } from '@/components/ui/button';
import { CTAButton } from '@/components/CTAButton';
import { SectionTitle } from '@/components/SectionTitle';
import { Server, Network, Shield, Code, CheckCircle, ShoppingCart, Cloud, Wrench, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';
import { getLocalizedPath } from '@/lib/routes';
import { Locale } from '@/i18n';
import { useParams } from 'next/navigation';
import dynamic from 'next/dynamic';

// Dynamic imports for below-fold sections to optimize bundle size
const MindenCegnekSection = dynamic(() => import('@/components/MindenCegnekSection').then(mod => ({ default: mod.MindenCegnekSection })), {
    loading: () => <div className="h-96 bg-gray-50 dark:bg-gray-900/50 animate-pulse" />
});
const CustomDevelopmentSection = dynamic(() => import('@/components/CustomDevelopmentSection').then(mod => ({ default: mod.CustomDevelopmentSection })), {
    loading: () => <div className="h-96 bg-white dark:bg-gray-950 animate-pulse" />
});
const NetworkOptimizationSection = dynamic(() => import('@/components/NetworkOptimizationSection').then(mod => ({ default: mod.NetworkOptimizationSection })), {
    loading: () => <div className="h-96 bg-gray-50 dark:bg-gray-900/50 animate-pulse" />
});
const RepairServiceSection = dynamic(() => import('@/components/RepairServiceSection').then(mod => ({ default: mod.RepairServiceSection })), {
    loading: () => <div className="h-96 bg-white dark:bg-gray-950 animate-pulse" />
});
const ItTrainingSection = dynamic(() => import('@/components/ItTrainingSection').then(mod => ({ default: mod.ItTrainingSection })), {
    loading: () => <div className="h-96 bg-gray-50 dark:bg-gray-900/50 animate-pulse" />
});
const OnsitePresenceSection = dynamic(() => import('@/components/OnsitePresenceSection').then(mod => ({ default: mod.OnsitePresenceSection })), {
    loading: () => <div className="h-96 bg-white dark:bg-gray-950 animate-pulse" />
});

// Wave Starter Pack - New lead generation components
const PortfolioPreview = dynamic(() => import('@/components/PortfolioPreview').then(mod => ({ default: mod.PortfolioPreview })), {
    loading: () => <div className="h-96 bg-white dark:bg-gray-950 animate-pulse" />
});
const CaseStudiesPreview = dynamic(() => import('@/components/CaseStudiesPreview').then(mod => ({ default: mod.CaseStudiesPreview })), {
    loading: () => <div className="h-96 bg-gray-50 dark:bg-gray-900/50 animate-pulse" />
});
const ProcessAndSLA = dynamic(() => import('@/components/ProcessAndSLA').then(mod => ({ default: mod.ProcessAndSLA })), {
    loading: () => <div className="h-96 bg-white dark:bg-gray-950 animate-pulse" />
});
const QuickQuoteCalculator = dynamic(() => import('@/components/QuickQuoteCalculator').then(mod => ({ default: mod.QuickQuoteCalculator })), {
    loading: () => <div className="h-96 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 animate-pulse" />
});
const EuPresenceVisual = dynamic(() => import('@/components/EuPresenceVisual').then(mod => ({ default: mod.EuPresenceVisual })), {
    loading: () => <div className="h-96 bg-gray-900 animate-pulse" />
});


export function HomePage() {
    const { t } = useTranslation();
    const params = useParams();
    const locale = (params?.locale as string) || 'hu';

    const services = [
        {
            title: t('services.systemOperation.title'),
            description: t('services.systemOperation.description'),
            icon: Server,
        },
        {
            title: t('services.networking.title'),
            description: t('services.networking.description'),
            icon: Network,
        },
        {
            title: t('services.security.title'),
            description: t('services.security.description'),
            icon: Shield,
        },
        {
            title: t('services.development.title'),
            description: t('services.development.description'),
            icon: Code,
        },
        {
            title: t('services.commerce.title'),
            description: t('services.commerce.description'),
            icon: ShoppingCart,
        },
        {
            title: t('services.hosting.title'),
            description: t('services.hosting.description'),
            icon: Cloud,
        },
        {
            title: t('services.repair.title'),
            description: t('services.repair.description'),
            icon: Wrench,
        },
    ];

    const whyChooseUs = t('whyChooseUs.reasons', []);
    const testimonials = t('testimonials.items', []);

    return (
        <>
            <Hero />

            <EuPresenceVisual />

            <div className="space-y-0">
                <PortfolioPreview />
                <CaseStudiesPreview />
            </div>

            <section id="szolgaltatasok" className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
                <div className="container mx-auto px-4 md:px-6">
                    <SectionTitle
                        title={t('services.title')}
                        subtitle={t('services.subtitle')}
                    />
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {services.slice(0, 6).map((service, index) => (
                            <ServiceCard
                                key={index}
                                title={service.title}
                                description={service.description}
                                icon={service.icon}
                            />
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <CTAButton asChild size="lg">
                            <Link href={`/${locale}/${getLocalizedPath('services', locale as Locale)}`}>
                                {t('services.viewAll')}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </CTAButton>
                    </div>
                </div>
            </section>

            <QuickQuoteCalculator />

            <MindenCegnekSection />

            <CustomDevelopmentSection />

            <NetworkOptimizationSection />

            <RepairServiceSection />

            <ItTrainingSection />

            <OnsitePresenceSection />

            <section id="miert-valassz-minket" className="py-20 lg:py-32 bg-white dark:bg-gray-950">
                <div className="container mx-auto px-4 md:px-6">
                    <SectionTitle
                        title={t('whyChooseUs.title')}
                    />
                    <div className="mx-auto max-w-4xl">
                        <div className="grid gap-6 md:grid-cols-2">
                            {whyChooseUs.map((reason: string, index: number) => (
                                <div key={index} className="flex gap-4 items-start p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all duration-300">
                                    <div className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm shrink-0">
                                        <CheckCircle className="h-5 w-5 text-brand-red" />
                                    </div>
                                    <p className="text-lg font-medium">{reason}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/50 dark:to-gray-950">
                <div className="container mx-auto px-4 md:px-6">
                    <SectionTitle
                        title={t('testimonials.title')}
                    />
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                        {testimonials.map((testimonial: any, index: number) => (
                            <Testimonial key={index} quote={testimonial.quote} company={testimonial.company} />
                        ))}
                    </div>
                </div>
            </section>

            <ProcessAndSLA />

            <FaqSection />

            <section className="py-20 lg:py-32 bg-brand-red text-white">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                        {t('finalCta.title')}
                    </h2>
                    <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto font-medium">
                        {t('finalCta.description')}
                    </p>
                    <CTAButton
                        asChild
                        size="lg"
                        className="bg-white text-brand-red hover:bg-gray-100 border-none text-lg px-8 py-6 h-auto"
                    >
                        <Link href={`/${locale}/${getLocalizedPath('contact', locale as Locale)}`}>
                            {t('finalCta.button')}
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </CTAButton>
                </div>
            </section>

            {/* Structured Data */}
            <OrganizationSchema locale={locale as Locale} />
            <LocalBusinessSchema locale={locale as Locale} />
        </>
    );
}
