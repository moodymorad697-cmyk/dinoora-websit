import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest } from 'next/server';

export default function middleware(request: NextRequest) {
  const hostname = request.nextUrl.hostname;
  const pathname = request.nextUrl.pathname;
  const protocol = request.nextUrl.protocol;
  
  // Force HTTPS redirect (308 permanent redirect)
  if (protocol === 'http:') {
    const url = request.nextUrl.clone();
    url.protocol = 'https:';
    return Response.redirect(url, 308);
  }
  
  // Force www redirect (308 permanent redirect)
  if (hostname === 'dinooratrade.com') {
    const url = request.nextUrl.clone();
    url.hostname = 'www.dinooratrade.com';
    return Response.redirect(url, 308);
  }

  // This country page is Arabic-only; avoid serving Arabic copy from an English URL.
  if (
    pathname === '/en/countries/saudi-arabia' ||
    pathname.startsWith('/en/countries/saudi-arabia/')
  ) {
    const url = request.nextUrl.clone();
    url.pathname = `/ar${pathname.slice(3)}`;
    return Response.redirect(url, 308);
  }

  // Keep previously indexed Chinese-locale URLs available under the Arabic default locale.
  if (pathname === '/zh' || pathname.startsWith('/zh/')) {
    const url = request.nextUrl.clone();
    url.pathname = `/ar${pathname.slice(3)}`;
    return Response.redirect(url, 308);
  }
  
  // Redirect root to Arabic locale
  if (pathname === '/') {
    const url = request.nextUrl.clone();
    url.pathname = '/ar';
    return Response.redirect(url, 308);
  }
  
  const response = createMiddleware(routing)(request);
  
  // Add x-pathname header for canonical URL generation
  response.headers.set('x-pathname', pathname);
  
  return response;
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
