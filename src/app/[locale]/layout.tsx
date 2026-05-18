import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import "../globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactFloatingBar from "@/components/ContactFloatingBar";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const cairo = Cairo({ subsets: ["arabic"], variable: '--font-cairo' });

const locales = ['en', 'ar', 'zh'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "دينورا - حلول التجارة العالمية | Dinoora Global Trade",
  description: "دينورا تقدم حلول تجارة متكاملة بين الصين والشرق الأوسط: توريد، فحص جودة، تخزين، شحن، تخليص جمركي، وخدمات لوجستية شاملة.",
  keywords: ["دينورا", "Dinoora", "تجارة الصين", "استيراد", "تصدير", "شحن", "توريد", "تخليص جمركي", "السعودية", "الإمارات", "China trade"],
};

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
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} className="scroll-smooth">
      <body className={`${inter.variable} ${cairo.variable} ${locale === 'ar' ? 'font-[family-name:var(--font-cairo)]' : 'font-[family-name:var(--font-inter)]'}`}>
        <NextIntlClientProvider messages={messages}>
          <Navigation />
          {children}
          <Footer />
          <ContactFloatingBar />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
