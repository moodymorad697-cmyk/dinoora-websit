"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, ArrowLeft, CheckCircle2, Send, Building2, 
  Package, Truck, Globe, FileText, User, Mail, Phone, 
  MapPin, Hash, Calendar, Clock, Shield, FileCheck,
  AlertCircle, Sparkles, ChevronRight, X, Check
} from "lucide-react";

// Wizard Steps
const steps = [
  { id: 1, title: "معلومات الشركة", subtitle: "Company Info" },
  { id: 2, title: "تفاصيل المنتج", subtitle: "Product Details" },
  { id: 3, title: "متطلبات الشحن", subtitle: "Shipping" },
  { id: 4, title: "مراجعة", subtitle: "Review" },
];

// Industries
const industries = [
  { id: "industrial", name: "معدات صناعية", icon: Building2 },
  { id: "electronics", name: "إلكترونيات", icon: Package },
  { id: "consumer", name: "سلع استهلاكية", icon: Package },
  { id: "automotive", name: "قطع غيار سيارات", icon: Truck },
  { id: "textile", name: "منسوجات", icon: Package },
  { id: "furniture", name: "أثاث", icon: Building2 },
  { id: "medical", name: "أجهزة طبية", icon: Shield },
  { id: "other", name: "أخرى", icon: FileText },
];

// Shipping Methods
const shippingMethods = [
  { id: "air", name: "شحن جوي", time: "3-7 أيام", cost: "عالي", icon: Package },
  { id: "sea", name: "شحن بحري", time: "20-45 يوم", cost: "اقتصادي", icon: Truck },
  { id: "rail", name: "شحن بالقطار", time: "15-20 يوم", cost: "متوسط", icon: Truck },
  { id: "express", name: "شحن سريع", time: "2-5 أيام", cost: "ممتاز", icon: Package },
];

// Payment Terms
const paymentTerms = [
  { id: "tt", name: "تحويل بنكي (T/T)", desc: "30% مقدم، 70% قبل الشحن" },
  { id: "lc", name: "اعتماد مستندي (L/C)", desc: "آمن للكميات الكبيرة" },
  { id: "paypal", name: "PayPal", desc: "للعينات والكميات الصغيرة" },
  { id: "alibaba", name: "Alibaba Trade Assurance", desc: "حماية مشترى" },
];

export default function SmartQueryWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  
  const [formData, setFormData] = useState({
    // Company Info
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    country: "",
    website: "",
    
    // Product Details
    productName: "",
    industry: "",
    description: "",
    quantity: "",
    targetPrice: "",
    specifications: "",
    samples: "",
    
    // Shipping
    destination: "",
    shippingMethod: "",
    paymentTerms: "",
    timeline: "",
    incoterm: "",
    
    // Additional
    additionalNotes: "",
    priority: "normal",
  });

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsComplete(true);
  };

  // Progress Bar
  const ProgressBar = () => (
    <div className="mb-8">
      <div className="flex justify-between mb-4">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mb-2 transition-all ${
              currentStep >= step.id 
                ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white" 
                : "bg-slate-800 text-slate-500 border border-slate-700"
            }`}>
              {currentStep > step.id ? <Check className="w-6 h-6" /> : step.id}
            </div>
            <div className="text-center">
              <div className={`text-sm font-medium ${currentStep >= step.id ? "text-white" : "text-slate-500"}`}>
                {step.title}
              </div>
              <div className="text-xs text-slate-600">{step.subtitle}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-500"
          style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
        />
      </div>
    </div>
  );

  if (isComplete) {
    return (
      <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center px-4">
          <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-12 h-12 text-green-400" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            تم استلام طلبك بنجاح!
          </h1>
          <p className="text-xl text-slate-400 mb-8">
            فريقنا سيقوم بمراجعة طلبك والرد عليك خلال 24 ساعة
          </p>
          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 mb-8">
            <div className="text-slate-400 mb-2">رقم مرجعي للطلب:</div>
            <div className="text-2xl font-bold text-white">DIN-{Date.now().toString(36).toUpperCase()}</div>
          </div>
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold hover:shadow-xl transition-all"
          >
            العودة للرئيسية
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero Header */}
      <section className="relative py-16 bg-gradient-to-br from-slate-900 to-slate-800 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/" className="text-slate-400 hover:text-white transition-colors">
              <X className="w-6 h-6" />
            </Link>
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-blue-400" />
              <span className="text-blue-400 font-semibold">معالج استعلام ذكي</span>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            اطلب عرض سعر ذكي
          </h1>
          <p className="text-slate-400">
            أخبرنا باحتياجاتك وسنقوم بمطابقتك مع أفضل الموردين
          </p>
        </div>
      </section>

      {/* Wizard Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProgressBar />

          {/* Step 1: Company Info */}
          {currentStep === 1 && (
            <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">
              <h2 className="text-2xl font-bold text-white mb-6">معلومات الشركة</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    اسم الشركة *
                  </label>
                  <div className="relative">
                    <Building2 className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => updateField("companyName", e.target.value)}
                      className="w-full pr-12 pl-4 py-4 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                      placeholder="اسم شركتك"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    اسم جهة الاتصال *
                  </label>
                  <div className="relative">
                    <User className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <input
                      type="text"
                      value={formData.contactName}
                      onChange={(e) => updateField("contactName", e.target.value)}
                      className="w-full pr-12 pl-4 py-4 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                      placeholder="اسمك الكامل"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    البريد الإلكتروني *
                  </label>
                  <div className="relative">
                    <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      className="w-full pr-12 pl-4 py-4 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    رقم الهاتف *
                  </label>
                  <div className="relative">
                    <Phone className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      className="w-full pr-12 pl-4 py-4 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                      placeholder="+966 50 000 0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    الدولة *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <select
                      value={formData.country}
                      onChange={(e) => updateField("country", e.target.value)}
                      className="w-full pr-12 pl-4 py-4 bg-slate-800 border border-slate-700 rounded-xl text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all appearance-none"
                    >
                      <option value="">اختر الدولة</option>
                      <option value="saudi">السعودية</option>
                      <option value="uae">الإمارات</option>
                      <option value="kuwait">الكويت</option>
                      <option value="qatar">قطر</option>
                      <option value="bahrain">البحرين</option>
                      <option value="oman">عمان</option>
                      <option value="egypt">مصر</option>
                      <option value="other">أخرى</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    الموقع الإلكتروني (اختياري)
                  </label>
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => updateField("website", e.target.value)}
                    className="w-full px-4 py-4 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                    placeholder="www.yourcompany.com"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Product Details */}
          {currentStep === 2 && (
            <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">
              <h2 className="text-2xl font-bold text-white mb-6">تفاصيل المنتج</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-3">
                    نوع الصناعة *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {industries.map((industry) => (
                      <button
                        key={industry.id}
                        onClick={() => updateField("industry", industry.id)}
                        className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all ${
                          formData.industry === industry.id
                            ? "bg-blue-500/10 border-blue-500 text-blue-400"
                            : "bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-600"
                        }`}
                      >
                        <industry.icon className="w-6 h-6" />
                        <span className="text-sm font-medium">{industry.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    اسم المنتج / الفئة *
                  </label>
                  <input
                    type="text"
                    value={formData.productName}
                    onChange={(e) => updateField("productName", e.target.value)}
                    className="w-full px-4 py-4 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                    placeholder="مثال: قطع غيار سيارات، إلكترونيات استهلاكية..."
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      الكمية المتوقعة *
                    </label>
                    <div className="relative">
                      <Hash className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                      <input
                        type="text"
                        value={formData.quantity}
                        onChange={(e) => updateField("quantity", e.target.value)}
                        className="w-full pr-12 pl-4 py-4 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                        placeholder="مثال: 1000 قطعة"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      السعر المستهدف (اختياري)
                    </label>
                    <input
                      type="text"
                      value={formData.targetPrice}
                      onChange={(e) => updateField("targetPrice", e.target.value)}
                      className="w-full px-4 py-4 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                      placeholder="$0.00 - $0.00 لكل قطعة"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    وصف المنتج والمواصفات *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.description}
                    onChange={(e) => updateField("description", e.target.value)}
                    className="w-full px-4 py-4 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"
                    placeholder="صف المنتج بالتفصيل: المواصفات التقنية، الجودة المطلوبة، التغليف، الشعار..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-3">
                    هل تحتاج عينات؟
                  </label>
                  <div className="flex gap-4">
                    {[
                      { id: "yes", label: "نعم" },
                      { id: "no", label: "لا" },
                    ].map((option) => (
                      <button
                        key={option.id}
                        onClick={() => updateField("samples", option.id)}
                        className={`flex-1 py-3 px-4 rounded-xl border font-medium transition-all ${
                          formData.samples === option.id
                            ? "bg-blue-500/10 border-blue-500 text-blue-400"
                            : "bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-600"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Shipping */}
          {currentStep === 3 && (
            <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">
              <h2 className="text-2xl font-bold text-white mb-6">متطلبات الشحن والدفع</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    ميناء الوجهة *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <input
                      type="text"
                      value={formData.destination}
                      onChange={(e) => updateField("destination", e.target.value)}
                      className="w-full pr-12 pl-4 py-4 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                      placeholder="مثال: ميناء جدة، دبي، الرياض..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-3">
                    طريقة الشحن المفضلة *
                  </label>
                  <div className="grid md:grid-cols-2 gap-4">
                    {shippingMethods.map((method) => (
                      <button
                        key={method.id}
                        onClick={() => updateField("shippingMethod", method.id)}
                        className={`flex items-center gap-4 p-4 rounded-xl border transition-all text-right ${
                          formData.shippingMethod === method.id
                            ? "bg-blue-500/10 border-blue-500"
                            : "bg-slate-800 border-slate-700 hover:border-slate-600"
                        }`}
                      >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          formData.shippingMethod === method.id ? "bg-blue-500" : "bg-slate-700"
                        }`}>
                          <method.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className={`font-semibold ${
                            formData.shippingMethod === method.id ? "text-blue-400" : "text-white"
                          }`}>
                            {method.name}
                          </div>
                          <div className="text-sm text-slate-400">{method.time} • {method.cost}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-3">
                    شروط الدفع *
                  </label>
                  <div className="space-y-3">
                    {paymentTerms.map((term) => (
                      <button
                        key={term.id}
                        onClick={() => updateField("paymentTerms", term.id)}
                        className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all text-right ${
                          formData.paymentTerms === term.id
                            ? "bg-blue-500/10 border-blue-500"
                            : "bg-slate-800 border-slate-700 hover:border-slate-600"
                        }`}
                      >
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          formData.paymentTerms === term.id 
                            ? "border-blue-500 bg-blue-500" 
                            : "border-slate-600"
                        }`}>
                          {formData.paymentTerms === term.id && <Check className="w-4 h-4 text-white" />}
                        </div>
                        <div className="flex-1 text-right">
                          <div className={`font-semibold ${
                            formData.paymentTerms === term.id ? "text-blue-400" : "text-white"
                          }`}>
                            {term.name}
                          </div>
                          <div className="text-sm text-slate-400">{term.desc}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    الجدول الزمني المتوقع
                  </label>
                  <div className="relative">
                    <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <select
                      value={formData.timeline}
                      onChange={(e) => updateField("timeline", e.target.value)}
                      className="w-full pr-12 pl-4 py-4 bg-slate-800 border border-slate-700 rounded-xl text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all appearance-none"
                    >
                      <option value="">اختر الإطار الزمني</option>
                      <option value="urgent">عاجل (أسبوعين)</option>
                      <option value="normal">عادي (1-2 شهر)</option>
                      <option value="flexible">مرن (3+ أشهر)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    ملاحظات إضافية
                  </label>
                  <textarea
                    rows={3}
                    value={formData.additionalNotes}
                    onChange={(e) => updateField("additionalNotes", e.target.value)}
                    className="w-full px-4 py-4 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"
                    placeholder="أي متطلبات خاصة أو ملاحظات إضافية..."
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Review */}
          {currentStep === 4 && (
            <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">
              <h2 className="text-2xl font-bold text-white mb-6">مراجعة الطلب</h2>
              
              <div className="space-y-6">
                {/* Company Summary */}
                <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-blue-400" />
                      معلومات الشركة
                    </h3>
                    <button onClick={() => setCurrentStep(1)} className="text-blue-400 hover:text-blue-300 text-sm">
                      تعديل
                    </button>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div><span className="text-slate-500">الشركة:</span> <span className="text-slate-300">{formData.companyName || "-"}</span></div>
                    <div><span className="text-slate-500">الجهة:</span> <span className="text-slate-300">{formData.contactName || "-"}</span></div>
                    <div><span className="text-slate-500">البريد:</span> <span className="text-slate-300">{formData.email || "-"}</span></div>
                    <div><span className="text-slate-500">الهاتف:</span> <span className="text-slate-300">{formData.phone || "-"}</span></div>
                    <div><span className="text-slate-500">الدولة:</span> <span className="text-slate-300">{formData.country || "-"}</span></div>
                  </div>
                </div>

                {/* Product Summary */}
                <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                      <Package className="w-5 h-5 text-blue-400" />
                      تفاصيل المنتج
                    </h3>
                    <button onClick={() => setCurrentStep(2)} className="text-blue-400 hover:text-blue-300 text-sm">
                      تعديل
                    </button>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div><span className="text-slate-500">الصناعة:</span> <span className="text-slate-300">{industries.find(i => i.id === formData.industry)?.name || "-"}</span></div>
                    <div><span className="text-slate-500">المنتج:</span> <span className="text-slate-300">{formData.productName || "-"}</span></div>
                    <div><span className="text-slate-500">الكمية:</span> <span className="text-slate-300">{formData.quantity || "-"}</span></div>
                    <div><span className="text-slate-500">السعر:</span> <span className="text-slate-300">{formData.targetPrice || "-"}</span></div>
                    <div className="md:col-span-2"><span className="text-slate-500">الوصف:</span> <span className="text-slate-300">{formData.description || "-"}</span></div>
                  </div>
                </div>

                {/* Shipping Summary */}
                <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                      <Truck className="w-5 h-5 text-blue-400" />
                      الشحن والدفع
                    </h3>
                    <button onClick={() => setCurrentStep(3)} className="text-blue-400 hover:text-blue-300 text-sm">
                      تعديل
                    </button>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div><span className="text-slate-500">الوجهة:</span> <span className="text-slate-300">{formData.destination || "-"}</span></div>
                    <div><span className="text-slate-500">الشحن:</span> <span className="text-slate-300">{shippingMethods.find(s => s.id === formData.shippingMethod)?.name || "-"}</span></div>
                    <div><span className="text-slate-500">الدفع:</span> <span className="text-slate-300">{paymentTerms.find(p => p.id === formData.paymentTerms)?.name || "-"}</span></div>
                    <div><span className="text-slate-500">الجدول:</span> <span className="text-slate-300">{formData.timeline || "-"}</span></div>
                  </div>
                </div>

                {/* Agreement */}
                <div className="flex items-start gap-3 p-4 bg-blue-500/5 border border-blue-500/20 rounded-xl">
                  <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-400">
                    بالضغط على "إرسال الطلب"، فإنك تؤكد أن جميع المعلومات المقدمة صحيحة وأنك تفوضنا للبدء في البحث عن الموردين المناسبين.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                currentStep === 1
                  ? "bg-slate-800 text-slate-500 cursor-not-allowed"
                  : "bg-slate-800 text-white hover:bg-slate-700"
              }`}
            >
              <ArrowLeft className="w-5 h-5" />
              السابق
            </button>

            {currentStep < 4 ? (
              <button
                onClick={nextStep}
                className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold hover:shadow-xl transition-all"
              >
                التالي
                <ArrowRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-full font-semibold hover:shadow-xl transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    جاري الإرسال...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    إرسال الطلب
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
