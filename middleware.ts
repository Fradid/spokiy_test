import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

function detectLocale(request: NextRequest): 'ua' | 'en' {
  // 1. Check cookie
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value as 'ua' | 'en' | undefined;
  if (cookieLocale && routing.locales.includes(cookieLocale)) {
    return cookieLocale;
  }

  // 2. Check Accept-Language header
  const acceptLang = request.headers.get('accept-language');
  if (acceptLang) {
    const accepted = acceptLang.split(',').map(l => l.split(';')[0].trim());
    for (const lang of accepted) {
      if (routing.locales.includes(lang as 'ua' | 'en')) {
        return lang as 'ua' | 'en';
      }
    }
  }

  // 3. Fallback
  return routing.defaultLocale;
}

export function middleware(request: NextRequest) {
  const locale = detectLocale(request);

  const response = createMiddleware(routing)(request);

  // Set cookie if missing
  if (!request.cookies.get('NEXT_LOCALE')) {
    response.cookies.set('NEXT_LOCALE', locale, { path: '/' });
  }

  return response;
}

export const config = {
  matcher: ['/', '/(ua|en)/:path*'],
};
