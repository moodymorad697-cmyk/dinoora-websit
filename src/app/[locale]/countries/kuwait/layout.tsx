import type { Metadata } from 'next'
import { getCountryMetadata } from '@/lib/seo'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return getCountryMetadata('kuwait', locale)
}

export default function KuwaitLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
