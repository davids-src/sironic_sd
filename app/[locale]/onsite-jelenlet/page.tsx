'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useParams } from 'next/navigation';
import { SectionTitle } from '@/components/SectionTitle';
import { InfoCard } from '@/components/InfoCard';
import { CTAButton } from '@/components/CTAButton';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Monitor, Wifi, Video, Headphones, ChevronDown, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ServiceSchema, LocalServiceSchema, FAQSchema } from '@/components/ServiceSchemas';

export default function OnsitePresencePage() {
    const { t } = useTranslation();
    const params = useParams();
    const locale = (params?.locale as string) || 'hu';

    // Fallback content for Hungarian
    const services = t('onsitePresencePage.services.items', [
        {
            title: "Rendezvény-előkészítés és eszköztelepítés",
            description: "Az esemény előtt érkezünk, beállítjuk és teszteljük az összes IT eszközt.",
            topics: ["IT eszközök telepítése", "AV berendezések tesztelése", "Prezentációs rendszerek", "Tartalék eszközök"]
        },
        {
            title: "Hálózat és Wi-Fi menedzsment",
            description: "Stabil internet és hálózat biztosítása akár 500+ résztvevő számára.",
            topics: ["Wi-Fi tervezés és telepítés", "Sávszélesség optimalizálás", "Több SSID kezelése", "Hálózati monitoring"]
        },
        {
            title: "Streaming és videókonferencia támogatás",
            description: "Élő streaming, hibrid események és távoli előadók technikai támogatása.",
            topics: ["YouTube/Facebook streaming", "Hibrid rendezvények", "Több kamera kezelése", "Tartalék megoldások"]
        }
    ]) as any[];

    const eventTypes = t('onsitePresencePage.eventTypes.types', [
        { title: "Vállalati konferenciák", description: "Nagyobb céges rendezvények több előadóval." },
        { title: "Hibrid események", description: "Helyszíni + online résztvevők komplex infrastruktúrával." },
        { title: "Workshopok és tréningek", description: "Gyakorlati események IT support-tal." }
    ]) as any[];

    const benefits = t('onsitePresencePage.benefits.items', [
        "Tapasztalt IT-szakember a helyszínen",
        "Előzetes felkészülés és tesztelés",
        "Azonnali hibaelhárítás",
        "Tartalék eszközök és backup megoldások",
        "Streaming, AV, hálózat expertise",
        "Rugalmas szolgáltatás",
        "Dokumentáció és post-event konzultáció"
    ]) as string[];

    const processSteps = t('onsitePresencePage.process.steps', [
        { title: "Konzultáció és igényfelmérés", description: "Megbeszéljük a technikai igényeket és felmérjük a helyszínt." },
        { title: "Ajánlat és tervezés", description: "Részletes ajánlat és IT-infrastruktúra tervezés." },
        { title: "Előkészítés és tesztelés", description: "Eszközök telepítése és teljes rendszer tesztelés." },
        { title: "Helyszíni jelenlét", description: "Folyamatos monitoring és azonnali support." },
        { title: "Lezárás és értékelés", description: "Eszközök leszerelése és tapasztalatok összegzésenek." }
    ]) as any[];

    const faqItems = t('onsitePresencePage.faq.items', [
        {
            question: "Milyen típusú rendezvényekhez ajánlott?",
            answer: "Minden olyan eseményhez, ahol kritikus a technikai stabilitás: konferenciák, hibrid események, webinárok, termékbemutatók, workshopok."
        },
        {
            question: "Mennyi időre van szükség?",
            answer: "Rugalmasan alakítható! Lehet fél napos (4 óra), egész napos (8 óra), vagy több napos konferencia."
        },
        {
            question: "Biztosítjátok az eszközöket is?",
            answer: "A szolgáltatás elsősorban IT support, de szükség esetén eszközöket is tudunk biztosítani egyedi megbeszélés alapján."
        },
        {
            question: "Mennyibe kerül?",
            answer: "Egy tipikus egész napos eseményhez kb. 100.000–200.000 Ft között mozog az ár, az igények függvényében."
        }
    ]) as any[];

    const breadcrumbItems = [
        { label: t('onsitePresencePage.breadcrumb.onsitePresence') || 'IT On-Site Jelenlét', href: '' }
    ];

    const availabilityNote = t('onsitePresencePage.availabilityNote') || 'Ez a szolgáltatás Magyarország teljes területén elérhető.';

    return (
        <>
            <div className="min-h-screen">
                <div className="container mx-auto px-4 py-8 md:px-6">
                    <Breadcrumbs items={breadcrumbItems} />
                </div>

                {/* Hero */}
                <section className="relative py-20 lg:py-32 bg-gradient-to-br from-brand-red/10 via-background to-background">
                    <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="mx-auto max-w-3xl text-center">
                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
                                {t('onsitePresencePage.hero.title') || 'IT On-Site Jelenlét eseményekre'}
                            </h1>
                            <p className="text-xl text-brand-red font-medium mb-4">
                                {t('onsitePresencePage.hero.subtitle') || 'Professzionális helyszíni IT támogatás rendezvényekhez'}
                            </p>
                            <p className="text-lg text-muted-foreground mb-8">
                                {t('onsitePresencePage.hero.description') || 'Technikai problémák nélküli rendezvény? Dedikált szakember a helyszínen.'}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href={`/${locale}/kapcsolat?subject=IT%20On-Site%20Jelenlét`}>
                                    <CTAButton size="lg" className="text-lg px-8 py-6">
                                        {t('onsitePresencePage.hero.cta') || 'Kérjen ingyenes konzultációt'}
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </CTAButton>
                                </Link>
                            </div>
                            <div className="mt-12 flex justify-center">
                                <ChevronDown className="h-8 w-8 text-muted-foreground animate-bounce" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Intro */}
                <section className="py-20 lg:py-32 bg-white dark:bg-gray-950">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="mx-auto max-w-3xl">
                            <h2 className="text-3xl font-bold mb-6">
                                {t('onsitePresencePage.intro.title') || 'Miért érdemes IT szakembert vinni a rendezvényre?'}
                            </h2>
                            <div className="space-y-4 text-lg text-muted-foreground">
                                <p>
                                    Egy profi rendezvény sikere gyakran múlik a technikai stabilitáson. Ha a hangrendszer elhagy, a projektor nem működik, vagy a streaming bufferel – az egész esemény megbukik.
                                </p>
                                <p>
                                    A SIRONIC IT On-Site Jelenlét szolgáltatásával egy tapasztalt IT-szakembert kapsz, aki előre felkészíti az infrastruktúrát, teszteli az eszközöket, és végigkíséri az eseményt.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services */}
                <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
                    <div className="container mx-auto px-4 md:px-6">
                        <SectionTitle
                            title={t('onsitePresencePage.services.title') || 'Mit kínálunk?'}
                            subtitle={t('onsitePresencePage.services.subtitle') || 'Teljes körű technikai támogatás'}
                        />
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {services.map((service: any, index: number) => {
                                const icons = [Monitor, Wifi, Video];
                                const Icon = icons[index % icons.length];
                                return (
                                    <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                                                <Icon className="h-6 w-6 text-brand-red" />
                                            </div>
                                            <h3 className="text-xl font-bold">{service.title}</h3>
                                        </div>
                                        <p className="text-muted-foreground mb-4">{service.description}</p>
                                        {service.topics && (
                                            <ul className="space-y-2">
                                                {service.topics.map((topic: string, i: number) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm">
                                                        <CheckCircle className="h-4 w-4 text-brand-red flex-shrink-0 mt-0.5" />
                                                        <span className="text-gray-700 dark:text-gray-300">{topic}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Event Types */}
                <section className="py-20 lg:py-32 bg-white dark:bg-gray-950">
                    <div className="container mx-auto px-4 md:px-6">
                        <SectionTitle
                            title={t('onsitePresencePage.eventTypes.title') || 'Támogatott események'}
                            subtitle={t('onsitePresencePage.eventTypes.subtitle') || 'Bármilyen rendezvény, ahol az IT kritikus'}
                        />
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {eventTypes.map((type: any, index: number) => (
                                <div key={index} className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800">
                                    <h3 className="font-bold text-lg mb-2">{type.title}</h3>
                                    <p className="text-sm text-muted-foreground">{type.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits */}
                <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="mx-auto max-w-3xl">
                            <h2 className="text-3xl font-bold text-center mb-12">
                                {t('onsitePresencePage.benefits.title') || 'Miért érdemes velünk dolgozni?'}
                            </h2>
                            <div className="grid gap-4 md:grid-cols-2">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start gap-3 p-4 bg-white dark:bg-gray-900 rounded-lg">
                                        <CheckCircle className="h-5 w-5 text-brand-red flex-shrink-0 mt-0.5" />
                                        <span>{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process */}
                <section className="py-20 lg:py-32 bg-white dark:bg-gray-950">
                    <div className="container mx-auto px-4 md:px-6">
                        <SectionTitle
                            title={t('onsitePresencePage.process.title') || 'Hogyan dolgozunk?'}
                            subtitle={t('onsitePresencePage.process.subtitle') || 'Strukturált folyamat'}
                        />
                        <div className="grid gap-8 md:grid-cols-5 max-w-6xl mx-auto">
                            {processSteps.map((step: any, index: number) => (
                                <div key={index} className="text-center group">
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-red text-white text-xl font-bold mb-4 shadow-lg group-hover:scale-110 transition-transform">
                                        {index + 1}
                                    </div>
                                    <h3 className="font-semibold mb-2 text-sm">{step.title}</h3>
                                    <p className="text-xs text-muted-foreground">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
                    <div className="container mx-auto px-4 md:px-6">
                        <SectionTitle title={t('onsitePresencePage.faq.title') || 'Gyakran ismételt kérdések'} />
                        <div className="mx-auto max-w-3xl">
                            <Accordion type="single" collapsible className="w-full space-y-4">
                                {faqItems.map((item: any, index: number) => (
                                    <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 dark:border-gray-800 rounded-lg px-6 bg-white dark:bg-gray-900">
                                        <AccordionTrigger className="text-left font-semibold hover:text-brand-red transition-colors py-4">
                                            {item.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground pb-4">
                                            {item.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </section>

                {/* Availability Note */}
                <section className="py-8 bg-white dark:bg-gray-950">
                    <div className="container mx-auto px-4 md:px-6">
                        <p className="text-sm text-center text-muted-foreground italic">{availabilityNote}</p>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-20 lg:py-32 bg-gradient-to-br from-brand-red via-brand-red/95 to-brand-red/90 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid-white/[0.05] pointer-events-none" />
                    <div className="container mx-auto px-4 md:px-6 text-center">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                            {t('onsitePresencePage.finalCta.title') || 'Biztosítsd rendezvényed technikai stabilitását!'}
                        </h2>
                        <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                            {t('onsitePresencePage.finalCta.description') || 'Kérj ingyenes konzultációt!'}
                        </p>
                        <Link href={`/${locale}/kapcsolat?subject=IT%20On-Site%20Jelenlét`}>
                            <CTAButton size="lg" className="bg-white text-brand-red hover:bg-gray-100 border-none">
                                {t('onsitePresencePage.finalCta.button') || 'Kérek ajánlatot'}
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </CTAButton>
                        </Link>
                    </div>
                </section>
            </div>

            {/* Structured Data */}
            {locale === 'hu' ? (
                <LocalServiceSchema
                    serviceName={t('onsitePresencePage.hero.title') || 'IT On-Site Jelenlét'}
                    serviceDescription={t('onsitePresencePage.hero.description') || 'Professzionális helyszíni IT támogatás rendezvényekhez'}
                    url={`/${locale}/onsite-jelenlet`}
                />
            ) : (
                <ServiceSchema
                    serviceType="Event IT Support"
                    serviceName={t('onsitePresencePage.hero.title') || 'IT On-Site Presence'}
                    description={t('onsitePresencePage.hero.description') || 'Professional on-site IT support for events'}
                    areaServed="EU"
                    locale={locale}
                    url={`/${locale}/onsite-presence`}
                />
            )}
            <FAQSchema
                faqs={faqItems.map((item: any) => ({ question: item.question, answer: item.answer }))}
                url={`/${locale}/onsite-jelenlet`}
            />
        </>
    );
}
