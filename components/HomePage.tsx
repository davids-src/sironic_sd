'use client';

import { Hero } from '@/components/Hero';
import { ServiceCard } from '@/components/ServiceCard';
import { Testimonial } from '@/components/Testimonial';
import { FaqSection } from '@/components/FaqSection';
import { MindenCegnekSection } from '@/components/MindenCegnekSection';
import { CustomDevelopmentSection } from '@/components/CustomDevelopmentSection';
import { NetworkOptimizationSection } from '@/components/NetworkOptimizationSection';
import { ItTrainingSection } from '@/components/ItTrainingSection';
import { OnsitePresenceSection } from '@/components/OnsitePresenceSection';
import { RepairServiceSection } from '@/components/RepairServiceSection';
import { OrganizationSchema } from '@/components/structured-data/OrganizationSchema';
import { LocalBusinessSchema } from '@/components/structured-data/LocalBusinessSchema';
import { Button } from '@/components/ui/button';
import { CTAButton } from '@/components/CTAButton';
import { SectionTitle } from '@/components/SectionTitle';
import { InfoCard } from '@/components/InfoCard';
import { Server, Network, Shield, Code, CheckCircle, ShoppingCart, Cloud, Wrench, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';
import { useParams } from 'next/navigation';

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
    const workProcess = t('workProcess.steps', []);

    return (
        <>
            <Hero />

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
                            <Link href={`/${locale}/szolgaltatasok`}>
                                {t('services.viewAll')}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </CTAButton>
                    </div>
                </div>
            </section>

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

            <section className="py-20 lg:py-32 bg-white dark:bg-gray-950">
                <div className="container mx-auto px-4 md:px-6">
                    <SectionTitle
                        title={t('workProcess.title')}
                    />
                    <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
                        {workProcess.map((step: any, index: number) => (
                            <div key={index} className="text-center group">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-red text-white text-2xl font-bold mb-6 shadow-lg shadow-red-200 dark:shadow-none group-hover:scale-110 transition-transform duration-300">
                                    {step.step}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

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
                        <Link href={`/${locale}/kapcsolat`}>
                            {t('finalCta.button')}
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </CTAButton>
                </div>
            </section>

            {/* Structured Data */}
            <OrganizationSchema locale={locale} />
            <LocalBusinessSchema locale={locale} />
        </>
    );
}
