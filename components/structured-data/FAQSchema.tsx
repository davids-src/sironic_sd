/**
 * FAQ Schema Component
 * Schema.org/FAQPage structured data for FAQ sections
 * Enables FAQ rich snippets in Google search results
 */

'use client';

import { SEO } from '../SEO';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSchemaProps {
    faqs: FAQItem[];
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
    if (!faqs || faqs.length === 0) {
        return null;
    }

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };

    return <SEO jsonLd={schema} />;
}
