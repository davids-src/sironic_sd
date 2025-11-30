'use client';

import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { CheckCircle, Wrench, MapPin, Mail, TruckIcon, Clock, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ServiceSchema } from '@/components/structured-data/ServiceSchema';

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
      <div className="min-h-screen">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <section className="py-16 bg-gradient-to-b from-background to-accent/10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                {t('repairServicePage.hero.title')}
              </h1>
              <p className="text-xl text-brand-red/90 mb-4">
                {t('repairServicePage.hero.subtitle')}
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                {t('repairServicePage.hero.description')}
              </p>
              <Button asChild size="lg" className="bg-brand-red hover:bg-brand-red/90">
                <Link href={`/${locale}/kapcsolat?subject=Szerviz%20és%20javítás`}>
                  {t('repairServicePage.hero.cta')}
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                {t('repairServicePage.services.title')}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t('repairServicePage.services.subtitle')}
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => {
                const icons = [Wrench, Clock, TruckIcon, MapPin, Mail, CheckCircle];
                const Icon = icons[index % icons.length];
                return (
                  <div key={index} className="p-6 bg-background rounded-lg border shadow-sm hover:shadow-md transition-shadow">
                    <Icon className="h-10 w-10 text-brand-red mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-background to-accent/10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                {t('repairServicePage.process.title')}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t('repairServicePage.process.subtitle')}
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-4 max-w-6xl mx-auto">
              {processSteps.map((step: any, index: number) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-red text-white text-2xl font-bold mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-brand-red/10 rounded-lg">
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
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-brand-red/10 rounded-lg">
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
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="p-4 bg-accent/30 rounded-lg border border-accent">
                  <p className="text-sm text-muted-foreground">{t('repairServicePage.postal.howTo')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-background to-accent/10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                {t('repairServicePage.pricing.title')}
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                {t('repairServicePage.pricing.subtitle')}
              </p>
              <p className="text-base text-muted-foreground mb-6">
                {t('repairServicePage.pricing.description')}
              </p>
              <div className="bg-background rounded-lg p-6 border shadow-sm text-left mb-6">
                <ul className="space-y-2">
                  {pricingExamples.map((example, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-red flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-sm text-muted-foreground mb-8">
                {t('repairServicePage.pricing.note')}
              </p>
              <Button asChild size="lg" className="bg-brand-red hover:bg-brand-red/90">
                <Link href={`/${locale}/kapcsolat?subject=Ingyenes%20diagnosztika`}>
                  {t('repairServicePage.pricing.cta')}
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                {t('repairServicePage.faq.title')}
              </h2>
            </div>
            <div className="mx-auto max-w-3xl">
              <div className="bg-background rounded-lg shadow-sm border border-muted overflow-hidden">
                {faqItems.map((item: any, index: number) => (
                  <div key={index} className="border-b border-muted last:border-b-0">
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      className="w-full py-5 px-4 sm:px-6 flex items-start justify-between gap-4 text-left hover:bg-muted/30 transition-colors"
                    >
                      <h3 className="text-base sm:text-lg font-semibold text-foreground pr-4 flex-1">
                        {item.question}
                      </h3>
                      <ChevronDown
                        className={`h-5 w-5 text-brand-red transition-transform ${openFaqIndex === index ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${openFaqIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      <div className="px-4 sm:px-6 pb-5 pt-2">
                        <p className="text-sm sm:text-base text-muted-foreground">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-brand-red text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              {t('repairServicePage.finalCta.title')}
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              {t('repairServicePage.finalCta.description')}
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-brand-red hover:bg-gray-100"
            >
              <Link href={`/${locale}/kapcsolat?subject=Hibabejelentés`}>
                {t('repairServicePage.finalCta.button')}
              </Link>
            </Button>
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
