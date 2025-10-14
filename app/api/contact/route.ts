import { NextRequest, NextResponse } from 'next/server';
import { validateContactForm, sanitizeInput, ContactFormData } from '@/utils/contact';
import { rateLimit } from '@/utils/rateLimit';

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';

  if (!rateLimit(ip, 5, 60000)) {
    return NextResponse.json(
      { success: false, message: 'Túl sok kérés. Kérjük, várj egy percet.' },
      { status: 429 }
    );
  }

  try {
    const body: ContactFormData = await request.json();

    const validation = validateContactForm(body);

    if (!validation.isValid) {
      return NextResponse.json(
        { success: false, errors: validation.errors },
        { status: 400 }
      );
    }

    const sanitizedData = {
      name: sanitizeInput(body.name),
      email: sanitizeInput(body.email),
      message: sanitizeInput(body.message),
    };

    console.log('Contact form submission:', {
      name: sanitizedData.name,
      email: sanitizedData.email,
      message: sanitizedData.message.substring(0, 100) + '...',
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: 'Üzeneted sikeresen elküldve!',
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Szerver hiba történt. Kérjük, próbáld újra később.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Method not allowed' },
    { status: 405 }
  );
}
