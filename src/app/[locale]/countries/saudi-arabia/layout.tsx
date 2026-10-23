import type { Metadata } from 'next'
import { getCountryMetadata } from '@/lib/seo'
import { BASE_URL } from '@/lib/seo-config'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const metadata = getCountryMetadata('saudi-arabia', locale)
  const arabicUrl = `${BASE_URL}/ar/countries/saudi-arabia`

  return {
    ...metadata,
    alternates: {
      languages: {
        ar: arabicUrl,
        'x-default': arabicUrl,
      },
    },
  }
}

export default function SaudiArabiaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
