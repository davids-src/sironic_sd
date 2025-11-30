'use client';

import { Hero } from '@/components/Hero';
import { ServiceCard } from '@/components/ServiceCard';
import { Testimonial } from '@/components/Testimonial';
import { FaqSection } from '@/components/FaqSection';
import { MindenCegnekSection } from '@/components/MindenCegnekSection';
import { CustomDevelopmentSection } from '@/components/CustomDevelopmentSection';
import { NetworkOptimizationSection } from '@/components/NetworkOptimizationSection';
import { ItTrainingSection } from '@/components/ItTrainingSection';
import { RepairServiceSection } from '@/components/RepairServiceSection';
import { OrganizationSchema } from '@/components/structured-data/OrganizationSchema';
import { LocalBusinessSchema } from '@/components/structured-data/LocalBusinessSchema';
import { Button } from '@/components/ui/button';
import { Server, Network, Shield, Code, CheckCircle, ShoppingCart, Cloud, Wrench, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';
import { useParams } from 'next/navigation';

export default function HomePage() {
  const { t } = useTranslation();
  const params = useParams();
  const locale = (params?.locale as string) || 'hu';

  const services = [
    {
      title: t('services.systemOperation.title'),
      description: t('services.systemOperation.description'),
      icon: Server,
    },
    {
      title: t('services.networking.title'),
      description: t('services.networking.description'),
      icon: Network,
    },
    {
      title: t('services.security.title'),
      description: t('services.security.description'),
      icon: Shield,
    },
    {
      title: t('services.development.title'),
      description: t('services.development.description'),
      icon: Code,
    },
    {
      title: t('services.commerce.title'),
      description: t('services.commerce.description'),
      icon: ShoppingCart,
    },
    {
      title: t('services.hosting.title'),
      description: t('services.hosting.description'),
      icon: Cloud,
    },
    {
      title: t('services.repair.title'),
      description: t('services.repair.description'),
      icon: Wrench,
    },
  ];

  const whyChooseUs = t('whyChooseUs.reasons', []);
  const testimonials = t('testimonials.items', []);
  const workProcess = t('workProcess.steps', []);

  return (
    <>
      <Hero />

      <section id="szolgaltatasok" className="py-24 bg-gradient-to-b from-background to-accent/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              {t('services.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('services.subtitle')}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-brand-red hover:bg-brand-red/90">
              <Link href={`/${locale}/szolgaltatasok`}>
                {t('services.viewAll')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CustomDevelopmentSection />

      <NetworkOptimizationSection />

      <ItTrainingSection />

      <MindenCegnekSection />

      <RepairServiceSection />

      <section id="miert-valassz-minket" className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              {t('whyChooseUs.title')}
            </h2>
          </div>
          <div className="mx-auto max-w-4xl">
            <div className="space-y-4">
              {whyChooseUs.map((reason: string, index: number) => (
                <div key={index} className="flex gap-4 items-start p-6 bg-accent/30 rounded-lg hover:bg-accent/50 transition-colors">
                  <CheckCircle className="h-6 w-6 text-brand-red flex-shrink-0 mt-1" />
                  <p className="text-lg">{reason}</p>
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
              {t('testimonials.title')}
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {testimonials.map((testimonial: any, index: number) => (
              <Testimonial key={index} quote={testimonial.quote} company={testimonial.company} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              {t('workProcess.title')}
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {workProcess.map((step: any, index: number) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-red text-white text-2xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection />

      <section className="py-24 bg-brand-red text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {t('finalCta.title')}
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            {t('finalCta.description')}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-brand-red hover:bg-gray-100"
          >
            <Link href={`/${locale}/kapcsolat`}>{t('finalCta.button')}</Link>
          </Button>
        </div>
      </section>

      {/* Structured Data */}
      <OrganizationSchema locale={locale} />
      <LocalBusinessSchema locale={locale} />
    </>
  );
}
