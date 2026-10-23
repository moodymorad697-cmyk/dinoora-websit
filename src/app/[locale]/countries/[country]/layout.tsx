import type { Metadata } from 'next'
import { getCountryMetadata } from '@/lib/seo'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; country: string }>
}): Promise<Metadata> {
  const { locale, country } = await params
  return getCountryMetadata(country, locale)
}

export default function CountryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
