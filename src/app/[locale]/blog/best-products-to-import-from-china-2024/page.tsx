import React from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { ArrowRight, Check, TrendingUp, Package } from 'lucide-react';

export default function BestProductsToImportFromChina() {
  const locale = useLocale();
  const ar = locale === 'ar';

  const content = ar ? {
    title: "اختيار المنتجات المناسبة للاستيراد من الصين - دليل للمستوردين العرب",
    subtitle: "قيّم المنتجات المرشحة للاستيراد وفق طلب السوق والتكلفة ومتطلبات الجودة",
    intro: "تعرف على طريقة تقييم المنتجات المرشحة للاستيراد من الصين وفق الطلب المحلي والتكلفة ومتطلبات الجودة، بدلاً من الاعتماد على قوائم أرباح عامة لا تناسب كل مشروع.",
    products: [
      {
        name: "الإلكترونيات والأجهزة الذكية",
        icon: "📱",
        demand: "عالي جداً",
        profit: "30-50%",
        description: "الهواتف الذكية، السماعات، الشواحن، الكابلات، والأجهزة المنزلية الذكية. الطلب مستمر في جميع دول الخليج.",
        tips: ["التحقق من الامتثال للمواصفات السعودية", "طلب شهادات الجودة", "التركيز على العلامات التجارية الموثوقة"]
      },
      {
        name: "الملابس والمنسوجات",
        icon: "👕",
        demand: "عالي",
        profit: "40-60%",
        description: "الملابس الرجالية والنسائية، الأطفال، والملابس الرياضية. السعودية والإمارات من أكبر أسواق الملابس في المنطقة.",
        tips: ["دراسة الموضات الحالية", "التركيز على الجودة", "طلب عينات من الأقمشة"]
      },
      {
        name: "الأثاث المنزلي والمكتبي",
        icon: "🪑",
        demand: "متوسط إلى عالي",
        profit: "35-55%",
        description: "الأثاث المنزلي الحديث، الأثاث المكتبي، والديكور. الطلب مرتفع مع نمو قطاع العقارات في الخليج.",
        tips: ["التحقق من متطلبات التجميع", "دراسة أسعار الشحن للأثاث الكبير", "التركيز على التصاميم العصرية"]
      },
      {
        name: "قطع غيار السيارات",
        icon: "🔧",
        demand: "عالي",
        profit: "25-45%",
        description: "قطع غيار السيارات الصينية والأوروبية، الإطارات، والزيوت. سوق السيارات في الخليج كبير ومتنامٍ.",
        tips: ["التحقق من التوافق مع السيارات المحلية", "طلب شهادات الجودة", "دراسة المنافسة"]
      },
      {
        name: "الطاقة الشمسية والمعدات",
        icon: "☀️",
        demand: "مرتفع جداً",
        profit: "40-70%",
        description: "الألواح الشمسية، الإنفرترات، البطاريات، ومعدات الطاقة المتجددة. السعودية تستثمر بكثافة في الطاقة الشمسية.",
        tips: ["التحقق من الكفاءة والجودة", "طلب شهادات الامتثال", "دراسة الفرص الحكومية"]
      },
      {
        name: "الأدوات الكهربائية والمعدات",
        icon: "⚡",
        demand: "متوسط إلى عالي",
        profit: "30-50%",
        description: "المعدات الصناعية، الأدوات الكهربائية، ومعدات البناء. الطلب مرتفع مع نمو قطاع البناء في المنطقة.",
        tips: ["التحقق من معايير السلامة", "طلب شهادات الجودة", "دراسة السوق المحلي"]
      },
      {
        name: "المنتجات المنزلية والمطبخية",
        icon: "🏠",
        demand: "عالي",
        profit: "35-55%",
        description: "الأواني المنزلية، أدوات المطبخ، والأجهزة المنزلية الصغيرة. الطلب مستمر خاصة في المواسم والأعياد.",
        tips: ["التركيز على الجودة والسلامة", "دراسة التفضيلات المحلية", "طلب عينات"]
      },
      {
        name: "اللعب والألعاب",
        icon: "🎮",
        demand: "متوسطة",
        profit: "40-60%",
        description: "ألعاب الأطفال، الألعاب الإلكترونية، واللعب التعليمية. الطلب يزداد في مواسم الأعياد والمناسبات.",
        tips: ["التحقق من معايير السلامة", "دراسة الأعمار المستهدفة", "التركيز على الجودة"]
      }
    ],
    factors: {
      title: "عوامل تقييم المنتجات",
      items: [
        "دراسة الطلب في السوق المحلي",
        "تحليل المنافسة والأسعار",
        "حساب هامش الربح المتوقع",
        "التحقق من المتطلبات القانونية",
        "تقييم تكاليف الشحن والتخليص",
        "دراسة موسمية المنتجات"
      ]
    },
    mistakes: {
      title: "أخطاء شائعة يجب تجنبها",
      items: [
        "استيراد منتجات بدون دراسة السوق",
        "التعامل مع موردين غير موثوقين",
        "تجاهل فحص الجودة",
        "عدم حساب التكاليف الكاملة",
        "تجاهل المتطلبات القانونية",
        "الاستيراد بكميات كبيرة جداً في البداية"
      ]
    },
    cta: "ابدأ استيراد منتجات مربحة من الصين",
    ctaSub: "دينورا تساعدك في اختيار أفضل المنتجات وتوريدها من الصين"
  } : {
    title: "Choosing Products to Import from China - A Guide for Arab Importers",
    subtitle: "Assess product opportunities based on market demand, total cost, and quality requirements",
    intro: "Learn how to assess products for import from China based on local demand, total costs, and quality requirements instead of relying on generic profit lists.",
    products: [
      {
        name: "Electronics and Smart Devices",
        icon: "📱",
        demand: "Very High",
        profit: "30-50%",
        description: "Smartphones, headphones, chargers, cables, and smart home devices. Demand is consistent across all GCC countries.",
        tips: ["Check compliance with Saudi specifications", "Request quality certificates", "Focus on trusted brands"]
      },
      {
        name: "Clothing and Textiles",
        icon: "👕",
        demand: "High",
        profit: "40-60%",
        description: "Men's and women's clothing, children's wear, and sportswear. Saudi Arabia and UAE are among the largest clothing markets in the region.",
        tips: ["Study current fashion trends", "Focus on quality", "Request fabric samples"]
      },
      {
        name: "Home and Office Furniture",
        icon: "🪑",
        demand: "Medium to High",
        profit: "35-55%",
        description: "Modern home furniture, office furniture, and decor. Demand is high with real estate sector growth in the GCC.",
        tips: ["Check assembly requirements", "Study shipping costs for large furniture", "Focus on modern designs"]
      },
      {
        name: "Car Spare Parts",
        icon: "🔧",
        demand: "High",
        profit: "25-45%",
        description: "Chinese and European car spare parts, tires, and oils. The car market in the GCC is large and growing.",
        tips: ["Check compatibility with local cars", "Request quality certificates", "Study competition"]
      },
      {
        name: "Solar Energy and Equipment",
        icon: "☀️",
        demand: "Very High",
        profit: "40-70%",
        description: "Solar panels, inverters, batteries, and renewable energy equipment. Saudi Arabia is investing heavily in solar energy.",
        tips: ["Check efficiency and quality", "Request compliance certificates", "Study government opportunities"]
      },
      {
        name: "Electrical Tools and Equipment",
        icon: "⚡",
        demand: "Medium to High",
        profit: "30-50%",
        description: "Industrial equipment, electrical tools, and construction equipment. Demand is high with construction sector growth in the region.",
        tips: ["Check safety standards", "Request quality certificates", "Study local market"]
      },
      {
        name: "Home and Kitchen Products",
        icon: "🏠",
        demand: "High",
        profit: "35-55%",
        description: "Home utensils, kitchen tools, and small home appliances. Demand is consistent especially during seasons and holidays.",
        tips: ["Focus on quality and safety", "Study local preferences", "Request samples"]
      },
      {
        name: "Toys and Games",
        icon: "🎮",
        demand: "Medium",
        profit: "40-60%",
        description: "Children's toys, electronic games, and educational toys. Demand increases during holidays and occasions.",
        tips: ["Check safety standards", "Study target ages", "Focus on quality"]
      }
    ],
    factors: {
      title: "Factors for Evaluating Products",
      items: [
        "Study local market demand",
        "Analyze competition and prices",
        "Calculate expected profit margin",
        "Check legal requirements",
        "Evaluate shipping and clearance costs",
        "Study product seasonality"
      ]
    },
    mistakes: {
      title: "Common Mistakes to Avoid",
      items: [
        "Importing products without market study",
        "Dealing with unreliable suppliers",
        "Ignoring quality inspection",
        "Not calculating total costs",
        "Ignoring legal requirements",
        "Importing very large quantities initially"
      ]
    },
    cta: "Start Importing Profitable Products from China",
    ctaSub: "Dinoora helps you choose the best products and source them from China"
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <article className="mx-auto max-w-4xl px-5 py-20 sm:px-8 lg:px-12">
        <header className="mb-12">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-cyan-400">
            {ar ? "دليل المنتجات" : "Product Guide"}
          </p>
          <h1 className="mb-6 text-4xl font-black leading-tight sm:text-5xl">
            {content.title}
          </h1>
          <p className="text-xl text-slate-300">{content.intro}</p>
        </header>

        <section className="mb-12">
          <h2 className="mb-8 text-3xl font-black">
            {ar ? "أفضل المنتجات للاستيراد" : "Best Products to Import"}
          </h2>
          <div className="grid gap-6">
            {content.products.map((product, index) => (
              <div key={index} className="rounded-2xl bg-slate-900 p-6 border border-slate-800 hover:border-cyan-500/50 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl">{product.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                    <p className="text-slate-300 mb-4">{product.description}</p>
                    <div className="rounded-xl bg-slate-800 p-4">
                      <h4 className="font-bold text-cyan-400 mb-2">{ar ? "نصائح:" : "Tips:"}</h4>
                      <ul className="space-y-1">
                        {product.tips.map((tip, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                            <Check className="mt-1 h-4 w-4 text-cyan-400 shrink-0" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-gradient-to-br from-green-600/20 to-emerald-600/20 p-6 border border-green-500/30">
            <div className="flex items-center gap-3 mb-4">
              <Package className="h-8 w-8 text-green-400" />
              <h2 className="text-xl font-bold">{content.factors.title}</h2>
            </div>
            <ul className="space-y-3">
              {content.factors.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 text-green-400 shrink-0" />
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-red-600/20 to-orange-600/20 p-6 border border-red-500/30">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="h-8 w-8 text-red-400" />
              <h2 className="text-xl font-bold">{content.mistakes.title}</h2>
            </div>
            <ul className="space-y-3">
              {content.mistakes.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                    <span className="text-red-400 text-xs">✕</span>
                  </div>
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="text-center">
          <h2 className="mb-4 text-3xl font-black">{content.cta}</h2>
          <p className="mb-8 text-xl text-slate-300">{content.ctaSub}</p>
          <Link
            href={`/${locale}/quote`}
            className="inline-flex items-center justify-center gap-3 rounded-lg bg-cyan-500 px-8 py-4 font-bold text-slate-900 transition hover:bg-cyan-400 hover:scale-105"
          >
            {ar ? "احصل على استشارة مجانية" : "Get a Free Consultation"}
            <ArrowRight className="h-5 w-5 rtl:rotate-180" />
          </Link>
        </section>
      </article>
    </main>
  );
}
