import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest } from 'next/server';

export default function middleware(request: NextRequest) {
  const response = createMiddleware(routing)(request);
  
  // Force Arabic as default when no locale is specified
  const pathname = request.nextUrl.pathname;
  if (!pathname.startsWith('/ar') && !pathname.startsWith('/en') && !pathname.startsWith('/zh')) {
    const url = request.nextUrl.clone();
    url.pathname = `/ar${pathname}`;
    return Response.redirect(url);
  }
  
  return response;
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
