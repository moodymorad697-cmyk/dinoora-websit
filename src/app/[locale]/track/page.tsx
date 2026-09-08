"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { motion, useInView, useAnimation } from "framer-motion";
import { 
  Package, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  AlertCircle, 
  MessageCircle, 
  FileText, 
  ArrowLeft,
  ChevronRight,
  BarChart3,
  Shield,
  Truck,
  Factory,
  Warehouse,
  Ship,
  Plane,
  XCircle,
  Share2,
  Star,
  CheckCheck
} from "lucide-react";

import { WHATSAPP_NUMBER, WHATSAPP_LINK } from "@/config/contact";

// Realistic tracking stages
const TRACKING_STAGES = [
  { id: 1, icon: Package, ar: "تم استلام الطلب", en: "Order Received", zh: "订单已接收" },
  { id: 2, icon: Factory, ar: "تم التعاقد مع المورد", en: "Supplier Contracted", zh: "供应商已签约" },
  { id: 3, icon: Truck, ar: "تم الإنتاج", en: "Production Completed", zh: "生产完成" },
  { id: 4, icon: Shield, ar: "تم الفحص", en: "Inspection Passed", zh: "检验通过" },
  { id: 5, icon: Warehouse, ar: "تم التخزين في انتظار الشحن", en: "Warehousing - Awaiting Shipment", zh: "仓储-等待发货" },
  { id: 6, icon: Package, ar: "تم الشحن", en: "Shipped", zh: "已发货" },
  { id: 7, icon: CheckCircle2, ar: "وصلت الوجهة", en: "Delivered", zh: "已送达" }
];

// Real registered shipments for validation
const REGISTERED_SHIPMENTS = [
  "DN-2026-00125",
  "DN-2026-00126",
  "DN-2026-00127",
  "DN-2026-00128",
  "DN-2026-00129"
];

// Extended shipment templates for monthly rotation
const SHIPMENT_TEMPLATES = [
  { origin: "Yiwu, China", destination: "Riyadh, Saudi Arabia", goods: "Electronics", transport: "sea" },
  { origin: "Shenzhen, China", destination: "Dubai, UAE", goods: "Textiles", transport: "sea" },
  { origin: "Guangzhou, China", destination: "Cairo, Egypt", goods: "Medical Supplies", transport: "air" },
  { origin: "Shanghai, China", destination: "Jeddah, Saudi Arabia", goods: "Auto Parts", transport: "sea" },
  { origin: "Ningbo, China", destination: "Doha, Qatar", goods: "Furniture", transport: "sea" },
  { origin: "Foshan, China", destination: "Kuwait City, Kuwait", goods: "Ceramics", transport: "sea" },
  { origin: "Xiamen, China", destination: "Manama, Bahrain", goods: "Machinery", transport: "sea" },
  { origin: "Qingdao, China", destination: "Muscat, Oman", goods: "Chemicals", transport: "sea" },
  { origin: "Tianjin, China", destination: "Abu Dhabi, UAE", goods: "Steel", transport: "sea" },
  { origin: "Chengdu, China", destination: "Riyadh, Saudi Arabia", goods: "Electronics", transport: "air" },
  { origin: "Wuhan, China", destination: "Dubai, UAE", goods: "Automotive Parts", transport: "air" },
  { origin: "Hangzhou, China", destination: "Jeddah, Saudi Arabia", goods: "Textiles", transport: "air" },
  { origin: "Nanjing, China", destination: "Dammam, Saudi Arabia", goods: "Construction Materials", transport: "sea" },
  { origin: "Suzhou, China", destination: "Sharjah, UAE", goods: "Electronics", transport: "sea" },
  { origin: "Dongguan, China", destination: "Riyadh, Saudi Arabia", goods: "Consumer Goods", transport: "sea" },
  { origin: "Zhongshan, China", destination: "Dubai, UAE", goods: "Lighting", transport: "sea" },
  { origin: "Shantou, China", destination: "Jeddah, Saudi Arabia", goods: "Toys", transport: "sea" },
  { origin: "Wenzhou, China", destination: "Cairo, Egypt", goods: "Shoes", transport: "sea" },
  { origin: "Hefei, China", destination: "Riyadh, Saudi Arabia", goods: "Appliances", transport: "air" },
  { origin: "Changsha, China", destination: "Dubai, UAE", goods: "Electronics", transport: "air" }
];

// Generate dynamic shipments based on current month
const generateDynamicShipments = () => {
  const now = new Date();
  const monthSeed = now.getFullYear() * 100 + now.getMonth(); // e.g., 202609 for September 2026
  const startIndex = monthSeed % (SHIPMENT_TEMPLATES.length - 4); // Ensure we have enough templates
  const selectedTemplates = SHIPMENT_TEMPLATES.slice(startIndex, startIndex + 5);
  
  const statuses = [
    { key: "in_transit", text: { ar: "في البحر", en: "At Sea", zh: "海上运输中" }, baseProgress: 60 },
    { key: "warehouse", text: { ar: "في المخزن", en: "In Warehouse", zh: "仓库中" }, baseProgress: 35 },
    { key: "air", text: { ar: "في الجو", en: "In Air", zh: "空中运输中" }, baseProgress: 80 },
    { key: "port", text: { ar: "وصلت الميناء", en: "Arrived at Port", zh: "到达港口" }, baseProgress: 70 },
    { key: "customs", text: { ar: "في التخليص الجمركي", en: "Customs Clearance", zh: "清关中" }, baseProgress: 90 }
  ];

  return selectedTemplates.map((template, index) => {
    const status = statuses[index];
    const etaDays = 10 + (index * 3);
    const etaDate = new Date(now.getTime() + etaDays * 24 * 60 * 60 * 1000);
    const progress = Math.min(100, status.baseProgress + Math.floor(Math.random() * 15));
    
    return {
      id: index + 1,
      origin: template.origin,
      destination: template.destination,
      status: status.key,
      statusText: status.text,
      goods: template.goods,
      containers: template.transport === "air" ? Math.floor(Math.random() * 5) + 1 : Math.floor(Math.random() * 5) + 2,
      eta: etaDate.toISOString().split('T')[0],
      progress: progress,
      transport: template.transport
    };
  });
};

const SAMPLE_SHIPMENTS = generateDynamicShipments();

// Helper function for translations
const t = (ar: string, en: string, zh: string, locale: string) => {
  if (locale === 'zh') return zh;
  if (locale === 'en') return en;
  return ar;
};

// Counter Animation Component
const CounterAnimation = ({ end, duration = 2 }: { end: number, duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}</span>;
};

// Animated Transport Icon
const AnimatedTransportIcon = ({ type }: { type: 'sea' | 'air' | 'truck' }) => {
  if (type === 'sea') {
    return (
      <motion.div
        animate={{ x: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Ship className="w-8 h-8 text-blue-400" />
      </motion.div>
    );
  }
  if (type === 'air') {
    return (
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Plane className="w-8 h-8 text-cyan-400" />
      </motion.div>
    );
  }
  return (
    <motion.div
      animate={{ x: [0, 8, 0] }}
      transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
    >
      <Truck className="w-8 h-8 text-green-400" />
    </motion.div>
  );
};

export default function TrackPage() {
  const locale = useLocale();
  const isAr = locale === 'ar';
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingResult, setTrackingResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showNotFound, setShowNotFound] = useState(false);
  const [showWorldSection, setShowWorldSection] = useState(false);

  const controls = useAnimation();
  const worldSectionRef = useRef(null);
  const worldSectionInView = useInView(worldSectionRef, { once: true });

  useEffect(() => {
    if (worldSectionInView) {
      controls.start("visible");
    }
  }, [worldSectionInView, controls]);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setShowNotFound(false);
    
    const normalizedTrackingNumber = trackingNumber.toUpperCase().trim();
    
    // Simulate API call
    setTimeout(() => {
      // Check if tracking number is registered
      if (!REGISTERED_SHIPMENTS.includes(normalizedTrackingNumber)) {
        setIsLoading(false);
        setShowNotFound(true);
        setTimeout(() => {
          setShowWorldSection(true);
          const worldSection = document.getElementById('world-shipments');
          if (worldSection) {
            worldSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 500);
        return;
      }

      // Generate realistic tracking data for registered shipment
      const now = new Date();
      const shipmentIndex = REGISTERED_SHIPMENTS.indexOf(normalizedTrackingNumber);
      const currentStage = Math.min(7, Math.max(2, (shipmentIndex % 5) + 3));
      
      const updates = TRACKING_STAGES.slice(0, currentStage).map((stage, index) => {
        const date = new Date();
        date.setDate(date.getDate() - (currentStage - index - 1) * 3);
        return {
          id: stage.id,
          status: isAr ? stage.ar : stage.en,
          statusEn: stage.en,
          location: index === 0 ? "Yiwu, China" : index === currentStage - 1 ? "In Transit" : "Shenzhen, China",
          locationEn: index === 0 ? "Yiwu, China" : index === currentStage - 1 ? "In Transit" : "Shenzhen, China",
          date: date.toISOString().split('T')[0],
          time: `${String(Math.floor(Math.random() * 12) + 9).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`,
          description: isAr ? 
            `تم إكمال المرحلة ${stage.id} من ${TRACKING_STAGES.length} في عملية التوريد والشحن` :
            `Stage ${stage.id} of ${TRACKING_STAGES.length} completed in sourcing and shipping process`,
          isCurrent: index === currentStage - 1,
          completed: index < currentStage - 1
        };
      });

      const estimatedDelivery = new Date(now.getTime() + (7 - currentStage) * 3 * 24 * 60 * 60 * 1000);

      setTrackingResult({
        trackingNumber: normalizedTrackingNumber,
        currentStage: currentStage,
        totalStages: TRACKING_STAGES.length,
        statusColor: currentStage === 7 ? "from-green-500 to-emerald-500" : 
                     currentStage >= 5 ? "from-blue-500 to-cyan-500" : 
                     currentStage >= 3 ? "from-amber-500 to-orange-500" : 
                     "from-slate-500 to-slate-600",
        statusText: isAr ? TRACKING_STAGES[currentStage - 1].ar : TRACKING_STAGES[currentStage - 1].en,
        origin: "Yiwu, Zhejiang Province, China",
        destination: "Riyadh, Saudi Arabia",
        shippingMethod: "Air Freight",
        weight: "450 kg",
        volume: "2.5 CBM",
        pieces: "25 Cartons",
        invoice: `INV-2026-001${shipmentIndex + 25}`,
        estimatedDelivery: estimatedDelivery.toISOString().split('T')[0],
        updates: updates
      });
      setIsLoading(false);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1920&q=80')" }} />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-950/90 to-slate-900/95" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(59,130,246,0.1)_0%,_transparent_50%)]" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <Link href={`/${locale}`} className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors">
              <ArrowLeft className={`w-5 h-5 ${isAr ? 'rotate-180' : ''}`} />
              {t("العودة للرئيسية", "Back to Home", "返回首页", locale)}
            </Link>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent"
            >
              {t("تتبع شحنتك", "Track Your Shipment", "追踪您的货物", locale)}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto"
            >
              {t(
                "أدخل رقم الشحنة لمتابعة رحلة منتجك من المصنع حتى بابك",
                "Enter your tracking number to follow your product's journey from factory to your door",
                "输入追踪号码以跟踪您的产品从工厂到门口的旅程",
                locale
              )}
            </motion.p>

            {/* Tracking Form */}
            {!trackingResult && !showNotFound && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-slate-900/60 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl max-w-2xl mx-auto"
              >
                <form onSubmit={handleTrack}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="text"
                      value={trackingNumber}
                      onChange={(e) => setTrackingNumber(e.target.value)}
                      className="flex-1 px-6 py-4 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder={t("DN-2026-00125", "DN-2026-00125", "DN-2026-00125", locale)}
                      required
                    />
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="m-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-bold hover:shadow-xl hover:shadow-blue-500/30 transition-all disabled:opacity-60 whitespace-nowrap flex items-center gap-2"
                    >
                      {isLoading ? (
                        <>
                          <svg className="animate-spin w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
                          {t("جاري البحث...", "Tracking...", "追踪中...", locale)}
                        </>
                      ) : (
                        <>
                          {t("تتبع الآن", "Track Now", "立即追踪", locale)}
                          <ChevronRight className={`w-5 h-5 ${isAr ? 'rotate-180' : ''}`} />
                        </>
                      )}
                    </button>
                  </div>
                </form>

                {/* Tips */}
                <div className="mt-8 grid sm:grid-cols-3 gap-4">
                  {[
                    { icon: BarChart3, title: t("تحديث لحظي", "Live Updates", "实时更新", locale), desc: t("أكثر من 8 نقاط تتبع", "8+ Checkpoints", "8+ 检查点", locale) },
                    { icon: Shield, title: t("بيانات آمنة", "Secure Data", "数据安全", locale), desc: t("تشفير TLS 256 بت", "TLS 256-bit Encrypted", "TLS 256位加密", locale) },
                    { icon: Clock, title: t("دعم 24/7", "24/7 Support", "全天候支持", locale), desc: t("فريق دينورا جاهز", "Dinoora Team Ready", "Dinoora团队待命", locale) }
                  ].map((it, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                      className="bg-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 flex items-center gap-4 hover:border-blue-500/30 hover:bg-slate-900/60 transition-all"
                    >
                      <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <it.icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm">{it.title}</div>
                        <div className="text-xs text-slate-400 mt-0.5">{it.desc}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Not Found State */}
      {showNotFound && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="py-16"
        >
          <div className="max-w-2xl mx-auto px-4 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="inline-flex items-center justify-center w-24 h-24 bg-red-500/20 rounded-full mb-6"
            >
              <XCircle className="w-12 h-12 text-red-400" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-bold text-white mb-4"
            >
              {t("عفواً، شحنتك غير مسجلة لدينا", "Sorry, your shipment is not registered with us", "抱歉，您的货物未在我们处登记", locale)}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-slate-400 mb-8"
            >
              {t("يرجى التحقق FROM رقم التتبع أو التواصل معنا للمساعدة", "Please verify the tracking number or contact us for assistance", "请验证追踪号码或联系我们寻求帮助", locale)}
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onClick={() => { setShowNotFound(false); setTrackingNumber(""); }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-bold hover:shadow-xl hover:shadow-blue-500/30 transition-all"
            >
              {t("حاول مرة أخرى", "Try Again", "再试一次", locale)}
            </motion.button>
          </div>
        </motion.section>
      )}

      {/* Our Shipments Around the World */}
      <section id="world-shipments" ref={worldSectionRef} className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-5xl font-bold text-white mb-4"
            >
              {t("شحناتنا حول العالم", "Our Shipments Around the World", "我们的全球货运", locale)}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-sm text-slate-500 uppercase tracking-wider"
            >
              {t("نماذج توضيحية من نطاق عملياتنا اليومية", "Illustrative examples from our daily operations", "我们日常运营范围的示例", locale)}
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {SAMPLE_SHIPMENTS.map((shipment) => (
              <motion.div
                key={shipment.id}
                variants={itemVariants}
                whileHover={{ translateY: -8, scale: 1.02 }}
                className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <AnimatedTransportIcon type={shipment.transport as 'sea' | 'air'} />
                    <div>
                      <div className="text-xs text-slate-400">{t("من", "From", "从", locale)}</div>
                      <div className="font-semibold text-white text-sm">{shipment.origin}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-400">{t("إلى", "To", "到", locale)}</div>
                    <div className="font-semibold text-white text-sm">{shipment.destination}</div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      shipment.status === 'in_transit' ? 'bg-blue-500/20 text-blue-400' :
                      shipment.status === 'warehouse' ? 'bg-purple-500/20 text-purple-400' :
                      shipment.status === 'air' ? 'bg-cyan-500/20 text-cyan-400' :
                      shipment.status === 'port' ? 'bg-green-500/20 text-green-400' :
                      'bg-amber-500/20 text-amber-400'
                    }`}>
                      {t(shipment.statusText.ar, shipment.statusText.en, shipment.statusText.zh, locale)}
                    </span>
                  </div>
                  
                  <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${shipment.progress}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                    />
                  </div>
                  <div className="text-right text-xs text-slate-400 mt-1">{shipment.progress}%</div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <div className="text-xs text-slate-400">{t("البضاعة", "Goods", "货物", locale)}</div>
                    <div className="font-semibold text-white">{shipment.goods}</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">
                      {shipment.transport === 'air' 
                        ? t("الطرود/الكراتين", "Packages/Cartons", "包裹/纸箱", locale)
                        : t("الحاويات", "Containers", "集装箱", locale)
                      }
                    </div>
                    <div className="font-semibold text-white">{shipment.containers}</div>
                  </div>
                  <div className="col-span-2">
                    <div className="text-xs text-slate-400">{t("موعد الوصول التقديري", "Estimated Arrival", "预计到达", locale)}</div>
                    <div className="font-semibold text-white">{shipment.eta}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(59,130,246,0.15)_0%,_transparent_50%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              {t("اجعل شحنتك مع دينورا 🚀", "Make Your Shipment with Dinoora 🚀", "让您的货物与Dinoora同行 🚀", locale)}
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              {t(
                "نحن نضمن لك تجربة شحن سلسة وآمنة من الصين إلى وجهتك النهائية",
                "We guarantee you a smooth and secure shipping experience from China to your final destination",
                "我们保证为您提供从中国到最终目的地的顺畅安全的运输体验",
                locale
              )}
            </p>
          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            <div className="text-center">
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                +<CounterAnimation end={50} />
              </div>
              <div className="text-slate-300">{t("وجهة", "Destinations", "目的地", locale)}</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                +<CounterAnimation end={10000} duration={2.5} />
              </div>
              <div className="text-slate-300">{t("شحنة ناجحة", "Successful Shipments", "成功货运", locale)}</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 mb-2">
                24/7
              </div>
              <div className="text-slate-300">{t("دعم وتتبع", "Support & Tracking", "支持与追踪", locale)}</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href={`/${locale}/quote`}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative">{t("اطلب عرض سعر", "Request Quote", "获取报价", locale)}</span>
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-green-500/30 transition-all overflow-hidden animate-pulse"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                {t("تواصل واتساب", "Contact WhatsApp", "联系WhatsApp", locale)}
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* RESULT SECTION */}
      {trackingResult && (
        <section className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            {/* Top Status Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950/40 to-slate-900 rounded-3xl border border-slate-700/50 p-8 shadow-2xl"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 animate-gradient-shift bg-[length:200%_100%]" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />

              <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                {/* Left Info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => { setTrackingResult(null); setTrackingNumber(""); }}
                      className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
                    >
                      <ArrowLeft className={`w-4 h-4 ${isAr ? 'rotate-180' : ''}`} />
                      <span className="text-sm">{t("تتبع شحنة أخرى", "Track Another", "追踪其他货物", locale)}</span>
                    </button>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
                      {t("رقم التتبع", "Tracking Number", "追踪号", locale)}
                    </div>
                    <div className="text-3xl font-black text-white tracking-tight">
                      {trackingResult.trackingNumber}
                    </div>
                  </div>
                  <div className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r ${trackingResult.statusColor} text-white font-bold text-sm shadow-lg`}>
                    <Clock className="w-4 h-4" />
                    {trackingResult.statusText}
                  </div>
                </div>

                {/* Right Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="bg-slate-800/40 rounded-xl p-4 border border-slate-700/50">
                    <div className="text-xs text-slate-400 mb-1">{t("المرحلة", "Stage", "阶段", locale)}</div>
                    <div className="text-xl font-bold text-white">
                      {trackingResult.currentStage}/{trackingResult.totalStages}
                    </div>
                  </div>
                  <div className="bg-slate-800/40 rounded-xl p-4 border border-slate-700/50">
                    <div className="text-xs text-slate-400 mb-1">{t("الوزن", "Weight", "重量", locale)}</div>
                    <div className="text-xl font-bold text-white">{trackingResult.weight}</div>
                  </div>
                  <div className="bg-slate-800/40 rounded-xl p-4 border border-slate-700/50">
                    <div className="text-xs text-slate-400 mb-1">{t("الحجم", "Volume", "体积", locale)}</div>
                    <div className="text-xl font-bold text-white">{trackingResult.volume}</div>
                  </div>
                  <div className="bg-slate-800/40 rounded-xl p-4 border border-slate-700/50">
                    <div className="text-xs text-slate-400 mb-1">{t("القطع", "Pieces", "件数", locale)}</div>
                    <div className="text-xl font-bold text-white">{trackingResult.pieces}</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Shipment Details */}
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  {t("مسار الشحنة", "Shipment Route", "货物路线", locale)}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <div>
                      <div className="text-sm text-slate-400">{t("المصدر", "Origin", "出发地", locale)}</div>
                      <div className="font-semibold text-white">{trackingResult.origin}</div>
                    </div>
                  </div>
                  <div className="border-l-2 border-slate-700 h-8 ml-1.5" />
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                    <div>
                      <div className="text-sm text-slate-400">{t("الوجهة", "Destination", "目的地", locale)}</div>
                      <div className="font-semibold text-white">{trackingResult.destination}</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Package className="w-5 h-5 text-cyan-400" />
                  {t("تفاصيل الشحنة", "Shipment Details", "货物详情", locale)}
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-400">{t("method", "Shipping Method", "运输方式", locale)}</span>
                    <span className="font-semibold text-white">{trackingResult.shippingMethod}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">{t("invoice", "Invoice", "发票", locale)}</span>
                    <span className="font-semibold text-white">{trackingResult.invoice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">{t("delivery", "Est. Delivery", "预计送达", locale)}</span>
                    <span className="font-semibold text-white">{trackingResult.estimatedDelivery}</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-400" />
                {t("مراحل التتبع", "Tracking Stages", "追踪阶段", locale)}
              </h3>
              <div className="space-y-4">
                {trackingResult.updates.map((up: any, index: number) => {
                  const stageIcon = TRACKING_STAGES.find(s => s.id === up.id);
                  const Icon = stageIcon?.icon || Package;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="flex flex-col items-center">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          up.completed || up.isCurrent 
                            ? 'bg-gradient-to-br from-blue-600 to-cyan-500 text-white border-blue-400' 
                            : 'bg-slate-800 text-slate-500 border-slate-600'
                        } border`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        {index < trackingResult.updates.length - 1 && (
                          <div className={`w-0.5 h-full ${up.completed ? 'bg-blue-500' : 'bg-slate-700'}`} />
                        )}
                      </div>
                      <div className={`flex-1 group rounded-2xl p-5 transition-all ${
                        up.isCurrent
                          ? 'bg-gradient-to-br from-blue-950/40 via-cyan-950/30 to-slate-900 border-2 border-cyan-500/40 shadow-xl shadow-cyan-500/5'
                          : 'bg-slate-800/40 border border-slate-700/50 hover:border-slate-600/60 hover:bg-slate-800/60'
                      }`}>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h4 className={`font-bold ${up.isCurrent ? 'text-cyan-300' : 'text-white'}`}>
                              {isAr ? up.status : up.statusEn}
                            </h4>
                            {up.isCurrent && (
                              <span className="px-2 py-0.5 bg-cyan-500/20 text-cyan-300 text-[10px] rounded-full font-bold border border-cyan-500/30">
                                {t("الحالي", "Now", "当前", locale)}
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2 text-xs text-slate-500">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{up.date} · {up.time}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 mb-2 text-xs text-slate-400">
                          <MapPin className="w-3.5 h-3.5 text-amber-400" />
                          <span>{isAr ? up.location : up.locationEn}</span>
                        </div>
                        <p className={`text-sm leading-relaxed ${up.isCurrent ? 'text-slate-200' : 'text-slate-400'}`}>
                          {up.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Side Panel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-6"
            >
              {/* Promotional Banner */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-gradient-to-br from-cyan-600 to-blue-700 rounded-3xl p-6 text-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(255,255,255,0.1)
_0%,_transparent_50%)]" />
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-white mb-2">
                    {t("هل تخطط لشحنة جديدة؟", "Planning a new shipment?", "计划新货运？", locale)}
                  </h3>
                  <p className="text-sm text-cyan-100 mb-4">
                    {t("احصل على عرض سعر مجاني الآن", "Get a free quote now", "立即获取免费报价", locale)}
                  </p>
                  <Link
                    href={`/${locale}/quote`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-cyan-700 rounded-xl font-bold text-sm hover:bg-cyan-50 transition-all hover:shadow-xl"
                  >
                    {t("ابدأ عرض السعر", "Start Quote", "开始报价", locale)}
                    <ChevronRight className={`w-4 h-4 ${isAr ? 'rotate-180' : ''}`} />
                  </Link>
                </div>
              </motion.div>

              {/* Why Dinoora Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="bg-slate-900/60 backdrop-blur-sm border border-slate-700/60 rounded-3xl p-6"
              >
                <h3 className="text-lg font-extrabold text-white mb-5 flex items-center gap-2">
                  <Star className="w-5 h-5 text-amber-400" />
                  {t("لماذا دينورا؟", "Why Dinoora?", "为什么选择Dinoora？", locale)}
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: Shield, text: t("فحص جودة شامل", "Comprehensive Quality Inspection", "全面质量检验", locale) },
                    { icon: Clock, text: t("تتبع لحظي 24/7", "24/7 Real-time Tracking", "24/7实时追踪", locale) },
                    { icon: CheckCheck, text: t("تسليم في الموعد", "On-time Delivery", "准时交付", locale) }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-cyan-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <span className="text-sm text-slate-300">{item.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Symbolic Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="bg-slate-900/60 backdrop-blur-sm border border-slate-700/60 rounded-3xl p-6"
              >
                <div className="relative h-40 rounded-2xl overflow-hidden mb-4">
                  <div className="absolute inset-0 bg-cover bg-center" style={{ 
                    backgroundImage: trackingResult.shippingMethod.includes('Air') 
                      ? "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&q=85')"
                      : "url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=400&q=85')" 
                  }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center gap-2 text-white">
                      {trackingResult.shippingMethod.includes('Air') ? (
                        <Plane className="w-6 h-6 text-cyan-400" />
                      ) : (
                        <Ship className="w-6 h-6 text-blue-400" />
                      )}
                      <span className="text-sm font-semibold">
                        {trackingResult.shippingMethod}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Customer Testimonial */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/60 rounded-3xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-lg">
                    A
                  </div>
                  <div>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-sm text-slate-300 italic">
                      {t(
                        "خدمة ممتازة! تتبع شحناتي أصبح سهلاً جداً مع دينورا.",
                        "Excellent service! Tracking my shipments has become so easy with Dinoora.",
                        "优质服务！使用Dinoora追踪我的货物变得非常简单。",
                        locale
                      )}
                    </p>
                    <p className="text-xs text-slate-500 mt-2">
                      {t("— أحمد، الرياض", "— Ahmed, Riyadh", "— Ahmed, 利雅得", locale)}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Quick Actions */}
              <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-700/60 rounded-3xl p-6 sticky top-6">
                <h3 className="text-lg font-extrabold text-white mb-5 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-amber-400" />
                  {t("إجراءات سريعة", "Quick Actions", "快捷操作", locale)}
                </h3>
                <div className="space-y-3">
                  <button
                    onClick={() => {
                      const shareText = isAr 
                        ? `شحنتي ${trackingResult.trackingNumber} مع دينورا`
                        : `My shipment ${trackingResult.trackingNumber} with Dinoora`;
                      const shareUrl = `${window.location.origin}/${locale}/track?number=${trackingResult.trackingNumber}`;
                      if (navigator.share) {
                        navigator.share({ title: shareText, url: shareUrl });
                      } else {
                        navigator.clipboard.writeText(shareUrl);
                        alert(t("تم نسخ الرابط", "Link copied", "链接已复制", locale));
                      }
                    }}
                    className="flex items-center gap-3 w-full px-4 py-3.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold text-sm transition-colors border border-slate-700"
                  >
                    <Share2 className="w-5 h-5" />
                    {t("مشاركة حالة الشحنة", "Share Shipment Status", "分享货运状态", locale)}
                  </button>
                  <a
                    href={`${WHATSAPP_LINK}?text=${encodeURIComponent(
                      isAr
                        ? `مرحباً، لدي استفسار حول الشحنة رقم ${trackingResult.trackingNumber}`
                        : `Hello, I have an inquiry about shipment ${trackingResult.trackingNumber}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="flex items-center gap-3 w-full px-4 py-3.5 bg-green-600 hover:bg-green-500 text-white rounded-xl font-bold text-sm transition-all hover:shadow-xl hover:shadow-green-500/30"
                  >
                    <MessageCircle className="w-5 h-5" />
                    {t("استفسار عن الشحنة", "Inquire Shipment", "咨询货物", locale)}
                  </a>
                  <Link 
                    href={`/${locale}/quote`} 
                    className="flex items-center gap-3 w-full px-4 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-bold text-sm transition-all hover:shadow-xl hover:shadow-blue-500/30"
                  >
                    <Package className="w-5 h-5" />
                    {t("طلب شحنة جديدة", "New Shipment", "新建订单", locale)}
                  </Link>
                  <button 
                    onClick={() => window.print()} 
                    className="flex items-center gap-3 w-full px-4 py-3.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold text-sm transition-colors border border-slate-700"
                  >
                    <FileText className="w-5 h-5" />
                    {t("طباعة التقرير", "Print Report", "打印报告", locale)}
                  </button>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-800">
                  <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-2xl p-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                      {t("ملاحظة هامة", "Important Notice", "重要提示", locale)}
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {t(
                        "يمكنك التواصل مع فريق دعم العملاء عبر الواتساب مباشرة لأي استفسار خلال 24 ساعة طوال أيام الأسبوع.",
                        "Our customer support team is available 24/7 on WhatsApp for any inquiries.",
                        "我们的客服团队每周7天，每天24小时在WhatsApp上为您解答任何疑问。",
                        locale
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </main>
  );
}

