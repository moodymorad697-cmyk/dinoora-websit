"use client";

import React from "react";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, AlertTriangle, CheckCircle2, Clock, ShieldCheck, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function BlogArticle() {
  const locale = useLocale();
  const ar = locale === "ar";

  const content = ar ? {
    title: "كيف تتجنب الأخطاء الشائعة عند الاستيراد من الصين؟",
    subtitle: "دليل شامل لتجنب 10 أخطاء قاتلة قد تكلفك آلاف الدولارات",
    intro: "الاستيراد من الصين فرصة عظيمة لتحقيق أرباح، لكنه مليء بالفخاخ والأخطاء التي قد تكلفك الكثير. في هذا المقال، سنستعرض أهم الأخطاء الشائعة وكيفية تجنبها.",
    mistakes: [
      {
        icon: AlertTriangle,
        title: "عدم التحقق من المورد",
        desc: "أكبر خطأ هو التعامل مع مورد دون التحقق من سمعته وقدرته. قد يختفي المورد أو يرسل منتجات رديئة الجودة.",
        solution: "تحقق من سجل المورد، اطلب مراجعات من عملاء سابقين، وقم بزيارة المصنع إن أمكن."
      },
      {
        icon: Clock,
        title: "إهمال فحص الجودة",
        desc: "الكثير من المستوردين يفحصون المنتجات فقط بعد وصولها، وهو متأخر جداً.",
        solution: "أجرِ فحصاً قبل الشحن في الصين للتأكد من أن المنتجات تلبي معاييرك."
      },
      {
        icon: ShieldCheck,
        title: "عدم فهم الجمارك والرسوم",
        desc: "عدم معرفة الرسوم الجمركية والضرائب قد يؤدي إلى مفاجآت مالية كبيرة.",
        solution: "استشر خبيراً جمركياً قبل الشحن لمعرفة جميع الرسوم المتوقعة."
      },
      {
        icon: TrendingUp,
        title: "التفاوض السيء على الأسعار",
        desc: "القبول بالسعر الأول من المورد قد يعني دفع أكثر من اللازم.",
        solution: "قارن الأسعار بين عدة موردين وتفاوض بشروط الدفع والكميات."
      },
      {
        icon: AlertTriangle,
        title: "تجاهل الشروط والأحكام",
        desc: "عدم قراءة العقد بعناية قد يؤدي إلى مشاكل قانونية ومالية.",
        solution: "اقرأ كل كلمة في العقد واستشر محامياً إذا لزم الأمر."
      },
      {
        icon: Clock,
        title: "سوء إدارة الشحن",
        desc: "اختيار طريقة شحن غير مناسبة قد يؤدي إلى تأخيرات وتكاليف إضافية.",
        solution: "اختر طريقة الشحن المناسبة بناءً على نوع المنتج والكمية والعجالة."
      },
      {
        icon: ShieldCheck,
        title: "عدم التخطيط للتخزين",
        desc: "عدم وجود خطة تخزين واضحة قد يؤدي إلى مشاكل عند وصول البضاعة.",
        solution: "خطط للتخزين قبل الشحن وتأكد من توفر المساحة اللازمة."
      },
      {
        icon: TrendingUp,
        title: "تجاهل التأمين",
        desc: "عدم تأمين البضاعة قد يؤدي إلى خسارة كاملة في حالة حدوث ضرر.",
        solution: "اشترِ تأميناً شاملاً للبضاعة لحمايتها من المخاطر."
      },
      {
        icon: AlertTriangle,
        title: "عدم متابعة الشحنة",
        desc: "عدم متابعة الشحنة قد يؤدي إلى مفاجآت عند الوصول.",
        solution: "تابع الشحنة باستمرار وتواصل مع الناقل بانتظام."
      },
      {
        icon: Clock,
        title: "الاستعجال في القرارات",
        desc: "اتخاذ قرارات سريعة دون دراسة كافية قد يؤدي إلى أخطاء مكلفة.",
        solution: "خذ وقتك في دراسة كل قرار واستشر الخبراء عند الحاجة."
      }
    ],
    conclusion: "الاستيراد من الصين يتطلب تخطيطاً دقيقاً ودراسة متأنية. بتجنب هذه الأخطاء، يمكنك توفير الوقت والمال وتحقيق نجاح أكبر في استيرادك.",
    cta: "هل تحتاج مساعدة في استيراد منتجاتك من الصين؟",
    ctaBtn: "احصل على استشارة مجانية"
  } : {
    title: "How to Avoid Common Import Mistakes from China?",
    subtitle: "A comprehensive guide to avoiding 10 fatal mistakes that could cost you thousands of dollars",
    intro: "Importing from China is a great opportunity to make profits, but it's full of traps and mistakes that could cost you a lot. In this article, we'll review the most common mistakes and how to avoid them.",
    mistakes: [
      {
        icon: AlertTriangle,
        title: "Not Verifying the Supplier",
        desc: "The biggest mistake is dealing with a supplier without verifying their reputation and capability. The supplier might disappear or send poor quality products.",
        solution: "Check the supplier's record, ask for reviews from previous customers, and visit the factory if possible."
      },
      {
        icon: Clock,
        title: "Neglecting Quality Inspection",
        desc: "Many importers only inspect products after arrival, which is too late.",
        solution: "Conduct pre-shipment inspection in China to ensure products meet your standards."
      },
      {
        icon: ShieldCheck,
        title: "Not Understanding Customs and Duties",
        desc: "Not knowing customs duties and taxes can lead to big financial surprises.",
        solution: "Consult a customs expert before shipping to know all expected fees."
      },
      {
        icon: TrendingUp,
        title: "Poor Price Negotiation",
        desc: "Accepting the first price from a supplier might mean paying more than necessary.",
        solution: "Compare prices between multiple suppliers and negotiate payment terms and quantities."
      },
      {
        icon: AlertTriangle,
        title: "Ignoring Terms and Conditions",
        desc: "Not reading the contract carefully can lead to legal and financial problems.",
        solution: "Read every word in the contract and consult a lawyer if necessary."
      },
      {
        icon: Clock,
        title: "Poor Shipping Management",
        desc: "Choosing an inappropriate shipping method can lead to delays and additional costs.",
        solution: "Choose the appropriate shipping method based on product type, quantity, and urgency."
      },
      {
        icon: ShieldCheck,
        title: "Not Planning for Storage",
        desc: "Not having a clear storage plan can lead to problems when goods arrive.",
        solution: "Plan for storage before shipping and ensure you have the necessary space."
      },
      {
        icon: TrendingUp,
        title: "Ignoring Insurance",
        desc: "Not insuring goods can lead to total loss in case of damage.",
        solution: "Buy comprehensive insurance for goods to protect them from risks."
      },
      {
        icon: AlertTriangle,
        title: "Not Tracking the Shipment",
        desc: "Not tracking the shipment can lead to surprises upon arrival.",
        solution: "Track the shipment continuously and communicate with the carrier regularly."
      },
      {
        icon: Clock,
        title: "Rushing Decisions",
        desc: "Making quick decisions without sufficient study can lead to costly mistakes.",
        solution: "Take your time to study every decision and consult experts when needed."
      }
    ],
    conclusion: "Importing from China requires careful planning and thorough study. By avoiding these mistakes, you can save time and money and achieve greater success in your import.",
    cta: "Do you need help importing your products from China?",
    ctaBtn: "Get a Free Consultation"
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 py-24">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px]" />
        </div>
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Link href={`/${locale}/blog`} className="text-cyan-400 font-semibold hover:text-cyan-300 transition">
                {ar ? "المدونة" : "Blog"}
              </Link>
              <span className="text-slate-500">/</span>
              <span className="text-slate-400">{ar ? "مقالات" : "Articles"}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              {content.title}
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              {content.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            <p className="text-xl text-slate-300 leading-relaxed mb-12">
              {content.intro}
            </p>

            <h2 className="text-3xl font-black mb-8 text-cyan-400">
              {ar ? "أهم 10 أخطاء شائعة" : "Top 10 Common Mistakes"}
            </h2>

            <div className="space-y-8">
              {content.mistakes.map((mistake, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-red-500/20 flex items-center justify-center shrink-0">
                      <mistake.icon className="h-6 w-6 text-red-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{mistake.title}</h3>
                      <p className="text-slate-300 mb-4">{mistake.desc}</p>
                      <div className="flex items-start gap-2 bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                        <CheckCircle2 className="h-5 w-5 text-green-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-green-400 mb-1">
                            {ar ? "الحل:" : "Solution:"}
                          </p>
                          <p className="text-slate-300 text-sm">{mistake.solution}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                {ar ? "الخلاصة" : "Conclusion"}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {content.conclusion}
              </p>
            </div>
          </motion.div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-3xl font-black mb-6">
            {content.cta}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {ar ? "خبراؤنا هنا لمساعدتك في كل مرحلة من مراحل الاستيراد" : "Our experts are here to help you at every stage of import"}
          </p>
          <Link
            href={`/${locale}/free-consultation`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-cyan-600 font-bold rounded-xl hover:bg-slate-100 transition"
          >
            {content.ctaBtn}
            <ArrowRight className={`h-5 w-5 ${ar ? "rotate-180" : ""}`} />
          </Link>
        </div>
      </section>
    </main>
  );
}
