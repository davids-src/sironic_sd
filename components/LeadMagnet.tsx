'use client';

import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Button } from '@/components/ui/button';
import { SectionTitle } from '@/components/SectionTitle';
import { Shield, Cloud, CheckCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

export function LeadMagnet() {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [country, setCountry] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/lead-magnet', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, company, country, checklist: 'eu-smb-security' }),
            });

            if (!response.ok) throw new Error('Failed to submit');

            setIsSuccess(true);
            toast.success(t('leadMagnet.successMessage'));

            // Trigger download
            // window.open('/downloads/sironic-eu-security-checklist.pdf', '_blank');
        } catch (error) {
            toast.error(t('leadMagnet.errorMessage'));
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-20 lg:py-32 bg-gray-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
                </svg>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Content */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/20 text-brand-red text-sm font-semibold mb-6 border border-brand-red/20">
                            <Shield className="h-4 w-4" />
                            <span>EU Cybersecurity Awareness</span>
                        </div>

                        <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                            {t('leadMagnet.title')}
                        </h2>

                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            {t('leadMagnet.description')}
                        </p>

                        <ul className="space-y-4 mb-8">
                            {[
                                'GDPR & Data Protection Scan',
                                'Network Security Vulnerabilities',
                                'Remote Work Risk Assessment',
                                'Backup & Recovery Verification'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <CheckCircle className="h-5 w-5 text-brand-red shrink-0" />
                                    <span className="text-gray-200">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Form Card */}
                    <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl lg:ml-auto max-w-md w-full">
                        {!isSuccess ? (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="text-center mb-6">
                                    <Cloud className="h-10 w-10 text-brand-red mx-auto mb-2" />
                                    <h3 className="text-xl font-bold">{t('leadMagnet.subtitle')}</h3>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        {t('leadMagnet.form.email')}
                                    </label>
                                    <Input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder={t('leadMagnet.form.emailPlaceholder')}
                                        className="w-full bg-gray-50 mb-3"
                                    />

                                    <label className="block text-sm font-medium text-gray-700 mb-1 mt-3">
                                        {t('leadMagnet.form.company')}
                                    </label>
                                    <Input
                                        type="text"
                                        required
                                        value={company}
                                        onChange={(e) => setCompany(e.target.value)}
                                        placeholder={t('leadMagnet.form.companyPlaceholder')}
                                        className="w-full bg-gray-50"
                                    />

                                    <label className="block text-sm font-medium text-gray-700 mb-1 mt-3">
                                        {t('leadMagnet.form.country')}
                                    </label>
                                    <Input
                                        type="text"
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
                                        placeholder={t('leadMagnet.form.countryPlaceholder')}
                                        className="w-full bg-gray-50"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-brand-red hover:bg-red-700 text-white h-12 text-lg font-semibold shadow-lg shadow-red-500/30"
                                >
                                    {isSubmitting ? t('leadMagnet.form.submitting') : t('leadMagnet.form.submit')}
                                </Button>

                                <p className="text-xs text-gray-500 text-center mt-4 flex items-center justify-center gap-1">
                                    <Shield className="h-3 w-3" />
                                    {t('leadMagnet.form.privacy')}
                                </p>
                            </form>
                        ) : (
                            <div className="text-center py-8">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle className="h-8 w-8 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Success!</h3>
                                <p className="text-gray-600 mb-6">{t('leadMagnet.successMessage')}</p>
                                <Button variant="outline" className="w-full" asChild>
                                    <a href="/downloads/sironic-checklist.pdf" download>
                                        Download PDF Now
                                    </a>
                                </Button>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
}
