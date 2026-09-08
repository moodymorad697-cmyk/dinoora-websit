"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight, Check, Eye, Handshake, ShieldCheck, Target, Search, Key, Users, FileCheck } from "lucide-react";
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

  return <main className="about-page site-palette bg-[#dcecf0] text-[#102a43] relative">
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

    <section className="relative isolate overflow-hidden bg-[#102a43] text-white"><div className="absolute inset-0 -z-10 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1553413077-190dd305871c?w=2000&q=85')" }} /><div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,22,38,0.96),rgba(9,39,62,0.72),rgba(9,39,62,0.45))]" /><div className="mx-auto flex min-h-[590px] max-w-7xl items-end px-5 pb-20 pt-40 sm:px-8 lg:px-12"><div className="max-w-3xl"><p className="mb-6 border-s-2 border-cyan-300 ps-4 text-sm font-bold uppercase tracking-[0.14em] text-cyan-200">{c.eyebrow}</p><h1 className="max-w-3xl text-5xl font-black leading-[1.04] sm:text-7xl">{c.title}</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">{c.intro}</p><Link href={`/${locale}/contact`} className="mt-9 inline-flex items-center gap-3 rounded-lg bg-cyan-300 px-6 py-4 font-bold text-[#082238] hover:bg-white">{c.contact}<ArrowRight className="h-5 w-5 rtl:rotate-180" /></Link></div></div></section>
    <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12"><div><p className="text-sm font-bold uppercase tracking-[0.14em] text-cyan-700">{c.storyLabel}</p><h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">{c.storyTitle}</h2><p className="mt-7 text-lg leading-8 text-[#5d7180]">{c.story}</p><p className="mt-5 text-lg leading-8 text-[#5d7180]">{c.story2}</p></div><div className="rounded-2xl border border-[#dbe5eb] bg-white p-7 shadow-[0_16px_40px_rgba(16,42,67,0.06)]"><div className="flex items-center gap-3 border-b border-[#e4edf1] pb-5"><Handshake className="h-6 w-6 text-cyan-700" /><h3 className="text-xl font-bold">{c.modelTitle}</h3></div><ul className="mt-6 space-y-5">{c.model.map(item => <li key={item} className="flex gap-3 leading-7 text-[#4c6575]"><Check className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />{item}</li>)}</ul></div></section>

    {/* Global Network Illustration Section */}
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
      <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-2 border-cyan-500/30">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=85"
          alt={ar ? "شبكة عالمية للتجارة" : "Global Trade Network"}
          fill
          className="object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />
        <div className="absolute bottom-8 left-8 right-8 text-white">
          <p className="text-sm font-bold uppercase tracking-wider text-cyan-300 mb-2">
            {ar ? "شبكة الموردين والأسواق" : "Supplier Networks & Markets"}
          </p>
          <h3 className="text-2xl md:text-3xl font-black">
            {ar ? "نعمل مع شبكة واسعة من الموردين والأسواق في الصين" : "We work with an extensive network of suppliers and markets in China"}
          </h3>
        </div>
      </div>
    </section>
    <section className="bg-[#102a43] px-5 py-24 text-white sm:px-8 lg:px-12"><div className="mx-auto max-w-7xl"><div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-[0.14em] text-cyan-300">Dinoora / Proof points</p><h2 className="mt-4 text-4xl font-black sm:text-5xl">{ar ? "ما الذي يحصل عليه العميل؟" : "What the client gets"}</h2><p className="mt-5 text-lg leading-8 text-slate-300">{ar ? "مزايا عملية تظهر في طريقة إدارة الطلب، لا في العبارات التسويقية فقط." : "Practical advantages reflected in how the request is managed, not just in marketing language."}</p></div><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{trustCards.map(([title, body, image], index) => <motion.article key={title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="group relative overflow-hidden rounded-2xl border-2 bg-gradient-to-br from-slate-800 to-slate-900 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2" style={{ borderColor: index === 0 ? 'border-green-500' : index === 1 ? 'border-purple-500' : index === 2 ? 'border-blue-500' : 'border-amber-500' }}><div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `linear-gradient(135deg, ${index === 0 ? 'rgba(34,197,94,0.1)' : index === 1 ? 'rgba(168,85,247,0.1)' : index === 2 ? 'rgba(59,130,246,0.1)' : 'rgba(245,158,11,0.1)'}, transparent)` }} /><div className="h-36 bg-cover bg-center transition duration-700 group-hover:scale-105" style={{ backgroundImage: `url('${image}')` }} /><div className="p-5 relative"><h3 className="text-xl font-bold text-white">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-300">{body}</p></div></motion.article>)}</div></div></section>
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12"><div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-[0.14em] text-cyan-700">Dinoora / Process</p><h2 className="mt-4 text-4xl font-black sm:text-5xl">{ar ? "عملية من 4 خطوات محسّنة" : "A focused four-step process"}</h2><p className="mt-5 text-lg leading-8 text-[#5d7180]">{ar ? "من الاستشارة الأولى إلى التسليم، كل خطوة مصممة لأقصى كفاءة." : "From the first consultation to delivery, each step is designed for clarity and efficiency."}</p></div><div className="mt-12 relative"><div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent hidden md:block" /><div className="grid gap-5 md:grid-cols-4">{processSteps.map(([number, title, body]) => <article key={number} className="relative border-t-4 border-cyan-700 bg-white p-6 shadow-[0_10px_30px_rgba(16,42,67,0.06)]"><span className="text-4xl font-black text-[#c5d9df]">{number}</span><h3 className="mt-6 text-xl font-bold">{title}</h3><p className="mt-3 leading-7 text-[#617684]">{body}</p></article>)}</div></div></section>
    <section className="border-y border-[#dbe5eb] bg-[#eaf2f4] px-5 py-24 sm:px-8 lg:px-12"><div className="mx-auto max-w-7xl"><div className="grid gap-5 md:grid-cols-2"><div className="rounded-2xl bg-[#102a43] p-8 text-white"><Target className="h-8 w-8 text-cyan-300" /><h2 className="mt-8 text-2xl font-black">{c.missionTitle}</h2><p className="mt-4 leading-8 text-slate-300">{c.mission}</p></div><div className="rounded-2xl border border-[#cadde3] bg-white p-8"><Eye className="h-8 w-8 text-cyan-700" /><h2 className="mt-8 text-2xl font-black">{c.visionTitle}</h2><p className="mt-4 leading-8 text-[#5d7180]">{c.vision}</p></div></div><h2 className="mt-20 text-3xl font-black">{c.valuesTitle}</h2><div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{c.values.map(([number, title, body], index) => {const icons = [Search, Key, FileCheck, Users];const Icon = icons[index];return <div key={number} className="border-t-2 border-cyan-700 bg-white p-6"><div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-4"><Icon className="h-6 w-6 text-cyan-700" /></div><span className="text-sm font-black text-cyan-700">{number}</span><h3 className="mt-6 text-xl font-bold">{title}</h3><p className="mt-3 leading-7 text-[#617684]">{body}</p></div>;})}</div></div></section>
    <section className="relative bg-[#102a43] px-5 py-20 text-center text-white sm:px-8 overflow-hidden"><div className="absolute inset-0 opacity-10"><Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=85" alt="" fill className="object-cover" loading="lazy" /></div><div className="relative z-10"><ShieldCheck className="mx-auto h-9 w-9 text-cyan-300" /><h2 className="mx-auto mt-6 max-w-3xl text-3xl font-black sm:text-5xl">{c.finalTitle}</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">{c.finalBody}</p><Link href={`/${locale}/contact`} className="mt-9 inline-flex items-center gap-3 rounded-lg bg-cyan-300 px-7 py-4 font-bold text-[#082238] hover:bg-white">{c.finalCta}<ArrowRight className="h-5 w-5 rtl:rotate-180" /></Link></div></section>
  </main>;
}
