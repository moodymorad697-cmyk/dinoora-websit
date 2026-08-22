import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy | Dinoora" };

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const arabic = locale === "ar";
  const title = arabic ? "سياسة الخصوصية" : "Privacy Policy";
  const intro = arabic ? "نحترم خصوصيتك ونتعامل مع بياناتك بمسؤولية وشفافية." : "We respect your privacy and handle your information responsibly and transparently.";
  const sections = arabic ? [
    ["البيانات التي نجمعها", "نجمع بيانات التواصل ومعلومات الطلب التي ترسلها طوعاً حتى نتمكن من إعداد عرض مناسب والتواصل معك."],
    ["استخدام البيانات", "نستخدم البيانات للرد على الاستفسارات، تنفيذ الخدمات، تحسين تجربة الموقع، ومنع إساءة الاستخدام."],
    ["حماية البيانات", "نطبق ضوابط وصول وإجراءات تشغيلية مناسبة لحماية البيانات من الوصول أو الاستخدام غير المصرح به."],
    ["حقوقك", "يمكنك طلب معرفة بياناتك أو تصحيحها أو حذفها عبر التواصل معنا من خلال صفحة التواصل."],
  ] : [
    ["Information we collect", "We collect contact details and request information that you voluntarily submit so we can prepare a suitable proposal and contact you."],
    ["How we use information", "We use information to answer enquiries, deliver services, improve the website, and prevent misuse."],
    ["Data protection", "We use appropriate access controls and operational safeguards to protect information from unauthorized access or use."],
    ["Your rights", "You may ask to access, correct, or delete your information by contacting us through the contact page."],
  ];

  return <main className="mx-auto min-h-[70vh] max-w-4xl px-5 pb-24 pt-40 sm:px-8"><p className="font-semibold text-cyan-300">Dinoora Global Trade</p><h1 className="mt-3 text-4xl font-black sm:text-6xl">{title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">{intro}</p><div className="mt-14 space-y-5">{sections.map(([heading, body]) => <section key={heading} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8"><h2 className="text-xl font-bold text-white">{heading}</h2><p className="mt-3 leading-8 text-slate-400">{body}</p></section>)}</div></main>;
}
