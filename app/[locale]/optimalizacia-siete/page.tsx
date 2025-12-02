'use client';

import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { useParams } from 'next/navigation';
import { CheckCircle, Wifi, Network, Shield, Server, Activity, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ServiceSchema } from '@/components/structured-data/ServiceSchema';
import { SectionTitle } from '@/components/SectionTitle';
import { InfoCard } from '@/components/InfoCard';
import { CTAButton } from '@/components/CTAButton';
import { cn } from '@/lib/utils';

export default function NetworkOptimizationPage() {
  const { t } = useTranslation();
  const params = useParams();
  const locale = (params?.locale as string) || 'hu';
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const problems = t('networkOptimizationPage.problems.items', []) as string[];
  const services = t('networkOptimizationPage.services.items', []) as any[];
  const technologies = t('networkOptimizationPage.technologies.list', []) as string[];
  const benefits = t('networkOptimizationPage.benefits.list', []) as string[];
  const processSteps = t('networkOptimizationPage.process.steps', []) as any[];
  const useCases = t('networkOptimizationPage.useCases.examples', []) as string[];
  const faqItems = t('networkOptimizationPage.faq.items', []) as any[];

  const breadcrumbItems = [
    { label: t('networkOptimizationPage.breadcrumb.networkOptimization'), href: '' }
  ];

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 py-8 md:px-6">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gray-50 py-20 dark:bg-gray-900/50 lg:py-32">
          <div className="container relative z-10 mx-auto px-4 text-center md:px-6">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              {t('networkOptimizationPage.hero.title')}
            </h1>
            <p className="mb-6 text-xl font-medium text-brand-red sm:text-2xl">
              {t('networkOptimizationPage.hero.subtitle')}
            </p>
            <p className="mx-auto mb-10 max-w-3xl text-lg text-gray-600 dark:text-gray-300 sm:text-xl">
              {t('networkOptimizationPage.hero.description')}
            </p>
            <Link href={`/${locale}/kapcsolat?subject=Hálózatfejlesztés`}>
              <CTAButton size="lg" className="text-lg px-8 py-6">
                {t('networkOptimizationPage.hero.cta')}
              </CTAButton>
            </Link>
          </div>
        </section>

        {/* Problems Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <SectionTitle
              title={t('networkOptimizationPage.problems.title')}
              subtitle={t('networkOptimizationPage.problems.subtitle')}
            />
            <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
                >
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-50 text-brand-red dark:bg-red-900/20">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <p className="font-medium text-gray-700 dark:text-gray-200">{problem}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-gray-50 py-20 dark:bg-gray-900/50 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <SectionTitle
              title={t('networkOptimizationPage.services.title')}
              subtitle={t('networkOptimizationPage.services.subtitle')}
            />
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => {
                const icons = [Wifi, Network, Shield, Server, Activity, Shield, Server];
                const Icon = icons[index % icons.length];
                return (
                  <InfoCard
                    key={index}
                    title={service.title}
                    description={service.description}
                    icon={Icon}
                  />
                );
              })}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <SectionTitle
              title={t('networkOptimizationPage.technologies.title')}
              subtitle={t('networkOptimizationPage.technologies.subtitle')}
            />
            <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-lg bg-gray-50 px-5 py-4 dark:bg-gray-900/50"
                >
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-brand-red" />
                  <p className="font-medium text-gray-900 dark:text-white">{tech}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-gray-50 py-20 dark:bg-gray-900/50 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <SectionTitle
              title={t('networkOptimizationPage.benefits.title')}
              subtitle={t('networkOptimizationPage.benefits.subtitle')}
            />
            <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-200">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <SectionTitle
              title={t('networkOptimizationPage.process.title')}
              subtitle={t('networkOptimizationPage.process.subtitle')}
            />
            <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-5">
              {processSteps.map((step: any, index: number) => (
                <div key={index} className="relative flex flex-col items-center text-center">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-red text-2xl font-bold text-white shadow-lg shadow-red-200 dark:shadow-none">
                    {step.number}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                  {index < processSteps.length - 1 && (
                    <div className="absolute top-8 -right-1/2 hidden h-0.5 w-full bg-gray-200 dark:bg-gray-800 md:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="bg-gray-50 py-20 dark:bg-gray-900/50 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <SectionTitle
              title={t('networkOptimizationPage.useCases.title')}
              subtitle={t('networkOptimizationPage.useCases.subtitle')}
            />
            <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 rounded-xl bg-white p-6 shadow-sm dark:bg-gray-900"
                >
                  <div className="h-2 w-2 rounded-full bg-brand-red" />
                  <p className="font-medium text-gray-900 dark:text-white">{useCase}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <SectionTitle
                title={t('networkOptimizationPage.pricing.title')}
                subtitle={t('networkOptimizationPage.pricing.subtitle')}
              />
              <div className="rounded-2xl bg-gray-50 p-8 dark:bg-gray-900/50 md:p-12">
                <p className="mb-6 text-lg text-gray-600 dark:text-gray-300">
                  {t('networkOptimizationPage.pricing.description')}
                </p>
                <p className="mb-8 font-medium text-gray-900 dark:text-white">
                  {t('networkOptimizationPage.pricing.process')}
                </p>
                <Link href={`/${locale}/kapcsolat?subject=Hálózatfejlesztés`}>
                  <CTAButton>
                    {t('networkOptimizationPage.pricing.cta')}
                  </CTAButton>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gray-50 py-20 dark:bg-gray-900/50 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <SectionTitle title={t('networkOptimizationPage.faq.title')} />
            <div className="mx-auto max-w-3xl space-y-4">
              {faqItems.map((item: any, index: number) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900"
                >
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/50"
                  >
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        'h-5 w-5 text-gray-500 transition-transform duration-200',
                        openFaqIndex === index && 'rotate-180 text-brand-red'
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      'grid transition-all duration-200 ease-in-out',
                      openFaqIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 pt-0 text-gray-600 dark:text-gray-300">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-brand-red py-20 text-white lg:py-32">
          <div className="container mx-auto px-4 text-center md:px-6">
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {t('networkOptimizationPage.finalCta.title')}
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-xl text-red-100">
              {t('networkOptimizationPage.finalCta.description')}
            </p>
            <Link href={`/${locale}/kapcsolat?subject=Hálózatfejlesztés`}>
              <button className="group inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-lg font-bold text-brand-red shadow-lg transition-all hover:bg-gray-50 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-red">
                {t('networkOptimizationPage.finalCta.button')}
              </button>
            </Link>
          </div>
        </section>
      </div>

      <ServiceSchema
        locale={locale}
        serviceName={t('networkOptimizationPage.hero.title')}
        serviceDescription={t('networkOptimizationPage.hero.description')}
        serviceType="NetworkOptimization"
      />
    </>
  );
}
