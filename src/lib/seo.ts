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
  '/countries/saudi-arabia': {
    ar: {
      title: "استيراد من الصين إلى السعودية | دينورا للتجارة الدولية",
      description: "خدمات استيراد شاملة من الصين إلى السعودية مع توريد، فحص جودة، شحن، وتخليص جمركي. أفضل شركة استيراد للسعودية.",
      keywords: ["استيراد من الصين إلى السعودية", "شركة استيراد للسعودية", "شحن من الصين للسعودية", "توريد من الصين للسعودية", "استيرار للرياض", "استيرار لجدة", "استيرار للدمام"],
    },
    en: {
      title: "Import from China to Saudi Arabia | Dinoora International Trade",
      description: "Comprehensive import services from China to Saudi Arabia with sourcing, quality inspection, shipping, and customs clearance. Best import company for Saudi Arabia.",
      keywords: ["import from China to Saudi Arabia", "import company for Saudi Arabia", "shipping from China to Saudi Arabia", "sourcing from China to Saudi Arabia", "import to Riyadh", "import to Jeddah", "import to Dammam"],
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
