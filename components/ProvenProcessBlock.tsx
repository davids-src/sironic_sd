/**
 * Proven Process Block Component
 * Reusable component displaying the 4-step proven process
 * Can be used across service pages, about, pricing, and contact pages
 */

'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { SectionTitle } from '@/components/SectionTitle';
import { ArrowRight, Clock, Shield, Zap, Headphones } from 'lucide-react';

interface ProcessStep {
    title: string;
    description: string;
}

interface ProvenProcessBlockProps {
    className?: string;
}

const stepIcons = [Clock, Shield, Zap, Headphones];

export function ProvenProcessBlock({ className = '' }: ProvenProcessBlockProps) {
    const { t } = useTranslation();

    const steps: ProcessStep[] = t('process.steps', []);

    if (!steps || steps.length === 0) {
        return null;
    }

    return (
        <section className={`py-20 lg:py-32 bg-white dark:bg-gray-950 ${className}`}>
            <div className="container mx-auto px-4 md:px-6">
                <SectionTitle
                    title={t('process.title')}
                />

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12 max-w-6xl mx-auto">
                    {steps.map((step, index) => {
                        const Icon = stepIcons[index] || ArrowRight;

                        return (
                            <div key={index} className="relative group">
                                {/* Connection Line (not on last item) */}
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-10 left-[calc(50%+2rem)] w-[calc(100%-2rem)] h-0.5 bg-gradient-to-r from-brand-red/40 to-brand-red/10 dark:from-brand-red/30 dark:to-brand-red/5" />
                                )}

                                <div className="flex flex-col items-center text-center">
                                    {/* Step Number & Icon */}
                                    <div className="relative mb-6">
                                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-red to-red-700 text-white flex items-center justify-center shadow-lg shadow-red-200 dark:shadow-none group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="h-10 w-10" />
                                        </div>
                                        <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-white dark:bg-gray-950 border-2 border-brand-red flex items-center justify-center text-sm font-bold text-brand-red">
                                            {index + 1}
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                                        {step.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
