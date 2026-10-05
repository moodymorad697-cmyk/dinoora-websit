"use client";

import React, { useState } from "react";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, Gift, Users, TrendingUp, CheckCircle2, Copy, Share2, Award, Zap } from "lucide-react";
import Link from "next/link";

export default function ReferralProgramPage() {
  const locale = useLocale();
  const ar = locale === "ar";
  const [copied, setCopied] = useState(false);

  const content = ar ? {
    title: "برنامج الإحالة - اربح مع كل عميل جديد",
    subtitle: "احصل على 5% من قيمة كل طلب من العملاء الذين تحيلهم",
    intro: "هل أنت عميل راضٍ لدينورا؟ شارك نجاحك مع الآخرين واربح مكافآت! برنامج الإحالة لدينا يتيح لك الحصول على 5% من قيمة كل طلب من العملاء الذين تحيلهم.",
    howItWorksTitle: "كيف يعمل البرنامج؟",
    steps: [
      { icon: Users, title: "سجل في البرنامج", desc: "سجل في برنامج الإحالة واحصل على رابط فريد خاص بك" },
      { icon: Share2, title: "شارك رابطك", desc: "شارك رابطك مع أصدقائك وزملائك المهتمين بالاستيراد من الصين" },
      { icon: Gift, title: "احصل على مكافأة", desc: "عندما يسجل العميل ويكمل طلبه، ستحصل على 5% من قيمة الطلب" }
    ],
    benefitsTitle: "مميزات البرنامج",
    benefits: [
      { icon: TrendingUp, title: "مكافآت غير محدودة", desc: "لا يوجد حد لعدد العملاء الذين يمكنك إحالتهم" },
      { icon: Award, title: "نسبة عالية", desc: "احصل على 5% من قيمة كل طلب - من أعلى النسب في السوق" },
      { icon: Zap, title: "دفعات سريعة", desc: "تُدفع المكافآت خلال 7 أيام من إكمال الطلب" },
      { icon: CheckCircle2, title: "تتبع سهل", desc: "لوحة تحكم لتتبع إحالاتك ومكافآتك في الوقت الفعلي" }
    ],
    rulesTitle: "قواعد البرنامج",
    rules: [
      "يجب أن يكون العميل الجديد لم يتعامل مع دينورا من قبل",
      "تُدفع المكافأة بعد إكمال الطلب والدفع بالكامل",
      "لا يُسمح بالإحالة الذاتية",
      "يجب أن يكون الطلب بقيمة 500 دولار على الأقل",
      "يحق لدينورا تعديل شروط البرنامج في أي وقت"
    ],
    ctaTitle: "جاهز للبدء؟",
    ctaDesc: "سجل الآن وابدأ في كسب المكافآت من اليوم",
    ctaBtn: "سجل في البرنامج",
    loginBtn: "تسجيل الدخول",
    shareTitle: "شارك رابط الإحالة الخاص بك",
    referralCode: "DINOORA-REF-XXXXX"
  } : {
    title: "Referral Program - Earn with Every New Client",
    subtitle: "Get 5% of the value of every order from clients you refer",
    intro: "Are you a satisfied Dinoora customer? Share your success with others and earn rewards! Our referral program allows you to get 5% of the value of every order from clients you refer.",
    howItWorksTitle: "How Does the Program Work?",
    steps: [
      { icon: Users, title: "Sign Up for the Program", desc: "Sign up for the referral program and get your unique referral link" },
      { icon: Share2, title: "Share Your Link", desc: "Share your link with friends and colleagues interested in importing from China" },
      { icon: Gift, title: "Get Rewarded", desc: "When the client signs up and completes their order, you get 5% of the order value" }
    ],
    benefitsTitle: "Program Benefits",
    benefits: [
      { icon: TrendingUp, title: "Unlimited Rewards", desc: "No limit on the number of clients you can refer" },
      { icon: Award, title: "High Rate", desc: "Get 5% of every order value - one of the highest rates in the market" },
      { icon: Zap, title: "Fast Payouts", desc: "Rewards are paid within 7 days of order completion" },
      { icon: CheckCircle2, title: "Easy Tracking", desc: "Dashboard to track your referrals and rewards in real-time" }
    ],
    rulesTitle: "Program Rules",
    rules: [
      "The new client must not have dealt with Dinoora before",
      "Reward is paid after order completion and full payment",
      "Self-referral is not allowed",
      "Order must be at least $500 in value",
      "Dinoora reserves the right to modify program terms at any time"
    ],
    ctaTitle: "Ready to Start?",
    ctaDesc: "Sign up now and start earning rewards from today",
    ctaBtn: "Sign Up for Program",
    loginBtn: "Login",
    shareTitle: "Share Your Referral Link",
    referralCode: "DINOORA-REF-XXXXX"
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`https://www.dinooratrade.com?ref=${content.referralCode}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
              <Gift className="h-6 w-6 text-cyan-400" />
              <span className="text-cyan-400 font-semibold">{ar ? "برنامج الإحالة" : "Referral Program"}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              {content.title}
            </h1>
            <p className="text-2xl text-cyan-400 font-bold mb-4">
              {content.subtitle}
            </p>
            <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
              {content.intro}
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-black mb-12 text-center">
            {content.howItWorksTitle}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {content.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="absolute -top-4 -right-4 text-6xl font-black text-cyan-500/20 select-none">
                    0{index + 1}
                  </div>
                  <div className="h-16 w-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-6">
                    <step.icon className="h-8 w-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-slate-300">{step.desc}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-cyan-500/50">
                    <ArrowRight className="h-8 w-8" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-slate-950">
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

      {/* Rules Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-black mb-8 text-center">
            {content.rulesTitle}
          </h2>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8">
            <ul className="space-y-4">
              {content.rules.map((rule, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-cyan-400 shrink-0 mt-0.5" />
                  <p className="text-slate-300">{rule}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-3xl font-black mb-6">
            {content.ctaTitle}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {content.ctaDesc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${locale}/quote`}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-cyan-600 font-bold rounded-xl hover:bg-slate-100 transition"
            >
              {content.ctaBtn}
              <ArrowRight className={`h-5 w-5 ${ar ? "rotate-180" : ""}`} />
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition"
            >
              {content.loginBtn}
            </Link>
          </div>
        </div>
      </section>

      {/* Share Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-black mb-8 text-center">
            {content.shareTitle}
          </h2>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                value={`https://www.dinooratrade.com?ref=${content.referralCode}`}
                readOnly
                className="flex-1 px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white"
              />
              <button
                onClick={copyToClipboard}
                className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-cyan-500 text-white font-bold rounded-xl hover:bg-cyan-600 transition"
              >
                {copied ? (
                  <>
                    <CheckCircle2 className="h-5 w-5" />
                    {ar ? "تم النسخ" : "Copied!"}
                  </>
                ) : (
                  <>
                    <Copy className="h-5 w-5" />
                    {ar ? "نسخ الرابط" : "Copy Link"}
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
