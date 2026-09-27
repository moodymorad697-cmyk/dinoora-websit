"use client";

import React from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, Ship, Plane, Warehouse, ClipboardCheck, ShieldCheck, Package, MapPin, Clock, CheckCircle2 } from "lucide-react";

export default function MoroccoPage() {
  const locale = useLocale();
  const ar = locale === "ar";

  const content = ar ? {
    title: "خدمات استيراد وشحن البضائع من الصين إلى المغرب",
    intro: "دينورا هي شركة عربية متخصصة في خدمات الاستيراد والشحن من الصين إلى المغرب. نفهم تحديات السوق المغربي وخصوصيته. بعكس شركات الشحن الصينية العامة التي تقدم محتوى مترجم آلياً لكل دول العالم بنفس القالب، نحن نقدم حلولاً مخصصة تفهم الواقع المحلي المغربي.\n\nنقدم خدماتنا من الصين إلى المغرب عبر موانئ الدار البيضاء وطنجة. خدماتنا تشمل البحث عن الموردين، التفاوض مع الموردين، فحص الجودة قبل الشحن، التخزين في الصين، تجميع الشحنات، وتنسيق الشحن البحري والجوي. نتعامل مع جميع أنواع البضائع: الإلكترونيات، المنسوجات، المواد الخام، والمعدات الصناعية.\n\nتتميز دينورا بفهم للواقع المغربي. فريقنا يتحدث العربية بطلاقة ويفهم الثقافة المحلية، مما يجعل التواصل سهلاً وفعالاً. نقدم دعماً من البحث عن المنتج في الصين حتى وصول الشحنة، مع متابعة مستمرة وتحديثات واضحة في كل مرحلة.",
    whyTitle: "لماذا تختار دينورا للمغرب؟",
    whyPoints: [
      "فريق عربي يتحدث لغتك: فريقنا يتحدث العربية بطلاقة ويفهم ثقافتك، بدون حواجز لغوية.",
      "خدمة من البحث حتى الوصول: نبحث لك عن المورد المناسب في الصين ونتفاوض مع الموردين نيابةً عنك.",
      "فحص وتوثيق قبل الشحن: نفحص البضائع قبل الشحن ونوثق حالتها."
    ],
    services: [
      { icon: Ship, title: "الشحن البحري عبر موانئ الدار البيضاء وطنجة", desc: "ننسق شحن البضائع من الصين إلى موانئ الدار البيضاء وطنجة" },
      { icon: Plane, title: "الشحن الجوي السريع", desc: "ننسق الشحن الجوي من الصين للمغرب للبضائع العاجلة" },
      { icon: Warehouse, title: "التخزين في الصين", desc: "نخزن بضائعك في الصين لحين جاهزية الشحن مع تجميع الشحنات" },
      { icon: Package, title: "البحث عن الموردين", desc: "نبحث لك عن المورد المناسب في الصين" },
      { icon: ShieldCheck, title: "فحص الجودة", desc: "نفحص البضائع قبل الشحن ونوثق حالتها" },
      { icon: ClipboardCheck, title: "التنسيق والتوثيق", desc: "ننسق مع الموردين ونجهز المستندات المطلوبة" }
    ],
    cta: "اطلب عرض سعر مجاني"
  } : {
    title: "Import and Shipping Services from China to Morocco",
    intro: "Dinoora is an Arab company specializing in import and shipping services from China to Morocco. We understand the challenges and uniqueness of the Moroccan market. Unlike general Chinese shipping companies that offer auto-translated content for every country in the world using the same template, we provide customized solutions that understand the Moroccan local reality.\n\nWe offer our services from China to Morocco via Casablanca and Tangier ports. Our services include searching for suppliers, negotiating with suppliers, pre-shipment quality inspection, storage in China, shipment consolidation, and coordinating sea and air shipping. We handle all types of goods: electronics, textiles, raw materials, and industrial equipment.\n\nDinoora stands out with understanding of the Moroccan reality. Our team speaks Arabic fluently and understands the local culture, making communication easy and effective. We provide support from searching for the product in China until shipment arrival, with continuous follow-up and clear updates at every stage.",
    whyTitle: "Why Choose Dinoora for Morocco?",
    whyPoints: [
      "Arabic-speaking team: Our team speaks Arabic fluently and understands your culture, without language barriers.",
      "Service from search to arrival: We search for the right supplier in China and negotiate with suppliers on your behalf.",
      "Inspection and documentation before shipment: We inspect goods before shipment and document their condition."
    ],
    services: [
      { icon: Ship, title: "Sea Shipping via Casablanca and Tangier Ports", desc: "We coordinate shipping goods from China to Casablanca and Tangier ports" },
      { icon: Plane, title: "Fast Air Shipping", desc: "We coordinate air shipping from China to Morocco for urgent goods" },
      { icon: Warehouse, title: "Storage in China", desc: "We store your goods in China until ready for shipment with consolidation" },
      { icon: Package, title: "Supplier Search", desc: "We search for the right supplier in China for you" },
      { icon: ShieldCheck, title: "Quality Inspection", desc: "We inspect goods before shipment and document their condition" },
      { icon: ClipboardCheck, title: "Coordination and Documentation", desc: "We coordinate with suppliers and prepare required documents" }
    ],
    cta: "Get a Free Quote"
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": ar ? "خدمات استيراد وشحن من الصين إلى المغرب" : "Import and Shipping Services from China to Morocco",
    "description": content.intro,
    "provider": {
      "@type": "Organization",
      "name": "دينورا للتجارة الدولية",
      "url": "https://www.dinooratrade.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Morocco"
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
              <span className="text-cyan-400 font-semibold">{ar ? "المغرب" : "Morocco"}</span>
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
            {ar ? "خدماتنا للمغرب" : "Our Services for Morocco"}
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
