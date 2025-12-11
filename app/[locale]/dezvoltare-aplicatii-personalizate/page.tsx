'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useParams } from 'next/navigation';
import { SectionTitle } from '@/components/SectionTitle';
import { InfoCard } from '@/components/InfoCard';
import { CTAButton } from '@/components/CTAButton';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Code2, Smartphone, MonitorSmartphone, Zap, Shield, Users, MessageSquare, TrendingUp, Scale, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { FAQSchema } from '@/components/structured-data/FAQSchema';
import { BreadcrumbSchema } from '@/components/structured-data/BreadcrumbSchema';

export default function CustomDevelopmentPage() {
  const { t } = useTranslation();
  const params = useParams();
  const locale = (params?.locale as string) || 'hu';
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sironic.eu';

  const whatWeDoIcons = [Code2, Code2, MonitorSmartphone, Smartphone];
  const whyChooseUsIcons = [Users, Zap, TrendingUp, MessageSquare, Shield, Scale];

  // Prepare FAQs for schema
  const faqs = t('customDevelopmentPage.faq.items', []).map((item: any) => ({
    question: item.question,
    answer: item.answer
  }));

  // Prepare breadcrumbs for schema
  const breadcrumbs = [
    { name: t('customDevelopmentPage.breadcrumb.home'), url: `${baseUrl}/${locale}` },
    { name: t('customDevelopmentPage.breadcrumb.customDevelopment'), url: `${baseUrl}/${locale}/dezvoltare-aplicatii-personalizate` }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              {t('customDevelopmentPage.hero.title')}
            </h1>
            <p className="text-xl text-brand-red font-medium mb-4">
              {t('customDevelopmentPage.hero.subtitle')}
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              {t('customDevelopmentPage.hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/kapcsolat`}>
                <CTAButton size="lg" className="text-lg px-8 py-6">
                  {t('customDevelopmentPage.hero.cta')}
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
            title={t('customDevelopmentPage.what.title')}
            subtitle={t('customDevelopmentPage.what.subtitle')}
          />
          <div className="grid gap-8 md:grid-cols-2">
            {t('customDevelopmentPage.what.items', []).map((item: any, index: number) => {
              const Icon = whatWeDoIcons[index] || Code2;
              return (
                <InfoCard
                  key={index}
                  title={item.title}
                  description={item.description}
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
            title={t('customDevelopmentPage.whyChoose.title')}
            subtitle={t('customDevelopmentPage.whyChoose.subtitle')}
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {t('customDevelopmentPage.whyChoose.reasons', []).map((reason: any, index: number) => {
              const Icon = whyChooseUsIcons[index] || CheckCircle;
              return (
                <InfoCard
                  key={index}
                  title={reason.title}
                  description={reason.description}
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
            title={t('customDevelopmentPage.technologies.title')}
            subtitle={t('customDevelopmentPage.technologies.subtitle')}
          />
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-4 md:grid-cols-2">
              {t('customDevelopmentPage.technologies.list', []).map((tech: string, index: number) => (
                <div key={index} className="flex gap-3 items-start p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-brand-red flex-shrink-0 mt-0.5" />
                  <span className="text-base">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title={t('customDevelopmentPage.process.title')}
            subtitle={t('customDevelopmentPage.process.subtitle')}
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {t('customDevelopmentPage.process.steps', []).map((step: any, index: number) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-red text-white text-2xl font-bold mb-4 shadow-lg shadow-red-200 dark:shadow-none group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title={t('customDevelopmentPage.useCases.title')}
            subtitle={t('customDevelopmentPage.useCases.subtitle')}
          />
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-4 md:grid-cols-2">
              {t('customDevelopmentPage.useCases.examples', []).map((example: string, index: number) => (
                <div key={index} className="flex gap-3 items-start p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <CheckCircle className="h-5 w-5 text-brand-red flex-shrink-0 mt-0.5" />
                  <span className="text-base">{example}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <SectionTitle
              title={t('customDevelopmentPage.pricing.title')}
              subtitle={t('customDevelopmentPage.pricing.subtitle')}
            />
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-800">
              <p className="text-base text-muted-foreground mb-6">
                {t('customDevelopmentPage.pricing.description')}
              </p>
              <p className="text-base text-muted-foreground mb-8">
                {t('customDevelopmentPage.pricing.process')}
              </p>
              <Link href={`/${locale}/kapcsolat`}>
                <CTAButton size="lg">
                  {t('customDevelopmentPage.pricing.cta')}
                </CTAButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle title={t('customDevelopmentPage.faq.title')} />
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {t('customDevelopmentPage.faq.items', []).map((item: any, index: number) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 dark:border-gray-800 rounded-lg px-6">
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

      <section className="py-20 lg:py-32 bg-brand-red text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {t('customDevelopmentPage.finalCta.title')}
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            {t('customDevelopmentPage.finalCta.description')}
          </p>
          <Link href={`/${locale}/kapcsolat`}>
            <button className="bg-white text-brand-red hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg">
              {t('customDevelopmentPage.finalCta.button')}
            </button>
          </Link>
        </div>
      </section>

      {/* Structured Data */}
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbs} />
    </div>
  );
}
