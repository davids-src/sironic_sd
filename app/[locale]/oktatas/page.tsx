'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, GraduationCap, Shield, Monitor, Users, Target, Zap, TrendingUp, BookOpen, Video, Home, ChevronDown, Info } from 'lucide-react';
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
      <section className="relative py-24 bg-gradient-to-b from-brand-red/5 to-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              {t('itTrainingPage.hero.title')}
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              {t('itTrainingPage.hero.subtitle')}
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              {t('itTrainingPage.hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-brand-red hover:bg-brand-red/90">
                <Link href={`/${locale}/kapcsolat`}>
                  {t('itTrainingPage.hero.cta')}
                </Link>
              </Button>
            </div>
            <div className="mt-12 flex justify-center">
              <ChevronDown className="h-8 w-8 text-muted-foreground animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              {t('itTrainingPage.intro.title')}
            </h2>
            {t('itTrainingPage.intro.content', []).map((paragraph: string, index: number) => (
              <p key={index} className="text-lg text-muted-foreground mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-background to-accent/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              {t('itTrainingPage.services.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('itTrainingPage.services.subtitle')}
            </p>
          </div>
          <div className="space-y-8">
            {t('itTrainingPage.services.items', []).map((item: any, index: number) => {
              const Icon = serviceIcons[index] || GraduationCap;
              return (
                <Card key={index} className="transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-red/10 flex-shrink-0">
                        <Icon className="h-6 w-6 text-brand-red" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-3">{item.title}</CardTitle>
                        <CardDescription className="text-base leading-relaxed mb-4">
                          {item.description}
                        </CardDescription>
                        {item.topics && item.topics.length > 0 && (
                          <ul className="space-y-2">
                            {item.topics.map((topic: string, topicIndex: number) => (
                              <li key={topicIndex} className="flex gap-2 items-start text-sm text-muted-foreground">
                                <CheckCircle className="h-4 w-4 text-brand-red flex-shrink-0 mt-0.5" />
                                <span>{topic}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
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
            <div className="space-y-4">
              {t('itTrainingPage.benefits.list', []).map((benefit: string, index: number) => (
                <div key={index} className="flex gap-4 items-start p-6 bg-accent/30 rounded-lg hover:bg-accent/50 transition-colors">
                  <CheckCircle className="h-6 w-6 text-brand-red flex-shrink-0 mt-1" />
                  <p className="text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-background to-accent/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              {t('itTrainingPage.targetGroups.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('itTrainingPage.targetGroups.subtitle')}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {t('itTrainingPage.targetGroups.groups', []).map((group: any, index: number) => {
              const Icon = targetGroupIcons[index] || Users;
              return (
                <div key={index} className="flex flex-col gap-4 p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-red/10">
                    <Icon className="h-6 w-6 text-brand-red" />
                  </div>
                  <h3 className="text-xl font-semibold">{group.title}</h3>
                  <p className="text-muted-foreground">{group.description}</p>
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
              {t('itTrainingPage.delivery.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('itTrainingPage.delivery.subtitle')}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto mb-8">
            {t('itTrainingPage.delivery.methods', []).map((method: any, index: number) => {
              const Icon = deliveryIcons[index] || Video;
              return (
                <div key={index} className="text-center p-6 bg-accent/30 rounded-lg">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-red text-white mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{method.title}</h3>
                  <p className="text-muted-foreground">{method.description}</p>
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground bg-accent/30 p-4 rounded-lg max-w-3xl mx-auto">
            <Info className="h-4 w-4 flex-shrink-0 text-brand-red" />
            <p className="text-center">{t('itTrainingPage.delivery.languageNote')}</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-accent/10">
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
            <div className="grid gap-4 md:grid-cols-2">
              {t('itTrainingPage.topics.list', []).map((topic: string, index: number) => (
                <div key={index} className="flex gap-3 items-start p-4 bg-background rounded-lg">
                  <CheckCircle className="h-5 w-5 text-brand-red flex-shrink-0 mt-0.5" />
                  <span className="text-base">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
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
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-red text-white text-2xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-accent/10">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              {t('itTrainingPage.pricing.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              {t('itTrainingPage.pricing.subtitle')}
            </p>
            <p className="text-base text-muted-foreground mb-6">
              {t('itTrainingPage.pricing.description')}
            </p>
            <p className="text-base text-muted-foreground mb-8">
              {t('itTrainingPage.pricing.process')}
            </p>
            <Button asChild size="lg" className="bg-brand-red hover:bg-brand-red/90">
              <Link href={`/${locale}/kapcsolat`}>
                {t('itTrainingPage.pricing.cta')}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t('itTrainingPage.faq.title')}
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {t('itTrainingPage.faq.items', []).map((item: any, index: number) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-24 bg-brand-red text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {t('itTrainingPage.finalCta.title')}
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            {t('itTrainingPage.finalCta.description')}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-brand-red hover:bg-gray-100"
          >
            <Link href={`/${locale}/kapcsolat`}>
              {t('itTrainingPage.finalCta.button')}
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
