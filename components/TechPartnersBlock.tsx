'use client';

import { useTranslation } from '@/hooks/useTranslation';

const partners = [
    { name: 'MikroTik' },
    { name: 'Ubiquiti' },
    { name: 'Microsoft 365' },
    { name: 'Next.js' },
    { name: 'Vercel' },
    { name: 'AWS' }
];

export function TechPartnersBlock() {
    const { t } = useTranslation();

    return (
        <div className="py-8 bg-white dark:bg-gray-950 border-y border-gray-100 dark:border-gray-900 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
                    {t('trust.partners.title')}
                </p>
                <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 lg:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
                    {partners.map((partner) => (
                        <div key={partner.name} className="flex items-center">
                            <span className="text-xl md:text-2xl font-bold tracking-tight text-gray-800 dark:text-gray-200 select-none">
                                {partner.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
