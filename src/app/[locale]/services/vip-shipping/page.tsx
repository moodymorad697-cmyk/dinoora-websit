"use client";

import React from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, Crown, CheckCircle2, Truck, User, Clock, ShieldCheck, Zap } from "lucide-react";

export default function VIPShippingPage() {
  const locale = useLocale();
  const ar = locale === "ar";

  const content = ar ? {
    title: "خدمة الشحن VIP (المميز/السريع) - دينورا للتجارة الدولية",
    description: "خدمة شحن مميزة بأولوية أعلى وسرعة أكبر ومتابعة مباشرة شخصية للشحنة",
    intro: "دينورا للتجارة الدولية تقدم خدمة الشحن VIP (المميز/السريع) المخصصة للعملاء الذين يحتاجون شحنات عاجلة أو حساسة أو ذات قيمة عالية. هذه الخدمة تتميز بأولوية أعلى في جميع مراحل الشحن، من التوريد في الصين حتى التسليم النهائي. نحن نقدم مدير حساب مخصص لكل عميل VIP، مما يضمن متابعة شخصية مباشرة للشحنة في كل مرحلة.\n\nخدمة الشحن VIP تشمل تحديثات لحظية على حالة الشحنة، أولوية في التخليص الجمركي، معالجة أولوية في الموانئ والمطارات، وتأمين شامل للشحنات القيمة. نحن نتفهم أن بعض الشحنات تتطلب اهتماماً خاصاً وعناية فائقة، ولهذا نقدم خدمة VIP تلبي هذه الاحتياجات.\n\nمزايا خدمة VIP تشمل مدير حساب مخصص، تحديثات لحظية، أولوية في التخليص الجمركي، معالجة أولوية في الموانئ، تأمين شامل، ودعم 24/7. هذه الخدمة مثالية للشحنات العاجلة، المنتجات ذات القيمة العالية، والعملاء الذين يريدون راحة البال والضمان.",
    whyTitle: "لماذا تختار خدمة الشحن VIP لدينا؟",
    whyPoints: [
      "مدير حساب مخصص: مدير حساب مخصص لكل عميل VIP لمتابعة شخصية مباشرة",
      "تحديثات لحظية: تحديثات لحظية على حالة الشحنة في كل مرحلة",
      "أولوية مطلقة: أولوية في جميع مراحل الشحن والتخليص الجمركي"
    ],
    features: [
      { icon: Crown, title: "مدير حساب مخصص", desc: "مدير حساب مخصص لكل عميل VIP لمتابعة شخصية" },
      { icon: Clock, title: "تحديثات لحظية", desc: "تحديثات لحظية على حالة الشحنة في كل مرحلة" },
      { icon: Zap, title: "أولوية مطلقة", desc: "أولوية في جميع مراحل الشحن والتخليص الجمركي" },
      { icon: ShieldCheck, title: "تأمين شامل", desc: "تأمين شامل للشحنات القيمة والعاجلة" }
    ],
    cta: "اطلب عرض سعر للشحن VIP"
  } : {
    title: "VIP Shipping Service - Dinoora International Trade",
    description: "Premium shipping service with higher priority, faster speed, and direct personal shipment tracking",
    intro: "Dinoora International Trade offers VIP shipping service (Premium/Express) for customers who need urgent, sensitive, or high-value shipments. This service features higher priority in all shipping stages, from sourcing in China to final delivery. We provide a dedicated account manager for each VIP customer, ensuring direct personal tracking of the shipment at every stage.\n\nVIP shipping service includes real-time updates on shipment status, priority in customs clearance, priority processing at ports and airports, and comprehensive insurance for valuable shipments. We understand that some shipments require special attention and exceptional care, which is why we offer VIP service to meet these needs.\n\nVIP service benefits include a dedicated account manager, real-time updates, priority in customs clearance, priority processing at ports, comprehensive insurance, and 24/7 support. This service is ideal for urgent shipments, high-value products, and customers who want peace of mind and assurance.",
    whyTitle: "Why Choose Our VIP Shipping Service?",
    whyPoints: [
      "Dedicated account manager: A dedicated account manager for each VIP customer for direct personal tracking",
      "Real-time updates: Real-time updates on shipment status at every stage",
      "Absolute priority: Priority in all shipping stages and customs clearance"
    ],
    features: [
      { icon: Crown, title: "Dedicated Account Manager", desc: "Dedicated account manager for each VIP customer for personal tracking" },
      { icon: Clock, title: "Real-time Updates", desc: "Real-time updates on shipment status at every stage" },
      { icon: Zap, title: "Absolute Priority", desc: "Priority in all shipping stages and customs clearance" },
      { icon: ShieldCheck, title: "Comprehensive Insurance", desc: "Comprehensive insurance for valuable and urgent shipments" }
    ],
    cta: "Get a Quote for VIP Shipping"
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
    "serviceType": ["VIP Shipping", "Express Shipping", "Premium Shipping", "Priority Shipping"]
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
              <Crown className="h-6 w-6 text-cyan-400" />
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
            {ar ? "مميزات الشحن VIP" : "VIP Shipping Features"}
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
            {ar ? "جاهز للشحن VIP؟" : "Ready for VIP Shipping?"}
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
