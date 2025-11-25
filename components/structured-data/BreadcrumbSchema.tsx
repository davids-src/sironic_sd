/**
 * Breadcrumb Schema Component
 * Schema.org/BreadcrumbList structured data for navigation
 * Enables breadcrumb rich snippets in Google search results
 */

'use client';

import { SEO } from '../SEO';

interface BreadcrumbItem {
    name: string;
    url: string;
}

interface BreadcrumbSchemaProps {
    items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
    if (!items || items.length === 0) {
        return null;
    }

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };

    return <SEO jsonLd={schema} />;
}
