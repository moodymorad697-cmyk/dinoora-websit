/**
 * Centralized SEO Configuration
 * This file contains all SEO-related constants and configurations
 * to ensure consistency across the entire application.
 */

export const BASE_URL = 'https://www.dinooratrade.com';

export const LOCALES = ['en', 'ar', 'zh'] as const;
export type Locale = typeof LOCALES[number];

export const DEFAULT_LOCALE: Locale = 'en';

/**
 * Get full URL for a given path and locale
 */
export function getUrl(path: string, locale: Locale = DEFAULT_LOCALE): string {
  return `${BASE_URL}/${locale}${path}`;
}

/**
 * Get canonical URL for a given path and locale
 */
export function getCanonicalUrl(path: string, locale: Locale = DEFAULT_LOCALE): string {
  return `${BASE_URL}/${locale}${path}`;
}

/**
 * Get hreflang URLs for all locales
 */
export function getHreflangUrls(path: string): Record<string, string> {
  const urls: Record<string, string> = {};
  
  LOCALES.forEach(locale => {
    urls[locale] = getUrl(path, locale);
  });
  
  // Add x-default only for homepage
  if (path === '') {
    urls['x-default'] = getUrl('', DEFAULT_LOCALE);
  }
  
  return urls;
}
