import type { Metadata } from "next";
import { generateSEOMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isArabic = locale === "ar";

  return {
    title: isArabic
      ? "خدمات الاستيراد المنفردة من الصين | دينورا"
      : "Individual Import Services from China | Dinoora",
    description: isArabic
      ? "اختر خدمات التوريد أو فحص الجودة أو التخزين أو الشحن حسب حاجتك، ثم أرسل تفاصيل مشروعك للحصول على عرض مخصص."
      : "Choose sourcing, inspection, warehousing, or shipping support for your needs, then send your project details for a tailored quote.",
    ...generateSEOMetadata("/micro-services", locale),
  };
}

export default function MicroServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
