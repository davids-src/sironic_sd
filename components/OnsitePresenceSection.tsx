'use client';

import { ServiceBlock } from './ServiceBlock';
import { Monitor, Shield, Headphones } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { useParams } from 'next/navigation';

export function OnsitePresenceSection() {
    const { t } = useTranslation();
    const params = useParams();
    const locale = (params?.locale as string) || 'hu';

    const onsiteServices = [
        {
            title: t('onsitePresence.cards.onsite.title') || 'Helyszíni IT szakember eseményekre',
            description: t('onsitePresence.cards.onsite.description') || 'Dedikált IT-s a helyszínen, aki végigkíséri a rendezvényt az előkészítéstől a lezárásig.',
            icon: Monitor,
        },
        {
            title: t('onsitePresence.cards.stability.title') || 'Technikailag stabil rendezvény biztosítása',
            description: t('onsitePresence.cards.stability.description') || 'Ne hagyd, hogy egy technikai hiba tönkretegye az eseményt. Proaktív felügyelet és azonnali beavatkozás.',
            icon: Shield,
        },
        {
            title: t('onsitePresence.cards.equipment.title') || 'IT eszközök telepítése és felügyelete',
            description: t('onsitePresence.cards.equipment.description') || 'Laptopok, projektorok, mikrofonok, hálózat, streaming – mindent beállítunk és felügyeljük.',
            icon: Headphones,
        },
    ];

    const onsiteUrl = locale === 'hu' ? 'onsite-jelenlet' :
        locale === 'en' ? 'onsite-presence' :
            locale === 'de' ? 'onsite-prasenz' :
                locale === 'sk' ? 'onsite-pritomnost' :
                    'prezenta-onsite';

    return (
        <ServiceBlock
            title={t('onsitePresence.title') || 'IT On-Site Jelenlét eseményekre'}
            subtitle={t('onsitePresence.badge') || 'Rendezvény IT támogatás'}
            description={t('onsitePresence.description') || 'Biztosítsd szakmai rendezvényed, konferenciád vagy céges eseményed technikai stabilitását dedikált helyszíni IT támogatással. Eszközök telepítése, hálózatkezelés, streaming support és azonnali hibaelhárítás.'}
            features={onsiteServices}
            ctaText={t('onsitePresence.cta.learnMore') || 'Tudjon meg többet'}
            ctaLink={`/${locale}/${onsiteUrl}`}
            secondaryCtaText={t('onsitePresence.cta.main') || 'Kérjen ajánlatot'}
            secondaryCtaLink={`/${locale}/kapcsolat?subject=IT%20On-Site%20Jelenlét`}
            secondaryCtaVariant="outline"
            variant="standard"
        />
    );
}
