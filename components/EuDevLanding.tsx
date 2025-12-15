'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { SectionTitle } from '@/components/SectionTitle';
import { CTAButton } from '@/components/CTAButton';
import { CheckCircle, ArrowRight, Code, Zap, Shield, Clock } from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useParams } from 'next/navigation';
import { Locale } from '@/i18n';
import { getLocalizedPath } from '@/lib/routes';

// Dynamic imports
const PortfolioPreview = dynamic(() => import('@/components/PortfolioPreview').then(mod => ({ default: mod.PortfolioPreview })));
const CaseStudiesPreview = dynamic(() => import('@/components/CaseStudiesPreview').then(mod => ({ default: mod.CaseStudiesPreview })));
const ProcessAndSLA = dynamic(() => import('@/components/ProcessAndSLA').then(mod => ({ default: mod.ProcessAndSLA })));
const QuickQuoteCalculator = dynamic(() => import('@/components/QuickQuoteCalculator').then(mod => ({ default: mod.QuickQuoteCalculator })));
const EuPresenceVisual = dynamic(() => import('@/components/EuPresenceVisual').then(mod => ({ default: mod.EuPresenceVisual })));

export function EuDevLanding() {
    const { t } = useTranslation();
    const params = useParams();
    const locale = (params?.locale as Locale) || 'en';

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950">

            {/* Hero Section */}
            <section className="relative py-24 lg:py-32 overflow-hidden bg-gray-900 text-white">
                {/* Abstract Background */}
                <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10" />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-red/10 to-transparent" />

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/20 text-brand-red text-sm font-semibold mb-6 border border-brand-red/20">
                            <Zap className="h-4 w-4" />
                            <span>Top 1% EU Tech Talent</span>
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                            {t('euDevLanding.hero.title', 'Scale Your Tech Team with EU Remote Engineering')}
                        </h1>

                        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                            {t('euDevLanding.hero.subtitle', 'Fully managed software development teams aligned with your timezone, culture, and quality standards.')}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <CTAButton asChild size="lg" className="text-lg px-8 py-6 h-auto bg-brand-red hover:bg-red-700 border-none">
                                <Link href={`/${locale}/book`}>
                                    {t('euDevLanding.hero.cta', 'Book Discovery Call')}
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </CTAButton>
                            <Link href="#portfolio" className="inline-flex items-center justify-center px-8 py-6 text-lg font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                                {t('euDevLanding.hero.secondaryCta', 'View Portfolio')}
                            </Link>
                        </div>

                        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm text-gray-400">
                            <div className="flex items-center justify-center gap-2">
                                <Clock className="h-4 w-4 text-brand-red" />
                                <span>Same Timezone</span>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <Shield className="h-4 w-4 text-brand-red" />
                                <span>GDPR Compliant</span>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <Code className="h-4 w-4 text-brand-red" />
                                <span>Senior Engineers</span>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <CheckCircle className="h-4 w-4 text-brand-red" />
                                <span>Agile Process</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visual Presence */}
            <EuPresenceVisual />

            {/* Portfolio Showcase */}
            <div id="portfolio">
                <PortfolioPreview />
            </div>

            {/* Case Studies */}
            <CaseStudiesPreview />

            {/* Process & SLA */}
            <ProcessAndSLA />

            {/* Calculator */}
            <QuickQuoteCalculator />

            {/* Final CTA */}
            <section className="py-24 bg-brand-red text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                        {t('euDevLanding.cta.title', 'Ready to Build?')}
                    </h2>
                    <p className="text-xl mb-8 text-white/90">
                        {t('euDevLanding.cta.subtitle', 'Get a dedicated team up and running in less than 2 weeks.')}
                    </p>
                    <CTAButton asChild size="lg" className="bg-white text-brand-red hover:bg-gray-100 border-none text-lg px-10 py-6 h-auto">
                        <Link href={`/${locale}/book`}>
                            Start Your Project
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </CTAButton>
                </div>
            </section>

        </div>
    );
}
