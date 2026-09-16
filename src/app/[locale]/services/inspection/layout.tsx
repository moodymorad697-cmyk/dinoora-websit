import type { Metadata } from "next";
import { getPageMetadata, generateSEOMetadata } from "@/lib/seo";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  const pageMetadata = getPageMetadata('/services/inspection', locale);
  const seoMetadata = generateSEOMetadata('/services/inspection', locale);
  
  return {
    ...pageMetadata,
    ...seoMetadata,
  };
}

export default function InspectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
