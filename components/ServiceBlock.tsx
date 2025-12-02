import React from 'react';
import { cn } from '@/lib/utils';
import { CTAButton } from './CTAButton';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface ServiceBlockProps {
    title: string;
    subtitle: string;
    description: string;
    features: {
        title: string;
        description: string;
        icon?: LucideIcon;
    }[];
    ctaText: string;
    ctaLink: string;
    variant?: 'standard' | 'highlighted';
    className?: string;
}

export function ServiceBlock({
    title,
    subtitle,
    description,
    features,
    ctaText,
    ctaLink,
    variant = 'standard',
    className,
}: ServiceBlockProps) {
    return (
        <section
            className={cn(
                'py-16 md:py-24',
                variant === 'highlighted' ? 'bg-gray-50 dark:bg-gray-900/50' : 'bg-white dark:bg-gray-950',
                className
            )}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-12 flex flex-col items-center text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
                        {title}
                    </h2>
                    <p className="mb-6 max-w-2xl text-lg font-medium text-brand-red">
                        {subtitle}
                    </p>
                    <p className="max-w-3xl text-lg text-gray-600 dark:text-gray-300">
                        {description}
                    </p>
                </div>

                <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-red-100 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-red-900/50"
                        >
                            <div className="mb-4 flex items-center gap-3">
                                {feature.icon && (
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-brand-red transition-colors group-hover:bg-brand-red group-hover:text-white dark:bg-red-900/20 dark:text-red-400 dark:group-hover:bg-brand-red dark:group-hover:text-white">
                                        <feature.icon className="h-5 w-5" />
                                    </div>
                                )}
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    {feature.title}
                                </h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <Link href={ctaLink}>
                        <CTAButton>{ctaText}</CTAButton>
                    </Link>
                </div>
            </div>
        </section>
    );
}
