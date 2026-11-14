"use client";

import React from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, Ship, Plane, Warehouse, ClipboardCheck, ShieldCheck, Package, MapPin, CheckCircle2 } from "lucide-react";

export default function SudanPage() {
  const locale = useLocale();
  const ar = locale === "ar";

  const content = ar ? {
    title: "خدمات استيراد وشحن البضائع من الصين إلى السودان",
    intro: "دينورا تنسق خدمات الاستيراد والشحن من الصين إلى السودان، من البحث عن المورد وفحص البضاعة إلى ترتيب الشحن. نبدأ بتحديد المنتج والكمية والمدينة النهائية، ثم نراجع خيارات النقل والتكلفة المتاحة للشحنة.\n\nيصل الشحن البحري إلى بورتسودان، ثم يحتاج التوصيل إلى الخرطوم أو المدن الأخرى إلى ترتيب نقل داخلي منفصل. تختلف المواعيد وتوفر المسارات، لذلك نؤكد الخيار الحالي مع الناقل قبل اعتماد الحجز.\n\nلإعداد عرض أدق، نحتاج وصف المنتج ورمز HS إن توفر والوزن والأبعاد والمدينة النهائية. تُراجع متطلبات الاستيراد والمستندات لكل صنف مع مخلّص محلي قبل الشحن.",
    whyTitle: "لماذا تختار دينورا للسودان؟",
    whyPoints: [
      "فريق عربي يتحدث لغتك: فريقنا يتحدث العربية بطلاقة ويفهم ثقافتك، بدون حواجز لغوية.",
      "خدمة من البحث حتى الوصول: نبحث لك عن المورد المناسب في الصين ونتفاوض مع الموردين نيابةً عنك.",
      "فحص وتوثيق قبل الشحن: نفحص البضائع قبل الشحن ونوثق حالتها."
    ],
    services: [
      { icon: Ship, title: "الشحن البحري إلى بورتسودان", desc: "نراجع خيارات الوصول البحري ثم نرتب النقل الداخلي إلى مدينة التسليم" },
      { icon: Plane, title: "الشحن الجوي السريع", desc: "ننسق الشحن الجوي من الصين للسودان للبضائع العاجلة" },
      { icon: Warehouse, title: "التخزين في الصين", desc: "نخزن بضائعك في الصين لحين جاهزية الشحن مع تجميع الشحنات" },
      { icon: Package, title: "البحث عن الموردين", desc: "نبحث لك عن المورد المناسب في الصين" },
      { icon: ShieldCheck, title: "فحص الجودة", desc: "نفحص البضائع قبل الشحن ونوثق حالتها" },
      { icon: ClipboardCheck, title: "التنسيق والتوثيق", desc: "ننسق مع الموردين ونجهز المستندات المطلوبة" }
    ],
    cta: "اطلب عرض تجارة وشحن"
  } : {
    title: "Import and Shipping Services from China to Sudan",
    intro: "Dinoora coordinates import and shipping from China to Sudan, from supplier search and inspection to freight planning. We start with the product, quantity, and final city, then review the available transport options and costs for the specific shipment.\n\nSea freight arrives through Port Sudan. Delivery to Khartoum or another city requires a separate inland transport arrangement. Schedules and route availability vary, so we confirm the current option with the carrier before booking.\n\nFor a useful quote, provide the product description, HS code if available, weight, dimensions, and final city. Confirm product-specific import requirements and documents with a local customs broker before dispatch.",
    whyTitle: "Why Choose Dinoora for Sudan?",
    whyPoints: [
      "Arabic-speaking team: Our team speaks Arabic fluently and understands your culture, without language barriers.",
      "Service from search to arrival: We search for the right supplier in China and negotiate with suppliers on your behalf.",
      "Inspection and documentation before shipment: We inspect goods before shipment and document their condition."
    ],
    services: [
      { icon: Ship, title: "Sea Freight to Port Sudan", desc: "We review sea arrival options and arrange inland transport to the delivery city" },
      { icon: Plane, title: "Fast Air Shipping", desc: "We coordinate air shipping from China to Sudan for urgent goods" },
      { icon: Warehouse, title: "Storage in China", desc: "We store your goods in China until ready for shipment with consolidation" },
      { icon: Package, title: "Supplier Search", desc: "We search for the right supplier in China for you" },
      { icon: ShieldCheck, title: "Quality Inspection", desc: "We inspect goods before shipment and document their condition" },
      { icon: ClipboardCheck, title: "Coordination and Documentation", desc: "We coordinate with suppliers and prepare required documents" }
    ],
    cta: "Request Trade and Shipping Quote"
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": ar ? "خدمات استيراد وشحن من الصين إلى السودان" : "Import and Shipping Services from China to Sudan",
    "description": content.intro,
    "provider": {
      "@type": "Organization",
      "name": "Dinoora",
      "url": "https://www.dinooratrade.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Sudan"
    },
    "serviceType": [
      "Sea Shipping",
      "Air Shipping",
      "Warehousing",
      "Quality Inspection",
      "Product Sourcing"
    ]
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 py-24">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px]" />
        </div>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="h-6 w-6 text-cyan-400" />
              <span className="text-cyan-400 font-semibold">{ar ? "السودان" : "Sudan"}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              {content.title}
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-4xl whitespace-pre-line">
              {content.intro}
            </p>
            <div className="mt-8">
              <Link
                href={`/${locale}/quote`}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105"
              >
                {content.cta}
                <ArrowRight className="h-5 w-5 rtl:rotate-180" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-black mb-12 text-center">
            {ar ? "خدماتنا للسودان" : "Our Services for Sudan"}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <p className="text-slate-400">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-black mb-12 text-center">
            {content.whyTitle}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {content.whyPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="h-8 w-8 text-white" />
                </div>
                <p className="text-lg text-slate-300">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-3xl font-black mb-6">
            {ar ? "جاهز للبدء؟" : "Ready to Get Started?"}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {ar ? "تواصل معنا اليوم للحصول على استشارة مجانية" : "Contact us today for a free consultation"}
          </p>
          <Link
            href={`/${locale}/quote`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-cyan-600 font-bold rounded-xl hover:bg-slate-100 transition"
          >
            {content.cta}
            <ArrowRight className="h-5 w-5 rtl:rotate-180" />
          </Link>
        </div>
      </section>
    </main>
  );
}
