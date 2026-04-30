import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import "../globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactFloatingBar from "@/components/ContactFloatingBar";

const inter = Inter({ subsets: ["latin"] });

const locales = ['en', 'ar', 'zh'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Dinoora - Global Trade Solutions | China-Middle East Commerce",
  description: "Dinoora provides complete end-to-end trade solutions between China and Middle East markets: sourcing, quality inspection, warehousing, shipping, customs clearance, and logistics services.",
  keywords: ["Dinoora", "China trade", "Middle East commerce", "sourcing", "shipping", "logistics", "import", "export", "customs clearance", "Saudi Arabia", "UAE"],
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className={`${inter.className} pt-16`}>
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
