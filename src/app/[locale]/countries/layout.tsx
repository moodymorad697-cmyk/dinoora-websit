import type { Metadata } from "next";
import { generateSEOMetadata } from "@/lib/seo";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  const seoMetadata = generateSEOMetadata('/countries', locale);
  
  return {
    title: locale === 'ar' 
      ? 'الدول التي نخدمها | دينورا'
      : 'Countries We Serve | Dinoora',
    description: locale === 'ar'
      ? 'دينورا تقدم خدمات استيراد وشحن من الصين لجميع الدول العربية: السعودية، الإمارات، قطر، الكويت، البحرين، عُمان، الأردن، المغرب، العراق، اليمن، السودان.'
      : 'Dinoora offers import and shipping services from China to all Arab countries: Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, Oman, Jordan, Morocco, Iraq, Yemen, Sudan.',
    ...seoMetadata,
  };
}

export default function CountriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
