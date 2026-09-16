export default function StructuredData({ locale }: { locale: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Dinoora",
    "alternateName": "دينورا للتجارة الدولية",
    "url": "https://www.dinooratrade.com",
    "logo": "https://www.dinooratrade.com/logo-dinoora.png",
    "description": locale === 'ar' 
      ? "دينورا هي أفضل شركة استيراد من الصين للسعودية بأسعار منافسة. نقدم خدمات توريد وشحن من الصين إلى دول الخليج، فحص جودة، تخزين، تخليص جمركي، وحلول لوجستية متكاملة."
      : "Dinoora is the best import company from China to Saudi Arabia with competitive prices. We offer sourcing and shipping services from China to Gulf countries, quality inspection, warehousing, customs clearance, and integrated logistics solutions.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Room 201, 2nd Floor, Building 2, No. 37, Daoge Tang Village, Jiangdong Street",
      "addressLocality": "Yiwu City",
      "addressRegion": "Zhejiang Province",
      "addressCountry": "CN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+8619589468539",
      "contactType": "customer service",
      "email": "info@dinooratrade.com",
      "availableLanguage": ["Arabic", "English", "Chinese"]
    },
    "sameAs": [
      "https://wa.me/8619589468539"
    ],
    "areaServed": [
      {
        "@type": "Country",
        "name": "Saudi Arabia"
      },
      {
        "@type": "Country",
        "name": "United Arab Emirates"
      },
      {
        "@type": "Country",
        "name": "Qatar"
      },
      {
        "@type": "Country",
        "name": "Kuwait"
      },
      {
        "@type": "Country",
        "name": "Bahrain"
      },
      {
        "@type": "Country",
        "name": "Oman"
      }
    ],
    "service": [
      {
        "@type": "Service",
        "name": locale === 'ar' ? "توريد المنتجات من الصين" : "Product Sourcing from China",
        "description": locale === 'ar' 
          ? "نبحث عن المورد المناسب ونراجع قدرته قبل أن تبدأ الالتزامات"
          : "Find the right supplier and review capability before you commit"
      },
      {
        "@type": "Service",
        "name": locale === 'ar' ? "فحص جودة البضائع" : "Quality Inspection",
        "description": locale === 'ar'
          ? "قائمة فحص وصور وملاحظات عملية قبل خروج البضاعة من الصين"
          : "Practical checks, photos, and findings before cargo leaves China"
      },
      {
        "@type": "Service",
        "name": locale === 'ar' ? "التخزين والتجميع" : "Warehousing & Consolidation",
        "description": locale === 'ar'
          ? "نجمع طلبات الموردين ونجهزها للشحن بطريقة تقلل التعقيد والتكلفة"
          : "Consolidate supplier orders and prepare them for a simpler shipment"
      },
      {
        "@type": "Service",
        "name": locale === 'ar' ? "الشحن والتخليص" : "Shipping & Customs",
        "description": locale === 'ar'
          ? "مسار شحن مناسب مع مستندات مرتبة وتنسيق حتى الوجهة"
          : "A suitable shipping route with organized documents through destination"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
