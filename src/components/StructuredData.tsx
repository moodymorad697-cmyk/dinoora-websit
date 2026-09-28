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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": locale === 'ar' ? "الرئيسية" : "Home",
        "item": "https://www.dinooratrade.com"
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "دينورا للتجارة الدولية",
    "image": "https://www.dinooratrade.com/logo-dinoora.png",
    "telephone": "+8619589468539",
    "email": "info@dinooratrade.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Room 201, 2nd Floor, Building 2, No. 37, Daoge Tang Village, Jiangdong Street",
      "addressLocality": "Yiwu City",
      "addressRegion": "Zhejiang Province",
      "postalCode": "322000",
      "addressCountry": "CN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "29.3069",
      "longitude": "120.0735"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "priceRange": "$$"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": locale === 'ar' ? "كيف أستورد من الصين؟" : "How to import from China?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": locale === 'ar'
            ? "يمكنك الاستيراد من الصين من خلال دينورا التي تقدم خدمات التوريد، فحص الجودة، الشحن، والتخليص الجمركي بشكل متكامل."
            : "You can import from China through Dinoora which offers integrated services for sourcing, quality inspection, shipping, and customs clearance."
        }
      },
      {
        "@type": "Question",
        "name": locale === 'ar' ? "ما هي خدمات دينورا؟" : "What are Dinoora's services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": locale === 'ar'
            ? "دينورا تقدم خدمات التوريد من الصين، فحص الجودة، التخزين والتجميع، الشحن، والتخليص الجمركي."
            : "Dinoora offers sourcing from China, quality inspection, warehousing and consolidation, shipping, and customs clearance services."
        }
      },
      {
        "@type": "Question",
        "name": locale === 'ar' ? "كم تكلفة الاستيراد من الصين؟" : "How much does it cost to import from China?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": locale === 'ar'
            ? "تكلفة الاستيراد تعتمد على نوع المنتج، الكمية، وطريقة الشحن. يمكنك طلب عرض سعر مجاني من دينورا."
            : "Import costs depend on product type, quantity, and shipping method. You can request a free quote from Dinoora."
        }
      }
    ]
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
