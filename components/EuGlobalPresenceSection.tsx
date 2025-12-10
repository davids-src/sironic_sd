'use client';

import { CTAButton } from '@/components/CTAButton';
import { Globe, Users, Monitor, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/hooks/useTranslation';
import { getLocalizedPath } from '@/lib/routes';
import { Locale } from '@/i18n';
import { SectionTitle } from '@/components/SectionTitle';

export function EuGlobalPresenceSection() {
    const { t } = useTranslation();
    const params = useParams();
    const locale = (params?.locale as Locale) || 'hu';

    // Fallback for points if it's not an array or empty (though strictly it should be there)
    const points = t('euPresence.points', []) as string[];

    const icons = [Globe, Monitor, Users];

    return (
        <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/30">
            <div className="container mx-auto px-4 md:px-6">
                <SectionTitle
                    title={t('euPresence.title')}
                    subtitle={t('euPresence.subtitle')}
                />

                <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto mb-16">
                    {points.map((point, index) => {
                        const Icon = icons[index % icons.length];
                        return (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300"
                            >
                                <div className="bg-red-50 dark:bg-red-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                                    <Icon className="h-6 w-6 text-brand-red" />
                                </div>
                                <p className="text-lg font-medium text-gray-900 dark:text-gray-100 min-h-[3rem] flex items-center">
                                    {point}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div className="text-center">
                    <CTAButton asChild size="lg">
                        <Link href={`/${locale}/${getLocalizedPath('contact', locale)}`}>
                            {t('euPresence.cta')}
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </CTAButton>
                </div>
            </div>
        </section>
    );
}
