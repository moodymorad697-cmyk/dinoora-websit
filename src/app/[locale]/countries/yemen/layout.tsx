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
      keywords: ["الشحن من الصين لليمن", "استيراد من الصين لليمن", "ميناء الحديدة", "ميناء عدن", "شركة استيراد يمنية", "تخليص جمركي اليمن", "شحن بضائع لليمن", "توريد من الصين لليمن"],
      ...seoMetadata,
    };
  }
  
  // English SEO metadata for Yemen
  return {
    title: "Shipping and Import from China to Yemen | Dinoora",
    description: "Dinoora offers import and shipping services from China to Yemen via Hodeidah and Aden ports. Our services include sourcing, quality inspection, warehousing, customs clearance, and sea and air shipping.",
    keywords: ["shipping from China to Yemen", "import from China to Yemen", "Hodeidah Port", "Aden Port", "Yemeni import company", "Yemen customs clearance", "shipping goods to Yemen", "sourcing from China to Yemen"],
    ...seoMetadata,
  };
}

export default function YemenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
