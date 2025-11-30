'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { useParams, usePathname } from 'next/navigation';

interface BreadcrumbItem {
    label: string;
    href: string;
}

export function Breadcrumbs({ items }: { items?: BreadcrumbItem[] }) {
    const { t } = useTranslation();
    const params = useParams();
    const locale = (params?.locale as string) || 'hu';
    const pathname = usePathname();

    // If items are provided, use them. Otherwise, try to generate from pathname (basic implementation)
    // For this project, passing items explicitly is safer due to localization.

    if (!items) {
        return null;
    }

    return (
        <nav aria-label="Breadcrumb" className="flex items-center text-sm text-muted-foreground mb-6">
            <ol className="flex items-center space-x-2">
                <li>
                    <Link
                        href={`/${locale}`}
                        className="flex items-center hover:text-brand-red transition-colors"
                        title={t('nav.home')}
                    >
                        <Home className="h-4 w-4" />
                        <span className="sr-only">{t('nav.home')}</span>
                    </Link>
                </li>
                {items.map((item, index) => (
                    <li key={item.href} className="flex items-center">
                        <ChevronRight className="h-4 w-4 mx-1" />
                        {index === items.length - 1 ? (
                            <span className="font-medium text-foreground" aria-current="page">
                                {item.label}
                            </span>
                        ) : (
                            <Link
                                href={item.href}
                                className="hover:text-brand-red transition-colors"
                            >
                                {item.label}
                            </Link>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
