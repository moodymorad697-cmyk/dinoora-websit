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

  // E-E-A-T: Author/Expert Schema for AI Search
  const authorSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "دينورا للتجارة الدولية - فريق الخبراء",
    "description": locale === 'ar'
      ? "فريق من الخبراء المتخصصين في الاستيراد من الصين والتجارة الدولية مع أكثر من 10 سنوات خبرة في السوق الصيني"
      : "A team of experts specializing in import from China and international trade with over 10 years of experience in the Chinese market",
    "knowsAbout": [
      locale === 'ar' ? "الاستيراد من الصين" : "Import from China",
      locale === 'ar' ? "التجارة الدولية" : "International Trade",
      locale === 'ar' ? "التوريد من الصين" : "Sourcing from China",
      locale === 'ar' ? "فحص الجودة" : "Quality Inspection",
      locale === 'ar' ? "الشحن البحري والجوي" : "Sea and Air Freight",
      locale === 'ar' ? "التخليص الجمركي" : "Customs Clearance",
      locale === 'ar' ? "سوق ييوو الصيني" : "Yiwu Market China",
      locale === 'ar' ? "سوق شنتشن" : "Shenzhen Market",
      locale === 'ar' ? "الاستيراد للسعودية" : "Import to Saudi Arabia",
      locale === 'ar' ? "الاستيراد للإمارات" : "Import to UAE",
      locale === 'ar' ? "الاستيراد للكويت" : "Import to Kuwait",
      locale === 'ar' ? "الاستيرار لقطر" : "Import to Qatar",
      locale === 'ar' ? "الاستيرار للبحرين" : "Import to Bahrain",
      locale === 'ar' ? "الاستيرار لعمان" : "Import to Oman",
      locale === 'ar' ? "الاستيرار للعراق" : "Import to Iraq",
      locale === 'ar' ? "الاستيرار للسودان" : "Import to Sudan",
      locale === 'ar' ? "الاستيرار لليمن" : "Import to Yemen",
      locale === 'ar' ? "الاستيرار للمغرب" : "Import to Morocco",
      locale === 'ar' ? "الاستيرار للجزائر" : "Import to Algeria",
      locale === 'ar' ? "استيراد الإلكترونيات" : "Import Electronics",
      locale === 'ar' ? "استيراد الملابس" : "Import Clothing",
      locale === 'ar' ? "استيراد الطاقة الشمسية" : "Import Solar Energy",
      locale === 'ar' ? "استيراد قطع الغيار" : "Import Spare Parts",
      locale === 'ar' ? "استيراد الأثاث" : "Import Furniture",
      locale === 'ar' ? "استيراد الأدوات الكهربائية" : "Import Electrical Tools",
      locale === 'ar' ? "استيراد المواد الغذائية" : "Import Food Products"
    ],
    "founder": {
      "@type": "Person",
      "name": "فريق دينورا",
      "jobTitle": locale === 'ar' ? "مدير العمليات" : "Operations Manager",
      "description": locale === 'ar'
        ? "فريق متخصص في التجارة مع الصين مع خبرة واسعة في السوق الصيني والشرق الأوسط"
        : "Specialized team in China trade with extensive experience in Chinese and Middle Eastern markets"
    },
    "member": [
      {
        "@type": "Person",
        "name": locale === 'ar' ? "مديرو حسابات عرب" : "Arabic Account Managers",
        "jobTitle": locale === 'ar' ? "مدير حساب" : "Account Manager",
        "description": locale === 'ar'
          ? "مديرو حسابات يتقنون العربية والصينية والإنجليزية"
          : "Account managers fluent in Arabic, Chinese, and English"
      },
      {
        "@type": "Person",
        "name": locale === 'ar' ? "مفتشو جودة محترفون" : "Professional Quality Inspectors",
        "jobTitle": locale === 'ar' ? "مفتش جودة" : "Quality Inspector",
        "description": locale === 'ar'
          ? "مفتشو جودة معتمدون في الصين"
          : "Certified quality inspectors in China"
      },
      {
        "@type": "Person",
        "name": locale === 'ar' ? "خبراء لوجستيات" : "Logistics Experts",
        "jobTitle": locale === 'ar' ? "خبير لوجستيات" : "Logistics Expert",
        "description": locale === 'ar'
          ? "خبراء في الشحن والتخليص الجمركي"
          : "Experts in shipping and customs clearance"
      }
    ]
  };

  // E-E-A-T: Review Schema for Trust Signals
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": locale === 'ar' ? "خدمات الاستيراد من الصين" : "Import from China Services",
    "image": "https://www.dinooratrade.com/logo-dinoora.png",
    "description": locale === 'ar'
      ? "خدمات متكاملة للاستيراد من الصين تشمل التوريد، فحص الجودة، الشحن، والتخليص الجمركي"
      : "Integrated services for import from China including sourcing, quality inspection, shipping, and customs clearance",
    "brand": {
      "@type": "Brand",
      "name": "دينورا للتجارة الدولية"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": locale === 'ar' ? "عميل من السعودية" : "Customer from Saudi Arabia"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": locale === 'ar'
          ? "خدمة ممتازة واحترافية عالية. فريق دينورا ساعدني في استيراد الإلكترونيات من الصين بكل سهولة."
          : "Excellent service and high professionalism. Dinoora team helped me import electronics from China with ease."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": locale === 'ar' ? "عميل من الإمارات" : "Customer from UAE"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": locale === 'ar'
          ? "أفضل شركة استيراد تعاملت معها. فحص الجودة كان شاملاً والشحن في الوقت المحدد."
          : "Best import company I've dealt with. Quality inspection was comprehensive and shipping was on time."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": locale === 'ar' ? "عميل من الكويت" : "Customer from Kuwait"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "4.8",
          "bestRating": "5"
        },
        "reviewBody": locale === 'ar'
          ? "تجربة رائعة مع دينورا. الفريق يتحدث العربية ويفهم احتياجاتنا تماماً."
          : "Great experience with Dinoora. The team speaks Arabic and understands our needs perfectly."
      }
    ]
  };

  // E-E-A-T: Educational/Informational Schema
  const educationalSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": locale === 'ar' ? "دينورا - مركز المعرفة للاستيراد من الصين" : "Dinoora - Knowledge Center for Import from China",
    "url": "https://www.dinooratrade.com",
    "description": locale === 'ar'
      ? "مركز تعليمي متخصص في توفير المعلومات والأدلة العملية للاستيراد من الصين للمستوردين العرب"
      : "Educational center specializing in providing information and practical guides for importing from China for Arab importers",
    "educationalLevel": locale === 'ar' ? "جميع المستويات" : "All Levels",
    "educationalUse": locale === 'ar' ? "تعليم الاستيراد والتجارة الدولية" : "Teaching Import and International Trade",
    "teaches": [
      locale === 'ar' ? "كيفية الاستيراد من الصين" : "How to Import from China",
      locale === 'ar' ? "البحث عن موردين موثوقين" : "Finding Reliable Suppliers",
      locale === 'ar' ? "فحص الجودة في الصين" : "Quality Inspection in China",
      locale === 'ar' ? "طرق الشحن من الصين" : "Shipping Methods from China",
      locale === 'ar' ? "التخليص الجمركي" : "Customs Clearance",
      locale === 'ar' ? "إدارة المخاطر في الاستيراد" : "Risk Management in Import"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": locale === 'ar' ? "أدلة الاستيراد من الصين" : "Import from China Guides",
      "itemListElement": [
        {
          "@type": "Course",
          "name": locale === 'ar' ? "دليل الاستيراد من الصين خطوة بخطوة" : "Step by Step Import from China Guide",
          "description": locale === 'ar'
            ? "دليل شامل للمبتدئين للاستيراد من الصين"
            : "Comprehensive guide for beginners to import from China",
          "provider": {
            "@type": "Organization",
            "name": "دينورا للتجارة الدولية"
          }
        },
        {
          "@type": "Course",
          "name": locale === 'ar' ? "الأسئلة الشائعة عن الاستيراد من الصين" : "FAQ about Import from China",
          "description": locale === 'ar'
            ? "إجابات شاملة على أهم الأسئلة حول الاستيراد"
            : "Comprehensive answers to the most important questions about import",
          "provider": {
            "@type": "Organization",
            "name": "دينورا للتجارة الدولية"
          }
        }
      ]
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(educationalSchema) }}
      />
    </>
  );
}
