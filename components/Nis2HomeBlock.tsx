'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { CTAButton } from '@/components/CTAButton';
import { SectionTitle } from '@/components/SectionTitle';
import { Shield, CheckCircle, Network, ArrowRight } from 'lucide-react';
import { Locale } from '@/i18n';

export function Nis2HomeBlock() {
    const { t } = useTranslation();
    const params = useParams();
    const locale = (params?.locale as string) || 'hu';

    const benefits = t('nis2Block.home.benefits', []);
    const cards = [
        {
            key: 'implementation',
            icon: Shield,
            title: t('nis2Block.home.cards.implementation.title'),
            description: t('nis2Block.home.cards.implementation.description'),
        },
        {
            key: 'operation',
            icon: Network,
            title: t('nis2Block.home.cards.operation.title'),
            description: t('nis2Block.home.cards.operation.description'),
        },
        {
            key: 'auditSupport',
            icon: CheckCircle,
            title: t('nis2Block.home.cards.auditSupport.title'),
            description: t('nis2Block.home.cards.auditSupport.description'),
        },
    ];

    return (
        <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900/50 dark:to-gray-950">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red/10 text-brand-red mb-6">
                        <Shield className="h-4 w-4" />
                        <span className="text-sm font-semibold">EU Kiberbiztonsági Megfelelés</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                        {t('nis2Block.home.title')}
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                        {t('nis2Block.home.subtitle')}
                    </p>
                </div>

                {/* Benefits */}
                <div className="max-w-5xl mx-auto mb-16">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {benefits.map((benefit: string, index: number) => (
                            <div
                                key={index}
                                className="flex items-start gap-3 p-4 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:shadow-md transition-all duration-300"
                            >
                                <div className="shrink-0 mt-1">
                                    <div className="w-5 h-5 rounded-full bg-brand-red/10 flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-brand-red" />
                                    </div>
                                </div>
                                <p className="text-sm font-medium leading-relaxed">{benefit}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Cards */}
                <div className="grid gap-8 md:grid-cols-3 mb-12">
                    {cards.map((card) => {
                        const Icon = card.icon;
                        return (
                            <div
                                key={card.key}
                                className="group relative p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-brand-red/50 hover:shadow-xl transition-all duration-300"
                            >
                                {/* Icon */}
                                <div className="mb-6">
                                    <div className="inline-flex p-4 rounded-xl bg-brand-red/10 group-hover:bg-brand-red/20 transition-colors duration-300">
                                        <Icon className="h-8 w-8 text-brand-red" />
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold mb-4 group-hover:text-brand-red transition-colors duration-300">
                                    {card.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {card.description}
                                </p>

                                {/* Decorative element */}
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-red/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        );
                    })}
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <CTAButton asChild size="lg" className="text-lg px-8 py-6 h-auto">
                        <Link href={`/${locale}/kapcsolat`}>
                            {t('nis2Block.home.cta.primary')}
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </CTAButton>
                    <CTAButton
                        asChild
                        size="lg"
                        variant="outline"
                        className="text-lg px-8 py-6 h-auto border-2"
                    >
                        <Link href={`/${locale}/nis2`}>
                            {t('nis2Block.home.cta.secondary')}
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </CTAButton>
                </div>
            </div>
        </section>
    );
}
