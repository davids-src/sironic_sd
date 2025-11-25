'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Code2, Smartphone, MonitorSmartphone, Zap, Shield, Users, MessageSquare, TrendingUp, Scale, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function CustomDevelopmentPage() {
  const { t } = useTranslation();
  const params = useParams();
  const locale = (params?.locale as string) || 'hu';

  const whatWeDoIcons = [Code2, Code2, MonitorSmartphone, Smartphone];
  const whyChooseUsIcons = [Users, Zap, TrendingUp, MessageSquare, Shield, Scale];

  return (
    <div className="min-h-screen">
      <section className="relative py-24 bg-gradient-to-b from-brand-red/5 to-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              {t('customDevelopmentPage.hero.title')}
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              {t('customDevelopmentPage.hero.subtitle')}
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              {t('customDevelopmentPage.hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-brand-red hover:bg-brand-red/90">
                <Link href={`/${locale}/kapcsolat`}>
                  {t('customDevelopmentPage.hero.cta')}
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
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              {t('customDevelopmentPage.what.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('customDevelopmentPage.what.subtitle')}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {t('customDevelopmentPage.what.items', []).map((item: any, index: number) => {
              const Icon = whatWeDoIcons[index] || Code2;
              return (
                <Card key={index} className="transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-red/10">
                      <Icon className="h-6 w-6 text-brand-red" />
                    </div>
                    <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-background to-accent/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              {t('customDevelopmentPage.whyChoose.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('customDevelopmentPage.whyChoose.subtitle')}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {t('customDevelopmentPage.whyChoose.reasons', []).map((reason: any, index: number) => {
              const Icon = whyChooseUsIcons[index] || CheckCircle;
              return (
                <div key={index} className="flex flex-col gap-4 p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-red/10">
                    <Icon className="h-6 w-6 text-brand-red" />
                  </div>
                  <h3 className="text-xl font-semibold">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
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
              {t('customDevelopmentPage.technologies.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('customDevelopmentPage.technologies.subtitle')}
            </p>
          </div>
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-4 md:grid-cols-2">
              {t('customDevelopmentPage.technologies.list', []).map((tech: string, index: number) => (
                <div key={index} className="flex gap-3 items-start p-4 bg-accent/30 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-brand-red flex-shrink-0 mt-0.5" />
                  <span className="text-base">{tech}</span>
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
              {t('customDevelopmentPage.process.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('customDevelopmentPage.process.subtitle')}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {t('customDevelopmentPage.process.steps', []).map((step: any, index: number) => (
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

      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              {t('customDevelopmentPage.useCases.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('customDevelopmentPage.useCases.subtitle')}
            </p>
          </div>
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-4 md:grid-cols-2">
              {t('customDevelopmentPage.useCases.examples', []).map((example: string, index: number) => (
                <div key={index} className="flex gap-3 items-start p-4 bg-accent/30 rounded-lg hover:bg-accent/50 transition-colors">
                  <CheckCircle className="h-5 w-5 text-brand-red flex-shrink-0 mt-0.5" />
                  <span className="text-base">{example}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-accent/10">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              {t('customDevelopmentPage.pricing.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              {t('customDevelopmentPage.pricing.subtitle')}
            </p>
            <p className="text-base text-muted-foreground mb-6">
              {t('customDevelopmentPage.pricing.description')}
            </p>
            <p className="text-base text-muted-foreground mb-8">
              {t('customDevelopmentPage.pricing.process')}
            </p>
            <Button asChild size="lg" className="bg-brand-red hover:bg-brand-red/90">
              <Link href={`/${locale}/kapcsolat`}>
                {t('customDevelopmentPage.pricing.cta')}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t('customDevelopmentPage.faq.title')}
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {t('customDevelopmentPage.faq.items', []).map((item: any, index: number) => (
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
            {t('customDevelopmentPage.finalCta.title')}
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            {t('customDevelopmentPage.finalCta.description')}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-brand-red hover:bg-gray-100"
          >
            <Link href={`/${locale}/kapcsolat`}>
              {t('customDevelopmentPage.finalCta.button')}
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
