"use client";

import React from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Award, CheckCircle2, FileCheck, Truck, Package, AlertTriangle } from "lucide-react";

export default function MedicalSuppliesPage() {
  const locale = useLocale();
  const ar = locale === "ar";

  const content = ar ? {
    title: "الأدوات والمستلزمات الطبية - استيراد من الصين",
    description: "استيراد الأدوات والمستلزمات الطبية من الصين مع التأكد من الشهادات الصحية والمعايير الدولية",
    intro: "دينورا للتجارة الدولية تساعدك في استيراد الأدوات والمستلزمات الطبية من الصين مع التأكد الكامل من الشهادات والمطابقة للمعايير الصحية الدولية. نحن نفهم أن المنتجات الطبية تتطلب مستوى عالٍ من الجودة والامتثال، ولهذا نقدم خدمات فحص شاملة قبل الشحن للتأكد من أن جميع المنتجات تحمل الشهادات المطلوبة مثل CE و FDA و ISO 13485.\n\nنحن نتعامل مع المصانع الطبية الصينية المعتمدة التي تنتج مجموعة واسعة من المستلزمات الطبية: من المستلزمات الجراحية والمعدات الطبية البسيطة إلى الأجهزة الطبية المتقدمة. فريقنا يتحقق من كل شهادة وكل معيار قبل الشحن لضمان أن المنتجات تلبي متطلبات الجهات التنظيمية في بلدك.\n\nخدماتنا تشمل التوريد من المصانع المعتمدة، فحص الشهادات والمطابقة للمعايير، التخليص الجمركي المتخصص للمنتجات الطبية، والشحن المناسب (بحري أو جوي حسب نوع المنتج). نحن نقدم دعماً كامل من المصنع في الصين حتى وصول المنتجات إليك مع متابعة مستمرة وتحديثات واضحة.",
    whyTitle: "لماذا تختار دينورا لاستيراد المستلزمات الطبية؟",
    whyPoints: [
      "التحقق من الشهادات: نتحقق من جميع الشهادات الصحية والمعايير الدولية قبل الشحن",
      "مصانع معتمدة: نتعامل فقط مع المصانع الطبية الصينية المعتمدة والموثوقة",
      "فحص الجودة الشامل: فحص شامل للمنتجات الطبية قبل الشحن لضمان الجودة"
    ],
    features: [
      { icon: ShieldCheck, title: "الشهادات الصحية", desc: "التحقق من شهادات CE, FDA, ISO 13485 وغيرها" },
      { icon: Award, title: "المعايير الدولية", desc: "التأكد من المطابقة لمعايير الجودة الصحية الدولية" },
      { icon: FileCheck, title: "التوثيق الكامل", desc: "إعداد جميع الوثائق المطلوبة للتخليص الجمركي" },
      { icon: Truck, title: "الشحن المتخصص", desc: "شحن مناسب للمنتجات الطبية مع متابعة مستمرة" }
    ],
    cta: "اطلب عرض سعر لاستيراد المستلزمات الطبية"
  } : {
    title: "Medical Supplies and Equipment - Import from China",
    description: "Import medical supplies and equipment from China with verification of health certificates and international standards",
    intro: "Dinoora International Trade helps you import medical supplies and equipment from China with complete verification of health certificates and compliance with international health standards. We understand that medical products require a high level of quality and compliance, which is why we provide comprehensive pre-shipment inspection to ensure all products carry required certifications such as CE, FDA, and ISO 13485.\n\nWe work with certified Chinese medical factories that produce a wide range of medical supplies: from surgical supplies and simple medical equipment to advanced medical devices. Our team verifies every certificate and every standard before shipment to ensure products meet regulatory requirements in your country.\n\nOur services include sourcing from certified factories, verification of certificates and standards compliance, specialized customs clearance for medical products, and appropriate shipping (sea or air depending on product type). We provide full support from the factory in China until products reach you with continuous follow-up and clear updates.",
    whyTitle: "Why Choose Dinoora for Medical Supplies Import?",
    whyPoints: [
      "Certificate verification: We verify all health certificates and international standards before shipment",
      "Certified factories: We work only with certified and reliable Chinese medical factories",
      "Comprehensive quality inspection: Comprehensive inspection of medical products before shipment to ensure quality"
    ],
    features: [
      { icon: ShieldCheck, title: "Health Certificates", desc: "Verification of CE, FDA, ISO 13485 and other certificates" },
      { icon: Award, title: "International Standards", desc: "Ensuring compliance with international health quality standards" },
      { icon: FileCheck, title: "Complete Documentation", desc: "Preparing all required documents for customs clearance" },
      { icon: Truck, title: "Specialized Shipping", desc: "Appropriate shipping for medical products with continuous tracking" }
    ],
    cta: "Get a Quote for Medical Supplies Import"
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": content.title,
    "description": content.description,
    "brand": {
      "@type": "Organization",
      "name": "دينورا للتجارة الدولية"
    },
    "category": "Medical Supplies",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "USD"
    }
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
              <ShieldCheck className="h-6 w-6 text-cyan-400" />
              <span className="text-cyan-400 font-semibold">{ar ? "منتجاتنا" : "Our Products"}</span>
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
            {ar ? "مميزات استيراد المستلزمات الطبية" : "Medical Supplies Import Features"}
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
            {ar ? "جاهز لاستيراد مستلزمات طبية؟" : "Ready to Import Medical Supplies?"}
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
