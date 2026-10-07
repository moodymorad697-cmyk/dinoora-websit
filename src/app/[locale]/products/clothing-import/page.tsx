import Link from 'next/link'

export default function ClothingImportPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "الرئيسية",
        "item": "https://www.dinooratrade.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "المنتجات",
        "item": "https://www.dinooratrade.com/products"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "استيراد الملابس",
        "item": "https://www.dinooratrade.com/products/clothing-import"
      }
    ]
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "استيراد الملابس من الصين",
    "description": "خدمات متكاملة لاستيراد الملابس من الصين للسعودية ودول الخليج. توريد، فحص جودة، شحن، وتخليص جمركي.",
    "provider": {
      "@type": "Organization",
      "name": "دينورا للتجارة الدولية",
      "url": "https://www.dinooratrade.com"
    },
    "serviceType": "Clothing Import Service",
    "areaServed": [
      "Saudi Arabia",
      "UAE",
      "Kuwait",
      "Qatar",
      "Bahrain",
      "Oman",
      "Jordan",
      "Iraq",
      "Algeria",
      "Morocco",
      "Tunisia",
      "Egypt",
      "Lebanon",
      "Libya",
      "Sudan",
      "Yemen"
    ]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            استيراد الملابس من الصين
          </h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            خدمات متكاملة لاستيراد الملابس الجاهزة، الأقمشة، والإكسسوارات من الصين للسعودية ودول الخليج بالجملة
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">👕 المنتجات التي نستوردها</h2>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center">
                <span className="text-amber-500 ml-2">•</span>
                الملابس الرجالية والنسائية
              </li>
              <li className="flex items-center">
                <span className="text-amber-500 ml-2">•</span>
                ملابس الأطفال والرضع
              </li>
              <li className="flex items-center">
                <span className="text-amber-500 ml-2">•</span>
                الملابس الرياضية
              </li>
              <li className="flex items-center">
                <span className="text-amber-500 ml-2">•</span>
                الأقمشة والمواد الخام
              </li>
              <li className="flex items-center">
                <span className="text-amber-500 ml-2">•</span>
                الإكسسوارات والأحزمة
              </li>
              <li className="flex items-center">
                <span className="text-amber-500 ml-2">•</span>
                الأحذية والحقائب
              </li>
              <li className="flex items-center">
                <span className="text-amber-500 ml-2">•</span>
                الملابس الداخلية والملابس النوم
              </li>
              <li className="flex items-center">
                <span className="text-amber-500 ml-2">•</span>
                الملابس الموسمية
              </li>
            </ul>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">✅ لماذا تستورد الملابس معنا؟</h2>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start">
                <span className="text-green-500 ml-2 mt-1">✓</span>
                <span>وصول مباشر لمصانع الملابس في الصين</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 ml-2 mt-1">✓</span>
                <span>فستان عينات قبل الشحن الكبير</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 ml-2 mt-1">✓</span>
                <span>فحص الجودة للخامات والتطريز</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 ml-2 mt-1">✓</span>
                <span>أسعار تنافسية للجملة</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 ml-2 mt-1">✓</span>
                <span>مساعدة في اختيار الأنماط الرائجة</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 ml-2 mt-1">✓</span>
                <span>تخليص جمركي سريع</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-amber-500 mb-4">⚠️ اعتبارات هامة لاستيراد الملابس</h2>
          <div className="grid md:grid-cols-2 gap-6 text-slate-300">
            <div>
              <h3 className="font-bold text-white mb-2">المواصفات والمقاسات</h3>
              <p>نساعدك في تحديد المقاسات المناسبة للسوق العربي والتأكد من مطابقتها للمواصفات.</p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-2">جودة الخامات</h3>
              <p>نفحص جودة الأقمشة والخياطة للتأكد من المطابقة للمعايير المطلوبة.</p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-2">الألوان والتصاميم</h3>
              <p>نساعدك في اختيار الألوان والتصاميم المناسبة للسوق المستهدف.</p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-2">التغليف والشحن</h3>
              <p>نستخدم تغليف مناسب لحماية الملابس من التلف والرطوبة أثناء الشحن.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">جاهز لاستيراد الملابس؟</h2>
          <p className="text-slate-400 mb-8">
            تواصل معنا للحصول على استشارة مجانية وعرض سعر مخصص
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              طلب عرض سعر
            </Link>
            <Link
              href="/guide/how-to-import-from-china"
              className="inline-block px-8 py-3 border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white font-semibold rounded-lg transition-colors duration-300"
            >
              دليل الاستيراد
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
