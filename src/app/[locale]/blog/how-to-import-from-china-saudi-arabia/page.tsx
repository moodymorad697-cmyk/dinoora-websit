import React from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { ArrowRight, Check, Clock, Truck, ShieldCheck, Globe } from 'lucide-react';

export default function ImportFromChinaSaudiArabiaGuide() {
  const locale = useLocale();
  const ar = locale === 'ar';

  const content = ar ? {
    title: "كيف تستورد من الصين إلى السعودية خطوة بخطوة 2024",
    subtitle: "دليل شامل للمبتدئين للاستيراد من الصين إلى المملكة العربية السعودية",
    intro: "تعلم كيفية الاستيراد من الصين إلى السعودية من البداية للنهاية. هذا الدليل يغطي كل ما تحتاج معرفته من اختيار المنتجات إلى استلام البضائع في جدة أو الرياض.",
    sections: [
      {
        title: "الخطوة 1: تحديد المنتجات والكميات",
        content: "ابدأ بتحديد المنتجات التي تريد استيرادها والكميات المطلوبة. تأكد من دراسة السوق السعودي والطلب على هذه المنتجات. بعض المنتجات المطلوبة في السعودية تشمل: الإلكترونيات، الملابس، الأثاث، قطع غيار السيارات، والطاقة الشمسية.",
        tips: ["دراسة السوق المحلي", "تحديد المنافسين", "تحديد هامش الربح المطلوب"]
      },
      {
        title: "الخطوة 2: البحث عن موردين موثوقين في الصين",
        content: "ابحث عن موردين في الصين عبر منصات مثل 1688، علي بابا، وتاوباو. تأكد من التحقق من سمعة المورد من خلال التقييمات والمراجعات. يمكنك أيضاً زيارة معارض كانتون للتعرف على الموردين شخصياً.",
        tips: ["التحقق من ترخيص المورد", "طلب عينات قبل الطلب الكبير", "مقارنة الأسعار بين موردين متعددين"]
      },
      {
        title: "الخطوة 3: فحص الجودة قبل الشحن",
        content: "قبل شحن البضائع، تأكد من فحص الجودة. يمكنك توظيف شركة تفتيش مستقلة أو زيارة المصنع شخصياً. تحقق من المواصفات والكميات والتغليف.",
        tips: ["فحص قبل الإنتاج", "فحص أثناء الإنتاج", "فحص قبل الشحن"]
      },
      {
        title: "الخطوة 4: اختيار طريقة الشحن المناسبة",
        content: "اختر بين الشحن البحري والجوي بناءً على حجم الشحنة والوقت المتاح. الشحن البحري أرخص لكن يستغرق وقتاً أطول (20-45 يوم)، بينما الشحن الجوي أسرع (3-7 أيام) لكن أغلى.",
        tips: ["الشحن البحري للكميات الكبيرة", "الشحن الجوي للمنتجات العالية القيمة", "الشحن البري للدول المجاورة"]
      },
      {
        title: "الخطوة 5: التخليص الجمركي في السعودية",
        content: "عند وصول الشحنة إلى السعودية، ستحتاج إلى إكمال إجراءات التخليص الجمركي. المستندات المطلوبة تشمل: الفاتورة التجارية، قائمة التعبئة، شهادة المنشأ، ورموز HS.",
        tips: ["التعامل مع مخلص جمركي معتمد", "معرفة الرسوم الجمركية المطبقة", "الامتثال للمواصفات السعودية"]
      },
      {
        title: "الخطوة 6: استلام البضائع والتوزيع",
        content: "بعد إكمال التخليص الجمركي، يمكنك استلام البضائع وتوزيعها. تأكد من التخزين المناسب والتأمين على البضائع.",
        tips: ["التخزين في مستودعات آمنة", "التأمين على البضائع", "التخطيط للتوزيع"]
      }
    ],
    costs: {
      title: "تكاليف الاستيراد من الصين إلى السعودية",
      items: [
        "تكلفة البضائع من المورد",
        "تكلفة الشحن (بحري أو جوي)",
        "رسوم التخليص الجمركي",
        "رسوم الميناء",
        "تكلفة التأمين",
        "تكلفة التخزين"
      ]
    },
    timeline: {
      title: "الجدول الزمني المتوقع",
      items: [
        "البحث عن المورد: 1-2 أسابيع",
        "إنتاج البضائع: 2-4 أسابيع",
        "الشحن البحري: 20-45 يوم",
        "التخليص الجمركي: 3-7 أيام",
        "المجموع: 4-8 أسابيع"
      ]
    },
    cta: "ابدأ استيرادك من الصين الآن",
    ctaSub: "دينورا تساعدك في كل خطوة من الاستيراد من الصين إلى السعودية"
  } : {
    title: "How to Import from China to Saudi Arabia Step by Step 2024",
    subtitle: "Comprehensive guide for beginners to import from China to Saudi Arabia",
    intro: "Learn how to import from China to Saudi Arabia from start to finish. This guide covers everything you need to know from selecting products to receiving goods in Jeddah or Riyadh.",
    sections: [
      {
        title: "Step 1: Define Products and Quantities",
        content: "Start by defining the products you want to import and the required quantities. Make sure to study the Saudi market and demand for these products. Some products in demand in Saudi Arabia include: electronics, clothing, furniture, car spare parts, and solar energy.",
        tips: ["Study the local market", "Identify competitors", "Determine required profit margin"]
      },
      {
        title: "Step 2: Find Reliable Suppliers in China",
        content: "Search for suppliers in China through platforms like 1688, Alibaba, and Taobao. Make sure to verify the supplier's reputation through reviews and ratings. You can also visit Canton Fair to meet suppliers personally.",
        tips: ["Verify supplier license", "Request samples before bulk order", "Compare prices from multiple suppliers"]
      },
      {
        title: "Step 3: Quality Inspection Before Shipping",
        content: "Before shipping goods, ensure quality inspection. You can hire an independent inspection company or visit the factory personally. Check specifications, quantities, and packaging.",
        tips: ["Pre-production inspection", "During production inspection", "Pre-shipment inspection"]
      },
      {
        title: "Step 4: Choose Appropriate Shipping Method",
        content: "Choose between sea and air freight based on shipment size and available time. Sea freight is cheaper but takes longer (20-45 days), while air freight is faster (3-7 days) but more expensive.",
        tips: ["Sea freight for large quantities", "Air freight for high-value products", "Land freight for neighboring countries"]
      },
      {
        title: "Step 5: Customs Clearance in Saudi Arabia",
        content: "When goods arrive in Saudi Arabia, you'll need to complete customs clearance procedures. Required documents include: commercial invoice, packing list, certificate of origin, and HS codes.",
        tips: ["Work with licensed customs broker", "Know applicable customs duties", "Comply with Saudi specifications"]
      },
      {
        title: "Step 6: Receive Goods and Distribution",
        content: "After completing customs clearance, you can receive goods and distribute them. Ensure proper storage and insurance for goods.",
        tips: ["Store in secure warehouses", "Insure goods", "Plan distribution"]
      }
    ],
    costs: {
      title: "Costs of Importing from China to Saudi Arabia",
      items: [
        "Cost of goods from supplier",
        "Shipping cost (sea or air)",
        "Customs clearance fees",
        "Port fees",
        "Insurance cost",
        "Storage cost"
      ]
    },
    timeline: {
      title: "Expected Timeline",
      items: [
        "Supplier search: 1-2 weeks",
        "Goods production: 2-4 weeks",
        "Sea freight: 20-45 days",
        "Customs clearance: 3-7 days",
        "Total: 4-8 weeks"
      ]
    },
    cta: "Start Your Import from China Now",
    ctaSub: "Dinoora helps you in every step of importing from China to Saudi Arabia"
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <article className="mx-auto max-w-4xl px-5 py-20 sm:px-8 lg:px-12">
        <header className="mb-12">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-cyan-400">
            {ar ? "دليل الاستيراد" : "Import Guide"}
          </p>
          <h1 className="mb-6 text-4xl font-black leading-tight sm:text-5xl">
            {content.title}
          </h1>
          <p className="text-xl text-slate-300">{content.intro}</p>
        </header>

        {content.sections.map((section, index) => (
          <section key={index} className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-cyan-400">{section.title}</h2>
            <p className="mb-6 text-lg leading-8 text-slate-300">{section.content}</p>
            <div className="rounded-xl bg-slate-900 p-6 border border-slate-800">
              <h3 className="mb-4 font-bold text-white">{ar ? "نصائح مهمة:" : "Important Tips:"}</h3>
              <ul className="space-y-3">
                {section.tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="mt-1 h-5 w-5 text-cyan-400 shrink-0" />
                    <span className="text-slate-300">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}

        <section className="mb-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-slate-900 p-6 border border-slate-800">
            <div className="flex items-center gap-3 mb-4">
              <Truck className="h-8 w-8 text-cyan-400" />
              <h2 className="text-xl font-bold">{content.costs.title}</h2>
            </div>
            <ul className="space-y-3">
              {content.costs.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-cyan-400 shrink-0" />
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-slate-900 p-6 border border-slate-800">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="h-8 w-8 text-cyan-400" />
              <h2 className="text-xl font-bold">{content.timeline.title}</h2>
            </div>
            <ul className="space-y-3">
              {content.timeline.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-cyan-400 shrink-0" />
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-12 rounded-2xl bg-gradient-to-br from-cyan-600/20 to-blue-600/20 p-8 border border-cyan-500/30">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="h-8 w-8 text-cyan-400" />
            <h2 className="text-2xl font-bold">
              {ar ? "لماذا تختار دينورا للاستيراد من الصين إلى السعودية؟" : "Why Choose Dinoora for Importing from China to Saudi Arabia?"}
            </h2>
          </div>
          <ul className="space-y-3">
            {[
              ar ? "خبرة واسعة في السوق السعودي" : "Extensive experience in the Saudi market",
              ar ? "شبكة واسعة من الموردين الموثوقين" : "Wide network of reliable suppliers",
              ar ? "خدمة تتبع شحنات في الوقت الفعلي" : "Real-time shipment tracking",
              ar ? "دعم كامل حتى استلام البضائع" : "Full support until goods are received",
              ar ? "أسعار تنافسية وشفافة" : "Competitive and transparent pricing"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 text-cyan-400 shrink-0" />
                <span className="text-slate-300">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="text-center">
          <h2 className="mb-4 text-3xl font-black">{content.cta}</h2>
          <p className="mb-8 text-xl text-slate-300">{content.ctaSub}</p>
          <Link
            href={`/${locale}/quote`}
            className="inline-flex items-center justify-center gap-3 rounded-lg bg-cyan-500 px-8 py-4 font-bold text-slate-900 transition hover:bg-cyan-400 hover:scale-105"
          >
            {ar ? "احصل على عرض سعر مجاني" : "Get a Free Quote"}
            <ArrowRight className="h-5 w-5 rtl:rotate-180" />
          </Link>
        </section>
      </article>
    </main>
  );
}
