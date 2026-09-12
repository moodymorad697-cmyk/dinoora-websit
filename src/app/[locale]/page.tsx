"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Check, ClipboardCheck, Container, FileCheck2, PackageSearch, ShieldCheck, Warehouse, Truck, BarChart3, Clock, Globe, Users, Search, Mail, Phone, MessageCircle, Factory, Ship, Plane, Zap, Award, TrendingUp } from "lucide-react";

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
    { icon: PackageSearch, title: ar ? "التوريد والتحقق" : "Sourcing & verification", body: ar ? "نبحث عن المورد المناسب ونراجع قدرته قبل أن تبدأ الالتزامات." : "Find the right supplier and review capability before you commit.", href: "/services/sourcing", borderColor: "border-green-500", iconBg: "bg-green-500/20", iconColor: "text-green-400", tags: ar ? "احترافي • شفاف • فعال" : "Professional • Transparent • Efficient" },
    { icon: ClipboardCheck, title: ar ? "فحص الجودة" : "Quality inspection", body: ar ? "قائمة فحص وصور وملاحظات عملية قبل خروج البضاعة من الصين." : "Practical checks, photos, and findings before cargo leaves China.", href: "/services/inspection", borderColor: "border-purple-500", iconBg: "bg-purple-500/20", iconColor: "text-purple-400", tags: ar ? "دقيق • موثوق • شامل" : "Precise • Reliable • Comprehensive" },
    { icon: Warehouse, title: ar ? "التخزين والتجميع" : "Warehousing & consolidation", body: ar ? "نجمع طلبات الموردين ونجهزها للشحن بطريقة تقلل التعقيد والتكلفة." : "Consolidate supplier orders and prepare them for a simpler shipment.", href: "/services/warehousing", borderColor: "border-blue-500", iconBg: "bg-blue-500/20", iconColor: "text-blue-400", tags: ar ? "آمن • منظم • اقتصادي" : "Secure • Organized • Economical" },
    { icon: Container, title: ar ? "الشحن والتخليص" : "Shipping & customs", body: ar ? "مسار شحن مناسب مع مستندات مرتبة وتنسيق حتى الوجهة." : "A suitable shipping route with organized documents through destination.", href: "/services/shipping", borderColor: "border-cyan-500", iconBg: "bg-cyan-500/20", iconColor: "text-cyan-400", tags: ar ? "سريع • مرن • متابع" : "Fast • Flexible • Tracked" },
    { icon: Warehouse, title: ar ? "التخزين" : "Storage", body: ar ? "تخزين آمن بالصين لحين الجاهزية للشحن." : "Secure storage in China until ready for shipment.", href: "/services/warehousing", borderColor: "border-amber-500", iconBg: "bg-amber-500/20", iconColor: "text-amber-400", tags: ar ? "محمي • طويل الأمد • مراقب" : "Protected • Long-term • Monitored" },
    { icon: Truck, title: ar ? "الحلول اللوجستية" : "Logistics", body: ar ? "إدارة كاملة ومتابعة من البداية للنهاية." : "Full management and tracking from start to finish.", href: "/services/logistics", borderColor: "border-red-500", iconBg: "bg-red-500/20", iconColor: "text-red-400", tags: ar ? "شامل • متكامل • ذكي" : "Complete • Integrated • Smart" },
  ];
  const steps = [
    ["01", ar ? "نحدد المطلوب" : "Define the brief", ar ? "المنتج، الكمية، الجودة، والوجهة." : "Product, quantity, quality, and destination."],
    ["02", ar ? "نتحقق ونقارن" : "Verify and compare", ar ? "نراجع الموردين ونوضح الخيارات والتكلفة." : "Review suppliers and clarify options and cost."],
    ["03", ar ? "نفحص ونجهز" : "Inspect and prepare", ar ? "نوثق البضاعة والمستندات قبل الشحن." : "Document cargo and paperwork before dispatch."],
    ["04", ar ? "نشحن ونتابع" : "Ship and follow through", ar ? "ننسق الناقل ونبقيك على اطلاع حتى التسليم." : "Coordinate the carrier and keep you updated to delivery."],
  ];

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 200]);

  return <main className="home-page site-palette bg-slate-950 text-white">
    <section className="relative isolate min-h-[680px] overflow-hidden bg-[#102a43] text-white">
      <motion.div className="absolute inset-0 -z-10 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200&q=75')", y: heroY }} />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,22,38,0.96),rgba(9,39,62,0.78)_52%,rgba(9,39,62,0.5))]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_50%,rgba(34,211,238,0.1),transparent_50%)]" />
      <div className="mx-auto flex min-h-[680px] max-w-7xl items-end px-5 pb-20 pt-40 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-6 border-s-2 border-cyan-300 ps-4 text-sm font-bold uppercase tracking-[0.14em] text-cyan-200">{text.eyebrow}</p>
            <h1 className="max-w-3xl whitespace-pre-line text-5xl font-black leading-[1.02] tracking-tight sm:text-7xl">{text.title}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">{text.intro}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row"><Link href={`/${locale}/quote`} className="inline-flex items-center justify-center gap-3 rounded-lg bg-cyan-300 px-6 py-4 font-bold text-[#082238] transition hover:bg-white hover:scale-105 duration-300">{text.quote}<ArrowRight className="h-5 w-5 rtl:rotate-180" /></Link><a href="#services" className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-4 font-bold transition hover:bg-white/10 hover:scale-105 duration-300">{text.services}</a></div>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="border-b border-cyan-500/20 bg-slate-900"><div className="mx-auto grid max-w-7xl gap-5 px-5 py-7 sm:grid-cols-3 sm:px-8 lg:px-12">{text.proof.map((item, index) => <motion.div key={item} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="flex items-center gap-3 text-sm font-semibold text-slate-300"><motion.span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}>0{index + 1}</motion.span>{item}</motion.div>)}</div></section>

    <section id="services" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12"><div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-[0.14em] text-cyan-400">Dinoora / Services</p><h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl text-white">{text.serviceTitle}</h2><p className="mt-5 text-lg leading-8 text-slate-300">{text.serviceIntro}</p></div><div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{services.map((service, index) => <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="relative"><div className="absolute -top-4 -right-4 text-9xl font-black text-slate-800/30 select-none pointer-events-none">0{index + 1}</div><Link href={`/${locale}${service.href}`} className={`group relative flex flex-col gap-5 rounded-2xl border-2 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02] ${service.borderColor}`}><div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${service.iconBg}`} /><span className={`relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${service.iconBg} ${service.iconColor} transition-all duration-300 group-hover:scale-110 group-hover:animate-pulse`}><service.icon className="h-7 w-7" /></span><span className="relative"><span className="flex items-center gap-3 text-xl font-bold text-white">{service.title}<ArrowRight className={`h-4 w-4 ${service.iconColor} opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1`} /></span><span className="mt-3 block leading-7 text-slate-300">{service.body}</span><div className="mt-4 flex flex-wrap gap-2"><span className="px-3 py-1 text-xs font-semibold text-amber-400 bg-amber-500/10 rounded-full border border-amber-500/30">{service.tags}</span></div></span></Link></motion.div>)}</div></section>

    {/* Brief About Us Section */}
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
      <div className="relative">
        <div className="absolute -top-4 -right-4 text-9xl font-black text-slate-800/30 select-none pointer-events-none">07</div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-cyan-400">Dinoora / About</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl text-white">{ar ? "نبني الوضوح في التجارة العابرة للحدود" : "We build clarity into cross-border trade"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">{ar ? "دينورا فريق تشغيل يربط الشركات في الشرق الأوسط بالمصانع وسلاسل الإمداد في الصين. نحوّل التوريد والشحن من سلسلة اتصالات مبهمة إلى مسار واضح تديره جهة واحدة." : "Dinoora is an operations team connecting Middle East businesses with factories and supply chains in China. We turn sourcing and shipping from unclear conversations into one visible operating path."}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs font-semibold text-amber-400 bg-amber-500/10 rounded-full border border-amber-500/30">{ar ? "موثوق" : "Trusted"}</span>
              <span className="px-3 py-1 text-xs font-semibold text-amber-400 bg-amber-500/10 rounded-full border border-amber-500/30">{ar ? "شفاف" : "Transparent"}</span>
              <span className="px-3 py-1 text-xs font-semibold text-amber-400 bg-amber-500/10 rounded-full border border-amber-500/30">{ar ? "فعال" : "Efficient"}</span>
            </div>
            <Link href={`/${locale}/about`} className="mt-6 inline-flex items-center gap-2 text-cyan-400 font-semibold hover:text-cyan-300 transition">
              {ar ? "اعرف المزيد عنا" : "Learn more about us"}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            className="relative h-64 md:h-80 rounded-2xl overflow-hidden border-2 border-cyan-500/30 shadow-2xl"
          >
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-110" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80')" }} />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-10 w-10 rounded-full bg-cyan-500/20 flex items-center justify-center border border-cyan-500/50">
                  <Globe className="h-5 w-5 text-cyan-400" />
                </div>
                <span className="text-sm font-bold text-white bg-slate-900/80 px-3 py-1 rounded-full">
                  {ar ? "شبكة عالمية" : "Global Network"}
                </span>
              </div>
              <p className="text-xs text-slate-300">{ar ? "نربطك بأفضل الموردين في الصين" : "Connecting you to China's best suppliers"}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>

    <section id="process" className="border-y border-cyan-500/20 bg-slate-900 px-5 py-24 sm:px-8 lg:px-12"><div className="mx-auto max-w-7xl"><div className="max-w-2xl relative"><div className="absolute -top-4 -right-4 text-9xl font-black text-slate-800/30 select-none pointer-events-none">08</div><p className="text-sm font-bold uppercase tracking-[0.14em] text-cyan-400">Dinoora / Workflow</p><h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl text-white">{text.processTitle}</h2><p className="mt-5 text-lg leading-8 text-slate-300">{text.processIntro}</p></div><div className="mt-14 relative"><div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent hidden md:block" /><div className="grid gap-4 md:grid-cols-4">{steps.map(([number, title, body], index) => <motion.div key={number} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} whileHover={{ y: -8 }} className="relative border-t-2 border-cyan-500 bg-gradient-to-br from-slate-800 to-slate-900 p-6 shadow-lg hover:shadow-xl hover:shadow-cyan-500/20 transition-all"><span className="text-sm font-black text-cyan-400">{number}</span><h3 className="mt-5 text-xl font-bold text-white">{title}</h3><p className="mt-3 leading-7 text-slate-300">{body}</p></motion.div>)}</div></div></div></section>

    {/* Trust Statistics Section with Images */}
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
      <div className="grid md:grid-cols-4 gap-6">
        {[
          { icon: Globe, value: "50+", label: ar ? "دولة مخدومة" : "Countries Served", borderColor: "border-green-500", iconBg: "bg-green-500/20", iconColor: "text-green-400", image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=200&q=70" },
          { icon: Users, value: "500+", label: ar ? "شراكة مصنع" : "Factory Partnerships", borderColor: "border-purple-500", iconBg: "bg-purple-500/20", iconColor: "text-purple-400", image: "https://images.unsplash.com/photo-1565514020176-8d4b1ec9e0f8?w=200&q=70" },
          { icon: Container, value: "10K+", label: ar ? "شحنة تم تسليمها" : "Shipments Delivered", borderColor: "border-blue-500", iconBg: "bg-blue-500/20", iconColor: "text-blue-400", image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=200&q=70" },
          { icon: Clock, value: "24/7", label: ar ? "دعم متاح" : "Support Available", borderColor: "border-amber-500", iconBg: "bg-amber-500/20", iconColor: "text-amber-400", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=200&q=70" },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className={`relative border-2 bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${stat.borderColor}`}
          >
            <div className="relative h-24 overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-110" style={{ backgroundImage: `url('${stat.image}')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
            </div>
            <div className="relative p-6 -mt-8">
              <div className={`relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl mx-auto mb-4 border-2 border-white/20 ${stat.iconBg} ${stat.iconColor}`}>
                <stat.icon className="h-7 w-7" />
              </div>
              <div className="text-3xl font-black text-white mb-2">{stat.value}</div>
              <div className="text-sm font-semibold text-slate-300">{stat.label}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>

    {/* Unified CTA Section - Simplified */}
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="relative overflow-hidden bg-gradient-to-r from-cyan-600 to-blue-600 px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-4xl text-center text-white">
        <h2 className="text-3xl sm:text-4xl font-black mb-4">{ar ? "جاهز للبدء؟" : "Ready to get started?"}</h2>
        <p className="text-xl mb-8 opacity-90">{ar ? "تواصل معنا اليوم للحصول على استشارة مجانية" : "Contact us today for a free consultation"}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={`/${locale}/quote`} className="px-8 py-4 bg-white text-cyan-600 font-bold rounded-xl hover:bg-slate-100 transition flex items-center justify-center gap-2">
            {ar ? "ابدأ بطلب عرض سعر" : "Start a quote"}
            <ArrowRight className="h-5 w-5 rtl:rotate-180" />
          </Link>
        </div>
      </div>
    </motion.section>
      {/* Enhanced Case Study Section with Visual Effects */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative min-h-[400px] overflow-hidden rounded-2xl border-2 border-cyan-500/30 shadow-2xl"
          >
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-110" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=85')" }} />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />
            <div className="absolute bottom-6 left-6 flex items-center gap-3">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="h-12 w-12 rounded-full bg-cyan-500/20 flex items-center justify-center border border-cyan-500/50"
              >
                <ShieldCheck className="h-6 w-6 text-cyan-400" />
              </motion.div>
              <span className="text-sm font-bold text-white bg-slate-900/80 px-3 py-1 rounded-full">
                {ar ? "توثيق قبل القرار" : "Evidence before decisions"}
              </span>
            </div>
          </motion.div>

          <div className="space-y-6">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-cyan-400">
              Dinoora / {ar ? "دراسة حالة" : "Case Study"}
            </p>
            <h2 className="text-4xl font-black tracking-tight text-white">
              {text.caseTitle}
            </h2>
            <p className="text-lg leading-8 text-slate-300">
              {text.caseIntro}
            </p>
            <ul className="grid gap-4 sm:grid-cols-2">
              {text.caseItems.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-3 text-sm font-semibold text-slate-300 items-start"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="h-6 w-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5"
                  >
                    <Check className="h-4 w-4 text-emerald-400" />
                  </motion.div>
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>

      {/* New: Global Network Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 px-5 py-24 sm:px-8 lg:px-12"
      >
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px]" />
        </div>

        <div className="mx-auto max-w-7xl relative">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-cyan-400 mb-4">
              Dinoora / {ar ? "شبكة عالمية" : "Global Network"}
            </p>
            <h2 className="text-4xl font-black tracking-tight text-white mb-6">
              {ar ? "نربطك بالعالم" : "Connecting You to the World"}
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              {ar
                ? "شبكة قوية من المصانع والموردين في الصين، مع شراكات لوجستية في أكثر من 50 دولة حول العالم."
                : "Strong network of factories and suppliers in China, with logistics partnerships in over 50 countries worldwide."}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: ar ? "تغطية عالمية" : "Global Coverage",
                desc: ar ? "خدمات في 50+ دولة حول العالم" : "Services in 50+ countries worldwide",
                color: "from-cyan-500 to-blue-500",
              },
              {
                icon: Container,
                title: ar ? "موانئ استراتيجية" : "Strategic Ports",
                desc: ar ? "وصول إلى موانئ رئيسية في آسيا وأوروبا والشرق الأوسط" : "Access to major ports in Asia, Europe, and Middle East",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: Truck,
                title: ar ? "شحن سريع" : "Fast Shipping",
                desc: ar ? "مسارات شحن محسنة للوصول في أسرع وقت" : "Optimized shipping routes for fastest delivery",
                color: "from-emerald-500 to-teal-500",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl blur-xl`} />
                <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 h-full">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6`}
                  >
                    <item.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-300">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* New: Promotional/Advertisement Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 px-5 py-24 sm:px-8 lg:px-12"
      >
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=85')" }} />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-900" />
        </div>

        <div className="mx-auto max-w-7xl relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-block"
              >
                <span className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-bold rounded-full">
                  {ar ? "عرض خاص" : "Special Offer"}
                </span>
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                {ar
                  ? "استورد من الصين بأسعار تنافسية"
                  : "Import from China at Competitive Prices"}
              </h2>
              
              <p className="text-xl text-slate-300 leading-relaxed">
                {ar
                  ? "احصل على استشارة مجانية وعرض سعر مخصص لمنتجاتك. نحن نضمن لك أفضل الأسعار من المصانع مباشرة."
                  : "Get a free consultation and custom quote for your products. We guarantee you the best prices directly from factories."}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href={`/${locale}/quote`}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105"
                >
                  {ar ? "اطلب عرض سعر مجاني" : "Get Free Quote"}
                  <ArrowRight className="h-5 w-5 rtl:rotate-180" />
                </Link>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-emerald-400" />
                  <span className="text-slate-300">{ar ? "استشارة مجانية" : "Free Consultation"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-emerald-400" />
                  <span className="text-slate-300">{ar ? "أسعار تنافسية" : "Competitive Prices"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-emerald-400" />
                  <span className="text-slate-300">{ar ? "توصيل آمن" : "Secure Delivery"}</span>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-blue-500/30 to-purple-500/30 rounded-3xl blur-2xl" />
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 border-2 border-cyan-500/30 rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="relative h-32 rounded-xl overflow-hidden group">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=85')" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  </div>
                  <div className="relative h-32 rounded-xl overflow-hidden group">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1565514020176-8d4b1ec9e0f8?w=400&q=85')" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  </div>
                  <div className="relative h-32 rounded-xl overflow-hidden group">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=85')" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  </div>
                  <div className="relative h-32 rounded-xl overflow-hidden group">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=85')" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-cyan-400 mb-2">
                    {ar ? "نستورد جميع أنواع المنتجات" : "We Import All Types of Products"}
                  </p>
                  <p className="text-xs text-slate-400">
                    {ar ? "من الإلكترونيات إلى المنسوجات" : "From Electronics to Textiles"}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* New: Industry Showcase Section with Images */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12"
      >
        <div className="text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-cyan-400 mb-4">
            Dinoora / {ar ? "الصناعات" : "Industries"}
          </p>
          <h2 className="text-4xl font-black tracking-tight text-white mb-6">
            {ar ? "نخدم جميع الصناعات" : "We Serve All Industries"}
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            {ar
              ? "من الإلكترونيات إلى المنسوجات، من المواد الخام إلى المنتجات النهائية - نحن نغطي جميع احتياجات الاستيراد."
              : "From electronics to textiles, from raw materials to finished products - we cover all import needs."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=85",
              title: ar ? "الإلكترونيات" : "Electronics",
              desc: ar ? "أجهزة إلكترونية ومكونات" : "Electronic devices and components",
              icon: Zap,
            },
            {
              image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=85",
              title: ar ? "الملابس والمنسوجات" : "Fashion & Textiles",
              desc: ar ? "ملابس ومنسوجات متنوعة" : "Clothing and textiles",
              icon: Award,
            },
            {
              image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=85",
              title: ar ? "الآلات والمعدات" : "Machinery & Equipment",
              desc: ar ? "آلات صناعية ومعدات" : "Industrial machinery and equipment",
              icon: Factory,
            },
            {
              image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=85",
              title: ar ? "المنتجات المنزلية" : "Home Products",
              desc: ar ? "أدوات منزلية ومستلزمات" : "Home goods and supplies",
              icon: Warehouse,
            },
          ].map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group overflow-hidden rounded-2xl border border-slate-700"
            >
              <div className="relative h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${industry.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                <div className="absolute top-4 right-4">
                  <div className="h-10 w-10 rounded-full bg-cyan-500/20 backdrop-blur-sm flex items-center justify-center border border-cyan-500/50">
                    <industry.icon className="h-5 w-5 text-cyan-400" />
                  </div>
                </div>
              </div>
              <div className="relative bg-slate-900/90 backdrop-blur-sm p-6">
                <h3 className="text-lg font-bold text-white mb-2">{industry.title}</h3>
                <p className="text-sm text-slate-300">{industry.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* New: Shipping Methods Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 px-5 py-24 sm:px-8 lg:px-12"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[200px]" />
        </div>

        <div className="mx-auto max-w-7xl relative">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-cyan-400 mb-4">
              Dinoora / {ar ? "طرق الشحن" : "Shipping Methods"}
            </p>
            <h2 className="text-4xl font-black tracking-tight text-white mb-6">
              {ar ? "خيارات شحن مرنة" : "Flexible Shipping Options"}
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              {ar
                ? "اختر طريقة الشحن المناسبة لمتطلباتك وميزانيتك"
                : "Choose the shipping method that fits your requirements and budget"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Ship,
                title: ar ? "الشحن البحري" : "Sea Freight",
                desc: ar ? "حاويات كاملة واقتصادية للشحنات الكبيرة" : "Full containers and economical for large shipments",
                image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&q=85",
                color: "from-blue-500 to-cyan-500",
                time: ar ? "30-45 يوم" : "30-45 days",
              },
              {
                icon: Plane,
                title: ar ? "الشحن الجوي" : "Air Freight",
                desc: ar ? "سريع وموثوق للشحنات العاجلة" : "Fast and reliable for urgent shipments",
                image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=85",
                color: "from-purple-500 to-pink-500",
                time: ar ? "5-10 أيام" : "5-10 days",
              },
              {
                icon: Truck,
                title: ar ? "الشحن البري" : "Land Freight",
                desc: ar ? "شحن سريع عبر الحدود البرية" : "Fast cross-border shipping",
                image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=85",
                color: "from-emerald-500 to-teal-500",
                time: ar ? "15-25 يوم" : "15-25 days",
              },
            ].map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl blur-xl`} />
                <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden h-full">
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url('${method.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className={`h-12 w-12 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center shadow-lg`}
                      >
                        <method.icon className="h-6 w-6 text-white" />
                      </motion.div>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full border border-cyan-500/30">
                      <span className="text-xs font-bold text-cyan-400">{method.time}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">{method.title}</h3>
                    <p className="text-slate-300">{method.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* New: Why Choose Us Section with Visual Stats */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-cyan-400 mb-4">
                Dinoora / {ar ? "لماذا نحن" : "Why Choose Us"}
              </p>
              <h2 className="text-4xl font-black tracking-tight text-white mb-6">
                {ar ? "شريكك الموثوق في التجارة الدولية" : "Your Trusted Partner in International Trade"}
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                {ar
                  ? "نحن نجمع بين الخبرة العميقة في السوق الصيني والفهم الكامل لاحتياجات الأسواق العالمية، لنقدم لك تجربة استيراد سلسة وفعالة."
                  : "We combine deep expertise in the Chinese market with a complete understanding of global market needs, to provide you with a seamless and efficient import experience."}
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: TrendingUp,
                  title: ar ? "توفير التكاليف" : "Cost Savings",
                  desc: ar ? "نفاوض أفضل الأسعار مع الموردين" : "We negotiate the best prices with suppliers",
                },
                {
                  icon: ShieldCheck,
                  title: ar ? "ضمان الجودة" : "Quality Assurance",
                  desc: ar ? "فحص شامل قبل الشحن" : "Comprehensive inspection before shipping",
                },
                {
                  icon: Clock,
                  title: ar ? "تسليم في الوقت" : "On-Time Delivery",
                  desc: ar ? "متابعة دقيقة للشحنات" : "Precise tracking of shipments",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="h-12 w-12 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0 border border-cyan-500/30"
                  >
                    <item.icon className="h-6 w-6 text-cyan-400" />
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-slate-300">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl" />
            <div className="relative grid grid-cols-2 gap-4">
              {[
                { value: "95%", label: ar ? "رضا العملاء" : "Client Satisfaction", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=85" },
                { value: "500+", label: ar ? "شريك مصنع" : "Factory Partners", image: "https://images.unsplash.com/photo-1565514020176-8d4b1ec9e0f8?w=400&q=85" },
                { value: "50+", label: ar ? "دولة مخدومة" : "Countries Served", image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=400&q=85" },
                { value: "24/7", label: ar ? "دعم متاح" : "Support Available", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&q=85" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative group overflow-hidden rounded-2xl border border-slate-700"
                >
                  <div className="relative h-40">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url('${stat.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                      <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                      <div className="text-xs font-semibold text-slate-300 text-center">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>
  </main>;
}
