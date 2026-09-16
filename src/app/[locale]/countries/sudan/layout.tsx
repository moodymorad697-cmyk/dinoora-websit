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
      description: "دينورا تقدم خدمات استيراد وشحن من الصين إلى السودان عبر بورتسودان والخرطوم. تشمل خدماتنا التوريد، فحص الجودة، التخزين، التخليص الجمركي، والشحن البحري والجوي.",
      keywords: ["الشحن من الصين للسودان", "استيراد من الصين للسودان", "بورتسودان", "ميناء الخرطوم", "شركة استيراد سودانية", "تخليص جمركي السودان", "شحن بضائع للسودان", "توريد من الصين للسودان"],
      ...seoMetadata,
    };
  }
  
  // English SEO metadata for Sudan
  return {
    title: "Shipping and Import from China to Sudan | Dinoora",
    description: "Dinoora offers import and shipping services from China to Sudan via Port Sudan and Khartoum. Our services include sourcing, quality inspection, warehousing, customs clearance, and sea and air shipping.",
    keywords: ["shipping from China to Sudan", "import from China to Sudan", "Port Sudan", "Khartoum Port", "Sudanese import company", "Sudan customs clearance", "shipping goods to Sudan", "sourcing from China to Sudan"],
    ...seoMetadata,
  };
}

export default function SudanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
