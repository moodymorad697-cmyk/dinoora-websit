import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms | Dinoora" };

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const arabic = locale === "ar";
  const title = arabic ? "الشروط والأحكام" : "Terms and Conditions";
  const intro = arabic ? "توضح هذه الشروط طريقة استخدام خدمات دينورا وحدود مسؤوليات الأطراف." : "These terms explain how Dinoora services are used and the responsibilities of each party.";
  const sections = arabic ? [
    ["نطاق الخدمة", "نقدم خدمات التوريد والفحص والتخزين والشحن والتنسيق اللوجستي وفق تفاصيل العرض المتفق عليها لكل طلب."],
    ["معلومات العميل", "يلتزم العميل بتقديم معلومات دقيقة عن المنتج والوجهة والاشتراطات النظامية اللازمة لتنفيذ الطلب."],
    ["الأسعار والمواعيد", "تحدد الأسعار والمواعيد في عرض الخدمة، وقد تتغير عند تغير المواصفات أو أجور النقل أو المتطلبات الجمركية."],
    ["التواصل", "للاستفسارات المتعلقة بهذه الشروط، تواصل معنا قبل إرسال الطلب أو أثناء تنفيذه عبر صفحة التواصل."],
  ] : [
    ["Service scope", "We provide sourcing, inspection, warehousing, shipping, and logistics coordination according to the agreed proposal for each request."],
    ["Customer information", "Customers must provide accurate product, destination, and regulatory information needed to fulfill a request."],
    ["Prices and timelines", "Prices and timelines are stated in the service proposal and may change when specifications, freight costs, or customs requirements change."],
    ["Contact", "For questions about these terms, contact us before submitting or while processing a request through the contact page."],
  ];

  return <main className="mx-auto min-h-[70vh] max-w-4xl px-5 pb-24 pt-40 sm:px-8"><p className="font-semibold text-cyan-300">Dinoora Global Trade</p><h1 className="mt-3 text-4xl font-black sm:text-6xl">{title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">{intro}</p><div className="mt-14 space-y-5">{sections.map(([heading, body]) => <section key={heading} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8"><h2 className="text-xl font-bold text-white">{heading}</h2><p className="mt-3 leading-8 text-slate-400">{body}</p></section>)}</div></main>;
}
