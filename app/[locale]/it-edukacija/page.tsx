'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useParams } from 'next/navigation';
import { SectionTitle } from '@/components/SectionTitle';
import { InfoCard } from '@/components/InfoCard';
import { CTAButton } from '@/components/CTAButton';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import {
  CheckCircle, GraduationCap, Shield, Monitor, Users, Target, Zap, TrendingUp,
  BookOpen, Video, Home, Info, Sparkles, ArrowRight
} from 'lucide-react';
import Link from 'next/link';

export default function ItTrainingPage() {
  const { t } = useTranslation();
  const params = useParams();
  const locale = (params?.locale as string) || 'hu';

  const serviceIcons = [GraduationCap, Shield, Monitor, Users];
  const benefitIcons = [Zap, Target, Shield, TrendingUp, Users, Zap, TrendingUp];
  const targetGroupIcons = [Users, Target, BookOpen, Home, GraduationCap];
  const deliveryIcons = [Home, Video, Zap];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
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

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              {t('itTrainingPage.hero.title')}
            </h1>
            <p className="text-xl sm:text-2xl text-brand-red/90 font-medium mb-4">
              {t('itTrainingPage.hero.subtitle')}
            </p>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
              {t('itTrainingPage.hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/kapcsolat`}>
                <CTAButton size="lg" className="text-lg px-8 py-6">
                  {t('itTrainingPage.hero.cta')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </CTAButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
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

      {/* Services Section */}
      <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title={t('itTrainingPage.services.title')}
            subtitle={t('itTrainingPage.services.subtitle')}
          />
          <div className="grid gap-8 sm:grid-cols-2">
            {t('itTrainingPage.services.items', []).map((item: any, index: number) => {
              const Icon = serviceIcons[index] || GraduationCap;
              return (
                <InfoCard
                  key={index}
                  title={item.title}
                  description={item.description}
                  icon={Icon}
                >
                  {item.topics && item.topics.length > 0 && (
                    <ul className="mt-4 grid gap-2 md:grid-cols-2">
                      {item.topics.map((topic: string, topicIndex: number) => (
                        <li key={topicIndex} className="flex gap-2 items-start text-sm text-gray-500 dark:text-gray-400">
                          <CheckCircle className="h-4 w-4 text-brand-red flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </InfoCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title={t('itTrainingPage.benefits.title')}
            subtitle={t('itTrainingPage.benefits.subtitle')}
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {t('itTrainingPage.benefits.list', []).map((benefit: string, index: number) => {
              const Icon = benefitIcons[index] || CheckCircle;
              return (
                <InfoCard
                  key={index}
                  title=""
                  description={benefit}
                  icon={Icon}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Target Groups Section */}
      <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title={t('itTrainingPage.targetGroups.title')}
            subtitle={t('itTrainingPage.targetGroups.subtitle')}
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {t('itTrainingPage.targetGroups.groups', []).map((group: any, index: number) => {
              const Icon = targetGroupIcons[index] || Users;
              return (
                <InfoCard
                  key={index}
                  title={group.title}
                  description={group.description}
                  icon={Icon}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Delivery Methods Section */}
      <section className="py-20 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title={t('itTrainingPage.delivery.title')}
            subtitle={t('itTrainingPage.delivery.subtitle')}
          />
          <div className="grid gap-8 sm:grid-cols-3 max-w-5xl mx-auto mb-10">
            {t('itTrainingPage.delivery.methods', []).map((method: any, index: number) => {
              const Icon = deliveryIcons[index] || Video;
              return (
                <div
                  key={index}
                  className="text-center p-8 bg-gray-50 dark:bg-gray-900 rounded-xl hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-800"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-50 text-brand-red mb-6">
                    <Icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{method.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{method.description}</p>
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-center gap-3 text-sm bg-gray-50 dark:bg-gray-900 p-4 rounded-lg max-w-3xl mx-auto border border-gray-100 dark:border-gray-800">
            <Info className="h-5 w-5 flex-shrink-0 text-brand-red" aria-hidden="true" />
            <p className="text-center text-foreground/90">{t('itTrainingPage.delivery.languageNote')}</p>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title={t('itTrainingPage.topics.title')}
            subtitle={t('itTrainingPage.topics.subtitle')}
          />
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

      {/* Methodology Section */}
      <section className="py-20 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title={t('itTrainingPage.methodology.title')}
            subtitle={t('itTrainingPage.methodology.subtitle')}
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {t('itTrainingPage.methodology.steps', []).map((step: any, index: number) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-50 text-brand-red text-3xl font-bold mb-6 group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
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
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="text-center p-8 lg:p-12 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
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
              <Link href={`/${locale}/kapcsolat`}>
                <CTAButton size="lg">
                  {t('itTrainingPage.pricing.cta')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </CTAButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 lg:py-32 bg-brand-red text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-6">
            {t('itTrainingPage.finalCta.title')}
          </h2>
          <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto leading-relaxed">
            {t('itTrainingPage.finalCta.description')}
          </p>
          <Link href={`/${locale}/kapcsolat`}>
            <CTAButton
              size="lg"
              className="bg-white text-brand-red hover:bg-gray-100 border-none"
            >
              {t('itTrainingPage.finalCta.button')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </CTAButton>
          </Link>
        </div>
      </section>
    </div>
  );
}
