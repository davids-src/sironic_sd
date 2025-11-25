'use client';

import { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqItemComponentProps {
  item: FaqItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

function FaqItemComponent({ item, index, isOpen, onToggle }: FaqItemComponentProps) {
  return (
    <div className="border-b border-muted last:border-b-0">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        className="w-full py-5 px-4 sm:px-6 flex items-start justify-between gap-4 text-left hover:bg-muted/30 transition-colors duration-200 group"
      >
        <h3 className="text-base sm:text-lg font-semibold text-foreground pr-4 flex-1 leading-relaxed group-hover:text-brand-red transition-colors">
          {item.question}
        </h3>
        <div
          className={`flex-shrink-0 mt-1 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : 'rotate-0'
            }`}
        >
          <ChevronDown className="h-5 w-5 text-brand-red" aria-hidden="true" />
        </div>
      </button>
      <div
        id={`faq-answer-${index}`}
        role="region"
        aria-labelledby={`faq-question-${index}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="px-4 sm:px-6 pb-5 pt-2">
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export function FaqSection() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData: FaqItem[] = t('faq.items', []);

  return (
    <section id="faq" className="py-16 lg:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <MessageCircle className="h-8 w-8 text-brand-red" aria-hidden="true" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {t('faq.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Válaszok a leggyakoribb kérdésekre – ha további információra van szükséged, lépj velünk
            kapcsolatba!
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="bg-background rounded-lg shadow-sm border border-muted overflow-hidden">
            {faqData.map((item: FaqItem, index: number) => (
              <FaqItemComponent
                key={index}
                item={item}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Nem találtad a válaszodat?{' '}
            <a href="/kapcsolat" className="text-brand-red font-semibold hover:underline">
              Vedd fel velünk a kapcsolatot
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
