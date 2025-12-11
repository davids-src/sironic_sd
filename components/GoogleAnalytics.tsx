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
      {/* Google tag (gtag.js) */}
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
            gtag('js', new Date());
            
            // Set default consent mode (denied by default for GDPR compliance)
            // This will be updated when user accepts cookies
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied'
            });
            
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

