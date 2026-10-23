import type { MetadataRoute } from 'next'
import { blogArticles } from '@/lib/blog-content'
import { BASE_URL, LOCALES, getHreflangUrls } from '@/lib/seo-config'

const pages = [
  { path: '', priority: 1 },
  { path: '/about', priority: 0.7 },
  { path: '/blog', priority: 0.8 },
  { path: '/blog/best-products-to-import-from-china-2024', priority: 0.7 },
  { path: '/blog/how-to-avoid-common-import-mistakes', priority: 0.7 },
  { path: '/blog/how-to-import-from-china-saudi-arabia', priority: 0.8 },
  { path: '/blog/importing-electronics-from-china', priority: 0.7 },
  { path: '/calculator', priority: 0.7 },
  { path: '/comparison/china-vs-sourcing', priority: 0.6 },
  { path: '/countries', priority: 0.8 },
  { path: '/countries/algeria', priority: 0.6 },
  { path: '/countries/bahrain', priority: 0.7 },
  { path: '/countries/iraq', priority: 0.8 },
  { path: '/countries/jordan', priority: 0.6 },
  { path: '/countries/kuwait', priority: 0.7 },
  { path: '/countries/lebanon', priority: 0.6 },
  { path: '/countries/libya', priority: 0.8 },
  { path: '/countries/morocco', priority: 0.6 },
  { path: '/countries/oman', priority: 0.7 },
  { path: '/countries/qatar', priority: 0.7 },
  { path: '/countries/saudi-arabia', priority: 0.9 },
  { path: '/countries/sudan', priority: 0.8 },
  { path: '/countries/tunisia', priority: 0.6 },
  { path: '/countries/uae', priority: 0.9 },
  { path: '/countries/yemen', priority: 0.8 },
  { path: '/destinations/bahrain', priority: 0.7 },
  { path: '/destinations/kuwait', priority: 0.7 },
  { path: '/destinations/oman', priority: 0.7 },
  { path: '/destinations/qatar', priority: 0.7 },
  { path: '/destinations/saudi-arabia', priority: 0.8 },
  { path: '/destinations/uae', priority: 0.8 },
  { path: '/faq', priority: 0.7 },
  { path: '/guide/how-to-import-from-china', priority: 0.8 },
  { path: '/products/clothing-import', priority: 0.7 },
  { path: '/products/electronics-import', priority: 0.7 },
  { path: '/products/medical-supplies', priority: 0.7 },
  { path: '/products/solar-energy-import', priority: 0.7 },
  { path: '/products/textiles-fabrics', priority: 0.7 },
  { path: '/referral-program', priority: 0.5 },
  { path: '/services', priority: 0.8 },
  { path: '/services/cold-chain-shipping', priority: 0.6 },
  { path: '/services/customs', priority: 0.7 },
  { path: '/services/inspection', priority: 0.7 },
  { path: '/services/logistics', priority: 0.7 },
  { path: '/services/shipping', priority: 0.8 },
  { path: '/services/sourcing', priority: 0.8 },
  { path: '/services/vip-shipping', priority: 0.6 },
  { path: '/services/warehousing', priority: 0.7 },
  { path: '/wholesale/beginners', priority: 0.7 },
  { path: '/wholesale/bulk-orders', priority: 0.7 },
  ...blogArticles.map(({ id }) => ({ path: `/blog/${id}`, priority: 0.6 })),
]

export default function sitemap(): MetadataRoute.Sitemap {
  const uniquePages = Array.from(
    new Map(pages.map((page) => [page.path, page])).values(),
  ).sort((first, second) => first.path.localeCompare(second.path))

  return uniquePages.flatMap(({ path, priority }) =>
    LOCALES.filter((locale) => path !== '/countries/saudi-arabia' || locale === 'ar').map((locale) => ({
      url: `${BASE_URL}/${locale}${path}`,
      changeFrequency: path === '' || path === '/blog' ? 'weekly' : 'monthly',
      priority,
      alternates: {
        languages: path === '/countries/saudi-arabia'
          ? {
              ar: `${BASE_URL}/ar${path}`,
              'x-default': `${BASE_URL}/ar${path}`,
            }
          : getHreflangUrls(path),
      },
    })),
  )
}
