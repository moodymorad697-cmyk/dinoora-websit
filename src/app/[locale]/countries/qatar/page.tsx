"use client";

import React from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, Ship, Plane, Warehouse, ClipboardCheck, ShieldCheck, Package, MapPin, Clock, CheckCircle2 } from "lucide-react";

export default function QatarPage() {
  const locale = useLocale();
  const ar = locale === "ar";

  const content = ar ? {
    title: "خدمات استيراد وشحن البضائع من الصين إلى قطر",
    intro: "دينورا هي شركة عربية متخصصة في خدمات الاستيراد والشحن من الصين إلى قطر. نفهم تماماً تحديات السوق القطري وخصوصيته، من متطلبات الترخيص المعقدة إلى الإجراءات الجمركية في ميناء حمد. بعكس شركات الشحن الصينية العامة التي تقدم محتوى مترجم آلياً لكل دول العالم بنفس القالب، نحن نقدم حلولاً مخصصة تفهم الواقع المحلي القطري.\n\nنقدم شحن البضائع من الصين إلى قطر عبر ميناء حمد، وهو الميناء الرئيسي لقطر على الخليج العربي. خدماتنا تشمل الشحن البحري والجوي، التخليص الجمركي الكامل، التخزين المؤقت في الصين، التوريد من المصانع المباشرة، وفحص الجودة قبل الشحن. نتعامل مع جميع أنواع البضائع: الإلكترونيات، المنسوجات، المواد الخام، المواد الغذائية، والمعدات الصناعية.\n\nتتميز دينورا بفهم عميق للواقع القطري. نحن ندرك أن قطر لها متطلبات استيراد خاصة وإجراءات تنظيمية محددة، ونحن نتعامل مع هذه التعقيدات بمرونة وخبرة. فريقنا يتحدث العربية بطلاقة ويفهم الثقافة المحلية، مما يجعل التواصل سهلاً وفعالاً. نقدم دعماً كامل من المصنع في الصين حتى باب منزلك في قطر، مع متابعة مستمرة وتحديثات واضحة في كل مرحلة.",
    whyTitle: "لماذا تختار دينورا لقطر؟",
    whyPoints: [
      "خبرة محلية عميقة: نفهم متطلبات الترخيص والإجراءات الجمركية القطرية، ونتعامل مع حالات القوة القاهرة بمرونة.",
      "خدمة شاملة موحدة: من التوريد والفحص في الصين حتى التسليم في قطر، كل شيء من مكان واحد.",
      "دعم عربي متخصص: فريق عربي يتحدث لغتك ويفهم ثقافتك، بدون حواجز لغوية أو ثقافية."
    ],
    services: [
      { icon: Ship, title: "الشحن البحري عبر ميناء حمد", desc: "شحن بضائع من الصين إلى ميناء حمد بأسعار تنافسية مع متابعة كاملة" },
      { icon: Plane, title: "الشحن الجوي السريع", desc: "شحن جوي من الصين لقطر للبضائع العاجلة مع تتبع لحظي" },
      { icon: ClipboardCheck, title: "التخليص الجمركي", desc: "إجراءات تخليص جمركي كاملة في ميناء حمد مع فهم متطلبات الاستيراد القطرية" },
      { icon: Warehouse, title: "التخزين المؤقت", desc: "تخزين آمن في الصين لحين جاهزية الشحن مع تجميع الشحنات" },
      { icon: Package, title: "التوريد المباشر", desc: "توريد من المصانع الصينية المباشرة بأسعار المصنع" },
      { icon: ShieldCheck, title: "فحص الجودة", desc: "فحص شامل للبضائع قبل الشحن لضمان الجودة" }
    ],
    cta: "اطلب عرض سعر مجاني"
  } : {
    title: "Import and Shipping Services from China to Qatar",
    intro: "Dinoora is an Arab company specializing in import and shipping services from China to Qatar. We fully understand the challenges and uniqueness of the Qatari market, from complex licensing requirements to customs procedures at Hamad Port. Unlike general Chinese shipping companies that offer auto-translated content for every country in the world using the same template, we provide customized solutions that understand the Qatari local reality.\n\nWe offer shipping goods from China to Qatar via Hamad Port, Qatar's main port on the Arabian Gulf. Our services include sea and air shipping, full customs clearance, temporary storage in China, direct sourcing from factories, and pre-shipment quality inspection. We handle all types of goods: electronics, textiles, raw materials, food products, and industrial equipment.\n\nDinoora stands out with deep understanding of the Qatari reality. We recognize that Qatar has specific import requirements and regulatory procedures, and we handle these complexities with flexibility and expertise. Our team speaks Arabic fluently and understands the local culture, making communication easy and effective. We provide full support from the factory in China to your doorstep in Qatar, with continuous follow-up and clear updates at every stage.",
    whyTitle: "Why Choose Dinoora for Qatar?",
    whyPoints: [
      "Deep local expertise: We understand Qatari licensing requirements and customs procedures, and handle force majeure situations with flexibility.",
      "Unified comprehensive service: From sourcing and inspection in China to delivery in Qatar, everything from one place.",
      "Specialized Arab support: An Arab team that speaks your language and understands your culture, without language or cultural barriers."
    ],
    services: [
      { icon: Ship, title: "Sea Shipping via Hamad Port", desc: "Shipping goods from China to Hamad Port at competitive prices with full tracking" },
      { icon: Plane, title: "Fast Air Shipping", desc: "Air shipping from China to Qatar for urgent goods with real-time tracking" },
      { icon: ClipboardCheck, title: "Customs Clearance", desc: "Full customs clearance procedures at Hamad Port with understanding of Qatari import requirements" },
      { icon: Warehouse, title: "Temporary Storage", desc: "Secure storage in China until ready for shipment with shipment consolidation" },
      { icon: Package, title: "Direct Sourcing", desc: "Sourcing from direct Chinese factories at factory prices" },
      { icon: ShieldCheck, title: "Quality Inspection", desc: "Comprehensive inspection of goods before shipment to ensure quality" }
    ],
    cta: "Get a Free Quote"
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": ar ? "خدمات استيراد وشحن من الصين إلى قطر" : "Import and Shipping Services from China to Qatar",
    "description": content.intro,
    "provider": {
      "@type": "Organization",
      "name": "دينورا للتجارة الدولية",
      "url": "https://www.dinooratrade.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Qatar"
    },
    "serviceType": [
      "Sea Shipping",
      "Air Shipping",
      "Customs Clearance",
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
              <span className="text-cyan-400 font-semibold">{ar ? "قطر" : "Qatar"}</span>
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
            {ar ? "خدماتنا لقطر" : "Our Services for Qatar"}
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
