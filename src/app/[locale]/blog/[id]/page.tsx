"use client";

import { useParams } from "next/navigation";
import { useLocale } from "next-intl";
import { ArrowRight, BookOpen, Clock, Calendar, User, Share2 } from "lucide-react";
import Link from "next/link";

const blogPosts = {
  sourcing: {
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=85",
    ar: {
      title: "كيف تكتب طلب توريد يمنحك أسعاراً أفضل",
      description: "المواصفات الواضحة تختصر وقت البحث وتمنع اختلاف التوقعات مع المورد.",
      content: [
        "عند كتابة طلب توريد، من الضروري تحديد المواصفات بدقة عالية. هذا يشمل الأبعاد، المواد، الألوان، وأي معايير جودة محددة.",
        "كلما كانت المواصفات أكثر وضوحاً، زادت فرصة الحصول على عروض أسعار دقيقة من الموردين الجادين.",
        "تأكد من إرفاق صور أو رسومات توضيحية عند الإمكان، فهذا يساعد الموردين على فهم توقعاتك بدقة.",
        "حدد الكميات المطلوبة بوضوح، بما في ذلك أي حدود للحد الأدنى أو الأقصى.",
        "اشرح بوضوح متطلبات التغليف والشحن، بما في ذلك أي متطلبات خاصة للمنتجات الحساسة."
      ]
    },
    en: {
      title: "How to write a sourcing brief that gets better quotes",
      description: "Clear specifications shorten research time and prevent mismatched expectations.",
      content: [
        "When writing a sourcing brief, it's essential to specify requirements with high precision. This includes dimensions, materials, colors, and any specific quality standards.",
        "The clearer your specifications, the higher your chances of receiving accurate quotes from serious suppliers.",
        "Make sure to attach images or technical drawings when possible, as this helps suppliers understand your expectations accurately.",
        "Clearly define the required quantities, including any minimum or maximum limits.",
        "Explain packaging and shipping requirements clearly, including any special requirements for sensitive products."
      ]
    }
  },
  shipping: {
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200&q=85",
    ar: {
      title: "بحري أم جوي؟ قرار الشحن يبدأ من طبيعة البضاعة",
      description: "قارن السرعة والحجم والمخاطر قبل اختيار وسيلة النقل، لا السعر وحده.",
      content: [
        "الشحن البحري هو الخيار الأكثر اقتصادية للشحنات الكبيرة والثقيلة، لكنه يستغرق وقتاً أطول.",
        "الشحن الجوي مثالي للشحنات العاجلة أو ذات القيمة العالية، لكنه مكلف نسبياً.",
        "يجب مراعاة طبيعة البضاعة: المنتجات القابلة للتلف قد تتطلب شحناً جوياً أو بحرياً مع حاويات مبردة.",
        "احسب التكلفة الإجمالية: الشحن + التأمين + الجمارك + التخزين، وليس سعر الشحن فقط.",
        "فكر في موسمية الشحن: الأسعار تختلف حسب الطلب الموسمي في طرق الشحن المختلفة."
      ]
    },
    en: {
      title: "Sea or air? Choose freight by cargo, not price alone",
      description: "Compare speed, volume, and risk before choosing a transport mode.",
      content: [
        "Sea freight is the most economical option for large and heavy shipments, but it takes longer.",
        "Air freight is ideal for urgent or high-value shipments, though it's relatively expensive.",
        "Consider the nature of the cargo: perishable products may require air freight or refrigerated sea containers.",
        "Calculate total cost: freight + insurance + customs + storage, not just freight cost.",
        "Think about seasonality: prices vary based on seasonal demand in different shipping modes."
      ]
    }
  },
  quality: {
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&q=85",
    ar: {
      title: "ما الذي يجب أن يتضمنه فحص ما قبل الشحن؟",
      description: "قائمة عملية للمواصفات والكمية والتغليف والتوثيق قبل مغادرة البضاعة.",
      content: [
        "فحص المواصفات: التأكد من أن المنتج يطابق المواصفات المتفق عليها بالتفصيل.",
        "فحص الكمية: التحقق من العدد الصحيح وعدد القطع في كل عبوة.",
        "فحص التغليف: التأكد من أن التغليف مناسب للشحن الدولي ويحمي المنتج.",
        "فحص المستندات: مراجعة الفاتورة وقائمة التعبئة وشهادة المنشأ.",
        "فحص العلامات: التأكد من أن جميع العلامات والشعارات صحيحة ومطلوبة."
      ]
    },
    en: {
      title: "What should a pre-shipment inspection cover?",
      description: "A practical checklist for specifications, quantity, packaging, and documentation.",
      content: [
        "Specification inspection: Ensure the product matches agreed specifications in detail.",
        "Quantity inspection: Verify the correct count and number of pieces per package.",
        "Packaging inspection: Ensure packaging is suitable for international shipping and protects the product.",
        "Documentation inspection: Review invoice, packing list, and certificate of origin.",
        "Labeling inspection: Ensure all labels and markings are correct and required."
      ]
    }
  },
  customs: {
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&q=85",
    ar: {
      title: "المستندات التي تمنع التأخير في الجمارك",
      description: "فهم الفاتورة وقائمة التعبئة ورمز HS يجعل التخليص أكثر قابلية للتوقع.",
      content: [
        "الفاتورة التجارية: يجب أن تتضمن وصفاً دقيقاً للمنتجات وقيمتها وبلد المنشأ.",
        "قائمة التعبئة: توضح كيفية تعبئة البضاعة ووزن كل عبوة.",
        "رمز HS: رمز موحد للمنتج يحدد الرسوم الجمركية والقيود.",
        "شهادة المنشأ: تثبت بلد تصنيع المنتج وقد تمنح امتيازات جمركية.",
        "رخص الاستيراد: بعض المنتجات تتطلب رخص خاصة مثل الأجهزة الإلكترونية أو المواد الكيميائية."
      ]
    },
    en: {
      title: "The documents that prevent customs delays",
      description: "Understanding invoices, packing lists, and HS codes makes clearance predictable.",
      content: [
        "Commercial invoice: Must include accurate product description, value, and country of origin.",
        "Packing list: Shows how cargo is packed and weight of each package.",
        "HS code: Unified product code that determines customs duties and restrictions.",
        "Certificate of origin: Proves country of manufacture and may grant customs privileges.",
        "Import licenses: Some products require special licenses like electronics or chemicals."
      ]
    }
  },
  warehousing: {
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=85",
    ar: {
      title: "متى يكون تجميع الموردين خياراً أفضل؟",
      description: "التجميع ليس دائماً الأرخص؛ هذه هي الأسئلة التي تحدد جدواه لشحنتك.",
      content: [
        "التجميع مفيد عندما يكون لديك طلبات من موردين متعددين في نفس المنطقة الجغرافية.",
        "احسب التكلفة: تكلفة التجميع مقابل تكلفة شحن كل طلب على حدة.",
        "فكر في الوقت: التجميع قد يضيف وقتاً إضافياً للعملية.",
        "تأكد من أن جميع المنتجات متوافقة مع بعضها من حيث متطلبات الشحن.",
        "التجميع يقلل من تعقيد الجمارك عند الوصول، حيث تتعامل مع شحنة واحدة بدلاً من عدة شحنات."
      ]
    },
    en: {
      title: "When does multi-supplier consolidation make sense?",
      description: "Consolidation is not always cheaper. These questions reveal when it works.",
      content: [
        "Consolidation is beneficial when you have orders from multiple suppliers in the same geographic area.",
        "Calculate the cost: consolidation cost versus shipping each order separately.",
        "Consider time: consolidation may add extra time to the process.",
        "Ensure all products are compatible in terms of shipping requirements.",
        "Consolidation reduces customs complexity upon arrival, dealing with one shipment instead of multiple shipments."
      ]
    }
  }
};

export default function BlogPostPage() {
  const params = useParams();
  const locale = useLocale();
  const ar = locale === "ar";
  const id = params.id as string;
  
  const post = blogPosts[id as keyof typeof blogPosts];
  const content = post ? (ar ? post.ar : post.en) : null;

  if (!post || !content) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-800 mb-4">المقال غير موجود</h1>
          <Link href={`/${locale}/blog`} className="text-blue-600 hover:underline">
            العودة إلى المدونة
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url('${post.image}')` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-slate-900/30" />
        <div className="absolute inset-0 flex items-end p-8">
          <div className="max-w-4xl mx-auto">
            <Link href={`/${locale}/blog`} className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors">
              <ArrowRight className={`w-4 h-4 ${ar ? 'rotate-180' : ''}`} />
              {ar ? "العودة للمدونة" : "Back to Blog"}
            </Link>
            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight">{content.title}</h1>
            <p className="text-xl text-white/80 mt-4">{content.description}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="flex items-center gap-6 text-sm text-slate-500 mb-8 pb-8 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{ar ? "فريق دينورا" : "Dinoora Team"}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date().toLocaleDateString(ar ? 'ar-SA' : 'en-US')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{ar ? "6 دقائق قراءة" : "6 min read"}</span>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            {content.content.map((paragraph, index) => (
              <p key={index} className="text-slate-700 leading-relaxed mb-6 text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200">
            <Link 
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-4 rounded-xl font-bold hover:shadow-lg transition-all"
            >
              <BookOpen className="w-5 h-5" />
              {ar ? "لديك استفسار؟ تواصل معنا" : "Have a question? Contact us"}
              <ArrowRight className={`w-5 h-5 ${ar ? 'rotate-180' : ''}`} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
