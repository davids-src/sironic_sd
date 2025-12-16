/**
 * FAQ Schema Component
 * Schema.org/FAQPage structured data for FAQ sections
 * Optimized for AI-SEO: enables FAQ rich snippets in Google search results
 * and provides structured answers for AI search engines (Google SGE, Bing AI, Perplexity)
 */

'use client';

import { SEO } from '../SEO';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSchemaProps {
    faqs: FAQItem[];
    url?: string;
}

export function FAQSchema({ faqs, url }: FAQSchemaProps) {
    if (!faqs || faqs.length === 0) {
        return null;
    }

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sironic.eu';
    const schemaUrl = url ? `${baseUrl}${url}#faq` : `${baseUrl}/#faq`;

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        '@id': schemaUrl,
        mainEntity: faqs.map((faq, index) => ({
            '@type': 'Question',
            '@id': `${schemaUrl}#question-${index + 1}`,
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };

    return <SEO jsonLd={schema} />;
}
