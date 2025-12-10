'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useParams } from 'next/navigation';
import { SectionTitle } from '@/components/SectionTitle';
import { InfoCard } from '@/components/InfoCard';
import { CTAButton } from '@/components/CTAButton';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Wifi, Network, Shield, Server, Activity, ChevronDown, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ServiceSchema, LocalServiceSchema, FAQSchema } from '@/components/ServiceSchemas';

export default function NetworkOptimizationPage() {
  const { t } = useTranslation();
  const params = useParams();
  const locale = (params?.locale as string) || 'hu';

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
        <div className="container mx-auto px-4 py-8 md:px-6">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <section className="relative py-20 lg:py-32 bg-gradient-to-br from-brand-red/10 via-background to-background">
          <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
                {t('networkOptimizationPage.hero.title')}
              </h1>
              <p className="text-xl text-brand-red font-medium mb-4">
                {t('networkOptimizationPage.hero.subtitle')}
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                {t('networkOptimizationPage.hero.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={`/${locale}/kapcsolat?subject=Hálózatfejlesztés`}>
                  <CTAButton size="lg" className="text-lg px-8 py-6">
                    {t('networkOptimizationPage.hero.cta')}
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
              title={t('networkOptimizationPage.problems.title')}
              subtitle={t('networkOptimizationPage.problems.subtitle')}
            />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              {problems.map((problem, index) => (
                <div key={index} className="flex gap-3 items-start p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-brand-red flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">{problem}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
          <div className="container mx-auto px-4 md:px-6">
            <SectionTitle
              title={t('networkOptimizationPage.services.title')}
              subtitle={t('networkOptimizationPage.services.subtitle')}
            />
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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

        <section className="py-20 lg:py-32 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4 md:px-6">
            <SectionTitle
              title={t('networkOptimizationPage.technologies.title')}
              subtitle={t('networkOptimizationPage.technologies.subtitle')}
            />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              {technologies.map((tech, index) => (
                <div key={index} className="flex gap-3 items-start p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-brand-red flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">{tech}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
          <div className="container mx-auto px-4 md:px-6">
            <SectionTitle
              title={t('networkOptimizationPage.benefits.title')}
              subtitle={t('networkOptimizationPage.benefits.subtitle')}
            />
            <div className="grid gap-4 md:grid-cols-2 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-3 items-start p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                  <CheckCircle className="h-6 w-6 text-brand-red flex-shrink-0 mt-1" />
                  <p className="text-base text-gray-700 dark:text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-32 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4 md:px-6">
            <SectionTitle
              title={t('networkOptimizationPage.process.title')}
              subtitle={t('networkOptimizationPage.process.subtitle')}
            />
            <div className="grid gap-8 md:grid-cols-5 max-w-6xl mx-auto">
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

        <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
          <div className="container mx-auto px-4 md:px-6">
            <SectionTitle
              title={t('networkOptimizationPage.useCases.title')}
              subtitle={t('networkOptimizationPage.useCases.subtitle')}
            />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              {useCases.map((useCase, index) => (
                <div key={index} className="flex gap-3 items-start p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                  <CheckCircle className="h-5 w-5 text-brand-red flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">{useCase}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-32 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <SectionTitle
                title={t('networkOptimizationPage.pricing.title')}
                subtitle={t('networkOptimizationPage.pricing.subtitle')}
              />
              <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-800">
                <p className="text-base text-muted-foreground mb-6">
                  {t('networkOptimizationPage.pricing.description')}
                </p>
                <p className="text-base text-muted-foreground mb-8">
                  {t('networkOptimizationPage.pricing.process')}
                </p>
                <Link href={`/${locale}/kapcsolat?subject=Hálózatfejlesztés`}>
                  <CTAButton size="lg">
                    {t('networkOptimizationPage.pricing.cta')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </CTAButton>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
          <div className="container mx-auto px-4 md:px-6">
            <SectionTitle title={t('networkOptimizationPage.faq.title')} />
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
              {t('networkOptimizationPage.finalCta.title')}
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              {t('networkOptimizationPage.finalCta.description')}
            </p>
            <Link href={`/${locale}/kapcsolat?subject=Hálózatfejlesztés`}>
              <CTAButton
                size="lg"
                className="bg-white text-brand-red hover:bg-gray-100 border-none"
              >
                {t('networkOptimizationPage.finalCta.button')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </CTAButton>
            </Link>
          </div>
        </section>
      </div>

      {/* Structured Data */}
      {locale === 'hu' ? (
        <LocalServiceSchema
          serviceName={t('networkOptimizationPage.hero.title')}
          serviceDescription={t('networkOptimizationPage.hero.description')}
          url={`/${locale}/halozat-fejlesztes`}
        />
      ) : (
        <ServiceSchema
          serviceType="Network Infrastructure"
          serviceName={t('networkOptimizationPage.hero.title')}
          description={t('networkOptimizationPage.hero.description')}
          areaServed="EU"
          locale={locale}
          url={`/${locale}/network-optimization`}
        />
      )}
      <FAQSchema
        faqs={faqItems.map((item: any) => ({ question: item.question, answer: item.answer }))}
        url={`/${locale}/halozat-fejlesztes`}
      />
    </>
  );
}
