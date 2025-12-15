export const solutionsData: Record<string, any> = {
    'dental-clinic-software': {
        title: 'Custom Dental Clinic Management Software',
        subtitle: 'Streamline appointments, patient records, and billing with a secure, GDPR-compliant platform.',
        industry: 'Healthcare',
        features: [
            'Real-time Appointment Scheduling',
            'Secure Patient Records (EHR)',
            'Automated Reminder SMS/Email',
            'Billing & Insurance Integration'
        ],
        benefit: 'Reduce admin time by 40% and improved patient retention.',
        image: '/images/solutions/dental.jpg'
    },
    'logistics-fleet-tracking': {
        title: 'Real-Time Fleet Tracking & Logistics Dashboard',
        subtitle: 'Optimize routes, monitor fuel usage, and ensure on-time deliveries across Europe.',
        industry: 'Logistics',
        features: [
            'GPS Real-time Tracking',
            'Route Optimization AI',
            'Driver Performance Metrics',
            'Maintenance Alerts'
        ],
        benefit: 'Save 15% on fuel costs and increase delivery capacity.',
        image: '/images/solutions/logistics.jpg'
    },
    'elearning-platform': {
        title: 'Corporate E-Learning & Training Portal',
        subtitle: 'Onboard employees faster and track compliance training with a custom LMS.',
        industry: 'Education / Corporate',
        features: [
            'Video Course Hosting',
            'Interactive Quizzes',
            'Progress Tracking & Certificates',
            'SAML/SSO Integration'
        ],
        benefit: '50% faster onboarding time for new hires.',
        image: '/images/solutions/elearning.jpg'
    }
};

export function getSolutionBySlug(slug: string) {
    return solutionsData[slug] || null;
}
