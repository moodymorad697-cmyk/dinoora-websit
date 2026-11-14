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
      ? "استيراد المنتجات من الصين | توريد وفحص وشحن - دينورا"
      : "Import Products from China | Sourcing, Inspection and Shipping - Dinoora",
    description: isArabic
      ? "استكشف خدمات استيراد الملابس والإلكترونيات والمستلزمات الطبية والطاقة الشمسية والمنسوجات من الصين، واطلب عرض سعر حسب مواصفاتك ووجهتك."
      : "Explore China sourcing for apparel, electronics, medical supplies, solar products, and textiles. Request a quote based on your specifications and destination.",
    ...generateSEOMetadata("/products", locale),
  };
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
