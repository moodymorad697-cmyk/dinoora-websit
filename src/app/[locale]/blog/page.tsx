"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen, Clock, ArrowRight, Search, Ship, ShieldCheck, Warehouse,
  FileCheck, Package, TrendingUp, Globe, Users, Tag, ChevronRight,
  Boxes, Scale, Handshake, MapPin, BarChart3, Lightbulb, Star
} from "lucide-react";

const categories = [
  { id: "all", label: "All Articles", labelAr: "جميع المقالات", icon: BookOpen },
  { id: "sourcing", label: "Sourcing", labelAr: "التوريد", icon: Search },
  { id: "shipping", label: "Shipping", labelAr: "الشحن", icon: Ship },
  { id: "quality", label: "Quality Control", labelAr: "فحص الجودة", icon: ShieldCheck },
  { id: "warehousing", label: "Warehousing", labelAr: "التخزين", icon: Warehouse },
  { id: "customs", label: "Customs", labelAr: "الجمارك", icon: FileCheck },
  { id: "brokerage", label: "Trade Brokerage", labelAr: "الوساطة التجارية", icon: Handshake },
];

const blogPosts = [
  {
    id: 1,
    category: "sourcing",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    title: "The Complete Guide to Product Sourcing from China in 2024",
    titleAr: "الدليل الشامل لتوريد المنتجات من الصين 2024",
    excerpt: "Learn the proven strategies for finding reliable suppliers, negotiating prices, and managing your sourcing pipeline effectively. From Alibaba to factory visits.",
    excerptAr: "تعلّم الاستراتيجيات المُثبتة لإيجاد موردين موثوقين، التفاوض على الأسعار، وإدارة خط توريدك بفعالية. من علي بابا حتى زيارات المصانع.",
    author: "Dinoora Team",
    date: "2024-12-15",
    readTime: "15 min",
    tags: ["sourcing", "suppliers", "china"],
    featured: true,
  },
  {
    id: 2,
    category: "shipping",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80",
    title: "Sea Freight vs Air Freight: How to Choose the Right Shipping Method",
    titleAr: "الشحن البحري مقابل الجوي: كيف تختار طريقة الشحن المناسبة",
    excerpt: "A detailed comparison of ocean freight and air freight from China including costs, transit times, weight limits, and when to use each option for maximum efficiency.",
    excerptAr: "مقارنة مفصلة بين الشحن البحري والجوي من الصين تشمل التكاليف، أوقات العبور، حدود الوزن، ومتى تستخدم كل خيار لتحقيق أقصى كفاءة.",
    author: "Logistics Dept",
    date: "2024-12-10",
    readTime: "12 min",
    tags: ["shipping", "logistics", "freight"],
    featured: true,
  },
  {
    id: 3,
    category: "quality",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80",
    title: "Quality Control Checklist: What to Inspect Before Shipping from China",
    titleAr: "قائمة فحص الجودة: ماذا تفحص قبل الشحن من الصين",
    excerpt: "Protect your investment with our comprehensive QC checklist covering AQL sampling, factory audits, pre-shipment inspections, and defect classification standards.",
    excerptAr: "احمِ استثمارك مع قائمة فحص الجودة الشاملة التي تغطي أخذ العينات AQL، تدقيق المصانع، الفحص قبل الشحن، ومعايير تصنيف العيوب.",
    author: "QC Department",
    date: "2024-12-05",
    readTime: "10 min",
    tags: ["quality", "inspection", "AQL"],
    featured: false,
  },
  {
    id: 4,
    category: "customs",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80",
    title: "Customs Clearance Simplified: Import Duties, HS Codes & Documentation",
    titleAr: "التخليص الجمركي مبسّط: الرسوم الجمركية، رموز HS والتوثيق",
    excerpt: "Demystify customs clearance with this guide to HS code classification, duty calculation, required documents, and tips to avoid delays at ports of entry.",
    excerptAr: "اكتشف خبايا التخليص الجمركي من تصنيف رموز HS، حساب الرسوم، المستندات المطلوبة، ونصائح لتجنب التأخير في موانئ الدخول.",
    author: "Trade Compliance",
    date: "2024-11-28",
    readTime: "14 min",
    tags: ["customs", "duties", "documentation"],
    featured: false,
  },
  {
    id: 5,
    category: "warehousing",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
    title: "Warehouse Management in China: Consolidation, Storage & Inventory Control",
    titleAr: "إدارة المستودعات في الصين: التجميع، التخزين وإدارة المخزون",
    excerpt: "Optimize your supply chain with smart warehousing. Learn about consolidation strategies, inventory management systems, and how to reduce storage costs by 30%.",
    excerptAr: "حسّن سلسلة التوريد مع التخزين الذكي. تعلّم استراتيجيات التجميع، أنظمة إدارة المخزون، وكيف تخفّض تكاليف التخزين بنسبة 30%.",
    author: "Operations Team",
    date: "2024-11-20",
    readTime: "11 min",
    tags: ["warehousing", "inventory", "consolidation"],
    featured: false,
  },
  {
    id: 6,
    category: "brokerage",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
    title: "Trade Brokerage: How a China Agent Saves You Time & Money",
    titleAr: "الوساطة التجارية: كيف يوفّر لك وكيل الصين الوقت والمال",
    excerpt: "Understand the role of trade brokers in international commerce. From supplier negotiations to payment protection, learn why 80% of importers use agents.",
    excerptAr: "افهم دور الوسطاء التجاريين في التجارة الدولية. من مفاوضات الموردين إلى حماية المدفوعات، اعرف لماذا 80% من المستوردين يستخدمون وكلاء.",
    author: "Dinoora Team",
    date: "2024-11-15",
    readTime: "13 min",
    tags: ["brokerage", "agent", "negotiation"],
    featured: true,
  },
  {
    id: 7,
    category: "shipping",
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&q=80",
    title: "Incoterms 2024 Explained: EXW, FOB, CIF, DDP — Which One Is Right for You?",
    titleAr: "شروح Incoterms 2024: EXW, FOB, CIF, DDP — أيهم مناسب لك؟",
    excerpt: "Master the 11 Incoterms with real-world examples. Learn how each term affects your costs, risks, and responsibilities when importing from China.",
    excerptAr: "أتقن الـ 11 مصطلح تجاري دولي مع أمثلة واقعية. اعرف كيف يؤثر كل مصطلح على تكاليفك، مخاطرك، ومسؤولياتك عند الاستيراد من الصين.",
    author: "Trade Compliance",
    date: "2024-11-10",
    readTime: "16 min",
    tags: ["incoterms", "shipping", "trade-terms"],
    featured: false,
  },
  {
    id: 8,
    category: "sourcing",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80",
    title: "Factory Audit Guide: How to Verify Chinese Suppliers Before Ordering",
    titleAr: "دليل تدقيق المصانع: كيف تتحقق من الموردين الصينيين قبل الطلب",
    excerpt: "A step-by-step factory audit methodology including what to check, red flags to watch for, and how to evaluate production capacity and quality systems.",
    excerptAr: "منهجية تدقيق المصانع خطوة بخطوة تشمل ما يجب فحصه، العلامات الحمراء، وكيفية تقييم القدرة الإنتاجية وأنظمة الجودة.",
    author: "QC Department",
    date: "2024-11-05",
    readTime: "12 min",
    tags: ["sourcing", "audit", "suppliers"],
    featured: false,
  },
  {
    id: 9,
    category: "brokerage",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
    title: "Payment Methods in China Trade: LC, T/T, Escrow & How to Stay Safe",
    titleAr: "طرق الدفع في التجارة مع الصين: LC, T/T, Escrow وكيف تحمي أموالك",
    excerpt: "Navigate the complex world of international payments. Compare Letter of Credit, Wire Transfer, and Escrow services with pros, cons, and security tips.",
    excerptAr: "تنقّل في عالم المدفوعات الدولية المعقد. قارن بين خطاب الاعتماد، التحويل البنكي، والضمان مع المزايا والعيوب ونصائح الأمان.",
    author: "Finance Team",
    date: "2024-10-28",
    readTime: "11 min",
    tags: ["brokerage", "payment", "security"],
    featured: false,
  },
  {
    id: 10,
    category: "quality",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80",
    title: "Understanding AQL Sampling: The International Standard for Quality Inspection",
    titleAr: "فهم أخذ العينات AQL: المعيار الدولي لفحص الجودة",
    excerpt: "Deep dive into Acceptable Quality Limit (AQL) standards. Learn inspection levels, sampling plans, and how to set the right AQL for your product category.",
    excerptAr: "غوص عميق في معايير حد الجودة المقبول (AQL). تعلّم مستويات الفحص، خطط أخذ العينات، وكيف تحدد AQL المناسب لفئة منتجك.",
    author: "QC Department",
    date: "2024-10-20",
    readTime: "9 min",
    tags: ["quality", "AQL", "standards"],
    featured: false,
  },
  {
    id: 11,
    category: "warehousing",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80",
    title: "Multi-Supplier Consolidation: How to Save Up to 40% on Shipping Costs",
    titleAr: "تجميع متعدد الموردين: كيف توفّر حتى 40% من تكاليف الشحن",
    excerpt: "Combine shipments from multiple factories into one container. Learn the logistics of consolidation, timing coordination, and cost optimization strategies.",
    excerptAr: "اجمع شحنات من مصانع متعددة في حاوية واحدة. تعلّم لوجستيات التجميع، تنسيق التوقيت، واستراتيجيات تحسين التكلفة.",
    author: "Operations Team",
    date: "2024-10-15",
    readTime: "10 min",
    tags: ["warehousing", "consolidation", "cost-saving"],
    featured: false,
  },
  {
    id: 12,
    category: "customs",
    image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?w=800&q=80",
    title: "Import Regulations by Country: Saudi Arabia, UAE, Egypt & More",
    titleAr: "لوائح الاستيراد حسب الدولة: السعودية، الإمارات، مصر والمزيد",
    excerpt: "Country-specific import regulations, banned products, certification requirements (SASO, ESMA), and tips for smooth customs clearance in Middle East markets.",
    excerptAr: "لوائح الاستيراد الخاصة بكل دولة، المنتجات المحظورة، متطلبات الشهادات (SASO, ESMA)، ونصائح للتخليص الجمركي السلس في أسواق الشرق الأوسط.",
    author: "Trade Compliance",
    date: "2024-10-10",
    readTime: "18 min",
    tags: ["customs", "regulations", "middle-east"],
    featured: false,
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'ar';

  const filteredPosts = blogPosts.filter((post) => {
    const matchCategory = activeCategory === "all" || post.category === activeCategory;
    const matchSearch = searchQuery === "" || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.titleAr.includes(searchQuery) ||
      post.tags.some(tag => tag.includes(searchQuery.toLowerCase()));
    return matchCategory && matchSearch;
  });

  const featuredPosts = blogPosts.filter(p => p.featured);

  return (
    <main className="min-h-screen text-slate-100 overflow-x-hidden" style={{ background: 'var(--bg-dark)' }}>
      
      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden section-darker">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=1920&q=80')" }} />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950" />
        </div>
        <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[130px] animate-float" />
        <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-cyan-500/8 rounded-full blur-[100px] animate-float" style={{ animationDelay: '3s' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-semibold tracking-wider uppercase backdrop-blur-sm mb-6">
              <BookOpen className="w-4 h-4" />
              <span>مركز المعرفة التجارية</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              مدونة <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">دينورا</span> التجارية
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-10">
              دليلك الشامل لكل ما يتعلق بالاستيراد والتصدير من الصين — التوريد، الشحن، الجمارك، فحص الجودة، التخزين، والوساطة التجارية
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث عن مقالات..."
                className="w-full pl-12 pr-4 py-4 bg-white/[0.04] border border-white/[0.08] rounded-2xl text-white placeholder-slate-500 focus:border-blue-500/40 focus:outline-none focus:ring-1 focus:ring-blue-500/20 transition-all text-base"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="relative z-10 -mt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-blue-500/15 text-blue-400 border border-blue-500/30 shadow-lg shadow-blue-500/10'
                    : 'bg-white/[0.03] text-slate-400 border border-white/[0.06] hover:bg-white/[0.06] hover:text-white'
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.labelAr}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED POSTS */}
      {activeCategory === "all" && searchQuery === "" && (
        <section className="py-16 section-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-10">
              <Star className="w-5 h-5 text-amber-400" />
              <h2 className="text-2xl font-bold text-white">مقالات مميزة</h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-6">
              {featuredPosts.map((post, i) => (
                <Link key={post.id} href={`/${locale}/blog/${post.id}`} className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-1 ${i === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
                  <div className={`relative ${i === 0 ? 'h-full min-h-[400px]' : 'h-[220px]'}`}>
                    <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700" style={{ backgroundImage: `url('${post.image}')` }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-semibold rounded-full mb-3 uppercase tracking-wider">
                        {categories.find(c => c.id === post.category)?.labelAr}
                      </span>
                      <h3 className={`font-bold text-white group-hover:text-blue-300 transition-colors mb-2 ${i === 0 ? 'text-2xl' : 'text-lg'}`}>
                        {post.titleAr}
                      </h3>
                      <div className="flex items-center gap-4 text-xs text-slate-400">
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ALL POSTS GRID */}
      <section className="py-16 section-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold text-white">
              {activeCategory === "all" 
                ? 'جميع المقالات'
                : categories.find(c => c.id === activeCategory)?.labelAr
              }
            </h2>
            <span className="text-sm text-slate-500">{filteredPosts.length} مقال</span>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <Search className="w-12 h-12 text-slate-700 mx-auto mb-4" />
              <p className="text-slate-500 text-lg">لا توجد مقالات مطابقة</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <Link key={post.id} href={`/${locale}/blog/${post.id}`} className="group relative bg-white/[0.02] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-blue-500/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: `url('${post.image}')` }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60" />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-blue-500/20 backdrop-blur-sm text-blue-400 text-xs font-semibold rounded-full uppercase tracking-wider border border-blue-500/20">
                      {categories.find(c => c.id === post.category)?.labelAr}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-300 transition-colors leading-snug">
                      {post.titleAr}
                    </h3>
                    <p className="text-sm text-slate-400 mb-4 leading-relaxed line-clamp-2">
                      {post.excerptAr}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {post.tags.map((tag, j) => (
                        <span key={j} className="px-2 py-0.5 bg-white/[0.04] text-slate-500 text-[10px] rounded-md font-medium uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Meta */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/[0.04]">
                      <div className="flex items-center gap-3 text-xs text-slate-500">
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                        <span>{post.date}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 relative overflow-hidden section-navy">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-[150px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
جاهز لبدء مشروعك التجاري مع الصين؟
          </h2>
          <p className="text-lg text-slate-400 mb-8">
فريقنا من الخبراء جاهز لمساعدتك. احصل على استشارة مجانية اليوم.
          </p>
          <Link 
            href={`/${locale}#quote`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all"
          >
احصل على عرض سعر
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
