export interface ContactFormData {
  name: string;
  companyName?: string;
  email: string;
  service: string;
  message: string;
  honeypot?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: { [key: string]: string };
}

export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: { [key: string]: string } = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'A név legalább 2 karakter hosszú kell legyen';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    errors.email = 'Érvényes e-mail címet adj meg';
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Az üzenet legalább 10 karakter hosszú kell legyen';
  }

  if (!data.service || data.service.trim().length === 0) {
    errors.service = 'Válassz egy szolgáltatást';
  }

  if (data.honeypot && data.honeypot.trim().length > 0) {
    errors.honeypot = 'Spam detected';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '')
    .trim()
    .slice(0, 5000);
}
