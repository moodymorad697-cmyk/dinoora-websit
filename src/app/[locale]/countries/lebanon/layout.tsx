import type { Metadata } from 'next'
import { getCountryMetadata } from '@/lib/seo'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return getCountryMetadata('lebanon', locale)
}

export default function LebanonLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
