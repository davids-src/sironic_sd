export const faqSchemaData = [
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

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqSchemaData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};
