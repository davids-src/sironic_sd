'use client';

import Script from 'next/script';

interface GoogleAnalyticsProps {
  gaId: string;
}

export function GoogleAnalytics({ gaId }: GoogleAnalyticsProps) {
  if (!gaId) {
    return null;
  }

  const isDevelopment = process.env.NODE_ENV === 'development';

  return (
    <>
      {/* Google tag (gtag.js) - Optimized for accurate tracking */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            // Initialize with current timestamp
            gtag('js', new Date());
            
            // Consent mode configuration (GDPR compliance)
            gtag('consent', 'default', {
              'analytics_storage': 'granted',
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied'
            });
            
            // Configure Google Analytics with enhanced options
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
              send_page_view: true,
              cookie_flags: 'SameSite=None;Secure',
              ${isDevelopment ? "debug_mode: true," : ""}
              anonymize_ip: true
            });
            
            ${isDevelopment ? `
            // Development mode logging
            console.log('✅ Google Analytics loaded:', '${gaId}');
            console.log('📊 dataLayer:', window.dataLayer);
            ` : ''}
          `,
        }}
      />
    </>
  );
}
