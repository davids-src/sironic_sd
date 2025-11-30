'use client';

import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { CheckCircle, Wifi, Network, Shield, Server, Activity, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ServiceSchema } from '@/components/structured-data/ServiceSchema';

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
      <div className="min-h-screen">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <section className="py-16 bg-gradient-to-b from-background to-accent/10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                {t('networkOptimizationPage.hero.title')}
              </h1>
              <p className="text-xl text-brand-red/90 mb-4">
                {t('networkOptimizationPage.hero.subtitle')}
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                {t('networkOptimizationPage.hero.description')}
              </p>
              <Button asChild size="lg" className="bg-brand-red hover:bg-brand-red/90">
                <Link href={`/${locale}/kapcsolat?subject=Hálózatfejlesztés`}>
                  {t('networkOptimizationPage.hero.cta')}
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                {t('networkOptimizationPage.problems.title')}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t('networkOptimizationPage.problems.subtitle')}
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              {problems.map((problem, index) => (
                <div key={index} className="flex gap-3 items-start p-4 bg-accent/30 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-brand-red flex-shrink-0 mt-0.5" />
                  <p className="text-sm">{problem}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-background to-accent/10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                {t('networkOptimizationPage.services.title')}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t('networkOptimizationPage.services.subtitle')}
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => {
                const icons = [Wifi, Network, Shield, Server, Activity, Shield, Server];
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

        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                {t('networkOptimizationPage.technologies.title')}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t('networkOptimizationPage.technologies.subtitle')}
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              {technologies.map((tech, index) => (
                <div key={index} className="flex gap-3 items-start p-4 bg-accent/30 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-brand-red flex-shrink-0 mt-0.5" />
                  <p className="text-sm">{tech}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-background to-accent/10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                {t('networkOptimizationPage.benefits.title')}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t('networkOptimizationPage.benefits.subtitle')}
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-3 items-start p-6 bg-background rounded-lg border">
                  <CheckCircle className="h-6 w-6 text-brand-red flex-shrink-0 mt-1" />
                  <p className="text-base">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                {t('networkOptimizationPage.process.title')}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t('networkOptimizationPage.process.subtitle')}
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-5 max-w-6xl mx-auto">
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

        <section className="py-24 bg-gradient-to-b from-background to-accent/10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                {t('networkOptimizationPage.useCases.title')}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t('networkOptimizationPage.useCases.subtitle')}
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              {useCases.map((useCase, index) => (
                <div key={index} className="flex gap-3 items-start p-4 bg-background rounded-lg border">
                  <CheckCircle className="h-5 w-5 text-brand-red flex-shrink-0 mt-0.5" />
                  <p className="text-sm">{useCase}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                {t('networkOptimizationPage.pricing.title')}
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                {t('networkOptimizationPage.pricing.subtitle')}
              </p>
              <p className="text-base text-muted-foreground mb-6">
                {t('networkOptimizationPage.pricing.description')}
              </p>
              <p className="text-base text-muted-foreground mb-8">
                {t('networkOptimizationPage.pricing.process')}
              </p>
              <Button asChild size="lg" className="bg-brand-red hover:bg-brand-red/90">
                <Link href={`/${locale}/kapcsolat?subject=Hálózatfejlesztés`}>
                  {t('networkOptimizationPage.pricing.cta')}
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-background to-accent/10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                {t('networkOptimizationPage.faq.title')}
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
              {t('networkOptimizationPage.finalCta.title')}
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              {t('networkOptimizationPage.finalCta.description')}
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-brand-red hover:bg-gray-100"
            >
              <Link href={`/${locale}/kapcsolat?subject=Hálózatfejlesztés`}>
                {t('networkOptimizationPage.finalCta.button')}
              </Link>
            </Button>
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
