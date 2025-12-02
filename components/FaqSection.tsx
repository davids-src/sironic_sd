'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

interface FaqItem {
  question: string;
  answer: string;
}

export function FaqSection() {
  const { t } = useTranslation();
  const params = useParams();
  const locale = (params?.locale as string) || 'hu';

  const faqData: FaqItem[] = t('faq.items', []);

  return (
    <section id="faq" className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-full">
              <MessageCircle className="h-6 w-6 text-brand-red" aria-hidden="true" />
            </div>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {t('faq.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            Válaszok a leggyakoribb kérdésekre – ha további információra van szükséged, lépj velünk kapcsolatba!
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((item: FaqItem, index: number) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-brand-red transition-colors py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pb-6 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              Nem találtad a válaszodat?{' '}
              <Link href={`/${locale}/kapcsolat`} className="text-brand-red font-semibold hover:underline">
                Vedd fel velünk a kapcsolatot
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
