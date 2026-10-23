import type { Metadata } from 'next'
import { getCountryMetadata } from '@/lib/seo'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return getCountryMetadata('morocco', locale)
}

export default function MoroccoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
