// Google Analytics utility functions

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set' | 'consent',
      targetId: string | Date | Record<string, any>,
      config?: Record<string, any>
    ) => void;
    dataLayer: any[];
  }
}

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID!, {
      page_path: url,
    });
  }
};

// Track custom events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track contact form submissions
export const trackContactFormSubmission = (formType: 'contact' | 'newsletter') => {
  event({
    action: 'form_submit',
    category: 'engagement',
    label: formType,
  });
};

// Track service page views
export const trackServiceView = (serviceName: string) => {
  event({
    action: 'view_service',
    category: 'engagement',
    label: serviceName,
  });
};

// Track phone number clicks
export const trackPhoneClick = () => {
  event({
    action: 'phone_click',
    category: 'contact',
    label: 'phone_number',
  });
};

// Track email clicks
export const trackEmailClick = () => {
  event({
    action: 'email_click',
    category: 'contact',
    label: 'email_address',
  });
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location?: string) => {
  event({
    action: 'button_click',
    category: 'engagement',
    label: `${buttonName}${location ? ` - ${location}` : ''}`,
  });
};

// Track link clicks
export const trackLinkClick = (linkUrl: string, linkText?: string) => {
  event({
    action: 'link_click',
    category: 'engagement',
    label: linkText || linkUrl,
    value: undefined,
  });
};

// Track download events
export const trackDownload = (fileName: string) => {
  event({
    action: 'file_download',
    category: 'engagement',
    label: fileName,
  });
};

// Track video plays
export const trackVideoPlay = (videoName: string) => {
  event({
    action: 'video_play',
    category: 'engagement',
    label: videoName,
  });
};

// Track outbound links
export const trackOutboundLink = (url: string) => {
  event({
    action: 'outbound_click',
    category: 'engagement',
    label: url,
  });
};

