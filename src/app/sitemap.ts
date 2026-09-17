import { MetadataRoute } from 'next'

const baseUrl = 'https://www.dinooratrade.com'
const locales = ['en', 'ar', 'zh']

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString().split('T')[0]
  
  // Define all pages with their priorities and change frequencies
  const pages = [
    {
      path: '',
      priority: 1.0,
      changefreq: 'daily' as const,
      lastmod: currentDate
    },
    {
      path: '/about',
      priority: 0.9,
      changefreq: 'weekly' as const,
      lastmod: currentDate
    },
    {
      path: '/services',
      priority: 0.9,
      changefreq: 'weekly' as const,
      lastmod: currentDate
    },
    {
      path: '/services/sourcing',
      priority: 0.8,
      changefreq: 'weekly' as const,
      lastmod: currentDate
    },
    {
      path: '/services/inspection',
      priority: 0.8,
      changefreq: 'weekly' as const,
      lastmod: currentDate
    },
    {
      path: '/services/warehousing',
      priority: 0.8,
      changefreq: 'weekly' as const,
      lastmod: currentDate
    },
    {
      path: '/services/shipping',
      priority: 0.8,
      changefreq: 'weekly' as const,
      lastmod: currentDate
    },
    {
      path: '/services/customs',
      priority: 0.8,
      changefreq: 'weekly' as const,
      lastmod: currentDate
    },
    {
      path: '/services/logistics',
      priority: 0.8,
      changefreq: 'weekly' as const,
      lastmod: currentDate
    },
    {
      path: '/contact',
      priority: 0.7,
      changefreq: 'monthly' as const,
      lastmod: currentDate
    },
    {
      path: '/quote',
      priority: 0.7,
      changefreq: 'monthly' as const,
      lastmod: currentDate
    },
    {
      path: '/track',
      priority: 0.6,
      changefreq: 'monthly' as const,
      lastmod: currentDate
    },
    {
      path: '/blog',
      priority: 0.6,
      changefreq: 'weekly' as const,
      lastmod: currentDate
    },
    {
      path: '/micro-services',
      priority: 0.5,
      changefreq: 'monthly' as const,
      lastmod: currentDate
    },
    {
      path: '/query',
      priority: 0.6,
      changefreq: 'monthly' as const,
      lastmod: currentDate
    },
    {
      path: '/privacy',
      priority: 0.3,
      changefreq: 'yearly' as const,
      lastmod: currentDate
    },
    {
      path: '/terms',
      priority: 0.3,
      changefreq: 'yearly' as const,
      lastmod: currentDate
    },
    {
      path: '/countries/iraq',
      priority: 0.8,
      changefreq: 'weekly' as const,
      lastmod: currentDate
    },
    {
      path: '/countries/yemen',
      priority: 0.8,
      changefreq: 'weekly' as const,
      lastmod: currentDate
    },
    {
      path: '/countries/sudan',
      priority: 0.8,
      changefreq: 'weekly' as const,
      lastmod: currentDate
    },
  ]

  // Generate sitemap entries for all locales
  const sitemap: MetadataRoute.Sitemap = []
  
  pages.forEach(page => {
    locales.forEach(locale => {
      const alternates: any = {
        languages: {
          en: `${baseUrl}/en${page.path}`,
          ar: `${baseUrl}/ar${page.path}`,
          zh: `${baseUrl}/zh${page.path}`,
        },
      }
      
      // Only add x-default for homepage
      if (page.path === '') {
        alternates.languages['x-default'] = `${baseUrl}/en`
      }
      
      sitemap.push({
        url: `${baseUrl}/${locale}${page.path}`,
        lastModified: page.lastmod,
        changeFrequency: page.changefreq,
        priority: page.priority,
        alternates,
      })
    })
  })

  return sitemap
}
