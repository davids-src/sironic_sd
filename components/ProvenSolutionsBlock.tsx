/**
 * Proven Solutions Block Component
 * Reusable component displaying proven solutions/portfolio items
 * Based on portfolio preview pattern
 */

'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { Button } from '@/components/ui/button';
import { CTAButton } from '@/components/CTAButton';
import { SectionTitle } from '@/components/SectionTitle';
import { ArrowRight, Briefcase, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Locale } from '@/i18n';
import { getLocalizedPath } from '@/lib/routes';

interface PortfolioCard {
    industry: string;
    problem: string;
    solution: string;
    stack: string;
    outcome: string;
}

interface ProvenSolutionsBlockProps {
    showCtas?: boolean;
    maxItems?: number;
    className?: string;
}

export function ProvenSolutionsBlock({
    showCtas = true,
    maxItems = 6,
    className = ''
}: ProvenSolutionsBlockProps) {
    const { t } = useTranslation();
    const params = useParams();
    const locale = (params?.locale as string) || 'hu';

    const cards: PortfolioCard[] = t('portfolio.cards', []);

    if (!cards || cards.length === 0) {
        return null;
    }

    return (
        <section className={`py-20 lg:py-32 bg-white dark:bg-gray-950 ${className}`}>
            <div className="container mx-auto px-4 md:px-6">
                <SectionTitle
                    title={t('portfolio.title')}
                    subtitle={t('portfolio.subtitle')}
                />

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
                    {cards.slice(0, maxItems).map((card, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        >
                            <div className="p-6 flex flex-col h-full">
                                {/* Industry Badge */}
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="p-2 bg-brand-red/10 rounded-lg">
                                        <Briefcase className="h-5 w-5 text-brand-red" />
                                    </div>
                                    <span className="text-sm font-semibold text-brand-red">{card.industry}</span>
                                </div>

                                {/* Problem */}
                                <div className="mb-4">
                                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                                        Challenge
                                    </h4>
                                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                        {card.problem}
                                    </p>
                                </div>

                                {/* Solution */}
                                <div className="mb-4">
                                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                                        Solution
                                    </h4>
                                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                        {card.solution}
                                    </p>
                                </div>

                                {/* Tech Stack */}
                                <div className="mb-4">
                                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                                        Tech Stack
                                    </h4>
                                    <p className="text-xs text-gray-600 dark:text-gray-400 font-mono leading-relaxed">
                                        {card.stack}
                                    </p>
                                </div>

                                {/* Outcome */}
                                <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-800">
                                    <div className="flex gap-2 items-start">
                                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-500 shrink-0 mt-0.5" />
                                        <p className="text-sm font-medium text-gray-900 dark:text-white leading-relaxed">
                                            {card.outcome}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTAs */}
                {showCtas && (
                    <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <CTAButton asChild size="lg">
                            <Link href={`/${locale}/${getLocalizedPath('contact', locale as Locale)}`}>
                                {t('portfolio.ctaPrimary')}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </CTAButton>
                        <Button asChild variant="outline" size="lg">
                            <Link href={`/${locale}/${getLocalizedPath('custom-development', locale as Locale)}`}>
                                {t('portfolio.ctaSecondary')}
                            </Link>
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
}
