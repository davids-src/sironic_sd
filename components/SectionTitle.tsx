import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

export function SectionTitle({
  title,
  subtitle,
  className,
  align = 'center',
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        'mb-12 flex flex-col gap-4',
        {
          'items-center text-center': align === 'center',
          'items-start text-left': align === 'left',
          'items-end text-right': align === 'right',
        },
        className
      )}
    >
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          {subtitle}
        </p>
      )}
      <div className="h-1 w-20 rounded-full bg-brand-red" />
    </div>
  );
}
