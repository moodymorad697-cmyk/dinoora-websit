import type { Metadata } from "next";
import { getPageMetadata, generateSEOMetadata } from "@/lib/seo";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  const pageMetadata = getPageMetadata('/services/shipping', locale);
  const seoMetadata = generateSEOMetadata('/services/shipping', locale);
  
  return {
    ...pageMetadata,
    ...seoMetadata,
  };
}

export default function ShippingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
