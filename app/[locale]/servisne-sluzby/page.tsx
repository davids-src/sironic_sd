'use client';

import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { useParams } from 'next/navigation';
import { CheckCircle, Wrench, MapPin, Mail, TruckIcon, Clock, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ServiceSchema } from '@/components/structured-data/ServiceSchema';
import { SectionTitle } from '@/components/SectionTitle';
import { InfoCard } from '@/components/InfoCard';
import { CTAButton } from '@/components/CTAButton';
import { cn } from '@/lib/utils';

export default function RepairServicePage() {
  const { t } = useTranslation();
  const params = useParams();
  const locale = (params?.locale as string) || 'hu';
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const services = t('repairServicePage.services.items', []) as any[];
  const processSteps = t('repairServicePage.process.steps', []) as any[];
  const onsiteBenefits = t('repairServicePage.onsite.benefits', []) as string[];
  const postalBenefits = t('repairServicePage.postal.benefits', []) as string[];
  const pricingExamples = t('repairServicePage.pricing.examples', []) as string[];
  const faqItems = t('repairServicePage.faq.items', []) as any[];

  const breadcrumbItems = [
    { label: t('repairServicePage.breadcrumb.repairService'), href: '' }
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
              {t('repairServicePage.hero.title')}
            </h1>
            <p className="mb-6 text-xl font-medium text-brand-red sm:text-2xl">
              {t('repairServicePage.hero.subtitle')}
            </p>
            <p className="mx-auto mb-10 max-w-3xl text-lg text-gray-600 dark:text-gray-300 sm:text-xl">
              {t('repairServicePage.hero.description')}
            </p>
            <Link href={`/${locale}/kapcsolat?subject=Szerviz%20és%20javítás`}>
              <CTAButton size="lg" className="text-lg px-8 py-6">
                {t('repairServicePage.hero.cta')}
              </CTAButton>
            </Link>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <SectionTitle
              title={t('repairServicePage.services.title')}
              subtitle={t('repairServicePage.services.subtitle')}
            />
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => {
                const icons = [Wrench, Clock, TruckIcon, MapPin, Mail, CheckCircle];
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

        {/* Process Section */}
        <section className="bg-gray-50 py-20 dark:bg-gray-900/50 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <SectionTitle
              title={t('repairServicePage.process.title')}
              subtitle={t('repairServicePage.process.subtitle')}
            />
            <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-4">
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

        {/* Onsite & Postal Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
              {/* Onsite */}
              <div>
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-brand-red dark:bg-red-900/20">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {t('repairServicePage.onsite.title')}
                  </h2>
                </div>
                <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
                  {t('repairServicePage.onsite.description')}
                </p>
                <ul className="space-y-4">
                  {onsiteBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-brand-red" />
                      <span className="text-gray-700 dark:text-gray-200">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Postal */}
              <div>
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-brand-red dark:bg-red-900/20">
                    <Mail className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {t('repairServicePage.postal.title')}
                  </h2>
                </div>
                <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
                  {t('repairServicePage.postal.description')}
                </p>
                <ul className="mb-8 space-y-4">
                  {postalBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-brand-red" />
                      <span className="text-gray-700 dark:text-gray-200">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="rounded-xl border border-gray-100 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900/50">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {t('repairServicePage.postal.howTo')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="bg-gray-50 py-20 dark:bg-gray-900/50 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <SectionTitle
                title={t('repairServicePage.pricing.title')}
                subtitle={t('repairServicePage.pricing.subtitle')}
              />

              <div className="mb-10 rounded-2xl bg-white p-8 shadow-sm dark:bg-gray-900 md:p-10">
                <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
                  {t('repairServicePage.pricing.description')}
                </p>

                <div className="mb-8 rounded-xl bg-gray-50 p-6 text-left dark:bg-gray-800/50">
                  <ul className="space-y-4">
                    {pricingExamples.map((example, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-brand-red" />
                        <span className="font-medium text-gray-900 dark:text-white">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="mb-8 text-sm text-gray-500 dark:text-gray-400">
                  {t('repairServicePage.pricing.note')}
                </p>

                <Link href={`/${locale}/kapcsolat?subject=Ingyenes%20diagnosztika`}>
                  <CTAButton>
                    {t('repairServicePage.pricing.cta')}
                  </CTAButton>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <SectionTitle title={t('repairServicePage.faq.title')} />
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
              {t('repairServicePage.finalCta.title')}
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-xl text-red-100">
              {t('repairServicePage.finalCta.description')}
            </p>
            <Link href={`/${locale}/kapcsolat?subject=Hibabejelentés`}>
              <button className="group inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-lg font-bold text-brand-red shadow-lg transition-all hover:bg-gray-50 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-red">
                {t('repairServicePage.finalCta.button')}
              </button>
            </Link>
          </div>
        </section>
      </div>

      <ServiceSchema
        locale={locale}
        serviceName={t('repairServicePage.hero.title')}
        serviceDescription={t('repairServicePage.hero.description')}
        serviceType="RepairService"
      />
    </>
  );
}
