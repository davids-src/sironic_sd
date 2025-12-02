'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import {
  CheckCircle, GraduationCap, Shield, Monitor, Users, Target, Zap, TrendingUp,
  BookOpen, Video, Home, ChevronDown, Info, Sparkles, ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import { FAQSchema } from '@/components/structured-data/FAQSchema';
import { BreadcrumbSchema } from '@/components/structured-data/BreadcrumbSchema';

export default function ItTrainingPage() {
  const { t } = useTranslation();
  const params = useParams();
  const locale = (params?.locale as string) || 'hu';
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sironic.hu';

  const serviceIcons = [GraduationCap, Shield, Monitor, Users];
  const benefitIcons = [Zap, Target, Shield, TrendingUp, Users, Zap, TrendingUp];
  const targetGroupIcons = [Users, Target, BookOpen, Home, GraduationCap];
  const deliveryIcons = [Home, Video, Zap];

  // Prepare FAQs for schema
  const faqs = t('itTrainingPage.faq.items', []).map((item: any) => ({
    question: item.question,
    answer: item.answer
  }));

  // Prepare breadcrumbs for schema
  const breadcrumbs = [
    { name: t('itTrainingPage.breadcrumb.home'), url: `${baseUrl}/${locale}` },
    { name: t('itTrainingPage.breadcrumb.training'), url: `${baseUrl}/${locale}/oktatas` }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Enhanced */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-brand-red/10 via-background to-background overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl" aria-hidden="true" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            {/* Breadcrumb */}
            <nav className="flex justify-center mb-8" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-2 text-sm text-muted-foreground">
                <li>
                  <Link href={`/${locale}`} className="hover:text-brand-red transition-colors">
                    {t('itTrainingPage.breadcrumb.home')}
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-foreground font-medium">{t('itTrainingPage.breadcrumb.training')}</li>
              </ol>
            </nav>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 animate-fade-in">
              {t('itTrainingPage.hero.title')}
            </h1>
            <p className="text-xl sm:text-2xl text-brand-red/90 font-medium mb-4 animate-fade-in">
              {t('itTrainingPage.hero.subtitle')}
            </p>
            <p className="text-base sm:text-lg text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto animate-fade-in">
              {t('itTrainingPage.hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
              <Button asChild size="lg" className="bg-brand-red hover:bg-brand-red/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <Link href={`/${locale}/kapcsolat`}>
                  {t('itTrainingPage.hero.cta')}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </Button>
            </div>

            <div className="flex justify-center">
              <ChevronDown className="h-8 w-8 text-muted-foreground animate-bounce" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section - Enhanced */}
      <section className="py-20 lg:py-32 bg-white dark:bg-gray-950">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              {t('itTrainingPage.intro.title')}
            </h2>
            <div className="space-y-4">
              {t('itTrainingPage.intro.content', []).map((paragraph: string, index: number) => (
                <p key={index} className="text-lg text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Enhanced */}
      <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-brand-red mb-4 dark:bg-red-900/20">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              {t('itTrainingPage.services.subtitle')}
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-gray-900 dark:text-white">
              {t('itTrainingPage.services.title')}
            </h2>
          </div>
          <div className="space-y-6">
            {t('itTrainingPage.services.items', []).map((item: any, index: number) => {
              const Icon = serviceIcons[index] || GraduationCap;
              return (
                <div
                  key={index}
                  className="group relative rounded-xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-brand-red flex-shrink-0 transition-colors group-hover:bg-brand-red group-hover:text-white dark:bg-red-900/20 dark:text-red-400 dark:group-hover:bg-brand-red dark:group-hover:text-white">
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">{item.title}</h3>
                      <p className="text-base leading-relaxed mb-4 text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                      {item.topics && item.topics.length > 0 && (
                        <ul className="grid gap-2 md:grid-cols-2">
                          {item.topics.map((topic: string, topicIndex: number) => (
                            <li key={topicIndex} className="flex gap-2 items-start text-sm text-gray-500 dark:text-gray-400">
                              <CheckCircle className="h-4 w-4 text-brand-red flex-shrink-0 mt-0.5" aria-hidden="true" />
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section - Enhanced */}
      <section className="py-20 lg:py-32 bg-white dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              {t('itTrainingPage.benefits.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('itTrainingPage.benefits.subtitle')}
            </p>
          </div>
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-4 md:grid-cols-2">
              {t('itTrainingPage.benefits.list', []).map((benefit: string, index: number) => (
                <div
                  key={index}
                  className="flex gap-4 items-start p-6 bg-gradient-to-br from-accent/40 to-accent/20 rounded-lg hover:from-accent/50 hover:to-accent/30 transition-all duration-300 hover:shadow-md border border-accent/40"
                >
                  <CheckCircle className="h-6 w-6 text-brand-red flex-shrink-0 mt-1" aria-hidden="true" />
                  <p className="text-base leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Groups Section - Enhanced */}
      <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              {t('itTrainingPage.targetGroups.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('itTrainingPage.targetGroups.subtitle')}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t('itTrainingPage.targetGroups.groups', []).map((group: any, index: number) => {
              const Icon = targetGroupIcons[index] || Users;
              return (
                <div
                  key={index}
                  className="group relative flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-brand-red transition-colors group-hover:bg-brand-red group-hover:text-white dark:bg-red-900/20 dark:text-red-400 dark:group-hover:bg-brand-red dark:group-hover:text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{group.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{group.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Delivery Methods Section - Enhanced */}
      <section className="py-20 lg:py-32 bg-white dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              {t('itTrainingPage.delivery.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('itTrainingPage.delivery.subtitle')}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto mb-10">
            {t('itTrainingPage.delivery.methods', []).map((method: any, index: number) => {
              const Icon = deliveryIcons[index] || Video;
              return (
                <div
                  key={index}
                  className="text-center p-8 bg-gradient-to-br from-accent/40 to-accent/20 rounded-xl hover:from-accent/50 hover:to-accent/30 transition-all duration-300 hover:shadow-lg border border-accent/40"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-red text-white mb-6 shadow-lg">
                    <Icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{method.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{method.description}</p>
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-center gap-3 text-sm bg-accent/40 backdrop-blur-sm p-4 rounded-lg max-w-3xl mx-auto border border-accent/60 shadow-sm">
            <Info className="h-5 w-5 flex-shrink-0 text-brand-red" aria-hidden="true" />
            <p className="text-center text-foreground/90">{t('itTrainingPage.delivery.languageNote')}</p>
          </div>
        </div>
      </section>

      {/* Topics Section - Enhanced */}
      <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              {t('itTrainingPage.topics.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('itTrainingPage.topics.subtitle')}
            </p>
          </div>
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-3 md:grid-cols-2">
              {t('itTrainingPage.topics.list', []).map((topic: string, index: number) => (
                <div
                  key={index}
                  className="flex gap-3 items-start p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 dark:bg-gray-800 dark:border-gray-700"
                >
                  <CheckCircle className="h-5 w-5 text-brand-red flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-base text-gray-700 dark:text-gray-200">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section - Enhanced */}
      <section className="py-20 lg:py-32 bg-white dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              {t('itTrainingPage.methodology.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('itTrainingPage.methodology.subtitle')}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {t('itTrainingPage.methodology.steps', []).map((step: any, index: number) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-brand-red to-brand-red/80 text-white text-3xl font-bold mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Enhanced */}
      <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t('itTrainingPage.faq.title')}
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {t('itTrainingPage.faq.items', []).map((item: any, index: number) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg px-6 bg-white shadow-sm hover:shadow-md transition-all dark:bg-gray-800 dark:border-gray-700"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-brand-red transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed pt-2">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Pricing Section - Enhanced */}
      <section className="py-20 lg:py-32 bg-white dark:bg-gray-950">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center p-8 lg:p-12 bg-gradient-to-br from-accent/40 via-accent/20 to-background rounded-2xl border-2 border-accent/60 shadow-xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              {t('itTrainingPage.pricing.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              {t('itTrainingPage.pricing.subtitle')}
            </p>
            <p className="text-base text-muted-foreground mb-6 leading-relaxed">
              {t('itTrainingPage.pricing.description')}
            </p>
            <p className="text-base text-muted-foreground mb-8 leading-relaxed">
              {t('itTrainingPage.pricing.process')}
            </p>
            <Button asChild size="lg" className="bg-brand-red hover:bg-brand-red/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <Link href={`/${locale}/kapcsolat`}>
                {t('itTrainingPage.pricing.cta')}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Enhanced */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-brand-red via-brand-red/95 to-brand-red/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] pointer-events-none" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-6">
            {t('itTrainingPage.finalCta.title')}
          </h2>
          <p className="text-xl mb-10 text-white/95 max-w-2xl mx-auto leading-relaxed">
            {t('itTrainingPage.finalCta.description')}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-brand-red hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
          >
            <Link href={`/${locale}/kapcsolat`}>
              {t('itTrainingPage.finalCta.button')}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Structured Data */}
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbs} />
    </div>
  );
}
