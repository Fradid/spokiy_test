import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

// const intlMiddleware = createMiddleware(routing);

// export default function middleware(request) {
//   const { pathname } = request.nextUrl;

//   // Redirect /uk and /uk/* to default root (/)
//   if (pathname === '/uk' || pathname.startsWith('/uk/')) {
//     const newPathname = pathname.replace(/^\/uk/, '') || '/';
//     return NextResponse.redirect(new URL(newPathname, request.url));
//   }

//   return intlMiddleware(request);
// }

export const config = {
  matcher: ['/', '/(uk|en)', '/(uk|en)/:path*']
};
