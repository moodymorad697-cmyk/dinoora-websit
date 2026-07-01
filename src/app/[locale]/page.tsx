"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { 
  ArrowRight, Globe, Search, ShieldCheck, Warehouse, Ship, FileCheck, Package,
  Factory, Boxes, Zap, Award, CheckCircle2, Star, Building2, Truck, Shield,
  BarChart3, Phone, Mail, MessageCircle, BookOpen, FileText, Lightbulb, 
  HelpCircle, Send, MapPin, TrendingUp, Users, Clock, ChevronDown, Play,
  X, Menu, Sparkles, Target, Workflow, Rocket, Handshake, BadgeCheck
} from "lucide-react";

// Premium Components
const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  
  return (
    <div 
      ref={ref}
      className={`transition-all duration-1000 ${className} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const PremiumSection = ({ 
  id, 
  children, 
  className = "", 
  bgImage = "",
  overlay = ""
}: { 
  id: string, 
  children: React.ReactNode, 
  className?: string,
  bgImage?: string,
  overlay?: string
}) => (
  <section id={id} className={`relative py-28 lg:py-36 overflow-hidden ${className}`}>
    {bgImage && (
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url('${bgImage}')` }} />
        <div className={`absolute inset-0 ${overlay}`} />
      </div>
    )}
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  </section>
);

const AnimatedCounter = ({ end, suffix = "" }: { end: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const duration = 2000, steps = 60, increment = end / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          setCount(current >= end ? end : Math.floor(current));
        }, duration / steps);
        return () => clearInterval(timer);
      }
    }, { threshold: 0.5 });
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);
  
  return <span ref={ref}>{count}{suffix}</span>;
};

export default function Home() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'services', 'features', 'process', 'industries', 'testimonials', 'knowledge', 'quote'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'services', label: 'الخدمات' },
    { id: 'features', label: 'لماذا نحن' },
    { id: 'process', label: 'العملية' },
    { id: 'knowledge', label: 'المعرفة' },
    { id: 'quote', label: 'احصل على عرض', highlight: true },
  ];

  const services = [
    { 
      icon: Search, 
      title: "توريد المنتجات", 
      desc: "وصول مباشر لشبكة +500 مصنع مُدقَّق ميدانياً عبر 30 مقاطعة صينية. خوارزمية ذكية تطابق مواصفاتك مع أنسب 3 موردين خلال 48 ساعة.",
      features: ["تدقيق ميداني", "مقارنة أسعار", "إدارة العينات", "تأمين الدفع"],
      gradient: "from-blue-500 to-blue-600",
      color: "blue"
    },
    { 
      icon: ShieldCheck, 
      title: "فحص الجودة", 
      desc: "بروتوكولات فحص ثلاثية المراحل (AQL Level II) مع تقارير مصوّرة. مهندسو جودة في 12 مدينة صناعية يضمنون صفر عيوب.",
      features: ["معيار AQL-II", "فحص 3 مراحل", "تقرير مصوّر", "شهادة مطابقة"],
      gradient: "from-emerald-500 to-green-600",
      color: "emerald"
    },
    { 
      icon: Warehouse, 
      title: "التخزين والتجميع", 
      desc: "3 مستودعات ذكية (+8,000م²) في إيوو وغوانزو وشنزن. تجميع متعدد الموردين، فرز بالباركود، وتخزين مكيّف حسب المنتج.",
      features: ["3 مستودعات", "تجميع ذكي", "جرد إلكتروني", "تخزين مكيّف"],
      gradient: "from-violet-500 to-purple-600",
      color: "violet"
    },
    { 
      icon: Ship, 
      title: "الشحن الدولي", 
      desc: "شحن بحري وجوي وبري وقطارات لأكثر من 50 دولة. حجز تلقائي، تتبع GPS لحظي، ومسارات محسّنة تخفض التكلفة حتى 30%.",
      features: ["بحري وجوي", "قطارات دولية", "تتبع GPS", "توفير 30%"],
      gradient: "from-cyan-500 to-blue-600",
      color: "cyan"
    },
    { 
      icon: FileCheck, 
      title: "الجمارك والامتثال", 
      desc: "تخليص جمركي شامل مع تصنيف HS دقيق، تحسين الرسوم، وامتثال كامل لمعايير SASO، ESMA، CE، وFDA. صفر رفض جمركي.",
      features: ["تصنيف HS", "تخفيض رسوم", "SASO/ESMA/CE", "صفر رفض"],
      gradient: "from-amber-500 to-orange-600",
      color: "amber"
    },
    { 
      icon: Package, 
      title: "توصيل DDP للباب", 
      desc: "حلول باب-لباب شاملة من أرضية المصنع إلى مستودعك. تسعير ثابت شفاف — بدون رسوم مخفية أو مفاجآت.",
      features: ["DDP شامل", "سعر ثابت", "توصيل نهائي", "تأمين شحن"],
      gradient: "from-rose-500 to-pink-600",
      color: "rose"
    },
  ];

  const features = [
    { icon: Target, title: "مطابقة ذكية للموردين", desc: "خوارزمية تحلل +12,000 نقطة بيانات لإيجاد المصانع الأنسب. 3 خيارات مؤهلة خلال 48 ساعة بدل أسابيع البحث العشوائي.", gradient: "from-blue-500 to-cyan-500", bgImage: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80" },
    { icon: Shield, title: "حماية كاملة لاستثمارك", desc: "تأمين تجاري، ضمان استرداد، حماية مدفوعات عبر Escrow، وكفالة جودة. لن تخسر ريالاً واحداً بدون تعويض.", gradient: "from-emerald-500 to-green-500", bgImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80" },
    { icon: BarChart3, title: "توفير 23–40% من التكاليف", desc: "مقارنة أسعار فورية عبر +500 مصنع. عملاؤنا يوفرون ما بين 23% إلى 40% مقارنة بالتوريد المباشر غير المدار.", gradient: "from-purple-500 to-pink-500", bgImage: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80" },
    { icon: Handshake, title: "فريق عربي-صيني متخصص", desc: "مديرو حسابات يتقنون العربية والصينية والإنجليزية. يفهمون ثقافة المصانع وتوقعات العميل العربي بدقة.", gradient: "from-orange-500 to-amber-500", bgImage: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80" },
    { icon: Clock, title: "أسرع 40% من المنافسين", desc: "معالجة متوازية: التوريد والفحص والشحن يعملون معاً. منتجاتك تصل السوق قبل المنافس بأسابيع.", gradient: "from-rose-500 to-red-500", bgImage: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80" },
    { icon: BadgeCheck, title: "صفر رفض جمركي", desc: "SASO, ESMA, CE, FDA, GCC — نتولى كل الشهادات والمطابقة. سجل نظيف 100% عبر +15,000 شحنة.", gradient: "from-indigo-500 to-violet-500", bgImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80" },
  ];

  const processSteps = [
    { step: "01", icon: MessageCircle, title: "الاستشارة والتخطيط", desc: "استشارة معمقة لتحديد مواصفات منتجك، التكلفة المستهدفة، مستوى الجودة، وجدول التسليم في خطة تنفيذية." },
    { step: "02", icon: Search, title: "البحث والتفاوض", desc: "مطابقة ذكية للمصانع عبر 30 مقاطعة. نختار أفضل 3 موردين، نتفاوض على السعر، وندير إنتاج العينات." },
    { step: "03", icon: ShieldCheck, title: "الفحص والتحقق", desc: "فحص بمعايير AQL في 3 نقاط: قبل الإنتاج، أثناء التصنيع، والفحص النهائي قبل الشحن. أدلة مصورة ومرئية." },
    { step: "04", icon: Truck, title: "الشحن والتسليم", desc: "شحن مجمّع عبر مسارات محسّنة. تخليص جمركي كامل، تتبع لحظي، وتوصيل DDP حتى باب مستودعك." },
  ];

  const testimonials = [
    { name: "أحمد العمري", role: "المدير التنفيذي — شركة تقنيات الخليج، الرياض", content: "دينورا خفضت تكاليف التوريد 35% مع تحسين الجودة فعلياً. عملية فحص المصانع لديهم اكتشفت مشاكل ما كنا لنجدها بأنفسنا. تغيير حقيقي لأعمالنا.", rating: 5 },
    { name: "سارة الهاشمي", role: "مديرة المشتريات — Luxe Brands، دبي", content: "نستورد من الصين منذ 8 سنوات، لكن بروتوكولات فحص الجودة في دينورا على مستوى آخر. صفر عيوب في 14 شهر. أصبحوا شريكنا الحصري للتوريد.", rating: 5 },
    { name: "خالد الزهراني", role: "مدير العمليات — قطع غيار الخليج، جدة", content: "من التحقق من المورد إلى التخليص الجمركي إلى التوصيل — يديرون كل شيء. عمليات الاستيراد تحولت من فوضى إلى نظام في 3 أشهر.", rating: 5 },
  ];

  const knowledgeArticles = [
    { icon: BookOpen, title: "دليل التوريد الشامل من الصين 2024", category: "دليل", readTime: "15 دقيقة", href: "/blog" },
    { icon: FileText, title: "شروط التجارة الدولية: EXW إلى DDP", category: "شحن", readTime: "12 دقيقة", href: "/blog" },
    { icon: Lightbulb, title: "قائمة فحص الجودة AQL", category: "جودة", readTime: "10 دقائق", href: "/blog" },
    { icon: HelpCircle, title: "الجمارك ولوائح الاستيراد", category: "جمارك", readTime: "14 دقيقة", href: "/blog" },
  ];

  return (
    <main className="min-h-screen text-slate-100 overflow-x-hidden" style={{ background: 'var(--bg-primary)' }}>

      {/* ══════════════════════ HERO SECTION ══════════════════════ */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        {/* BG: Base */}
        <div className="absolute inset-0 z-0" style={{ background: 'linear-gradient(135deg, #020617 0%, #0a0f2e 25%, #0c1445 50%, #1e1b4b 75%, #020617 100%)' }} />
        
        {/* BG: Mesh gradient */}
        <div className="absolute inset-0 z-[1] mesh-gradient" />
        
        {/* BG: Premium Aurora blobs */}
        <div className="absolute top-[-15%] right-[-10%] w-[800px] h-[800px] rounded-full animate-morph-blob z-[2]" style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.25), rgba(6,182,212,0.15), transparent 70%)' }} />
        <div className="absolute bottom-[-20%] left-[-15%] w-[700px] h-[700px] rounded-full animate-morph-blob z-[2]" style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.2), rgba(6,182,212,0.12), transparent 70%)', animationDelay: '3s' }} />
        <div className="absolute top-[25%] left-[35%] w-[600px] h-[600px] rounded-full animate-morph-blob z-[2]" style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.08), rgba(37,99,235,0.1), transparent 60%)', animationDelay: '5s' }} />
        <div className="absolute bottom-[30%] right-[20%] w-[400px] h-[400px] rounded-full animate-morph-blob z-[2]" style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.15), rgba(139,92,246,0.1), transparent 65%)', animationDelay: '2s' }} />

        {/* BG: Grid */}
        <div className="absolute inset-0 z-[3] grid-pattern opacity-30" />

        {/* BG: Particles */}
        {[
          { top: '8%', right: '12%', size: 4, color: 'bg-blue-400' },
          { top: '22%', right: '78%', size: 3, color: 'bg-cyan-400' },
          { top: '45%', right: '15%', size: 3, color: 'bg-violet-400' },
          { top: '68%', right: '65%', size: 4, color: 'bg-blue-400' },
          { top: '35%', right: '50%', size: 2, color: 'bg-cyan-400' },
          { top: '82%', right: '30%', size: 3, color: 'bg-violet-400' },
          { top: '15%', right: '45%', size: 2, color: 'bg-blue-400' },
          { top: '55%', right: '85%', size: 3, color: 'bg-cyan-400' },
        ].map((p, i) => (
          <div key={i} className={`absolute rounded-full ${p.color}/50 z-[4] animate-glow-pulse`} style={{ top: p.top, right: p.right, width: `${p.size}px`, height: `${p.size}px`, animation: `particle-float ${6 + i}s ease-in-out infinite`, animationDelay: `${i * 0.6}s` }} />
        ))}

        {/* Decorative lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-l from-transparent via-blue-500/40 to-transparent z-[5]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-l from-transparent via-cyan-500/30 to-transparent z-[5]" />

        {/* ═══ CONTENT ═══ */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-28 w-full">
          <div className="grid lg:grid-cols-2 gap-14 xl:gap-24 items-center">
            
            {/* RIGHT (RTL) - Main Text */}
            <FadeIn>
              <div className="space-y-8">
                <div className="section-badge animate-hero-shine">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>متاحون على مدار الساعة — شريك +500 شركة عربية</span>
                </div>

                <h1 className="text-[2.75rem] sm:text-6xl lg:text-[4.5rem] xl:text-[5rem] font-extrabold leading-[1.05] tracking-tight">
                  <span className="text-white block animate-text-reveal">شريكك الاستراتيجي</span>
                  <span className="block mt-3 gradient-text-ultra animate-text-reveal" style={{ animationDelay: '0.1s' }}>للتجارة مع الصين</span>
                  <span className="block mt-2 text-white/90 text-[0.7em] animate-text-reveal" style={{ animationDelay: '0.2s' }}>من المصنع إلى بابك</span>
                </h1>

                <p className="text-lg sm:text-xl text-slate-400 max-w-xl leading-relaxed animate-text-reveal" style={{ animationDelay: '0.3s' }}>
                  نتولّى كل التعقيدات — توريد، فحص جودة، تخزين، شحن، وتخليص جمركي — حتى تركّز أنت على تنمية أعمالك وأرباحك.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-3 animate-text-reveal" style={{ animationDelay: '0.4s' }}>
                  <button onClick={() => scrollToSection('quote')} className="btn-ultra animate-hero-shine group">
                    <Sparkles className="w-5 h-5" />
                    <span>ابدأ مشروعك الآن</span>
                    <ArrowRight className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  </button>
                  <button onClick={() => scrollToSection('services')} className="btn-outline group">
                    <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    استكشف خدماتنا
                  </button>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-0 pt-10 animate-text-reveal" style={{ animationDelay: '0.5s' }}>
                  {[
                    { val: "500+", label: "مشروع ناجح" },
                    { val: "50+", label: "دولة نخدمها" },
                    { val: "99%", label: "رضا العملاء" },
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center">
                      <div className="text-center px-6 sm:px-8">
                        <div className="text-3xl sm:text-4xl font-extrabold text-white text-shadow-glow animate-count-glow">{stat.val}</div>
                        <div className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">{stat.label}</div>
                      </div>
                      {i < 2 && <div className="hero-stat-divider" />}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* LEFT (RTL) - Quick Quote Card */}
            <FadeIn delay={300}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-600/40 via-cyan-500/25 to-violet-600/20 rounded-[2.5rem] blur-3xl opacity-70 animate-glow-pulse" />
                
                <div className="relative ultra-card p-1">
                  <div className="relative rounded-3xl overflow-hidden" style={{ background: 'linear-gradient(160deg, rgba(15,23,42,0.95), rgba(3,7,18,0.98))' }}>
                    <div className="relative px-8 pt-8 pb-6">
                      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-l from-blue-500 via-cyan-400 via-violet-400 to-blue-600" />
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-2xl font-extrabold text-white">عرض سعر مجاني</h3>
                          <p className="text-sm text-slate-500 mt-1">رد مضمون خلال 24 ساعة</p>
                        </div>
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30 rotate-3 hover:rotate-0 transition-transform duration-500 animate-glow-pulse">
                          <Globe className="w-7 h-7 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="px-8 pb-8 space-y-4">
                      <div className="relative">
                        <Users className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <input type="text" placeholder="اسمك الكامل" className="w-full pr-11 pl-4 py-3.5 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder-slate-500 focus:border-blue-500/40 focus:bg-white/[0.06] focus:outline-none focus:ring-1 focus:ring-blue-500/20 transition-all" />
                      </div>
                      <div className="relative">
                        <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <input type="email" placeholder="بريدك الإلكتروني" className="w-full pr-11 pl-4 py-3.5 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder-slate-500 focus:border-blue-500/40 focus:bg-white/[0.06] focus:outline-none focus:ring-1 focus:ring-blue-500/20 transition-all" />
                      </div>
                      <div className="relative">
                        <Package className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <input type="text" placeholder="نوع المنتج المطلوب" className="w-full pr-11 pl-4 py-3.5 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder-slate-500 focus:border-blue-500/40 focus:bg-white/[0.06] focus:outline-none focus:ring-1 focus:ring-blue-500/20 transition-all" />
                      </div>
                      <button className="w-full py-4 bg-gradient-to-l from-blue-600 via-violet-500 to-cyan-500 text-white rounded-xl font-bold text-base hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 animate-hero-shine">
                        <Send className="w-4 h-4" />
                        احصل على عرض سعر الآن
                      </button>
                    </div>

                    <div className="px-8 py-5 bg-white/[0.02] border-t border-white/[0.06] flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>بدون أي التزام</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-400">
                        <ShieldCheck className="w-4 h-4 text-blue-400" />
                        <span>بياناتك محمية 100%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Trusted By */}
          <FadeIn delay={500}>
            <div className="mt-24 pt-12 border-t border-white/[0.05]">
              <p className="text-center text-sm text-slate-600 uppercase tracking-[0.2em] font-bold mb-10">موثوق من شركات رائدة في هذه القطاعات</p>
              <div className="flex items-center justify-center gap-8 sm:gap-14 flex-wrap opacity-50 hover:opacity-70 transition-opacity duration-500">
                {[
                  { icon: Boxes, name: "سلع استهلاكية" },
                  { icon: Zap, name: "إلكترونيات" },
                  { icon: Factory, name: "صناعات ثقيلة" },
                  { icon: Building2, name: "أثاث ومفروشات" },
                  { icon: TrendingUp, name: "تجارة التجزئة" },
                  { icon: Truck, name: "قطع غيار" },
                ].map((ind, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-slate-400 hover:text-blue-300 transition-colors duration-300 cursor-default">
                    <ind.icon className="w-5 h-5" />
                    <span className="text-sm font-bold whitespace-nowrap">{ind.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <span className="text-[10px] text-slate-600 uppercase tracking-[0.25em] font-bold">اكتشف المزيد</span>
          <div className="w-6 h-10 rounded-full border-2 border-slate-700/60 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-scroll-indicator" />
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-[#030712] via-[#030712]/80 to-transparent z-[6]" />
      </section>

      {/* ══════════════════════ SECTION DIVIDER ══════════════════════ */}
      <div className="section-divider" />

      {/* ══════════════════════ SERVICES SECTION ══════════════════════ */}
      <section id="services" className="relative py-32 lg:py-40 overflow-hidden section-premium">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/[0.08] rounded-full blur-[160px] animate-morph-blob" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-600/[0.06] rounded-full blur-[140px] animate-morph-blob" style={{ animationDelay: '3s' }} />
        <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-cyan-500/[0.05] rounded-full blur-[100px] animate-morph-blob" style={{ animationDelay: '5s' }} />
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="section-badge animate-hero-shine mb-6">
              <Zap className="w-4 h-4" />
              <span>خدماتنا الاحترافية</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              حلول <span className="gradient-text-ultra">متكاملة</span> من المصنع إلى بابك
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              ست خدمات أساسية مصممة بدقة لتغطي كل مرحلة من مراحل سلسلة التوريد الدولية
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="group h-full ultra-card p-8">
                <div className={`w-16 h-16 mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br ${service.gradient} shadow-xl shadow-${service.color}-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 animate-glow-pulse`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-extrabold text-white mb-3 group-hover:text-blue-300 transition-colors">{service.title}</h3>
                <p className="text-slate-400 mb-6 text-sm leading-relaxed">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, j) => (
                    <span key={j} className="px-3 py-1.5 bg-white/[0.04] text-slate-300 rounded-lg text-xs font-medium border border-white/[0.06] hover:bg-white/[0.08] hover:border-blue-500/20 transition-all">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ══════════════════════ FEATURES GRID ══════════════════════ */}
      <PremiumSection id="features" className="section-rich" bgImage="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&q=80" overlay="bg-slate-950/96">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="section-badge-gold animate-hero-shine mb-6">
              <Award className="w-4 h-4" />
              <span>لماذا نحن</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              لماذا يختارنا <span className="gradient-text-ultra">رواد الأعمال</span>
            </h2>
            <p className="text-xl text-slate-400">
              دقة، موثوقية، ونتائج تدفع النمو
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="group relative overflow-hidden rounded-2xl ultra-card p-7">
                {/* Background Image */}
                <div className="absolute inset-0 opacity-8 group-hover:opacity-15 transition-opacity duration-700">
                  <div 
                    className="w-full h-full bg-cover bg-center scale-110 group-hover:scale-100 transition-transform duration-700"
                    style={{ backgroundImage: `url('${feature.bgImage}')` }}
                  />
                </div>
                
                {/* Gradient Overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-[0.1] transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative">
                  <div className={`w-14 h-14 mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br ${feature.gradient} shadow-lg shadow-${feature.color}-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 animate-glow-pulse`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Stats Bar */}
        <FadeIn delay={400}>
          <div className="mt-20 p-8 rounded-3xl ultra-card">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: 500, suffix: "+", label: "مورد موثق" },
                { value: 50, suffix: "+", label: "دولة نخدمها" },
                { value: 99, suffix: "%", label: "معدل الجودة" },
                { value: 40, suffix: "%", label: "توفير التكاليف" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold gradient-text-ultra mb-2 animate-count-glow">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </PremiumSection>

      <div className="section-divider" />

      {/* ══════════════════════ PROCESS SECTION ══════════════════════ */}
      <PremiumSection id="process" className="section-premium">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="section-badge animate-hero-shine mb-6">
              <Workflow className="w-4 h-4" />
              <span>كيف نعمل</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              عملية من <span className="gradient-text-ultra">4 خطوات</span> محسّنة
            </h2>
            <p className="text-xl text-slate-400">
              من الاستشارة الأولى إلى التسليم، كل خطوة مصممة لأقصى كفاءة
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-4 gap-6">
          {processSteps.map((step, i) => (
            <FadeIn key={i} delay={i * 150}>
              <div className="relative group">
                <div className="ultra-card p-8 h-full">
                  <div className="text-6xl font-bold text-white/[0.04] absolute top-4 right-6 animate-breathe">{step.step}</div>
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 animate-glow-pulse">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 z-20 items-center">
                    <ArrowRight className="w-5 h-5 text-blue-500/50 animate-pulse" />
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </PremiumSection>

      {/* TESTIMONIALS */}
      <PremiumSection id="testimonials" className="section-rich">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="section-badge-gold animate-hero-shine mb-6">
              <Star className="w-4 h-4" />
              <span>عملاؤنا</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              قصص <span className="gradient-text-ultra">نجاح عملائنا</span>
            </h2>
            <p className="text-xl text-slate-400">
              اسمع من شركات حوّلت عملياتها التجارية مع الصين بشراكتنا
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <FadeIn key={i} delay={i * 150}>
              <div className="ultra-card p-8 h-full">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-amber-400 text-amber-400 animate-pulse" style={{ animationDelay: `${j * 0.1}s` }} />
                  ))}
                </div>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed italic">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="flex items-center gap-3 pt-6 border-t border-white/10">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-sm font-bold text-white shadow-lg shadow-blue-500/30">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-slate-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </PremiumSection>

      {/* KNOWLEDGE SECTION */}
      <PremiumSection id="knowledge" className="section-premium">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="section-badge animate-hero-shine mb-6">
              <BookOpen className="w-4 h-4" />
              <span>مركز المعرفة</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              <span className="gradient-text-ultra">ذكاء</span> تجاري
            </h2>
            <p className="text-xl text-slate-400">
              رؤى خبيرة لتحسين استراتيجية تجارتك مع الصين
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {knowledgeArticles.map((article, i) => (
            <FadeIn key={i} delay={i * 100}>
              <a href={`/${pathname.split('/')[1] || 'ar'}${article.href}`} className="group ultra-card p-6 cursor-pointer block">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors group-hover:scale-110 transition-transform duration-300">
                  <article.icon className="w-6 h-6 text-blue-400" />
                </div>
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">{article.category}</span>
                <h3 className="text-lg font-semibold text-white mt-2 mb-3 group-hover:text-blue-300 transition-colors">{article.title}</h3>
                <span className="text-sm text-slate-500 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {article.readTime}
                </span>
              </a>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={300}>
          <div className="mt-12 text-center">
            <a href={`/${pathname.split('/')[1] || 'ar'}/blog`} className="inline-flex items-center gap-2 px-8 py-4 border border-blue-500/20 text-blue-400 rounded-full font-semibold text-base hover:bg-blue-500/10 hover:border-blue-500/30 transition-all animate-hero-shine">
              <BookOpen className="w-5 h-5" />
              عرض جميع المقالات
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </FadeIn>
      </PremiumSection>

      {/* OPERATIONS - Daily Capabilities Section */}
      <PremiumSection id="operations" className="section-navy" bgImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80" overlay="bg-slate-950/95">
        <FadeIn>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="section-badge mb-6">
              <Workflow className="w-4 h-4" />
              <span>عملياتنا اليومية</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              كل قدرة تُدار <span className="gradient-text-blue">كوحدة نظام</span>
            </h2>
            <p className="text-xl text-slate-400">
              مُزامَنة، قابلة للتدقيق، ومقاسة—هكذا نُدير عمليات التجارة مع الصين
            </p>
          </div>
        </FadeIn>

        {/* 5-Stage Pipeline */}
        <FadeIn delay={100}>
          <div className="mb-20">
            <div className="grid lg:grid-cols-5 gap-4">
              {[
                { 
                  stage: "01", 
                  title: "المورد - مزامنة", 
                  subtitle: "مزامنة المورد",
                  desc: "مواءمة المورد مع المواصفات والمدة والإيقاع التشغيلي—ثم التحقق قبل أي التزام مالي.",
                  output: "تثبيت المواصفات ومزامنتها مع المورد قبل الالتزام.",
                  prevent: "يمنع عدم التطابق بين نية الشراء ومخرجات المصنع."
                },
                { 
                  stage: "02", 
                  title: "المستودع - تسجيل", 
                  subtitle: "استلام المستودع",
                  desc: "استلام الشحنة وتسجيلها وترميزها وإدخالها ضمن مسار التجميع.",
                  output: "شحنة مرمّزة ضمن مسار التجميع.",
                  prevent: "يمنع ضياع البضاعة وتداخل دورات التجميع."
                },
                { 
                  stage: "03", 
                  title: "الفحص - تحقق", 
                  subtitle: "تحقق الجودة",
                  desc: "تنفيذ أخذ العينات وتسجيل الأدلة ومعالجة الانحرافات قبل تصريح الشحن.",
                  output: "تقرير فحص مسجل وشحنة مؤهلة للتصدير.",
                  prevent: "يمنع المنتجات الرديئة من الوصول للعميل."
                },
                { 
                  stage: "04", 
                  title: "الإرسال - تصريح", 
                  subtitle: "تصريح التصدير",
                  desc: "تدقيق المستندات التجارية مقابل واقع الشحنة—ومواءمتها لمتطلبات وجهة الوصول.",
                  output: "مستندات موثقة ومطابقة للشحنة.",
                  prevent: "يمنع التأخير الجمركي والغرامات."
                },
                { 
                  stage: "05", 
                  title: "التسليم - تأكيد", 
                  subtitle: "تأكيد التسليم",
                  desc: "مزامنة الحجز والتسليم ومواعيد الإغلاق بين المستودع والناقل.",
                  output: "شحنة متنقلة ضمن موعد إغلاق محدد.",
                  prevent: "يمنع فشل الإرسال في جدولة النقل."
                },
              ].map((step, i) => (
                <div key={i} className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl p-6 border border-slate-700/50">
                  <div className="text-4xl font-bold text-slate-700/50 mb-3">{step.stage}</div>
                  <h3 className="text-xl font-bold text-white mb-1">{step.title}</h3>
                  <p className="text-sm text-blue-400 mb-3">{step.subtitle}</p>
                  <p className="text-sm text-slate-400 mb-4 leading-relaxed">{step.desc}</p>
                  <div className="pt-4 border-t border-slate-700/50 space-y-2">
                    <div className="text-xs">
                      <span className="text-green-400">النتيجة:</span>
                      <span className="text-slate-400 mr-2">{step.output}</span>
                    </div>
                    <div className="text-xs">
                      <span className="text-red-400">الحماية:</span>
                      <span className="text-slate-400 mr-2">{step.prevent}</span>
                    </div>
                  </div>
                  {i < 4 && (
                    <div className="hidden lg:block absolute top-1/2 -right-2 w-4">
                      <ArrowRight className="w-4 h-4 text-blue-500" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Operational Metrics */}
        <FadeIn delay={200}>
          <div className="bg-slate-800/50 rounded-3xl p-8 border border-slate-700 mb-16">
            <h3 className="text-2xl font-bold text-white mb-2 text-center">مؤشرات القدرة التشغيلية</h3>
            <p className="text-slate-400 text-center mb-8">مؤشرات تشغيلية—وليست وعوداً دعائية. الأرقام واقعية وقابلة للتدقيق.</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: "120+", label: "مصانع مُتحقَّق منها ميدانياً", desc: "التحقق عبر إشارات المصنع، سجل الإنتاج، ومراجع التعامل." },
                { value: "30–60", label: "دورات شحن مُسيطر عليها / شهر", desc: "دورات مُزامَنة للتجميع متعدد الموردين ومواعيد الإغلاق." },
                { value: "8–15", label: "موردين منسَّقين / دورة", desc: "تحويل نية الشراء إلى منطق تنفيذ جاهز للمستودع." },
                { value: "0–1%", label: "انحراف في مراجعة المستندات", desc: "مطابقة المستندات مع واقع الشحنة قبل التصريح." },
              ].map((metric, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">{metric.value}</div>
                  <div className="text-lg font-medium text-blue-400 mb-2">{metric.label}</div>
                  <p className="text-sm text-slate-500">{metric.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Industry Intelligence */}
        <FadeIn delay={300}>
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">ذكاء القطاعات</h3>
            <p className="text-slate-400 text-center mb-8">التعامل مع القطاع مبني على بروتوكولات—التغليف والامتثال والمخاطر تختلف حسب النوع.</p>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { code: "CG", name: "سلع استهلاكية", desc: "تحكم باركود، خريطة كراتين، وبروتوكولات منع التلف.", color: "blue" },
                { code: "IM", name: "مواد صناعية", desc: "تحقق وزن، انضباط منصات، وحماية رطوبة.", color: "emerald" },
                { code: "EL", name: "إلكترونيات", desc: "تعامل مضاد للكهرباء الساكنة، تسجيل أرقام، وأدلة فحص.", color: "amber" },
                { code: "FU", name: "أثاث", desc: "حماية سطح، تحكم أبعاد، وتخطيط الحاوية.", color: "violet" },
                { code: "RD", name: "توزيع تجزئة", desc: "تجميع متعدد الأصناف، معايير لصق، وتوقيت إطلاق.", color: "rose" },
              ].map((sector, i) => (
                <div key={i} className={`bg-slate-800/50 rounded-2xl p-5 border border-slate-700 hover:border-${sector.color}-500/50 transition-all`}>
                  <div className={`w-12 h-12 bg-${sector.color}-500/10 rounded-xl flex items-center justify-center mb-4`}>
                    <span className={`text-xl font-bold text-${sector.color}-400`}>{sector.code}</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{sector.name}</h4>
                  <p className="text-sm text-slate-400">{sector.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Service Pipeline Tags */}
        <FadeIn delay={400}>
          <div className="flex flex-wrap justify-center gap-3">
            {["بحث منتجات", "تفاوض", "فحص", "تغليف", "تخزين", "شحن", "توثيق"].map((tag, i) => (
              <span key={i} className="px-4 py-2 bg-slate-800 text-slate-300 rounded-full text-sm border border-slate-700">
                {tag}
              </span>
            ))}
          </div>
        </FadeIn>
      </PremiumSection>

      {/* Incoterms Section - Trade Terms Explanation */}
      <section className="relative py-16 section-darker overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/90 to-slate-950/95" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                شروط التجارة الدولية <span className="text-blue-400">Incoterms</span>
              </h2>
              <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                نلتزم بمعايير التجارة العالمية لتوضيح المسؤوليات وتقليل سوء الفهم بين البائع والمشتري
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            <FadeIn delay={100}>
              <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all">
                <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-blue-400">EXW</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Ex Works</h3>
                <p className="text-slate-400 mb-4">نتحمل مسؤولية التشغيل بالكامل من المصنع حتى باب مستودعك</p>
                <ul className="space-y-2 text-sm text-slate-500">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                    <span>توريد المنتجات من المصنع</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                    <span>التخزين والتجميع في المستودع</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                    <span>الشحن والتسليم النهائي</span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-emerald-500/50 transition-all">
                <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-emerald-400">DDP</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Delivered Duty Paid</h3>
                <p className="text-slate-400 mb-4">التسليم مع دفع الرسوم الجمركية - شحن شامل حتى بابك</p>
                <ul className="space-y-2 text-sm text-slate-500">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>الشحن الدولي الكامل</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>التخليص الجمركي</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>التوصيل النهائي للعميل</span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-amber-500/50 transition-all">
                <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-amber-400">FOB</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Free On Board</h3>
                <p className="text-slate-400 mb-4">الشحن على متن الباخرة - تحمل تكاليف النقل البحري</p>
                <ul className="space-y-2 text-sm text-slate-500">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>النقل من المصنع للميناء</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>تحميل البضاعة على السفينة</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>متابعة الشحن الدولي</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={400}>
            <div className="mt-10 bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
              <div className="flex flex-wrap items-center justify-center gap-8 text-white text-sm">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-blue-400" />
                  <span>توضيح مسؤوليات البائع والمشتري</span>
                </div>
                <div className="hidden sm:block w-px h-6 bg-slate-700" />
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-blue-400" />
                  <span>تقليل سوء الفهم والنزاعات التجارية</span>
                </div>
                <div className="hidden sm:block w-px h-6 bg-slate-700" />
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-blue-400" />
                  <span>بروتوكولات قياسية معتمدة عالمياً</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section id="quote" className="relative py-32 section-navy overflow-hidden">
        {/* Background Orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '3s' }} />
        </div>
        <div className="absolute inset-0 grid-pattern" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="section-badge mb-6">
                  <Rocket className="w-4 h-4" />
                  <span>ابدأ الآن</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                  جاهز لتحويل <span className="gradient-text-blue">سلسلة توريدك؟</span>
                </h2>
                <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                  احصل على عرض سعر شامل خلال 24 ساعة. بدون التزام، فقط رؤى خبيرة مصممة لأعمالك.
                </p>

                <div className="space-y-5">
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                    <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">اتصل بنا مباشرة</div>
                      <div className="text-white font-semibold">+86 155 8723 7864</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">راسلنا</div>
                      <div className="text-white font-semibold">maomoody524@gmail.com</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-[2rem] blur-xl" />
                <div className="relative glass-card p-8">
                  <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <input type="text" placeholder="الاسم الكامل" className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:border-blue-500/50 focus:outline-none transition-all" />
                      <input type="email" placeholder="البريد الإلكتروني" className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:border-blue-500/50 focus:outline-none transition-all" />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <input type="text" placeholder="اسم الشركة" className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:border-blue-500/50 focus:outline-none transition-all" />
                      <input type="tel" placeholder="رقم الهاتف" className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:border-blue-500/50 focus:outline-none transition-all" />
                    </div>
                    <select className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-slate-500 focus:border-blue-500/50 focus:outline-none transition-all">
                      <option>القطاع</option>
                      <option>معدات صناعية</option>
                      <option>إلكترونيات استهلاكية</option>
                      <option>سيارات</option>
                      <option>منسوجات وأزياء</option>
                      <option>أخرى</option>
                    </select>
                    <textarea rows={4} placeholder="أخبرنا عن متطلبات مشروعك..." className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:border-blue-500/50 focus:outline-none resize-none transition-all" />
                    <button type="submit" className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2">
                      <Send className="w-5 h-5" />
                      احصل على عرض سعر
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
