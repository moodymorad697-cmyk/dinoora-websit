"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Search, MessageCircle, ShieldCheck, Package, Warehouse, Ship, 
  FileCheck, Truck, ArrowRight, Plus, Minus, ShoppingCart,
  Sparkles, Check, Calculator, Send
} from "lucide-react";

// Individual Services Data
const individualServices = [
  { 
    id: "search",
    icon: Search,
    title: "بحث منتجات",
    titleEn: "Product Search",
    desc: "البحث عن الموردين المناسبين وإيجاد أفضل المنتجات",
    basePrice: 50,
    unit: "/ منتج",
    features: ["5+ موردين مقترحين", "تقرير مقارنة الأسعار", "تحقق أولي من المورد"],
    color: "blue"
  },
  { 
    id: "negotiate",
    icon: MessageCircle,
    title: "تفاوض",
    titleEn: "Negotiation",
    desc: "التفاوض مع الموردين للحصول على أفضل شروط وأقل سعر",
    basePrice: 30,
    unit: "/ مورد",
    features: ["تفاوض على السعر", "شروط الدفع", "مواعيد الإنتاج", "MOQ"],
    color: "emerald"
  },
  { 
    id: "inspect",
    icon: ShieldCheck,
    title: "فحص",
    titleEn: "Inspection",
    desc: "فحص شامل للجودة قبل الشحن والتأكد من المطابقة",
    basePrice: 120,
    unit: "/ زيارة",
    features: ["فحص ما قبل الإنتاج", "فحص أثناء الإنتاج", "فحص ما قبل الشحن", "تقرير مفصل"],
    color: "amber"
  },
  { 
    id: "package",
    icon: Package,
    title: "تغليف",
    titleEn: "Packaging",
    desc: "تصميم وتنفيذ التغليف المناسب لمنتجاتك",
    basePrice: 100,
    unit: "/ تصميم",
    features: ["تصميم التغليف", "طباعة العلامة التجارية", "اختبار التحمل", "معايير التصدير"],
    color: "violet"
  },
  { 
    id: "warehouse",
    icon: Warehouse,
    title: "تخزين",
    titleEn: "Warehousing",
    desc: "تخزين آمن في مستودعاتنا بإدارة ذكية للمخزون",
    basePrice: 5,
    unit: "/ م³ / يوم",
    features: ["مستودع آمن", "إدارة المخزون", "تجميع الشحنات", "تتبع مباشر"],
    color: "rose"
  },
  { 
    id: "ship",
    icon: Ship,
    title: "شحن",
    titleEn: "Shipping",
    desc: "شحن دولي بجميع الطرق (جوي، بحري، بري، قطار)",
    basePrice: 0,
    unit: "حسب الوزن",
    features: ["شحن جوي", "شحن بحري", "شحن بالقطار", "تأمين شامل"],
    color: "cyan"
  },
  { 
    id: "customs",
    icon: FileCheck,
    title: "تخليص جمركي",
    titleEn: "Customs Clearance",
    desc: "إنهاء جميع الإجراءات الجمركية والتأكد من المستندات",
    basePrice: 150,
    unit: "/ شحنة",
    features: ["إعداد المستندات", "التخليص الجمركي", "الاستشارات", "التصديقات"],
    color: "orange"
  },
  { 
    id: "transport",
    icon: Truck,
    title: "نقل داخل الصين",
    titleEn: "Domestic Transport",
    desc: "نقل داخلي من المورد إلى المستودع أو الميناء",
    basePrice: 80,
    unit: "/ شحنة",
    features: ["نقل من المصنع", "نقل بين المدن", "تتبع الشحنات", "تأمين النقل"],
    color: "indigo"
  },
];

export default function MicroServicesPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [showCalculator, setShowCalculator] = useState(false);

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      setSelectedServices(prev => prev.filter(s => s !== id));
      setQuantities(prev => { const newQ = { ...prev }; delete newQ[id]; return newQ; });
    } else {
      setSelectedServices(prev => [...prev, id]);
      setQuantities(prev => ({ ...prev, [id]: 1 }));
    }
  };

  const updateQuantity = (id: string, delta: number) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta)
    }));
  };

  const calculateTotal = () => {
    return selectedServices.reduce((total, id) => {
      const service = individualServices.find(s => s.id === id);
      const qty = quantities[id] || 1;
      return total + (service?.basePrice || 0) * qty;
    }, 0);
  };

  const isSelected = (id: string) => selectedServices.includes(id);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero Header */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 border-b border-slate-800">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/services" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
              <ArrowRight className="w-5 h-5" />
              العودة للخدمات
            </Link>
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4" />
                الخدمات المنفردة / Micro Services
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                بناء حلتك
                <span className="block mt-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  حسب احتياجك
                </span>
              </h1>
              
              <p className="text-xl text-slate-400 mb-6">
                اختر الخدمات التي تحتاجها فقط، واحسب التكلفة مباشرة
              </p>

              <div className="flex flex-wrap gap-3">
                <div className="bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700">
                  <span className="text-blue-400 font-bold">8</span>
                  <span className="text-slate-400 mr-2">خدمات متاحة</span>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700">
                  <span className="text-green-400 font-bold">حسب الطلب</span>
                  <span className="text-slate-400 mr-2">بدون التزام</span>
                </div>
              </div>
            </div>

            {/* Selected Summary Card */}
            {selectedServices.length > 0 && (
              <div className="lg:w-80 bg-slate-800 rounded-2xl p-6 border border-slate-700 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <ShoppingCart className="w-5 h-5 text-blue-400" />
                    <span className="font-semibold text-white">خدمات مختارة</span>
                  </div>
                  <span className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                    {selectedServices.length}
                  </span>
                </div>
                
                <div className="space-y-2 mb-4 max-h-40 overflow-y-auto">
                  {selectedServices.map(id => {
                    const service = individualServices.find(s => s.id === id);
                    return (
                      <div key={id} className="flex justify-between text-sm">
                        <span className="text-slate-300">{service?.title}</span>
                        <span className="text-slate-400">×{quantities[id] || 1}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="border-t border-slate-700 pt-4 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">التقدير المبدئي:</span>
                    <span className="text-2xl font-bold text-white">${calculateTotal()}</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">* التكلفة تقريبية وقد تختلف حسب التفاصيل</p>
                </div>

                <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-xl transition-all flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  طلب عرض سعر
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {individualServices.map((service) => {
              const selected = isSelected(service.id);
              const quantity = quantities[service.id] || 1;
              
              return (
                <div
                  key={service.id}
                  onClick={() => toggleService(service.id)}
                  className={`relative group cursor-pointer rounded-2xl p-6 border transition-all duration-300 ${
                    selected 
                      ? `bg-${service.color}-500/10 border-${service.color}-500 shadow-lg shadow-${service.color}-500/20` 
                      : "bg-slate-900 border-slate-700 hover:border-slate-600"
                  }`}
                >
                  {/* Selection Indicator */}
                  {selected && (
                    <div className={`absolute top-4 left-4 w-6 h-6 bg-${service.color}-500 rounded-full flex items-center justify-center`}>
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  )}

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${
                    selected 
                      ? `bg-${service.color}-500` 
                      : `bg-${service.color}-500/10`
                  }`}>
                    <service.icon className={`w-7 h-7 ${selected ? "text-white" : `text-${service.color}-400`}`} />
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl font-bold mb-1 ${selected ? "text-white" : "text-slate-200"}`}>
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-500 mb-3">{service.titleEn}</p>
                  
                  {/* Description */}
                  <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                    {service.desc}
                  </p>

                  {/* Features */}
                  <div className="space-y-1 mb-4">
                    {service.features.slice(0, 2).map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-500">
                        <Check className={`w-3 h-3 ${selected ? `text-${service.color}-400` : "text-slate-600"}`} />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Price & Quantity */}
                  {selected ? (
                    <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                      <div className="flex items-center gap-2 bg-slate-800 rounded-lg p-1">
                        <button 
                          onClick={(e) => { e.stopPropagation(); updateQuantity(service.id, -1); }}
                          className="w-8 h-8 flex items-center justify-center bg-slate-700 rounded-md hover:bg-slate-600 transition-colors"
                        >
                          <Minus className="w-4 h-4 text-slate-300" />
                        </button>
                        <span className="w-8 text-center font-semibold text-white">{quantity}</span>
                        <button 
                          onClick={(e) => { e.stopPropagation(); updateQuantity(service.id, 1); }}
                          className="w-8 h-8 flex items-center justify-center bg-slate-700 rounded-md hover:bg-slate-600 transition-colors"
                        >
                          <Plus className="w-4 h-4 text-slate-300" />
                        </button>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-white">${service.basePrice * quantity}</div>
                        <div className="text-xs text-slate-500">{service.unit}</div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                      <div className="text-sm text-slate-500">يبتدئ من</div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-white">${service.basePrice}</div>
                        <div className="text-xs text-slate-500">{service.unit}</div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-16 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">كيف تعمل الخدمات المنفردة</h2>
            <p className="text-slate-400">اختر → احسب → اطلب → ننفذ</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "اختر الخدمات", desc: "حدد الخدمات التي تحتاجها فقط" },
              { step: "02", title: "حدد الكمية", desc: "حدد عدد المنتجات أو الموردين" },
              { step: "03", title: "احصل على تقدير", desc: "شاهد التكلفة المتوقعة فوراً" },
              { step: "04", title: "أرسل الطلب", desc: "سنرسل لك عرض سعر مفصل خلال 24 ساعة" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-bold text-slate-800 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            لم تجد ما تحتاجه؟
          </h2>
          <p className="text-xl text-slate-400 mb-8">
            تواصل معنا مباشرة وسنساعدك في بناء حل مخصص يناسب احتياجاتك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/query"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold text-lg hover:shadow-xl transition-all"
            >
              معالج الاستعلام الذكي
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a 
              href="mailto:hello@dinoora.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-slate-700 text-white rounded-full font-semibold text-lg hover:bg-white/5 transition-all"
            >
              تواصل معنا
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
