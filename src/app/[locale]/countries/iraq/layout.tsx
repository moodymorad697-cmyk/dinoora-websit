import type { Metadata } from "next";
import { generateSEOMetadata } from "@/lib/seo";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  const seoMetadata = generateSEOMetadata('/countries/iraq', locale);
  
  // Arabic SEO metadata for Iraq
  if (locale === 'ar') {
    return {
      title: "الشحن والاستيراد من الصين إلى العراق | دينورا",
      description: "دينورا تقدم خدمات استيراد وشحن من الصين إلى العراق عبر ميناء أم قصر. تشمل خدماتنا التوريد، فحص الجودة، التخزين، التخليص الجمركي، والشحن البحري والجوي.",
      ...seoMetadata,
      keywords: undefined,
    };
  }
  
  // English SEO metadata for Iraq
  return {
    title: "Shipping and Import from China to Iraq | Dinoora",
    description: "Dinoora offers import and shipping services from China to Iraq via Umm Qasr Port. Our services include sourcing, quality inspection, warehousing, customs clearance, and sea and air shipping.",
    ...seoMetadata,
    keywords: undefined,
  };
}

export default function IraqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
