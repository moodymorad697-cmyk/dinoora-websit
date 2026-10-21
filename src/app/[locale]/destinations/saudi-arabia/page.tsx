import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { ArrowRight, Check, Truck, ShieldCheck, Clock, Globe, Plane, Ship } from 'lucide-react';

export default function SaudiArabiaPage() {
  const locale = useLocale();
  const ar = locale === 'ar';

  const content = ar ? {
    title: "استيراد من الصين إلى السعودية",
    subtitle: "خدمات متكاملة للاستيراد من الصين إلى جميع مدن المملكة",
    description: "دينورا شريكك الموثوق للاستيراد من الصين إلى السعودية. نقدم خدمات التوريد، فحص الجودة، الشحن، والتخليص الجمركي في جدة والرياض والدمام وجميع مدن المملكة.",
    heroTitle: "استورد من الصين إلى السعودية بثقة وسهولة",
    heroSubtitle: "من المصنع في الصين إلى باب منزلك في السعودية - خدمة متكاملة من البداية للنهاية",
    cities: ["الرياض", "جدة", "الدمام", "مكة المكرمة", "المدينة المنورة", "القصيم", "جازان", "أبها", "تبوك", "حائل"],
    benefits: [
      { icon: Truck, title: "شحن سريع وموثوق", desc: "شحن بحري وجوي من الصين إلى السعودية في أسرع وقت" },
      { icon: ShieldCheck, title: "فحص جودة شامل", desc: "فحص البضائع في المصانع الصينية قبل الشحن" },
      { icon: Clock, title: "تخليص جمركي سريع", desc: "إجراءات التخليص الجمركي في جدة والرياض والدمام" },
      { icon: Globe, title: "توريد من المصانع", desc: "البحث عن موردين موثوقين والتفاوض على أفضل الأسعار" },
    ],
    products: [
      "الإلكترونيات والأجهزة",
      "الملابس والمنسوجات",
      "الأثاث المنزلي",
      "قطع غيار السيارات",
      "الطاقة الشمسية",
      "المعدات الصناعية",
      "الأدوات الكهربائية",
      "المنتجات المنزلية",
    ],
    process: [
      { step: "01", title: "طلب المنتجات", desc: "أخبرنا بالمنتجات التي تريد استيرادها والكميات المطلوبة" },
      { step: "02", title: "البحث والتوريد", desc: "نبحث عن أفضل الموردين في الصين ونحصل على عروض الأسعار" },
      { step: "03", title: "فحص الجودة", desc: "نفحص البضائع في المصانع للتأكد من الجودة والمواصفات" },
      { step: "04", title: "الشحن والتوصيل", desc: "نشحن البضائع إلى السعودية ونكمل إجراءات التخليص الجمركي" },
    ],
    cta: "ابدأ استيرادك من الصين الآن",
    ctaSub: "احصل على استشارة مجانية وعرض سعر مخصص لمشروعك",
    whyUs: "لماذا تختار دينورا للاستيراد من الصين إلى السعودية؟",
    reasons: [
      "خبرة واسعة في السوق السعودي",
      "شبكة واسعة من الموردين الموثوقين في الصين",
      "أسعار تنافسية وشفافة",
      "خدمة عملاء باللغة العربية",
      "تتبع شحناتك في الوقت الفعلي",
      "دعم كامل حتى استلام البضائع",
    ],
    faq: [
      { q: "كم تستغرق عملية الاستيراد من الصين إلى السعودية؟", a: "تتراوح المدة من 15 إلى 45 يوماً حسب طريقة الشحن (بحري أو جوي) وحجم الشحنة." },
      { q: "ما هي تكلفة الاستيراد من الصين إلى السعودية؟", a: "التكلفة تعتمد على نوع المنتج، الكمية، وطريقة الشحن. تواصل معنا للحصول على عرض سعر مخصص." },
      { q: "هل تقدمون خدمات التخليص الجمركي في السعودية؟", a: "نعم، نقدم خدمات التخليص الجمركي في جميع منافذ السعودية (جدة، الرياض، الدمام)." },
      { q: "هل يمكنني استيراد كميات صغيرة؟", a: "نعم، نقدم خدمات الاستيراد للكميات الصغيرة والكبيرة على حد سواء." },
    ],
  } : {
    title: "Import from China to Saudi Arabia",
    subtitle: "Comprehensive import services from China to all cities of the Kingdom",
    description: "Dinoora is your trusted partner for importing from China to Saudi Arabia. We offer sourcing, quality inspection, shipping, and customs clearance services in Jeddah, Riyadh, Dammam, and all cities of the Kingdom.",
    heroTitle: "Import from China to Saudi Arabia with Confidence and Ease",
    heroSubtitle: "From factory in China to your doorstep in Saudi Arabia - end-to-end integrated service",
    cities: ["Riyadh", "Jeddah", "Dammam", "Makkah", "Madinah", "Qassim", "Jazan", "Abha", "Tabuk", "Hail"],
    benefits: [
      { icon: Truck, title: "Fast and Reliable Shipping", desc: "Sea and air freight from China to Saudi Arabia in the fastest time" },
      { icon: ShieldCheck, title: "Comprehensive Quality Inspection", desc: "Inspect goods in Chinese factories before shipping" },
      { icon: Clock, title: "Fast Customs Clearance", desc: "Customs clearance procedures in Jeddah, Riyadh, and Dammam" },
      { icon: Globe, title: "Factory Sourcing", desc: "Find reliable suppliers and negotiate best prices" },
    ],
    products: [
      "Electronics and Devices",
      "Clothing and Textiles",
      "Home Furniture",
      "Car Spare Parts",
      "Solar Energy",
      "Industrial Equipment",
      "Electrical Tools",
      "Home Products",
    ],
    process: [
      { step: "01", title: "Request Products", desc: "Tell us the products you want to import and required quantities" },
      { step: "02", title: "Sourcing", desc: "We search for the best suppliers in China and get price quotes" },
      { step: "03", title: "Quality Inspection", desc: "We inspect goods in factories to ensure quality and specifications" },
      { step: "04", title: "Shipping and Delivery", desc: "We ship goods to Saudi Arabia and complete customs clearance" },
    ],
    cta: "Start Your Import from China Now",
    ctaSub: "Get a free consultation and custom quote for your project",
    whyUs: "Why Choose Dinoora for Importing from China to Saudi Arabia?",
    reasons: [
      "Extensive experience in the Saudi market",
      "Wide network of reliable suppliers in China",
      "Competitive and transparent pricing",
      "Arabic-speaking customer service",
      "Real-time shipment tracking",
      "Full support until goods are received",
    ],
    faq: [
      { q: "How long does importing from China to Saudi Arabia take?", a: "Duration ranges from 15 to 45 days depending on shipping method (sea or air) and shipment size." },
      { q: "What is the cost of importing from China to Saudi Arabia?", a: "Cost depends on product type, quantity, and shipping method. Contact us for a custom quote." },
      { q: "Do you offer customs clearance services in Saudi Arabia?", a: "Yes, we offer customs clearance services at all Saudi ports (Jeddah, Riyadh, Dammam)." },
      { q: "Can I import small quantities?", a: "Yes, we offer import services for both small and large quantities." },
    ],
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative min-h-[600px] overflow-hidden bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-900">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=90"
            alt={ar ? "شحن حاويات من الصين إلى السعودية" : "Shipping containers from China to Saudi Arabia"}
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-950" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.14em] text-cyan-400">
              {content.subtitle}
            </p>
            <h1 className="mb-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              {content.heroTitle}
            </h1>
            <p className="mb-8 text-xl text-slate-300">
              {content.heroSubtitle}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href={`/${locale}/quote`}
                className="inline-flex items-center justify-center gap-3 rounded-lg bg-cyan-500 px-8 py-4 font-bold text-slate-900 transition hover:bg-cyan-400 hover:scale-105"
              >
                {content.cta}
                <ArrowRight className="h-5 w-5 rtl:rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <h2 className="mb-8 text-3xl font-black">
          {ar ? "نخدم جميع مدن المملكة" : "We Serve All Cities of the Kingdom"}
        </h2>
        <div className="flex flex-wrap gap-3">
          {content.cities.map((city) => (
            <span
              key={city}
              className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400 border border-cyan-500/30"
            >
              <Check className="h-4 w-4" />
              {city}
            </span>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="border-y border-cyan-500/20 bg-slate-900 px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-3xl font-black text-center">
            {ar ? "مميزات خدماتنا" : "Our Service Benefits"}
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {content.benefits.map((benefit, index) => (
              <div key={index} className="rounded-2xl bg-slate-800 p-6 border border-cyan-500/20 hover:border-cyan-500/50 transition-all">
                <benefit.icon className="mb-4 h-12 w-12 text-cyan-400" />
                <h3 className="mb-2 text-xl font-bold">{benefit.title}</h3>
                <p className="text-slate-400">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
        <h2 className="mb-12 text-3xl font-black">
          {ar ? "المنتجات التي نستوردها" : "Products We Import"}
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {content.products.map((product) => (
            <div
              key={product}
              className="flex items-center gap-3 rounded-xl bg-slate-900 p-4 border border-slate-800 hover:border-cyan-500/50 transition-all"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">
                <Check className="h-5 w-5" />
              </div>
              <span className="font-semibold">{product}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="border-y border-cyan-500/20 bg-slate-900 px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-3xl font-black text-center">
            {ar ? "عملية الاستيراد خطوة بخطوة" : "Import Process Step by Step"}
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {content.process.map((item) => (
              <div key={item.step} className="relative rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-6 border border-cyan-500/20">
                <span className="mb-4 text-4xl font-black text-cyan-400">{item.step}</span>
                <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
        <h2 className="mb-12 text-3xl font-black">{content.whyUs}</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {content.reasons.map((reason, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500 text-slate-900 font-bold">
                <Check className="h-4 w-4" />
              </div>
              <p className="text-lg text-slate-300">{reason}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-y border-cyan-500/20 bg-slate-900 px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-3xl font-black text-center">
            {ar ? "الأسئلة الشائعة" : "Frequently Asked Questions"}
          </h2>
          <div className="space-y-4">
            {content.faq.map((item, index) => (
              <div key={index} className="rounded-2xl bg-slate-800 p-6 border border-slate-700">
                <h3 className="mb-3 text-lg font-bold text-cyan-400">{item.q}</h3>
                <p className="text-slate-300">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-cyan-600 to-blue-600 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-4xl text-center text-white">
          <h2 className="mb-4 text-3xl font-black sm:text-4xl">{content.cta}</h2>
          <p className="mb-8 text-xl opacity-90">{content.ctaSub}</p>
          <Link
            href={`/${locale}/quote`}
            className="inline-flex items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 font-bold text-cyan-600 transition hover:bg-slate-100 hover:scale-105"
          >
            {ar ? "احصل على عرض سعر مجاني" : "Get a Free Quote"}
            <ArrowRight className="h-5 w-5 rtl:rotate-180" />
          </Link>
        </div>
      </section>
    </main>
  );
}
