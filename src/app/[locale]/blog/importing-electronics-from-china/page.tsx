import type { Metadata } from "next";
import { getTranslations } from 'next-intl/server';
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, CheckCircle, AlertTriangle, Package, Truck, FileText } from "lucide-react";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  const title = locale === 'ar' 
    ? 'دليل شامل لاستيراد الإلكترونيات من الصين | دينورا'
    : 'Complete Guide to Importing Electronics from China | Dinoora';
    
  const description = locale === 'ar'
    ? 'تعلم كيفية استيراد الإلكترونيات من الصين بسهولة وثقة. دليل شامل يشمل اختيار الموردين، فحص الجودة، الشحن، والتخليص الجمركي.'
    : 'Learn how to import electronics from China with ease and confidence. A comprehensive guide covering supplier selection, quality inspection, shipping, and customs clearance.';

  return {
    title,
    description,
  };
}

export default async function ImportingElectronicsPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('blog.electronics');
  const ar = locale === 'ar';

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <Link href={`/${locale}/blog`} className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8">
          <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
          {ar ? 'العودة للمدونة' : 'Back to Blog'}
        </Link>

        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
            <Clock className="h-4 w-4" />
            <span>{ar ? '8 دقائق قراءة' : '8 min read'}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {ar ? 'دليل شامل لاستيراد الإلكترونيات من الصين' : 'Complete Guide to Importing Electronics from China'}
          </h1>
          <p className="text-xl text-slate-300">
            {ar ? 'تعلم كيفية استيراد الإلكترونيات من الصين بسهولة وثقة مع هذا الدليل الشامل الذي يغطي كل ما تحتاج معرفته من اختيار الموردين إلى استلام البضائع.' : 'Learn how to import electronics from China with ease and confidence with this comprehensive guide covering everything you need to know from supplier selection to receiving goods.'}
          </p>
        </div>

        <div className="relative h-[400px] mb-8 rounded-2xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=85"
            alt={ar ? 'استيراد الإلكترونيات من الصين' : 'Importing electronics from China'}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">
            {ar ? 'لماذا تستورد الإلكترونيات من الصين؟' : 'Why Import Electronics from China?'}
          </h2>
          <p className="text-slate-300 mb-6">
            {ar ? 'الصين هي أكبر مصدر للإلكترونيات في العالم، وتوفر مجموعة واسعة من المنتجات بأسعار تنافسية. من الهواتف الذكية إلى الحواسيب والأجهزة المنزلية، يمكنك العثور على كل شيء تقريباً بأسعار أقل بكثير من الأسواق الأخرى.' : 'China is the world\'s largest exporter of electronics, offering a wide range of products at competitive prices. From smartphones to computers and home appliances, you can find almost everything at much lower prices than other markets.'}
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <CheckCircle className="h-8 w-8 text-emerald-400 mb-3" />
              <h3 className="font-bold mb-2">{ar ? 'أسعار تنافسية' : 'Competitive Prices'}</h3>
              <p className="text-slate-400 text-sm">{ar ? 'توفير يصل إلى 60% مقارنة بالأسواق المحلية' : 'Savings up to 60% compared to local markets'}</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <CheckCircle className="h-8 w-8 text-emerald-400 mb-3" />
              <h3 className="font-bold mb-2">{ar ? 'تنوع واسع' : 'Wide Variety'}</h3>
              <p className="text-slate-400 text-sm">{ar ? 'ملايين المنتجات والموردين للاختيار من بينها' : 'Millions of products and suppliers to choose from'}</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <CheckCircle className="h-8 w-8 text-emerald-400 mb-3" />
              <h3 className="font-bold mb-2">{ar ? 'جودة عالية' : 'High Quality'}</h3>
              <p className="text-slate-400 text-sm">{ar ? 'منتجات عالية الجودة مع شهادات دولية' : 'High-quality products with international certifications'}</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <CheckCircle className="h-8 w-8 text-emerald-400 mb-3" />
              <h3 className="font-bold mb-2">{ar ? 'تكنولوجيا حديثة' : 'Latest Technology'}</h3>
              <p className="text-slate-400 text-sm">{ar ? 'وصول لأحدث التقنيات والمنتجات في السوق' : 'Access to the latest technologies and products in the market'}</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-cyan-400 mb-4">
            {ar ? 'اختيار المورد المناسب' : 'Choosing the Right Supplier'}
          </h2>
          <p className="text-slate-300 mb-6">
            {ar ? 'اختيار المورد الصحيح هو الخطوة الأهم في عملية الاستيراد. إليك بعض النصائح للعثور على مورد موثوق:' : 'Choosing the right supplier is the most important step in the import process. Here are some tips for finding a reliable supplier:'}
          </p>

          <div className="relative h-[300px] mb-6 rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=85"
              alt={ar ? 'اختيار المورد المناسب' : 'Choosing the right supplier'}
              fill
              className="object-cover"
            />
          </div>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-emerald-400 mt-1 flex-shrink-0" />
              <span>{ar ? 'تحقق من تقييمات ومراجعات المورد على المنصات مثل Alibaba و Made-in-China' : 'Check supplier ratings and reviews on platforms like Alibaba and Made-in-China'}</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-emerald-400 mt-1 flex-shrink-0" />
              <span>{ar ? 'اطلب عينات قبل الطلب الكبير للتأكد من الجودة' : 'Request samples before placing a large order to ensure quality'}</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-emerald-400 mt-1 flex-shrink-0" />
              <span>{ar ? 'تحقق من الشهادات والتراخيص (CE, FCC, RoHS)' : 'Check certifications and licenses (CE, FCC, RoHS)'}</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-emerald-400 mt-1 flex-shrink-0" />
              <span>{ar ? 'تواصل مع المورد مباشرة واطرح أسئلة مفصلة' : 'Communicate directly with the supplier and ask detailed questions'}</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-emerald-400 mt-1 flex-shrink-0" />
              <span>{ar ? 'استخدم طرق دفع آمنة مثل Escrow' : 'Use secure payment methods like Escrow'}</span>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-cyan-400 mb-4">
            {ar ? 'فحص الجودة' : 'Quality Inspection'}
          </h2>
          <p className="text-slate-300 mb-6">
            {ar ? 'فحص الجودة ضروري لضمان أن المنتجات تلبي توقعاتك. يجب إجراء فحص في ثلاث مراحل:' : 'Quality inspection is essential to ensure products meet your expectations. Inspection should be conducted in three stages:'}
          </p>

          <div className="relative h-[300px] mb-6 rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=85"
              alt={ar ? 'فحص جودة الإلكترونيات' : 'Electronics quality inspection'}
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-4 mb-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <Package className="h-6 w-6 text-cyan-400 mb-3" />
              <h3 className="font-bold mb-2">{ar ? 'فحص قبل الإنتاج' : 'Pre-Production Inspection'}</h3>
              <p className="text-slate-400 text-sm">{ar ? 'فحص المواد الخام والمكونات قبل بدء الإنتاج' : 'Inspect raw materials and components before production starts'}</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <Package className="h-6 w-6 text-cyan-400 mb-3" />
              <h3 className="font-bold mb-2">{ar ? 'فحص أثناء الإنتاج' : 'During Production Inspection'}</h3>
              <p className="text-slate-400 text-sm">{ar ? 'فحص المنتجات أثناء عملية الإنتاج لضمان الجودة المستمرة' : 'Inspect products during production to ensure continuous quality'}</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <Package className="h-6 w-6 text-cyan-400 mb-3" />
              <h3 className="font-bold mb-2">{ar ? 'فحص قبل الشحن' : 'Pre-Shipment Inspection'}</h3>
              <p className="text-slate-400 text-sm">{ar ? 'فحص شامل للمنتجات النهائية قبل الشحن' : 'Comprehensive inspection of final products before shipping'}</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-cyan-400 mb-4">
            {ar ? 'خيارات الشحن' : 'Shipping Options'}
          </h2>
          <p className="text-slate-300 mb-6">
            {ar ? 'هناك عدة خيارات لشحن الإلكترونيات من الصين، يعتمد الاختيار على الميزانية والوقت المتاح:' : 'There are several options for shipping electronics from China, the choice depends on budget and available time:'}
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <Truck className="h-6 w-6 text-cyan-400 mb-3" />
              <h3 className="font-bold mb-2">{ar ? 'الشحن الجوي' : 'Air Freight'}</h3>
              <p className="text-slate-400 text-sm mb-2">{ar ? 'الأسرع (3-7 أيام)' : 'Fastest (3-7 days)'}</p>
              <p className="text-slate-400 text-sm">{ar ? 'مناسب للطلبات الصغيرة والعاجلة' : 'Suitable for small and urgent orders'}</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <Truck className="h-6 w-6 text-cyan-400 mb-3" />
              <h3 className="font-bold mb-2">{ar ? 'الشحن البحري' : 'Sea Freight'}</h3>
              <p className="text-slate-400 text-sm mb-2">{ar ? 'الأكثر اقتصادية (20-45 يوم)' : 'Most economical (20-45 days)'}</p>
              <p className="text-slate-400 text-sm">{ar ? 'مناسب للطلبات الكبيرة' : 'Suitable for large orders'}</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-cyan-400 mb-4">
            {ar ? 'التخليص الجمركي' : 'Customs Clearance'}
          </h2>
          <p className="text-slate-300 mb-6">
            {ar ? 'التخليص الجمركي هو عملية مهمة تتطلب المستندات الصحيحة. تأكد من توفر:' : 'Customs clearance is an important process that requires correct documents. Ensure you have:'}
          </p>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3">
              <FileText className="h-5 w-5 text-cyan-400 mt-1 flex-shrink-0" />
              <span>{ar ? 'الفاتورة التجارية (Commercial Invoice)' : 'Commercial Invoice'}</span>
            </li>
            <li className="flex items-start gap-3">
              <FileText className="h-5 w-5 text-cyan-400 mt-1 flex-shrink-0" />
              <span>{ar ? 'قائمة التعبئة (Packing List)' : 'Packing List'}</span>
            </li>
            <li className="flex items-start gap-3">
              <FileText className="h-5 w-5 text-cyan-400 mt-1 flex-shrink-0" />
              <span>{ar ? 'شهادة المنشأ (Certificate of Origin)' : 'Certificate of Origin'}</span>
            </li>
            <li className="flex items-start gap-3">
              <FileText className="h-5 w-5 text-cyan-400 mt-1 flex-shrink-0" />
              <span>{ar ? 'شهادات الجودة والامتثال' : 'Quality and compliance certificates'}</span>
            </li>
          </ul>

          <div className="bg-amber-500/10 border border-amber-500/30 p-6 rounded-xl mb-8">
            <AlertTriangle className="h-6 w-6 text-amber-400 mb-3" />
            <h3 className="font-bold text-amber-400 mb-2">{ar ? 'نصيحة مهمة' : 'Important Tip'}</h3>
            <p className="text-slate-300">
              {ar ? 'استشر شركة استيراد متخصصة مثل دينورا لتسهيل عملية الاستيراد وتجنب المشاكل الشائعة.' : 'Consult a specialized import company like Dinoora to facilitate the import process and avoid common problems.'}
            </p>
          </div>

          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 p-8 rounded-xl text-center">
            <h2 className="text-2xl font-bold mb-4">{ar ? 'جاهز لبدء الاستيراد؟' : 'Ready to Start Importing?'}</h2>
            <p className="text-slate-300 mb-6">
              {ar ? 'فريق دينورا هنا لمساعدتك في كل خطوة من عملية الاستيراد من الصين.' : 'The Dinoora team is here to help you every step of the way in importing from China.'}
            </p>
            <Link href={`/${locale}/contact`} className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
              {ar ? 'تواصل معنا' : 'Contact Us'}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
