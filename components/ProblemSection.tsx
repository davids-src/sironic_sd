'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { SectionTitle } from './SectionTitle';
import { CTAButton } from './CTAButton';

export function ProblemSection() {
    const { t } = useTranslation();
    const params = useParams();

    const problems = t('problemSection.items', []) as string[];

    return (
        <section className="py-16 lg:py-24 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4 md:px-6">
                <SectionTitle
                    title={t('problemSection.title')}
                />
                <div className="mx-auto max-w-4xl">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {problems.map((problem: string, index: number) => (
                            <div
                                key={index}
                                className="flex items-start gap-3 p-4 rounded-xl bg-red-50/50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30 hover:shadow-md transition-all duration-300"
                            >
                                <span className="text-brand-red shrink-0 mt-0.5 text-lg">✕</span>
                                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 leading-relaxed">{problem}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-lg text-muted-foreground mt-8 max-w-2xl mx-auto font-medium leading-relaxed">
                        {t('problemSection.transition')}
                    </p>
                    <div className="flex justify-center mt-8">
                        <CTAButton asChild>
                            <Link href={`/${params.locale}/#contact`}>
                                {t('problemSection.cta')}
                            </Link>
                        </CTAButton>
                    </div>
                </div>
            </div>
        </section>
    );
}
