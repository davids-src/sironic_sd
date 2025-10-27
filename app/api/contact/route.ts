import { NextRequest, NextResponse } from 'next/server';
import { validateContactForm, sanitizeInput, ContactFormData } from '@/utils/contact';
import { rateLimit } from '@/utils/rateLimit';

const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL || '';

async function sendDiscordNotification(data: {
  name: string;
  email: string;
  message: string;
  timestamp: string;
}) {
  const embed = {
    title: '🔔 Új kapcsolati üzenet',
    color: 0xff0000, // Red color for SIRONIC brand
    fields: [
      {
        name: '👤 Név',
        value: data.name,
        inline: true,
      },
      {
        name: '📧 Email',
        value: data.email,
        inline: true,
      },
      {
        name: '📝 Üzenet',
        value: data.message.length > 1000 ? data.message.substring(0, 1000) + '...' : data.message,
        inline: false,
      },
      {
        name: '⏰ Időpont',
        value: `<t:${Math.floor(new Date(data.timestamp).getTime() / 1000)}:F>`,
        inline: true,
      },
    ],
    footer: {
      text: 'SIRONIC Rendszerház - Kapcsolati űrlap',
    },
    timestamp: data.timestamp,
  };

  if (!DISCORD_WEBHOOK_URL) {
    console.warn('Discord webhook URL not configured');
    return false;
  }

  try {
    const response = await fetch(DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'SIRONIC Weboldal',
        avatar_url: 'https://sironic.hu/images/logo.png',
        embeds: [embed],
      }),
    });

    if (!response.ok) {
      console.error('Discord webhook failed:', response.status, await response.text());
      return false;
    }

    return true;
  } catch (error) {
    console.error('Discord webhook error:', error);
    return false;
  }
}

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

    const timestamp = new Date().toISOString();

    // Send Discord notification
    const discordSuccess = await sendDiscordNotification({
      name: sanitizedData.name,
      email: sanitizedData.email,
      message: sanitizedData.message,
      timestamp: timestamp,
    });

    console.log('Contact form submission:', {
      name: sanitizedData.name,
      email: sanitizedData.email,
      message: sanitizedData.message.substring(0, 100) + '...',
      timestamp: timestamp,
      discordSent: discordSuccess,
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
