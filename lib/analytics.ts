// Google Analytics utility functions

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
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
