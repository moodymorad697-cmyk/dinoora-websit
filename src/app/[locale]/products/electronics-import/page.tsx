import Link from 'next/link'

export default function ElectronicsImportPage() {
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
        "name": "استيراد الإلكترونيات",
        "item": "https://www.dinooratrade.com/products/electronics-import"
      }
    ]
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "استيراد الإلكترونيات من الصين",
    "description": "خدمات متكاملة لاستيراد الإلكترونيات من الصين للسعودية ودول الخليج. توريد، فحص جودة، شحن، وتخليص جمركي.",
    "provider": {
      "@type": "Organization",
      "name": "دينورا للتجارة الدولية",
      "url": "https://www.dinooratrade.com"
    },
    "serviceType": "Electronics Import Service",
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
            استيراد الإلكترونيات من الصين
          </h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            خدمات متكاملة لاستيراد الهواتف، الحواسيب، الأجهزة المنزلية، والمزيد من الصين للسعودية ودول الخليج
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">📱 المنتجات التي نستوردها</h2>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center">
                <span className="text-amber-500 ml-2">•</span>
                الهواتف الذكية والأجهزة اللوحية
              </li>
              <li className="flex items-center">
                <span className="text-amber-500 ml-2">•</span>
                الحواسيب المحمولة والمكتبية
              </li>
              <li className="flex items-center">
                <span className="text-amber-500 ml-2">•</span>
                الأجهزة المنزلية الذكية
              </li>
              <li className="flex items-center">
                <span className="text-amber-500 ml-2">•</span>
                السماعات والسماعات اللاسلكية
              </li>
              <li className="flex items-center">
                <span className="text-amber-500 ml-2">•</span>
                الشواحن والكابلات
              </li>
              <li className="flex items-center">
                <span className="text-amber-500 ml-2">•</span>
                الكاميرات والمعدات التصويرية
              </li>
              <li className="flex items-center">
                <span className="text-amber-500 ml-2">•</span>
                أجهزة الترفيه والصوتيات
              </li>
              <li className="flex items-center">
                <span className="text-amber-500 ml-2">•</span>
                الإكسسوارات الإلكترونية
              </li>
            </ul>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">✅ لماذا تستورد الإلكترونيات معنا؟</h2>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start">
                <span className="text-green-500 ml-2 mt-1">✓</span>
                <span>فحص جودة شامل قبل الشحن للتأكد من عمل جميع الأجهزة</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 ml-2 mt-1">✓</span>
                <span>شحن آمن مع تغليف خاص للإلكترونيات الحساسة</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 ml-2 mt-1">✓</span>
                <span>مساعدة في الحصول على شهادات المواصفات المطلوبة</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 ml-2 mt-1">✓</span>
                <span>أسعار تنافسية من المصانع مباشرة</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 ml-2 mt-1">✓</span>
                <span>تخليص جمركي سريع في السعودية ودول الخليج</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 ml-2 mt-1">✓</span>
                <span>ضمان استبدال المنتجات المعيبة</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-amber-500 mb-4">⚠️ اعتبارات هامة لاستيراد الإلكترونيات</h2>
          <div className="grid md:grid-cols-2 gap-6 text-slate-300">
            <div>
              <h3 className="font-bold text-white mb-2">المواصفات والشهادات</h3>
              <p>نحن نساعدك في الحصول على شهادات SASO و EMC المطلوبة للإلكترونيات في السعودية ودول الخليج.</p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-2">فحص الجودة</h3>
              <p>نقوم بفحص شامل لكل جهاز للتأكد من عمله والمطابقة للمواصفات قبل الشحن.</p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-2">التغليف والشحن</h3>
              <p>نستخدم تغليف مضاد للصدمات والرطوبة لحماية الإلكترونيات أثناء الشحن.</p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-2">الضمان والاستبدال</h3>
              <p>نوفر آلية واضحة لاستبدال المنتجات المعيبة من المصنع.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">جاهز لاستيراد الإلكترونيات؟</h2>
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
