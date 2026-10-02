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
      keywords: [
        "أفضل شركة استيراد من الصين للسعودية", "شركة توريد وشحن من الصين", "استيراد من الصين", "شحن بضائع من الصين", "خدمات تخليص جمركي", "فحص جودة البضائع", "تخزين بضائع في الصين", "شركة لوجستيات صينية", "استيراد للسعودية", "تجارة مع الصين", "دينورا للتجارة الدولية",
        "كم تكلفة شحن منتج من الصين", "كيف ابحث عن قطع غيار سيارات من الصين", "استيراد الطاقة الشمسية من الصين", "شحن الطاقة الشمسية من الصين", "استيراد الألواح الشمسية من الصين", "شحن الألواح الشمسية من الصين", "استيراد إنفرترات من الصين", "شحن إنفرترات من الصين", "استيراد بطاريات شمسية من الصين", "شحن بطاريات شمسية من الصين",
        "استيراد قطع غيار سيارات من الصين", "شحن قطع غيار سيارات من الصين", "استيراد قطع غيار من الصين", "شحن قطع غيار من الصين", "استيراد قطع غيار شاحنات من الصين", "شحن قطع غيار شاحنات من الصين", "استيرار قطع غيار سيارات صينية", "شحن قطع غيار سيارات صينية",
        "استيراد الملابس من الصين", "شحن الملابس من الصين", "استيرار الملابس الجاهزة من الصين", "شحن الملابس الجاهزة من الصين", "استيراد الملابس بالجملة من الصين", "شحن الملابس بالجملة من الصين", "استيراد الأقمشة من الصين", "شحن الأقمشة من الصين",
        "استيراد الإلكترونيات من الصين", "شحن الإلكترونيات من الصين", "استيراد الهواتف من الصين", "شحن الهواتف من الصين", "استيرار الأجهزة المنزلية من الصين", "شحن الأجهزة المنزلية من الصين", "استيراد الحواسيب من الصين", "شحن الحواسيب من الصين",
        "استيراد الأدوات الكهربائية من الصين", "شحن الأدوات الكهربائية من الصين", "استيراد أدوات البناء من الصين", "شحن أدوات البناء من الصين", "استيراد المعدات الصناعية من الصين", "شحن المعدات الصناعية من الصين",
        "استيراد الأثاث من الصين", "شحن الأثاث من الصين", "استيراد الأثاث المنزلي من الصين", "شحن الأثاث المنزلي من الصين", "استيرار الأثاث المكتبي من الصين", "شحن الأثاث المكتبي من الصين",
        "استيراد المواد الغذائية من الصين", "شحن المواد الغذائية من الصين", "استيرار المواد الخام من الصين", "شحن المواد الخام من الصين", "استيرار المواد الكيميائية من الصين", "شحن المواد الكيميائية من الصين",
        "استيرار اللعب من الصين", "شحن اللعب من الصين", "استيرار المستحضرات التجميلية من الصين", "شحن المستحضرات التجميلية من الصين", "استيرار الأدوات الطبية من الصين", "شحن الأدوات الطبية من الصين",
        "شحن بحري من الصين", "شحن جوي من الصين", "شحن بري من الصين", "شحن الحاويات من الصين", "شحن الـ LCL من الصين", "شحن الـ FCL من الصين", "شحن سريع من الصين", "شحن اقتصادي من الصين",
        "استيرار بدون وسيط", "استيرار مباشر من الصين", "توريد من المصنع", "شراء من المصنع", "استيرار بالجملة", "تجارة الجملة", "سوق الجملة الصيني", "سوق ييوو", "سوق شنتشن", "سوق غوانزو",
        "شركة استيراد للسعودية", "شركة استيرار للإمارات", "شركة استيرار للكويت", "شركة استيرار لقطر", "شركة استيرار للبحرين", "شركة استيرار لعمان", "شركة استيرار للعراق", "شركة استيرار للسودان", "شركة استيرار لليمن", "شركة استيرار للمغرب", "شركة استيرار للجزائر", "شركة استيرار لتونس", "شركة استيرار ليبيا", "شركة استيرار للأردن", "شركة استيرار للبنان",
        "شركة توريد للسعودية", "شركة توريد للإمارات", "شركة توريد للكويت", "شركة توريد لقطر", "شركة توريد للبحرين", "شركة توريد لعمان", "شركة توريد للعراق", "شركة توريد للسودان", "شركة توريد لليمن", "شركة توريد للمغرب", "شركة توريد للجزائر", "شركة توريد لتونس", "شركة توريد ليبيا", "شركة توريد للأردن", "شركة توريد للبنان",
        "شركة شحن للسعودية", "شركة شحن للإمارات", "شركة شحن للكويت", "شركة شحن لقطر", "شركة شحن للبحرين", "شركة شحن لعمان", "شركة شحن للعراق", "شركة شحن للسودان", "شركة شحن لليمن", "شركة شحن للمغرب", "شركة شحن للجزائر", "شركة شحن لتونس", "شركة شحن ليبيا", "شركة شحن للأردن", "شركة شحن للبنان",
        "شركة لوجستيات للسعودية", "شركة لوجستيات للإمارات", "شركة لوجستيات للكويت", "شركة لوجستيات لقطر", "شركة لوجستيات للبحرين", "شركة لوجستيات لعمان", "شركة لوجستيات للعراق", "شركة لوجستيات للسودان", "شركة لوجستيات لليمن", "شركة لوجستيات للمغرب", "شركة لوجستيات للجزائر", "شركة لوجستيات لتونس", "شركة لوجستيات ليبيا", "شركة لوجستيات للأردن", "شركة لوجستيات للبنان",
        "مورد صيني موثوق", "مصنع صيني", "مصانع الصين", "موردي الصين", "أسواق الصين", "مدن الصين الصناعية", "يوو الصين", "شنغهاي الصين", "شنتشن الصين", "غوانزو الصين", "نينغبو الصين",
        "التجارة مع الصين", "الاستيراد من الصين", "التصدير للصين", "التجارة الدولية", "التجارة الخارجية", "التجارة البينية", "سلسلة التوريد", "إدارة سلسلة التوريد",
        "فحص الجودة في الصين", "مراقبة الجودة في الصين", "التفتيش في المصانع الصينية", "فحص قبل الشحن", "فحص أثناء الإنتاج", "فحص قبل الإنتاج",
        "التخزين في الصين", "مستودعات في الصين", "تجميع الشحنات في الصين", "تخزين البضائع في الصين", "خدمات التخزين في الصين",
        "التخليص الجمركي في السعودية", "التخليص الجمركي في الإمارات", "التخليص الجمركي في الكويت", "التخليص الجمركي في قطر", "التخليص الجمركي في البحرين", "التخليص الجمركي في عمان", "التخليص الجمركي في العراق", "التخليص الجمركي في السودان", "التخليص الجمركي في اليمن", "التخليص الجمركي في المغرب", "التخليص الجمركي في الجزائر", "التخليص الجمركي في تونس", "التخليص الجمركي في ليبيا", "التخليص الجمركي في الأردن", "التخليص الجمركي في لبنان",
        "استيراد من الصين بالجملة", "استيرار من الصين بالتقسيط", "استيرار من الصين بالدفع عند الاستلام", "استيرار من الصين بالتمويل",
        "شركة تجارة دولية", "شركة استيراد وتصدير", "شركة وساطة تجارية", "شركة وسيط تجاري",
        "دينورا", "دينورا للتجارة الدولية", "Dinoora", "Dinoora International Trade", "دينورا للتجارة", "شركة دينورا",
        "استيرار من الصين للشركات الصغيرة", "استيرار من الصين للشركات المتوسطة", "استيرار من الصين للأفراد", "استيرار من الصين للمبتدئين",
        "دليل الاستيراد من الصين", "كيفية الاستيراد من الصين", "خطوات الاستيراد من الصين", "شروط الاستيراد من الصين", "إجراءات الاستيراد من الصين",
        "تكلفة الاستيراد من الصين", "أسعار الشحن من الصين", "رسوم الجمارك من الصين", "ضرائب الاستيراد من الصين",
        "أفضل طرق الشحن من الصين", "أسرع طرق الشحن من الصين", "أرخص طرق الشحن من الصين", "طرق الشحن الآمنة من الصين",
        "استيرار من الصين للرياض", "استيرار من الصين لجدة", "استيرار من الصين للدمام", "استيرار من الصين لمكة", "استيرار من الصين للمدينة", "استيرار من الصين للقصيم",
        "استيرار من الصين للدوحة", "استيرار من الصين للكويت", "استيرار من الصين للمنامة", "استيرار من الصين لمسقط", "استيرار من الصين لبغداد", "استيرار من الصين للخرطوم", "استيرار من الصين لصنعاء", "استيرار من الصين للرباط", "استيرار من الصين للجزائر", "استيرار من الصين لتونس", "استيرار من الصين لطرابلس", "استيرار من الصين لعمان", "استيرار من الصين لبيروت",
        "استيرار السيارات من الصين", "شحن السيارات من الصين", "استيرار الدراجات النارية من الصين", "شحن الدراجات النارية من الصين",
        "استيرار المعدات الثقيلة من الصين", "شحن المعدات الثقيلة من الصين", "استيرار الجرافات من الصين", "شحن الجرافات من الصين",
        "استيرار الآلات الصناعية من الصين", "شحن الآلات الصناعية من الصين", "استيرار خطوط الإنتاج من الصين", "شحن خطوط الإنتاج من الصين",
        "استيرار المواد الخام الصناعية من الصين", "شحن المواد الخام الصناعية من الصين", "استيرار البلاستيك من الصين", "شحن البلاستيك من الصين", "استيرار المعادن من الصين", "شحن المعادن من الصين",
        "استيرار المنتجات الزراعية من الصين", "شحن المنتجات الزراعية من الصين", "استيرار البذور من الصين", "شحن البذور من الصين", "استيرار الأسمدة من الصين", "شحن الأسمدة من الصين",
        "استيرار المنتجات الحيوانية من الصين", "شحن المنتجات الحيوانية من الصين", "استيرار الأعلاف من الصين", "شحن الأعلاف من الصين",
        "استيرار المنتجات الطبية من الصين", "شحن المنتجات الطبية من الصين", "استيرار الأدوية من الصين", "شحن الأدوية من الصين", "استيرار المعدات الطبية من الصين", "شحن المعدات الطبية من الصين",
        "استيرار المنتجات الرياضية من الصين", "شحن المنتجات الرياضية من الصين", "استيرار الملابس الرياضية من الصين", "شحن الملابس الرياضية من الصين", "استيرار المعدات الرياضية من الصين", "شحن المعدات الرياضية من الصين",
        "استيرار المنتجات المدرسية من الصين", "شحن المنتجات المدرسية من الصين", "استيرار الكتب المدرسية من الصين", "شحن الكتب المدرسية من الصين", "استيرار الأدوات المدرسية من الصين", "شحن الأدوات المدرسية من الصين",
        "استيرار المنتجات المكتبية من الصين", "شحن المنتجات المكتبية من الصين", "استيرار الأوراق من الصين", "شحن الأوراق من الصين", "استيرار الأقلام من الصين", "شحن الأقلام من الصين",
        "استيرار المنتجات الإلكترونية من الصين", "شحن المنتجات الإلكترونية من الصين", "استيرار الشواحن من الصين", "شحن الشواحن من الصين", "استيرار الكابلات من الصين", "شحن الكابلات من الصين",
        "استيرار المنتجات الرقمية من الصين", "شحن المنتجات الرقمية من الصين", "استيرار الكاميرات من الصين", "شحن الكاميرات من الصين", "استيرار السماعات من الصين", "شحن السماعات من الصين",
        "استيرار المنتجات الذكية من الصين", "شحن المنتجات الذكية من الصين", "استيرار الساعات الذكية من الصين", "شحن الساعات الذكية من الصين", "استيرار النظارات الذكية من الصين", "شحن النظارات الذكية من الصين",
        "استيرار المنتجات المنزلية من الصين", "شحن المنتجات المنزلية من الصين", "استيرار الأواني المنزلية من الصين", "شحن الأواني المنزلية من الصين", "استيرار الأدوات المنزلية من الصين", "شحن الأدوات المنزلية من الصين",
        "استيرار المنتجات الحديقة من الصين", "شحن المنتجات الحديقة من الصين", "استيرار أدوات الحديقة من الصين", "شحن أدوات الحديقة من الصين", "استيرار النباتات من الصين", "شحن النباتات من الصين",
        "استيرار المنتجات البناء من الصين", "شحن المنتجات البناء من الصين", "استيرار مواد البناء من الصين", "شحن مواد البناء من الصين", "استيرار أدوات البناء من الصين", "شحن أدوات البناء من الصين",
        "استيرار المنتجات الديكور من الصين", "شحن المنتجات الديكور من الصين", "استيرار الإكسسوارات من الصين", "شحن الإكسسوارات من الصين", "استيرار الديكور المنزلي من الصين", "شحن الديكور المنزلي من الصين",
        "استيرار المنتجات الهدايا من الصين", "شحن المنتجات الهدايا من الصين", "استيرار الهدايا من الصين", "شحن الهدايا من الصين", "استيرار الإكسسوارات من الصين", "شحن الإكسسوارات من الصين",
        "استيرار المنتجات الأطفال من الصين", "شحن المنتجات الأطفال من الصين", "استيرار ملابس الأطفال من الصين", "شحن ملابس الأطفال من الصين", "استيرار ألعاب الأطفال من الصين", "شحن ألعاب الأطفال من الصين",
        "استيرار المنتجات الرجالية من الصين", "شحن المنتجات الرجالية من الصين", "استيرار ملابس الرجال من الصين", "شحن ملابس الرجال من الصين", "استيرار أحذية الرجال من الصين", "شحن أحذية الرجال من الصين",
        "استيرار المنتجات النسائية من الصين", "شحن المنتجات النسائية من الصين", "استيرار ملابس النساء من الصين", "شحن ملابس النساء من الصين", "استيرار أحذية النساء من الصين", "شحن أحذية النساء من الصين",
        "استيرار المنتجات الرياضية من الصين", "شحن المنتجات الرياضية من الصين", "استيرار ملابس الرياضة من الصين", "شحن ملابس الرياضة من الصين", "استيرار أحذية الرياضة من الصين", "شحن أحذية الرياضة من الصين",
        "استيرار المنتجات التقليدية من الصين", "شحن المنتجات التقليدية من الصين", "استيرار المنتجات اليدوية من الصين", "شحن المنتجات اليدوية من الصين", "استيرار الحرف اليدوية من الصين", "شحن الحرف اليدوية من الصين",
        "استيرار المنتجات الفنية من الصين", "شحن المنتجات الفنية من الصين", "استيرار اللوحات الفنية من الصين", "شحن اللوحات الفنية من الصين", "استيرار المنحوتات من الصين", "شحن المنحوتات من الصين",
        "استيرار المنتجات الثقافية من الصين", "شحن المنتجات الثقافية من الصين", "استيرار الكتب الثقافية من الصين", "شحن الكتب الثقافية من الصين", "استيرار المجلات الثقافية من الصين", "شحن المجلات الثقافية من الصين",
        "استيرار المنتجات التعليمية من الصين", "شحن المنتجات التعليمية من الصين", "استيرار الكتب التعليمية من الصين", "شحن الكتب التعليمية من الصين", "استيرار الأدوات التعليمية من الصين", "شحن الأدوات التعليمية من الصين",
        "استيرار المنتجات التدريبية من الصين", "شحن المنتجات التدريبية من الصين", "استيرار الكتب التدريبية من الصين", "شحن الكتب التدريبية من الصين", "استيرار الأدوات التدريبية من الصين", "شحن الأدوات التدريبية من الصين",
        "استيرار المنتجات البحثية من الصين", "شحن المنتجات البحثية من الصين", "استيرار الكتب البحثية من الصين", "شحن الكتب البحثية من الصين", "استيرار الأدوات البحثية من الصين", "شحن الأدوات البحثية من الصين",
        "استيرار المنتجات العلمية من الصين", "شحن المنتجات العلمية من الصين", "استيرار الكتب العلمية من الصين", "شحن الكتب العلمية من الصين", "استيرار الأدوات العلمية من الصين", "شحن الأدوات العلمية من الصين",
        "استيرار المنتجات التقنية من الصين", "شحن المنتجات التقنية من الصين", "استيرار الكتب التقنية من الصين", "شحن الكتب التقنية من الصين", "استيرار الأدوات التقنية من الصين", "شحن الأدوات التقنية من الصين",
        "استيرار المنتجات الهندسية من الصين", "شحن المنتجات الهندسية من الصين", "استيرار الكتب الهندسية من الصين", "شحن الكتب الهندسية من الصين", "استيرار الأدوات الهندسية من الصين", "شحن الأدوات الهندسية من الصين",
        "استيرار المنتجات الطبية من الصين", "شحن المنتجات الطبية من الصين", "استيرار الكتب الطبية من الصين", "شحن الكتب الطبية من الصين", "استيرار الأدوات الطبية من الصين", "شحن الأدوات الطبية من الصين",
        "استيرار المنتجات الصيدلانية من الصين", "شحن المنتجات الصيدلانية من الصين", "استيرار الكتب الصيدلانية من الصين", "شحن الكتب الصيدلانية من الصين", "استيرار الأدوات الصيدلانية من الصين", "شحن الأدوات الصيدلانية من الصين",
        "استيرار المنتجات البيطرية من الصين", "شحن المنتجات البيطرية من الصين", "استيرار الكتب البيطرية من الصين", "شحن الكتب البيطرية من الصين", "استيرار الأدوات البيطرية من الصين", "شحن الأدوات البيطرية من الصين",
        "استيرار المنتجات الزراعية من الصين", "شحن المنتجات الزراعية من الصين", "استيرار الكتب الزراعية من الصين", "شحن الكتب الزراعية من الصين", "استيرار الأدوات الزراعية من الصين", "شحن الأدوات الزراعية من الصين",
        "استيرار المنتجات الصناعية من الصين", "شحن المنتجات الصناعية من الصين", "استيرار الكتب الصناعية من الصين", "شحن الكتب الصناعية من الصين", "استيرار الأدوات الصناعية من الصين", "شحن الأدوات الصناعية من الصين",
        "استيرار المنتجات التجارية من الصين", "شحن المنتجات التجارية من الصين", "استيرار الكتب التجارية من الصين", "شحن الكتب التجارية من الصين", "استيرار الأدوات التجارية من الصين", "شحن الأدوات التجارية من الصين",
        "استيرار المنتجات المالية من الصين", "شحن المنتجات المالية من الصين", "استيرار الكتب المالية من الصين", "شحن الكتب المالية من الصين", "استيرار الأدوات المالية من الصين", "شحن الأدوات المالية من الصين",
        "استيرار المنتجات القانونية من الصين", "شحن المنتجات القانونية من الصين", "استيرار الكتب القانونية من الصين", "شحن الكتب القانونية من الصين", "استيرار الأدوات القانونية من الصين", "شحن الأدوات القانونية من الصين",
        "استيرار المنتجات الإدارية من الصين", "شحن المنتجات الإدارية من الصين", "استيرار الكتب الإدارية من الصين", "شحن الكتب الإدارية من الصين", "استيرار الأدوات الإدارية من الصين", "شحن الأدوات الإدارية من الصين",
        "استيرار المنتجات السياسية من الصين", "شحن المنتجات السياسية من الصين", "استيرار الكتب السياسية من الصين", "شحن الكتب السياسية من الصين", "استيرار الأدوات السياسية من الصين", "شحن الأدوات السياسية من الصين",
        "استيرار المنتجات الاقتصادية من الصين", "شحن المنتجات الاقتصادية من الصين", "استيرار الكتب الاقتصادية من الصين", "شحن الكتب الاقتصادية من الصين", "استيرار الأدوات الاقتصادية من الصين", "شحن الأدوات الاقتصادية من الصين",
        "استيرار المنتجات الاجتماعية من الصين", "شحن المنتجات الاجتماعية من الصين", "استيرار الكتب الاجتماعية من الصين", "شحن الكتب الاجتماعية من الصين", "استيرار الأدوات الاجتماعية من الصين", "شحن الأدوات الاجتماعية من الصين",
        "استيرار المنتجات النفسية من الصين", "شحن المنتجات النفسية من الصين", "استيرار الكتب النفسية من الصين", "شحن الكتب النفسية من الصين", "استيرار الأدوات النفسية من الصين", "شحن الأدوات النفسية من الصين",
        "استيرار المنتجات الفلسفية من الصين", "شحن المنتجات الفلسفية من الصين", "استيرار الكتب الفلسفية من الصين", "شحن الكتب الفلسفية من الصين", "استيرار الأدوات الفلسفية من الصين", "شحن الأدوات الفلسفية من الصين",
        "استيرار المنتجات الدينية من الصين", "شحن المنتجات الدينية من الصين", "استيرار الكتب الدينية من الصين", "شحن الكتب الدينية من الصين", "استيرار الأدوات الدينية من الصين", "شحن الأدوات الدينية من الصين",
        "استيرار المنتجات الروحانية من الصين", "شحن المنتجات الروحانية من الصين", "استيرار الكتب الروحانية من الصين", "شحن الكتب الروحانية من الصين", "استيرار الأدوات الروحانية من الصين", "شحن الأدوات الروحانية من الصين",
        // Long-tail keywords for AI search and specific intents
        "كيف أستورد من الصين للمبتدئين 2024", "دليل شامل للاستيراد من الصين خطوة بخطوة", "أفضل شركة استيراد من الصين للسعودية تقييمات", "تكلفة الاستيراد من الصين للسعودية بالريال", "شركة استيراد من الصين موثوقة ومجربة",
        "استيراد من الصين بدون رأس مال كبير للمبتدئين", "استيراد من الصين بالجملة للمشاريع الصغيرة", "كيف أجد موردين موثوقين في الصين بالعربية", "شروط الاستيراد من الصين للسعودية الجديدة", "الجمارك السعودية الاستيراد من الصين الحساب",
        "كم تكلفة شحن حاوية 20 قدم من الصين للسعودية", "أفضل طرق الشحن من الصين للسعودية مقارنة", "شحن جوي من الصين للسعودية زمن الوصول", "شحن بحري من الصين للسعودية سعر الكيلو", "شركات الشحن من الصين للسعودية الموصى بها",
        "استيراد الإلكترونيات من الصين للسعودية بالجملة", "استيراد الملابس من الصين بالجملة للسعودية", "استيراد الأثاث المنزلي من الصين للسعودية", "استيراد السيارات الكهربائية من الصين للسعودية", "استيراد قطع غيار السيارات من الصين للسعودية",
        "استيراد من الصين للإمارات بدون وسيط تجاري", "أفضل شركات الاستيراد في دبي للتجار", "استيراد من الصين للكويت شركات معتمدة", "استيراد من الصين لقطر للمشاريع التجارية", "استيراد من الصين للبحرين للمستثمرين",
        "سوق ييوو الصيني كيف أتسوق بالعربية", "سوق شنتشن للجملة كيف أصل هناك", "أفضل أسواق الجملة في الصين للمستوردين العرب", "التسوق من الصين أونلاين للسعودية آمن", "مواقع التسوق من الصين للسعودية موثوقة",
        "كيف أتأكد من جودة البضائع قبل الاستيراد من الصين", "شركة فحص جودة في الصين بالعربية", "مفتش جودة في الصين يتحدث العربية", "خدمات التفتيش قبل الشحن من الصين للسعودية", "فحص العينات من الصين للسعودية كيف",
        "التخزين في الصين للمستوردين العرب خدمات", "مستودعات في الصين لتجميع الشحنات العربية", "خدمات التخزين والتجميع في ييوو للسعودية", "كيف أجمع شحناتي من مصانع مختلفة في الصين", "تخزين البضائع في الصين قبل الشحن تكلفة",
        "التخليص الجمركي في جدة للبضائع الصينية إجراءات", "شركة تخليص جمركي في جدة معتمدة", "رسوم الجمارك السعودية على البضائع الصينية 2024", "كيف أحسب الجمارك من الصين للسعودية بالريال", "التخليص الجمركي في السعودية للمستوردين الجدد دليل",
        "استيراد من الصين بالتقسيط للشركات السعودية", "شركات تمويل الاستيراد من الصين في السعودية", "استيراد من الصين بالدفع عند الاستلام للتجار", "تمويل التجارة من الصين للسعودية بنوك", "شركات تمويل الاستيراد في السعودية مرخصة",
        "مخاطر الاستيراد من الصين وكيفية تجنبها 2024", "نصائح للاستيراد من الصين بأمان للمبتدئين", "كيف أتجنب الغش من الموردين الصينيين", "حقوق المستورد من الصين في السعودية قانوني", "قوانين الاستيراد من الصين للسعودية الجديدة",
        "أفضل منتجات للاستيراد من الصين 2024 مربحة", "منتجات مربحة للاستيراد من الصين بالجملة", "ماذا أستورد من الصين للبيع بالسعودية", "أكثر المنتجات طلباً للاستيراد من الصين", "أفكار مشاريع استيراد من الصين ناجحة",
        "استيراد من الصين للتجارة الإلكترونية في السعودية", "استيراد من الصين لسوق أمازون السعودية", "استيراد من الصين لنون السعودية للمبيعات", "استيراد من الصين للتجارة الإلكترونية دليل", "دروبشيبينغ من الصين للسعودية كيف",
        "شركات استيراد من الصين بالرياض معتمدة", "شركات استيراد من الصين في جدة موثوقة", "شركات استيراد من الصين في الدمام للشركات", "شركات استيراد من الصين في مكة للمستوردين", "شركات استيراد من الصين في المدينة المنورة",
        "استيراد من الصين للمشاريع الصغيرة في السعودية", "استيراد من الصين للشركات الناشئة تمويل", "كيف أبدأ مشروع استيراد من الصين من الصفر", "رأس المال المطلوب للاستيراد من الصين 2024", "خطوات فتح شركة استيراد في السعودية",
        "استيراد المواد الخام من الصين للمصانع السعودية", "استيراد الآلات والمعدات من الصين للمصانع", "استيراد المواد الغذائية من الصين للمطاعم", "استيراد الأدوية من الصين للصيدليات", "استيراد المستحضرات التجميلية من الصين للمتاجر",
        "استيراد من الصين للسودان 2024 شركات موثوقة", "استيراد من الصين للمغرب للمستثمرين", "استيراد من الصين للجزائر للتجار", "استيراد من الصين لمصر للشركات", "استيراد من الصين للعراق للمشاريع",
        "شركة استيراد من الصين تتحدث العربية مباشرة", "وسيط تجاري صيني بالعربية في الصين", "مترجم تجاري صيني عربي معتمد", "شركة استيراد صينية في السعودية فرع", "مكتب تمثيل تجاري في الصين للسعودية",
        "كيف أتفاوض مع الموردين الصينيين بالعربية", "نصائح التفاوض مع الموردين في الصين", "كيف أحصل على أفضل الأسعار من المصانع الصينية", "استراتيجيات التفاوض مع الموردين الصينيين", "كيف أتجنب الاحتيال في التفاوض التجاري",
        "استيراد من الصين بالعملات الرقمية قانوني", "الدفع بالبيتكوين للاستيراد من الصين", "طرق الدفع الآمنة من الصين للسعودية", "تحويل الأموال من السعودية للصين البنوك", "بنوك التحويل للصين من السعودية الموثوقة",
        "التأمين على الشحنات من الصين للسعودية", "شركات تأمين الشحن الدولي في السعودية", "كيف أؤمن بضاعتي المستوردة من الصين", "تأمين البضائع أثناء الشحن من الصين", "تعويض الشحنات التالفة من الصين كيف",
        "استيراد من الصين خلال عيد الربيع الصيني", "استيراد من الصين في موسم الأعياد الصينية", "تأثير العطل الصينية على الاستيراد للسعودية", "مواعيد العطل الصينية 2024 للمستوردين", "كيف أخطط للاستيراد مع العطل الصينية",
        "استيراد من الصين بالحاويات المشتركة LCL", "شحن LCL من الصين للسعودية سعر", "شحن FCL من الصين للسعودية تكلفة", "كيف أملأ حاوية من الصين بالبضائع", "تكلفة الحاوية الكاملة من الصين 2024",
        "استيراد من الصين للمصانع السعودية خطوط إنتاج", "استيراد خطوط الإنتاج من الصين للمصانع", "استيراد المعدات الثقيلة من الصين للمشاريع", "استيراد الآلات الصناعية من الصين للمصانع", "استيراد التكنولوجيا من الصين للشركات",
      ],
      openGraph: {
        type: 'website',
        locale: 'ar_SA',
        url: 'https://www.dinooratrade.com/ar',
        title: 'أفضل شركة استيراد من الصين للسعودية | دينورا للتجارة الدولية',
        description: 'دينورا للتجارة الدولية هي شركة عربية متخصصة في الاستيراد والتجارة الدولية من الصين إلى الدول العربية. نقدم خدمات التوريد، فحص الجودة، الشحن، والتخليص الجمركي بأسعار منافسة.',
        siteName: 'دينورا للتجارة الدولية',
        images: [
          {
            url: 'https://www.dinooratrade.com/og-image-ar.jpg',
            width: 1200,
            height: 630,
            alt: 'دينورا للتجارة الدولية - استيراد من الصين'
          }
        ]
      },
      twitter: {
        card: 'summary_large_image',
        title: 'أفضل شركة استيراد من الصين للسعودية | دينورا للتجارة الدولية',
        description: 'دينورا للتجارة الدولية هي شركة عربية متخصصة في الاستيراد والتجارة الدولية من الصين إلى الدول العربية.',
        images: ['https://www.dinooratrade.com/og-image-ar.jpg']
      },
      ...seoMetadata,
    };
  }
  
  // English SEO metadata for homepage
  return {
    title: "Best Import Company from China to Saudi Arabia | Dinoora International Trade",
    description: "Dinoora International Trade is an Arab company specializing in international trade and import from China to Arab countries. We offer sourcing, quality inspection, shipping, and customs clearance services with competitive prices.",
    keywords: [
      "best import company from China to Saudi Arabia", "sourcing and shipping from China", "import from China", "shipping goods from China", "customs clearance services", "goods quality inspection", "warehousing in China", "Chinese logistics company", "import to Saudi Arabia", "trade with China", "Dinoora International Trade", "دينورا للتجارة الدولية",
      "how much does it cost to ship a product from China", "how to search for car spare parts from China", "import solar energy from China", "ship solar energy from China", "import solar panels from China", "ship solar panels from China", "import inverters from China", "ship inverters from China", "import solar batteries from China", "ship solar batteries from China",
      "import car spare parts from China", "ship car spare parts from China", "import spare parts from China", "ship spare parts from China", "import truck spare parts from China", "ship truck spare parts from China", "import Chinese car spare parts", "ship Chinese car spare parts",
      "import clothing from China", "ship clothing from China", "import ready-made clothing from China", "ship ready-made clothing from China", "import wholesale clothing from China", "ship wholesale clothing from China", "import fabrics from China", "ship fabrics from China",
      "import electronics from China", "ship electronics from China", "import phones from China", "ship phones from China", "import home appliances from China", "ship home appliances from China", "import computers from China", "ship computers from China",
      "import electrical tools from China", "ship electrical tools from China", "import construction tools from China", "ship construction tools from China", "import industrial equipment from China", "ship industrial equipment from China",
      "import furniture from China", "ship furniture from China", "import home furniture from China", "ship home furniture from China", "import office furniture from China", "ship office furniture from China",
      "import food products from China", "ship food products from China", "import raw materials from China", "ship raw materials from China", "import chemical materials from China", "ship chemical materials from China",
      "import toys from China", "ship toys from China", "import cosmetics from China", "ship cosmetics from China", "import medical tools from China", "ship medical tools from China",
      "sea shipping from China", "air shipping from China", "land shipping from China", "container shipping from China", "LCL shipping from China", "FCL shipping from China", "express shipping from China", "economic shipping from China",
      "import without intermediary", "direct import from China", "sourcing from factory", "buy from factory", "wholesale import", "wholesale trade", "Chinese wholesale market", "Yiwu market", "Shenzhen market", "Guangzhou market",
      "import company for Saudi Arabia", "import company for UAE", "import company for Kuwait", "import company for Qatar", "import company for Bahrain", "import company for Oman", "import company for Iraq", "import company for Sudan", "import company for Yemen", "import company for Morocco", "import company for Algeria", "import company for Tunisia", "import company for Libya", "import company for Jordan", "import company for Lebanon",
      "sourcing company for Saudi Arabia", "sourcing company for UAE", "sourcing company for Kuwait", "sourcing company for Qatar", "sourcing company for Bahrain", "sourcing company for Oman", "sourcing company for Iraq", "sourcing company for Sudan", "sourcing company for Yemen", "sourcing company for Morocco", "sourcing company for Algeria", "sourcing company for Tunisia", "sourcing company for Libya", "sourcing company for Jordan", "sourcing company for Lebanon",
      "shipping company for Saudi Arabia", "shipping company for UAE", "shipping company for Kuwait", "shipping company for Qatar", "shipping company for Bahrain", "shipping company for Oman", "shipping company for Iraq", "shipping company for Sudan", "shipping company for Yemen", "shipping company for Morocco", "shipping company for Algeria", "shipping company for Tunisia", "shipping company for Libya", "shipping company for Jordan", "shipping company for Lebanon",
      "logistics company for Saudi Arabia", "logistics company for UAE", "logistics company for Kuwait", "logistics company for Qatar", "logistics company for Bahrain", "logistics company for Oman", "logistics company for Iraq", "logistics company for Sudan", "logistics company for Yemen", "logistics company for Morocco", "logistics company for Algeria", "logistics company for Tunisia", "logistics company for Libya", "logistics company for Jordan", "logistics company for Lebanon",
      "reliable Chinese supplier", "Chinese factory", "China factories", "China suppliers", "China markets", "Chinese industrial cities", "Yiwu China", "Shanghai China", "Shenzhen China", "Guangzhou China", "Ningbo China",
      "trade with China", "import from China", "export to China", "international trade", "foreign trade", "intertrade", "supply chain", "supply chain management",
      "quality inspection in China", "quality control in China", "inspection in Chinese factories", "pre-shipment inspection", "during production inspection", "pre-production inspection",
      "warehousing in China", "warehouses in China", "consolidation of shipments in China", "storage of goods in China", "warehousing services in China",
      "customs clearance in Saudi Arabia", "customs clearance in UAE", "customs clearance in Kuwait", "customs clearance in Qatar", "customs clearance in Bahrain", "customs clearance in Oman", "customs clearance in Iraq", "customs clearance in Sudan", "customs clearance in Yemen", "customs clearance in Morocco", "customs clearance in Algeria", "customs clearance in Tunisia", "customs clearance in Libya", "customs clearance in Jordan", "customs clearance in Lebanon",
      "wholesale import from China", "installment import from China", "COD import from China", "financed import from China",
      "international trading company", "import export company", "commercial brokerage company", "commercial broker company",
      "Dinoora", "Dinoora International Trade", "دينورا للتجارة الدولية", "Dinoora Trade", "Dinoora Company",
      "import from China for small companies", "import from China for medium companies", "import from China for individuals", "import from China for beginners",
      "import guide from China", "how to import from China", "steps to import from China", "conditions for import from China", "procedures for import from China",
      "cost of import from China", "shipping prices from China", "customs duties from China", "import taxes from China",
      "best shipping methods from China", "fastest shipping methods from China", "cheapest shipping methods from China", "safe shipping methods from China",
      "import from China to Riyadh", "import from China to Jeddah", "import from China to Dammam", "import from China to Mecca", "import from China to Medina", "import from China to Qassim",
      "import from China to Doha", "import from China to Kuwait", "import from China to Manama", "import from China to Muscat", "import from China to Baghdad", "import from China to Khartoum", "import from China to Sana'a", "import from China to Rabat", "import from China to Algiers", "import from China to Tunis", "import from China to Tripoli", "import from China to Amman", "import from China to Beirut",
      "import cars from China", "ship cars from China", "import motorcycles from China", "ship motorcycles from China",
      "import heavy equipment from China", "ship heavy equipment from China", "import excavators from China", "ship excavators from China",
      "import industrial machinery from China", "ship industrial machinery from China", "import production lines from China", "ship production lines from China",
      "import industrial raw materials from China", "ship industrial raw materials from China", "import plastic from China", "ship plastic from China", "import metals from China", "ship metals from China",
      "import agricultural products from China", "ship agricultural products from China", "import seeds from China", "ship seeds from China", "import fertilizers from China", "ship fertilizers from China",
      "import animal products from China", "ship animal products from China", "import feed from China", "ship feed from China",
      "import medical products from China", "ship medical products from China", "import medicines from China", "ship medicines from China", "import medical equipment from China", "ship medical equipment from China",
      "import sports products from China", "ship sports products from China", "import sportswear from China", "ship sportswear from China", "import sports equipment from China", "ship sports equipment from China",
      "import school products from China", "ship school products from China", "import school books from China", "ship school books from China", "import school tools from China", "ship school tools from China",
      "import office products from China", "ship office products from China", "import paper from China", "ship paper from China", "import pens from China", "ship pens from China",
      "import electronic products from China", "ship electronic products from China", "import chargers from China", "ship chargers from China", "import cables from China", "ship cables from China",
      "import digital products from China", "ship digital products from China", "import cameras from China", "ship cameras from China", "import headphones from China", "ship headphones from China",
      "import smart products from China", "ship smart products from China", "import smart watches from China", "ship smart watches from China", "import smart glasses from China", "ship smart glasses from China",
      "import home products from China", "ship home products from China", "import home utensils from China", "ship home utensils from China", "import home tools from China", "ship home tools from China",
      "import garden products from China", "ship garden products from China", "import garden tools from China", "ship garden tools from China", "import plants from China", "ship plants from China",
      "import construction products from China", "ship construction products from China", "import building materials from China", "ship building materials from China", "import construction tools from China", "ship construction tools from China",
      "import decor products from China", "ship decor products from China", "import accessories from China", "ship accessories from China", "import home decor from China", "ship home decor from China",
      "import gift products from China", "ship gift products from China", "import gifts from China", "ship gifts from China", "import accessories from China", "ship accessories from China",
      "import children products from China", "ship children products from China", "import children clothing from China", "ship children clothing from China", "import children toys from China", "ship children toys from China",
      "import men products from China", "ship men products from China", "import men clothing from China", "ship men clothing from China", "import men shoes from China", "ship men shoes from China",
      "import women products from China", "ship women products from China", "import women clothing from China", "ship women clothing from China", "import women shoes from China", "ship women shoes from China",
      "import sports products from China", "ship sports products from China", "import sports clothing from China", "ship sports clothing from China", "import sports shoes from China", "ship sports shoes from China",
      "import traditional products from China", "ship traditional products from China", "import handmade products from China", "ship handmade products from China", "import handicrafts from China", "ship handicrafts from China",
      "import art products from China", "ship art products from China", "import art paintings from China", "ship art paintings from China", "import sculptures from China", "ship sculptures from China",
      "import cultural products from China", "ship cultural products from China", "import cultural books from China", "ship cultural books from China", "import cultural magazines from China", "ship cultural magazines from China",
      "import educational products from China", "ship educational products from China", "import educational books from China", "ship educational books from China", "import educational tools from China", "ship educational tools from China",
      "import training products from China", "ship training products from China", "import training books from China", "ship training books from China", "import training tools from China", "ship training tools from China",
      "import research products from China", "ship research products from China", "import research books from China", "ship research books from China", "import research tools from China", "ship research tools from China",
      "import scientific products from China", "ship scientific products from China", "import scientific books from China", "ship scientific books from China", "import scientific tools from China", "ship scientific tools from China",
      "import technical products from China", "ship technical products from China", "import technical books from China", "ship technical books from China", "import technical tools from China", "ship technical tools from China",
      "import engineering products from China", "ship engineering products from China", "import engineering books from China", "ship engineering books from China", "import engineering tools from China", "ship engineering tools from China",
      "import medical products from China", "ship medical products from China", "import medical books from China", "ship medical books from China", "import medical tools from China", "ship medical tools from China",
      "import pharmaceutical products from China", "ship pharmaceutical products from China", "import pharmaceutical books from China", "ship pharmaceutical books from China", "import pharmaceutical tools from China", "ship pharmaceutical tools from China",
      "import veterinary products from China", "ship veterinary products from China", "import veterinary books from China", "ship veterinary books from China", "import veterinary tools from China", "ship veterinary tools from China",
      "import agricultural products from China", "ship agricultural products from China", "import agricultural books from China", "ship agricultural books from China", "import agricultural tools from China", "ship agricultural tools from China",
      "import industrial products from China", "ship industrial products from China", "import industrial books from China", "ship industrial books from China", "import industrial tools from China", "ship industrial tools from China",
      "import commercial products from China", "ship commercial products from China", "import commercial books from China", "ship commercial books from China", "import commercial tools from China", "ship commercial tools from China",
      "import financial products from China", "ship financial products from China", "import financial books from China", "ship financial books from China", "import financial tools from China", "ship financial tools from China",
      "import legal products from China", "ship legal products from China", "import legal books from China", "ship legal books from China", "import legal tools from China", "ship legal tools from China",
      "import administrative products from China", "ship administrative products from China", "import administrative books from China", "ship administrative books from China", "import administrative tools from China", "ship administrative tools from China",
      "import political products from China", "ship political products from China", "import political books from China", "ship political books from China", "import political tools from China", "ship political tools from China",
      "import economic products from China", "ship economic products from China", "import economic books from China", "ship economic books from China", "import economic tools from China", "ship economic tools from China",
      "import social products from China", "ship social products from China", "import social books from China", "ship social books from China", "import social tools from China", "ship social tools from China",
      "import psychological products from China", "ship psychological products from China", "import psychological books from China", "ship psychological books from China", "import psychological tools from China", "ship psychological tools from China",
      "import philosophical products from China", "ship philosophical products from China", "import philosophical books from China", "ship philosophical books from China", "import philosophical tools from China", "ship philosophical tools from China",
      "import religious products from China", "ship religious products from China", "import religious books from China", "ship religious books from China", "import religious tools from China", "ship religious tools from China",
      "import spiritual products from China", "ship spiritual products from China", "import spiritual books from China", "ship spiritual books from China", "import spiritual tools from China", "ship spiritual tools from China",
    ],
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://www.dinooratrade.com/en',
      title: 'Best Import Company from China to Saudi Arabia | Dinoora International Trade',
      description: 'Dinoora International Trade is an Arab company specializing in international trade and import from China to Arab countries. We offer sourcing, quality inspection, shipping, and customs clearance services with competitive prices.',
      siteName: 'Dinoora International Trade',
      images: [
        {
          url: 'https://www.dinooratrade.com/og-image-en.jpg',
          width: 1200,
          height: 630,
          alt: 'Dinoora International Trade - Import from China'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Best Import Company from China to Saudi Arabia | Dinoora International Trade',
      description: 'Dinoora International Trade is an Arab company specializing in international trade and import from China to Arab countries.',
      images: ['https://www.dinooratrade.com/og-image-en.jpg']
    },
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
