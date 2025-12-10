import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['hu', 'en', 'de', 'sk', 'ro', 'hr', 'sl', 'fr', 'it', 'es'];
const defaultLocale = 'en'; // Global default as per requirements

// Bot user agents to avoid redirecting (basic list)
const BOT_AGENTS = [
  'googlebot', 'bingbot', 'yandex', 'baiduspider', 'twitterbot', 'facebookexternalhit',
  'rogerbot', 'linkedinbot', 'embedly', 'quora link preview', 'showyoubot', 'outbrain',
  'pinterest', 'slackbot', 'vkShare', 'W3C_Validator', 'whatsapp', 'redditbot', 'applebot',
  'flipboard', 'tumblr', 'bitlybot', 'skypeuripreview', 'nuzzel', 'discordbot',
  'google page speed', 'qwantify', 'xing-content', 'telegrambot', 'chrome-lighthouse'
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Skip static files and special paths
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') ||
    pathname === '/favicon.ico' ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml'
  ) {
    return NextResponse.next();
  }

  // 2. Check if the URL already has a locale
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    // URL Rewriting: Map localized URLs to Hungarian directory structure
    // This allows /de/preise to work even though the directory is /de/arak
    const urlRewriteMap: Record<string, string> = {
      // English
      '/en/pricing': '/en/arak',
      '/en/about-us': '/en/rolunk',
      '/en/services': '/en/szolgaltatasok',
      '/en/products': '/en/termekeink',
      '/en/contact': '/en/kapcsolat',
      // German
      '/de/preise': '/de/arak',
      '/de/uber-uns': '/de/rolunk',
      '/de/dienstleistungen': '/de/szolgaltatasok',
      '/de/produkte': '/de/termekeink',
      '/de/kontakt': '/de/kapcsolat',
      // Slovak
      '/sk/cennik': '/sk/arak',
      '/sk/o-nas': '/sk/rolunk',
      '/sk/sluzby': '/sk/szolgaltatasok',
      '/sk/produkty': '/sk/termekeink',
      '/sk/kontakt': '/sk/kapcsolat',
      // Romanian
      '/ro/preturi': '/ro/arak',
      '/ro/despre-noi': '/ro/rolunk',
      '/ro/servicii': '/ro/szolgaltatasok',
      '/ro/produse': '/ro/termekeink',
      '/ro/contact': '/ro/kapcsolat',
      // Croatian
      '/hr/cjenik': '/hr/arak',
      '/hr/o-nama': '/hr/rolunk',
      '/hr/usluge': '/hr/szolgaltatasok',
      '/hr/proizvodi': '/hr/termekeink',
      '/hr/kontakt': '/hr/kapcsolat',
      // Slovenian
      '/sl/cenik': '/sl/arak',
      '/sl/o-nas': '/sl/rolunk',
      '/sl/storitve': '/sl/szolgaltatasok',
      '/sl/produkti': '/sl/termekeink',
      '/sl/kontakt': '/sl/kapcsolat',
      // French
      '/fr/tarifs': '/fr/arak',
      '/fr/a-propos': '/fr/rolunk',
      '/fr/services': '/fr/szolgaltatasok',
      '/fr/produits': '/fr/termekeink',
      '/fr/contact': '/fr/kapcsolat',
      // Italian
      '/it/prezzi': '/it/arak',
      '/it/chi-siamo': '/it/rolunk',
      '/it/servizi': '/it/szolgaltatasok',
      '/it/prodotti': '/it/termekeink',
      '/it/contatti': '/it/kapcsolat',
      // Spanish
      '/es/precios': '/es/arak',
      '/es/sobre-nosotros': '/es/rolunk',
      '/es/servicios': '/es/szolgaltatasok',
      '/es/productos': '/es/termekeink',
      '/es/contacto': '/es/kapcsolat',
      '/es/privacidad': '/es/adatvedelem',
      // Privacy pages for all locales
      '/en/privacy-policy': '/en/adatvedelem',
      '/de/datenschutz': '/de/adatvedelem',
      '/sk/ochrana-udajov': '/sk/adatvedelem',
      '/ro/confidentialitate': '/ro/adatvedelem',
      '/hr/zastita-podataka': '/hr/adatvedelem',
      '/sl/zasebnost': '/sl/adatvedelem',
      '/fr/politique-de-confidentialite': '/fr/adatvedelem',
      '/it/privacy': '/it/adatvedelem',
    };

    // Check if this URL needs to be rewritten
    const rewritePath = urlRewriteMap[pathname];
    if (rewritePath) {
      // Rewrite the URL to the Hungarian directory structure
      // This is transparent to the user - they see /de/preise but we serve /de/arak
      const url = request.nextUrl.clone();
      url.pathname = rewritePath;
      return NextResponse.rewrite(url);
    }

    // If we're on a localized path that doesn't need rewriting, just let it pass
    return NextResponse.next();
  }

  // 3. Bot Detection: If it's a bot hitting the root, just serve default (or strict default 'hu' if preferred, but 'en' is safe)
  // Actually, standard behavior for bots at root is often to redirect to the canonical "x-default" or default language.
  // We will let the standard detection flow happen, but ensuring we don't do weird geo-redirects if not needed.
  // However, requirements say "Do not redirect bots". 
  // If we are at root `/`, we HAVE to redirect to `/[locale]` because content is there. 
  // So we will allow redirect for bots but stick to a stable default (e.g., 'en' or 'hu') to avoid churn.
  const userAgent = request.headers.get('user-agent')?.toLowerCase() || '';
  const isBot = BOT_AGENTS.some(bot => userAgent.includes(bot));

  if (isBot) {
    // Redirect bots to a stable default (English or Hungarian) to ensure indexing
    return NextResponse.redirect(new URL(`/${defaultLocale}${pathname}`, request.url));
  }

  // 4. Check for saved locale in cookie (Manual Override)
  const savedLocale = request.cookies.get('NEXT_LOCALE')?.value;
  if (savedLocale && locales.includes(savedLocale as any)) {
    return NextResponse.redirect(new URL(`/${savedLocale}${pathname}`, request.url));
  }

  // 5. Browser Language Detection (Priority 1)
  let targetLocale: string | null = null;
  const acceptLanguage = request.headers.get('accept-language');

  if (acceptLanguage) {
    // Parse Q-values: "en-US,en;q=0.9,ro;q=0.8"
    const languages = acceptLanguage.split(',')
      .map((lang) => {
        const [tag, qValue] = lang.split(';');
        const q = qValue ? parseFloat(qValue.split('=')[1]) : 1.0;
        return { tag: tag.trim().toLowerCase(), q };
      })
      .sort((a, b) => b.q - a.q);

    // Find first supported language
    for (const lang of languages) {
      // Check for exact match (e.g., "hu") or prefix match (e.g., "hu-HU" -> "hu")
      const baseLang = lang.tag.split('-')[0];
      if (locales.includes(baseLang)) {
        targetLocale = baseLang;
        break;
      }
    }
  }

  // 6. GeoIP Detection (Priority 2 - if no browser match)
  if (!targetLocale) {
    const country = request.geo?.country ||
      request.headers.get('x-vercel-ip-country') ||
      request.headers.get('cf-ipcountry');

    if (country) {
      switch (country.toUpperCase()) {
        case 'HU': // Hungary
          targetLocale = 'hu';
          break;
        case 'HR': // Croatia
        case 'BA': // Bosnia
        case 'ME': // Montenegro
        case 'RS': // Serbia
          targetLocale = 'hr';
          break;
        case 'SI': // Slovenia
          targetLocale = 'sl';
          break;
        case 'SK': // Slovakia
          targetLocale = 'sk';
          break;
        case 'RO': // Romania
        case 'MD': // Moldova
          targetLocale = 'ro';
          break;
        case 'DE': // Germany
        case 'AT': // Austria
        case 'CH': // Switzerland
          targetLocale = 'de';
          break;
        case 'FR': // France
        case 'BE': // Belgium
        case 'MC': // Monaco
        case 'LU': // Luxembourg
          targetLocale = 'fr';
          break;
        case 'IT': // Italy
        case 'SM': // San Marino
        case 'VA': // Vatican
          targetLocale = 'it';
          break;
        case 'ES': // Spain
        case 'MX': // Mexico
        case 'AR': // Argentina (and other LATAM potentially)
        case 'CL': // Chile
        case 'CO': // Colombia
        case 'PE': // Peru
          targetLocale = 'es';
          break;
        default:
          targetLocale = 'en'; // Rest of the world -> English
          break;
      }
    }
  }

  // 7. Fallback
  if (!targetLocale) {
    targetLocale = defaultLocale;
  }

  return NextResponse.redirect(new URL(`/${targetLocale}${pathname}`, request.url));
}

export const config = {
  matcher: ['/((?!_next|api|static|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)'],
};
