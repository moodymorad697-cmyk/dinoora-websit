import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'blog.quality-inspection' });

  return {
    title: locale === 'ar' 
      ? 'أفضل ممارسات فحص الجودة في الصين | دليل شامل - دينورا'
      : 'Quality Inspection Best Practices in China | Comprehensive Guide - Dinoora',
    description: locale === 'ar'
      ? 'دليل شامل لفحص الجودة في الصين: أنواع الفحص، متى تجريه، وكيف تحمي استثمارك من المنتجات المعيبة.'
      : 'Comprehensive guide to quality inspection in China: types of inspection, when to conduct it, and how to protect your investment from defective products.',
    keywords: locale === 'ar' ? [
      'فحص الجودة في الصين', 'فحص المنتجات قبل الشحن', 'فحص المصانع الصينية',
      'فحص قبل الإنتاج', 'فحص أثناء الإنتاج', 'فحص قبل الشحن',
      'مفتش جودة في الصين', 'خدمات فحص الجودة', 'شركة فحص جودة',
      'تقييم الموردين', 'فحص العينات', 'فحص البضائع',
      'ضمان الجودة', 'التحكم في الجودة', 'معايير الجودة',
      'تجنب المنتجات المعيبة', 'حماية الاستثمار', 'فحص الإلكترونيات',
      'فحص الملابس', 'فحص الأثاث', 'فحص الأدوات',
    ] : [
      'quality inspection in China', 'pre-shipment inspection', 'Chinese factory inspection',
      'pre-production inspection', 'during production inspection', 'pre-shipment inspection',
      'quality inspector in China', 'quality inspection services', 'quality inspection company',
      'supplier evaluation', 'sample inspection', 'goods inspection',
      'quality assurance', 'quality control', 'quality standards',
      'avoid defective products', 'protect investment', 'electronics inspection',
      'clothing inspection', 'furniture inspection', 'tools inspection',
    ],
    openGraph: {
      title: locale === 'ar' 
        ? 'أفضل ممارسات فحص الجودة في الصين | دليل شامل - دينورا'
        : 'Quality Inspection Best Practices in China | Comprehensive Guide - Dinoora',
      description: locale === 'ar'
        ? 'دليل شامل لفحص الجودة في الصين: أنواع الفحص، متى تجريه، وكيف تحمي استثمارك من المنتجات المعيبة.'
        : 'Comprehensive guide to quality inspection in China: types of inspection, when to conduct it, and how to protect your investment from defective products.',
      type: 'article',
      locale: locale,
    },
  };
}

export default async function QualityInspectionPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isArabic = locale === 'ar';

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            {isArabic ? 'أفضل ممارسات فحص الجودة في الصين' : 'Quality Inspection Best Practices in China'}
          </h1>
          <p className="text-xl text-center text-green-100 max-w-3xl mx-auto">
            {isArabic 
              ? 'دليل شامل لحماية استثمارك وضمان جودة منتجاتك من خلال فحص احترافي في المصانع الصينية'
              : 'Comprehensive guide to protect your investment and ensure product quality through professional inspection in Chinese factories'}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Introduction */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {isArabic ? 'لماذا فحص الجودة مهم؟' : 'Why Quality Inspection is Important?'}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            {isArabic
              ? 'فحص الجودة هو خطوة حاسمة في عملية الاستيراد من الصين. بدون فحص مناسب، قد تتلقى منتجات معيبة أو لا تلبي معاييرك، مما يؤدي إلى خسائر مالية وتضرر سمعتك التجارية. الفحص الاحترافي يضمن أن المنتجات تلبي مواصفاتك قبل شحنها.'
              : 'Quality inspection is a crucial step in the import process from China. Without proper inspection, you may receive defective or non-compliant products, leading to financial losses and damage to your business reputation. Professional inspection ensures products meet your specifications before shipping.'}
          </p>
          
          <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border-l-4 border-red-500">
            <p className="text-gray-700 dark:text-gray-300 font-semibold">
              {isArabic
                ? '💡 الحقيقة: 30% من المستوردين يتلقون منتجات معيبة دون فحص مسبق'
                : '💡 Fact: 30% of importers receive defective products without prior inspection'}
            </p>
          </div>
        </div>

        {/* Types of Inspection */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            {isArabic ? 'أنواع فحص الجودة' : 'Types of Quality Inspection'}
          </h2>

          <div className="relative h-[300px] mb-6 rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=85"
              alt={isArabic ? 'فحص الجودة في المصنع' : 'Quality inspection in factory'}
              fill
              className="object-cover"
            />
          </div>

          {/* Pre-Production Inspection */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {isArabic ? 'فحص قبل الإنتاج (Pre-Production Inspection)' : 'Pre-Production Inspection'}
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              {isArabic
                ? 'يتم هذا الفحص قبل بدء الإنتاج للتأكد من أن المواد الخام والمكونات تلبي معاييرك. يفحص المفتش المواد الأولية، المواصفات الفنية، وخطط الإنتاج.'
                : 'This inspection is done before production starts to ensure raw materials and components meet your standards. The inspector checks raw materials, technical specifications, and production plans.'}
            </p>
            
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                {isArabic ? 'ما يفحص:' : 'What is checked:'}
              </h4>
              <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
                <li>{isArabic ? 'المواد الخام والمكونات' : 'Raw materials and components'}</li>
                <li>{isArabic ? 'المواصفات الفنية' : 'Technical specifications'}</li>
                <li>{isArabic ? 'خطط الإنتاج' : 'Production plans'}</li>
                <li>{isArabic ? 'سعة المصنع' : 'Factory capacity'}</li>
                <li>{isArabic ? 'جودة العينات الأولية' : 'Initial sample quality'}</li>
              </ul>
            </div>
          </div>

          {/* During Production Inspection */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-100 dark:bg-yellow-900 p-3 rounded-full mr-4">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {isArabic ? 'فحص أثناء الإنتاج (During Production Inspection)' : 'During Production Inspection'}
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              {isArabic
                ? 'يتم هذا الفحص عندما يكون 10-30% من الإنتاج مكتمل. يسمح باكتشاف المشاكل مبكراً وتصحيحها قبل إكمال الإنتاج بالكامل.'
                : 'This inspection is done when 10-30% of production is complete. It allows early detection of problems and correction before full production completion.'}
            </p>
            
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                {isArabic ? 'ما يفحص:' : 'What is checked:'}
              </h4>
              <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
                <li>{isArabic ? 'جودة المنتجات في منتصف الإنتاج' : 'Product quality during production'}</li>
                <li>{isArabic ? 'التزام المواصفات' : 'Compliance with specifications'}</li>
                <li>{isArabic ? 'سرعة الإنتاج' : 'Production speed'}</li>
                <li>{isArabic ? 'مشاكل محتملة' : 'Potential issues'}</li>
                <li>{isArabic ? 'الحاجة لتصحيحات' : 'Need for corrections'}</li>
              </ul>
            </div>
          </div>

          {/* Pre-Shipment Inspection */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full mr-4">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {isArabic ? 'فحص قبل الشحن (Pre-Shipment Inspection)' : 'Pre-Shipment Inspection'}
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              {isArabic
                ? 'أهم نوع من الفحص. يتم عندما يكون 80-100% من الإنتاج مكتمل ومعبأ. يفحص عينة عشوائية من المنتجات النهائية للتأكد من الجودة قبل الشحن.'
                : 'Most important type of inspection. Done when 80-100% of production is complete and packed. A random sample of final products is checked to ensure quality before shipping.'}
            </p>
            
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                {isArabic ? 'ما يفحص:' : 'What is checked:'}
              </h4>
              <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
                <li>{isArabic ? 'جودة المنتج النهائي' : 'Final product quality'}</li>
                <li>{isArabic ? 'التعبئة والتغليف' : 'Packaging'}</li>
                <li>{isArabic ? 'الكمية والعدد' : 'Quantity and count'}</li>
                <li>{isArabic ? 'الملصقات والعلامات' : 'Labels and markings'}</li>
                <li>{isArabic ? 'الامتثال للمواصفات' : 'Compliance with specifications'}</li>
              </ul>
            </div>
          </div>

          {/* Container Loading Supervision */}
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full mr-4">
                <span className="text-2xl">📦</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {isArabic ? 'إشراف تحميل الحاويات (Container Loading Supervision)' : 'Container Loading Supervision'}
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              {isArabic
                ? 'يتواجد المفتش أثناء تحميل الحاويات للتأكد من أن المنتجات محملة بشكل صحيح وأن الحاوية في حالة جيدة.'
                : 'The inspector is present during container loading to ensure products are loaded correctly and the container is in good condition.'}
            </p>
            
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                {isArabic ? 'ما يفحص:' : 'What is checked:'}
              </h4>
              <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
                <li>{isArabic ? 'حالة الحاوية' : 'Container condition'}</li>
                <li>{isArabic ? 'طريقة التحميل' : 'Loading method'}</li>
                <li>{isArabic ? 'عدد الطرود' : 'Number of packages'}</li>
                <li>{isArabic ? 'إغلاق الحاوية' : 'Container sealing'}</li>
                <li>{isArabic ? 'توثيق العملية' : 'Process documentation'}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Inspection Standards */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            {isArabic ? 'معايير الفحص الشائعة' : 'Common Inspection Standards'}
          </h2>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              {isArabic ? 'معيار AQL (Acceptable Quality Level)' : 'AQL Standard (Acceptable Quality Level)'}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {isArabic
                ? 'المعيار الأكثر استخداماً في فحص الجودة. يحدد مستوى الجودة المقبول بناءً على حجم العينة ومستوى المخاطرة.'
                : 'Most commonly used standard in quality inspection. Determines acceptable quality level based on sample size and risk level.'}
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">AQL 2.5</div>
                <div className="text-sm text-gray-700 dark:text-gray-300">
                  {isArabic ? 'للعيوب الرئيسية' : 'For major defects'}
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">AQL 4.0</div>
                <div className="text-sm text-gray-700 dark:text-gray-300">
                  {isArabic ? 'للعيوب الثانوية' : 'For minor defects'}
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-red-600 dark:text-red-400 mb-2">AQL 0</div>
                <div className="text-sm text-gray-700 dark:text-gray-300">
                  {isArabic ? 'للعيوب الحرجة' : 'For critical defects'}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              {isArabic ? 'أنواع العيوب' : 'Types of Defects'}
            </h3>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2">
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-2">•</span>
                <span>
                  <strong>{isArabic ? 'عيوب حرجة:' : 'Critical defects:'}</strong>
                  {isArabic ? ' تجعل المنتج غير قابل للاستخدام أو غير آمن (مثل الأسلاك المكشوفة في الأجهزة الكهربائية)' : ' Make product unusable or unsafe (e.g., exposed wires in electrical devices)'}
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 font-bold mr-2">•</span>
                <span>
                  <strong>{isArabic ? 'عيوب رئيسية:' : 'Major defects:'}</strong>
                  {isArabic ? ' تؤثر بشكل كبير على استخدام المنتج أو مظهره (مثل خياطة معيبة في الملابس)' : ' Significantly affect product use or appearance (e.g., defective stitching in clothing)'}
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 font-bold mr-2">•</span>
                <span>
                  <strong>{isArabic ? 'عيوب ثانوية:' : 'Minor defects:'}</strong>
                  {isArabic ? ' لا تؤثر بشكل كبير على استخدام المنتج (مثل خدش صغير على الغلاف)' : ' Do not significantly affect product use (e.g., small scratch on packaging)'}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Best Practices */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            {isArabic ? 'أفضل ممارسات فحص الجودة' : 'Quality Inspection Best Practices'}
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full mr-4 flex-shrink-0">
                <span className="text-xl">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {isArabic ? 'حدد مواصفات واضحة' : 'Define Clear Specifications'}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {isArabic
                    ? 'قبل البدء، حدد مواصفات دقيقة للمنتج بما في ذلك الأبعاد، المواد، الألوان، ومعايير الجودة المطلوبة.'
                    : 'Before starting, define precise product specifications including dimensions, materials, colors, and required quality standards.'}
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full mr-4 flex-shrink-0">
                <span className="text-xl">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {isArabic ? 'استخدم مفتشين محترفين' : 'Use Professional Inspectors'}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {isArabic
                    ? 'تعامل مع شركات فحص موثوقة لديها خبرة في مجال منتجاتك. المفتشون المحترفون يعرفون ما يبحثون عنه.'
                    : 'Work with reputable inspection companies with experience in your product field. Professional inspectors know what to look for.'}
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full mr-4 flex-shrink-0">
                <span className="text-xl">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {isArabic ? 'أجرِ فحصاً قبل الشحن دائماً' : 'Always Conduct Pre-Shipment Inspection'}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {isArabic
                    ? 'حتى لو كنت تثق في المورد، فحص قبل الشحن ضروري لحماية استثمارك. تكلفة الفحص أقل بكثير من تكلفة المنتجات المعيبة.'
                    : 'Even if you trust the supplier, pre-shipment inspection is essential to protect your investment. Inspection cost is much lower than defective product cost.'}
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full mr-4 flex-shrink-0">
                <span className="text-xl">4</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {isArabic ? 'اطلب تقرير مفصل بالصور' : 'Request Detailed Report with Photos'}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {isArabic
                    ? 'تأكد من أن تقرير الفحص يتضمن صوراً واضحة للمنتجات والعيوب المكتشفة. الصور توفر دليلاً مرئياً قوياً.'
                    : 'Ensure the inspection report includes clear photos of products and discovered defects. Photos provide strong visual evidence.'}
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full mr-4 flex-shrink-0">
                <span className="text-xl">5</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {isArabic ? 'حدد مستوى AQL المناسب' : 'Determine Appropriate AQL Level'}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {isArabic
                    ? 'اختر مستوى AQL بناءً على نوع المنتج ومتطلباتك. المنتجات الطبية تتطلب مستوى أعلى من المنتجات العادية.'
                    : 'Choose AQL level based on product type and requirements. Medical products require higher level than regular products.'}
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full mr-4 flex-shrink-0">
                <span className="text-xl">6</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {isArabic ? 'تابع تصحيح العيوب' : 'Follow Up on Defect Corrections'}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {isArabic
                    ? 'إذا اكتشف الفحص عيوباً، تأكد من تصحيحها قبل الشحن. قد تحتاج لفحص إعادة بعد التصحيح.'
                    : 'If inspection discovers defects, ensure they are corrected before shipping. You may need a re-inspection after correction.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cost vs Benefit */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            {isArabic ? 'تكلفة الفحص مقابل الفائدة' : 'Inspection Cost vs Benefit'}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-800 dark:text-green-400 mb-4">
                {isArabic ? 'تكلفة الفحص' : 'Inspection Cost'}
              </h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                <li>• {isArabic ? 'يوم واحد: 200-400 دولار' : 'One day: $200-400'}</li>
                <li>• {isArabic ? 'يومان: 350-700 دولار' : 'Two days: $350-700'}</li>
                <li>• {isArabic ? 'ثلاثة أيام: 500-1000 دولار' : 'Three days: $500-1000'}</li>
              </ul>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-400 mb-4">
                {isArabic ? 'الخسارة المحتملة بدون فحص' : 'Potential Loss Without Inspection'}
              </h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                <li>• {isArabic ? 'منتجات معيبة: 10-50% من الشحنة' : 'Defective products: 10-50% of shipment'}</li>
                <li>• {isArabic ? 'تكلفة الإرجاع: 2000-10000 دولار' : 'Return cost: $2000-10000'}</li>
                <li>• {isArabic ? 'ضرر السمعة: لا يمكن تقديره' : 'Reputation damage: Cannot be estimated'}</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500">
            <p className="text-gray-700 dark:text-gray-300 font-semibold">
              {isArabic
                ? '💡 الاستنتاج: تكلفة الفحص أقل من 1% من قيمة الشحنة، لكنها توفر لك من خسائر أكبر بكثير'
                : '💡 Conclusion: Inspection cost is less than 1% of shipment value, but saves you from much larger losses'}
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {isArabic ? 'هل تحتاج فحص جودة احترافي؟' : 'Need Professional Quality Inspection?'}
          </h2>
          <p className="text-xl mb-6 text-green-100">
            {isArabic
              ? 'فريقنا في دينورا يوفر خدمات فحص جودة شاملة في المصانع الصينية لحماية استثمارك'
              : 'Our team at Dinoora provides comprehensive quality inspection services in Chinese factories to protect your investment'}
          </p>
          <a
            href={`/${locale}/free-consultation`}
            className="inline-block bg-white text-green-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            {isArabic ? 'احصل على استشارة مجانية' : 'Get a Free Consultation'}
          </a>
        </div>
      </div>
    </div>
  );
}
