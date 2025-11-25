'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

export function Hero() {
  const { t } = useTranslation();
  const params = useParams();
  const locale = (params?.locale as string) || 'hu';

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted py-20 lg:py-28">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" aria-hidden="true" />
      {/* Animated gradient orbs for tech effect */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl animate-pulse" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl" style={{ animation: 'pulse 4s ease-in-out infinite 1s' }} aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-4 lg:px-8 relative">
        <div className="mx-auto max-w-4xl text-center animate-fade-in">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
            <span className="gradient-text">
              {t('hero.title')}
            </span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto font-medium">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-brand-red hover:bg-brand-red/90 text-white w-full sm:w-auto group button-press glow-red-hover gpu-accelerated shadow-lg"
            >
              <Link href={`/${locale}/kapcsolat`}>
                {t('hero.cta')}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto button-press">
              <Link href={`/${locale}/szolgaltatasok`}>{t('hero.learnMore')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
