"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Check, ClipboardCheck, Container, FileCheck2, PackageSearch, ShieldCheck, Warehouse, Truck, BarChart3, Clock, Globe, Users, Search, Mail, Phone, MessageCircle } from "lucide-react";

export default function HomePage() {
  const locale = useLocale();
  const ar = locale === "ar";
  const text = ar ? {
    eyebrow: "تجارة منظمة من الصين إلى أسواقك",
    title: "استورد بثقة.\nوسلّم في الموعد.",
    intro: "نحوّل التوريد والشحن من سلسلة اتصالات مبهمة إلى مسار واضح تديره جهة واحدة: نتحقق، نفحص، نجمع، ثم نوصل.",
    quote: "ابدأ بطلب عرض سعر",
    services: "استكشف الخدمات",
    proof: ["استجابة أولية خلال 24 ساعة", "توثيق قبل الشحن", "تنسيق من المصنع حتى بابك"],
    serviceTitle: "كل مرحلة لها مالك واضح",
    serviceIntro: "اختر الدعم الذي تحتاجه أو اجمع المراحل كلها في خطة توريد واحدة.",
    processTitle: "مسار عمل يمكن متابعته",
    processIntro: "تستلم تحديثات مفهومة عند كل نقطة قرار، بدون تخمين أو مفاجآت في منتصف الطريق.",
    caseTitle: "مثال على طريقة عملنا",
    caseIntro: "شحنة إلكترونيات من شِنزن إلى دبي: راجعنا المواصفات، نسّقنا المورد، وفحصنا التجهيز قبل تسليمها للناقل.",
    caseItems: ["مطابقة المواصفات والعينات", "صور فحص قبل الإرسال", "تجهيز مستندات الشحن", "تحديث واضح حتى التسليم"],
    finalTitle: "لديك شحنة قادمة؟ لنضع لها مساراً واضحاً.",
    finalIntro: "أرسل تفاصيل المنتج والوجهة، وسيعود إليك فريقنا بالخطوة التالية والتقدير الأولي.",
  } : {
    eyebrow: "Organized trade from China to your market",
    title: "Import with confidence.\nDeliver on schedule.",
    intro: "We turn sourcing and shipping from a chain of unclear conversations into one visible operating path: verify, inspect, consolidate, and deliver.",
    quote: "Start a quote",
    services: "Explore services",
    proof: ["First response within 24 hours", "Pre-shipment documentation", "One team from factory to door"],
    serviceTitle: "Every stage has a clear owner",
    serviceIntro: "Choose the support you need, or combine every stage into one sourcing plan.",
    processTitle: "A workflow you can follow",
    processIntro: "You receive clear updates at each decision point, without guessing or mid-shipment surprises.",
    caseTitle: "A glimpse at our operating model",
    caseIntro: "An electronics shipment from Shenzhen to Dubai: we checked specifications, coordinated the supplier, and inspected the cargo before carrier handoff.",
    caseItems: ["Specification and sample matching", "Pre-dispatch inspection photos", "Shipping document preparation", "Clear updates through delivery"],
    finalTitle: "Have an upcoming shipment? Give it a clear path.",
    finalIntro: "Send us the product and destination details. Our team will return with the next step and an initial estimate.",
  };

  const services = [
    { icon: PackageSearch, title: ar ? "التوريد والتحقق" : "Sourcing & verification", body: ar ? "نبحث عن المورد المناسب ونراجع قدرته قبل أن تبدأ الالتزامات." : "Find the right supplier and review capability before you commit.", href: "/services/sourcing" },
    { icon: ClipboardCheck, title: ar ? "فحص الجودة" : "Quality inspection", body: ar ? "قائمة فحص وصور وملاحظات عملية قبل خروج البضاعة من الصين." : "Practical checks, photos, and findings before cargo leaves China.", href: "/services/inspection" },
    { icon: Warehouse, title: ar ? "التخزين والتجميع" : "Warehousing & consolidation", body: ar ? "نجمع طلبات الموردين ونجهزها للشحن بطريقة تقلل التعقيد والتكلفة." : "Consolidate supplier orders and prepare them for a simpler shipment.", href: "/services/warehousing" },
    { icon: Container, title: ar ? "الشحن والتخليص" : "Shipping & customs", body: ar ? "مسار شحن مناسب مع مستندات مرتبة وتنسيق حتى الوجهة." : "A suitable shipping route with organized documents through destination.", href: "/services/shipping" },
    { icon: Warehouse, title: ar ? "التخزين" : "Storage", body: ar ? "تخزين آمن بالصين لحين الجاهزية للشحن." : "Secure storage in China until ready for shipment.", href: "/services/warehousing" },
    { icon: Truck, title: ar ? "الحلول اللوجستية" : "Logistics", body: ar ? "إدارة كاملة ومتابعة من البداية للنهاية." : "Full management and tracking from start to finish.", href: "/services/logistics" },
  ];
  const steps = [
    ["01", ar ? "نحدد المطلوب" : "Define the brief", ar ? "المنتج، الكمية، الجودة، والوجهة." : "Product, quantity, quality, and destination."],
    ["02", ar ? "نتحقق ونقارن" : "Verify and compare", ar ? "نراجع الموردين ونوضح الخيارات والتكلفة." : "Review suppliers and clarify options and cost."],
    ["03", ar ? "نفحص ونجهز" : "Inspect and prepare", ar ? "نوثق البضاعة والمستندات قبل الشحن." : "Document cargo and paperwork before dispatch."],
    ["04", ar ? "نشحن ونتابع" : "Ship and follow through", ar ? "ننسق الناقل ونبقيك على اطلاع حتى التسليم." : "Coordinate the carrier and keep you updated to delivery."],
  ];

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 200]);

  return <main className="home-page site-palette bg-[#dcecf0] text-[#102a43]">
    <section className="relative isolate min-h-[680px] overflow-hidden bg-[#102a43] text-white">
      <motion.div className="absolute inset-0 -z-10 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=2000&q=85')", y: heroY }} />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,22,38,0.96),rgba(9,39,62,0.78)_52%,rgba(9,39,62,0.5))]" />
      <div className="mx-auto flex min-h-[680px] max-w-7xl items-end px-5 pb-20 pt-40 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="mb-6 border-s-2 border-cyan-300 ps-4 text-sm font-bold uppercase tracking-[0.14em] text-cyan-200">{text.eyebrow}</p>
          <h1 className="max-w-3xl whitespace-pre-line text-5xl font-black leading-[1.02] tracking-tight sm:text-7xl">{text.title}</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">{text.intro}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row"><Link href={`/${locale}/quote`} className="inline-flex items-center justify-center gap-3 rounded-lg bg-cyan-300 px-6 py-4 font-bold text-[#082238] transition hover:bg-white">{text.quote}<ArrowRight className="h-5 w-5 rtl:rotate-180" /></Link><a href="#services" className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-4 font-bold transition hover:bg-white/10">{text.services}</a></div>
        </div>
      </div>
    </section>

    <section className="border-b border-cyan-500/20 bg-slate-900"><div className="mx-auto grid max-w-7xl gap-5 px-5 py-7 sm:grid-cols-3 sm:px-8 lg:px-12">{text.proof.map((item, index) => <motion.div key={item} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="flex items-center gap-3 text-sm font-semibold text-slate-300"><motion.span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}>0{index + 1}</motion.span>{item}</motion.div>)}</div></section>

    <section id="services" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12"><div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-[0.14em] text-cyan-700">Dinoora / Services</p><h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">{text.serviceTitle}</h2><p className="mt-5 text-lg leading-8 text-[#5d7180]">{text.serviceIntro}</p></div><div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{services.map((service, index) => <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}><Link href={`/${locale}${service.href}`} className="group flex gap-5 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-slate-800 to-slate-900 p-6 shadow-lg transition hover:-translate-y-2 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/20 hover:scale-[1.02]"><span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-300"><service.icon className="h-6 w-6" /></span><span><span className="flex items-center gap-3 text-xl font-bold text-white">{service.title}<ArrowRight className="h-4 w-4 text-cyan-400 opacity-0 transition group-hover:opacity-100 rtl:rotate-180" /></span><span className="mt-2 block leading-7 text-slate-300">{service.body}</span></span></Link></motion.div>)}</div></section>

    {/* Brief About Us Section */}
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-cyan-700">Dinoora / About</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">{ar ? "نبني الوضوح في التجارة العابرة للحدود" : "We build clarity into cross-border trade"}</h2>
          <p className="mt-4 text-lg leading-8 text-[#5d7180]">{ar ? "دينورا فريق تشغيل يربط الشركات في الشرق الأوسط بالمصانع وسلاسل الإمداد في الصين. نحوّل التوريد والشحن من سلسلة اتصالات مبهمة إلى مسار واضح تديره جهة واحدة." : "Dinoora is an operations team connecting Middle East businesses with factories and supply chains in China. We turn sourcing and shipping from unclear conversations into one visible operating path."}</p>
          <Link href={`/${locale}/about`} className="mt-6 inline-flex items-center gap-2 text-cyan-700 font-semibold hover:text-cyan-600 transition">
            {ar ? "اعرف المزيد عنا" : "Learn more about us"}
            <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </Link>
        </div>
        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=85')" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
        </div>
      </div>
    </motion.section>

    <section id="process" className="border-y border-cyan-500/20 bg-slate-900 px-5 py-24 sm:px-8 lg:px-12"><div className="mx-auto max-w-7xl"><div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-[0.14em] text-cyan-400">Dinoora / Workflow</p><h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl text-white">{text.processTitle}</h2><p className="mt-5 text-lg leading-8 text-slate-300">{text.processIntro}</p></div><div className="mt-14 relative"><div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent hidden md:block" /><div className="grid gap-4 md:grid-cols-4">{steps.map(([number, title, body], index) => <motion.div key={number} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="relative border-t-2 border-cyan-500 bg-slate-800 p-6 shadow-lg"><span className="text-sm font-black text-cyan-400">{number}</span><h3 className="mt-5 text-xl font-bold text-white">{title}</h3><p className="mt-3 leading-7 text-slate-300">{body}</p></motion.div>)}</div></div></div></section>


    <section className="bg-[#102a43] px-5 py-20 text-center text-white sm:px-8"><h2 className="mx-auto max-w-3xl text-3xl font-black sm:text-5xl">{text.finalTitle}</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">{text.finalIntro}</p><Link href={`/${locale}/quote`} className="mt-9 inline-flex items-center gap-3 rounded-lg bg-cyan-300 px-7 py-4 font-bold text-[#082238] hover:bg-white">{text.quote}<ArrowRight className="h-5 w-5 rtl:rotate-180" /></Link></section>

    {/* Quick Tracking Section */}
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 border border-cyan-500/30">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-white mb-2">{ar ? "تتبع شحنتك في ثوانٍ" : "Track your shipment in seconds"}</h2>
          <p className="text-slate-400">{ar ? "أدخل رقم التتبع لمعرفة حالة شحنتك" : "Enter your tracking number to check shipment status"}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
          <input
            type="text"
            placeholder={ar ? "رقم التتبع" : "Tracking number"}
            className="flex-1 px-6 py-4 rounded-xl bg-slate-900/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
          />
          <Link href={`/${locale}/track`} className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl transition flex items-center justify-center gap-2">
            <Search className="h-5 w-5" />
            {ar ? "انتقل لصفحة التتبع" : "Go to tracking page"}
          </Link>
        </div>
      </div>
    </motion.section>

    {/* Trust Statistics Section */}
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
      <div className="grid md:grid-cols-4 gap-6">
        {[
          { icon: Globe, value: "50+", label: ar ? "دولة مخدومة" : "Countries Served" },
          { icon: Users, value: "500+", label: ar ? "شراكة مصنع" : "Factory Partnerships" },
          { icon: Container, value: "10K+", label: ar ? "شحنة تم تسليمها" : "Shipments Delivered" },
          { icon: Clock, value: "24/7", label: ar ? "دعم متاح" : "Support Available" },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl p-6 text-center shadow-lg"
          >
            <stat.icon className="h-8 w-8 text-cyan-600 mx-auto mb-3" />
            <div className="text-3xl font-black text-[#102a43] mb-2">{stat.value}</div>
            <div className="text-sm font-semibold text-[#5d7180]">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </motion.section>

    {/* Unified CTA Section */}
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="relative overflow-hidden bg-gradient-to-r from-cyan-600 to-blue-600 px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-4xl text-center text-white">
        <h2 className="text-3xl sm:text-4xl font-black mb-4">{ar ? "جاهز للبدء؟" : "Ready to get started?"}</h2>
        <p className="text-xl mb-8 opacity-90">{ar ? "تواصل معنا اليوم للحصول على استشارة مجانية وعرض سعر" : "Contact us today for a free consultation and quote"}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={`/${locale}/quote`} className="px-8 py-4 bg-white text-cyan-600 font-bold rounded-xl hover:bg-slate-100 transition flex items-center justify-center gap-2">
            {ar ? "ابدأ بطلب عرض سعر" : "Start a quote"}
            <ArrowRight className="h-5 w-5 rtl:rotate-180" />
          </Link>
          <Link href={`/${locale}/contact`} className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition flex items-center justify-center gap-2">
            <MessageCircle className="h-5 w-5" />
            {ar ? "تحدث مع فريقنا" : "Talk to our team"}
          </Link>
        </div>
      </div>
    </motion.section>
      <section className="home-case-section mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12"><div className="relative min-h-[380px] overflow-hidden rounded-2xl bg-[#102a43]"><div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=85')" }} /><div className="absolute inset-0 bg-gradient-to-t from-[#061827] via-transparent to-transparent" /><div className="absolute bottom-6 start-6 flex items-center gap-3 text-sm font-bold text-white"><ShieldCheck className="h-5 w-5 text-cyan-300" /> {ar ? "توثيق قبل القرار" : "Evidence before decisions"}</div></div><div className="self-center"><p className="text-sm font-bold uppercase tracking-[0.14em] text-cyan-400">Dinoora / Case approach</p><h2 className="mt-4 text-4xl font-black tracking-tight text-white">{text.caseTitle}</h2><p className="mt-5 text-lg leading-8 text-slate-300">{text.caseIntro}</p><ul className="mt-8 grid gap-4 sm:grid-cols-2">{text.caseItems.map(item => <li key={item} className="flex gap-3 text-sm font-semibold text-slate-300"><Check className="h-5 w-5 shrink-0 text-emerald-400" />{item}</li>)}</ul></div></section>
  </main>;
}
