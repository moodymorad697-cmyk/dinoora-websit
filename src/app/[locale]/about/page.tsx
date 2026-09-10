"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight, Check, Eye, Handshake, ShieldCheck, Target, Search, Key, Users, FileCheck, Globe, Award, TrendingUp, Zap, Factory, Ship, Plane, Building2, Users2, Star, Clock, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const locale = useLocale();
  const ar = locale === "ar";
  const c = ar ? {
    eyebrow: "عن دينورا", title: "نبني الوضوح في تجارة عابرة للحدود.", intro: "دينورا فريق تشغيل يربط الشركات في الشرق الأوسط بشبكة واسعة من الموردين والأسواق في الصين. دورنا ليس تمرير الطلب؛ بل جعل كل قرار قابلاً للفهم والمتابعة.", contact: "تحدث مع فريقنا", storyLabel: "القصة وراء النموذج", storyTitle: "حين تكون المسافة هي المشكلة، نكون حاضرين في الطرفين.", story: "بدأت دينورا من ملاحظة عملية: كثير من مشاكل الاستيراد لا تبدأ في الميناء، بل قبل ذلك بكثير؛ مورد غير واضح، مواصفات غير مكتملة، أو شحنة بلا مالك يتابعها. لذلك صممنا نموذجاً يجمع التوريد والتحقق والفحص والتجميع والشحن ضمن مسار واحد.", story2: "من خلال علاقتنا مع شبكة الموردين والأسواق في الصين، نملك القدرة على السؤال والتحقق والتدخل مبكراً. وفي جهة العميل، نتحدث بلغة الأعمال والموعد والتكلفة، لا بلغة الإجراءات فقط.", modelTitle: "كيف نعمل كشريك تشغيل", model: ["نفهم الهدف التجاري قبل البحث عن المنتج.", "نوثق المعلومات التي تحتاج قراراً، لا صوراً دعائية.", "ننسق بين المورد والمستودع والناقل بمالك واضح.", "نبلغ عن المخاطر مبكراً ونقترح مساراً عملياً."], missionTitle: "مهمتنا", mission: "تبسيط التجارة مع الصين للشركات التي تحتاج نتيجة يمكن التخطيط لها.", visionTitle: "رؤيتنا", vision: "أن تصبح سلسلة الإمداد بين الصين والشرق الأوسط أكثر وضوحاً وانضباطاً وأكثر اعتماداً على البيانات.", valuesTitle: "مبادئ التشغيل لدينا", values: [["01", "الوضوح", "نوضح ما هو معروف وما يحتاج للتحقق."], ["02", "المسؤولية", "كل مرحلة لها مالك وتحديث يمكنك الرجوع إليه."], ["03", "التحقق", "لا نعتمد على الوصف وحده؛ نطلب الأدلة ذات الصلة."], ["04", "الشراكة", "نقيس النجاح بالثقة في تكرار العملية."]], finalTitle: "دعنا نفهم الاحتياج أولاً.", finalBody: "لا تحتاج إلى وصف مثالي. أرسل ما لديك من معلومات، وسنحدد معك الخطوات التالية.", finalCta: "تواصل معنا"
  } : {
    eyebrow: "About Dinoora", title: "We build clarity into cross-border trade.", intro: "Dinoora is an operations team connecting Middle East businesses with an extensive network of suppliers and markets in China. We do more than pass along an order: we make each decision visible and trackable.", contact: "Talk to our team", storyLabel: "The story behind the model", storyTitle: "When distance is the problem, we stay present at both ends.", story: "Dinoora began with a practical observation: many import problems start long before the port, with an unclear supplier, incomplete specifications, or a shipment with no clear owner. We built one operating path across sourcing, verification, inspection, consolidation, and shipping.", story2: "Through our relationships with supplier networks and markets in China, we can ask better questions, verify earlier, and intervene sooner. On the customer side, we speak in business outcomes, deadlines, and cost, not process language alone.", modelTitle: "How we operate as a partner", model: ["Understand the commercial goal before searching for a product.", "Document what supports a decision, not decorative claims.", "Coordinate suppliers, warehouses, and carriers with clear ownership.", "Surface risks early and recommend a practical route."], missionTitle: "Our mission", mission: "Make China trade simpler for businesses that need a result they can plan around.", visionTitle: "Our vision", vision: "Make supply chains between China and the Middle East clearer, more disciplined, and more data-informed.", valuesTitle: "Our operating principles", values: [["01", "Clarity", "We show what is known and what still needs verification."], ["02", "Ownership", "Each stage has an owner and an update you can reference."], ["03", "Verification", "We do not rely on descriptions alone; we ask for relevant evidence."], ["04", "Partnership", "We measure success by the confidence to repeat the process."]], finalTitle: "Let us understand the need first.", finalBody: "You do not need a perfect brief. Send what you have, and we will outline the next steps with you.", finalCta: "Contact us"
  };

  const trustCards = ar ? [
    ["حماية استثمارك", "تأمين تجاري، ضمان استرداد، حماية مدفوعات عبر Escrow، وكفالة جودة ضمن خطة واضحة.", "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=900&q=85"],
    ["توفير مدروس", "مقارنة أسعار فورية عبر أكثر من 500 مصنع، مع توضيح الفرق بين السعر والتكلفة النهائية.", "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=900&q=85"],
    ["فريق عربي-صيني", "مديرو حسابات يتقنون العربية والصينية والإنجليزية ويفهمون ثقافة المصنع والعميل.", "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=900&q=85"],
    ["تنفيذ أسرع", "معالجة متوازية للتوريد والفحص والشحن حتى تصل المنتجات إلى السوق في وقت أقصر.", "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=900&q=85"],
  ] : [
    ["Protecting your investment", "Trade cover, refund assurance, Escrow payment protection, and quality accountability within a clear plan.", "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=900&q=85"],
    ["Cost-aware sourcing", "Live comparison across 500+ factories, with a clear view of price and total landed cost.", "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=900&q=85"],
    ["Arabic-Chinese team", "Account managers fluent in Arabic, Chinese, and English who understand both sides of the factory relationship.", "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=900&q=85"],
    ["Parallel execution", "Sourcing, inspection, and shipping move together so your products reach market sooner.", "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=900&q=85"],
  ];

  const processSteps = ar ? [
    ["01", "الاستشارة والتخطيط", "تحديد المواصفات، التكلفة المستهدفة، مستوى الجودة، وجدول التسليم في خطة تنفيذية."],
    ["02", "البحث والتفاوض", "مطابقة المصانع واختيار أفضل الخيارات والتفاوض على السعر وإدارة العينات."],
    ["03", "الفحص والتحقق", "فحص قبل الإنتاج وأثناء التصنيع وقبل الشحن مع أدلة مصورة وملاحظات واضحة."],
    ["04", "الشحن والتسليم", "تجميع الشحنة وتخليصها وتتبعها حتى تصل إلى باب المستودع."],
  ] : [
    ["01", "Consultation and planning", "Define specifications, target cost, quality level, and delivery schedule in an execution plan."],
    ["02", "Research and negotiation", "Match factories, shortlist the right options, negotiate terms, and manage samples."],
    ["03", "Inspection and verification", "Inspect before production, during manufacturing, and before dispatch with visual evidence."],
    ["04", "Shipping and delivery", "Consolidate, clear, track, and coordinate the shipment through warehouse delivery."],
  ];

  const { scrollYProgress } = useScroll();
  const lineLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const MilestoneDot = () => (
    <motion.div
      className="w-3 h-3 rounded-full bg-cyan-400"
      animate={{
        scale: [1, 1.5, 1],
        boxShadow: ['0 0 0 rgba(34, 211, 238, 0)', '0 0 20px rgba(34, 211, 238, 0.8)', '0 0 0 rgba(34, 211, 238, 0)'],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatDelay: 3,
      }}
    />
  );

  return <main className="about-page site-palette bg-slate-950 text-white relative">
    {/* Animated Connecting Line */}
    <div className={`fixed top-0 bottom-0 w-1 z-10 hidden lg:block ${ar ? 'right-8' : 'left-8'}`}>
      <svg className="w-full h-full" style={{ willChange: 'transform' }}>
        <motion.path
          d="M 0 0 L 0 100%"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="1000"
          strokeDashoffset={useTransform(lineLength, [0, 1], [1000, 0])}
          initial={{ pathLength: 0 }}
          style={{ pathLength: lineLength }}
        />
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0891b2" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0891b2" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>
    </div>

    <section className="relative isolate overflow-hidden bg-[#102a43] text-white"><div className="absolute inset-0 -z-10 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1553413077-190dd305871c?w=2000&q=85')" }} /><div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,22,38,0.96),rgba(9,39,62,0.72),rgba(9,39,62,0.45))]" /><div className="mx-auto flex min-h-[590px] max-w-7xl items-end px-5 pb-20 pt-40 sm:px-8 lg:px-12"><div className="max-w-3xl"><p className="mb-6 border-s-2 border-cyan-300 ps-4 text-sm font-bold uppercase tracking-[0.14em] text-cyan-200">{c.eyebrow}</p><h1 className="max-w-3xl text-5xl font-black leading-[1.04] sm:text-7xl">{c.title}</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">{c.intro}</p></div></div></section>
    <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-cyan-400">{c.storyLabel}</p>
        <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl text-white">{c.storyTitle}</h2>
        <p className="mt-7 text-lg leading-8 text-slate-300">{c.story}</p>
        <p className="mt-5 text-lg leading-8 text-slate-300">{c.story2}</p>
      </div>
      <div className="rounded-2xl border-2 border-cyan-500/30 bg-gradient-to-br from-slate-900 to-slate-950 p-7 shadow-2xl">
        <div className="flex items-center gap-3 border-b border-slate-700 pb-5">
          <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }} className="h-10 w-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
            <Handshake className="h-6 w-6 text-cyan-400" />
          </motion.div>
          <h3 className="text-xl font-bold text-white">{c.modelTitle}</h3>
        </div>
        <ul className="mt-6 space-y-5">{c.model.map(item => <li key={item} className="flex gap-3 leading-7 text-slate-300"><motion.div whileHover={{ scale: 1.2, rotate: 10 }} className="mt-1 h-5 w-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0"><Check className="h-3 w-3 text-emerald-400" /></motion.div>{item}</li>)}</ul>
      </div>
    </section>

    {/* Enhanced Global Network Section with Multiple Images */}
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12"
    >
      <div className="text-center mb-16">
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-cyan-400 mb-4">
          Dinoora / {ar ? "الشبكة العالمية" : "Global Network"}
        </p>
        <h2 className="text-4xl font-black tracking-tight text-white mb-6">
          {ar ? "شبكة قوية تربط الصين بالعالم" : "Strong Network Connecting China to the World"}
        </h2>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          {ar
            ? "نمتلك شبكة واسعة من الموردين والمصانع والأسواق في الصين، مع شراكات لوجستية في أكثر من 50 دولة"
            : "We have an extensive network of suppliers, factories, and markets in China, with logistics partnerships in over 50 countries"}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {[
          {
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=85",
            title: ar ? "مصانع في ييوو" : "Factories in Yiwu",
            desc: ar ? "مركز تجاري عالمي للبضائع الصغيرة" : "Global trading hub for small commodities",
            count: "500+",
          },
          {
            image: "https://images.unsplash.com/photo-1565514020176-8d4b1ec9e0f8?w=600&q=85",
            title: ar ? "موانئ شنغهاي" : "Shanghai Ports",
            desc: ar ? "أكبر ميناء في العالم" : "World's largest port",
            count: "24/7",
          },
          {
            image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=600&q=85",
            title: ar ? "أسواق شنتشن" : "Shenzhen Markets",
            desc: ar ? "مركز الإلكترونيات والتكنولوجيا" : "Electronics and technology hub",
            count: "1000+",
          },
        ].map((location, index) => (
          <motion.div
            key={location.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="relative group overflow-hidden rounded-2xl border border-slate-700"
          >
            <div className="relative h-64">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${location.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
              <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full border border-cyan-500/30">
                <span className="text-sm font-bold text-cyan-400">{location.count}</span>
              </div>
            </div>
            <div className="relative bg-slate-900/90 backdrop-blur-sm p-6">
              <h3 className="text-lg font-bold text-white mb-2">{location.title}</h3>
              <p className="text-sm text-slate-300">{location.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
    <section className="bg-[#102a43] px-5 py-24 text-white sm:px-8 lg:px-12"><div className="mx-auto max-w-7xl"><div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-[0.14em] text-cyan-300">Dinoora / Proof points</p><h2 className="mt-4 text-4xl font-black sm:text-5xl">{ar ? "ما الذي يحصل عليه العميل؟" : "What the client gets"}</h2><p className="mt-5 text-lg leading-8 text-slate-300">{ar ? "مزايا عملية تظهر في طريقة إدارة الطلب، لا في العبارات التسويقية فقط." : "Practical advantages reflected in how the request is managed, not just in marketing language."}</p></div><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{trustCards.map(([title, body, image], index) => <motion.article key={title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="group relative overflow-hidden rounded-2xl border-2 bg-gradient-to-br from-slate-800 to-slate-900 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2" style={{ borderColor: index === 0 ? 'border-green-500' : index === 1 ? 'border-purple-500' : index === 2 ? 'border-blue-500' : 'border-amber-500' }}><div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `linear-gradient(135deg, ${index === 0 ? 'rgba(34,197,94,0.1)' : index === 1 ? 'rgba(168,85,247,0.1)' : index === 2 ? 'rgba(59,130,246,0.1)' : 'rgba(245,158,11,0.1)'}, transparent)` }} /><div className="h-36 bg-cover bg-center transition duration-700 group-hover:scale-105" style={{ backgroundImage: `url('${image}')` }} /><div className="p-5 relative"><h3 className="text-xl font-bold text-white">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-300">{body}</p></div></motion.article>)}</div></div></section>
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12">
      <div className="max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-cyan-400">Dinoora / Process</p>
        <h2 className="mt-4 text-4xl font-black sm:text-5xl text-white">{ar ? "عملية من 4 خطوات محسّنة" : "A focused four-step process"}</h2>
        <p className="mt-5 text-lg leading-8 text-slate-300">{ar ? "من الاستشارة الأولى إلى التسليم، كل خطوة مصممة لأقصى كفاءة." : "From the first consultation to delivery, each step is designed for clarity and efficiency."}</p>
      </div>
      <div className="mt-12 relative">
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent hidden md:block" />
        <div className="grid gap-5 md:grid-cols-4">
          {processSteps.map(([number, title, body], index) => (
            <motion.article
              key={number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative border-t-4 border-cyan-500 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
            >
              <span className="text-4xl font-black text-cyan-400">{number}</span>
              <h3 className="mt-6 text-xl font-bold text-white">{title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
    {/* Enhanced Mission, Vision & Values Section */}
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="border-y border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 px-5 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-5 md:grid-cols-2 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02 }}
            className="rounded-2xl border-2 border-cyan-500/30 bg-gradient-to-br from-slate-900 to-slate-950 p-8 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
          >
            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }} className="h-12 w-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-6">
              <Target className="h-8 w-8 text-cyan-400" />
            </motion.div>
            <h2 className="text-2xl font-black text-white">{c.missionTitle}</h2>
            <p className="mt-4 leading-8 text-slate-300">{c.mission}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02 }}
            className="rounded-2xl border-2 border-purple-500/30 bg-gradient-to-br from-slate-900 to-slate-950 p-8 shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
          >
            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }} className="h-12 w-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6">
              <Eye className="h-8 w-8 text-purple-400" />
            </motion.div>
            <h2 className="text-2xl font-black text-white">{c.visionTitle}</h2>
            <p className="mt-4 leading-8 text-slate-300">{c.vision}</p>
          </motion.div>
        </div>

        <h2 className="text-3xl font-black text-white text-center mb-12">{c.valuesTitle}</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {c.values.map(([number, title, body], index) => {
            const icons = [Search, Key, FileCheck, Users];
            const Icon = icons[index];
            const colors = [
              "from-green-500 to-emerald-500",
              "from-blue-500 to-cyan-500",
              "from-purple-500 to-pink-500",
              "from-amber-500 to-orange-500",
            ];
            return (
              <motion.div
                key={number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="border-t-2 border-cyan-500/50 bg-gradient-to-br from-slate-900 to-slate-950 p-6 rounded-2xl hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors[index]} flex items-center justify-center mb-4`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </motion.div>
                <span className="text-sm font-black text-cyan-400">{number}</span>
                <h3 className="mt-6 text-xl font-bold text-white">{title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
    {/* New: Achievements & Milestones Section */}
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 px-5 py-24 sm:px-8 lg:px-12"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px]" />
      </div>

      <div className="mx-auto max-w-7xl relative">
        <div className="text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-cyan-400 mb-4">
            Dinoora / {ar ? "الإنجازات" : "Achievements"}
          </p>
          <h2 className="text-4xl font-black tracking-tight text-white mb-6">
            {ar ? "رحلة نجاح مستمرة" : "A Journey of Success"}
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { value: "10K+", label: ar ? "شحنة منجزة" : "Shipments Delivered", icon: Ship },
            { value: "500+", label: ar ? "شريك مصنع" : "Factory Partners", icon: Factory },
            { value: "50+", label: ar ? "دولة مخدومة" : "Countries Served", icon: Globe },
            { value: "95%", label: ar ? "رضا العملاء" : "Client Satisfaction", icon: Star },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-700 rounded-2xl p-8 text-center hover:border-cyan-500/50 transition-all duration-300">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="h-16 w-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center mx-auto mb-4"
                >
                  <stat.icon className="h-8 w-8 text-cyan-400" />
                </motion.div>
                <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-sm font-semibold text-slate-300">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>

    {/* New: Timeline Section */}
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12"
    >
      <div className="text-center mb-16">
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-cyan-400 mb-4">
          Dinoora / {ar ? "رحلتنا" : "Our Journey"}
        </p>
        <h2 className="text-4xl font-black tracking-tight text-white mb-6">
          {ar ? "من البداية إلى القمة" : "From Start to Success"}
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-amber-500 hidden md:block" />
        
        {[
          {
            year: "2018",
            title: ar ? "البداية في سوق الفوتيات" : "Starting in Futian Market",
            desc: ar ? "بدأنا في سوق الفوتيات في شنتشن، حيث نتخصص في الإلكترونيات والمنتجات التقنية. فريقنا يتواجد في غوانزو وغيرها من المناطق الصناعية الرئيسية." : "We started in Futian Market, Shenzhen, specializing in electronics and tech products. Our team operates in Guangzhou and other major industrial zones.",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=85",
          },
          {
            year: "2019",
            title: ar ? "التخصص في الملابس" : "Clothing Specialization",
            desc: ar ? "خلال هذه الفترة، ركزنا على الملابس بشكل حصري، حيث أصبحت هذه الخدمة من تخصصاتنا الأساسية." : "During this period, we focused exclusively on clothing, making it one of our core specializations.",
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&q=85",
          },
          {
            year: "2020",
            title: ar ? "التوسع في الطاقات الشمسية" : "Solar Energy Expansion",
            desc: ar ? "دخلنا في مجال الطاقات الشمسية والمنتجات ذات الصلة، مما أضاف أبعاداً جديدة لخدماتنا." : "We entered the solar energy sector and related products, adding new dimensions to our services.",
            image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&q=85",
          },
          {
            year: "2021",
            title: ar ? "بناء الخبرة اللوجستية" : "Building Logistics Expertise",
            desc: ar ? "من خلال توالينا في السوق الصيني، توفر لدينا خبرة قوية في الشحن. نمت الطلبات حتى أصبح لدينا مخازن لتجميع شحنات عملائنا، فصبح التخزين والشحن من خدماتنا الأساسية." : "Through our continued presence in the Chinese market, we built strong logistics expertise. Orders grew until we established warehouses to consolidate client shipments, making storage and shipping core services.",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=85",
          },
          {
            year: "2022",
            title: ar ? "التوسع في الأدوات والمعدات" : "Tools & Equipment Expansion",
            desc: ar ? "توسعنا في الأدوات الكهربائية وأدوات البناء والمعدات وغيرها. أصبح لدينا خبرة واسعة في البحث عن أي منتجات والتواصل مع أكثر من مصنع لمنتج واحد." : "We expanded into electrical tools, construction equipment, and machinery. We gained extensive expertise in sourcing any products and communicating with multiple factories for a single product.",
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=85",
          },
          {
            year: "2024",
            title: ar ? "خدمات شاملة متكاملة" : "Comprehensive Integrated Services",
            desc: ar ? "اليوم، نقدم خدمات متعددة ومتكاملة نتيجة سنوات من التراكم والخبرة. من التوريد إلى الشحن، من الفحص إلى التخزين، نحن شريكك الموثوق في التجارة مع الصين." : "Today, we offer multiple integrated services resulting from years of accumulation and expertise. From sourcing to shipping, from inspection to storage, we are your trusted partner in China trade.",
            image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=400&q=85",
          },
        ].map((milestone, index) => (
          <motion.div
            key={milestone.year}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
          >
            <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative group overflow-hidden rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-950"
              >
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${milestone.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                </div>
                <div className="relative p-6">
                  <div className="text-3xl font-black text-cyan-400 mb-2">{milestone.year}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                  <p className="text-slate-300">{milestone.desc}</p>
                </div>
              </motion.div>
            </div>
            <div className="hidden md:flex w-12 h-12 rounded-full bg-cyan-500 items-center justify-center z-10 border-4 border-slate-950">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1" />
          </motion.div>
        ))}
      </div>
    </motion.section>

    {/* Final CTA Section */}
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="relative bg-gradient-to-r from-cyan-600 to-blue-600 px-5 py-20 text-center text-white sm:px-8 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=85')" }} />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }} className="h-16 w-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-6">
          <MessageCircle className="h-8 w-8 text-white" />
        </motion.div>
        <h2 className="text-3xl sm:text-5xl font-black mb-6">{c.finalTitle}</h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">{c.finalBody}</p>
        <Link
          href={`/${locale}/contact`}
          className="inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-bold text-cyan-600 hover:bg-slate-100 transition-all duration-300 hover:scale-105"
        >
          {c.finalCta}
          <ArrowRight className="h-5 w-5 rtl:rotate-180" />
        </Link>
      </div>
    </motion.section>
  </main>;
}
