import type { Metadata } from "next";
import { getPageMetadata, generateSEOMetadata } from "@/lib/seo";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  const pageMetadata = getPageMetadata('/quote', locale);
  const seoMetadata = generateSEOMetadata('/quote', locale);
  
  return {
    ...pageMetadata,
    ...seoMetadata,
  };
}

export default function QuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
