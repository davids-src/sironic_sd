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

    const [contact, setContact] = useState({
        name: '',
        company: '',
        email: '',
        phone: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const sizeOptions: CompanySize[] = ['1-10', '11-50', '51+'];
    const serviceOptions: ServiceType[] = ['dev', 'ops', 'network', 'mixed'];
    const timelineOptions: Timeline[] = ['standard', 'priority', 'urgent'];

    const handleReset = () => {
        setStep(1);
        setCompanySize(null);
        setServiceType(null);
        setTimeline(null);
        setContact({ name: '', company: '', email: '', phone: '' });
        setIsSuccess(false);
    };

    const trackCalculatorEvent = (eventType: string, data: any) => {
        if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', eventType, data);
        }
    };

    const submitToDiscord = async () => {
        if (!companySize || !serviceType || !timeline) return;
        setIsSubmitting(true);

        try {
            await fetch('/api/calculator', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    companySize,
                    serviceType,
                    timeline,
                    contact
                })
            });
            setIsSuccess(true);
            trackCalculatorEvent('calculator_submit', {
                company_size: companySize,
                service_type: serviceType,
                timeline
            });
        } catch (error) {
            console.error('Failed to submit calculation to Discord', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContact(prev => ({ ...prev, [e.target.name]: e.target.value }));
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
                        {!isSuccess ? (
                            <>
                                {/* Progress Bar */}
                                <div className="mb-8">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                            Step {step} of 4
                                        </span>
                                        <span className="text-sm font-medium text-brand-red">
                                            {Math.round((step / 4) * 100)}%
                                        </span>
                                    </div>
                                    <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-brand-red transition-all duration-300"
                                            style={{ width: `${(step / 4) * 100}%` }}
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
                                        <Button onClick={() => setStep(2)} disabled={!companySize} className="w-full mt-6" size="lg">
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
                                            <Button onClick={() => setStep(1)} variant="outline" size="lg" className="flex-1">
                                                <ArrowLeft className="mr-2 h-4 w-4" /> Back
                                            </Button>
                                            <Button onClick={() => setStep(3)} disabled={!serviceType} size="lg" className="flex-1">
                                                Next <ArrowRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                )}

                                {/* Step 3: Timeline */}
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
                                        <div className="flex gap-4 mt-6">
                                            <Button onClick={() => setStep(2)} variant="outline" size="lg" className="flex-1">
                                                <ArrowLeft className="mr-2 h-4 w-4" /> Back
                                            </Button>
                                            <Button onClick={() => setStep(4)} disabled={!timeline} size="lg" className="flex-1">
                                                Next <ArrowRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                )}

                                {/* Step 4: Contact Form */}
                                {step === 4 && (
                                    <div className="space-y-6">
                                        <div className="text-center mb-8">
                                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                                {t('calculator.contact.title', 'Final Step')}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-300">
                                                {t('calculator.contact.subtitle', 'Enter your details')}
                                            </p>
                                        </div>

                                        <div className="grid gap-4">
                                            <div>
                                                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">{t('calculator.contact.name')}</label>
                                                <input
                                                    name="name"
                                                    type="text"
                                                    required
                                                    value={contact.name}
                                                    onChange={handleContactChange}
                                                    className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">{t('calculator.contact.company')}</label>
                                                <input
                                                    name="company"
                                                    type="text"
                                                    required
                                                    value={contact.company}
                                                    onChange={handleContactChange}
                                                    className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">{t('calculator.contact.email')}</label>
                                                <input
                                                    name="email"
                                                    type="email"
                                                    required
                                                    value={contact.email}
                                                    onChange={handleContactChange}
                                                    className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">{t('calculator.contact.phone')}</label>
                                                <input
                                                    name="phone"
                                                    type="tel"
                                                    required
                                                    value={contact.phone}
                                                    onChange={handleContactChange}
                                                    className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
                                                />
                                            </div>
                                        </div>

                                        <div className="flex gap-4 mt-8">
                                            <Button onClick={() => setStep(3)} variant="outline" size="lg" className="flex-1">
                                                <ArrowLeft className="mr-2 h-4 w-4" /> Back
                                            </Button>
                                            <Button
                                                onClick={submitToDiscord}
                                                disabled={isSubmitting || !contact.name || !contact.email || !contact.company || !contact.phone}
                                                size="lg"
                                                className="flex-1 bg-brand-red hover:bg-red-700 text-white"
                                            >
                                                {isSubmitting ? t('calculator.contact.submitting', 'Sending...') : t('calculator.contact.submit', 'Get Quote')}
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </>
                        ) : (
                            /* Success State */
                            <div className="text-center py-12 space-y-6">
                                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-600 mb-4">
                                    <ShoppingCart className="h-10 w-10" />
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                                    {t('calculator.contact.successTitle', 'Success!')}
                                </h3>
                                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg mx-auto">
                                    {t('calculator.contact.successSubtitle', 'We received your request.')}
                                </p>
                                <Button onClick={handleReset} variant="outline" className="mt-8">
                                    Calculate Another Project
                                </Button>
                            </div>
                        )}
                    </Card>
                </div>
            </div>
        </section>
    );
}
