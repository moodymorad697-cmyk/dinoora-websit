import type { Metadata } from "next";
import { generateSEOMetadata } from "@/lib/seo";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  const seoMetadata = generateSEOMetadata('/countries/sudan', locale);
  
  // Arabic SEO metadata for Sudan
  if (locale === 'ar') {
    return {
      title: "الشحن والاستيراد من الصين إلى السودان | دينورا",
      description: "دينورا تنسق الاستيراد من الصين إلى السودان عبر بورتسودان مع خيارات نقل داخلي إلى مدينة التسليم، إضافة إلى التوريد وفحص الجودة وتجميع الشحنات.",
      ...seoMetadata,
      keywords: undefined,
    };
  }
  
  // English SEO metadata for Sudan
  return {
    title: "Shipping and Import from China to Sudan | Dinoora",
    description: "Dinoora coordinates imports from China to Sudan through Port Sudan, with inland transport options to the destination city, plus sourcing, inspection, and shipment consolidation.",
    ...seoMetadata,
    keywords: undefined,
  };
}

export default function SudanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
