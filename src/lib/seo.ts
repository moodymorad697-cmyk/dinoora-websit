import type { Metadata } from "next";

const baseUrl = "https://www.dinooratrade.com";
const locales = ['en', 'ar', 'zh'];

/**
 * Generate hreflang and canonical tags for multilingual SEO
 * @param pathname - The path without the locale prefix (e.g., "/about", "/services/sourcing", "" for homepage)
 * @param locale - The current locale
 * @returns Metadata alternates object with hreflang and canonical tags
 */
export function generateSEOMetadata(pathname: string, locale: string): Pick<Metadata, 'alternates'> {
  const alternates = {
    canonical: `${baseUrl}/${locale}${pathname}`,
    languages: {
      'en': `${baseUrl}/en${pathname}`,
      'ar': `${baseUrl}/ar${pathname}`,
      'zh': `${baseUrl}/zh${pathname}`,
      'x-default': pathname === '' ? `${baseUrl}/en` : undefined,
    },
  };

  // Remove undefined x-default for non-homepage pages
  if (pathname !== '') {
    delete (alternates.languages as any)['x-default'];
  }

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
      keywords: ["شركة لوجستيات متكاملة", "استيراد من الصين للسعودية", "شركة استيراد صينية", "خدمات لوجستية", "شركة تجارة صينية", "استيراد بضائع من الصين", "شركة شحن دولية"],
    },
    en: {
      title: "Integrated Logistics Company Between China and Middle East | Dinoora",
      description: "Dinoora is an integrated logistics company between China and the Middle East. We offer comprehensive import solutions from China to Saudi Arabia and Gulf countries with sourcing, quality inspection, shipping, and customs clearance.",
      keywords: ["integrated logistics company", "import from China to Saudi Arabia", "Chinese import company", "logistics services", "Chinese trading company", "import goods from China", "international shipping company"],
    },
  },
  '/services/sourcing': {
    ar: {
      title: "كيف أجد مورد موثوق في الصين لاستيراد المنتجات | دينورا",
      description: "أفضل شركة توريد منتجات من الصين للسعودية. نساعدك في كيفية إيجاد مورد موثوق في الصين لاستيراد المنتجات بأسعار منافسة وجودة مضمونة.",
      keywords: ["كيف أجد مورد موثوق في الصين", "أفضل شركة توريد منتجات من الصين", "شركة توريد صينية", "مورد صيني موثوق", "توريد من الصين", "استيراد بالجملة", "شركة توريد للسعودية"],
    },
    en: {
      title: "How to Find Reliable Supplier in China for Import | Dinoora",
      description: "Best sourcing company for products from China to Saudi Arabia. We help you find a reliable supplier in China for importing products at competitive prices with guaranteed quality.",
      keywords: ["how to find reliable supplier in China", "best sourcing company from China", "Chinese sourcing company", "reliable Chinese supplier", "sourcing from China", "wholesale import", "sourcing company for Saudi Arabia"],
    },
  },
  '/services/inspection': {
    ar: {
      title: "خدمات فحص جودة البضائع قبل الشحن من الصين | دينورا",
      description: "شركة تفتيش ومراقبة جودة المنتجات في المصانع الصينية. نقدم خدمات فحص جودة البضائع قبل الشحن من الصين لضمان جودة المنتجات المستوردة.",
      keywords: ["خدمات فحص جودة البضائع", "شركة تفتيش ومراقبة جودة", "فحص جودة منتجات", "فحص قبل الشحن", "خدمات التفتيش في الصين", "مراقبة جودة المصانع", "فحص جودة الاستيراد"],
    },
    en: {
      title: "Quality Inspection Services Before Shipping from China | Dinoora",
      description: "Product inspection and quality control company in Chinese factories. We provide quality inspection services for goods before shipping from China to ensure imported product quality.",
      keywords: ["goods quality inspection services", "inspection and quality control company", "product quality inspection", "pre-shipment inspection", "inspection services in China", "factory quality control", "import quality inspection"],
    },
  },
  '/services/warehousing': {
    ar: {
      title: "شركة تخزين وتجميع البضائع في الصين للمستوردين | دينورا",
      description: "خدمات التخزين في الصين للمستوردين العرب. شركة تخزين وتجميع البضائع في الصين للمستوردين مع حلول تخزين آمنة واقتصادية.",
      keywords: ["شركة تخزين وتجميع البضائع", "خدمات التخزين في الصين", "تخزين بضائع الصين", "تجميع شحنات", "مستودعات في الصين", "تخزين للمستوردين", "خدمات التخزين والشحن"],
    },
    en: {
      title: "Warehousing and Consolidation Company in China for Importers | Dinoora",
      description: "Warehousing services in China for Arab importers. Warehousing and consolidation company in China for importers with secure and economical storage solutions.",
      keywords: ["warehousing and consolidation company", "warehousing services in China", "China goods storage", "shipment consolidation", "warehouses in China", "storage for importers", "warehousing and shipping services"],
    },
  },
  '/services/shipping': {
    ar: {
      title: "شحن بحري وجوي من الصين إلى السعودية بأسعار منافسة | دينورا",
      description: "أفضل شركة شحن جوي من الصين إلى السعودية. نقدم شحن بحري من الصين إلى السعودية بأسعار منافسة مع خدمات شحن دولية موثوقة.",
      keywords: ["شحن بحري من الصين للسعودية", "أفضل شركة شحن جوي من الصين", "شحن جوي للصين", "شحن بحري صيني", "شركة شحن دولية", "خدمات الشحن من الصين", "شحن بضائع من الصين"],
    },
    en: {
      title: "Sea and Air Shipping from China to Saudi Arabia at Competitive Prices | Dinoora",
      description: "Best air shipping company from China to Saudi Arabia. We offer sea shipping from China to Saudi Arabia at competitive prices with reliable international shipping services.",
      keywords: ["sea shipping from China to Saudi Arabia", "best air shipping company from China", "air shipping to China", "Chinese sea shipping", "international shipping company", "shipping services from China", "shipping goods from China"],
    },
  },
  '/services/customs': {
    ar: {
      title: "خدمات تخليص جمركي للبضائع المستوردة من الصين | دينورا",
      description: "خدمات التخليص الجمركي في ميناء جدة للبضائع الصينية. نقدم خدمات تخليص جمركي للبضائع المستوردة من الصين بسرعة وكفاءة.",
      keywords: ["خدمات تخليص جمركي", "التخليص الجمركي في السعودية", "تخليص جمركي سعودي", "شركة شحن دولية", "تخليص جمركي جدة", "استيراد وتخليص", "خدمات الجمارك"],
    },
    en: {
      title: "Customs Clearance Services for Goods Imported from China | Dinoora",
      description: "Customs clearance services at Jeddah port for Chinese goods. We provide customs clearance services for goods imported from China quickly and efficiently.",
      keywords: ["customs clearance services", "customs clearance in Saudi Arabia", "Saudi customs clearance", "international shipping company", "Jeddah customs clearance", "import and clearance", "customs services"],
    },
  },
  '/services/logistics': {
    ar: {
      title: "شركة لوجستيات متكاملة بين الصين والشرق الأوسط | دينورا",
      description: "خدمات الشحن من الصين إلى السعودية بالدفع عند الاستلام. شركة لوجستيات متكاملة بين الصين والشرق الأوسط مع حلول شاملة.",
      keywords: ["شركة لوجستيات متكاملة", "خدمات لوجستية صينية", "شركة شحن دولية", "خدمات الشحن من الصين", "حلول لوجستية", "شحن بالدفع عند الاستلام", "لوجستيات الاستيراد"],
    },
    en: {
      title: "Integrated Logistics Company Between China and Middle East | Dinoora",
      description: "Shipping services from China to Saudi Arabia with payment on delivery. Integrated logistics company between China and the Middle East with comprehensive solutions.",
      keywords: ["integrated logistics company", "Chinese logistics services", "international shipping company", "shipping services from China", "logistics solutions", "payment on delivery shipping", "import logistics"],
    },
  },
  '/contact': {
    ar: {
      title: "خدمات استيراد من الصين للشركات السعودية الصغيرة | دينورا",
      description: "شركة استيراد من الصين للسعودية بأسعار منافسة. خدمات استيراد من الصين للشركات السعودية الصغيرة والمتوسطة مع دعم كامل.",
      keywords: ["خدمات استيراد من الصين", "استيراد للسعودية", "شركة استيراد صينية", "تجارة مع الصين", "استيراد للشركات السعودية", "خدمات الاستيراد", "شركة تجارة دولية"],
    },
    en: {
      title: "Import Services from China for Small Saudi Companies | Dinoora",
      description: "Import company from China to Saudi Arabia at competitive prices. Import services from China for small and medium Saudi companies with full support.",
      keywords: ["import services from China", "import to Saudi Arabia", "Chinese import company", "trade with China", "import for Saudi companies", "import services", "international trading company"],
    },
  },
  '/quote': {
    ar: {
      title: "كيف أستورد من الصين للسعودية بدون وسيط | دينورا",
      description: "شركة توريد وشحن من الصين إلى دول الخليج. تعلم كيف تستورد من الصين للسعودية بدون وسيط مع دينورا.",
      keywords: ["كيف أستورد من الصين للسعودية", "استيراد بدون وسيط", "استيراد بالجملة", "توريد من الصين", "شركة توريد وشحن", "استيراد مباشر", "طلب عرض سعر"],
    },
    en: {
      title: "How to Import from China to Saudi Arabia Without Intermediary | Dinoora",
      description: "Sourcing and shipping company from China to Gulf countries. Learn how to import from China to Saudi Arabia without intermediary with Dinoora.",
      keywords: ["how to import from China to Saudi Arabia", "import without intermediary", "wholesale import", "sourcing from China", "sourcing and shipping company", "direct import", "request price quote"],
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
