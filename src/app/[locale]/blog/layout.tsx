import type { Metadata } from "next";
import { generateSEOMetadata, getPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  const seoMetadata = generateSEOMetadata('/blog', locale);
  const pageMetadata = getPageMetadata('/blog', locale);
  
  if (locale === 'ar') {
    return {
      title: pageMetadata.title,
      description: pageMetadata.description,
      keywords: pageMetadata.keywords,
      ...seoMetadata,
    };
  }
  
  return {
    title: pageMetadata.title,
    description: pageMetadata.description,
    keywords: pageMetadata.keywords,
    ...seoMetadata,
  };
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
