'use client';

import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Button } from '@/components/ui/button';
import { CTAButton } from '@/components/CTAButton';
import { Card } from '@/components/ui/card';
import { ArrowRight, ArrowLeft, Users, Briefcase, Calendar, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Locale } from '@/i18n';
import { getLocalizedPath } from '@/lib/routes';

type CompanySize = '1-10' | '11-50' | '51+';
type ServiceType = 'dev' | 'ops' | 'network' | 'mixed';
type Timeline = 'standard' | 'priority' | 'urgent';

export function QuickQuoteCalculator() {
    const { t } = useTranslation();
    const params = useParams();
    const locale = (params?.locale as string) || 'hu';

    const [step, setStep] = useState(1);
    const [companySize, setCompanySize] = useState<CompanySize | null>(null);
    const [serviceType, setServiceType] = useState<ServiceType | null>(null);
    const [timeline, setTimeline] = useState<Timeline | null>(null);

    const sizeOptions: CompanySize[] = ['1-10', '11-50', '51+'];
    const serviceOptions: ServiceType[] = ['dev', 'ops', 'network', 'mixed'];
    const timelineOptions: Timeline[] = ['standard', 'priority', 'urgent'];

    const getEstimate = (): string => {
        if (!companySize || !serviceType) return '';

        // Build the key for the estimate
        const key = `calculator.result.range${companySize.replace('+', '')}_${serviceType}`;
        return t(key, '');
    };

    const handleReset = () => {
        setStep(1);
        setCompanySize(null);
        setServiceType(null);
        setTimeline(null);
    };

    const trackCalculatorEvent = (eventType: string, data: any) => {
        // Analytics tracking
        if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', eventType, data);
        }
    };

    const submitToDiscord = async (selectedTimeline: Timeline) => {
        if (!companySize || !serviceType) return;

        // Reconstruct estimate logic since we can't rely on state update yet
        const key = `calculator.result.range${companySize.replace('+', '')}_${serviceType}`;
        const estimate = t(key, 'N/A');

        try {
            await fetch('/api/calculator', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    companySize,
                    serviceType,
                    timeline: selectedTimeline,
                    estimate
                })
            });
        } catch (error) {
            console.error('Failed to submit calculation to Discord', error);
        }
    };

    return (
        <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <ShoppingCart className="h-8 w-8 text-brand-red" />
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            {t('calculator.title')}
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            {t('calculator.subtitle')}
                        </p>
                    </div>

                    {/* Calculator Card */}
                    <Card className="p-8 shadow-xl">
                        {/* Progress Bar */}
                        <div className="mb-8">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                    Step {step} of 3
                                </span>
                                <span className="text-sm font-medium text-brand-red">
                                    {Math.round((step / 3) * 100)}%
                                </span>
                            </div>
                            <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-brand-red transition-all duration-300"
                                    style={{ width: `${(step / 3) * 100}%` }}
                                />
                            </div>
                        </div>

                        {/* Step 1: Company Size */}
                        {step === 1 && (
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <Users className="h-6 w-6 text-brand-red" />
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                        {t('calculator.step1.title')}
                                    </h3>
                                </div>

                                <div className="grid gap-4">
                                    {sizeOptions.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => {
                                                setCompanySize(size);
                                                trackCalculatorEvent('calculator_step', { step: 1, company_size: size });
                                            }}
                                            className={`p-4 rounded-xl border-2 text-left transition-all duration-200 ${companySize === size
                                                ? 'border-brand-red bg-red-50 dark:bg-red-900/20'
                                                : 'border-gray-200 dark:border-gray-800 hover:border-brand-red/50'
                                                }`}
                                        >
                                            <span className="font-medium text-gray-900 dark:text-white">
                                                {t(`calculator.step1.options.${sizeOptions.indexOf(size)}`)}
                                            </span>
                                        </button>
                                    ))}
                                </div>

                                <Button
                                    onClick={() => setStep(2)}
                                    disabled={!companySize}
                                    className="w-full mt-6"
                                    size="lg"
                                >
                                    Next <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        )}

                        {/* Step 2: Service Type */}
                        {step === 2 && (
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <Briefcase className="h-6 w-6 text-brand-red" />
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                        {t('calculator.step2.title')}
                                    </h3>
                                </div>

                                <div className="grid gap-4">
                                    {serviceOptions.map((service) => (
                                        <button
                                            key={service}
                                            onClick={() => {
                                                setServiceType(service);
                                                trackCalculatorEvent('calculator_step', { step: 2, service_type: service });
                                            }}
                                            className={`p-4 rounded-xl border-2 text-left transition-all duration-200 ${serviceType === service
                                                ? 'border-brand-red bg-red-50 dark:bg-red-900/20'
                                                : 'border-gray-200 dark:border-gray-800 hover:border-brand-red/50'
                                                }`}
                                        >
                                            <span className="font-medium text-gray-900 dark:text-white">
                                                {t(`calculator.step2.options.${serviceOptions.indexOf(service)}`)}
                                            </span>
                                        </button>
                                    ))}
                                </div>

                                <div className="flex gap-4 mt-6">
                                    <Button
                                        onClick={() => setStep(1)}
                                        variant="outline"
                                        size="lg"
                                        className="flex-1"
                                    >
                                        <ArrowLeft className="mr-2 h-4 w-4" /> Back
                                    </Button>
                                    <Button
                                        onClick={() => setStep(3)}
                                        disabled={!serviceType}
                                        size="lg"
                                        className="flex-1"
                                    >
                                        Next <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        )}

                        {/* Step 3: Timeline + Result */}
                        {step === 3 && (
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <Calendar className="h-6 w-6 text-brand-red" />
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                        {t('calculator.step3.title')}
                                    </h3>
                                </div>

                                <div className="grid gap-4">
                                    {timelineOptions.map((time) => (
                                        <button
                                            key={time}
                                            onClick={() => {
                                                setTimeline(time);
                                                trackCalculatorEvent('calculator_step', { step: 3, timeline: time });
                                                submitToDiscord(time);
                                            }}
                                            className={`p-4 rounded-xl border-2 text-left transition-all duration-200 ${timeline === time
                                                ? 'border-brand-red bg-red-50 dark:bg-red-900/20'
                                                : 'border-gray-200 dark:border-gray-800 hover:border-brand-red/50'
                                                }`}
                                        >
                                            <span className="font-medium text-gray-900 dark:text-white">
                                                {t(`calculator.step3.options.${timelineOptions.indexOf(time)}`)}
                                            </span>
                                        </button>
                                    ))}
                                </div>

                                {timeline && (
                                    <>
                                        {/* Result */}
                                        <div className="mt-8 p-6 bg-gradient-to-br from-brand-red/10 to-red-100/50 dark:from-brand-red/20 dark:to-red-900/20 rounded-xl border-2 border-brand-red">
                                            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                                                {t('calculator.result.title')}
                                            </h4>
                                            <p className="text-2xl font-bold text-brand-red mb-4">
                                                {getEstimate()}
                                            </p>
                                            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                                {t('calculator.result.disclaimer')}
                                            </p>
                                        </div>

                                        {/* CTAs */}
                                        <div className="flex flex-col sm:flex-row gap-4 mt-6">
                                            <CTAButton
                                                asChild
                                                size="lg"
                                                className="flex-1"
                                                onClick={() => trackCalculatorEvent('calculator_submit', { company_size: companySize, service_type: serviceType, timeline })}
                                            >
                                                <Link href={`/${locale}/${getLocalizedPath('contact', locale as Locale)}`}>
                                                    {t('calculator.result.cta')}
                                                </Link>
                                            </CTAButton>
                                            <Button
                                                onClick={handleReset}
                                                variant="outline"
                                                size="lg"
                                                className="flex-1"
                                            >
                                                Start Over
                                            </Button>
                                        </div>
                                    </>
                                )}

                                {!timeline && (
                                    <Button
                                        onClick={() => setStep(2)}
                                        variant="outline"
                                        size="lg"
                                        className="w-full mt-6"
                                    >
                                        <ArrowLeft className="mr-2 h-4 w-4" /> Back
                                    </Button>
                                )}
                            </div>
                        )}
                    </Card>
                </div>
            </div>
        </section>
    );
}
