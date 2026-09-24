import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import "../globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { generateSEOMetadata } from "@/lib/seo";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: '--font-inter',
  display: 'swap',
  preload: true
});
const cairo = Cairo({ 
  subsets: ["arabic"], 
  variable: '--font-cairo',
  display: 'swap',
  preload: true
});

const locales = ['en', 'ar', 'zh'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  // Default metadata for homepage (path is empty)
  const seoMetadata = generateSEOMetadata('', locale);
  
  // Arabic SEO metadata for homepage
  if (locale === 'ar') {
    return {
      title: "أفضل شركة استيراد من الصين للسعودية | دينورا للتجارة الدولية",
      description: "دينورا للتجارة الدولية هي شركة عربية متخصصة في الاستيراد والتجارة الدولية من الصين إلى الدول العربية. نقدم خدمات التوريد، فحص الجودة، الشحن، والتخليص الجمركي بأسعار منافسة.",
      keywords: ["أفضل شركة استيراد من الصين للسعودية", "شركة توريد وشحن من الصين", "استيراد من الصين", "شحن بضائع من الصين", "خدمات تخليص جمركي", "فحص جودة البضائع", "تخزين بضائع في الصين", "شركة لوجستيات صينية", "استيراد للسعودية", "تجارة مع الصين", "دينورا للتجارة الدولية"],
      ...seoMetadata,
    };
  }
  
  // English SEO metadata for homepage
  return {
    title: "Best Import Company from China to Saudi Arabia | Dinoora International Trade",
    description: "Dinoora International Trade is an Arab company specializing in international trade and import from China to Arab countries. We offer sourcing, quality inspection, shipping, and customs clearance services with competitive prices.",
    keywords: ["best import company from China to Saudi Arabia", "sourcing and shipping from China", "import from China", "shipping goods from China", "customs clearance services", "goods quality inspection", "warehousing in China", "Chinese logistics company", "import to Saudi Arabia", "trade with China", "Dinoora International Trade", "دينورا للتجارة الدولية"],
    ...seoMetadata,
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  if (!locales.includes(locale as any)) notFound();

  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <head>
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${cairo.variable} ${locale === 'ar' ? 'font-[family-name:var(--font-cairo)]' : 'font-[family-name:var(--font-inter)]'}`}>
        <StructuredData locale={locale} />
        <NextIntlClientProvider messages={messages}>
          <Navigation />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
