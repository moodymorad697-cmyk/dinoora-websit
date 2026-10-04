import Link from 'next/link'

export default function ComparisonPage() {
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
        "name": "المقارنات",
        "item": "https://www.dinooratrade.com/comparison"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "الصين مقابل خيارات التوريد",
        "item": "https://www.dinooratrade.com/comparison/china-vs-sourcing"
      }
    ]
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "مقارنة الاستيراد من الصين مقابل خيارات التوريد الأخرى",
    "description": "مقارنة شاملة بين الاستيراد من الصين وخيارات التوريد الأخرى مثل التوريد المحلي، التوريد من أوروبا، والتوريد من جنوب شرق آسيا.",
    "author": {
      "@type": "Organization",
      "name": "دينورا للتجارة الدولية"
    },
    "publisher": {
      "@type": "Organization",
      "name": "دينورا للتجارة الدولية",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.dinooratrade.com/logo-dinoora.png"
      }
    },
    "datePublished": "2024-01-01",
    "dateModified": "2024-01-01"
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
            مقارنة الاستيراد من الصين
          </h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            مقارنة شاملة بين الاستيراد من الصين وخيارات التوريد الأخرى لمساعدتك في اتخاذ القرار الأفضل
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">🇨🇳 الاستيراد من الصين</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-green-400 mb-2">المزايا</h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start">
                    <span className="text-green-500 ml-2 mt-1">✓</span>
                    <span>أسعار تنافسية جداً بسبب حجم الإنتاج الكبير</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 ml-2 mt-1">✓</span>
                    <span>تنوع هائل في المنتجات والمصانع</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 ml-2 mt-1">✓</span>
                    <span>قدرة على التخصيص حسب الطلب</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 ml-2 mt-1">✓</span>
                    <span>بنية تحتية لوجستية متطورة</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 ml-2 mt-1">✓</span>
                    <span>خبرة واسعة في التصدير العالمي</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-red-400 mb-2">التحديات</h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start">
                    <span className="text-red-500 ml-2 mt-1">✗</span>
                    <span>مسافة شحن طويلة</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 ml-2 mt-1">✗</span>
                    <span>حاجز لغوي وثقافي</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 ml-2 mt-1">✗</span>
                    <span>الحاجة لفحص الجودة بدقة</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 ml-2 mt-1">✗</span>
                    <span>إجراءات جمركية معقدة أحياناً</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">🏭 التوريد المحلي</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-green-400 mb-2">المزايا</h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start">
                    <span className="text-green-500 ml-2 mt-1">✓</span>
                    <span>شحن سريع ورخيص</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 ml-2 mt-1">✓</span>
                    <span>لا حاجة للتخليص الجمركي</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 ml-2 mt-1">✓</span>
                    <span>سهولة التواصل والتفاوض</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 ml-2 mt-1">✓</span>
                    <span>إمكانية الزيارة المباشرة للمصانع</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-red-400 mb-2">التحديات</h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start">
                    <span className="text-red-500 ml-2 mt-1">✗</span>
                    <span>أسعار أعلى بكثير</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 ml-2 mt-1">✗</span>
                    <span>خيارات محدودة في المنتجات</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 ml-2 mt-1">✗</span>
                    <span>قدرة تخصيص محدودة</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 ml-2 mt-1">✗</span>
                    <span>اعتماد على الموردين المحليين فقط</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">🇪🇺 التوريد من أوروبا</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-green-400 mb-2">المزايا</h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start">
                    <span className="text-green-500 ml-2 mt-1">✓</span>
                    <span>جودة عالية ومعايير صارمة</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 ml-2 mt-1">✓</span>
                    <span>سمعة قوية في السوق</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 ml-2 mt-1">✓</span>
                    <span>حماية حقوق الملكية الفكرية</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-red-400 mb-2">التحديات</h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start">
                    <span className="text-red-500 ml-2 mt-1">✗</span>
                    <span>أسعار مرتفعة جداً</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 ml-2 mt-1">✗</span>
                    <span>حد أدنى للطلب عالي</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 ml-2 mt-1">✗</span>
                    <span>شروط دفع صارمة</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 ml-2 mt-1">✗</span>
                    <span>وقت إنتاج أطول</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">🌏 التوريد من جنوب شرق آسيا</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-green-400 mb-2">المزايا</h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start">
                    <span className="text-green-500 ml-2 mt-1">✓</span>
                    <span>أسعار معقولة</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 ml-2 mt-1">✓</span>
                    <span>مسافة شحن أقصر من الصين</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 ml-2 mt-1">✓</span>
                    <span>بعض الدول لها اتفاقيات تجارية</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 ml-2 mt-1">✓</span>
                    <span>جودة جيدة في بعض القطاعات</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-red-400 mb-2">التحديات</h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start">
                    <span className="text-red-500 ml-2 mt-1">✗</span>
                    <span>حجم إنتاج أقل من الصين</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 ml-2 mt-1">✗</span>
                    <span>تنوع محدود في المنتجات</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 ml-2 mt-1">✗</span>
                    <span>بنية تحتية أقل تطوراً</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 ml-2 mt-1">✗</span>
                    <span>خبرة تصدير محدودة</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-amber-500 mb-4">📊 ملخص المقارنة</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-slate-300">
              <thead>
                <tr className="border-b border-slate-600">
                  <th className="text-right py-3 px-4">المعيار</th>
                  <th className="text-center py-3 px-4">الصين</th>
                  <th className="text-center py-3 px-4">المحلي</th>
                  <th className="text-center py-3 px-4">أوروبا</th>
                  <th className="text-center py-3 px-4">جنوب شرق آسيا</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-700">
                  <td className="text-right py-3 px-4 font-bold">السعر</td>
                  <td className="text-center py-3 px-4 text-green-400">ممتاز</td>
                  <td className="text-center py-3 px-4 text-red-400">ضعيف</td>
                  <td className="text-center py-3 px-4 text-red-400">ضعيف</td>
                  <td className="text-center py-3 px-4 text-yellow-400">جيد</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="text-right py-3 px-4 font-bold">الجودة</td>
                  <td className="text-center py-3 px-4 text-yellow-400">جيد</td>
                  <td className="text-center py-3 px-4 text-green-400">ممتاز</td>
                  <td className="text-center py-3 px-4 text-green-400">ممتاز</td>
                  <td className="text-center py-3 px-4 text-yellow-400">جيد</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="text-right py-3 px-4 font-bold">التنوع</td>
                  <td className="text-center py-3 px-4 text-green-400">ممتاز</td>
                  <td className="text-center py-3 px-4 text-red-400">ضعيف</td>
                  <td className="text-center py-3 px-4 text-yellow-400">جيد</td>
                  <td className="text-center py-3 px-4 text-yellow-400">جيد</td>
                </tr>
                <tr className="border-b border-slate-700">
                  <td className="text-right py-3 px-4 font-bold">سرعة الشحن</td>
                  <td className="text-center py-3 px-4 text-yellow-400">متوسط</td>
                  <td className="text-center py-3 px-4 text-green-400">سريع</td>
                  <td className="text-center py-3 px-4 text-yellow-400">متوسط</td>
                  <td className="text-center py-3 px-4 text-green-400">سريع</td>
                </tr>
                <tr>
                  <td className="text-right py-3 px-4 font-bold">سهولة التعامل</td>
                  <td className="text-center py-3 px-4 text-yellow-400">متوسط</td>
                  <td className="text-center py-3 px-4 text-green-400">سهل</td>
                  <td className="text-center py-3 px-4 text-yellow-400">متوسط</td>
                  <td className="text-center py-3 px-4 text-yellow-400">متوسط</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">الخلاصة</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            الاستيراد من الصين يعتبر الخيار الأفضل لمعظم الشركات بسبب الأسعار التنافسية والتنوع الهائل في المنتجات. مع شركة موثوقة مثل دينورا، يمكن تجنب تحديات الاستيراد والاستفادة القصوى من المزايا.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              استشرنا اليوم
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
