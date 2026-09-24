import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest } from 'next/server';

export default function middleware(request: NextRequest) {
  const hostname = request.nextUrl.hostname;
  const pathname = request.nextUrl.pathname;
  
  // Force www redirect (308 permanent redirect)
  if (hostname === 'dinooratrade.com') {
    const url = request.nextUrl.clone();
    url.hostname = 'www.dinooratrade.com';
    return Response.redirect(url, 308);
  }
  
  // Redirect root to Arabic locale
  if (pathname === '/') {
    const url = request.nextUrl.clone();
    url.pathname = '/ar';
    return Response.redirect(url, 307);
  }
  
  const response = createMiddleware(routing)(request);
  
  return response;
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
