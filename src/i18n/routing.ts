import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['ar', 'en', 'zh'],
  defaultLocale: 'ar',
  localePrefix: 'always'
});
