'use client';

import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { useTranslation } from '@/hooks/useTranslation';
import Link from 'next/link';
import { getLocalizedPath } from '@/lib/routes';
import { Locale } from '@/i18n';
import { X, Cookie } from 'lucide-react';

export function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);
    const { t, locale } = useTranslation();
    const currentLocale = locale as Locale;

    useEffect(() => {
        // Check if consent has already been made
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            // Show banner after a small delay for better UX
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('cookie-consent', 'declined');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-up">
            <div className="mx-auto max-w-7xl">
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 relative">

                    <button
                        onClick={handleDecline}
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                        aria-label={t('cookie.decline')}
                    >
                        <X className="h-5 w-5" />
                    </button>

                    <div className="flex-shrink-0 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg hidden md:block">
                        <Cookie className="h-6 w-6 text-brand-red" />
                    </div>

                    <div className="flex-1 space-y-2">
                        <h3 className="font-semibold text-lg text-gray-900 dark:text-white flex items-center gap-2">
                            <span className="md:hidden"><Cookie className="h-5 w-5 text-brand-red inline" /></span>
                            {t('cookie.title')}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                            {t('cookie.description')}
                            <Link
                                href={`/${locale}/${getLocalizedPath('privacy', currentLocale)}`}
                                className="text-brand-red hover:underline ml-1 font-medium"
                            >
                                {t('cookie.privacy')}
                            </Link>.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto mt-2 md:mt-0">
                        <Button variant="outline" onClick={handleDecline} className="w-full sm:w-auto border-gray-300 dark:border-gray-700">
                            {t('cookie.decline')}
                        </Button>
                        <Button onClick={handleAccept} className="w-full sm:w-auto bg-brand-red hover:bg-brand-red/90 text-white">
                            {t('cookie.accept')}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
