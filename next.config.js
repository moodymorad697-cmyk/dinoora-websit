const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();
const destinationCountries = ['bahrain', 'kuwait', 'oman', 'qatar', 'saudi-arabia', 'uae'];
const countryDestinationRedirects = ['ar', 'en'].flatMap((locale) =>
  destinationCountries.map((country) => ({
    source: `/${locale}/destinations/${country}`,
    destination: country === 'saudi-arabia'
      ? '/ar/countries/saudi-arabia'
      : `/${locale}/countries/${country}`,
    permanent: true,
  })),
);
const legacyPageRedirects = [
  { source: '/comparison', destination: '/ar/comparison/china-vs-sourcing', permanent: true },
  { source: '/guide', destination: '/ar/guide/how-to-import-from-china', permanent: true },
  { source: '/blog/quality', destination: '/ar/blog/quality-inspection', permanent: true },
  ...['ar', 'en'].flatMap((locale) => [
    {
      source: `/${locale}/comparison`,
      destination: `/${locale}/comparison/china-vs-sourcing`,
      permanent: true,
    },
    {
      source: `/${locale}/guide`,
      destination: `/${locale}/guide/how-to-import-from-china`,
      permanent: true,
    },
    {
      source: `/${locale}/blog/quality`,
      destination: `/${locale}/blog/quality-inspection`,
      permanent: true,
    },
  ]),
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  turbopack: {
    root: __dirname,
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  httpAgentOptions: {
    keepAlive: true,
  },
  async redirects() {
    return [...countryDestinationRedirects, ...legacyPageRedirects];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://images.unsplash.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://images.unsplash.com https://www.dinooratrade.com; connect-src 'self' https://api.telegram.org; frame-src 'self'; base-uri 'self'; form-action 'self';"
          },
        ]
      }
    ]
  },
}

module.exports = withNextIntl(nextConfig);
