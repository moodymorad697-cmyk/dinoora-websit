import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { ArrowRight, Check, Truck, ShieldCheck, Clock, Globe } from 'lucide-react';

export default function BahrainPage() {
  const locale = useLocale();
  const ar = locale === 'ar';

  const content = ar ? {
    title: "استيراد من الصين إلى البحرين",
    subtitle: "خدمات متكاملة للاستيراد من الصين إلى البحرين",
    description: "دينورا شريكك الموثوق للاستيراد من الصين إلى البحرين. نقدم خدمات التوريد، فحص الجودة، الشحن، والتخليص الجمركي.",
    heroTitle: "استورد من الصين إلى البحرين بثقة وسهولة",
    heroSubtitle: "من المصنع في الصين إلى باب منزلك في البحرين - خدمة متكاملة من البداية للنهاية",
    benefits: [
      { icon: Truck, title: "شحن سريع وموثوق", desc: "شحن بحري وجوي من الصين إلى البحرين في أسرع وقت" },
      { icon: ShieldCheck, title: "فحص جودة شامل", desc: "فحص البضائع في المصانع الصينية قبل الشحن" },
      { icon: Clock, title: "تخليص جمركي سريع", desc: "إجراءات التخليص الجمركي في ميناء البحرين" },
      { icon: Globe, title: "توريد من المصانع", desc: "البحث عن موردين موثوقين والتفاوض على أفضل الأسعار" },
    ],
    products: [
      "الإلكترونيات والأجهزة",
      "الملابس والمنسوجات",
      "الأثاث المنزلي",
      "قطع غيار السيارات",
      "الطاقة الشمسية",
      "المعدات الصناعية",
    ],
    cta: "ابدأ استيرادك من الصين الآن",
    ctaSub: "احصل على استشارة مجانية وعرض سعر مخصص لمشروعك",
    faq: [
      { q: "كم تستغرق عملية الاستيراد من الصين إلى البحرين؟", a: "تتراوح المدة من 15 إلى 40 يوماً حسب طريقة الشحن." },
      { q: "ما هي تكلفة الاستيراد من الصين إلى البحرين؟", a: "التكلفة تعتمد على نوع المنتج والكمية. تواصل معنا للحصول على عرض سعر." },
      { q: "هل تقدمون خدمات التخليص الجمركي في البحرين؟", a: "نعم، نقدم خدمات التخليص الجمركي في ميناء البحرين." },
    ],
  } : {
    title: "Import from China to Bahrain",
    subtitle: "Comprehensive import services from China to Bahrain",
    description: "Dinoora is your trusted partner for importing from China to Bahrain. We offer sourcing, quality inspection, shipping, and customs clearance services.",
    heroTitle: "Import from China to Bahrain with Confidence and Ease",
    heroSubtitle: "From factory in China to your doorstep in Bahrain - end-to-end integrated service",
    benefits: [
      { icon: Truck, title: "Fast and Reliable Shipping", desc: "Sea and air freight from China to Bahrain in the fastest time" },
      { icon: ShieldCheck, title: "Comprehensive Quality Inspection", desc: "Inspect goods in Chinese factories before shipping" },
      { icon: Clock, title: "Fast Customs Clearance", desc: "Customs clearance procedures at Bahrain Port" },
      { icon: Globe, title: "Factory Sourcing", desc: "Find reliable suppliers and negotiate best prices" },
    ],
    products: [
      "Electronics and Devices",
      "Clothing and Textiles",
      "Home Furniture",
      "Car Spare Parts",
      "Solar Energy",
      "Industrial Equipment",
    ],
    cta: "Start Your Import from China Now",
    ctaSub: "Get a free consultation and custom quote for your project",
    faq: [
      { q: "How long does importing from China to Bahrain take?", a: "Duration ranges from 15 to 40 days depending on shipping method." },
      { q: "What is the cost of importing from China to Bahrain?", a: "Cost depends on product type and quantity. Contact us for a quote." },
      { q: "Do you offer customs clearance services in Bahrain?", a: "Yes, we offer customs clearance services at Bahrain Port." },
    ],
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative min-h-[600px] overflow-hidden bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-900">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=90"
            alt={ar ? "شحن حاويات من الصين إلى البحرين" : "Shipping containers from China to Bahrain"}
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
            <p className="mb-8 text-xl text-slate-300">{content.heroSubtitle}</p>
            <Link
              href={`/${locale}/quote`}
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-cyan-500 px-8 py-4 font-bold text-slate-900 transition hover:bg-cyan-400 hover:scale-105"
            >
              {content.cta}
              <ArrowRight className="h-5 w-5 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {content.benefits.map((benefit, index) => (
            <div key={index} className="rounded-2xl bg-slate-800 p-6 border border-cyan-500/20">
              <benefit.icon className="mb-4 h-12 w-12 text-cyan-400" />
              <h3 className="mb-2 text-xl font-bold">{benefit.title}</h3>
              <p className="text-slate-400">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-cyan-500/20 bg-slate-900 px-5 py-20 sm:px-8 lg:px-12">
        <h2 className="mb-8 text-3xl font-black">{ar ? "المنتجات التي نستوردها" : "Products We Import"}</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {content.products.map((product) => (
            <div key={product} className="flex items-center gap-3 rounded-xl bg-slate-800 p-4">
              <Check className="h-5 w-5 text-cyan-400" />
              <span className="font-semibold">{product}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-20 sm:px-8 lg:px-12">
        <h2 className="mb-12 text-3xl font-black text-center">{ar ? "الأسئلة الشائعة" : "FAQ"}</h2>
        <div className="space-y-4">
          {content.faq.map((item, index) => (
            <div key={index} className="rounded-2xl bg-slate-800 p-6 border border-slate-700">
              <h3 className="mb-3 text-lg font-bold text-cyan-400">{item.q}</h3>
              <p className="text-slate-300">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-cyan-600 to-blue-600 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-4xl text-center text-white">
          <h2 className="mb-4 text-3xl font-black">{content.cta}</h2>
          <p className="mb-8 text-xl opacity-90">{content.ctaSub}</p>
          <Link
            href={`/${locale}/quote`}
            className="inline-flex items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 font-bold text-cyan-600 transition hover:bg-slate-100"
          >
            {ar ? "احصل على عرض سعر مجاني" : "Get a Free Quote"}
            <ArrowRight className="h-5 w-5 rtl:rotate-180" />
          </Link>
        </div>
      </section>
    </main>
  );
}
