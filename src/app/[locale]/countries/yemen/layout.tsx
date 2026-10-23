import type { Metadata } from "next";
import { generateSEOMetadata } from "@/lib/seo";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  const seoMetadata = generateSEOMetadata('/countries/yemen', locale);
  
  // Arabic SEO metadata for Yemen
  if (locale === 'ar') {
    return {
      title: "الشحن والاستيراد من الصين إلى اليمن | دينورا",
      description: "دينورا تقدم خدمات استيراد وشحن من الصين إلى اليمن عبر ميناء الحديدة وعدن. تشمل خدماتنا التوريد، فحص الجودة، التخزين، التخليص الجمركي، والشحن البحري والجوي.",
      ...seoMetadata,
      keywords: undefined,
    };
  }
  
  // English SEO metadata for Yemen
  return {
    title: "Shipping and Import from China to Yemen | Dinoora",
    description: "Dinoora offers import and shipping services from China to Yemen via Hodeidah and Aden ports. Our services include sourcing, quality inspection, warehousing, customs clearance, and sea and air shipping.",
    ...seoMetadata,
    keywords: undefined,
  };
}

export default function YemenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
