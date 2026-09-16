import type { Metadata } from "next";
import { getPageMetadata, generateSEOMetadata } from "@/lib/seo";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  const pageMetadata = getPageMetadata('/services/sourcing', locale);
  const seoMetadata = generateSEOMetadata('/services/sourcing', locale);
  
  return {
    ...pageMetadata,
    ...seoMetadata,
  };
}

export default function SourcingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
