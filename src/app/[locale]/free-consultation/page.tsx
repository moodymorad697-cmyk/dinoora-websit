"use client";

import React, { useState } from "react";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, CheckCircle2, Clock, MessageCircle, Phone, Mail, ShieldCheck, Award, Users, TrendingUp } from "lucide-react";

export default function FreeConsultationPage() {
  const locale = useLocale();
  const ar = locale === "ar";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    product: "",
    quantity: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const content = ar ? {
    title: "استشارة مجانية لاستيراد من الصين",
    subtitle: "احصل على استشارة مجانية من خبراء الاستيراد من الصين",
    intro: "هل تفكر في استيراد منتجات من الصين لكن لا تعرف من أين تبدأ؟ خبراؤنا هنا لمساعدتك. احصل على استشارة مجانية مدتها 30 دقيقة مع أحد خبرائنا المتخصصين في الاستيراد من الصين.",
    benefitsTitle: "ماذا ستحصل في الاستشارة المجانية؟",
    benefits: [
      { icon: ShieldCheck, title: "تقييم منتجك", desc: "سنقيم منتجك ونخبرك إذا كان مناسب للاستيراد من الصين" },
      { icon: TrendingUp, title: "تحليل السوق", desc: "سنحلل السوق المستهدف ونحدد الفرص والتحديات" },
      { icon: Calendar, title: "خطة عمل مخصصة", desc: "سنضع لك خطة عمل مخصصة لاستيراد منتجك" },
      { icon: Users, title: "نصائح عملية", desc: "سنقدم لك نصائح عملية لتجنب الأخطاء الشائعة" }
    ],
    formTitle: "احجز استشارتك المجانية الآن",
    nameLabel: "الاسم الكامل",
    emailLabel: "البريد الإلكتروني",
    phoneLabel: "رقم الهاتف",
    companyLabel: "اسم الشركة (اختياري)",
    productLabel: "نوع المنتج",
    quantityLabel: "الكمية المطلوبة",
    messageLabel: "رسالتك (اختياري)",
    submitBtn: "احجز الاستشارة المجانية",
    successTitle: "تم إرسال طلبك بنجاح!",
    successMessage: "سنتواصل معك خلال 24 ساعة لتحديد موعد الاستشارة.",
    whyTitle: "لماذا دينورا؟",
    whyPoints: [
      "خبرة 5+ سنوات في الاستيراد من الصين",
      "أكثر من 200 عميل راضٍ في الشرق الأوسط",
      "فريق متخصص في كل مراحل الاستيراد",
      "دعم كامل من المصنع حتى بابك"
    ],
    trustTitle: "ثق بنا",
    trustPoints: [
      "استشارة 100% مجانية بدون أي التزام",
      "معلوماتك محمية ولن تُشارك مع أي طرف",
      "خبراء حقيقيون وليس روبوتات",
      "نصائح عملية يمكنك تطبيقها فوراً"
    ]
  } : {
    title: "Free Consultation for Importing from China",
    subtitle: "Get a free consultation from China import experts",
    intro: "Thinking about importing products from China but don't know where to start? Our experts are here to help. Get a free 30-minute consultation with one of our China import specialists.",
    benefitsTitle: "What You'll Get in the Free Consultation",
    benefits: [
      { icon: ShieldCheck, title: "Product Evaluation", desc: "We'll evaluate your product and tell you if it's suitable for import from China" },
      { icon: TrendingUp, title: "Market Analysis", desc: "We'll analyze your target market and identify opportunities and challenges" },
      { icon: Calendar, title: "Custom Action Plan", desc: "We'll create a custom action plan for importing your product" },
      { icon: Users, title: "Practical Tips", desc: "We'll provide practical tips to avoid common mistakes" }
    ],
    formTitle: "Book Your Free Consultation Now",
    nameLabel: "Full Name",
    emailLabel: "Email Address",
    phoneLabel: "Phone Number",
    companyLabel: "Company Name (Optional)",
    productLabel: "Product Type",
    quantityLabel: "Required Quantity",
    messageLabel: "Your Message (Optional)",
    submitBtn: "Book Free Consultation",
    successTitle: "Your Request Has Been Sent Successfully!",
    successMessage: "We'll contact you within 24 hours to schedule your consultation.",
    whyTitle: "Why Dinoora?",
    whyPoints: [
      "5+ years of experience importing from China",
      "200+ satisfied clients in the Middle East",
      "Specialized team for every import stage",
      "Full support from factory to your door"
    ],
    trustTitle: "Trust Us",
    trustPoints: [
      "100% free consultation with no obligation",
      "Your information is protected and won't be shared",
      "Real experts, not robots",
      "Practical tips you can apply immediately"
    ]
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In production, this would send data to your backend
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
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
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <MessageCircle className="h-6 w-6 text-cyan-400" />
              <span className="text-cyan-400 font-semibold">{ar ? "استشارة مجانية" : "Free Consultation"}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              {content.title}
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
              {content.intro}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-black mb-12 text-center">
            {content.benefitsTitle}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-slate-400 text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-black mb-8 text-center">
              {content.formTitle}
            </h2>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-slate-300">
                      {content.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-cyan-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-slate-300">
                      {content.emailLabel}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-cyan-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-slate-300">
                      {content.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-cyan-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-slate-300">
                      {content.companyLabel}
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-cyan-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-slate-300">
                      {content.productLabel}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      placeholder={ar ? "مثال: إلكترونيات، ملابس" : "e.g., Electronics, Clothing"}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-cyan-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-slate-300">
                      {content.quantityLabel}
                    </label>
                    <input
                      type="text"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      placeholder={ar ? "مثال: 1000 قطعة" : "e.g., 1000 pieces"}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-cyan-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-300">
                    {content.messageLabel}
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-cyan-500 focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
                >
                  {content.submitBtn}
                  <Calendar className="h-5 w-5" />
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="h-20 w-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="h-10 w-10 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-400">{content.successTitle}</h3>
                <p className="text-slate-300">{content.successMessage}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Why Dinoora Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-black mb-8">{content.whyTitle}</h2>
              <div className="space-y-4">
                {content.whyPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-cyan-400 shrink-0 mt-1" />
                    <p className="text-slate-300">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-black mb-8">{content.trustTitle}</h2>
              <div className="space-y-4">
                {content.trustPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <ShieldCheck className="h-6 w-6 text-cyan-400 shrink-0 mt-1" />
                    <p className="text-slate-300">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-3xl font-black mb-6">
            {ar ? "جاهز لبدء رحلة الاستيراد؟" : "Ready to Start Your Import Journey?"}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {ar ? "احجز استشارتك المجانية اليوم ودعنا نساعدك في تحقيق أهدافك" : "Book your free consultation today and let us help you achieve your goals"}
          </p>
          <a
            href={`/${locale}/quote`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-cyan-600 font-bold rounded-xl hover:bg-slate-100 transition"
          >
            {ar ? "اطلب عرض سعر" : "Get a Quote"}
            <ArrowRight className={`h-5 w-5 ${ar ? "rotate-180" : ""}`} />
          </a>
        </div>
      </section>
    </main>
  );
}
