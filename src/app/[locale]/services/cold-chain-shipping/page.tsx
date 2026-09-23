"use client";

import React from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, Snowflake, Thermometer, CheckCircle2, Truck, Package, ShieldCheck, AlertTriangle } from "lucide-react";

export default function ColdChainShippingPage() {
  const locale = useLocale();
  const ar = locale === "ar";

  const content = ar ? {
    title: "الشحن المبرد والمتخصص - دينورا للتجارة الدولية",
    description: "خدمة الشحن المبرد للمنتجات الحساسة للحرارة والشحن المتخصص للمعدات كبيرة الحجم",
    intro: "دينورا للتجارة الدولية تقدم خدمة الشحن المبرد (Cold Chain) المتخصصة للمنتجات الحساسة للحرارة مثل الأدوية، المواد الغذائية، والمعدات الطبية. نحن نفهم أن هذه المنتجات تتطلب مراقبة دقيقة لدرجة الحرارة أثناء النقل للحفاظ على جودتها وسلامتها. نستخدم حاويات مبردة متطورة مع أنظمة مراقبة درجة الحرارة في الوقت الفعلي لضمان أن المنتجات تصل في حالتها المثالية.\n\nبالإضافة إلى الشحن المبرد، نحن نقدم خدمة الشحن المتخصص للمعدات كبيرة الحجم (Oversized Cargo) التي لا يمكن شحنها في الحاويات العادية. نحن نتعامل مع الشحنات غير القياسية مثل المعدات الصناعية الكبيرة، الآلات الثقيلة، والمشاريع الخاصة. فريقنا لديه خبرة في التعامل مع متطلبات الشحن الخاصة لهذه المعدات.\n\nخدماتنا تشمل مراقبة درجة الحرارة المستمرة، حاويات مبردة متطورة، شحن المعدات كبيرة الحجم، التخليص الجمركي المتخصص، والتأمين الشامل. نحن نقدم دعماً كامل من المصنع في الصين حتى وصول المنتجات إليك مع متابعة مستمرة وتحديثات واضحة.",
    whyTitle: "لماذا تختار خدمة الشحن المبرد والمتخصص لدينا؟",
    whyPoints: [
      "مراقبة درجة الحرارة: أنظمة مراقبة في الوقت الفعلي لضمان جودة المنتجات الحساسة",
      "خبرة في الشحنات غير القياسية: تعامل احترافي مع المعدات كبيرة الحجم",
      "تأمين شامل: تأمين شامل للمنتجات الحساسة والمعدات القيمة"
    ],
    features: [
      { icon: Snowflake, title: "حاويات مبردة", desc: "حاويات مبردة متطورة مع مراقبة درجة الحرارة" },
      { icon: Thermometer, title: "مراقبة مستمرة", desc: "مراقبة درجة الحرارة في الوقت الفعلي أثناء النقل" },
      { icon: Package, title: "شحن غير قياسي", desc: "شحن المعدات كبيرة الحجم والمشاريع الخاصة" },
      { icon: ShieldCheck, title: "تأمين شامل", desc: "تأمين شامل للمنتجات الحساسة والمعدات القيمة" }
    ],
    cta: "اطلب عرض سعر للشحن المبرد والمتخصص"
  } : {
    title: "Cold Chain and Specialized Shipping - Dinoora International Trade",
    description: "Cold chain shipping service for temperature-sensitive products and specialized shipping for oversized cargo",
    intro: "Dinoora International Trade offers specialized cold chain shipping service for temperature-sensitive products such as pharmaceuticals, food products, and medical equipment. We understand that these products require precise temperature monitoring during transport to maintain their quality and safety. We use advanced refrigerated containers with real-time temperature monitoring systems to ensure products arrive in optimal condition.\n\nIn addition to cold chain shipping, we offer specialized shipping service for oversized cargo that cannot be shipped in standard containers. We handle non-standard shipments such as large industrial equipment, heavy machinery, and special projects. Our team has experience in dealing with the special shipping requirements of this equipment.\n\nOur services include continuous temperature monitoring, advanced refrigerated containers, oversized cargo shipping, specialized customs clearance, and comprehensive insurance. We provide full support from the factory in China until products reach you with continuous follow-up and clear updates.",
    whyTitle: "Why Choose Our Cold Chain and Specialized Shipping Service?",
    whyPoints: [
      "Temperature monitoring: Real-time monitoring systems to ensure quality of sensitive products",
      "Non-standard shipment expertise: Professional handling of oversized cargo",
      "Comprehensive insurance: Full insurance for sensitive products and valuable equipment"
    ],
    features: [
      { icon: Snowflake, title: "Refrigerated Containers", desc: "Advanced refrigerated containers with temperature monitoring" },
      { icon: Thermometer, title: "Continuous Monitoring", desc: "Real-time temperature monitoring during transport" },
      { icon: Package, title: "Non-standard Shipping", desc: "Shipping oversized cargo and special projects" },
      { icon: ShieldCheck, title: "Comprehensive Insurance", desc: "Full insurance for sensitive products and valuable equipment" }
    ],
    cta: "Get a Quote for Cold Chain and Specialized Shipping"
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
    "serviceType": ["Cold Chain Shipping", "Refrigerated Shipping", "Oversized Cargo", "Specialized Shipping"]
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
              <Snowflake className="h-6 w-6 text-cyan-400" />
              <span className="text-cyan-400 font-semibold">{ar ? "خدماتنا" : "Our Services"}</span>
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
            {ar ? "مميزات الشحن المبرد والمتخصص" : "Cold Chain and Specialized Shipping Features"}
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
            {ar ? "جاهز للشحن المبرد والمتخصص؟" : "Ready for Cold Chain and Specialized Shipping?"}
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
