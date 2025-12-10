import { NextRequest, NextResponse } from 'next/server';
import { validateContactForm, sanitizeInput, ContactFormData } from '@/utils/contact';
import { rateLimit } from '@/utils/rateLimit';

const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL || 'https://discord.com/api/webhooks/1435287913402208468/N1uRR3hpu9P7kIi3uXJEi7aq2jRsS96r4nYIQiL-MM7ZTy1xtJpyNYgRt3ZVRObOSU5i';

async function sendDiscordNotification(data: {
  name: string;
  companyName?: string;
  email: string;
  service: string;
  message: string;
  timestamp: string;
  ipAddress: string;
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
        name: '🏢 Cégnév',
        value: data.companyName || 'Nincs megadva',
        inline: true,
      },
      {
        name: '📧 Email',
        value: data.email,
        inline: true,
      },
      {
        name: '🛠️ Szolgáltatás',
        value: data.service,
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
      {
        name: '🌐 IP Cím',
        value: data.ipAddress,
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
        avatar_url: 'https://sironic.hu/logo_rgb.svg',
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
      companyName: body.companyName ? sanitizeInput(body.companyName) : undefined,
      email: sanitizeInput(body.email),
      service: sanitizeInput(body.service),
      message: sanitizeInput(body.message),
    };

    const timestamp = new Date().toISOString();

    // Send Discord notification
    const discordSuccess = await sendDiscordNotification({
      name: sanitizedData.name,
      companyName: sanitizedData.companyName,
      email: sanitizedData.email,
      service: sanitizedData.service,
      message: sanitizedData.message,
      timestamp: timestamp,
      ipAddress: ip,
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

export async function GET(request: NextRequest) {
  // Test endpoint to check Discord webhook configuration
  const test = request.nextUrl.searchParams.get('test');

  if (test === 'discord') {
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL || DISCORD_WEBHOOK_URL;

    if (!webhookUrl) {
      return NextResponse.json(
        {
          status: 'error',
          message: 'Discord webhook URL nincs beállítva',
          webhookConfigured: false,
        },
        { status: 200 }
      );
    }

    // Try to send a test message
    try {
      const testEmbed = {
        title: '🧪 Discord Webhook Teszt',
        description: 'Ez egy teszt üzenet a SIRONIC weboldalról.',
        color: 0xff0000,
        fields: [
          {
            name: '⏰ Időpont',
            value: `<t:${Math.floor(Date.now() / 1000)}:F>`,
            inline: true,
          },
          {
            name: '✅ Státusz',
            value: 'Webhook működik!',
            inline: true,
          },
        ],
        footer: {
          text: 'SIRONIC Rendszerház - Webhook Teszt',
        },
        timestamp: new Date().toISOString(),
      };

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: 'SIRONIC Weboldal',
          avatar_url: 'https://sironic.hu/logo_rgb.svg',
          embeds: [testEmbed],
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        return NextResponse.json(
          {
            status: 'error',
            message: 'Discord webhook hiba történt',
            webhookConfigured: true,
            webhookUrl: webhookUrl.substring(0, 30) + '...', // Only show first 30 chars for security
            error: {
              status: response.status,
              statusText: response.statusText,
              details: errorText.substring(0, 200),
            },
          },
          { status: 200 }
        );
      }

      return NextResponse.json(
        {
          status: 'success',
          message: 'Discord webhook sikeresen működik!',
          webhookConfigured: true,
          webhookUrl: webhookUrl.substring(0, 30) + '...', // Only show first 30 chars for security
        },
        { status: 200 }
      );
    } catch (error: any) {
      return NextResponse.json(
        {
          status: 'error',
          message: 'Discord webhook hiba történt',
          webhookConfigured: true,
          webhookUrl: webhookUrl.substring(0, 30) + '...',
          error: error.message || 'Ismeretlen hiba',
        },
        { status: 200 }
      );
    }
  }

  return NextResponse.json(
    { message: 'Method not allowed' },
    { status: 405 }
  );
}
