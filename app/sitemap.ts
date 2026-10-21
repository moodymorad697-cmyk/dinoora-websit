import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.dinooratrade.com'
  const locales = ['en', 'ar', 'zh']
  
  // Static pages with their priorities and change frequencies
  const staticPages = [
    { path: '', priority: 1.0, changeFreq: 'daily' as const },
    { path: '/about', priority: 0.9, changeFreq: 'weekly' as const },
    { path: '/quote', priority: 0.9, changeFreq: 'daily' as const },
    { path: '/calculator', priority: 0.8, changeFreq: 'weekly' as const },
    { path: '/faq', priority: 0.8, changeFreq: 'weekly' as const },
    { path: '/blog', priority: 0.7, changeFreq: 'daily' as const },
  ]

  // Service pages
  const servicePages = [
    { path: '/services/sourcing', priority: 0.8, changeFreq: 'weekly' as const },
    { path: '/services/inspection', priority: 0.8, changeFreq: 'weekly' as const },
    { path: '/services/warehousing', priority: 0.8, changeFreq: 'weekly' as const },
    { path: '/services/shipping', priority: 0.8, changeFreq: 'weekly' as const },
    { path: '/services/logistics', priority: 0.8, changeFreq: 'weekly' as const },
  ]

  // Guide pages
  const guidePages = [
    { path: '/guide/how-to-import-from-china', priority: 0.9, changeFreq: 'monthly' as const },
    { path: '/guide/sourcing-from-china', priority: 0.8, changeFreq: 'monthly' as const },
    { path: '/guide/quality-inspection', priority: 0.8, changeFreq: 'monthly' as const },
    { path: '/guide/shipping-methods', priority: 0.8, changeFreq: 'monthly' as const },
  ]

  // Product category pages
  const productPages = [
    { path: '/products/electronics-import', priority: 0.8, changeFreq: 'weekly' as const },
    { path: '/products/clothing-import', priority: 0.8, changeFreq: 'weekly' as const },
    { path: '/products/furniture-import', priority: 0.8, changeFreq: 'weekly' as const },
    { path: '/products/solar-energy-import', priority: 0.8, changeFreq: 'weekly' as const },
    { path: '/products/spare-parts-import', priority: 0.8, changeFreq: 'weekly' as const },
  ]

  // Destination pages
  const destinationPages = [
    { path: '/destinations/saudi-arabia', priority: 1.0, changeFreq: 'daily' as const },
    { path: '/destinations/uae', priority: 1.0, changeFreq: 'daily' as const },
    { path: '/destinations/kuwait', priority: 0.9, changeFreq: 'daily' as const },
    { path: '/destinations/qatar', priority: 0.9, changeFreq: 'daily' as const },
    { path: '/destinations/bahrain', priority: 0.9, changeFreq: 'daily' as const },
    { path: '/destinations/oman', priority: 0.9, changeFreq: 'daily' as const },
  ];

  const allPages = [...staticPages, ...servicePages, ...guidePages, ...productPages, ...destinationPages]

  const sitemap: MetadataRoute.Sitemap = []

  // Generate URLs for each locale
  allPages.forEach(page => {
    locales.forEach(locale => {
      sitemap.push({
        url: `${baseUrl}/${locale}${page.path}`,
        lastModified: new Date(),
        changeFrequency: page.changeFreq,
        priority: page.priority,
      })
    })
  })

  return sitemap
}
