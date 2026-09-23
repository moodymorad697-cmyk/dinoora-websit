export default function StructuredData({ locale }: { locale: string }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "دينورا للتجارة الدولية",
    "alternateName": ["Dinoora", "Dinoora International Trade", "دينورا"],
    "url": "https://www.dinooratrade.com",
    "logo": "https://www.dinooratrade.com/logo-dinoora.png",
    "description": locale === 'ar' 
      ? "دينورا هي شركة عربية متخصصة في الاستيراد والتجارة الدولية من الصين إلى الدول العربية، تقدم خدمات التوريد، فحص الجودة، الشحن، والتخليص الجمركي"
      : "Dinoora is an Arab company specializing in international trade and import from China to Arab countries, offering sourcing, quality inspection, shipping, and customs clearance services",
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
      },
      {
        "@type": "Country",
        "name": "Iraq"
      },
      {
        "@type": "Country",
        "name": "Sudan"
      },
      {
        "@type": "Country",
        "name": "Yemen"
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
      },
      {
        "@type": "Service",
        "name": locale === 'ar' ? "الشحن المبرد" : "Cold Chain Shipping",
        "description": locale === 'ar'
          ? "شحن مبرد للمنتجات الحساسة للحرارة مع مراقبة درجة الحرارة"
          : "Cold chain shipping for temperature-sensitive products with temperature monitoring"
      },
      {
        "@type": "Service",
        "name": locale === 'ar' ? "الشحن VIP" : "VIP Shipping",
        "description": locale === 'ar'
          ? "خدمة شحن مميزة بأولوية أعلى ومدير حساب مخصص"
          : "Premium shipping service with higher priority and dedicated account manager"
      }
    ]
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": locale === 'ar' ? "دينورا للتجارة الدولية" : "Dinoora International Trade",
    "url": "https://www.dinooratrade.com",
    "description": locale === 'ar'
      ? "دينورا هي شركة عربية متخصصة في الاستيراد والتجارة الدولية من الصين إلى الدول العربية"
      : "Dinoora is an Arab company specializing in international trade and import from China to Arab countries",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.dinooratrade.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
    </>
  );
}
