import Link from 'next/link'

export default function SaudiArabiaPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "استيراد من الصين للسعودية",
    "description": "خدمات متكاملة للاستيراد من الصين للسعودية. توريد، فحص جودة، شحن، وتخليص جمركي في جدة والدمام والرياض.",
    "provider": {
      "@type": "Organization",
      "name": "دينورا للتجارة الدولية",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "SA"
      }
    },
    "areaServed": {
      "@type": "Country",
      "name": "Saudi Arabia"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "خدمات الاستيراد للسعودية",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "التخليص الجمركي في جدة"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "التخليص الجمركي في الدمام"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "التخليص الجمركي في الرياض"
          }
        }
      ]
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
            استيراد من الصين للسعودية
          </h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            خدمات متكاملة للاستيراد من الصين للسعودية مع التخليص الجمركي في جدة، الدمام، والرياض
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-3">🏢 الرياض</h3>
            <p className="text-slate-300 text-sm mb-4">مقرنا الرئيسي في الرياض يخدم جميع مناطق المملكة</p>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>• التخليص الجمركي في الرياض</li>
              <li>• التوزيع لجميع المدن</li>
              <li>• استشارات محلية</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-3">🚢 جدة</h3>
            <p className="text-slate-300 text-sm mb-4">ميناء جدة - بوابة الاستيراد الرئيسية للسعودية</p>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>• التخليص الجمركي في جدة</li>
              <li>• الشحن البحري المباشر</li>
              <li>• تخزين مؤقت في الميناء</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-3">⚓ الدمام</h3>
            <p className="text-slate-300 text-sm mb-4">ميناء الدمام - بوابة الشرقية للسعودية</p>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>• التخليص الجمركي في الدمام</li>
              <li>• الشحن من الخليج</li>
              <li>• خدمة المنطقة الشرقية</li>
            </ul>
          </div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">📋 إجراءات الاستيراد للسعودية</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-amber-500 mb-3">المتطلبات القانونية</h3>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start">
                  <span className="text-green-500 ml-2 mt-1">✓</span>
                  <span>سجل تجاري ورقم استيراد من وزارة التجارة</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 ml-2 mt-1">✓</span>
                  <span>التسجيل في منصة فسح الجمركية</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 ml-2 mt-1">✓</span>
                  <span>الامتثال لمواصفات SASO</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 ml-2 mt-1">✓</span>
                  <span>شهادات المطابقة المطلوبة</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-amber-500 mb-3">الرسوم والضرائب</h3>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start">
                  <span className="text-blue-500 ml-2 mt-1">•</span>
                  <span>ضريبة القيمة المضافة: 15%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 ml-2 mt-1">•</span>
                  <span>الرسوم الجمركية: 5-15% حسب المنتج</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 ml-2 mt-1">•</span>
                  <span>رسوم التخليص الجمركي</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 ml-2 mt-1">•</span>
                  <span>رسوم التخزين في الميناء</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-amber-500 mb-4">🎯 لماذا دينورا للاستيراد للسعودية؟</h2>
          <div className="grid md:grid-cols-2 gap-6 text-slate-300">
            <div>
              <h3 className="font-bold text-white mb-2">فريق محلي</h3>
              <p>فريقنا يتحدث العربية ويفهم القوانين السعودية والإجراءات المحلية.</p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-2">خبرة واسعة</h3>
              <p>أكثر من 10 سنوات خبرة في الاستيراد للسعودية من الصين.</p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-2">شبكة قوية</h3>
              <p>علاقات قوية مع الجمارك السعودية والجهات المختصة.</p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-2">خدمة متكاملة</h3>
              <p>من البحث عن المنتجات إلى التسليم في باب منزلك أو مستودعك.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">جاهز للاستيراد للسعودية؟</h2>
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
