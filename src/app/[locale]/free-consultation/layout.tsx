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
      ? "استشارة مجانية للاستيراد من الصين | دينورا"
      : "Free China Import Consultation | Dinoora",
    description: isArabic
      ? "احجز استشارة أولية مجانية لمراجعة منتجك والكمية ووجهة الشحن، واحصل على الخطوة التالية المناسبة لاستيرادك من الصين."
      : "Book a free initial consultation to review your product, quantity, and destination, then plan the next step for importing from China.",
    ...generateSEOMetadata("/free-consultation", locale),
  };
}

export default function FreeConsultationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
