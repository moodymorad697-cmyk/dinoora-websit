"use client";

import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

export default function Canonical() {
  const pathname = usePathname();
  const locale = useLocale();
  
  // Remove locale from pathname for canonical URL
  const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '';
  const canonicalUrl = `https://www.dinooratrade.com/${locale}${pathWithoutLocale}`;
  
  return (
    <link rel="canonical" href={canonicalUrl} />
  );
}
