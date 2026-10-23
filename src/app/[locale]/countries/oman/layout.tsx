import type { Metadata } from 'next'
import { getCountryMetadata } from '@/lib/seo'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return getCountryMetadata('oman', locale)
}

export default function OmanLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
