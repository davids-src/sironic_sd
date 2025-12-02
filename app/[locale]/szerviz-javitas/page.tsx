'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useParams } from 'next/navigation';
import { SectionTitle } from '@/components/SectionTitle';
import { InfoCard } from '@/components/InfoCard';
import { CTAButton } from '@/components/CTAButton';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Wrench, MapPin, Mail, TruckIcon, Clock, ChevronDown, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ServiceSchema } from '@/components/structured-data/ServiceSchema';

export default function RepairServicePage() {
  const { t } = useTranslation();
  const params = useParams();
  const locale = (params?.locale as string) || 'hu';

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
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-8 md:px-6">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <section className="relative py-20 lg:py-32 bg-gradient-to-br from-brand-red/10 via-background to-background">
          <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
                {t('repairServicePage.hero.title')}
              </h1>
              <p className="text-xl text-brand-red font-medium mb-4">
                {t('repairServicePage.hero.subtitle')}
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                {t('repairServicePage.hero.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={`/${locale}/kapcsolat?subject=Szerviz%20és%20javítás`}>
                  <CTAButton size="lg" className="text-lg px-8 py-6">
                    {t('repairServicePage.hero.cta')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </CTAButton>
                </Link>
              </div>
              <div className="mt-12 flex justify-center">
                <ChevronDown className="h-8 w-8 text-muted-foreground animate-bounce" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-32 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4 md:px-6">
            <SectionTitle
              title={t('repairServicePage.services.title')}
              subtitle={t('repairServicePage.services.subtitle')}
            />
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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

        <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
          <div className="container mx-auto px-4 md:px-6">
            <SectionTitle
              title={t('repairServicePage.process.title')}
              subtitle={t('repairServicePage.process.subtitle')}
            />
            <div className="grid gap-8 md:grid-cols-4 max-w-6xl mx-auto">
              {processSteps.map((step: any, index: number) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-red text-white text-2xl font-bold mb-4 shadow-lg shadow-red-200 dark:shadow-none group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-32 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                    <MapPin className="h-8 w-8 text-brand-red" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight">
                    {t('repairServicePage.onsite.title')}
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  {t('repairServicePage.onsite.description')}
                </p>
                <ul className="space-y-3">
                  {onsiteBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-red flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                    <Mail className="h-8 w-8 text-brand-red" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight">
                    {t('repairServicePage.postal.title')}
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  {t('repairServicePage.postal.description')}
                </p>
                <ul className="space-y-3 mb-6">
                  {postalBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-red flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800">
                  <p className="text-sm text-muted-foreground">{t('repairServicePage.postal.howTo')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <SectionTitle
                title={t('repairServicePage.pricing.title')}
                subtitle={t('repairServicePage.pricing.subtitle')}
              />
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-800">
                <p className="text-base text-muted-foreground mb-6">
                  {t('repairServicePage.pricing.description')}
                </p>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-left mb-6">
                  <ul className="space-y-2">
                    {pricingExamples.map((example, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-brand-red flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm text-muted-foreground mb-8">
                  {t('repairServicePage.pricing.note')}
                </p>
                <Link href={`/${locale}/kapcsolat?subject=Ingyenes%20diagnosztika`}>
                  <CTAButton size="lg">
                    {t('repairServicePage.pricing.cta')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </CTAButton>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-32 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4 md:px-6">
            <SectionTitle title={t('repairServicePage.faq.title')} />
            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqItems.map((item: any, index: number) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 dark:border-gray-800 rounded-lg px-6 bg-white dark:bg-gray-800">
                    <AccordionTrigger className="text-left text-lg font-semibold hover:text-brand-red transition-colors py-4">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground pb-4">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-32 bg-gradient-to-br from-brand-red via-brand-red/95 to-brand-red/90 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] pointer-events-none" />
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              {t('repairServicePage.finalCta.title')}
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              {t('repairServicePage.finalCta.description')}
            </p>
            <Link href={`/${locale}/kapcsolat?subject=Hibabejelentés`}>
              <CTAButton
                size="lg"
                className="bg-white text-brand-red hover:bg-gray-100 border-none"
              >
                {t('repairServicePage.finalCta.button')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </CTAButton>
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
