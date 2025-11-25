/**
 * SEO Component for Next.js App Router
 * 
 * Note: This component is for client-side JSON-LD structured data only.
 * For meta tags, use Next.js Metadata API in layout.tsx and page.tsx files.
 */

'use client';

interface SEOProps {
    jsonLd?: object | object[];
}

export const SEO: React.FC<SEOProps> = ({ jsonLd }) => {
    if (!jsonLd) return null;

    const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd];

    return (
        <>
            {schemas.map((schema, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
        </>
    );
};
