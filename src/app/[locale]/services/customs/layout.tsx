import type { Metadata } from "next";
import { getPageMetadata, generateSEOMetadata } from "@/lib/seo";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  const pageMetadata = getPageMetadata('/services/customs', locale);
  const seoMetadata = generateSEOMetadata('/services/customs', locale);
  
  return {
    ...pageMetadata,
    ...seoMetadata,
  };
}

export default function CustomsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
