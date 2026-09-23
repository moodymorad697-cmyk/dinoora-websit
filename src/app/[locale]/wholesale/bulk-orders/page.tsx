"use client";

import React from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, CheckCircle2, Truck, Package, ShieldCheck, Users, Award } from "lucide-react";

export default function WholesaleBulkOrdersPage() {
  const locale = useLocale();
  const ar = locale === "ar";

  const content = ar ? {
    title: "الاستيراد بالجملة للطلبات الكبيرة - دينورا للتجارة الدولية",
    description: "خدمات متخصصة للتجار الكبار وأصحاب المتاجر والمصانع بخصومات الكميات الكبيرة",
    intro: "دينورا للتجارة الدولية تقدم خدمات متخصصة للتجار الكبار وأصحاب المتاجر والمصانع الذين يحتاجون استيراد كميات كبيرة من الصين. نحن نقدم خصومات تنافسية للكميات الكبيرة، مما يسمح لك بتحقيق هوامش ربح أعلى.\n\nنحن ندير شحنات الحاويات الكاملة (FCL) بكفاءة عالية، مع إمكانية تجميع الشحنات من موردين متعددين في حاوية واحدة لتقليل التكاليف. كما نقدم عقود توريد طويلة الأمد للعملاء الكبار الذين يحتاجون إمدادات مستمرة.\n\nللعملاء الكبار، نخصص مدير حساب مخصص يتابع جميع احتياجاتك الاستيرادية ويقدم دعماً شخصياً. خدماتنا تشمل خصومات الكميات الكبيرة، إدارة شحنات الحاويات الكاملة، عقود توريد طويلة الأمد، مدير حساب مخصص، التخليص الجمركي المتخصص، والشحن بأسعار تنافسية.",
    whyTitle: "لماذا تختار دينورا للطلبات الكبيرة؟",
    whyPoints: [
      "خصومات الكميات الكبيرة: خصومات تنافسية للكميات الكبيرة لتحقيق هوامش ربح أعلى",
      "إدارة الحاويات الكاملة: إدارة احترافية لشحنات الحاويات الكاملة (FCL)",
      "مدير حساب مخصص: مدير حساب مخصص للعملاء الكبار لدعم شخصي"
    ],
    features: [
      { icon: TrendingUp, title: "خصومات الكميات", desc: "خصومات تنافسية للكميات الكبيرة" },
      { icon: Package, title: "حاويات كاملة", desc: "إدارة شحنات الحاويات الكاملة (FCL)" },
      { icon: Award, title: "عقود طويلة الأمد", desc: "عقود توريد طويلة الأمد للإمدادات المستمرة" },
      { icon: Users, title: "مدير حساب مخصص", desc: "مدير حساب مخصص للعملاء الكبار" }
    ],
    cta: "اطلب عرض سعر للطلبات الكبيرة"
  } : {
    title: "Wholesale Import for Bulk Orders - Dinoora International Trade",
    description: "Specialized services for large traders, store owners, and manufacturers with bulk quantity discounts",
    intro: "Dinoora International Trade offers specialized services for large traders, store owners, and manufacturers who need to import large quantities from China. We offer competitive discounts for bulk quantities, allowing you to achieve higher profit margins.\n\nWe efficiently manage full container load (FCL) shipments, with the ability to consolidate shipments from multiple suppliers in one container to reduce costs. We also offer long-term sourcing contracts for large customers who need continuous supplies.\n\nFor large customers, we assign a dedicated account manager who handles all your import needs and provides personal support. Our services include bulk quantity discounts, full container load management, long-term sourcing contracts, dedicated account manager, specialized customs clearance, and competitive shipping rates.",
    whyTitle: "Why Choose Dinoora for Bulk Orders?",
    whyPoints: [
      "Bulk quantity discounts: Competitive discounts for bulk quantities to achieve higher profit margins",
      "Full container management: Professional management of full container load (FCL) shipments",
      "Dedicated account manager: Dedicated account manager for large customers for personal support"
    ],
    features: [
      { icon: TrendingUp, title: "Quantity Discounts", desc: "Competitive discounts for bulk quantities" },
      { icon: Package, title: "Full Containers", desc: "Full container load (FCL) shipment management" },
      { icon: Award, title: "Long-term Contracts", desc: "Long-term sourcing contracts for continuous supplies" },
      { icon: Users, title: "Dedicated Account Manager", desc: "Dedicated account manager for large customers" }
    ],
    cta: "Get a Quote for Bulk Orders"
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": content.title,
    "description": content.description,
    "provider": {
      "@type": "Organization",
      "name": "دينورا للتجارة الدولية"
    },
    "serviceType": ["Bulk Import", "Wholesale Import", "FCL Shipping", "Large Quantity Import"]
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
              <TrendingUp className="h-6 w-6 text-cyan-400" />
              <span className="text-cyan-400 font-semibold">{ar ? "الجملة" : "Wholesale"}</span>
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

      {/* Features Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-black mb-12 text-center">
            {ar ? "مميزات الطلبات الكبيرة" : "Bulk Order Features"}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.desc}</p>
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
            {ar ? "جاهز للطلبات الكبيرة؟" : "Ready for Bulk Orders?"}
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
