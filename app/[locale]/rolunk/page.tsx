'use client';

import { Button } from '@/components/ui/button';
import { CheckCircle, Target, Users, Lightbulb, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';
import { useParams } from 'next/navigation';
import { Breadcrumbs } from '@/components/Breadcrumbs';

const iconMap: Record<string, any> = {
  Target,
  Users,
  Lightbulb,
};

export default function RolunkPage() {
  const { t } = useTranslation();
  const params = useParams();
  const locale = (params?.locale as string) || 'hu';

  const intro = t('aboutPage.intro', []);
  const stats = t('aboutPage.stats', []);
  const missionParagraphs = t('aboutPage.mission.paragraphs', []);
  const values = t('aboutPage.values.items', []);
  const howWeWorkSteps = t('aboutPage.howWeWork.steps', []);

  return (
    <>
      <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-background to-muted">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Breadcrumbs items={[{ label: t('nav.about'), href: `/${locale}/rolunk` }]} />
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              {t('aboutPage.title')}
            </h1>
            {intro.map((paragraph: string, index: number) => (
              <p key={index} className="text-lg text-muted-foreground leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat: any, index: number) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-brand-red mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">{t('aboutPage.mission.title')}</h2>
            {missionParagraphs.map((paragraph: string, index: number) => (
              <p key={index} className="text-lg text-muted-foreground leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
            <div className="mt-8">
              <Button asChild variant="outline" className="group">
                <Link href={`/${locale}/szolgaltatasok`}>
                  {t('nav.services')}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('aboutPage.values.title')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value: any, index: number) => {
              const IconComponent = iconMap[['Target', 'Users', 'Lightbulb'][index]] || Target;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-red/10 mb-4">
                    <IconComponent className="h-8 w-8 text-brand-red" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">{t('aboutPage.howWeWork.title')}</h2>
            <div className="space-y-4">
              {howWeWorkSteps.map((step: string, index: number) => (
                <div key={index} className="flex gap-3 items-start">
                  <CheckCircle className="h-6 w-6 text-brand-red flex-shrink-0 mt-0.5" />
                  <p className="text-lg">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-brand-red text-white">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {t('aboutPage.finalCta.title')}
          </h2>
          <p className="text-lg mb-8 opacity-90">
            {t('aboutPage.finalCta.subtitle')}
          </p>
          <Button asChild size="lg" variant="secondary" className="text-brand-red group">
            <Link href={`/${locale}/kapcsolat`}>
              {t('aboutPage.finalCta.button')}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
