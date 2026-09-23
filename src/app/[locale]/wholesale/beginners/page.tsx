"use client";

import React from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, CheckCircle2, Truck, Package, ShieldCheck, Users, TrendingUp } from "lucide-react";

export default function WholesaleBeginnersPage() {
  const locale = useLocale();
  const ar = locale === "ar";

  const content = ar ? {
    title: "الاستيراد بالجملة للمبتدئين - دينورا للتجارة الدولية",
    description: "دليل شامل للمبتدئين في الاستيراد بالجملة من الصين برأس مال محدود",
    intro: "دينورا للتجارة الدولية تساعد المبتدئين في الاستيراد بالجملة من الصين برأس مال محدود. نحن نفهم أن البدء في الاستيراد قد يكون مخيفاً، خاصة إذا كان رأس المال محدوداً. لهذا نقدم خدمات مخصصة للمبتدئين تساعدك على البدء بأمان وثقة.\n\nالحد الأدنى للكمية عند دينورا مرن، مما يسمح لك بالبدء بكميات صغيرة أو تجريبية لتجربة السوق قبل الاستثمار الكبير. نحن نقدم دعماً وإرشاداً خطوة بخطوة من اختيار المنتجات المناسبة إلى التوريد والشحن والتسليم النهائي.\n\nخدماتنا للمبتدئين تشمل استشارات مجانية لاختيار المنتجات المناسبة، توريد من مصانع موثوقة، فحص الجودة قبل الشحن، شحن بأسعار تنافسية، التخليص الجمركي، ودعم مستمر طوال الرحلة. نحن نطمئنك بشأن المخاطر ونساعدك في تجنبها من خلال اختيار موردين موثوقين وفحص الجودة الشامل.",
    whyTitle: "لماذا تختار دينورا كبداية للاستيراد؟",
    whyPoints: [
      "رأس مال محدود: يمكنك البدء بكميات صغيرة وتوسيعها تدريجياً",
      "دعم وإرشاد: دعم كامل وإرشاد خطوة بخطوة للمبتدئين",
      "ثقة وأمان: موردين موثوقون وفحص جودة شامل لتقليل المخاطر"
    ],
    features: [
      { icon: GraduationCap, title: "استشارات مجانية", desc: "استشارات مجانية لاختيار المنتجات المناسبة لسوقك" },
      { icon: Package, title: "كميات مرنة", desc: "الحد الأدنى للكمية مرن للبدء برأس مال محدود" },
      { icon: ShieldCheck, title: "موردين موثوقون", desc: "توريد من مصانع موثوقة ومختبرة مسبقاً" },
      { icon: Users, title: "دعم مستمر", desc: "دعم مستمر وإرشاد خطوة بخطوة طوال الرحلة" }
    ],
    cta: "ابدأ رحلة الاستيراد اليوم"
  } : {
    title: "Wholesale Import for Beginners - Dinoora International Trade",
    description: "Comprehensive guide for beginners in wholesale import from China with limited capital",
    intro: "Dinoora International Trade helps beginners in wholesale import from China with limited capital. We understand that starting import can be intimidating, especially with limited capital. That's why we offer customized services for beginners to help you start safely and confidently.\n\nThe minimum quantity at Dinoora is flexible, allowing you to start with small or trial quantities to test the market before large investment. We provide full support and guidance step by step from choosing the right products to sourcing, shipping, and final delivery.\n\nOur beginner services include free consultations for choosing the right products, sourcing from reliable factories, pre-shipment quality inspection, competitive shipping rates, customs clearance, and continuous support throughout the journey. We reassure you about risks and help you avoid them by choosing reliable suppliers and comprehensive quality inspection.",
    whyTitle: "Why Choose Dinoora to Start Importing?",
    whyPoints: [
      "Limited capital: You can start with small quantities and expand gradually",
      "Support and guidance: Full support and step-by-step guidance for beginners",
      "Trust and safety: Reliable suppliers and comprehensive quality inspection to reduce risks"
    ],
    features: [
      { icon: GraduationCap, title: "Free Consultations", desc: "Free consultations for choosing the right products for your market" },
      { icon: Package, title: "Flexible Quantities", desc: "Flexible minimum quantity to start with limited capital" },
      { icon: ShieldCheck, title: "Reliable Suppliers", desc: "Sourcing from reliable and pre-vetted factories" },
      { icon: Users, title: "Continuous Support", desc: "Continuous support and step-by-step guidance throughout the journey" }
    ],
    cta: "Start Your Import Journey Today"
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
    "serviceType": ["Wholesale Import", "Beginner Import", "Small Quantity Import", "Trial Import"]
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
              <GraduationCap className="h-6 w-6 text-cyan-400" />
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
            {ar ? "مميزات الاستيراد للمبتدئين" : "Beginner Import Features"}
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
            {ar ? "جاهز للبدء في الاستيراد؟" : "Ready to Start Importing?"}
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
