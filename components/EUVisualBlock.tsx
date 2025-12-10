'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useEffect, useState } from 'react';

// Coordinates optimized for abstract Europe map (Approximate relative positions)
const cities = [
    { id: 'budapest', x: 62, y: 63, r: 8, label: 'Budapest' }, // HUB
    { id: 'london', x: 38, y: 47, r: 4 },
    { id: 'paris', x: 42, y: 56, r: 4 },
    { id: 'berlin', x: 55, y: 48, r: 4 },
    { id: 'rome', x: 56, y: 78, r: 4 },
    { id: 'madrid', x: 28, y: 79, r: 4 },
    { id: 'warsaw', x: 65, y: 48, r: 4 },
    { id: 'stockholm', x: 60, y: 28, r: 4 },
    { id: 'vienna', x: 58, y: 60, r: 4 },
    { id: 'amsterdam', x: 45, y: 47, r: 4 },
    { id: 'zurich', x: 50, y: 60, r: 4 },
    { id: 'prague', x: 58, y: 53, r: 4 },
    { id: 'copenhagen', x: 53, y: 40, r: 4 },
    { id: 'oslo', x: 50, y: 28, r: 4 },
    { id: 'helsinki', x: 70, y: 25, r: 4 },
];

const budapest = cities.find(c => c.id === 'budapest')!;
const connections = cities.filter(c => c.id !== 'budapest').map(c => ({
    from: budapest,
    to: c
}));

export function EUVisualBlock() {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-900/50 dark:to-gray-950 rounded-2xl overflow-hidden relative mb-12 border border-gray-100 dark:border-gray-800 group">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_55%,rgba(211,47,47,0.08),transparent_70%)]" />

            <svg
                viewBox="0 0 100 100"
                className="w-full h-full preserve-3d"
                aria-label={t('euBlock.alt', 'Abstract map showing Sironic\'s EU-wide IT service coverage.')}
                role="img"
            >
                <style jsx>{`
                    @keyframes drawLine {
                        to { stroke-dashoffset: 0; opacity: 0.4; }
                    }
                    @keyframes pulse {
                        0% { transform: scale(1); opacity: 0.5; }
                        50% { transform: scale(1.5); opacity: 0.2; }
                        100% { transform: scale(1); opacity: 0.5; }
                    }
                    @keyframes fadeIn {
                        from { opacity: 0; transform: scale(0); }
                        to { opacity: 1; transform: scale(1); }
                    }
                    .city-node {
                        transform-box: fill-box;
                        transform-origin: center;
                    }
                `}</style>

                {/* Simplified Europe Map Outline - Abstract/Geometric Style */}
                <path
                    d="M35 85 L25 80 L20 75 L15 70 L20 60 L28 55 L32 45 L35 40 L34 35 L30 30 L35 25 L40 20 L45 15 L55 10 L65 10 L70 15 L75 25 L80 30 L85 40 L85 50 L80 60 L75 70 L70 80 L65 85 L55 88 L45 88 Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-gray-200 dark:text-gray-800"
                    strokeLinejoin="round"
                    style={{ opacity: 0.5 }}
                />
                <path
                    d="M25 78 L32 65 L40 50 L38 42 L43 45 L48 44 L45 40 L48 35 L55 38 L58 35 L65 25 L68 20 M50 78 L55 70 L60 65 L65 60 L70 65"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.3"
                    className="text-gray-200 dark:text-gray-800"
                    style={{ opacity: 0.3 }}
                />

                {/* Connecting Lines */}
                {connections.map((conn, i) => (
                    <line
                        key={`line-${i}`}
                        x1={conn.from.x}
                        y1={conn.from.y}
                        x2={conn.to.x}
                        y2={conn.to.y}
                        stroke="url(#lineGradient)"
                        strokeWidth="0.3"
                        strokeLinecap="round"
                        strokeDasharray="100"
                        strokeDashoffset="100"
                        style={{
                            opacity: 0,
                            animation: isVisible ? `drawLine 1.5s ease-out forwards ${0.5 + i * 0.05}s` : 'none'
                        }}
                    />
                ))}

                {/* Cities */}
                {cities.map((city, i) => {
                    const isHub = city.id === 'budapest';
                    return (
                        <g key={city.id} className="city-node">
                            {/* Pulse Effect for Hub */}
                            {isHub && (
                                <circle
                                    cx={city.x}
                                    cy={city.y}
                                    r={city.r * 2}
                                    fill="#D32F2F"
                                    style={{
                                        animation: 'pulse 3s infinite ease-in-out'
                                    }}
                                />
                            )}

                            {/* City Dot */}
                            <circle
                                cx={city.x}
                                cy={city.y}
                                r={isHub ? 1.5 : 0.6}
                                fill={isHub ? '#D32F2F' : 'currentColor'}
                                className={`${isHub ? 'text-brand-red' : 'text-gray-400 dark:text-gray-600'} transition-colors duration-300`}
                                style={{
                                    animation: isVisible ? `fadeIn 0.5s ease-out forwards ${i * 0.05}s` : 'none',
                                    opacity: 0
                                }}
                            />

                            {/* Hover Interaction Zone */}
                            <circle
                                cx={city.x}
                                cy={city.y}
                                r={isHub ? 8 : 4}
                                fill="transparent"
                                className="cursor-pointer hover:fill-red-500/10 dark:hover:fill-red-500/20 transition-all duration-300"
                            />
                        </g>
                    );
                })}

                {/* Definitions */}
                <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#D32F2F" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#9CA3AF" stopOpacity="0.1" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
}
