'use client';

import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Button } from '@/components/ui/button';
import { SectionTitle } from '@/components/SectionTitle';
import { Calendar, Clock, Video, CheckCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { toast } from 'sonner';

export function BookingForm() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        dateRange: '',
        timezone: '',
        topic: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/booking', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error('Failed to submit');

            setIsSuccess(true);
            toast.success(t('booking.successMessage'));

            // Analytics tracking
            if (typeof window !== 'undefined' && (window as any).gtag) {
                (window as any).gtag('event', 'booking_submit', {
                    topic: formData.topic
                });
            }
        } catch (error) {
            toast.error(t('booking.errorMessage'));
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <section className="py-20 lg:py-32 bg-white dark:bg-gray-950" id="booking">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* Left Column: Info */}
                    <div>
                        <SectionTitle
                            title={t('booking.title')}
                            subtitle={t('booking.subtitle')}
                            align="left"
                        />

                        <div className="mt-8 space-y-6">
                            <div className="flex gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800">
                                <div className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm shrink-0 h-fit">
                                    <Video className="h-6 w-6 text-brand-red" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">Video Call or Phone</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Google Meet, Zoom, or direct phone call.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800">
                                <div className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm shrink-0 h-fit">
                                    <Clock className="h-6 w-6 text-brand-red" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">15-30 Minutes</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Efficient, focused discussion about your needs.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800">
                                <div className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm shrink-0 h-fit">
                                    <CheckCircle className="h-6 w-6 text-brand-red" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">No Sales Pressure</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Just technical advice and feasibility check.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <Card className="p-6 md:p-8 shadow-xl border-gray-200 dark:border-gray-800">
                        {!isSuccess ? (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-1.5">{t('booking.form.name')}</label>
                                        <Input
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder={t('booking.form.namePlaceholder')}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1.5">{t('booking.form.email')}</label>
                                        <Input
                                            name="email"
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder={t('booking.form.emailPlaceholder')}
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-1.5">{t('booking.form.company')}</label>
                                        <Input
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            placeholder={t('booking.form.companyPlaceholder')}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1.5">{t('booking.form.phone')}</label>
                                        <Input
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder={t('booking.form.phonePlaceholder')}
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-1.5">{t('booking.form.dateRange')}</label>
                                        <Input
                                            name="dateRange"
                                            required
                                            value={formData.dateRange}
                                            onChange={handleChange}
                                            placeholder={t('booking.form.dateRangePlaceholder')}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1.5">{t('booking.form.timezone')}</label>
                                        <Input
                                            name="timezone"
                                            required
                                            value={formData.timezone}
                                            onChange={handleChange}
                                            placeholder={t('booking.form.timezonePlaceholder')}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1.5">{t('booking.form.topic')}</label>
                                    <Textarea
                                        name="topic"
                                        required
                                        value={formData.topic}
                                        onChange={handleChange}
                                        placeholder={t('booking.form.topicPlaceholder')}
                                        className="min-h-[100px]"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full h-12 text-lg font-semibold bg-brand-red hover:bg-red-700 text-white"
                                >
                                    {isSubmitting ? t('booking.form.submitting') : t('booking.form.submit')}
                                </Button>
                            </form>
                        ) : (
                            <div className="text-center py-12 flex flex-col items-center justify-center h-full">
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle className="h-10 w-10 text-green-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Request Received!</h3>
                                <p className="text-gray-600 dark:text-gray-300 max-w-xs mx-auto mb-8">{t('booking.successMessage')}</p>
                                <Button variant="outline" onClick={() => setIsSuccess(false)}>Book Another Call</Button>
                            </div>
                        )}
                    </Card>

                </div>
            </div>
        </section>
    );
}
