'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { trackContactFormSubmission } from '@/lib/analytics';
import { useTranslation } from '@/hooks/useTranslation';

export function ContactForm() {
  const { t } = useTranslation();
  const searchParams = useSearchParams();
  const subjectParam = searchParams.get('subject');

  useEffect(() => {
    if (subjectParam) {
      // Map legacy subject params to new service keys if possible, or just set it
      // For now, we'll try to match basic ones or default
      // This is a simple logic enhancement
    }
  }, [subjectParam]);
  const subject = searchParams.get('subject');

  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    service: '',
    message: '',
    honeypot: '',
  });

  useEffect(() => {
    if (subject) {
      setFormData(prev => ({ ...prev, message: `Tárgy: ${subject}\n\n` }));
    }
  }, [subject]);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setErrors({ general: data.message || t('contact.form.error') });
        }
      } else {
        setSubmitSuccess(true);
        setFormData({ name: '', companyName: '', email: '', service: '', message: '', honeypot: '' });
        setTimeout(() => setSubmitSuccess(false), 5000);
        // Track successful form submission
        trackContactFormSubmission('contact');
      }
    } catch (error) {
      setErrors({ general: t('contact.form.errors.general') });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">
            {t('contact.form.name')} <span className="text-brand-red">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={errors.name ? 'border-destructive' : ''}
          />
          {errors.name && (
            <p id="name-error" className="text-sm text-destructive" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="companyName">
            {t('contact.form.companyName')}
          </Label>
          <Input
            id="companyName"
            name="companyName"
            type="text"
            value={formData.companyName}
            onChange={handleChange}
            className="bg-background"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">
          {t('contact.form.email')} <span className="text-brand-red">*</span>
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={errors.email ? 'border-destructive' : ''}
        />
        {errors.email && (
          <p id="email-error" className="text-sm text-destructive" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="service">
          {t('contact.form.service')} <span className="text-brand-red">*</span>
        </Label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          aria-required="true"
          aria-invalid={!!errors.service}
          aria-describedby={errors.service ? 'service-error' : undefined}
          className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${errors.service ? 'border-destructive' : ''
            }`}
        >
          <option value="" disabled>
            {t('contact.form.servicePlaceholder')}
          </option>
          <option value="mindenCegnek">{t('contact.form.options.mindenCegnek')}</option>
          <option value="systemOperation">{t('contact.form.options.systemOperation')}</option>
          <option value="networking">{t('contact.form.options.networking')}</option>
          <option value="security">{t('contact.form.options.security')}</option>
          <option value="development">{t('contact.form.options.development')}</option>
          <option value="commerce">{t('contact.form.options.commerce')}</option>
          <option value="hosting">{t('contact.form.options.hosting')}</option>
          <option value="repair">{t('contact.form.options.repair')}</option>
          <option value="training">{t('contact.form.options.training')}</option>
        </select>
        {errors.service && (
          <p id="service-error" className="text-sm text-destructive" role="alert">
            {errors.service}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">
          {t('contact.form.message')} <span className="text-brand-red">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={errors.message ? 'border-destructive' : ''}
        />
        {errors.message && (
          <p id="message-error" className="text-sm text-destructive" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        style={{
          position: 'absolute',
          left: '-9999px',
          width: '1px',
          height: '1px',
        }}
        aria-hidden="true"
      />

      {errors.general && (
        <p className="text-sm text-destructive" role="alert">
          {errors.general}
        </p>
      )}

      {submitSuccess && (
        <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400" role="status">
          <CheckCircle2 className="h-4 w-4" />
          <span>{t('contact.form.success')}</span>
        </div>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-brand-red hover:bg-brand-red/90"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {t('contact.form.submitting')}
          </>
        ) : (
          t('contact.form.submit')
        )}
      </Button>

      <noscript>
        <p className="text-sm text-muted-foreground">
          {t('contact.form.noscript')}{' '}
          <a href="mailto:hello@sironic.hu" className="text-brand-red hover:underline">
            hello@sironic.hu
          </a>
        </p>
      </noscript>
    </form>
  );
}
