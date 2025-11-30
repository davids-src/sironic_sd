'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Wrench, MapPin, Mail, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useTranslation } from '@/hooks/useTranslation';

export function RepairServiceSection() {
  const { t } = useTranslation();
  const params = useParams();
  const locale = (params?.locale as string) || 'hu';

  const benefits = t('repairService.benefits', []) as string[];

  const repairUrl = locale === 'hu' ? 'szerviz-javitas' :
                    locale === 'en' ? 'repair-service' :
                    locale === 'de' ? 'reparatur-service' :
                    locale === 'sk' ? 'servisne-sluzby' :
                    'servicii-reparatii';

  return (
    <section
      id="szerviz-javitas"
      className="py-16 lg:py-24 bg-gradient-to-b from-background to-accent/10 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-red/10 px-4 py-2 text-sm font-semibold text-brand-red mb-6">
            <Wrench className="h-4 w-4" aria-hidden="true" />
            {t('repairService.badge')}
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-6">
            {t('repairService.title')}
          </h2>
          <p className="text-xl text-brand-red/90 mb-4">
            {t('repairService.subtitle')}
          </p>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            {t('repairService.description')}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto mb-10">
          <div className="p-6 bg-background rounded-lg border border-accent shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 p-3 bg-brand-red/10 rounded-lg">
                <MapPin className="h-6 w-6 text-brand-red" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{t('repairService.cards.onsite.title')}</h3>
                <p className="text-sm text-muted-foreground">{t('repairService.cards.onsite.description')}</p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-background rounded-lg border border-accent shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 p-3 bg-brand-red/10 rounded-lg">
                <Mail className="h-6 w-6 text-brand-red" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{t('repairService.cards.postal.title')}</h3>
                <p className="text-sm text-muted-foreground">{t('repairService.cards.postal.description')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mb-10">
          <div className="bg-accent/30 rounded-lg p-6 border border-accent">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-brand-red" />
              {t('common.whatYouGet')}
            </h3>
            <ul className="space-y-2">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-red flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            size="lg"
            className="bg-brand-red hover:bg-brand-red/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group w-full sm:w-auto"
          >
            <Link href={`/${locale}/kapcsolat?subject=Szerviz%20és%20javítás`}>
              {t('repairService.cta.main')}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-brand-red/30 hover:border-brand-red/50 hover:bg-brand-red/5 w-full sm:w-auto"
          >
            <Link href={`/${locale}/${repairUrl}`}>
              {t('repairService.cta.learnMore')}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
