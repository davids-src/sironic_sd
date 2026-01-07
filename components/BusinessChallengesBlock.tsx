/**
 * Business Challenges Block Component
 * Reusable component showcasing real business challenges and solutions
 * Based on case studies pattern
 */

'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { CTAButton } from '@/components/CTAButton';
import { SectionTitle } from '@/components/SectionTitle';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Locale } from '@/i18n';
import { getLocalizedPath } from '@/lib/routes';

interface CaseStudy {
    title: string;
    summary: string;
    bullets: string[];
}

interface BusinessChallengesBlockProps {
    showCta?: boolean;
    maxItems?: number;
    className?: string;
}

export function BusinessChallengesBlock({
    showCta = true,
    maxItems = 3,
    className = ''
}: BusinessChallengesBlockProps) {
    const { t } = useTranslation();
    const params = useParams();
    const locale = (params?.locale as string) || 'hu';

    const items: CaseStudy[] = t('caseStudies.items', []);

    if (!items || items.length === 0) {
        return null;
    }

    return (
        <section className={`py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50 ${className}`}>
            <div className="container mx-auto px-4 md:px-6">
                <SectionTitle
                    title={t('caseStudies.title')}
                    subtitle={t('caseStudies.subtitle')}
                />

                <div className="grid gap-8 lg:grid-cols-3 mt-12">
                    {items.slice(0, maxItems).map((item, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col rounded-xl bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        >
                            {/* Case Study Number Badge */}
                            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-brand-red text-white flex items-center justify-center text-xl font-bold shadow-lg">
                                {index + 1}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-2">
                                {item.title}
                            </h3>

                            {/* Summary */}
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                                {item.summary}
                            </p>

                            {/* Bullets */}
                            <ul className="space-y-3 mb-6">
                                {item.bullets.map((bullet, bulletIndex) => (
                                    <li key={bulletIndex} className="flex gap-3 items-start">
                                        <CheckCircle className="h-5 w-5 text-brand-red shrink-0 mt-0.5" />
                                        <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                            {bullet}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* Hover Effect Indicator */}
                            <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-800">
                                <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-brand-red transition-colors">
                                    Read full case study →
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                {showCta && (
                    <div className="mt-12 text-center">
                        <CTAButton asChild size="lg">
                            <Link href={`/${locale}/${getLocalizedPath('contact', locale as Locale)}`}>
                                {t('caseStudies.cta')}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </CTAButton>
                    </div>
                )}
            </div>
        </section>
    );
}
