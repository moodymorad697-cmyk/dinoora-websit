import type { Metadata } from "next";
import { getPageMetadata, generateSEOMetadata } from "@/lib/seo";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  const pageMetadata = getPageMetadata('/services/warehousing', locale);
  const seoMetadata = generateSEOMetadata('/services/warehousing', locale);
  
  return {
    ...pageMetadata,
    ...seoMetadata,
  };
}

export default function WarehousingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
