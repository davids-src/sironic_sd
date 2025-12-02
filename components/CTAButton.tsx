import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'default' | 'outline' | 'ghost' | 'secondary' | 'link' | 'destructive';
    size?: 'default' | 'sm' | 'lg' | 'icon';
    showArrow?: boolean;
    className?: string;
    asChild?: boolean;
}

export const CTAButton = React.forwardRef<HTMLButtonElement, CTAButtonProps>(
    ({ children, className, variant = 'default', size = 'lg', showArrow = true, ...props }, ref) => {
        return (
            <Button
                ref={ref}
                variant={variant}
                size={size}
                className={cn(
                    'group font-semibold transition-all duration-300',
                    variant === 'default' && 'bg-brand-red hover:bg-red-700 text-white shadow-lg hover:shadow-xl',
                    className
                )}
                {...props}
            >
                {children}
                {showArrow && (
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                )}
            </Button>
        );
    }
);

CTAButton.displayName = 'CTAButton';
