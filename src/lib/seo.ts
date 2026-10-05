import type { Metadata } from "next";
import { BASE_URL, LOCALES, getHreflangUrls, getCanonicalUrl, type Locale } from "./seo-config";

/**
 * Generate hreflang and canonical tags for multilingual SEO
 * @param pathname - The path without the locale prefix (e.g., "/about", "/services/sourcing", "" for homepage)
 * @param locale - The current locale
 * @returns Metadata alternates object with hreflang and canonical tags
 */
export function generateSEOMetadata(pathname: string, locale: string): Pick<Metadata, 'alternates'> {
  const hreflangUrls = getHreflangUrls(pathname);
  const canonicalUrl = getCanonicalUrl(pathname, locale as Locale);
  
  const alternates = {
    canonical: canonicalUrl,
    languages: hreflangUrls,
  };

  return { alternates };
}

/**
 * Get the pathname from the current page context
 * This should be called in generateMetadata with the page's path
 */
export function getPathname(path: string): string {
  // Remove leading slash if present
  return path.startsWith('/') ? path : `/${path}`;
}

/**
 * Page-specific SEO metadata configuration
 */
interface PageSEOConfig {
  ar: {
    title: string;
    description: string;
    keywords: string[];
  };
  en: {
    title: string;
    description: string;
    keywords: string[];
  };
}

const pageSEOConfigs: Record<string, PageSEOConfig> = {
  '/about': {
    ar: {
      title: "شركة لوجستيات متكاملة بين الصين والشرق الأوسط | دينورا",
      description: "دينورا هي شركة لوجستيات متكاملة بين الصين والشرق الأوسط. نقدم حلول استيراد شاملة من الصين للسعودية ودول الخليج مع توريد، فحص جودة، شحن، وتخليص جمركي.",
      keywords: [
        "شركة لوجستيات متكاملة", "استيراد من الصين للسعودية", "شركة استيراد صينية", "خدمات لوجستية", "شركة تجارة صينية", "استيراد بضائع من الصين", "شركة شحن دولية",
        "من نحن دينورا", "عن دينورا", "تاريخ دينورا", "فريق دينورا", "خبرة دينورا", "خدمات دينورا", "مهمة دينورا", "رؤية دينورا", "قيم دينورا",
        "شركة استيراد عربية", "شركة تجارة عربية", "شركة لوجستيات عربية", "فريق عربي صيني", "مديرو حسابات عرب", "فريق يتحدث العربية",
        "خبرة في الاستيراد من الصين", "سنوات خبرة في التجارة مع الصين", "فريق متخصص في الاستيراد", "خبراء الاستيراد من الصين",
        "شبكة موردين في الصين", "شبكة مصانع في الصين", "علاقات مع الموردين الصينيين", "شراكات مع المصانع الصينية",
        "خدمات التوريد من الصين", "البحث عن الموردين", "التفاوض مع الموردين", "إدارة العينات", "اختيار المصانع",
        "فحص الجودة في الصين", "مراقبة الجودة", "التفتيش في المصانع", "فحص قبل الشحن", "فحص أثناء الإنتاج",
        "التخزين في الصين", "مستودعات في الصين", "تجميع الشحنات", "خدمات التخزين", "إدارة المخزون",
        "الشحن من الصين", "شحن بحري", "شحن جوي", "شحن بري", "شحن الحاويات", "خدمات الشحن الدولي",
        "التخليص الجمركي", "خدمات الجمارك", "التخليص في السعودية", "التخليص في الإمارات", "التخليص في الكويت",
        "حماية الاستثمار", "ضمان الجودة", "حماية المدفوعات", "خدمات Escrow", "ضمان استرداد الأموال",
        "مقارنة الأسعار", "أفضل الأسعار من المصانع", "التفاوض على الأسعار", "توفير التكاليف",
        "تنفيذ سريع", "معالجة متوازية", "تسليم سريع", "كفاءة عالية", "إدارة الوقت",
        "خدمة العملاء", "دعم العملاء", "مدير حساب مخصص", "تواصل مستمر", "تحديثات دورية",
        "الشفافية في التجارة", "وضوح العمليات", "تتبع الشحنات", "تحديثات في الوقت الفعلي",
        "المسؤولية والملكية", "مالك واضح لكل مرحلة", "إدارة شاملة", "تنسيق كامل",
        "التحقق والتوثيق", "أدلة عملية", "صور فحص", "تقارير مفصلة", "توثيق القرارات",
        "الشراكة مع العملاء", "بناء الثقة", "علاقات طويلة الأمد", "نجاح متكرر",
        "العمليات في الصين", "التواجد في الصين", "فريق في الصين", "مكاتب في الصين",
        "الأسواق الصينية", "سوق ييوو", "سوق شنتشن", "سوق غوانزو", "سوق شنغهاي",
        "المدن الصناعية الصينية", "يوو", "نينغبو", "تشينغداو", "تيانجين", "فوشان",
        "الاستيراد للسعودية", "الاستيراد للإمارات", "الاستيراد للكويت", "الاستيرار لقطر", "الاستيرار للبحرين", "الاستيرار لعمان",
        "الاستيرار للعراق", "الاستيرار للسودان", "الاستيرار لليمن", "الاستيرار للمغرب", "الاستيرار للجزائر",
        "التجارة الدولية", "التجارة الخارجية", "سلسلة التوريد", "إدارة سلسلة التوريد", "اللوجستيات الدولية",
        "حلول الاستيراد", "خدمات استيراد متكاملة", "استيراد شامل", "استيراد من البداية للنهاية",
        "الاستيراد بدون وسيط", "استيرار مباشر", "توريد من المصنع", "شراء مباشر من المصنع",
        "الاستيراد للشركات", "استيرار للشركات الصغيرة", "استيرار للشركات المتوسطة", "استيرار للأفراد",
        "دليل الاستيراد", "كيفية الاستيراد", "خطوات الاستيراد", "نصائح الاستيراد", "إرشادات الاستيراد",
        "تجربة الاستيراد", "قصص نجاح الاستيراد", "دراسات حالة الاستيراد", "أمثلة الاستيراد",
        // Long-tail keywords for AI search and specific intents
        "كيف أستورد من الصين للمبتدئين", "دليل الاستيراد من الصين خطوة بخطوة", "أفضل شركات الاستيراد من الصين للسعودية", "تكلفة الاستيراد من الصين للسعودية 2024", "شركة استيراد من الصين تثق بها",
        "استيراد من الصين بدون رأس مال كبير", "استيراد من الصين بالجملة للمبتدئين", "كيف أجد موردين موثوقين في الصين", "شروط الاستيراد من الصين للسعودية", "الجمارك السعودية الاستيراد من الصين",
        "كم تكلفة شحن حاوية من الصين للسعودية", "أفضل طرق الشحن من الصين للسعودية", "شحن جوي من الصين للسعودية كم يستغرق", "شحن بحري من الصين للسعودية بالريال", "شركات الشحن من الصين للسعودية الموثوقة",
        "استيراد الإلكترونيات من الصين للسعودية", "استيراد الملابس من الصين بالجملة للسعودية", "استيراد الأثاث من الصين للسعودية", "استيراد السيارات من الصين للسعودية", "استيراد قطع الغيار من الصين للسعودية",
        "استيراد من الصين للإمارات بدون وسيط", "شركات الاستيراد في دبي", "استيراد من الصين للكويت شركات موثوقة", "استيراد من الصين لقطر للتجار", "استيراد من الصين للبحرين للمشاريع الصغيرة",
        "سوق ييوو الصيني كيف أتسوق", "سوق شنتشن للجملة كيف أصل", "أفضل أسواق الجملة في الصين للعرب", "التسوق من الصين أونلاين للسعودية", "مواقع التسوق من الصين للسعودية",
        "كيف أتأكد من جودة البضائع قبل الاستيراد", "شركة فحص جودة في الصين", "مفتش جودة في الصين بالعربية", "خدمات التفتيش قبل الشحن من الصين", "فحص العينات من الصين للسعودية",
        "التخزين في الصين للمستوردين العرب", "مستودعات في الصين لتجميع الشحنات", "خدمات التخزين والتجميع في ييوو", "كيف أجمع شحناتي من مصانع مختلفة", "تخزين البضائع في الصين قبل الشحن",
        "التخليص الجمركي في جدة للبضائع الصينية", "شركة تخليص جمركي في جدة", "رسوم الجمارك السعودية على البضائع الصينية", "كيف أحسب الجمارك من الصين للسعودية", "التخليص الجمركي في السعودية للمستوردين الجدد",
        "استيراد من الصين بالتقسيط", "شركات تمويل الاستيراد من الصين", "استيراد من الصين بالدفع عند الاستلام", "تمويل التجارة من الصين للسعودية", "شركات تمويل الاستيراد في السعودية",
        "مخاطر الاستيراد من الصين وكيفية تجنبها", "نصائح للاستيراد من الصين بأمان", "كيف أتجنب الغش من الموردين الصينيين", "حقوق المستورد من الصين في السعودية", "قوانين الاستيراد من الصين للسعودية",
        "أفضل منتجات للاستيراد من الصين 2024", "منتجات مربحة للاستيراد من الصين", "ماذا أستورد من الصين للبيع", "أكثر المنتجات طلباً للاستيراد من الصين", "أفكار مشاريع استيراد من الصين",
        "استيراد من الصين للتجارة الإلكترونية", "استيراد من الصين لسوق أمازون السعودية", "استيراد من الصين لنون السعودية", "استيراد من الصين للتجارة الإلكترونية في السعودية", "دروبشيبينغ من الصين للسعودية",
        "شركات استيراد من الصين بالرياض", "شركات استيراد من الصين في جدة", "شركات استيراد من الصين في الدمام", "شركات استيراد من الصين في مكة", "شركات استيراد من الصين في المدينة",
        "استيراد من الصين للمشاريع الصغيرة", "استيراد من الصين للشركات الناشئة", "كيف أبدأ مشروع استيراد من الصين", "رأس المال المطلوب للاستيراد من الصين", "خطوات فتح شركة استيراد في السعودية",
        "استيراد المواد الخام من الصين", "استيراد الآلات والمعدات من الصين", "استيراد المواد الغذائية من الصين", "استيراد الأدوية من الصين", "استيراد المستحضرات التجميلية من الصين",
        "استيراد من الصين للسودان 2024", "استيراد من الصين للمغرب", "استيراد من الصين للجزائر", "استيراد من الصين لمصر", "استيراد من الصين للعراق",
        "شركة استيراد من الصين تتحدث العربية", "وسيط تجاري صيني بالعربية", "مترجم تجاري صيني عربي", "شركة استيراد صينية في السعودية", "مكتب تمثيل تجاري في الصين",
        "كيف أتفاوض مع الموردين الصينيين", "نصائح التفاوض مع الموردين في الصين", "كيف أحصل على أفضل الأسعار من الصين", "استراتيجيات التفاوض مع الموردين الصينيين", "كيف أتجنب الاحتيال في التفاوض",
        "استيراد من الصين بالعملات الرقمية", "الدفع بالبيتكوين للاستيراد من الصين", "طرق الدفع الآمنة من الصين", "تحويل الأموال من السعودية للصين", "بنوك التحويل للصين من السعودية",
        "التأمين على الشحنات من الصين", "شركات تأمين الشحن الدولي", "كيف أؤمن بضاعتي المستوردة", "تأمين البضائع أثناء الشحن من الصين", "تعويض الشحنات التالفة من الصين",
        "استيراد من الصين خلال عيد الربيع", "استيراد من الصين في موسم الأعياد", "تأثير العطل الصينية على الاستيراد", "مواعيد العطل الصينية 2024 للمستوردين", "كيف أخطط للاستيراد مع العطل الصينية",
        "استيراد من الصين بالحاويات المشتركة", "شحن LCL من الصين للسعودية", "شحن FCL من الصين للسعودية", "كيف أملأ حاوية من الصين", "تكلفة الحاوية الكاملة من الصين",
        "استيراد من الصين للمصانع", "استيراد خطوط الإنتاج من الصين", "استيراد المعدات الثقيلة من الصين", "استيراد الآلات الصناعية من الصين", "استيراد التكنولوجيا من الصين",
      ],
    },
    en: {
      title: "Integrated Logistics Company Between China and Middle East | Dinoora",
      description: "Dinoora is an integrated logistics company between China and the Middle East. We offer comprehensive import solutions from China to Saudi Arabia and Gulf countries with sourcing, quality inspection, shipping, and customs clearance.",
      keywords: [
        "integrated logistics company", "import from China to Saudi Arabia", "Chinese import company", "logistics services", "Chinese trading company", "import goods from China", "international shipping company",
        "about Dinoora", "who we are Dinoora", "Dinoora history", "Dinoora team", "Dinoora experience", "Dinoora services", "Dinoora mission", "Dinoora vision", "Dinoora values",
        "Arab import company", "Arab trading company", "Arab logistics company", "Arabic Chinese team", "Arab account managers", "Arabic speaking team",
        "experience importing from China", "years of experience trading with China", "import specialists", "China import experts",
        "supplier network in China", "factory network in China", "relationships with Chinese suppliers", "partnerships with Chinese factories",
        "sourcing services from China", "finding suppliers", "negotiating with suppliers", "sample management", "factory selection",
        "quality inspection in China", "quality control", "factory inspection", "pre-shipment inspection", "during production inspection",
        "warehousing in China", "warehouses in China", "shipment consolidation", "storage services", "inventory management",
        "shipping from China", "sea shipping", "air shipping", "land shipping", "container shipping", "international shipping services",
        "customs clearance", "customs services", "clearance in Saudi Arabia", "clearance in UAE", "clearance in Kuwait",
        "investment protection", "quality assurance", "payment protection", "Escrow services", "money back guarantee",
        "price comparison", "best factory prices", "price negotiation", "cost savings",
        "fast execution", "parallel processing", "fast delivery", "high efficiency", "time management",
        "customer service", "customer support", "dedicated account manager", "continuous communication", "regular updates",
        "transparency in trade", "process clarity", "shipment tracking", "real-time updates",
        "responsibility and ownership", "clear owner for each stage", "comprehensive management", "full coordination",
        "verification and documentation", "practical evidence", "inspection photos", "detailed reports", "decision documentation",
        "partnership with clients", "building trust", "long-term relationships", "repeated success",
        "operations in China", "presence in China", "team in China", "offices in China",
        "Chinese markets", "Yiwu market", "Shenzhen market", "Guangzhou market", "Shanghai market",
        "Chinese industrial cities", "Yiwu", "Ningbo", "Qingdao", "Tianjin", "Foshan",
        "import to Saudi Arabia", "import to UAE", "import to Kuwait", "import to Qatar", "import to Bahrain", "import to Oman",
        "import to Iraq", "import to Sudan", "import to Yemen", "import to Morocco", "import to Algeria",
        "international trade", "foreign trade", "supply chain", "supply chain management", "international logistics",
        "import solutions", "comprehensive import services", "full import service", "end-to-end import",
        "import without intermediary", "direct import", "factory sourcing", "direct factory purchase",
        "import for companies", "import for small companies", "import for medium companies", "import for individuals",
        "import guide", "how to import", "import steps", "import tips", "import guidelines",
        "import experience", "import success stories", "import case studies", "import examples",
        // Long-tail keywords for AI search and specific intents
        "how to import from China for beginners", "step by step guide to import from China", "best import companies from China to Saudi Arabia", "cost of importing from China to Saudi Arabia 2024", "trusted import company from China",
        "import from China without large capital", "wholesale import from China for beginners", "how to find reliable suppliers in China", "requirements for importing from China to Saudi Arabia", "Saudi customs import from China",
        "how much does it cost to ship a container from China to Saudi Arabia", "best shipping methods from China to Saudi Arabia", "air freight from China to Saudi Arabia how long", "sea freight from China to Saudi Arabia in SAR", "reliable shipping companies from China to Saudi Arabia",
        "import electronics from China to Saudi Arabia", "wholesale clothing import from China to Saudi Arabia", "import furniture from China to Saudi Arabia", "import cars from China to Saudi Arabia", "import spare parts from China to Saudi Arabia",
        "import from China to UAE without intermediary", "import companies in Dubai", "reliable import companies from China to Kuwait", "import from China to Qatar for traders", "import from China to Bahrain for small businesses",
        "how to shop in Yiwu market China", "how to get to Shenzhen wholesale market", "best wholesale markets in China for Arabs", "online shopping from China to Saudi Arabia", "websites for shopping from China to Saudi Arabia",
        "how to verify goods quality before importing", "quality inspection company in China", "Arabic quality inspector in China", "pre-shipment inspection services from China", "sample inspection from China to Saudi Arabia",
        "storage in China for Arab importers", "warehouses in China for shipment consolidation", "storage and consolidation services in Yiwu", "how to consolidate shipments from different factories", "goods storage in China before shipping",
        "customs clearance in Jeddah for Chinese goods", "customs clearance company in Jeddah", "Saudi customs duties on Chinese goods", "how to calculate customs from China to Saudi Arabia", "customs clearance in Saudi Arabia for new importers",
        "import from China on installment", "financing companies for import from China", "import from China with payment on delivery", "trade financing from China to Saudi Arabia", "import financing companies in Saudi Arabia",
        "risks of importing from China and how to avoid them", "tips for safe import from China", "how to avoid fraud from Chinese suppliers", "rights of importer from China in Saudi Arabia", "laws for importing from China to Saudi Arabia",
        "best products to import from China 2024", "profitable products to import from China", "what to import from China for sale", "most demanded products for import from China", "import business ideas from China",
        "import from China for e-commerce", "import from China for Amazon Saudi Arabia", "import from China for Noon Saudi Arabia", "import from China for e-commerce in Saudi Arabia", "dropshipping from China to Saudi Arabia",
        "import companies from China in Riyadh", "import companies from China in Jeddah", "import companies from China in Dammam", "import companies from China in Makkah", "import companies from China in Madinah",
        "import from China for small businesses", "import from China for startups", "how to start import business from China", "capital required to import from China", "steps to open import company in Saudi Arabia",
        "import raw materials from China", "import machinery and equipment from China", "import food products from China", "import medicines from China", "import cosmetics from China",
        "import from China to Sudan 2024", "import from China to Morocco", "import from China to Algeria", "import from China to Egypt", "import from China to Iraq",
        "Arabic speaking import company from China", "Chinese trading broker in Arabic", "Chinese Arabic trade translator", "Chinese import company in Saudi Arabia", "trade representation office in China",
        "how to negotiate with Chinese suppliers", "tips for negotiating with suppliers in China", "how to get best prices from China", "negotiation strategies with Chinese suppliers", "how to avoid fraud in negotiation",
        "import from China with cryptocurrency", "pay with Bitcoin for import from China", "secure payment methods from China", "money transfer from Saudi Arabia to China", "remittance banks for China from Saudi Arabia",
        "insurance for shipments from China", "international shipping insurance companies", "how to insure imported goods", "insurance for goods during shipping from China", "compensation for damaged shipments from China",
        "import from China during Chinese New Year", "import from China during holiday seasons", "impact of Chinese holidays on import", "Chinese holidays 2024 for importers", "how to plan import with Chinese holidays",
        "import from China with shared containers", "LCL shipping from China to Saudi Arabia", "FCL shipping from China to Saudi Arabia", "how to fill a container from China", "cost of full container from China",
        "import from China for factories", "import production lines from China", "import heavy equipment from China", "import industrial machinery from China", "import technology from China",
      ],
    },
  },
  '/blog': {
    ar: {
      title: "مركز المعرفة - دليل الاستيراد من الصين | دينورا",
      description: "مركز المعرفة لدينورا يوفر أدلة عملية شاملة عن الاستيراد من الصين، التوريد، فحص الجودة، الشحن، والتخليص الجمركي للمستوردين العرب.",
      keywords: ["دليل الاستيراد من الصين", "كيفية الاستيراد من الصين", "نصائح الاستيراد from China", "استيراد البضائع", "التجارة مع الصين", "شركة استيراد صينية"],
    },
    en: {
      title: "Knowledge Center - Import from China Guide | Dinoora",
      description: "Dinoora Knowledge Center provides comprehensive practical guides on importing from China, sourcing, quality inspection, shipping, and customs clearance for Arab importers.",
      keywords: ["import from China guide", "how to import from China", "import tips from China", "importing goods", "trading with China", "Chinese import company"],
    },
  },
  '/faq': {
    ar: {
      title: "الأسئلة الشائعة عن الاستيراد من الصين | دينورا",
      description: "إجابات شاملة على أهم الأسئلة حول الاستيراد من الصين، التكاليف، الشحن، الجمارك، وكيفية البدء في مشروع الاستيراد. دليلك الكامل للاستيراد من الصين.",
      keywords: [
        "الأسئلة الشائعة الاستيراد من الصين", "كيف أستورد من الصين", "تكلفة الاستيراد من الصين", "شروط الاستيراد من الصين للسعودية", "كم تكلفة شحن من الصين",
        "أفضل طرق الشحن من الصين", "كيف أجد موردين في الصين", "الجمارك السعودية الاستيراد من الصين", "استيراد من الصين للمبتدئين", "خدمات الاستيراد من الصين",
        "كيف أحسب الجمارك من الصين", "استيراد بدون وسيط من الصين", "أفضل منتجات للاستيراد من الصين", "وقت الشحن من الصين للسعودية", "فحص جودة البضائع من الصين",
        "مخاطر الاستيراد من الصين", "استيراد من الصين للتجارة الإلكترونية", "تمويل الاستيراد من الصين", "كيف أبدأ مشروع استيراد", "شركة استيراد من الصين موثوقة",
        "استيراد من الصين بالجملة", "استيراد من الصين بالتقسيط", "استيراد الإلكترونيات من الصين", "استيراد الملابس من الصين", "استيراد الأثاث من الصين",
        "سوق ييوو الصيني", "سوق شنتشن للجملة", "شركات الشحن من الصين", "التخليص الجمركي في جدة", "التخزين في الصين للمستوردين",
      ],
    },
    en: {
      title: "FAQ - Import from China Questions | Dinoora",
      description: "Comprehensive answers to the most important questions about importing from China, costs, shipping, customs, and how to start an import business. Your complete guide to importing from China.",
      keywords: [
        "FAQ import from China", "how to import from China", "cost of importing from China", "requirements for importing from China to Saudi Arabia", "shipping cost from China",
        "best shipping methods from China", "how to find suppliers in China", "Saudi customs import from China", "import from China for beginners", "import services from China",
        "how to calculate customs from China", "import from China without intermediary", "best products to import from China", "shipping time from China to Saudi Arabia", "quality inspection from China",
        "risks of importing from China", "import from China for e-commerce", "financing import from China", "how to start import business", "trusted import company from China",
        "wholesale import from China", "import from China on installment", "import electronics from China", "import clothing from China", "import furniture from China",
        "Yiwu market China", "Shenzhen wholesale market", "shipping companies from China", "customs clearance in Jeddah", "storage in China for importers",
      ],
    },
  },
  '/guide/how-to-import-from-china': {
    ar: {
      title: "دليل شامل: كيفية الاستيراد من الصين خطوة بخطوة | دينورا",
      description: "دليل تفصيلي للاستيراد من الصين للمبتدئين. تعلم خطوات الاستيراد من البحث عن الموردين إلى التخليص الجمركي مع نصائح عملية وأدوات مجانية.",
      keywords: [
        "كيفية الاستيراد من الصين خطوة بخطوة", "دليل الاستيراد من الصين للمبتدئين", "تعلم الاستيراد من الصين", "خطوات الاستيراد من الصين", "طريقة الاستيراد من الصين",
        "استيراد من الصين بالتفصيل", "دليل شامل للاستيراد من الصين", "كيف أبدأ الاستيراد من الصين", "تعليمات الاستيراد من الصين", "إرشادات الاستيراد من الصين",
        "الاستيراد من الصين للمشاريع الصغيرة", "الاستيراد من الصين للشركات الناشئة", "الاستيراد من الصين للأفراد", "الاستيراد من الصين بدون خبرة", "الاستيراد من الصين من الصفر",
        "خطوات البحث عن موردين في الصين", "كيف أجد مورد صيني موثوق", "التفاوض مع الموردين الصينيين", "طلب عينات من الصين", "فحص جودة البضائع من الصين",
        "اختيار طريقة الشحن المناسبة", "الشحن البحري من الصين للسعودية", "الشحن الجوي من الصين للسعودية", "شحن الحاويات من الصين", "شحن LCL و FCL من الصين",
        "التخليص الجمركي في السعودية خطوات", "كيف أخلي جمارك البضائع من الصين", "منصة فسح الجمركية السعودية", "الجمارك السعودية الاستيراد", "إجراءات التخليص الجمركي",
        "أدوات الاستيراد من الصين", "منصات البحث عن الموردين", "Alibaba الاستيراد من الصين", "Made-in-China الاستيراد", "سوق ييوو للاستيراد",
        "نصائح للاستيراد من الصين بأمان", "تجنب الغش في الاستيراد من الصين", "شروط الاستيراد من الصين 2024", "قوانين الاستيراد من الصين", "متطلبات الاستيراد من الصين",
        "تكلفة الاستيراد من الصين بالتفصيل", "حساب تكلفة الاستيراد من الصين", "تقدير تكلفة الشحن من الصين", "تكلفة الجمارك من الصين", "التكلفة الإجمالية للاستيراد",
        "مدة الاستيراد من الصين", "كم يستغرق الاستيراد من الصين", "زمن الشحن من الصين للسعودية", "الجدول الزمني للاستيراد من الصين", "تخطيط الاستيراد من الصين",
      ],
    },
    en: {
      title: "Complete Guide: How to Import from China Step by Step | Dinoora",
      description: "Detailed guide for beginners on importing from China. Learn import steps from finding suppliers to customs clearance with practical tips and free tools.",
      keywords: [
        "how to import from China step by step", "import from China guide for beginners", "learn importing from China", "import steps from China", "method of importing from China",
        "import from China in detail", "comprehensive guide to import from China", "how to start importing from China", "import instructions from China", "import guidelines from China",
        "import from China for small businesses", "import from China for startups", "import from China for individuals", "import from China without experience", "import from China from scratch",
        "steps to find suppliers in China", "how to find reliable Chinese supplier", "negotiating with Chinese suppliers", "requesting samples from China", "quality inspection from China",
        "choosing appropriate shipping method", "sea freight from China to Saudi Arabia", "air freight from China to Saudi Arabia", "container shipping from China", "LCL and FCL shipping from China",
        "customs clearance steps in Saudi Arabia", "how to clear customs from China", "Saudi customs clearance platform", "Saudi customs import", "customs clearance procedures",
        "import tools from China", "supplier search platforms", "import from China Alibaba", "import from China Made-in-China", "import from Yiwu market",
        "tips for safe import from China", "avoid fraud in import from China", "import requirements from China 2024", "import laws from China", "import requirements from China",
        "import cost from China in detail", "calculate import cost from China", "estimate shipping cost from China", "customs cost from China", "total import cost",
        "import duration from China", "how long does import from China take", "shipping time from China to Saudi Arabia", "import timeline from China", "import planning from China",
      ],
    },
  },
  '/products/electronics-import': {
    ar: {
      title: "استيراد الإلكترونيات من الصين للسعودية | دينورا",
      description: "خدمات متكاملة لاستيراد الهواتف، الحواسيب، الأجهزة المنزلية من الصين للسعودية ودول الخليج. توريد، فحص جودة، شحن، وتخليص جمركي.",
      keywords: [
        "استيراد الإلكترونيات من الصين", "استيراد الهواتف من الصين", "استيراد الحواسيب من الصين", "استيراد الأجهزة المنزلية من الصين",
        "استيراد الإلكترونيات للسعودية", "استيراد الإلكترونيات للإمارات", "استيراد الإلكترونيات للكويت", "استيراد الإلكترونيات لقطر",
        "شركة استيراد إلكترونيات", "توريد الإلكترونيات من الصين", "شحن الإلكترونيات من الصين", "فحص جودة الإلكترونيات",
        "استيراد الهواتف الذكية من الصين", "استيراد التابلت من الصين", "استيراد اللابتوب من الصين", "استيراد السماعات من الصين",
        "استيراد الشواحن من الصين", "استيراد الكابلات من الصين", "استيراد الكاميرات من الصين", "استيراد الأجهزة الصوتية من الصين",
        "استيراد الإلكترونيات بالجملة", "استيراد الإلكترونيات للمتاجر", "استيراد الإلكترونيات للتجارة الإلكترونية",
        "أفضل شركات استيراد الإلكترونيات", "شركة استيراد إلكترونيات موثوقة", "استيراد إلكترونيات أونلاين",
      ],
    },
    en: {
      title: "Import Electronics from China to Saudi Arabia | Dinoora",
      description: "Integrated services for importing phones, computers, home appliances from China to Saudi Arabia and Gulf countries. Sourcing, quality inspection, shipping, customs clearance.",
      keywords: [
        "import electronics from China", "import phones from China", "import computers from China", "import home appliances from China",
        "import electronics to Saudi Arabia", "import electronics to UAE", "import electronics to Kuwait", "import electronics to Qatar",
        "electronics import company", "sourcing electronics from China", "shipping electronics from China", "quality inspection electronics",
        "import smartphones from China", "import tablets from China", "import laptops from China", "import headphones from China",
        "import chargers from China", "import cables from China", "import cameras from China", "import audio equipment from China",
        "wholesale electronics import", "import electronics for stores", "import electronics for e-commerce",
        "best electronics import companies", "trusted electronics import company", "online electronics import",
      ],
    },
  },
  '/products/clothing-import': {
    ar: {
      title: "استيراد الملابس من الصين للسعودية | دينورا",
      description: "خدمات متكاملة لاستيراد الملابس الجاهزة، الأقمشة، والإكسسوارات من الصين للسعودية ودول الخليج بالجملة.",
      keywords: [
        "استيراد الملابس من الصين", "استيراد الملابس الجاهزة من الصين", "استيراد الأقمشة من الصين", "استيراد الإكسسوارات من الصين",
        "استيراد الملابس للسعودية", "استيراد الملابس للإمارات", "استيراد الملابس للكويت", "استيراد الملابس لقطر",
        "شركة استيراد ملابس", "توريد الملابس من الصين", "شحن الملابس من الصين", "فحص جودة الملابس",
        "استيراد الملابس الرجالية من الصين", "استيراد الملابس النسائية من الصين", "استيراد ملابس الأطفال من الصين", "استيراد الملابس الرياضية من الصين",
        "استيراد الأحذية من الصين", "استيراد الحقائب من الصين", "استيراد الأحزمة من الصين", "استيراد الملابس الداخلية من الصين",
        "استيراد الملابس بالجملة", "استيراد الملابس للمتاجر", "استيراد الملابس للتجارة الإلكترونية",
        "أفضل شركات استيراد الملابس", "شركة استيراد ملابس موثوقة", "استيراد ملابس أونلاين",
      ],
    },
    en: {
      title: "Import Clothing from China to Saudi Arabia | Dinoora",
      description: "Integrated services for importing ready-made clothing, fabrics, and accessories from China to Saudi Arabia and Gulf countries wholesale.",
      keywords: [
        "import clothing from China", "import ready-made clothing from China", "import fabrics from China", "import accessories from China",
        "import clothing to Saudi Arabia", "import clothing to UAE", "import clothing to Kuwait", "import clothing to Qatar",
        "clothing import company", "sourcing clothing from China", "shipping clothing from China", "quality inspection clothing",
        "import men's clothing from China", "import women's clothing from China", "import children's clothing from China", "import sports clothing from China",
        "import shoes from China", "import bags from China", "import belts from China", "import underwear from China",
        "wholesale clothing import", "import clothing for stores", "import clothing for e-commerce",
        "best clothing import companies", "trusted clothing import company", "online clothing import",
      ],
    },
  },
  '/products/solar-energy-import': {
    ar: {
      title: "استيراد الطاقة الشمسية من الصين للسعودية | دينورا",
      description: "خدمات متكاملة لاستيراد الألواح الشمسية، الإنفرترات، البطاريات من الصين للسعودية ودول الخليج.",
      keywords: [
        "استيراد الطاقة الشمسية من الصين", "استيراد الألواح الشمسية من الصين", "استيراد الإنفرترات من الصين", "استيراد البطاريات الشمسية من الصين",
        "استيراد الطاقة الشمسية للسعودية", "استيراد الطاقة الشمسية للإمارات", "استيراد الطاقة الشمسية للكويت", "استيراد الطاقة الشمسية لقطر",
        "شركة استيراد طاقة شمسية", "توريد الطاقة الشمسية من الصين", "شحن الطاقة الشمسية من الصين", "فحص جودة الطاقة الشمسية",
        "استيراد الألواح الشمسية بالجملة", "استيراد الإنفرترات الشمسية", "استيراد بطاريات الليثيوم من الصين", "استيراد أنظمة الطاقة الشمسية",
        "استيراد مضخات الطاقة الشمسية", "استيراد الإضاءة الشمسية", "استيراد كابلات الطاقة الشمسية", "استيراد هياكل الطاقة الشمسية",
        "استيراد الطاقة المتجددة من الصين", "استيراد معدات الطاقة الشمسية", "استيراد أنظمة الطاقة الشمسية للمشاريع",
        "أفضل شركات استيراد الطاقة الشمسية", "شركة استيراد طاقة شمسية موثوقة", "استيراد طاقة شمسية أونلاين",
      ],
    },
    en: {
      title: "Import Solar Energy from China to Saudi Arabia | Dinoora",
      description: "Integrated services for importing solar panels, inverters, batteries from China to Saudi Arabia and Gulf countries.",
      keywords: [
        "import solar energy from China", "import solar panels from China", "import inverters from China", "import solar batteries from China",
        "import solar energy to Saudi Arabia", "import solar energy to UAE", "import solar energy to Kuwait", "import solar energy to Qatar",
        "solar energy import company", "sourcing solar energy from China", "shipping solar energy from China", "quality inspection solar energy",
        "wholesale solar panels import", "import solar inverters", "import lithium batteries from China", "import solar energy systems",
        "import solar pumps from China", "import solar lighting", "import solar cables", "import solar structures",
        "import renewable energy from China", "import solar energy equipment", "import solar energy systems for projects",
        "best solar energy import companies", "trusted solar energy import company", "online solar energy import",
      ],
    },
  },
  '/countries/saudi-arabia': {
    ar: {
      title: "استيراد من الصين للسعودية | دينورا - التخليص الجمركي في جدة والدمام والرياض",
      description: "خدمات متكاملة للاستيراد من الصين للسعودية مع التخليص الجمركي في جدة، الدمام، والرياض. توريد، فحص جودة، شحن، وتخليص جمركي.",
      keywords: [
        "استيراد من الصين للسعودية", "التخليص الجمركي في جدة", "التخليص الجمركي في الدمام", "التخليص الجمركي في الرياض",
        "شركات استيراد من الصين للسعودية", "شركة استيراد من الصين موثوقة", "استيراد من الصين للرياض", "استيراد من الصين لجدة",
        "استيراد من الصين للدمام", "استيراد من الصين لمكة", "استيراد من الصين للمدينة", "استيراد من الصين للقصيم",
        "شركات الشحن من الصين للسعودية", "شحن من الصين لجدة", "شحن من الصين للدمام", "شحن من الصين للرياض",
        "الجمارك السعودية الاستيراد من الصين", "منصة فسح الجمركية السعودية", "رسوم الجمارك السعودية", "ضريبة القيمة المضافة السعودية",
        "شركات التخليص الجمركي في السعودية", "شركة تخليص جمركي في جدة", "شركة تخليص جمركي في الدمام", "شركة تخليص جمركي في الرياض",
        "استيراد من الصين بدون وسيط للسعودية", "استيراد من الصين بالجملة للسعودية", "استيراد من الصين للمشاريع الصغيرة في السعودية",
        "شركات استيراد من الصين بالرياض", "شركات استيراد من الصين في جدة", "شركات استيراد من الصين في الدمام",
        "استيراد الإلكترونيات من الصين للسعودية", "استيراد الملابس من الصين للسعودية", "استيراد الأثاث من الصين للسعودية",
      ],
    },
    en: {
      title: "Import from China to Saudi Arabia | Dinoora - Customs Clearance in Jeddah, Dammam, Riyadh",
      description: "Integrated services for importing from China to Saudi Arabia with customs clearance in Jeddah, Dammam, and Riyadh. Sourcing, quality inspection, shipping, customs clearance.",
      keywords: [
        "import from China to Saudi Arabia", "customs clearance in Jeddah", "customs clearance in Dammam", "customs clearance in Riyadh",
        "import companies from China to Saudi Arabia", "trusted import company from China", "import from China to Riyadh", "import from China to Jeddah",
        "import from China to Dammam", "import from China to Mecca", "import from China to Medina", "import from China to Qassim",
        "shipping companies from China to Saudi Arabia", "shipping from China to Jeddah", "shipping from China to Dammam", "shipping from China to Riyadh",
        "Saudi customs import from China", "Saudi customs clearance platform", "Saudi customs fees", "Saudi VAT",
        "customs clearance companies in Saudi Arabia", "customs clearance company in Jeddah", "customs clearance company in Dammam", "customs clearance company in Riyadh",
        "import from China without intermediary to Saudi Arabia", "wholesale import from China to Saudi Arabia", "import from China for small businesses in Saudi Arabia",
        "import companies from China in Riyadh", "import companies from China in Jeddah", "import companies from China in Dammam",
        "import electronics from China to Saudi Arabia", "import clothing from China to Saudi Arabia", "import furniture from China to Saudi Arabia",
      ],
    },
  },
  '/comparison/china-vs-sourcing': {
    ar: {
      title: "مقارنة الاستيراد من الصين مقابل خيارات التوريد الأخرى | دينورا",
      description: "مقارنة شاملة بين الاستيراد من الصين وخيارات التوريد الأخرى مثل التوريد المحلي، التوريد من أوروبا، والتوريد من جنوب شرق آسيا.",
      keywords: [
        "مقارنة الاستيراد من الصين", "الاستيراد من الصين مقابل التوريد المحلي", "الاستيراد من الصين مقابل أوروبا", "الاستيراد من الصين مقابل جنوب شرق آسيا",
        "أفضل خيار للاستيراد", "مقارنة أسعار الاستيراد", "مقارنة جودة الاستيراد", "مقارنة طرق التوريد",
        "لماذا أستورد من الصين", "مزايا الاستيراد من الصين", "عيوب الاستيراد من الصين", "بديل الاستيراد من الصين",
        "التوريد من الصين مقابل الهند", "التوريد من الصين مقابل فيتنام", "التوريد من الصين مقابل تايلاند", "التوريد من الصين مقابل تركيا",
        "تكلفة الاستيراد من الصين مقابل المحلي", "جودة المنتجات الصينية مقابل الأوروبية", "شحن من الصين مقابل الشحن المحلي",
        "مقارنة شركات الاستيراد", "اختيار مصدر التوريد المناسب", "تحليل خيارات الاستيراد", "دليل مقارنة الاستيراد",
      ],
    },
    en: {
      title: "Import from China vs Other Sourcing Options Comparison | Dinoora",
      description: "Comprehensive comparison between importing from China and other sourcing options like local sourcing, European sourcing, and Southeast Asia sourcing.",
      keywords: [
        "import from China comparison", "import from China vs local sourcing", "import from China vs Europe", "import from China vs Southeast Asia",
        "best import option", "import price comparison", "import quality comparison", "sourcing methods comparison",
        "why import from China", "advantages of importing from China", "disadvantages of importing from China", "alternatives to importing from China",
        "sourcing from China vs India", "sourcing from China vs Vietnam", "sourcing from China vs Thailand", "sourcing from China vs Turkey",
        "cost of importing from China vs local", "Chinese products quality vs European", "shipping from China vs local shipping",
        "import companies comparison", "choosing the right sourcing option", "import options analysis", "import comparison guide",
      ],
    },
  },
  '/services/sourcing': {
    ar: {
      title: "كيف أجد مورد موثوق في الصين لاستيراد المنتجات | دينورا",
      description: "أفضل شركة توريد منتجات من الصين للسعودية. نساعدك في كيفية إيجاد مورد موثوق في الصين لاستيراد المنتجات بأسعار منافسة وجودة مضمونة.",
      keywords: [
        "كيف أجد مورد موثوق في الصين", "أفضل شركة توريد منتجات من الصين", "شركة توريد صينية", "مورد صيني موثوق", "توريد من الصين", "استيراد بالجملة", "شركة توريد للسعودية",
        "البحث عن الموردين في الصين", "إيجاد موردين صينيين", "اختيار مورد صيني", "تقييم الموردين", "التحقق من الموردين", "فحص المصانع",
        "خدمات التوريد من الصين", "شركة توريد عربية", "شركة توريد للشرق الأوسط", "وسيط تجاري صيني", "وكيل شراء من الصين",
        "استيراد من المصنع", "شراء مباشر من المصنع", "توريد من المصنع", "التعامل مع المصانع الصينية",
        "التفاوض مع الموردين", "التفاوض على الأسعار", "اتفاقيات الشراء", "عقود التوريد", "شروط الدفع",
        "إدارة العينات", "طلب عينات من الصين", "فحص العينات", "موافقة العينات", "إنتاج العينات",
        "مراقبة الإنتاج", "متابعة الإنتاج", "فحص أثناء الإنتاج", "جداول الإنتاج", "مراقبة الجودة",
        "توريد المنتجات", "توريد البضائع", "توريد المواد الخام", "توريد المكونات", "توريد الأجزاء",
        "توريد الملابس من الصين", "توريد الإلكترونيات من الصين", "توريد الأثاث من الصين", "توريد الأدوات من الصين",
        "توريد قطع الغيار من الصين", "توريد الطاقة الشمسية من الصين", "توريد الأجهزة المنزلية من الصين",
        "سوق ييوو", "سوق شنتشن", "سوق غوانزو", "أسواق الجملة الصينية", "معارض الصين",
        "استيراد للسعودية", "استيرار للإمارات", "استيرار للكويت", "استيرار لقطر", "استيرار للبحرين",
        "شركة توريد للرياض", "شركة توريد لجدة", "شركة توريد للدمام", "شركة توريد للدوحة",
        "استيراد بدون وسيط", "استيرار مباشر", "توريد مباشر", "شراء مباشر", "تجارة مباشرة",
        "أفضل الأسعار من الصين", "أسعار المصانع", "أسعار الجملة", "أسعار تنافسية", "توفير التكاليف",
        "جودة مضمونة", "ضمان الجودة", "مراقبة الجودة", "فحص الجودة", "معايير الجودة",
        "خدمات توريد متكاملة", "حلول التوريد", "إدارة التوريد", "استراتيجيات التوريد",
      ],
    },
    en: {
      title: "How to Find Reliable Supplier in China for Import | Dinoora",
      description: "Best sourcing company for products from China to Saudi Arabia. We help you find a reliable supplier in China for importing products at competitive prices with guaranteed quality.",
      keywords: [
        "how to find reliable supplier in China", "best sourcing company from China", "Chinese sourcing company", "reliable Chinese supplier", "sourcing from China", "wholesale import", "sourcing company for Saudi Arabia",
        "finding suppliers in China", "locating Chinese suppliers", "selecting Chinese supplier", "evaluating suppliers", "verifying suppliers", "factory inspection",
        "sourcing services from China", "Arab sourcing company", "sourcing company for Middle East", "Chinese trading broker", "buying agent from China",
        "import from factory", "direct factory purchase", "factory sourcing", "dealing with Chinese factories",
        "negotiating with suppliers", "price negotiation", "purchase agreements", "sourcing contracts", "payment terms",
        "sample management", "requesting samples from China", "sample inspection", "sample approval", "sample production",
        "production monitoring", "production follow-up", "during production inspection", "production schedules", "quality control",
        "product sourcing", "goods sourcing", "raw material sourcing", "component sourcing", "parts sourcing",
        "clothing sourcing from China", "electronics sourcing from China", "furniture sourcing from China", "tools sourcing from China",
        "spare parts sourcing from China", "solar energy sourcing from China", "home appliances sourcing from China",
        "Yiwu market", "Shenzhen market", "Guangzhou market", "Chinese wholesale markets", "China trade shows",
        "import to Saudi Arabia", "import to UAE", "import to Kuwait", "import to Qatar", "import to Bahrain",
        "sourcing company for Riyadh", "sourcing company for Jeddah", "sourcing company for Dammam", "sourcing company for Doha",
        "import without intermediary", "direct import", "direct sourcing", "direct purchase", "direct trade",
        "best prices from China", "factory prices", "wholesale prices", "competitive prices", "cost savings",
        "guaranteed quality", "quality assurance", "quality control", "quality inspection", "quality standards",
        "comprehensive sourcing services", "sourcing solutions", "sourcing management", "sourcing strategies",
      ],
    },
  },
  '/services/inspection': {
    ar: {
      title: "خدمات فحص جودة البضائع قبل الشحن من الصين | دينورا",
      description: "شركة تفتيش ومراقبة جودة المنتجات في المصانع الصينية. نقدم خدمات فحص جودة البضائع قبل الشحن من الصين لضمان جودة المنتجات المستوردة.",
      keywords: [
        "خدمات فحص جودة البضائع", "شركة تفتيش ومراقبة جودة", "فحص جودة منتجات", "فحص قبل الشحن", "خدمات التفتيش في الصين", "مراقبة جودة المصانع", "فحص جودة الاستيراد",
        "فحص الجودة في الصين", "مراقبة الجودة في الصين", "التفتيش في المصانع الصينية", "فحص قبل الشحن", "فحص أثناء الإنتاج", "فحص قبل الإنتاج",
        "شركة فحص جودة", "شركة مراقبة جودة", "شركة تفتيش صينية", "شركة فحص منتجات", "شركة تفتيش بضائع",
        "فحص المصانع", "زيارة المصانع", "تقييم المصانع", "فحص الإنتاج", "متابعة الإنتاج",
        "فحص العينات", "فحص المنتجات", "فحص البضائع", "فحص المواد", "فحص المكونات",
        "تقارير الفحص", "تقارير الجودة", "تقارير التفتيش", "صور الفحص", "فيديو الفحص",
        "معايير الجودة", "مواصفات الجودة", "اختبارات الجودة", "قياسات الجودة", "ضبط الجودة",
        "فحص الملابس من الصين", "فحص الإلكترونيات من الصين", "فحص الأثاث من الصين", "فحص الأدوات من الصين",
        "فحص قطع الغيار من الصين", "فحص الطاقة الشمسية من الصين", "فحص الأجهزة المنزلية من الصين",
        "فحص قبل التحميل", "فحص في الميناء", "فحص في المستودع", "فحص نهائي", "فحص شامل",
        "ضمان الجودة", "مراقبة الجودة الشاملة", "نظام الجودة", "إدارة الجودة", "تحسين الجودة",
        "منع العيوب", "كشف العيوب", "إصلاح العيوب", "تقليل العيوب", "القضاء على العيوب",
        "خدمات فحص للسعودية", "خدمات فحص للإمارات", "خدمات فحص للكويت", "خدمات فحص لقطر", "خدمات فحص للبحرين",
        "مفتش جودة صيني", "مفتش جودة عربي", "فريق فحص محترف", "خبراء الفحص", "مهندسو الجودة",
        "بروتوكولات الفحص", "إجراءات الفحص", "خطوات الفحص", "قوائم الفحص", "نماذج الفحص",
      ],
    },
    en: {
      title: "Quality Inspection Services Before Shipping from China | Dinoora",
      description: "Product inspection and quality control company in Chinese factories. We provide quality inspection services for goods before shipping from China to ensure imported product quality.",
      keywords: [
        "goods quality inspection services", "inspection and quality control company", "product quality inspection", "pre-shipment inspection", "inspection services in China", "factory quality control", "import quality inspection",
        "quality inspection in China", "quality control in China", "inspection in Chinese factories", "pre-shipment inspection", "during production inspection", "pre-production inspection",
        "quality inspection company", "quality control company", "Chinese inspection company", "product inspection company", "goods inspection company",
        "factory inspection", "factory visit", "factory evaluation", "production inspection", "production follow-up",
        "sample inspection", "product inspection", "goods inspection", "material inspection", "component inspection",
        "inspection reports", "quality reports", "inspection reports", "inspection photos", "inspection videos",
        "quality standards", "quality specifications", "quality tests", "quality measurements", "quality control",
        "clothing inspection from China", "electronics inspection from China", "furniture inspection from China", "tools inspection from China",
        "spare parts inspection from China", "solar energy inspection from China", "home appliances inspection from China",
        "pre-loading inspection", "port inspection", "warehouse inspection", "final inspection", "comprehensive inspection",
        "quality assurance", "comprehensive quality control", "quality system", "quality management", "quality improvement",
        "defect prevention", "defect detection", "defect correction", "defect reduction", "defect elimination",
        "inspection services for Saudi Arabia", "inspection services for UAE", "inspection services for Kuwait", "inspection services for Qatar", "inspection services for Bahrain",
        "Chinese quality inspector", "Arab quality inspector", "professional inspection team", "inspection experts", "quality engineers",
        "inspection protocols", "inspection procedures", "inspection steps", "inspection checklists", "inspection templates",
      ],
    },
  },
  '/services/warehousing': {
    ar: {
      title: "شركة تخزين وتجميع البضائع في الصين للمستوردين | دينورا",
      description: "خدمات التخزين في الصين للمستوردين العرب. شركة تخزين وتجميع البضائع في الصين للمستوردين مع حلول تخزين آمنة واقتصادية.",
      keywords: [
        "شركة تخزين وتجميع البضائع", "خدمات التخزين في الصين", "تخزين بضائع الصين", "تجميع شحنات", "مستودعات في الصين", "تخزين للمستوردين", "خدمات التخزين والشحن",
        "التخزين في الصين", "مستودعات صينية", "مخازن في الصين", "مراكز تخزين في الصين", "مناطق تخزين في الصين",
        "تجميع الشحنات", "تجميع البضائع", "تجميع الطلبات", "تجميع الحاويات", "خدمات التجميع",
        "خدمات التخزين", "حلول التخزين", "إدارة التخزين", "تخزين آمن", "تخزين اقتصادي",
        "تخزين مؤقت", "تخزين طويل الأمد", "تخزين قصير الأمد", "تخزين مرن", "تخزين مخصص",
        "إدارة المخزون", "مراقبة المخزون", "تتبع المخزون", "جرد المخزون", "تنظيم المخزون",
        "تخزين الملابس في الصين", "تخزين الإلكترونيات في الصين", "تخزين الأثاث في الصين", "تخزين الأدوات في الصين",
        "تخزين قطع الغيار في الصين", "تخزين الطاقة الشمسية في الصين", "تخزين الأجهزة المنزلية في الصين",
        "مستودع في ييوو", "مستودع في شنغهاي", "مستودع في شنتشن", "مستودع في غوانزو", "مستودع في نينغبو",
        "خدمات التخزين للسعودية", "خدمات التخزين للإمارات", "خدمات التخزين للكويت", "خدمات التخزين لقطر", "خدمات التخزين للبحرين",
        "تخزين قبل الشحن", "تخزين بعد الإنتاج", "تخزين قبل التحميل", "تخزين للتجميع", "تخزين للتوزيع",
        "شركة تخزين عربية", "شركة تخزين للشرق الأوسط", "شركة تخزين دولية", "شركة لوجستيات وتخزين",
        "تكاليف التخزين", "أسعار التخزين", "رسوم التخزين", "تخزين منخفض التكلفة", "تخزين اقتصادي",
        "حماية البضائع", "أمان التخزين", "تأمين المخزون", "مراقبة الأمن", "أنظمة الأمان",
      ],
    },
    en: {
      title: "Warehousing and Consolidation Company in China for Importers | Dinoora",
      description: "Warehousing services in China for Arab importers. Warehousing and consolidation company in China for importers with secure and economical storage solutions.",
      keywords: [
        "warehousing and consolidation company", "warehousing services in China", "China goods storage", "shipment consolidation", "warehouses in China", "storage for importers", "warehousing and shipping services",
        "storage in China", "Chinese warehouses", "warehouses in China", "storage centers in China", "storage areas in China",
        "shipment consolidation", "goods consolidation", "order consolidation", "container consolidation", "consolidation services",
        "storage services", "storage solutions", "storage management", "secure storage", "economical storage",
        "temporary storage", "long-term storage", "short-term storage", "flexible storage", "custom storage",
        "inventory management", "inventory control", "inventory tracking", "inventory counting", "inventory organization",
        "clothing storage in China", "electronics storage in China", "furniture storage in China", "tools storage in China",
        "spare parts storage in China", "solar energy storage in China", "home appliances storage in China",
        "warehouse in Yiwu", "warehouse in Shanghai", "warehouse in Shenzhen", "warehouse in Guangzhou", "warehouse in Ningbo",
        "storage services for Saudi Arabia", "storage services for UAE", "storage services for Kuwait", "storage services for Qatar", "storage services for Bahrain",
        "pre-shipment storage", "post-production storage", "pre-loading storage", "consolidation storage", "distribution storage",
        "Arab warehousing company", "Middle East warehousing company", "international warehousing company", "logistics and storage company",
        "storage costs", "storage prices", "storage fees", "low-cost storage", "economical storage",
        "goods protection", "storage security", "inventory insurance", "security monitoring", "security systems",
      ],
    },
  },
  '/services/shipping': {
    ar: {
      title: "شحن بحري وجوي من الصين إلى السعودية بأسعار منافسة | دينورا",
      description: "أفضل شركة شحن جوي من الصين إلى السعودية. نقدم شحن بحري من الصين إلى السعودية بأسعار منافسة مع خدمات شحن دولية موثوقة.",
      keywords: [
        "شحن بحري من الصين للسعودية", "أفضل شركة شحن جوي من الصين", "شحن جوي للصين", "شحن بحري صيني", "شركة شحن دولية", "خدمات الشحن من الصين", "شحن بضائع من الصين",
        "شحن من الصين", "شحن إلى السعودية", "شحن إلى الإمارات", "شحن إلى الكويت", "شحن إلى قطر", "شحن إلى البحرين", "شحن إلى عمان",
        "شحن بحري", "شحن جوي", "شحن بري", "شحن سريع", "شحن اقتصادي", "شحن express",
        "شحن الحاويات", "شحن LCL", "شحن FCL", "شحن حاوية كامل", "شحن جزء من حاوية",
        "شحن البضائع", "شحن المنتجات", "شحن السلع", "شحن المواد", "شحن المعدات",
        "شحن الملابس من الصين", "شحن الإلكترونيات من الصين", "شحن الأثاث من الصين", "شحن الأدوات من الصين",
        "شحن قطع الغيار من الصين", "شحن الطاقة الشمسية من الصين", "شحن الأجهزة المنزلية من الصين",
        "شركة شحن عربية", "شركة شحن للشرق الأوسط", "شركة شحن دولية", "شركة لوجستيات وشحن",
        "أسعار الشحن من الصين", "تكلفة الشحن من الصين", "رسوم الشحن", "شحن منخفض التكلفة", "شحن بأسعار تنافسية",
        "مواعيد الشحن", "زمن الشحن", "شحن سريع التسليم", "شحن في الوقت المحدد", "شحن موثوق",
        "تتبع الشحنات", "متابعة الشحنات", "تتبع الحاويات", "تحديثات الشحن", "حالة الشحنة",
        "شحن من شنغهاي", "شحن من نينغبو", "شحن من شنتشن", "شحن من غوانزو", "شحن من تشينغداو",
        "شحن إلى جدة", "شحن إلى الدمام", "شحن إلى الرياض", "شحن إلى الدوحة", "شحن إلى الكويت",
        "خدمات الشحن الدولي", "شحن عالمي", "شحن دولي", "خدمات النقل الدولي", "النقل البحري الدولي",
        "شحن آمن", "شحن مؤمن", "تأمين الشحنات", "حماية البضائع", "سلامة الشحن",
        "شحن بالدفع عند الاستلام", "شحن COD", "شحن بالتمويل", "شحن بالتقسيط", "شحن بالدفع الآجل",
      ],
    },
    en: {
      title: "Sea and Air Shipping from China to Saudi Arabia at Competitive Prices | Dinoora",
      description: "Best air shipping company from China to Saudi Arabia. We offer sea shipping from China to Saudi Arabia at competitive prices with reliable international shipping services.",
      keywords: [
        "sea shipping from China to Saudi Arabia", "best air shipping company from China", "air shipping to China", "Chinese sea shipping", "international shipping company", "shipping services from China", "shipping goods from China",
        "shipping from China", "shipping to Saudi Arabia", "shipping to UAE", "shipping to Kuwait", "shipping to Qatar", "shipping to Bahrain", "shipping to Oman",
        "sea shipping", "air shipping", "land shipping", "express shipping", "economic shipping", "express freight",
        "container shipping", "LCL shipping", "FCL shipping", "full container shipping", "partial container shipping",
        "goods shipping", "product shipping", "cargo shipping", "material shipping", "equipment shipping",
        "clothing shipping from China", "electronics shipping from China", "furniture shipping from China", "tools shipping from China",
        "spare parts shipping from China", "solar energy shipping from China", "home appliances shipping from China",
        "Arab shipping company", "Middle East shipping company", "international shipping company", "logistics and shipping company",
        "shipping prices from China", "shipping costs from China", "shipping fees", "low-cost shipping", "competitive shipping prices",
        "shipping schedules", "shipping time", "fast delivery shipping", "on-time shipping", "reliable shipping",
        "shipment tracking", "cargo tracking", "container tracking", "shipping updates", "shipment status",
        "shipping from Shanghai", "shipping from Ningbo", "shipping from Shenzhen", "shipping from Guangzhou", "shipping from Qingdao",
        "shipping to Jeddah", "shipping to Dammam", "shipping to Riyadh", "shipping to Doha", "shipping to Kuwait",
        "international shipping services", "worldwide shipping", "international freight", "international transport services", "international sea freight",
        "secure shipping", "insured shipping", "cargo insurance", "goods protection", "shipping safety",
        "COD shipping", "payment on delivery shipping", "financed shipping", "installment shipping", "deferred payment shipping",
      ],
    },
  },
  '/services/customs': {
    ar: {
      title: "خدمات تخليص جمركي للبضائع المستوردة من الصين | دينورا",
      description: "خدمات التخليص الجمركي في ميناء جدة للبضائع الصينية. نقدم خدمات تخليص جمركي للبضائع المستوردة من الصين بسرعة وكفاءة.",
      keywords: [
        "خدمات تخليص جمركي", "التخليص الجمركي في السعودية", "تخليص جمركي سعودي", "شركة شحن دولية", "تخليص جمركي جدة", "استيراد وتخليص", "خدمات الجمارك",
        "التخليص الجمركي", "خدمات الجمارك", "الجمارك السعودية", "إجراءات الجمارك", "رسوم الجمارك", "ضرائب الاستيراد",
        "تخليص جمركي في جدة", "تخليص جمركي في الدمام", "تخليص جمركي في الرياض", "تخليص جمركي في جازان",
        "تخليص جمركي في الإمارات", "تخليص جمركي في دبي", "تخليص جمركي في أبوظبي", "تخليص جمركي في الشارقة",
        "تخليص جمركي في الكويت", "تخليص جمركي في قطر", "تخليص جمركي في البحرين", "تخليص جمركي في عمان",
        "شركة تخليص جمركي", "وسيط جمركي", "مخلص جمركي", "وكيل تخليص", "مكتب تخليص",
        "خدمات التخليص للبضائع الصينية", "تخليص البضائع من الصين", "تخليص المستوردات", "تخليص الشحنات",
        "المستندات الجمركية", "الوثائق الجمركية", "الفواتير الجمركية", "بيان التخليص", "إذن الاستيراد",
        "التصريح الجمركي", "رخصة الاستيراد", "شهادة المنشأ", "فاتورة الشحن", "بوليصة الشحن",
        "سرعة التخليص", "تخليص سريع", "تخليص فوري", "تخليص في 24 ساعة", "تخليص في 48 ساعة",
        "شركة تخليص عربية", "شركة تخليص للشرق الأوسط", "شركة تخليص دولية", "خدمات تخليص متكاملة",
        "رسوم التخليص", "تكلفة التخليص", "أسعار التخليص", "تخليص منخفض التكلفة", "تخليص اقتصادي",
        "تخليص الملابس", "تخليص الإلكترونيات", "تخليص الأثاث", "تخليص الأدوات", "تخليص المعدات",
        "تخليص قطع الغيار", "تخليص الطاقة الشمسية", "تخليص الأجهزة المنزلية", "تخليص المواد الخام",
        "استشارات جمركية", "خدمات استشارات جمركية", "نصائح جمركية", "إرشادات جمركية", "دليل الجمارك",
      ],
    },
    en: {
      title: "Customs Clearance Services for Goods Imported from China | Dinoora",
      description: "Customs clearance services at Jeddah port for Chinese goods. We provide customs clearance services for goods imported from China quickly and efficiently.",
      keywords: [
        "customs clearance services", "customs clearance in Saudi Arabia", "Saudi customs clearance", "international shipping company", "Jeddah customs clearance", "import and clearance", "customs services",
        "customs clearance", "customs services", "Saudi customs", "customs procedures", "customs duties", "import taxes",
        "customs clearance in Jeddah", "customs clearance in Dammam", "customs clearance in Riyadh", "customs clearance in Jazan",
        "customs clearance in UAE", "customs clearance in Dubai", "customs clearance in Abu Dhabi", "customs clearance in Sharjah",
        "customs clearance in Kuwait", "customs clearance in Qatar", "customs clearance in Bahrain", "customs clearance in Oman",
        "customs clearance company", "customs broker", "customs agent", "clearance agent", "clearance office",
        "clearance services for Chinese goods", "clearance of goods from China", "clearance of imports", "clearance of shipments",
        "customs documents", "customs paperwork", "customs invoices", "clearance declaration", "import permit",
        "customs permit", "import license", "certificate of origin", "shipping invoice", "bill of lading",
        "fast clearance", "quick clearance", "instant clearance", "24-hour clearance", "48-hour clearance",
        "Arab clearance company", "Middle East clearance company", "international clearance company", "comprehensive clearance services",
        "clearance fees", "clearance costs", "clearance prices", "low-cost clearance", "economical clearance",
        "clothing clearance", "electronics clearance", "furniture clearance", "tools clearance", "equipment clearance",
        "spare parts clearance", "solar energy clearance", "home appliances clearance", "raw materials clearance",
        "customs consulting", "customs advisory services", "customs advice", "customs guidelines", "customs guide",
      ],
    },
  },
  '/services/logistics': {
    ar: {
      title: "شركة لوجستيات متكاملة بين الصين والشرق الأوسط | دينورا",
      description: "خدمات الشحن من الصين إلى السعودية بالدفع عند الاستلام. شركة لوجستيات متكاملة بين الصين والشرق الأوسط مع حلول شاملة.",
      keywords: [
        "شركة لوجستيات متكاملة", "خدمات لوجستية صينية", "شركة شحن دولية", "خدمات الشحن من الصين", "حلول لوجستية", "شحن بالدفع عند الاستلام", "لوجستيات الاستيراد",
        "خدمات لوجستية", "حلول لوجستية شاملة", "إدارة سلسلة التوريد", "اللوجستيات الدولية", "النقل اللوجستي",
        "شركة لوجستيات عربية", "شركة لوجستيات للشرق الأوسط", "شركة لوجستيات دولية", "شركة لوجستيات صينية",
        "خدمات التوريد والشحن", "خدمات التخزين والشحن", "خدمات التخليص والشحن", "خدمات متكاملة",
        "إدارة الشحنات", "تتبع الشحنات", "تنسيق الشحنات", "إدارة الحاويات", "إدارة المستودعات",
        "حلول سلسلة التوريد", "تحسين سلسلة التوريد", "إدارة سلسلة التوريد الشاملة", "استراتيجيات سلسلة التوريد",
        "اللوجستيات من الصين", "اللوجستيات إلى السعودية", "اللوجستيات إلى الإمارات", "اللوجستيات إلى الكويت", "اللوجستيات إلى قطر",
        "خدمات النقل", "خدمات التوزيع", "خدمات التخزين", "خدمات التجميع", "خدمات التعبئة",
        "شحن بالدفع عند الاستلام", "شحن COD", "شحن بالتمويل", "شحن بالتقسيط", "شحن بالدفع الآجل",
        "حلول لوجستية مخصصة", "خدمات لوجستية مرنة", "حلول لوجستية اقتصادية", "حلول لوجستية سريعة",
        "إدارة المخزون", "مراقبة المخزون", "تتبع المخزون", "جرد المخزون", "تنظيم المخزون",
        "التخطيط اللوجستي", "تنسيق اللوجستيات", "تحسين العمليات", "كفاءة العمليات", "تقليل التكاليف",
        "خدمات لوجستية للشركات", "خدمات لوجستية للشركات الصغيرة", "خدمات لوجستية للشركات المتوسطة",
        "اللوجستيات الخضراء", "اللوجستيات المستدامة", "الحلول اللوجستية الصديقة للبيئة",
      ],
    },
    en: {
      title: "Integrated Logistics Company Between China and Middle East | Dinoora",
      description: "Shipping services from China to Saudi Arabia with payment on delivery. Integrated logistics company between China and the Middle East with comprehensive solutions.",
      keywords: [
        "integrated logistics company", "Chinese logistics services", "international shipping company", "shipping services from China", "logistics solutions", "payment on delivery shipping", "import logistics",
        "logistics services", "comprehensive logistics solutions", "supply chain management", "international logistics", "logistics transport",
        "Arab logistics company", "Middle East logistics company", "international logistics company", "Chinese logistics company",
        "sourcing and shipping services", "warehousing and shipping services", "clearance and shipping services", "integrated services",
        "shipment management", "shipment tracking", "shipment coordination", "container management", "warehouse management",
        "supply chain solutions", "supply chain optimization", "comprehensive supply chain management", "supply chain strategies",
        "logistics from China", "logistics to Saudi Arabia", "logistics to UAE", "logistics to Kuwait", "logistics to Qatar",
        "transport services", "distribution services", "storage services", "consolidation services", "packaging services",
        "COD shipping", "payment on delivery shipping", "financed shipping", "installment shipping", "deferred payment shipping",
        "custom logistics solutions", "flexible logistics services", "economical logistics solutions", "fast logistics solutions",
        "inventory management", "inventory control", "inventory tracking", "inventory counting", "inventory organization",
        "logistics planning", "logistics coordination", "operations optimization", "operations efficiency", "cost reduction",
        "logistics services for companies", "logistics services for small companies", "logistics services for medium companies",
        "green logistics", "sustainable logistics", "eco-friendly logistics solutions",
      ],
    },
  },
  '/contact': {
    ar: {
      title: "خدمات استيراد من الصين للشركات السعودية الصغيرة | دينورا",
      description: "شركة استيراد من الصين للسعودية بأسعار منافسة. خدمات استيراد من الصين للشركات السعودية الصغيرة والمتوسطة مع دعم كامل.",
      keywords: [
        "خدمات استيراد من الصين", "استيراد للسعودية", "شركة استيراد صينية", "تجارة مع الصين", "استيراد للشركات السعودية", "خدمات الاستيراد", "شركة تجارة دولية",
        "تواصل معنا", "اتصل بنا", "اتصال دينورا", "معلومات الاتصال", "عنوان الشركة", "رقم الهاتف", "البريد الإلكتروني",
        "طلب استشارة", "استشارة مجانية", "طلب عرض سعر", "حجز موعد", "تواصل واتساب", "تواصل عبر الهاتف",
        "خدمة العملاء", "دعم العملاء", "فريق الدعم", "مدير حساب", "ممثل المبيعات", "فريق المبيعات",
        "استيراد للشركات الصغيرة", "استيرار للشركات المتوسطة", "استيرار للمبتدئين", "استيرار للأفراد", "استيرار للشركات الناشئة",
        "استشارة استيراد", "نصائح استيراد", "إرشادات استيراد", "دليل استيراد", "خطة استيراد",
        "طلب توريد", "طلب شحن", "طلب تخزين", "طلب فحص", "طلب تخليص",
        "شركة استيراد للرياض", "شركة استيرار لجدة", "شركة استيرار للدمام", "شركة استيرار للدوحة",
        "شركة استيراد موثوقة", "شركة استيراد محترفة", "شركة استيراد ذات خبرة", "شركة استيراد معتمدة",
        "خدمات استيراد متكاملة", "حلول استيراد شاملة", "إدارة الاستيراد", "تنسيق الاستيراد",
      ],
    },
    en: {
      title: "Import Services from China for Small Saudi Companies | Dinoora",
      description: "Import company from China to Saudi Arabia at competitive prices. Import services from China for small and medium Saudi companies with full support.",
      keywords: [
        "import services from China", "import to Saudi Arabia", "Chinese import company", "trade with China", "import for Saudi companies", "import services", "international trading company",
        "contact us", "get in touch", "Dinoora contact", "contact information", "company address", "phone number", "email address",
        "request consultation", "free consultation", "request quote", "book appointment", "WhatsApp contact", "phone contact",
        "customer service", "customer support", "support team", "account manager", "sales representative", "sales team",
        "import for small companies", "import for medium companies", "import for beginners", "import for individuals", "import for startups",
        "import consultation", "import advice", "import guidance", "import guide", "import plan",
        "sourcing request", "shipping request", "storage request", "inspection request", "clearance request",
        "import company for Riyadh", "import company for Jeddah", "import company for Dammam", "import company for Doha",
        "reliable import company", "professional import company", "experienced import company", "certified import company",
        "comprehensive import services", "full import solutions", "import management", "import coordination",
      ],
    },
  },
  '/quote': {
    ar: {
      title: "كيف أستورد من الصين للسعودية بدون وسيط | دينورا",
      description: "شركة توريد وشحن من الصين إلى دول الخليج. تعلم كيف تستورد من الصين للسعودية بدون وسيط مع دينورا.",
      keywords: [
        "كيف أستورد من الصين للسعودية", "استيراد بدون وسيط", "استيراد بالجملة", "توريد من الصين", "شركة توريد وشحن", "استيراد مباشر", "طلب عرض سعر",
        "طلب عرض تجارة وشحن", "طلب عرض سعر استيراد", "طلب توريد من الصين", "طلب شحن من الصين",
        "استشارة استيراد مجانية", "استشارة توريد", "استشارة شحن", "استشارة تجارية",
        "حساب تكلفة الاستيراد", "تقدير تكلفة الشحن", "حساب أسعار الاستيراد", "تقدير تكلفة التوريد",
        "استيراد للسعودية بدون وسيط", "استيرار للإمارات بدون وسيط", "استيرار للكويت بدون وسيط", "استيرار لقطر بدون وسيط",
        "استيراد مباشر من المصنع", "شراء مباشر من المصنع", "توريد مباشر من المصنع", "التعامل مع المصانع مباشرة",
        "طلب عرض سعر للملابس", "طلب عرض سعر للإلكترونيات", "طلب عرض سعر للأثاث", "طلب عرض سعر للأدوات",
        "طلب عرض سعر لقطع الغيار", "طلب عرض سعر للطاقة الشمسية", "طلب عرض سعر للأجهزة المنزلية",
        "خدمات توريد وشحن", "حلول استيراد متكاملة", "خدمات استيراد شاملة", "إدارة عملية الاستيراد",
        "شركة استيراد موثوقة", "شركة توريد محترفة", "شركة شحن دولية", "شركة لوجستيات",
      ],
    },
    en: {
      title: "How to Import from China to Saudi Arabia Without Intermediary | Dinoora",
      description: "Sourcing and shipping company from China to Gulf countries. Learn how to import from China to Saudi Arabia without intermediary with Dinoora.",
      keywords: [
        "how to import from China to Saudi Arabia", "import without intermediary", "wholesale import", "sourcing from China", "sourcing and shipping company", "direct import", "request price quote",
        "request trade and shipping quote", "request import price quote", "request sourcing from China", "request shipping from China",
        "free import consultation", "sourcing consultation", "shipping consultation", "commercial consultation",
        "import cost calculation", "shipping cost estimation", "import price calculation", "sourcing cost estimation",
        "import to Saudi Arabia without intermediary", "import to UAE without intermediary", "import to Kuwait without intermediary", "import to Qatar without intermediary",
        "direct factory import", "direct factory purchase", "direct factory sourcing", "dealing directly with factories",
        "request quote for clothing", "request quote for electronics", "request quote for furniture", "request quote for tools",
        "request quote for spare parts", "request quote for solar energy", "request quote for home appliances",
        "sourcing and shipping services", "comprehensive import solutions", "full import services", "import process management",
        "reliable import company", "professional sourcing company", "international shipping company", "logistics company",
      ],
    },
  },
  '/countries/uae': {
    ar: {
      title: "استيراد من الصين إلى الإمارات | دينورا للتجارة الدولية",
      description: "خدمات استيراد شاملة من الصين إلى الإمارات مع توريد، فحص جودة، شحن، وتخليص جمركي. أفضل شركة استيراد للإمارات.",
      keywords: ["استيراد من الصين إلى الإمارات", "شركة استيراد للإمارات", "شحن من الصين للإمارات", "توريد من الصين للإمارات", "استيرار لدبي", "استيرار لأبوظبي", "استيرار للشارقة"],
    },
    en: {
      title: "Import from China to UAE | Dinoora International Trade",
      description: "Comprehensive import services from China to UAE with sourcing, quality inspection, shipping, and customs clearance. Best import company for UAE.",
      keywords: ["import from China to UAE", "import company for UAE", "shipping from China to UAE", "sourcing from China to UAE", "import to Dubai", "import to Abu Dhabi", "import to Sharjah"],
    },
  },
  '/countries/kuwait': {
    ar: {
      title: "استيراد من الصين إلى الكويت | دينورا للتجارة الدولية",
      description: "خدمات استيراد شاملة من الصين إلى الكويت مع توريد، فحص جودة، شحن، وتخليص جمركي. أفضل شركة استيراد للكويت.",
      keywords: ["استيراد من الصين إلى الكويت", "شركة استيراد للكويت", "شحن من الصين للكويت", "توريد من الصين للكويت", "استيرار لمدينة الكويت"],
    },
    en: {
      title: "Import from China to Kuwait | Dinoora International Trade",
      description: "Comprehensive import services from China to Kuwait with sourcing, quality inspection, shipping, and customs clearance. Best import company for Kuwait.",
      keywords: ["import from China to Kuwait", "import company for Kuwait", "shipping from China to Kuwait", "sourcing from China to Kuwait", "import to Kuwait City"],
    },
  },
  '/countries/qatar': {
    ar: {
      title: "استيراد من الصين إلى قطر | دينورا للتجارة الدولية",
      description: "خدمات استيراد شاملة من الصين إلى قطر مع توريد، فحص جودة، شحن، وتخليص جمركي. أفضل شركة استيراد لقطر.",
      keywords: ["استيراد من الصين إلى قطر", "شركة استيراد لقطر", "شحن من الصين لقطر", "توريد من الصين لقطر", "استيرار للدوحة"],
    },
    en: {
      title: "Import from China to Qatar | Dinoora International Trade",
      description: "Comprehensive import services from China to Qatar with sourcing, quality inspection, shipping, and customs clearance. Best import company for Qatar.",
      keywords: ["import from China to Qatar", "import company for Qatar", "shipping from China to Qatar", "sourcing from China to Qatar", "import to Doha"],
    },
  },
  '/countries/bahrain': {
    ar: {
      title: "استيراد من الصين إلى البحرين | دينورا للتجارة الدولية",
      description: "خدمات استيراد شاملة من الصين إلى البحرين مع توريد، فحص جودة، شحن، وتخليص جمركي. أفضل شركة استيراد للبحرين.",
      keywords: ["استيراد من الصين إلى البحرين", "شركة استيراد للبحرين", "شحن من الصين للبحرين", "توريد من الصين للبحرين", "استيرار للمنامة"],
    },
    en: {
      title: "Import from China to Bahrain | Dinoora International Trade",
      description: "Comprehensive import services from China to Bahrain with sourcing, quality inspection, shipping, and customs clearance. Best import company for Bahrain.",
      keywords: ["import from China to Bahrain", "import company for Bahrain", "shipping from China to Bahrain", "sourcing from China to Bahrain", "import to Manama"],
    },
  },
  '/countries/oman': {
    ar: {
      title: "استيراد من الصين إلى عمان | دينورا للتجارة الدولية",
      description: "خدمات استيراد شاملة من الصين إلى عمان مع توريد، فحص جودة، شحن، وتخليص جمركي. أفضل شركة استيراد لعمان.",
      keywords: ["استيراد من الصين إلى عمان", "شركة استيراد لعمان", "شحن من الصين لعمان", "توريد من الصين لعمان", "استيرار لمسقط"],
    },
    en: {
      title: "Import from China to Oman | Dinoora International Trade",
      description: "Comprehensive import services from China to Oman with sourcing, quality inspection, shipping, and customs clearance. Best import company for Oman.",
      keywords: ["import from China to Oman", "import company for Oman", "shipping from China to Oman", "sourcing from China to Oman", "import to Muscat"],
    },
  },
  '/countries/iraq': {
    ar: {
      title: "استيراد من الصين إلى العراق | دينورا للتجارة الدولية",
      description: "خدمات استيراد شاملة من الصين إلى العراق مع توريد، فحص جودة، شحن، وتخليص جمركي. أفضل شركة استيراد للعراق.",
      keywords: ["استيراد من الصين إلى العراق", "شركة استيراد للعراق", "شحن من الصين للعراق", "توريد من الصين للعراق", "استيرار لبغداد", "استيرار للبصرة"],
    },
    en: {
      title: "Import from China to Iraq | Dinoora International Trade",
      description: "Comprehensive import services from China to Iraq with sourcing, quality inspection, shipping, and customs clearance. Best import company for Iraq.",
      keywords: ["import from China to Iraq", "import company for Iraq", "shipping from China to Iraq", "sourcing from China to Iraq", "import to Baghdad", "import to Basra"],
    },
  },
  '/countries/sudan': {
    ar: {
      title: "استيراد من الصين إلى السودان | دينورا للتجارة الدولية",
      description: "خدمات استيراد شاملة من الصين إلى السودان مع توريد، فحص جودة، شحن، وتخليص جمركي. أفضل شركة استيراد للسودان.",
      keywords: ["استيراد من الصين إلى السودان", "شركة استيراد للسودان", "شحن من الصين للسودان", "توريد من الصين للسودان", "استيرار للخرطوم"],
    },
    en: {
      title: "Import from China to Sudan | Dinoora International Trade",
      description: "Comprehensive import services from China to Sudan with sourcing, quality inspection, shipping, and customs clearance. Best import company for Sudan.",
      keywords: ["import from China to Sudan", "import company for Sudan", "shipping from China to Sudan", "sourcing from China to Sudan", "import to Khartoum"],
    },
  },
  '/countries/yemen': {
    ar: {
      title: "استيراد من الصين إلى اليمن | دينورا للتجارة الدولية",
      description: "خدمات استيراد شاملة من الصين إلى اليمن مع توريد، فحص جودة، شحن، وتخليص جمركي. أفضل شركة استيراد لليمن.",
      keywords: ["استيراد من الصين إلى اليمن", "شركة استيراد لليمن", "شحن من الصين لليمن", "توريد من الصين لليمن", "استيرار لصنعاء", "استيرار لعدن"],
    },
    en: {
      title: "Import from China to Yemen | Dinoora International Trade",
      description: "Comprehensive import services from China to Yemen with sourcing, quality inspection, shipping, and customs clearance. Best import company for Yemen.",
      keywords: ["import from China to Yemen", "import company for Yemen", "shipping from China to Yemen", "sourcing from China to Yemen", "import to Sana'a", "import to Aden"],
    },
  },
  '/countries/morocco': {
    ar: {
      title: "استيراد من الصين إلى المغرب | دينورا للتجارة الدولية",
      description: "خدمات استيراد شاملة من الصين إلى المغرب مع توريد، فحص جودة، شحن، وتخليص جمركي. أفضل شركة استيراد للمغرب.",
      keywords: ["استيراد من الصين إلى المغرب", "شركة استيراد للمغرب", "شحن من الصين للمغرب", "توريد من الصين للمغرب", "استيرار للرباط", "استيرار للدار البيضاء"],
    },
    en: {
      title: "Import from China to Morocco | Dinoora International Trade",
      description: "Comprehensive import services from China to Morocco with sourcing, quality inspection, shipping, and customs clearance. Best import company for Morocco.",
      keywords: ["import from China to Morocco", "import company for Morocco", "shipping from China to Morocco", "sourcing from China to Morocco", "import to Rabat", "import to Casablanca"],
    },
  },
  '/countries/algeria': {
    ar: {
      title: "استيراد من الصين إلى الجزائر | دينورا للتجارة الدولية",
      description: "خدمات استيراد شاملة من الصين إلى الجزائر مع توريد، فحص جودة، شحن، وتخليص جمركي. أفضل شركة استيراد للجزائر.",
      keywords: ["استيراد من الصين إلى الجزائر", "شركة استيراد للجزائر", "شحن من الصين للجزائر", "توريد من الصين للجزائر", "استيرار للجزائر العاصمة"],
    },
    en: {
      title: "Import from China to Algeria | Dinoora International Trade",
      description: "Comprehensive import services from China to Algeria with sourcing, quality inspection, shipping, and customs clearance. Best import company for Algeria.",
      keywords: ["import from China to Algeria", "import company for Algeria", "shipping from China to Algeria", "sourcing from China to Algeria", "import to Algiers"],
    },
  },
  '/countries/tunisia': {
    ar: {
      title: "استيراد من الصين إلى تونس | دينورا للتجارة الدولية",
      description: "خدمات استيراد شاملة من الصين إلى تونس مع توريد، فحص جودة، شحن، وتخليص جمركي. أفضل شركة استيراد لتونس.",
      keywords: ["استيراد من الصين إلى تونس", "شركة استيراد لتونس", "شحن من الصين لتونس", "توريد من الصين لتونس", "استيرار لتونس العاصمة"],
    },
    en: {
      title: "Import from China to Tunisia | Dinoora International Trade",
      description: "Comprehensive import services from China to Tunisia with sourcing, quality inspection, shipping, and customs clearance. Best import company for Tunisia.",
      keywords: ["import from China to Tunisia", "import company for Tunisia", "shipping from China to Tunisia", "sourcing from China to Tunisia", "import to Tunis"],
    },
  },
  '/countries/libya': {
    ar: {
      title: "استيراد من الصين إلى ليبيا | دينورا للتجارة الدولية",
      description: "خدمات استيراد شاملة من الصين إلى ليبيا مع توريد، فحص جودة، شحن، وتخليص جمركي. أفضل شركة استيراد لليبيا.",
      keywords: ["استيراد من الصين إلى ليبيا", "شركة استيراد لليبيا", "شحن من الصين لليبيا", "توريد من الصين لليبيا", "استيرار لطرابلس", "استيرار لبنغازي"],
    },
    en: {
      title: "Import from China to Libya | Dinoora International Trade",
      description: "Comprehensive import services from China to Libya with sourcing, quality inspection, shipping, and customs clearance. Best import company for Libya.",
      keywords: ["import from China to Libya", "import company for Libya", "shipping from China to Libya", "sourcing from China to Libya", "import to Tripoli", "import to Benghazi"],
    },
  },
  '/countries/jordan': {
    ar: {
      title: "استيراد من الصين إلى الأردن | دينورا للتجارة الدولية",
      description: "خدمات استيراد شاملة من الصين إلى الأردن مع توريد، فحص جودة، شحن، وتخليص جمركي. أفضل شركة استيراد للأردن.",
      keywords: ["استيراد من الصين إلى الأردن", "شركة استيراد للأردن", "شحن من الصين للأردن", "توريد من الصين للأردن", "استيرار لعمان"],
    },
    en: {
      title: "Import from China to Jordan | Dinoora International Trade",
      description: "Comprehensive import services from China to Jordan with sourcing, quality inspection, shipping, and customs clearance. Best import company for Jordan.",
      keywords: ["import from China to Jordan", "import company for Jordan", "shipping from China to Jordan", "sourcing from China to Jordan", "import to Amman"],
    },
  },
  '/countries/lebanon': {
    ar: {
      title: "استيراد من الصين إلى لبنان | دينورا للتجارة الدولية",
      description: "خدمات استيراد شاملة من الصين إلى لبنان مع توريد، فحص جودة، شحن، وتخليص جمركي. أفضل شركة استيراد للبنان.",
      keywords: ["استيراد من الصين إلى لبنان", "شركة استيراد للبنان", "شحن من الصين للبنان", "توريد من الصين للبنان", "استيرار لبيروت"],
    },
    en: {
      title: "Import from China to Lebanon | Dinoora International Trade",
      description: "Comprehensive import services from China to Lebanon with sourcing, quality inspection, shipping, and customs clearance. Best import company for Lebanon.",
      keywords: ["import from China to Lebanon", "import company for Lebanon", "shipping from China to Lebanon", "sourcing from China to Lebanon", "import to Beirut"],
    },
  },
  '/calculator': {
    ar: {
      title: "حاسبة تكلفة الاستيراد من الصين مجانية | دينورا",
      description: "احسب تكلفة استيراد منتجاتك من الصين بدقة باستخدام حاسبة التكلفة المجانية. احصل على تقدير يشمل تكلفة المنتج، الشحن، الجمارك، والرسوم الإضافية.",
      keywords: [
        "حاسبة تكلفة الاستيراد", "حساب تكلفة الاستيراد من الصين", "تقدير تكلفة الاستيراد", "حاسبة شحن من الصين", "حساب تكلفة الشحن",
        "تكلفة الاستيراد من الصين", "كم تكلفة الاستيراد من الصين", "حساب تكلفة الجمارك", "تقدير تكلفة الشحن البحري",
        "حاسبة تكلفة الاستيراد للسعودية", "حاسبة تكلفة الاستيراد للإمارات", "حاسبة تكلفة الاستيراد للكويت",
        "حساب تكلفة الاستيراد للسعودية", "حساب تكلفة الاستيراد للإمارات", "حساب تكلفة الاستيراد للكويت",
        "تقدير تكلفة الاستيراد للسعودية", "تقدير تكلفة الاستيراد للإمارات", "تقدير تكلفة الاستيراد للكويت",
        "حاسبة تكلفة الشحن البحري", "حاسبة تكلفة الشحن الجوي", "حساب تكلفة الشحن البحري", "حساب تكلفة الشحن الجوي",
        "تكلفة الجمارك من الصين", "حساب الجمارك من الصين", "تقدير الجمارك من الصين",
        "استيراد من الصين تكلفة", "كم يكلف الاستيراد من الصين", "تكلفة الاستيراد بالجملة",
        "حاسبة استيراد مجانية", "أداة حساب تكلفة الاستيراد", "برنامج حساب تكلفة الاستيراد",
        "تقدير تكلفة المنتجات من الصين", "حساب تكلفة المنتجات من الصين", "تكلفة المنتجات من الصين",
        "شحن من الصين تكلفة", "كم تكلفة الشحن من الصين", "تقدير تكلفة الشحن من الصين",
        "استيراد إلكترونيات من الصين تكلفة", "استيراد ملابس من الصين تكلفة", "استيراد أدوات من الصين تكلفة",
        "حاسبة استيراد للتجارة", "حاسبة استيراد للشركات", "حاسبة استيراد للأفراد",
      ],
    },
    en: {
      title: "Free Import Cost Calculator from China | Dinoora",
      description: "Calculate the cost of importing your products from China accurately using our free cost calculator. Get an estimate including product cost, shipping, customs, and additional fees.",
      keywords: [
        "import cost calculator", "calculate import cost from China", "estimate import cost", "shipping cost calculator", "calculate shipping cost",
        "cost of importing from China", "how much does it cost to import from China", "calculate customs cost", "estimate sea freight cost",
        "import cost calculator for Saudi Arabia", "import cost calculator for UAE", "import cost calculator for Kuwait",
        "calculate import cost for Saudi Arabia", "calculate import cost for UAE", "calculate import cost for Kuwait",
        "estimate import cost for Saudi Arabia", "estimate import cost for UAE", "estimate import cost for Kuwait",
        "sea freight cost calculator", "air freight cost calculator", "calculate sea freight cost", "calculate air freight cost",
        "customs cost from China", "calculate customs from China", "estimate customs from China",
        "import from China cost", "how much to import from China", "wholesale import cost",
        "free import calculator", "import cost calculation tool", "import cost calculation software",
        "estimate product cost from China", "calculate product cost from China", "product cost from China",
        "shipping from China cost", "how much is shipping from China", "estimate shipping cost from China",
        "import electronics from China cost", "import clothing from China cost", "import tools from China cost",
        "business import calculator", "company import calculator", "individual import calculator",
      ],
    },
  },
  '/free-consultation': {
    ar: {
      title: "استشارة مجانية لاستيراد من الصين | دينورا",
      description: "احصل على استشارة مجانية مدتها 30 دقيقة مع خبراء الاستيراد من الصين. تقييم المنتج، تحليل السوق، وخطة عمل مخصصة لاستيراد منتجاتك.",
      keywords: [
        "استشارة مجانية للاستيراد", "استشارة استيراد من الصين", "استشارة تجارية مجانية", "استشارة استيراد للسعودية",
        "استشارة استيراد للإمارات", "استشارة استيراد للكويت", "استشارة استيراد لقطر", "استشارة استيراد للبحرين",
        "استشارة استيراد لعمان", "استشارة استيراد للأردن", "استشارة استيراد للعراق", "استشارة استيراد للجزائر",
        "استشارة استيراد للمغرب", "استشارة استيراد لتونس", "استشارة استيراد لمصر", "استشارة استيراد للبنان",
        "استشارة استيراد لليبيا", "استشارة استيراد للسودان", "استشارة استيراد لليمن",
        "خبراء الاستيراد من الصين", "استشاري استيراد من الصين", "شركة استشارات استيراد",
        "تقييم المنتج للاستيراد", "تحليل السوق للاستيراد", "خطة عمل للاستيراد",
        "نصائح استيراد من الصين", "كيف أستورد من الصين", "دليل الاستيراد من الصين",
        "استشارة استيراد إلكترونيات", "استشارة استيراد ملابس", "استشارة استيراد أدوات",
        "استشارة استيراد أقمشة", "استشارة استيراد طاقة شمسية", "استشارة استيراد أدوات طبية",
        "استشارة استيراد للمبتدئين", "استشارة استيراد للشركات", "استشارة استيراد للأفراد",
        "استشارة استيراد بالجملة", "استشارة استيراد تجزئة", "استشارة استيراد تجارة",
      ],
    },
    en: {
      title: "Free Consultation for Importing from China | Dinoora",
      description: "Get a free 30-minute consultation with China import experts. Product evaluation, market analysis, and custom action plan for importing your products.",
      keywords: [
        "free import consultation", "China import consultation", "free business consultation", "import consultation for Saudi Arabia",
        "import consultation for UAE", "import consultation for Kuwait", "import consultation for Qatar", "import consultation for Bahrain",
        "import consultation for Oman", "import consultation for Jordan", "import consultation for Iraq", "import consultation for Algeria",
        "import consultation for Morocco", "import consultation for Tunisia", "import consultation for Egypt", "import consultation for Lebanon",
        "import consultation for Libya", "import consultation for Sudan", "import consultation for Yemen",
        "China import experts", "China import consultant", "import consultation company",
        "product evaluation for import", "market analysis for import", "import action plan",
        "China import tips", "how to import from China", "China import guide",
        "electronics import consultation", "clothing import consultation", "tools import consultation",
        "textiles import consultation", "solar energy import consultation", "medical supplies import consultation",
        "beginner import consultation", "company import consultation", "individual import consultation",
        "wholesale import consultation", "retail import consultation", "trade import consultation",
      ],
    },
  },
  '/blog/how-to-avoid-common-import-mistakes': {
    ar: {
      title: "كيف تتجنب الأخطاء الشائعة عند الاستيراد من الصين | دينورا",
      description: "دليل شامل لتجنب 10 أخطاء قاتلة عند الاستيراد من الصين قد تكلفك آلاف الدولارات. تعلم كيف تتجنب هذه الأخطاء وتحقق نجاحاً أكبر.",
      keywords: [
        "أخطاء الاستيراد من الصين", "كيف أتجنب أخطاء الاستيراد", "أخطاء شائعة في الاستيراد",
        "استيراد من الصين للمبتدئين", "نصائح الاستيراد من الصين", "دليل الاستيراد من الصين",
        "أخطاء الاستيراد للسعودية", "أخطاء الاستيراد للإمارات", "أخطاء الاستيراد للكويت",
        "أخطاء الاستيراد لقطر", "أخطاء الاستيراد للبحرين", "أخطاء الاستيراد لعمان",
        "أخطاء الاستيراد للأردن", "أخطاء الاستيراد للعراق", "أخطاء الاستيراد للجزائر",
        "أخطاء الاستيراد للمغرب", "أخطاء الاستيراد لتونس", "أخطاء الاستيراد لمصر",
        "التحقق من الموردين الصينيين", "فحص الجودة قبل الشحن", "الرسوم الجمركية من الصين",
        "التفاوض مع الموردين الصينيين", "شروط الاستيراد من الصين", "عقود الاستيراد",
        "إدارة الشحن من الصين", "تخزين البضائع المستوردة", "تأمين الشحن من الصين",
        "متابعة الشحنات من الصين", "قرارات الاستيراد", "خطط الاستيراد",
      ],
    },
    en: {
      title: "How to Avoid Common Import Mistakes from China | Dinoora",
      description: "A comprehensive guide to avoiding 10 fatal mistakes when importing from China that could cost you thousands of dollars. Learn how to avoid these mistakes and achieve greater success.",
      keywords: [
        "China import mistakes", "how to avoid import mistakes", "common import errors",
        "importing from China for beginners", "China import tips", "China import guide",
        "import mistakes for Saudi Arabia", "import mistakes for UAE", "import mistakes for Kuwait",
        "import mistakes for Qatar", "import mistakes for Bahrain", "import mistakes for Oman",
        "import mistakes for Jordan", "import mistakes for Iraq", "import mistakes for Algeria",
        "import mistakes for Morocco", "import mistakes for Tunisia", "import mistakes for Egypt",
        "verifying Chinese suppliers", "pre-shipment quality inspection", "customs duties from China",
        "negotiating with Chinese suppliers", "China import terms", "import contracts",
        "shipping management from China", "storage of imported goods", "shipping insurance from China",
        "tracking shipments from China", "import decisions", "import plans",
      ],
    },
  },
  '/referral-program': {
    ar: {
      title: "برنامج الإحالة - اربح مع كل عميل جديد | دينورا",
      description: "انضم إلى برنامج الإحالة لدينورا واربح 5% من قيمة كل طلب من العملاء الذين تحيلهم. مكافآت غير محدودة ودفعات سريعة.",
      keywords: [
        "برنامج الإحالة", "برنامج الإحالة للشركات", "برنامج الإحالة للتجارة",
        "كسب المال من الإحالة", "برنامج الشركاء", "برنامج الأفلييت",
        "برنامج الإحالة للاستيراد", "برنامج الإحالة من الصين", "برنامج الإحالة للسعودية",
        "برنامج الإحالة للإمارات", "برنامج الإحالة للكويت", "برنامج الإحالة لقطر",
        "برنامج الإحالة للبحرين", "برنامج الإحالة لعمان", "برنامج الإحالة للأردن",
        "برنامج الإحالة للعراق", "برنامج الإحالة للجزائر", "برنامج الإحالة للمغرب",
        "برنامج الإحالة لتونس", "برنامج الإحالة لمصر", "برنامج الإحالة للبنان",
        "مكافآت الإحالة", "عمولة الإحالة", "نسبة الإحالة",
        "ربح من الإحالة", "دخل إضافي من الإحالة", "برنامج المكافآت",
      ],
    },
    en: {
      title: "Referral Program - Earn with Every New Client | Dinoora",
      description: "Join Dinoora's referral program and earn 5% of every order value from clients you refer. Unlimited rewards and fast payouts.",
      keywords: [
        "referral program", "company referral program", "trade referral program",
        "earn from referrals", "partner program", "affiliate program",
        "import referral program", "China referral program", "Saudi Arabia referral program",
        "UAE referral program", "Kuwait referral program", "Qatar referral program",
        "Bahrain referral program", "Oman referral program", "Jordan referral program",
        "Iraq referral program", "Algeria referral program", "Morocco referral program",
        "Tunisia referral program", "Egypt referral program", "Lebanon referral program",
        "referral rewards", "referral commission", "referral rate",
        "earn from referral", "additional income from referral", "rewards program",
      ],
    },
  },
};

/**
 * Get page-specific SEO metadata
 * @param pathname - The path without locale prefix
 * @param locale - The current locale (ar, en, zh)
 * @returns Metadata object with title, description, keywords
 */
export function getPageMetadata(pathname: string, locale: string): Pick<Metadata, 'title' | 'description' | 'keywords'> {
  const config = pageSEOConfigs[pathname];
  
  if (!config) {
    // Return default metadata if no specific config found
    return {
      title: locale === 'ar' ? 'دينورا - حلول التجارة العالمية' : 'Dinoora - Global Trade Solutions',
      description: locale === 'ar' 
        ? 'دينورا تقدم حلول تجارة متكاملة بين الصين والشرق الأوسط'
        : 'Dinoora offers integrated trade solutions between China and the Middle East',
      keywords: [],
    };
  }
  
  const localeConfig = locale === 'ar' ? config.ar : config.en;
  
  return {
    title: localeConfig.title,
    description: localeConfig.description,
    keywords: localeConfig.keywords,
  };
}
