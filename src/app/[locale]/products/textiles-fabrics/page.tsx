"use client";

import React from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, Layers, CheckCircle2, Truck, Package, ShieldCheck, Award } from "lucide-react";

export default function TextilesFabricsPage() {
  const locale = useLocale();
  const ar = locale === "ar";

  const content = ar ? {
    title: "المنسوجات والأقمشة الخام - استيراد من الصين",
    description: "استيراد المنسوجات والأقمشة الخام من الصين بجودة عالية وأسعار تنافسية",
    intro: "دينورا للتجارة الدولية تساعدك في استيراد المنسوجات والأقمشة الخام من الصين بجودة عالية وأسعار تنافسية. نحن نفهم أن صناعة المنسوجات تتطلب أنواعاً مختلفة من الأقمشة والخامات، ولهذا نقدم خدمات توريد شاملة تشمل جميع أنواع المنسوجات: من القطن والكتان والصوف إلى الأقمشة الاصطناعية والمخلوطة.\n\nنحن نتعامل مع مصانع النسيج الصينية الكبرى التي تنتج أقمشة عالية الجودة بأسعار المصنع. فريقنا يساعدك في اختيار الأقمشة المناسبة لاحتياجاتك، سواء كنت تبحث عن أقمشة للملابس أو الأثاث أو الاستخدامات الصناعية. نحن نقدم فحص الجودة قبل الشحن للتأكد من أن الأقمشة تلبي معايير الجودة المطلوبة.\n\nخدماتنا تشمل التوريد من المصانع المباشرة، فحص جودة الأقمشة قبل الشحن، التخليص الجمركي، والشحن المناسب (بحري أو جوي حسب الكمية والعجالة). نحن نقدم دعماً كامل من المصنع في الصين حتى وصول الأقمشة إليك مع متابعة مستمرة وتحديثات واضحة.",
    whyTitle: "لماذا تختار دينورا لاستيراد المنسوجات والأقمشة؟",
    whyPoints: [
      "مصانع نسيج كبرى: نتعامل مع أكبر مصانع النسيج الصينية بأسعار المصنع",
      "فحص الجودة: فحص شامل للأقمشة قبل الشحن لضمان الجودة",
      "تنوع واسع: جميع أنواع المنسوجات والأقمشة الخام متاحة"
    ],
    features: [
      { icon: Layers, title: "أنواع متعددة", desc: "قطن، كتان، صوف، أقمشة اصطناعية ومخلوطة" },
      { icon: ShieldCheck, title: "فحص الجودة", desc: "فحص شامل للأقمشة قبل الشحن لضمان المواصفات" },
      { icon: Package, title: "تغليف آمن", desc: "تغليف آمن للأقمشة للحفاظ على جودتها أثناء الشحن" },
      { icon: Truck, title: "شحن مرن", desc: "شحن بحري أو جوي حسب الكمية والعجالة" }
    ],
    cta: "اطلب عرض سعر لاستيراد المنسوجات والأقمشة"
  } : {
    title: "Textiles and Raw Fabrics - Import from China",
    description: "Import textiles and raw fabrics from China with high quality and competitive prices",
    intro: "Dinoora International Trade helps you import textiles and raw fabrics from China with high quality and competitive prices. We understand that the textile industry requires different types of fabrics and materials, which is why we offer comprehensive sourcing services covering all types of textiles: from cotton, linen, and wool to synthetic and blended fabrics.\n\nWe work with major Chinese textile factories that produce high-quality fabrics at factory prices. Our team helps you choose the right fabrics for your needs, whether you're looking for fabrics for clothing, furniture, or industrial uses. We provide pre-shipment quality inspection to ensure fabrics meet required quality standards.\n\nOur services include sourcing from direct factories, pre-shipment fabric quality inspection, customs clearance, and appropriate shipping (sea or air depending on quantity and urgency). We provide full support from the factory in China until fabrics reach you with continuous follow-up and clear updates.",
    whyTitle: "Why Choose Dinoora for Textiles and Fabrics Import?",
    whyPoints: [
      "Major textile factories: We work with China's largest textile factories at factory prices",
      "Quality inspection: Comprehensive inspection of fabrics before shipment to ensure quality",
      "Wide variety: All types of textiles and raw fabrics available"
    ],
    features: [
      { icon: Layers, title: "Multiple Types", desc: "Cotton, linen, wool, synthetic and blended fabrics" },
      { icon: ShieldCheck, title: "Quality Inspection", desc: "Comprehensive inspection of fabrics before shipment to ensure specifications" },
      { icon: Package, title: "Safe Packaging", desc: "Safe packaging for fabrics to maintain quality during shipping" },
      { icon: Truck, title: "Flexible Shipping", desc: "Sea or air shipping depending on quantity and urgency" }
    ],
    cta: "Get a Quote for Textiles and Fabrics Import"
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
    "category": "Textiles and Fabrics",
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
              <Layers className="h-6 w-6 text-cyan-400" />
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
            {ar ? "مميزات استيراد المنسوجات والأقمشة" : "Textiles and Fabrics Import Features"}
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
            {ar ? "جاهز لاستيراد منسوجات وأقمشة؟" : "Ready to Import Textiles and Fabrics?"}
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
