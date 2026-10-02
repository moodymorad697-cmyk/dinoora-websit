import Link from 'next/link'

export default function HowToImportFromChina() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "كيفية الاستيراد من الصين خطوة بخطوة",
    "description": "دليل شامل للاستيراد من الصين للمبتدئين، يشمل جميع الخطوات من البحث عن الموردين إلى التخليص الجمركي",
    "step": [
      {
        "@type": "HowToStep",
        "name": "تحديد المنتجات والسوق المستهدف",
        "text": "حدد المنتجات التي تريد استيرادها بناءً على الطلب في السوق المحلي. قم بدراسة المنافسين والأسعار والهوامش الربحية المتوقعة.",
        "image": "https://www.dinooratrade.com/images/step1.jpg"
      },
      {
        "@type": "HowToStep",
        "name": "الحصول على التراخيص القانونية",
        "text": "احصل على السجل التجاري ورقم الاستيراد من وزارة التجارة. سجل في منصة فسح الجمركية. تأكد من الامتثال للمواصفات القياسية السعودية SASO.",
        "image": "https://www.dinooratrade.com/images/step2.jpg"
      },
      {
        "@type": "HowToStep",
        "name": "البحث عن موردين موثوقين في الصين",
        "text": "استخدم منصات مثل Alibaba و Made-in-China للبحث عن الموردين. تحقق من سمعة المورد عبر المراجعات والشهادات. الأفضل التعامل مع شركة توريد محترفة.",
        "image": "https://www.dinooratrade.com/images/step3.jpg"
      },
      {
        "@type": "HowToStep",
        "name": "طلب عينات وفحص الجودة",
        "text": "اطلب عينات من الموردين المحتملين. افحص العينات للتأكد من الجودة والمواصفات. يمكنك استخدام خدمات فحص الجودة في الصين.",
        "image": "https://www.dinooratrade.com/images/step4.jpg"
      },
      {
        "@type": "HowToStep",
        "name": "التفاوض على الأسعار والشروط",
        "text": "تفاوض على الأسعار، الحد الأدنى للطلب، وشروط الدفع. احصل على عروض أسعار من عدة موردين للمقارنة. وقع عقد واضح يحدد جميع الشروط.",
        "image": "https://www.dinooratrade.com/images/step5.jpg"
      },
      {
        "@type": "HowToStep",
        "name": "اختيار طريقة الشحن المناسبة",
        "text": "اختر بين الشحن البحري (اقتصادي لكن بطيء) أو الشحن الجوي (سريع لكن مكلف). للشحنات الكبيرة استخدم حاوية كاملة FCL، وللمتوسطة استخدم حاوية مشتركة LCL.",
        "image": "https://www.dinooratrade.com/images/step6.jpg"
      },
      {
        "@type": "HowToStep",
        "name": "إتمام الدفع وإصدار الفاتورة",
        "text": "أتمم الدفع حسب الشروط المتفق عليها. احصل على فاتورة تجارية Commercial Invoice وقائمة شحن Packing List. تأكد من صحة جميع المستندات.",
        "image": "https://www.dinooratrade.com/images/step7.jpg"
      },
      {
        "@type": "HowToStep",
        "name": "فحص الجودة قبل الشحن",
        "text": "قم بفحص الجودة في المصنع قبل الشحن للتأكد من مطابقة المنتجات للمواصفات. احصل على تقرير فحص مفصل مع صور وفيديو.",
        "image": "https://www.dinooratrade.com/images/step8.jpg"
      },
      {
        "@type": "HowToStep",
        "name": "شحن البضائع وتتبعها",
        "text": "شحن البضائع من الميناء الصيني. احصل على بوليصة الشحن Bill of Lading. تتبع الشحنة عبر رقم الحاوية أو البوليصة.",
        "image": "https://www.dinooratrade.com/images/step9.jpg"
      },
      {
        "@type": "HowToStep",
        "name": "التخليص الجمركي في السعودية",
        "text": "قدم المستندات المطلوبة للتخليص الجمركي في ميناء الوصول. ادفع الرسوم الجمركية وضريبة القيمة المضافة. احصل على إذن الإفراج.",
        "image": "https://www.dinooratrade.com/images/step10.jpg"
      },
      {
        "@type": "HowToStep",
        "name": "استلام البضائع والتوزيع",
        "text": "استلم البضائع من الميناء أو المستودع. قم بفحصها للتأكد من عدم وجود تلف. وزع البضائع للمخازن أو العملاء.",
        "image": "https://www.dinooratrade.com/images/step11.jpg"
      },
      {
        "@type": "HowToStep",
        "name": "التقييم والتحسين المستمر",
        "text": "قيم عملية الاستيراد بالكامل. حدد نقاط القوة والضعف. حسن العملية في المرة القادمة بناءً على الخبرة المكتسبة.",
        "image": "https://www.dinooratrade.com/images/step12.jpg"
      }
    ],
    "tool": [
      {
        "@type": "HowToTool",
        "name": "منصة فسح الجمركية السعودية"
      },
      {
        "@type": "HowToTool",
        "name": "Alibaba - منصة الموردين الصينيين"
      },
      {
        "@type": "HowToTool",
        "name": "خدمات فحص الجودة في الصين"
      }
    ],
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "SAR",
      "value": "يختلف حسب المنتج والكمية"
    },
    "totalTime": "PT30D",
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "سجل تجاري ورقم استيراد"
      },
      {
        "@type": "HowToSupply",
        "name": "رأس مال للاستيراد"
      }
    ]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            كيفية الاستيراد من الصين خطوة بخطوة
          </h1>
          <p className="text-slate-400 text-lg">
            دليل شامل للمبتدئين للاستيراد من الصين بنجاح
          </p>
        </div>

        <div className="mb-8 bg-amber-500/10 border border-amber-500/30 rounded-lg p-6">
          <h2 className="text-xl font-bold text-amber-500 mb-2">⏱️ المدة التقديرية</h2>
          <p className="text-slate-300">30-45 يوماً من البحث عن الموردين إلى استلام البضائع</p>
        </div>

        <div className="space-y-6">
          {structuredData.step.map((step, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg overflow-hidden"
            >
              <div className="flex items-start p-6">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {step.name}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">🛠️ الأدوات المطلوبة</h3>
            <ul className="space-y-2">
              {structuredData.tool.map((tool, index) => (
                <li key={index} className="text-slate-300 flex items-center">
                  <span className="text-amber-500 ml-2">•</span>
                  {tool.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">📋 المتطلبات الأساسية</h3>
            <ul className="space-y-2">
              {structuredData.supply.map((supply, index) => (
                <li key={index} className="text-slate-300 flex items-center">
                  <span className="text-amber-500 ml-2">•</span>
                  {supply.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-red-500/10 border border-red-500/30 rounded-lg p-6">
          <h3 className="text-xl font-bold text-red-400 mb-4">⚠️ نصائح هامة</h3>
          <ul className="space-y-2 text-slate-300">
            <li className="flex items-start">
              <span className="text-red-400 ml-2">•</span>
              <span>تعامل دائماً مع موردين موثوقين وتحقق من سمعتهم</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-400 ml-2">•</span>
              <span>اطب دائماً عينات قبل الشحن الكبير</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-400 ml-2">•</span>
              <span>استخدم عقود واضحة تحدد جميع الشروط</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-400 ml-2">•</span>
              <span>تأكد من التأمين على الشحنات</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-400 ml-2">•</span>
              <span>تعرف على القوانين الجمركية في بلدك</span>
            </li>
          </ul>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-400 mb-6">
            هل تحتاج مساعدة في الاستيراد من الصين؟ نحن هنا لمساعدتك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              تواصل معنا
            </Link>
            <Link
              href="/faq"
              className="inline-block px-8 py-3 border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white font-semibold rounded-lg transition-colors duration-300"
            >
              الأسئلة الشائعة
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
