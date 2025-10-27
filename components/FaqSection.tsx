'use client';

import { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: 'Milyen vállalkozásoknak nyújtanak szolgáltatást?',
    answer:
      'A SIRONIC kis- és középvállalatokra specializálódott, de egyedi igények alapján nagyobb cégeknek is kínálunk megoldásokat. Legyen szó rendszergazdai támogatásról, hálózatépítésről vagy webfejlesztésről – minden vállalkozásnak megtaláljuk az ideális IT megoldást.',
  },
  {
    question: 'Miben különbözik a SIRONIC más IT szolgáltatóktól?',
    answer:
      'Mi nem csak „hibajavítók" vagyunk – proaktívan figyeljük a rendszereket, megelőzzük a problémákat, és emberi nyelven kommunikálunk. Nem hagyjuk, hogy az IT akadály legyen, inkább versenyelőnyt kovácsolunk belőle.',
  },
  {
    question: 'Milyen gyorsan reagálnak egy hibabejelentésre?',
    answer:
      'Általános esetben 1–4 órán belül reagálunk, sürgős esetekben akár azonnal. Előfizetéses partnereink számára garantált reakcióidőt biztosítunk.',
  },
  {
    question: 'Vállalnak helyszíni kiszállást is, vagy csak távoli támogatást nyújtanak?',
    answer:
      'Igen, mindkettőt! A legtöbb hibát távolról elhárítjuk, de ha szükséges, személyesen is kiszállunk a helyszínre.',
  },
  {
    question: 'Készítenek weboldalt teljesen a nulláról is?',
    answer:
      'Természetesen. Egyedi, reszponzív weboldalakat fejlesztünk modern technológiákkal (Next.js, React, Tailwind), és gondoskodunk róla, hogy az oldal gyors, biztonságos és keresőoptimalizált legyen.',
  },
  {
    question: 'Mi az a CRM Pro, és hogyan segíti a vállalkozásomat?',
    answer:
      'A CRM Pro egy egyedi fejlesztésű ügyfélkezelő rendszer, amely átláthatóvá teszi az értékesítési folyamatokat, automatizálja az adminisztrációt és integrálható meglévő rendszerekkel. Kisebb cégek számára is elérhető árkategóriában.',
  },
  {
    question: 'Milyen biztonsági intézkedéseket alkalmaznak?',
    answer:
      'Modern tűzfalakat, adatmentési megoldásokat, titkosítást és hozzáférés-kezelést használunk. Minden rendszerünket GDPR-kompatibilisen alakítjuk ki, így az adatbiztonság alapértelmezett.',
  },
  {
    question: 'Milyen formában lehet szerződni Önökkel?',
    answer:
      'Két fő konstrukcióban dolgozunk: eseti megbízás (alkalmi feladatokra) és havi karbantartási szerződés (állandó üzemeltetés és támogatás). Mindkettő átlátható, fix díjazású.',
  },
  {
    question: 'Mennyibe kerül egy weboldal vagy rendszer fejlesztése?',
    answer:
      'Az alap weboldalak 250.000 Ft-tól indulnak, míg egyedi rendszerek vagy CRM megoldások ára a funkcionalitástól függően kerül meghatározásra. Minden projekt előtt pontos árajánlatot adunk.',
  },
  {
    question: 'Miért érdemes felhőalapú megoldásokat választani?',
    answer:
      'A felhő gyors, biztonságos és rugalmas – nem kell saját szervert fenntartani, az adatok mindig elérhetők, és a bővítés pillanatok alatt megoldható.',
  },
];

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
          className={`flex-shrink-0 mt-1 transition-transform duration-300 ease-in-out ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        >
          <ChevronDown className="h-5 w-5 text-brand-red" aria-hidden="true" />
        </div>
      </button>
      <div
        id={`faq-answer-${index}`}
        role="region"
        aria-labelledby={`faq-question-${index}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <MessageCircle className="h-8 w-8 text-brand-red" aria-hidden="true" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Gyakran Ismételt Kérdések (FAQ)
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Válaszok a leggyakoribb kérdésekre – ha további információra van szükséged, lépj velünk
            kapcsolatba!
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="bg-background rounded-lg shadow-sm border border-muted overflow-hidden">
            {faqData.map((item, index) => (
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
