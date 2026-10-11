import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'blog.shipping-guide' });

  return {
    title: locale === 'ar' 
      ? 'دليل الشحن الشامل من الصين | كل ما تحتاج معرفته - دينورا'
      : 'Complete Shipping Guide from China | Everything You Need to Know - Dinoora',
    description: locale === 'ar'
      ? 'دليل شامل لطرق الشحن من الصين: بحري، جوي، بري. تعرف على التكاليف، المواعيد، وكيفية اختيار أفضل طريقة شحن لمنتجاتك.'
      : 'Comprehensive guide to shipping methods from China: sea, air, land. Learn about costs, timelines, and how to choose the best shipping method for your products.',
    keywords: locale === 'ar' ? [
      'طرق الشحن من الصين', 'شحن بحري من الصين', 'شحن جوي من الصين', 'شحن بري من الصين',
      'تكلفة الشحن من الصين', 'زمن الشحن من الصين', 'شحن الحاويات من الصين',
      'شحن LCL من الصين', 'شحن FCL من الصين', 'شحن express من الصين',
      'شحن من الصين للسعودية', 'شحن من الصين للإمارات', 'شحن من الصين للكويت',
      'شحن من شنغهاي', 'شحن من نينغبو', 'شحن من شنتشن', 'شحن من غوانزو',
      'شحن البضائع من الصين', 'شحن المنتجات من الصين', 'شحن التجارة من الصين',
      'دليل الشحن من الصين', 'كيف أشحن من الصين', 'أفضل طرق الشحن من الصين',
    ] : [
      'shipping methods from China', 'sea shipping from China', 'air shipping from China', 'land shipping from China',
      'shipping cost from China', 'shipping time from China', 'container shipping from China',
      'LCL shipping from China', 'FCL shipping from China', 'express shipping from China',
      'shipping from China to Saudi Arabia', 'shipping from China to UAE', 'shipping from China to Kuwait',
      'shipping from Shanghai', 'shipping from Ningbo', 'shipping from Shenzhen', 'shipping from Guangzhou',
      'shipping goods from China', 'shipping products from China', 'trade shipping from China',
      'shipping guide from China', 'how to ship from China', 'best shipping methods from China',
    ],
    openGraph: {
      title: locale === 'ar' 
        ? 'دليل الشحن الشامل من الصين | كل ما تحتاج معرفته - دينورا'
        : 'Complete Shipping Guide from China | Everything You Need to Know - Dinoora',
      description: locale === 'ar'
        ? 'دليل شامل لطرق الشحن من الصين: بحري، جوي، بري. تعرف على التكاليف، المواعيد، وكيفية اختيار أفضل طريقة شحن لمنتجاتك.'
        : 'Comprehensive guide to shipping methods from China: sea, air, land. Learn about costs, timelines, and how to choose the best shipping method for your products.',
      type: 'article',
      locale: locale,
    },
  };
}

export default function ShippingGuidePage({ params: { locale } }: { params: { locale: string } }) {
  const isArabic = locale === 'ar';

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            {isArabic ? 'دليل الشحن الشامل من الصين' : 'Complete Shipping Guide from China'}
          </h1>
          <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto">
            {isArabic 
              ? 'كل ما تحتاج معرفته عن طرق الشحن، التكاليف، والمواعيد لاستيراد منتجاتك بنجاح'
              : 'Everything you need to know about shipping methods, costs, and timelines to successfully import your products'}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Introduction */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {isArabic ? 'مقدمة في الشحن من الصين' : 'Introduction to Shipping from China'}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            {isArabic
              ? 'الشحن من الصين هو جزء أساسي من عملية الاستيراد. فهم طرق الشحن المختلفة، التكاليف، والمواعيد الزمنية يساعدك على اتخاذ قرارات أفضل وتوفير المال والوقت. في هذا الدليل، سنشرح بالتفصيل كل ما تحتاج معرفته عن الشحن من الصين.'
              : 'Shipping from China is an essential part of the import process. Understanding different shipping methods, costs, and timelines helps you make better decisions and save money and time. In this guide, we will explain in detail everything you need to know about shipping from China.'}
          </p>
        </div>

        {/* Sea Shipping */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
              <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              {isArabic ? 'الشحن البحري' : 'Sea Shipping'}
            </h2>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            {isArabic ? 'ما هو الشحن البحري؟' : 'What is Sea Shipping?'}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            {isArabic
              ? 'الشحن البحري هو الطريقة الأكثر شيوعاً للاستيراد من الصين، خاصة للشحنات الكبيرة والثقيلة. يتم نقل البضائع عبر الحاويات على السفن البحرية. يعتبر الشحن البحري الخيار الأكثر اقتصادية للشحنات الكبيرة.'
              : 'Sea shipping is the most common method for importing from China, especially for large and heavy shipments. Goods are transported via containers on ships. Sea shipping is considered the most economical option for large shipments.'}
          </p>

          <div className="relative h-[300px] mb-6 rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200&q=85"
              alt={isArabic ? 'الشحن البحري من الصين' : 'Sea shipping from China'}
              fill
              className="object-cover"
            />
          </div>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            {isArabic ? 'أنواع الشحن البحري' : 'Types of Sea Shipping'}
          </h3>
          
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 mb-4">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              {isArabic ? 'شحن FCL (حاوية كاملة)' : 'FCL Shipping (Full Container Load)'}
            </h4>
            <p className="text-gray-700 dark:text-gray-300">
              {isArabic
                ? 'شحن حاوية كاملة (20 قدم أو 40 قدم) حصرياً لمنتجاتك. مناسب للشحنات الكبيرة التي تملأ حاوية كاملة أو أكثر.'
                : 'Shipping a full container (20ft or 40ft) exclusively for your products. Suitable for large shipments that fill a full container or more.'}
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 mb-4">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              {isArabic ? 'شحن LCL (جزء من حاوية)' : 'LCL Shipping (Less than Container Load)'}
            </h4>
            <p className="text-gray-700 dark:text-gray-300">
              {isArabic
                ? 'شحن بضائعك في حاوية مشتركة مع بضائع أخرى. مناسب للشحنات الصغيرة والمتوسطة التي لا تملأ حاوية كاملة.'
                : 'Shipping your goods in a shared container with other goods. Suitable for small and medium shipments that do not fill a full container.'}
            </p>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            {isArabic ? 'مميزات وعيوب الشحن البحري' : 'Pros and Cons of Sea Shipping'}
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 dark:text-green-400 mb-2">
                {isArabic ? 'المميزات' : 'Pros'}
              </h4>
              <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
                <li>{isArabic ? 'تكلفة منخفضة' : 'Low cost'}</li>
                <li>{isArabic ? 'سعة كبيرة' : 'Large capacity'}</li>
                <li>{isArabic ? 'مناسب للبضائع الثقيلة' : 'Suitable for heavy goods'}</li>
                <li>{isArabic ? 'خيارات مرنة' : 'Flexible options'}</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
              <h4 className="font-semibold text-red-800 dark:text-red-400 mb-2">
                {isArabic ? 'العيوب' : 'Cons'}
              </h4>
              <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
                <li>{isArabic ? 'زمن طويل (20-45 يوم)' : 'Long time (20-45 days)'}</li>
                <li>{isArabic ? 'تأخيرات محتملة' : 'Potential delays'}</li>
                <li>{isArabic ? 'تتبع أقل دقة' : 'Less accurate tracking'}</li>
                <li>{isArabic ? 'مخاطر أعلى للتلف' : 'Higher risk of damage'}</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            {isArabic ? 'التكلفة التقريبية' : 'Approximate Cost'}
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            {isArabic
              ? 'تبدأ تكلفة الشحن البحري من حوالي 500-1500 دولار للحاوية 20 قدم، و 800-2500 دولار للحاوية 40 قدم، حسب الميناء والوجهة.'
              : 'Sea shipping costs start from approximately $500-1500 for a 20ft container, and $800-2500 for a 40ft container, depending on the port and destination.'}
          </p>
        </div>

        {/* Air Shipping */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full mr-4">
              <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              {isArabic ? 'الشحن الجوي' : 'Air Shipping'}
            </h2>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            {isArabic ? 'ما هو الشحن الجوي؟' : 'What is Air Shipping?'}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            {isArabic
              ? 'الشحن الجوي هو أسرع طريقة لنقل البضائع من الصين. يتم نقل البضائع عبر الطائرات التجارية أو الشحن الجوي الخاص. مناسب للشحنات الصغيرة والعاجلة.'
              : 'Air shipping is the fastest way to transport goods from China. Goods are transported via commercial flights or dedicated air cargo. Suitable for small and urgent shipments.'}
          </p>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            {isArabic ? 'متى تستخدم الشحن الجوي؟' : 'When to Use Air Shipping?'}
          </h3>
          <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside space-y-2 mb-4">
            <li>{isArabic ? 'الشحنات العاجلة' : 'Urgent shipments'}</li>
            <li>{isArabic ? 'البضائع ذات القيمة العالية' : 'High-value goods'}</li>
            <li>{isArabic ? 'المنتجات القابلة للتلف' : 'Perishable products'}</li>
            <li>{isArabic ? 'الشحنات الصغيرة والخفيفة' : 'Small and light shipments'}</li>
            <li>{isArabic ? 'عينات المنتجات' : 'Product samples'}</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            {isArabic ? 'مميزات وعيوب الشحن الجوي' : 'Pros and Cons of Air Shipping'}
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 dark:text-green-400 mb-2">
                {isArabic ? 'المميزات' : 'Pros'}
              </h4>
              <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
                <li>{isArabic ? 'سريع جداً (3-7 أيام)' : 'Fast (3-7 days)'}</li>
                <li>{isArabic ? 'تتبع دقيق' : 'Accurate tracking'}</li>
                <li>{isArabic ? 'آمن وموثوق' : 'Safe and reliable'}</li>
                <li>{isArabic ? 'تأمين أفضل' : 'Better insurance'}</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
              <h4 className="font-semibold text-red-800 dark:text-red-400 mb-2">
                {isArabic ? 'العيوب' : 'Cons'}
              </h4>
              <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
                <li>{isArabic ? 'تكلفة عالية جداً' : 'Very high cost'}</li>
                <li>{isArabic ? 'سعة محدودة' : 'Limited capacity'}</li>
                <li>{isArabic ? 'قيود على الوزن والحجم' : 'Weight and size restrictions'}</li>
                <li>{isArabic ? 'قيود على أنواع معينة من البضائع' : 'Restrictions on certain goods'}</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            {isArabic ? 'التكلفة التقريبية' : 'Approximate Cost'}
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            {isArabic
              ? 'تبدأ تكلفة الشحن الجوي من حوالي 5-15 دولار للكيلوغرام، حسب الوجهة والوزن والحجم.'
              : 'Air shipping costs start from approximately $5-15 per kilogram, depending on destination, weight, and volume.'}
          </p>
        </div>

        {/* Land Shipping */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full mr-4">
              <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              {isArabic ? 'الشحن البري' : 'Land Shipping'}
            </h2>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            {isArabic ? 'ما هو الشحن البري؟' : 'What is Land Shipping?'}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            {isArabic
              ? 'الشحن البري يتم عبر الشاحنات والقطارات عبر الحدود البرية. مناسب للدول المجاورة للصين مثل كازاخستان وروسيا، ومن خلال مبادرة الحزام والطريق.'
              : 'Land shipping is done via trucks and trains across land borders. Suitable for countries neighboring China like Kazakhstan and Russia, and through the Belt and Road Initiative.'}
          </p>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            {isArabic ? 'متى تستخدم الشحن البري؟' : 'When to Use Land Shipping?'}
          </h3>
          <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside space-y-2 mb-4">
            <li>{isArabic ? 'الدول المجاورة للصين' : 'Countries neighboring China'}</li>
            <li>{isArabic ? 'الشحنات المتوسطة' : 'Medium shipments'}</li>
            <li>{isArabic ? 'عند الحاجة لتوفير الوقت مقارنة بالشحن البحري' : 'When you need to save time compared to sea shipping'}</li>
            <li>{isArabic ? 'البضائع التي لا تتحمل الشحن الجوي' : 'Goods that cannot withstand air shipping'}</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            {isArabic ? 'مميزات وعيوب الشحن البري' : 'Pros and Cons of Land Shipping'}
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 dark:text-green-400 mb-2">
                {isArabic ? 'المميزات' : 'Pros'}
              </h4>
              <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
                <li>{isArabic ? 'أسرع من الشحن البحري' : 'Faster than sea shipping'}</li>
                <li>{isArabic ? 'أرخص من الشحن الجوي' : 'Cheaper than air shipping'}</li>
                <li>{isArabic ? 'مناسب للدول المجاورة' : 'Suitable for neighboring countries'}</li>
                <li>{isArabic ? 'خيارات مرنة' : 'Flexible options'}</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
              <h4 className="font-semibold text-red-800 dark:text-red-400 mb-2">
                {isArabic ? 'العيوب' : 'Cons'}
              </h4>
              <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
                <li>{isArabic ? 'محدود للدول المجاورة' : 'Limited to neighboring countries'}</li>
                <li>{isArabic ? 'تأخيرات الحدود الجمركية' : 'Customs border delays'}</li>
                <li>{isArabic ? 'مخاطر الطرق' : 'Road risks'}</li>
                <li>{isArabic ? 'سعة محدودة' : 'Limited capacity'}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Choosing the Best Method */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            {isArabic ? 'كيف تختار أفضل طريقة شحن؟' : 'How to Choose the Best Shipping Method?'}
          </h2>
          
          <div className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {isArabic ? '1. احسب التكلفة الإجمالية' : '1. Calculate Total Cost'}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {isArabic
                  ? 'قارن بين تكلفة الشحن وقيمة البضائع. للشحنات الكبيرة والرخيصة، الشحن البحري هو الأفضل. للشحنات الصغيرة والغالية، الشحن الجوي قد يكون منطقياً.'
                  : 'Compare shipping cost with goods value. For large and cheap shipments, sea shipping is best. For small and expensive shipments, air shipping may be logical.'}
              </p>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {isArabic ? '2. حدد المدة الزمنية' : '2. Determine Timeline'}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {isArabic
                  ? 'إذا كنت بحاجة للبضائع بسرعة، الشحن الجوي هو الخيار الوحيد. إذا كان لديك وقت كافٍ، الشحن البحري سيوفر لك الكثير من المال.'
                  : 'If you need goods quickly, air shipping is the only option. If you have enough time, sea shipping will save you a lot of money.'}
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {isArabic ? '3. اعتبارات نوع البضائع' : '3. Consider Goods Type'}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {isArabic
                  ? 'بعض البضائع مثل المواد الغذائية القابلة للتلف تتطلب شحن جوي. البضائع الثقيلة والكبيرة تناسب الشحن البحري.'
                  : 'Some goods like perishable food require air shipping. Heavy and large goods suit sea shipping.'}
              </p>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {isArabic ? '4. قيود الوجهة' : '4. Destination Restrictions'}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {isArabic
                  ? 'بعض الدول لديها قيود على طرق الشحن المحددة. تأكد من متطلبات الجمارك والواردات في بلدك.'
                  : 'Some countries have restrictions on specific shipping methods. Make sure to check customs and import requirements in your country.'}
              </p>
            </div>
          </div>
        </div>

        {/* Major Ports */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            {isArabic ? 'الموانئ الرئيسية في الصين' : 'Major Ports in China'}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {isArabic ? 'شنغهاي (Shanghai)' : 'Shanghai'}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                {isArabic ? 'أكبر ميناء في العالم من حيث حجم الحاويات. يخدم شرق الصين.' : 'Largest port in the world by container volume. Serves East China.'}
              </p>
            </div>

            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {isArabic ? 'نينغبو (Ningbo)' : 'Ningbo'}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                {isArabic ? 'ثاني أكبر ميناء في الصين. يخدم مقاطعة تشجيانغ.' : 'Second largest port in China. Serves Zhejiang province.'}
              </p>
            </div>

            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {isArabic ? 'شنتشن (Shenzhen)' : 'Shenzhen'}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                {isArabic ? 'ميناء رئيسي للإلكترونيات والمنتجات التكنولوجية. يخدم جنوب الصين.' : 'Major port for electronics and tech products. Serves South China.'}
              </p>
            </div>

            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {isArabic ? 'غوانزو (Guangzhou)' : 'Guangzhou'}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                {isArabic ? 'ميناء تاريخي مهم. يخدم مقاطعة غوانغدونغ.' : 'Historically important port. Serves Guangdong province.'}
              </p>
            </div>

            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {isArabic ? 'تشينغداو (Qingdao)' : 'Qingdao'}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                {isArabic ? 'ميناء رئيسي لشمال الصين. يخدم مقاطعة شاندونغ.' : 'Major port for North China. Serves Shandong province.'}
              </p>
            </div>

            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {isArabic ? 'تيانجين (Tianjin)' : 'Tianjin'}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                {isArabic ? 'ميناء رئيسي لشمال الصين بالقرب من بكين.' : 'Major port for North China near Beijing.'}
              </p>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6">
            {isArabic ? 'نصائح مهمة للشحن من الصين' : 'Important Tips for Shipping from China'}
          </h2>
          
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="bg-white/20 rounded-full p-2 mr-3 mt-1">✓</span>
              <span>{isArabic ? 'احجز الشحن مبكراً للحصول على أسعار أفضل' : 'Book shipping early to get better rates'}</span>
            </li>
            <li className="flex items-start">
              <span className="bg-white/20 rounded-full p-2 mr-3 mt-1">✓</span>
              <span>{isArabic ? 'قارن الأسعار بين شركات الشحن المختلفة' : 'Compare prices between different shipping companies'}</span>
            </li>
            <li className="flex items-start">
              <span className="bg-white/20 rounded-full p-2 mr-3 mt-1">✓</span>
              <span>{isArabic ? 'تأكد من التغليف الجيد للبضائع' : 'Ensure good packaging for goods'}</span>
            </li>
            <li className="flex items-start">
              <span className="bg-white/20 rounded-full p-2 mr-3 mt-1">✓</span>
              <span>{isArabic ? 'احصل على تأمين للبضائع القيمة' : 'Get insurance for valuable goods'}</span>
            </li>
            <li className="flex items-start">
              <span className="bg-white/20 rounded-full p-2 mr-3 mt-1">✓</span>
              <span>{isArabic ? 'تابع الشحنة باستمرار' : 'Track the shipment continuously'}</span>
            </li>
            <li className="flex items-start">
              <span className="bg-white/20 rounded-full p-2 mr-3 mt-1">✓</span>
              <span>{isArabic ? 'جهز المستندات الجمركية مسبقاً' : 'Prepare customs documents in advance'}</span>
            </li>
            <li className="flex items-start">
              <span className="bg-white/20 rounded-full p-2 mr-3 mt-1">✓</span>
              <span>{isArabic ? 'اعرف رسوم الجمارك والضرائب في بلدك' : 'Know customs duties and taxes in your country'}</span>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {isArabic ? 'هل تحتاج مساعدة في الشحن من الصين؟' : 'Need Help with Shipping from China?'}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            {isArabic
              ? 'فريقنا في دينورا جاهز لمساعدتك في اختيار أفضل طريقة شحن وإدارة العملية بالكامل من التوريد حتى التسليم.'
              : 'Our team at Dinoora is ready to help you choose the best shipping method and manage the entire process from sourcing to delivery.'}
          </p>
          <a
            href={`/${locale}/free-consultation`}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            {isArabic ? 'احصل على استشارة مجانية' : 'Get a Free Consultation'}
          </a>
        </div>
      </div>
    </div>
  );
}
