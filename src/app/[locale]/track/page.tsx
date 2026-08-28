"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
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
  Warehouse
} from "lucide-react";

const WHATSAPP_NUMBER = "8619589468539";

// Realistic tracking stages for a sourcing & logistics company
const TRACKING_STAGES = [
  { id: 1, icon: Package, ar: "تم استلام الطلب", en: "Order Received", zh: "订单已接收" },
  { id: 2, icon: Factory, ar: "تم التعاقد مع المورد", en: "Supplier Contracted", zh: "供应商已签约" },
  { id: 3, icon: Truck, ar: "تم الإنتاج", en: "Production Completed", zh: "生产完成" },
  { id: 4, icon: Shield, ar: "تم الفحص", en: "Inspection Passed", zh: "检验通过" },
  { id: 5, icon: Warehouse, ar: "تم التخزين في انتظار الشحن", en: "Warehousing - Awaiting Shipment", zh: "仓储-等待发货" },
  { id: 6, icon: Package, ar: "تم الشحن", en: "Shipped", zh: "已发货" },
  { id: 7, icon: CheckCircle2, ar: "وصلت الوجهة", en: "Delivered", zh: "已送达" }
];

// Helper function for translations
const t = (ar: string, en: string, zh: string) => {
  const locale = typeof window !== 'undefined' ? window.location.pathname.split('/')[1] : 'ar';
  if (locale === 'zh') return zh;
  if (locale === 'en') return en;
  return ar;
};

export default function TrackPage() {
  const locale = useLocale();
  const isAr = locale === 'ar';
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingResult, setTrackingResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call with realistic tracking data
    setTimeout(() => {
      // Generate realistic tracking data based on the DN-2026-00125 format
      const currentStage = Math.floor(Math.random() * 5) + 2; // Random stage between 2 and 6
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

      setTrackingResult({
        trackingNumber: trackingNumber.toUpperCase(),
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
        invoice: "INV-2026-00125",
        estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        updates: updates
      });
      setIsLoading(false);
    }, 1500);
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
              {t("العودة للرئيسية", "Back to Home", "返回首页")}
            </Link>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
              {t("تتبع شحنتك", "Track Your Shipment", "追踪您的货物")}
            </h1>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
              {t(
                "أدخل رقم الشحنة لمتابعة رحلة منتجك من المصنع حتى بابك",
                "Enter your tracking number to follow your product's journey from factory to your door",
                "输入追踪号码以跟踪您的产品从工厂到门口的旅程"
              )}
            </p>

            {/* Tracking Form */}
            {!trackingResult && (
              <div className="bg-slate-900/60 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl max-w-2xl mx-auto">
                <form onSubmit={handleTrack}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="text"
                      value={trackingNumber}
                      onChange={(e) => setTrackingNumber(e.target.value)}
                      className="flex-1 px-6 py-4 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder={t("DN-2026-00125", "DN-2026-00125", "DN-2026-00125")}
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
                          {t("جاري البحث...", "Tracking...", "追踪中...")}
                        </>
                      ) : (
                        <>
                          {t("تتبع الآن", "Track Now", "立即追踪")}
                          <ChevronRight className={`w-5 h-5 ${isAr ? 'rotate-180' : ''}`} />
                        </>
                      )}
                    </button>
                  </div>
                </form>

                {/* Tips */}
                <div className="mt-8 grid sm:grid-cols-3 gap-4">
                  {[
                    { icon: BarChart3, title: t("تحديث لحظي", "Live Updates", "实时更新"), desc: t("أكثر من 8 نقاط تتبع", "8+ Checkpoints", "8+ 检查点") },
                    { icon: Shield, title: t("بيانات آمنة", "Secure Data", "数据安全"), desc: t("تشفير TLS 256 بت", "TLS 256-bit Encrypted", "TLS 256位加密") },
                    { icon: Clock, title: t("دعم 24/7", "24/7 Support", "全天候支持"), desc: t("فريق دينورا جاهز", "Dinoora Team Ready", "Dinoora团队待命") }
                  ].map((it, i) => (
                    <div key={i} className="bg-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 flex items-center gap-4 hover:border-blue-500/30 hover:bg-slate-900/60 transition-all">
                      <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <it.icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm">{it.title}</div>
                        <div className="text-xs text-slate-400 mt-0.5">{it.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* RESULT SECTION */}
      {trackingResult && (
        <section className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            {/* Top Status Card */}
            <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950/40 to-slate-900 rounded-3xl border border-slate-700/50 p-8 shadow-2xl">
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
                      <span className="text-sm">{t("تتبع شحنة أخرى", "Track Another", "追踪其他货物")}</span>
                    </button>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
                      {t("رقم التتبع", "Tracking Number", "追踪号")}
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
                    <div className="text-xs text-slate-400 mb-1">{t("المرحلة", "Stage", "阶段")}</div>
                    <div className="text-xl font-bold text-white">
                      {trackingResult.currentStage}/{trackingResult.totalStages}
                    </div>
                  </div>
                  <div className="bg-slate-800/40 rounded-xl p-4 border border-slate-700/50">
                    <div className="text-xs text-slate-400 mb-1">{t("الوزن", "Weight", "重量")}</div>
                    <div className="text-xl font-bold text-white">{trackingResult.weight}</div>
                  </div>
                  <div className="bg-slate-800/40 rounded-xl p-4 border border-slate-700/50">
                    <div className="text-xs text-slate-400 mb-1">{t("الحجم", "Volume", "体积")}</div>
                    <div className="text-xl font-bold text-white">{trackingResult.volume}</div>
                  </div>
                  <div className="bg-slate-800/40 rounded-xl p-4 border border-slate-700/50">
                    <div className="text-xs text-slate-400 mb-1">{t("القطع", "Pieces", "件数")}</div>
                    <div className="text-xl font-bold text-white">{trackingResult.pieces}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Shipment Details */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  {t("مسار الشحنة", "Shipment Route", "货物路线")}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <div>
                      <div className="text-sm text-slate-400">{t("المصدر", "Origin", "出发地")}</div>
                      <div className="font-semibold text-white">{trackingResult.origin}</div>
                    </div>
                  </div>
                  <div className="border-l-2 border-slate-700 h-8 ml-1.5" />
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                    <div>
                      <div className="text-sm text-slate-400">{t("الوجهة", "Destination", "目的地")}</div>
                      <div className="font-semibold text-white">{trackingResult.destination}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Package className="w-5 h-5 text-cyan-400" />
                  {t("تفاصيل الشحنة", "Shipment Details", "货物详情")}
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-400">{t("method", "Shipping Method", "运输方式")}</span>
                    <span className="font-semibold text-white">{trackingResult.shippingMethod}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">{t("invoice", "Invoice", "发票")}</span>
                    <span className="font-semibold text-white">{trackingResult.invoice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">{t("delivery", "Est. Delivery", "预计送达")}</span>
                    <span className="font-semibold text-white">{trackingResult.estimatedDelivery}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-400" />
                {t("مراحل التتبع", "Tracking Stages", "追踪阶段")}
              </h3>
              <div className="space-y-4">
                {trackingResult.updates.map((up: any, index: number) => {
                  const stageIcon = TRACKING_STAGES.find(s => s.id === up.id);
                  const Icon = stageIcon?.icon || Package;
                  return (
                    <div key={index} className="flex gap-4">
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
                                {t("الحالي", "Now", "当前")}
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
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Side Panel */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-700/60 rounded-3xl p-6 sticky top-6">
                <h3 className="text-lg font-extrabold text-white mb-5 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-amber-400" />
                  {t("إجراءات سريعة", "Quick Actions", "快捷操作")}
                </h3>
                <div className="space-y-3">
                  <a 
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                      isAr 
                        ? `مرحباً، لدي استفسار حول الشحنة رقم ${trackingResult.trackingNumber}` 
                        : `Hello, I have an inquiry about shipment ${trackingResult.trackingNumber}`
                    )}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-3 w-full px-4 py-3.5 bg-green-600 hover:bg-green-500 text-white rounded-xl font-bold text-sm transition-all hover:shadow-xl hover:shadow-green-500/30"
                  >
                    <MessageCircle className="w-5 h-5" />
                    {t("استفسار عن الشحنة", "Inquire Shipment", "咨询货物")}
                  </a>
                  <Link 
                    href={`/${locale}/quote`} 
                    className="flex items-center gap-3 w-full px-4 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-bold text-sm transition-all hover:shadow-xl hover:shadow-blue-500/30"
                  >
                    <Package className="w-5 h-5" />
                    {t("طلب شحنة جديدة", "New Shipment", "新建订单")}
                  </Link>
                  <button 
                    onClick={() => window.print()} 
                    className="flex items-center gap-3 w-full px-4 py-3.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold text-sm transition-colors border border-slate-700"
                  >
                    <FileText className="w-5 h-5" />
                    {t("طباعة التقرير", "Print Report", "打印报告")}
                  </button>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-800">
                  <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-2xl p-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                      {t("ملاحظة هامة", "Important Notice", "重要提示")}
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {t(
                        "يمكنك التواصل مع فريق دعم العملاء عبر الواتساب مباشرة لأي استفسار خلال 24 ساعة طوال أيام الأسبوع.",
                        "Our customer support team is available 24/7 on WhatsApp for any inquiries.",
                        "我们的客服团队每周7天，每天24小时在WhatsApp上为您解答任何疑问。"
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

