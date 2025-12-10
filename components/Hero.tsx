'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { CTAButton } from './CTAButton';
import { SectionTitle } from './SectionTitle';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { getLocalizedPath } from '@/lib/routes';
import { Locale } from '@/i18n';

export function Hero() {
  const { t } = useTranslation();
  const params = useParams();
  const locale = (params?.locale as string) || 'hu';

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted py-20 lg:py-32">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" aria-hidden="true" />
      {/* Animated gradient orbs for tech effect */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl animate-pulse" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl" style={{ animation: 'pulse 4s ease-in-out infinite 1s' }} aria-hidden="true" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="mx-auto max-w-4xl text-center animate-fade-in">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl mb-8 leading-tight">
            <span className="gradient-text">
              {t('hero.title')}
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto font-medium">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CTAButton
              asChild
              size="lg"
              className="w-full sm:w-auto text-lg px-8 py-6 h-auto"
            >
              <Link href={`/${locale}/${getLocalizedPath('contact', locale as Locale)}`}>
                {t('hero.cta')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </CTAButton>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-lg px-8 py-6 h-auto border-gray-200 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800"
            >
              <Link href={`/${locale}/szolgaltatasok`}>{t('hero.learnMore')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
