"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { ArrowRight, Check, ClipboardCheck, Container, FileCheck2, PackageSearch, ShieldCheck, Warehouse } from "lucide-react";

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
  ];
  const steps = [
    ["01", ar ? "نحدد المطلوب" : "Define the brief", ar ? "المنتج، الكمية، الجودة، والوجهة." : "Product, quantity, quality, and destination."],
    ["02", ar ? "نتحقق ونقارن" : "Verify and compare", ar ? "نراجع الموردين ونوضح الخيارات والتكلفة." : "Review suppliers and clarify options and cost."],
    ["03", ar ? "نفحص ونجهز" : "Inspect and prepare", ar ? "نوثق البضاعة والمستندات قبل الشحن." : "Document cargo and paperwork before dispatch."],
    ["04", ar ? "نشحن ونتابع" : "Ship and follow through", ar ? "ننسق الناقل ونبقيك على اطلاع حتى التسليم." : "Coordinate the carrier and keep you updated to delivery."],
  ];

  return <main className="home-page site-palette bg-[#dcecf0] text-[#102a43]">
    <section className="relative isolate min-h-[680px] overflow-hidden bg-[#102a43] text-white">
      <div className="absolute inset-0 -z-10 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=2000&q=85')" }} />
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

    <section className="border-b border-[#dbe5eb] bg-white"><div className="mx-auto grid max-w-7xl gap-5 px-5 py-7 sm:grid-cols-3 sm:px-8 lg:px-12">{text.proof.map((item, index) => <div key={item} className="flex items-center gap-3 text-sm font-semibold text-[#385268]"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e5f7f8] text-cyan-700">0{index + 1}</span>{item}</div>)}</div></section>

    <section id="services" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12"><div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-[0.14em] text-cyan-700">Dinoora / Services</p><h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">{text.serviceTitle}</h2><p className="mt-5 text-lg leading-8 text-[#5d7180]">{text.serviceIntro}</p></div><div className="mt-12 grid gap-4 md:grid-cols-2">{services.map((service, index) => <Link href={`/${locale}${service.href}`} key={service.title} className="group flex gap-5 rounded-2xl border border-[#dbe5eb] bg-white p-6 shadow-[0_10px_30px_rgba(16,42,67,0.05)] transition hover:-translate-y-1 hover:border-cyan-500/60 hover:shadow-[0_18px_40px_rgba(16,42,67,0.1)]"><span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e8f7f8] text-cyan-700"><service.icon className="h-6 w-6" /></span><span><span className="flex items-center gap-3 text-xl font-bold">{service.title}<ArrowRight className="h-4 w-4 text-cyan-700 opacity-0 transition group-hover:opacity-100 rtl:rotate-180" /></span><span className="mt-2 block leading-7 text-[#617684]">{service.body}</span></span></Link>)}</div></section>

    <section id="process" className="border-y border-[#dbe5eb] bg-[#eaf2f4] px-5 py-24 sm:px-8 lg:px-12"><div className="mx-auto max-w-7xl"><div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-[0.14em] text-cyan-700">Dinoora / Workflow</p><h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">{text.processTitle}</h2><p className="mt-5 text-lg leading-8 text-[#5d7180]">{text.processIntro}</p></div><div className="mt-14 grid gap-4 md:grid-cols-4">{steps.map(([number, title, body]) => <div key={number} className="border-t-2 border-[#1b9aaa] pt-5"><span className="text-sm font-black text-cyan-700">{number}</span><h3 className="mt-5 text-xl font-bold">{title}</h3><p className="mt-3 leading-7 text-[#617684]">{body}</p></div>)}</div></div></section>


    <section className="bg-[#102a43] px-5 py-20 text-center text-white sm:px-8"><h2 className="mx-auto max-w-3xl text-3xl font-black sm:text-5xl">{text.finalTitle}</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">{text.finalIntro}</p><Link href={`/${locale}/quote`} className="mt-9 inline-flex items-center gap-3 rounded-lg bg-cyan-300 px-7 py-4 font-bold text-[#082238] hover:bg-white">{text.quote}<ArrowRight className="h-5 w-5 rtl:rotate-180" /></Link></section>
      <section className="home-case-section mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12"><div className="relative min-h-[380px] overflow-hidden rounded-2xl bg-[#102a43]"><div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=85')" }} /><div className="absolute inset-0 bg-gradient-to-t from-[#061827] via-transparent to-transparent" /><div className="absolute bottom-6 start-6 flex items-center gap-3 text-sm font-bold text-white"><ShieldCheck className="h-5 w-5 text-cyan-300" /> {ar ? "توثيق قبل القرار" : "Evidence before decisions"}</div></div><div className="self-center"><p className="text-sm font-bold uppercase tracking-[0.14em] text-cyan-700">Dinoora / Case approach</p><h2 className="mt-4 text-4xl font-black tracking-tight">{text.caseTitle}</h2><p className="mt-5 text-lg leading-8 text-[#5d7180]">{text.caseIntro}</p><ul className="mt-8 grid gap-4 sm:grid-cols-2">{text.caseItems.map(item => <li key={item} className="flex gap-3 text-sm font-semibold text-[#385268]"><Check className="h-5 w-5 shrink-0 text-emerald-600" />{item}</li>)}</ul></div></section>
  </main>;
}
