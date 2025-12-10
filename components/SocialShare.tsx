'use client';

import { Facebook, Linkedin } from 'lucide-react';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

interface SocialShareProps {
    className?: string;
}

export function SocialShare({ className = '' }: SocialShareProps) {
    const [shareUrl, setShareUrl] = useState('');
    const params = useParams();
    const locale = (params?.locale as string) || 'hu';

    useEffect(() => {
        setShareUrl(window.location.href);
    }, []);

    const shareLinks = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent('SIRONIC Rendszerház - Professional IT Services')}`
    };

    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <a
                href={shareLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-brand-red hover:text-white transition-all duration-300 group"
                aria-label="Share on Facebook"
            >
                <Facebook className="h-4 w-4" />
            </a>
            <a
                href={shareLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-brand-red hover:text-white transition-all duration-300 group"
                aria-label="Share on LinkedIn"
            >
                <Linkedin className="h-4 w-4" />
            </a>
            <a
                href={shareLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-brand-red hover:text-white transition-all duration-300 group"
                aria-label="Share on X (Twitter)"
            >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            </a>
        </div>
    );
}
