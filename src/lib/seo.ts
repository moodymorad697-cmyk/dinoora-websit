import type { Metadata } from "next";

const baseUrl = "https://www.dinooratrade.com";
const locales = ['en', 'ar', 'zh'];

/**
 * Generate hreflang and canonical tags for multilingual SEO
 * @param pathname - The path without the locale prefix (e.g., "/about", "/services/sourcing", "" for homepage)
 * @param locale - The current locale
 * @returns Metadata alternates object with hreflang and canonical tags
 */
export function generateSEOMetadata(pathname: string, locale: string): Pick<Metadata, 'alternates'> {
  const alternates = {
    canonical: `${baseUrl}/${locale}${pathname}`,
    languages: {
      'en': `${baseUrl}/en${pathname}`,
      'ar': `${baseUrl}/ar${pathname}`,
      'zh': `${baseUrl}/zh${pathname}`,
      'x-default': pathname === '' ? `${baseUrl}/en` : undefined,
    },
  };

  // Remove undefined x-default for non-homepage pages
  if (pathname !== '') {
    delete (alternates.languages as any)['x-default'];
  }

  return { alternates };
}

/**
 * Get the pathname from the current page context
 * This should be called in generateMetadata with the page's path
 */
export function getPathname(path: string): string {
  // Remove leading slash if present
  return path.startsWith('/') ? path : `/${path}`;
}
