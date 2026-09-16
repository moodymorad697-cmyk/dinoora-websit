import type { Metadata } from "next";
import { getPageMetadata, generateSEOMetadata } from "@/lib/seo";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  const pageMetadata = getPageMetadata('/about', locale);
  const seoMetadata = generateSEOMetadata('/about', locale);
  
  return {
    ...pageMetadata,
    ...seoMetadata,
  };
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
