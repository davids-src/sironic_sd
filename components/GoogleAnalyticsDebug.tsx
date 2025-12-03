'use client';

import { useEffect } from 'react';

export function GoogleAnalyticsDebug() {
    useEffect(() => {
        // Only run in development
        if (process.env.NODE_ENV === 'development') {
            console.log('🔍 Google Analytics Debug Info:');
            console.log('GA ID from env:', process.env.NEXT_PUBLIC_GA_ID);
            console.log('GA ID exists:', !!process.env.NEXT_PUBLIC_GA_ID);
            console.log('dataLayer exists:', typeof window !== 'undefined' && !!(window as any).dataLayer);
            console.log('gtag exists:', typeof window !== 'undefined' && typeof (window as any).gtag === 'function');
        }
    }, []);

    return null;
}
