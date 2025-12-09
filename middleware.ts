import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Only Hungarian is active, but translations remain in code for future use
const locales = ['hu', 'en', 'de', 'sk', 'ro', 'hr'];
const defaultLocale = 'hu';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip for static files and special routes
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

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }



  // Check for saved locale in cookie
  const savedLocale = request.cookies.get('NEXT_LOCALE')?.value;
  if (savedLocale && locales.includes(savedLocale as any)) {
    return NextResponse.redirect(new URL(`/${savedLocale}${pathname}`, request.url));
  }

  // GeoIP detection
  const country = request.geo?.country ||
    request.headers.get('x-vercel-ip-country') ||
    request.headers.get('cf-ipcountry');

  let targetLocale = defaultLocale;

  if (country) {
    switch (country.toUpperCase()) {
      case 'DE': // Germany
      case 'AT': // Austria
      case 'CH': // Switzerland
        targetLocale = 'de';
        break;
      case 'SK': // Slovakia
        targetLocale = 'sk';
        break;
      case 'RO': // Romania
      case 'MD': // Moldova
        targetLocale = 'ro';
        break;
      case 'HR': // Croatia
      case 'BA': // Bosnia
      case 'ME': // Montenegro (often understands Croatian)
      case 'RS': // Serbia (often understands Croatian, though Cyrillic is used too, but for Latin script HR/EN is safe) - actually let's stick to HR for HR
        targetLocale = 'hr';
        break;
      case 'GB': // United Kingdom
      case 'US': // USA
      case 'CA': // Canada
      case 'AU': // Australia
        targetLocale = 'en';
        break;
      case 'HU': // Hungary
        targetLocale = 'hu';
        break;
      default:
        // Fallback to Accept-Language if GeoIP gives a country we don't have specific logic for
        // but we might want to default to English for international visitors?
        // For now, let's check Accept-Language
        break;
    }
  }

  // Accept-Language fallback if GeoIP didn't find a match or wasn't present
  if (targetLocale === defaultLocale) {
    const acceptLanguage = request.headers.get('accept-language');
    if (acceptLanguage) {
      // Simple check for primary language
      if (acceptLanguage.includes('de')) targetLocale = 'de';
      else if (acceptLanguage.includes('sk')) targetLocale = 'sk';
      else if (acceptLanguage.includes('ro')) targetLocale = 'ro';
      else if (acceptLanguage.includes('hr')) targetLocale = 'hr';
      else if (acceptLanguage.includes('en')) targetLocale = 'en';
      // hu is default
    }
  }

  const newUrl = new URL(`/${targetLocale}${pathname}`, request.url);
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: ['/((?!_next|api|static|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)'],
};
