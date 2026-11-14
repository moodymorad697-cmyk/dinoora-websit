import Link from "next/link";
import { ArrowRight, Boxes, Cpu, Factory, Shirt, Sun } from "lucide-react";

const products = [
  {
    slug: "clothing-import",
    icon: Shirt,
    ar: ["الملابس", "توريد الملابس وتنسيق المواصفات والعينات وفحص الجودة قبل الشحن."],
    en: ["Clothing", "Source apparel, confirm specifications and samples, and inspect quality before shipping."],
  },
  {
    slug: "electronics-import",
    icon: Cpu,
    ar: ["الإلكترونيات", "مقارنة الموردين ومراجعة المواصفات والتغليف ومتطلبات المنتج قبل الشراء."],
    en: ["Electronics", "Compare suppliers and review specifications, packaging, and product requirements before purchase."],
  },
  {
    slug: "medical-supplies",
    icon: Boxes,
    ar: ["المستلزمات الطبية", "تنسيق التوريد والوثائق ومراجعة متطلبات الصنف مع الجهات المختصة قبل الشحن."],
    en: ["Medical Supplies", "Coordinate sourcing and documents, and verify product-specific requirements with the relevant authorities before shipping."],
  },
  {
    slug: "solar-energy-import",
    icon: Sun,
    ar: ["الطاقة الشمسية", "مراجعة بيانات الألواح والمكونات والتغليف وخيارات الشحن المناسبة للمشروع."],
    en: ["Solar Energy", "Review panel and component specifications, packaging, and shipping options for your project."],
  },
  {
    slug: "textiles-fabrics",
    icon: Factory,
    ar: ["الأقمشة والمنسوجات", "تحديد الخامة والوزن والعرض واللون والعينة قبل اعتماد طلب الإنتاج."],
    en: ["Textiles and Fabrics", "Confirm material, weight, width, color, and sample before approving production."],
  },
];

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const ar = locale === "ar";

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="border-b border-slate-800 bg-slate-900 px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold text-cyan-400">{ar ? "التوريد من الصين" : "Sourcing from China"}</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
            {ar ? "استيراد المنتجات من الصين" : "Import Products from China"}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            {ar
              ? "ابدأ بتحديد المنتج والمواصفات والكمية. نساعدك في مقارنة الموردين وفحص البضاعة وتنسيق الشحن إلى وجهتك."
              : "Start with your product, specifications, and quantity. We help compare suppliers, inspect goods, and coordinate shipping to your destination."}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            const [title, description] = ar ? product.ar : product.en;
            const Icon = product.icon;
            return (
              <Link
                key={product.slug}
                href={`/${locale}/products/${product.slug}`}
                className="group border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-500/60"
              >
                <Icon className="h-7 w-7 text-cyan-400" aria-hidden="true" />
                <h2 className="mt-5 text-xl font-bold">{title}</h2>
                <p className="mt-3 leading-7 text-slate-300">{description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-300">
                  {ar ? "استكشف الخدمة" : "Explore service"}
                  <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-slate-800 pt-8 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-bold">{ar ? "لديك منتج محدد؟" : "Have a specific product?"}</h2>
            <p className="mt-2 text-slate-300">
              {ar ? "أرسل المواصفات والكمية والوجهة للحصول على عرض مناسب." : "Send the specifications, quantity, and destination for a tailored quote."}
            </p>
          </div>
          <Link href={`/${locale}/quote`} className="inline-flex items-center gap-3 rounded-lg bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300">
            {ar ? "اطلب عرض سعر الآن" : "Get your quote now"}
            <ArrowRight className="h-5 w-5 rtl:rotate-180" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
