export default function StructuredData({ locale }: { locale: string }) {
  const isArabic = locale === 'ar';
  const serviceCountries = [
    'Saudi Arabia',
    'United Arab Emirates',
    'Qatar',
    'Kuwait',
    'Bahrain',
    'Oman',
    'Jordan',
    'Iraq',
    'Algeria',
    'Morocco',
    'Tunisia',
    'Egypt',
    'Lebanon',
    'Libya',
    'Sudan',
    'Yemen',
  ];

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'دينورا للتجارة الدولية',
    alternateName: ['Dinoora', 'Dinoora International Trade', 'دينورا'],
    url: 'https://www.dinooratrade.com',
    logo: 'https://www.dinooratrade.com/logo-dinoora.png',
    description: isArabic
      ? 'دينورا شركة متخصصة في خدمات التوريد وفحص الجودة والتخزين والشحن من الصين إلى الأسواق العربية.'
      : 'Dinoora provides sourcing, quality inspection, warehousing, and shipping services from China to Arab markets.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Room 201, 2nd Floor, Building 2, No. 37, Daoge Tang Village, Jiangdong Street',
      addressLocality: 'Yiwu City',
      addressRegion: 'Zhejiang Province',
      postalCode: '322000',
      addressCountry: 'CN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+8619589468539',
      contactType: 'customer service',
      email: 'info@dinooratrade.com',
      availableLanguage: ['Arabic', 'English', 'Chinese'],
    },
    areaServed: serviceCountries.map((name) => ({
      '@type': 'Country',
      name,
    })),
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: isArabic ? 'دينورا للتجارة الدولية' : 'Dinoora International Trade',
    url: 'https://www.dinooratrade.com',
    description: isArabic
      ? 'معلومات عن خدمات دينورا للتوريد والشحن من الصين إلى الأسواق العربية.'
      : 'Information about Dinoora sourcing and shipping services from China to Arab markets.',
    inLanguage: ['ar', 'en'],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
