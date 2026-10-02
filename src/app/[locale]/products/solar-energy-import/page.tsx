import Link from 'next/link'

export default function SolarEnergyImportPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "استيراد الطاقة الشمسية من الصين",
    "description": "خدمات متكاملة لاستيراد الألواح الشمسية، الإنفرترات، والبطاريات من الصين للسعودية ودول الخليج.",
    "brand": {
      "@type": "Brand",
      "name": "دينورا للتجارة الدولية"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "SAR",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "دينورا للتجارة الدولية"
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            استيراد الطاقة الشمسية من الصين
          </h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            خدمات متكاملة لاستيراد الألواح الشمسية، الإنفرترات، البطاريات، ومعدات الطاقة المتجددة من الصين
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">☀️ المنتجات التي نستوردها</h2>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center">
                <span className="text-amber-500 ml-2">•</span>
                الألواح الشمسية (Monocrystalline & Polycrystalline)
              </li>
              <li className="flex items-center">
                <span className="text-amber-500 ml-2">•</span>
                الإنفرترات الشمسية (Hybrid & On-grid)
              </li>
              <li className="flex items-center">
                <span className="text-amber-500 ml-2">•</span>
                بطاريات الليثيوم والجل
              </li>
              <li className="flex items-center">
                <span className="text-amber-500 ml-2">•</span>
                أنظمة التركيب والهياكل
              </li>
              <li className="flex items-center">
                <span className="text-amber-500 ml-2">•</span>
                كابلات وموصلات الطاقة الشمسية
              </li>
              <li className="flex items-center">
                <span className="text-amber-500 ml-2">•</span>
                أجهزة المراقبة والتحكم
              </li>
              <li className="flex items-center">
                <span className="text-amber-500 ml-2">•</span>
                مضخات الطاقة الشمسية
              </li>
              <li className="flex items-center">
                <span className="text-amber-500 ml-2">•</span>
                الإضاءة الشمسية
              </li>
            </ul>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">✅ لماذا تستورد الطاقة الشمسية معنا؟</h2>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start">
                <span className="text-green-500 ml-2 mt-1">✓</span>
                <span>وصول لمصانع الطاقة الشمسية الرائدة في الصين</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 ml-2 mt-1">✓</span>
                <span>فحص جودة شامل للكفاءة والطاقة</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 ml-2 mt-1">✓</span>
                <span>مساعدة في الحصول على شهادات الجودة المطلوبة</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 ml-2 mt-1">✓</span>
                <span>شحن آمن مع تغليف خاص للمعدات الحساسة</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 ml-2 mt-1">✓</span>
                <span>أسعار تنافسية للمشاريع الكبيرة والصغيرة</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 ml-2 mt-1">✓</span>
                <span>ضمان المنتجات من المصنع</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-amber-500 mb-4">⚠️ اعتبارات هامة لاستيراد الطاقة الشمسية</h2>
          <div className="grid md:grid-cols-2 gap-6 text-slate-300">
            <div>
              <h3 className="font-bold text-white mb-2">الكفاءة والجودة</h3>
              <p>نفحص كفاءة الألواح والإنفرترات للتأكد من مطابقتها للمواصفات المعلنة.</p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-2">الشهادات والمواصفات</h3>
              <p>نساعدك في الحصول على شهادات IEC, TUV, SASO المطلوبة.</p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-2">التخزين والشحن</h3>
              <p>نستخدم تخزين وتغليف مناسب لحماية المعدات من الرطوبة والتلف.</p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-2">الضمان والدعم الفني</h3>
              <p>نساعدك في ترتيب الضمان والدعم الفني من المصنع.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">جاهز لاستيراد الطاقة الشمسية؟</h2>
          <p className="text-slate-400 mb-8">
            تواصل معنا للحصول على استشارة مجانية وعرض سعر مخصص لمشروعك
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
