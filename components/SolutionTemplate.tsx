'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { SectionTitle } from '@/components/SectionTitle';
import { CTAButton } from '@/components/CTAButton';
import { CheckCircle, ArrowRight, Server, TrendingUp, Shield } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Locale } from '@/i18n';
import { BookingForm } from '@/components/BookingForm';

interface SolutionData {
    title: string;
    subtitle: string;
    industry: string;
    features: string[];
    benefit: string;
}

export function SolutionTemplate({ data }: { data: SolutionData }) {
    const { t } = useTranslation();
    const params = useParams();
    const locale = (params?.locale as Locale) || 'en';

    if (!data) return null;

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
            {/* Hero */}
            <section className="relative py-20 lg:py-32 overflow-hidden bg-gray-900 text-white">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800" />
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm font-semibold mb-6 border border-blue-500/20">
                            <Server className="h-4 w-4" />
                            <span>{data.industry} Solution</span>
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                            {data.title}
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                            {data.subtitle}
                        </p>
                        <div className="flex gap-4">
                            <CTAButton asChild size="lg" className="bg-brand-red hover:bg-red-700 border-none text-white">
                                <Link href="#contact">
                                    Get a Quote
                                </Link>
                            </CTAButton>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits / Features */}
            <section className="py-20 lg:py-32 bg-white dark:bg-gray-950">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <SectionTitle
                                title="Key Features"
                                subtitle={`Everything you need for a modern ${data.industry} platform.`}
                                align="left"
                            />
                            <div className="grid gap-4 mt-8">
                                {data.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800">
                                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                                        <span className="text-lg font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-2xl p-8 h-full flex flex-col justify-center border border-gray-200 dark:border-gray-800">
                            <TrendingUp className="h-12 w-12 text-brand-red mb-6" />
                            <h3 className="text-2xl font-bold mb-4">Impact</h3>
                            <p className="text-xl text-gray-600 dark:text-gray-300 italic">
                                &quot;{data.benefit}&quot;
                            </p>
                            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <Shield className="h-4 w-4" />
                                    <span>Enterprise-grade Security & GDPR Compliance included.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Booking / Contact */}
            <div id="contact">
                <BookingForm />
            </div>

        </div>
    );
}
