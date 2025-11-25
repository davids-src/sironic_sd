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
  const subject = searchParams.get('subject');

  const [formData, setFormData] = useState({
    name: '',
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
        setFormData({ name: '', email: '', service: '', message: '', honeypot: '' });
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
      <div className="space-y-2">
        <Label htmlFor="name">
          Név <span className="text-destructive">*</span>
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
        <Label htmlFor="email">
          E-mail <span className="text-destructive">*</span>
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
          Melyik szolgáltatás iránt érdeklődsz? <span className="text-destructive">*</span>
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
          <option value="">Válassz egy szolgáltatást</option>
          <option value="Minden cégnek legyen informatikusa">Minden cégnek legyen informatikusa</option>
          <option value="Rendszerüzemeltetés és IT karbantartás">Rendszerüzemeltetés és IT karbantartás</option>
          <option value="Hálózatépítés és fejlesztés">Hálózatépítés és fejlesztés</option>
          <option value="IT biztonság és adatvédelem">IT biztonság és adatvédelem</option>
          <option value="Weboldal- és rendszerfejlesztés">Weboldal- és rendszerfejlesztés</option>
          <option value="Kereskedelem – IT eszközök és szoftverek egy kézből">Kereskedelem – IT eszközök és szoftverek</option>
          <option value="Hosting és felhőmegoldások">Hosting és felhőmegoldások</option>
          <option value="Szerviz és javítás – helyszínen vagy postán">Szerviz és javítás</option>
          <option value="IT oktatás és tudásfejlesztés">IT oktatás és tudásfejlesztés</option>
        </select>
        {errors.service && (
          <p id="service-error" className="text-sm text-destructive" role="alert">
            {errors.service}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">
          Üzenet <span className="text-destructive">*</span>
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
          <span>Üzeneted sikeresen elküldve! Hamarosan felvesszük veled a kapcsolatot.</span>
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
            Küldés...
          </>
        ) : (
          'Küldés'
        )}
      </Button>

      <noscript>
        <p className="text-sm text-muted-foreground">
          JavaScript nélkül is elküldheted az üzenetet:{' '}
          <a href="mailto:hello@sironic.hu" className="text-brand-red hover:underline">
            hello@sironic.hu
          </a>
        </p>
      </noscript>
    </form>
  );
}
