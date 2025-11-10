import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Only Hungarian is active, but translations remain in code for future use
const locales = ['hu', 'en', 'de', 'sk', 'ro'];
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

  // Blog stays without locale (Hungarian only)
  if (pathname === '/blog' || pathname.startsWith('/blog/')) {
    return NextResponse.next();
  }

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Always redirect to /hu/ (Hungarian only for now)
  const newUrl = new URL(`/hu${pathname}`, request.url);
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: ['/((?!_next|api|static|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)'],
};
