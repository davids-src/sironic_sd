'use client';

import { createContext, useContext, ReactNode } from 'react';

type TranslationsContextType = {
    messages: any;
    locale: string;
};

const TranslationsContext = createContext<TranslationsContextType | null>(null);

export function TranslationsProvider({
    children,
    messages,
    locale,
}: {
    children: ReactNode;
    messages: any;
    locale: string;
}) {
    return (
        <TranslationsContext.Provider value={{ messages, locale }}>
            {children}
        </TranslationsContext.Provider>
    );
}

export function useTranslationsContext() {
    const context = useContext(TranslationsContext);
    if (!context) {
        throw new Error('useTranslationsContext must be used within a TranslationsProvider');
    }
    return context;
}
