'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
// Standard SVG elements replacing framer-motion
// ... imports
import { SectionTitle } from '@/components/SectionTitle';

// Approximate positions for a stylized map (ViewBox 0 0 800 600)
const countries = [
    { id: 'hu', x: 450, y: 350, label: 'Hungary (HQ)', r: 8, featured: true },
    { id: 'at', x: 380, y: 340, label: 'Austria', r: 6 },
    { id: 'sk', x: 450, y: 300, label: 'Slovakia', r: 5 },
    { id: 'ro', x: 550, y: 380, label: 'Romania', r: 5 },
    { id: 'de', x: 300, y: 280, label: 'Germany', r: 6 },
    { id: 'cz', x: 380, y: 290, label: 'Czechia', r: 5 },
    { id: 'pl', x: 460, y: 220, label: 'Poland', r: 5 },
    { id: 'uk', x: 180, y: 220, label: 'UK / Ireland', r: 5 },
    { id: 'fr', x: 200, y: 350, label: 'France', r: 4, ghost: true },
    { id: 'it', x: 340, y: 460, label: 'Italy', r: 4, ghost: true },
    { id: 'es', x: 120, y: 480, label: 'Spain', r: 4, ghost: true },
    { id: 'nl', x: 260, y: 200, label: 'Netherlands', r: 4, ghost: true },
    { id: 'be', x: 240, y: 230, label: 'Belgium', r: 4, ghost: true },
    { id: 'se', x: 420, y: 120, label: 'Sweden', r: 4, ghost: true },
    { id: 'dk', x: 320, y: 160, label: 'Denmark', r: 4, ghost: true },
    { id: 'hr', x: 400, y: 410, label: 'Croatia', r: 4, ghost: true },
];

export function EuPresenceVisual() {
    const { t } = useTranslation();

    return (
        <section className="py-20 bg-gray-900 text-white overflow-hidden relative">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <div className="order-2 lg:order-1">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                            {t('euPresence.title')}
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            {t('euPresence.subtitle')}
                        </p>

                        <div className="space-y-6">
                            {(t('euPresence.points', []) as string[]).map((point, index) => (
                                <div key={index} className="flex gap-4 items-start">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-red mt-2.5 shrink-0" />
                                    <p className="text-gray-300">{point}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                <span className="text-sm font-medium">Remote-First & On-Site Ready</span>
                            </div>
                        </div>
                    </div>

                    {/* Visual Map */}
                    <div className="order-1 lg:order-2 relative h-[400px] lg:h-[500px] w-full flex items-center justify-center">
                        {/* Abstract Map Background Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-red/5 to-transparent rounded-full blur-3xl transform scale-75" />

                        <svg viewBox="0 0 800 600" className="w-full h-full drop-shadow-2xl">
                            {/* Connections */}
                            {countries.map((country, index) => {
                                if (country.id === 'hu') return null;
                                return (
                                    <line
                                        key={`line-${country.id}`}
                                        x1="450" // Hub X
                                        y1="350" // Hub Y
                                        x2={country.x}
                                        y2={country.y}
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeOpacity="0.2"
                                        className="text-gray-500 transition-opacity duration-1000"
                                    />
                                );
                            })}

                            {/* Active Data Packets */}
                            {countries.map((country, index) => {
                                if (country.id === 'hu') return null;
                                return (
                                    <circle
                                        key={`packet-${country.id}`}
                                        r="3"
                                        fill="#ef4444"
                                        className="text-brand-red"
                                    >
                                        {/* Using Framer Motion for better control instead of SVG animate */}
                                        <animate
                                            attributeName="opacity"
                                            values="0;1;0"
                                            dur="3s"
                                            begin={`${index * 0.5}s`}
                                            repeatCount="indefinite"
                                        />
                                        <animateMotion
                                            dur="3s"
                                            begin={`${index * 0.5}s`}
                                            repeatCount="indefinite"
                                            path={`M450,350 L${country.x},${country.y}`}
                                        />
                                    </circle>
                                )
                            })}

                            {/* City Nodes */}
                            {countries.map((country, index) => (
                                <g key={country.id}>
                                    {/* Pulse Effect for Hub */}
                                    {country.featured && (
                                        <circle cx={country.x} cy={country.y} r={country.r * 4} fill="currentColor" className="text-brand-red opacity-10 animate-ping" />
                                    )}

                                    {/* Node Circle */}
                                    <circle
                                        cx={country.x}
                                        cy={country.y}
                                        r={country.r}
                                        fill={country.featured ? '#ef4444' : '#374151'} // brand-red or gray-700
                                        stroke={country.featured ? '#fff' : '#4b5563'}
                                        strokeWidth="2"
                                        className={`${country.featured ? 'text-brand-red' : 'text-gray-700'} transition-all duration-300 hover:r-8`}
                                    />

                                    {/* Label */}
                                    {!country.ghost && (
                                        <text
                                            x={country.x}
                                            y={country.y + 20}
                                            textAnchor="middle"
                                            fill="currentColor"
                                            fontSize="12"
                                            fontWeight={country.featured ? 'bold' : 'normal'}
                                            className="text-gray-300"
                                            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
                                        >
                                            {country.label}
                                        </text>
                                    )}
                                </g>
                            ))}
                        </svg>
                    </div>

                </div>
            </div>
        </section>
    );
}
