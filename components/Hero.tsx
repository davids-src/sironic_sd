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
      <div className="mx-auto max-w-7xl px-4 lg:px-8 relative">
        <div className="mx-auto max-w-4xl text-center animate-fade-in">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
            {t('hero.title')}
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-brand-red hover:bg-brand-red/90 text-white w-full sm:w-auto group"
            >
              <Link href={`/${locale}/kapcsolat`}>
                {t('hero.cta')}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <Link href={`/${locale}/szolgaltatasok`}>{t('hero.learnMore')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
