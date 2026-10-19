"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { ArrowLeft, Calculator, Send, Package, Ship, Plane, Truck, Info, Factory, Warehouse, MapPin, Scale, Box, Sparkles } from "lucide-react";

const destinations = [
  { code: 'SA', name: 'Saudi Arabia', nameAr: 'السعودية' },
  { code: 'AE', name: 'United Arab Emirates', nameAr: 'الإمارات' },
  { code: 'KW', name: 'Kuwait', nameAr: 'الكويت' },
  { code: 'QA', name: 'Qatar', nameAr: 'قطر' },
  { code: 'BH', name: 'Bahrain', nameAr: 'البحرين' },
  { code: 'OM', name: 'Oman', nameAr: 'عمان' },
  { code: 'EG', name: 'Egypt', nameAr: 'مصر' },
  { code: 'JO', name: 'Jordan', nameAr: 'الأردن' },
  { code: 'MA', name: 'Morocco', nameAr: 'المغرب' },
  { code: 'TN', name: 'Tunisia', nameAr: 'تونس' },
  { code: 'DZ', name: 'Algeria', nameAr: 'الجزائر' },
  { code: 'LY', name: 'Libya', nameAr: 'ليبيا' },
  { code: 'IQ', name: 'Iraq', nameAr: 'العراق' },
  { code: 'YE', name: 'Yemen', nameAr: 'اليمن' },
  { code: 'SD', name: 'Sudan', nameAr: 'السودان' },
  { code: 'SY', name: 'Syria', nameAr: 'سوريا' },
  { code: 'LB', name: 'Lebanon', nameAr: 'لبنان' },
  { code: 'PS', name: 'Palestine', nameAr: 'فلسطين' },
];

const shippingMethods = [
  { id: 'sea', name: (ar: boolean) => ar ? 'شحن بحري' : 'Sea Freight', icon: Ship, desc: (ar: boolean) => ar ? 'مناسب للشحنات الكبيرة والثقيلة' : 'Best for large and heavy shipments' },
  { id: 'air', name: (ar: boolean) => ar ? 'شحن جوي' : 'Air Freight', icon: Plane, desc: (ar: boolean) => ar ? 'سريع ومناسب للشحنات الصغيرة' : 'Fast and best for small shipments' },
];

export default function CalculatorPage() {
  const locale = useLocale();
  const ar = locale === 'ar';

  const [formData, setFormData] = useState({
    productType: "",
    productDetails: "",
    shippingMethod: "",
    destination: "",
    // Sea freight fields
    totalCBM: "",
    // Air freight fields
    totalWeight: "",
    // Domestic shipping
    needDomesticShipping: false,
    domesticOption: "",
    // Contact
    name: "",
    whatsappNumber: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let cargoInfo = '';
    if (formData.shippingMethod === 'sea') {
      cargoInfo = ar 
        ? `*الحجم الإجمالي:* ${formData.totalCBM} CBM`
        : `*Total Volume:* ${formData.totalCBM} CBM`;
    } else if (formData.shippingMethod === 'air') {
      cargoInfo = ar 
        ? `*الوزن الإجمالي:* ${formData.totalWeight} كجم`
        : `*Total Weight:* ${formData.totalWeight} kg`;
    }

    const shippingOption = shippingMethods.find(s => s.id === formData.shippingMethod);
    const destinationData = destinations.find(d => d.code === formData.destination);

    let domesticInfo = '';
    if (formData.needDomesticShipping) {
      domesticInfo = ar 
        ? `*الشحن الداخلي في الصين:* نعم\n*الخيار:* ${formData.domesticOption === 'port' ? 'إلى الميناء' : formData.domesticOption === 'warehouse' ? 'إلى المستودع' : 'استلام من المصنع'}`
        : `*Domestic Shipping in China:* Yes\n*Option:* ${formData.domesticOption === 'port' ? 'To Port' : formData.domesticOption === 'warehouse' ? 'To Warehouse' : 'Pickup from Factory'}`;
    } else {
      domesticInfo = ar 
        ? '*الشحن الداخلي في الصين:* لا'
        : '*Domestic Shipping in China:* No';
    }

    const message = ar
      ? `*🧮 طلب حساب تكلفة شحن من موقع دينورا*

*الاسم:* ${formData.name}
*نوع المنتج:* ${formData.productType}
*تفاصيل المنتج:* ${formData.productDetails || 'غير محدد'}

*معلومات البضاعة:*
${cargoInfo}

*طريقة الشحن:* ${shippingOption?.name(ar) || 'غير محدد'}
*الوجهة:* ${destinationData?.nameAr || formData.destination}

${domesticInfo}

*معلومات التواصل:*
*رقم الواتساب:* ${formData.whatsappNumber}
*البريد الإلكتروني:* ${formData.email || 'غير محدد'}`
      : `*🧮 Shipping Cost Quote Request from Dinoora website*

*Name:* ${formData.name}
*Product Type:* ${formData.productType}
*Product Details:* ${formData.productDetails || 'Not specified'}

*Cargo Information:*
${cargoInfo}

*Shipping Method:* ${shippingOption?.name(ar) || 'Not specified'}
*Destination:* ${destinationData?.name || formData.destination}

${domesticInfo}

*Contact Information:*
*WhatsApp Number:* ${formData.whatsappNumber}
*Email:* ${formData.email || 'Not specified'}`;

    try {
      const response = await fetch('/api/send-telegram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert(ar ? 'حدث خطأ في الإرسال. يرجى المحاولة مرة أخرى.' : 'Error sending. Please try again.');
      }
    } catch (error) {
      alert(ar ? 'حدث خطأ في الإرسال. يرجى المحاولة مرة أخرى.' : 'Error sending. Please try again.');
    }
  };


  if (submitted) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-blue-900 via-cyan-900 to-slate-900 text-white pt-16">
        <div className="max-w-2xl mx-auto px-4 py-24 text-center">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Send className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">{ar ? 'تم الإرسال بنجاح!' : 'Successfully Submitted!'}</h2>
            <p className="text-white/70 mb-8">{ar ? 'سنتواصل معك قريباً بالعرض التفصيلي' : 'We will contact you soon with detailed quote'}</p>
            <Link
              href={`/${locale}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold hover:shadow-xl hover:shadow-cyan-500/30 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              {ar ? 'العودة للرئيسية' : 'Back to Home'}
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-cyan-900 to-slate-900 text-white pt-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.4, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1.4, 1, 1.4],
            x: [-100, 0, -100],
            y: [50, 0, 50],
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/15 rounded-full blur-3xl"
        />
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="relative bg-slate-900/30 backdrop-blur-md border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {ar ? 'العودة للرئيسية' : 'Back to Home'}
          </Link>
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", duration: 0.8 }}
            className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-cyan-500/40"
          >
            <Calculator className="w-12 h-12 text-white" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">{ar ? 'حاسبة الشحن' : 'Shipping Calculator'}</h1>
          <p className="text-xl text-white/70">{ar ? 'احسب تكلفة شحنتك بسهولة وسرعة' : 'Calculate your shipping cost easily and quickly'}</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/20 shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Product Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-3">
                <Package className="w-6 h-6 text-cyan-400" />
                {ar ? 'معلومات المنتج' : 'Product Information'}
              </h3>
              
              <div>
                <label className="block text-sm font-semibold text-white/80 mb-2">{ar ? 'نوع المنتج' : 'Product Type'}</label>
                <input
                  type="text"
                  required
                  value={formData.productType}
                  onChange={(e) => setFormData({ ...formData, productType: e.target.value })}
                  className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-2xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-white/40 transition-all"
                  placeholder={ar ? 'مثال: إلكترونيات، ملابس...' : 'e.g., Electronics, Clothing...'}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white/80 mb-2">{ar ? 'تفاصيل المنتج (اختياري)' : 'Product Details (Optional)'}</label>
                <textarea
                  value={formData.productDetails}
                  onChange={(e) => setFormData({ ...formData, productDetails: e.target.value })}
                  className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-2xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-white/40 transition-all resize-none"
                  placeholder={ar ? 'أي تفاصيل إضافية...' : 'Any additional details...'}
                  rows={3}
                />
              </div>
            </div>

            {/* Shipping Method */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-3">
                <Ship className="w-6 h-6 text-cyan-400" />
                {ar ? 'طريقة الشحن' : 'Shipping Method'}
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                {shippingMethods.map((method) => (
                  <motion.button
                    key={method.id}
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setFormData({ ...formData, shippingMethod: method.id })}
                    className={`p-6 rounded-2xl border-2 transition-all ${
                      formData.shippingMethod === method.id
                        ? 'bg-gradient-to-br from-cyan-500 to-blue-500 border-cyan-400 shadow-lg shadow-cyan-500/30'
                        : 'bg-white/5 border-white/20 hover:bg-white/10'
                    }`}
                  >
                    <method.icon className={`w-8 h-8 mb-3 ${formData.shippingMethod === method.id ? 'text-white' : 'text-white/60'}`} />
                    <div className="text-lg font-bold text-white">{method.name(ar)}</div>
                    <div className="text-sm text-white/60 mt-1">{method.desc(ar)}</div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Dynamic Fields based on Shipping Method */}
            {formData.shippingMethod && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="space-y-6"
              >
                <h3 className="text-xl font-bold text-white flex items-center gap-3">
                  {formData.shippingMethod === 'sea' ? <Box className="w-6 h-6 text-cyan-400" /> : <Scale className="w-6 h-6 text-cyan-400" />}
                  {ar ? 'تفاصيل البضاعة' : 'Cargo Details'}
                </h3>

                {formData.shippingMethod === 'sea' && (
                  <div>
                    <label className="block text-sm font-semibold text-white/80 mb-2">{ar ? 'الحجم الإجمالي (CBM)' : 'Total Volume (CBM)'}</label>
                    <input
                      type="number"
                      required
                      step="0.01"
                      value={formData.totalCBM}
                      onChange={(e) => setFormData({ ...formData, totalCBM: e.target.value })}
                      className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-2xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-white/40 transition-all"
                      placeholder="10"
                    />
                  </div>
                )}

                {formData.shippingMethod === 'air' && (
                  <div>
                    <label className="block text-sm font-semibold text-white/80 mb-2">{ar ? 'الوزن الإجمالي (كجم)' : 'Total Weight (kg)'}</label>
                    <input
                      type="number"
                      required
                      step="0.01"
                      value={formData.totalWeight}
                      onChange={(e) => setFormData({ ...formData, totalWeight: e.target.value })}
                      className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-2xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-white/40 transition-all"
                      placeholder="500"
                    />
                  </div>
                )}
              </motion.div>
            )}

            {/* Destination */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-3">
                <MapPin className="w-6 h-6 text-cyan-400" />
                {ar ? 'الوجهة' : 'Destination'}
              </h3>
              
              <select
                required
                value={formData.destination}
                onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-2xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white transition-all"
              >
                <option value="">{ar ? 'اختر الوجهة' : 'Select Destination'}</option>
                {destinations.map(dest => (
                  <option key={dest.code} value={dest.code}>
                    {ar ? dest.nameAr : dest.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Domestic Shipping (Optional) */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white flex items-center gap-3">
                  <Truck className="w-6 h-6 text-cyan-400" />
                  {ar ? 'الشحن الداخلي في الصين' : 'Domestic Shipping in China'}
                </h3>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.needDomesticShipping}
                    onChange={(e) => setFormData({ ...formData, needDomesticShipping: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-14 h-7 bg-white/20 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-500/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-cyan-500"></div>
                </label>
              </div>

              {formData.needDomesticShipping && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="grid md:grid-cols-3 gap-4"
                >
                  {[
                    { id: 'port', icon: Ship, label: ar ? 'إلى الميناء' : 'To Port' },
                    { id: 'warehouse', icon: Warehouse, label: ar ? 'إلى المستودع' : 'To Warehouse' },
                    { id: 'pickup', icon: Factory, label: ar ? 'استلام من المصنع' : 'Pickup from Factory' },
                  ].map((option) => (
                    <motion.button
                      key={option.id}
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setFormData({ ...formData, domesticOption: option.id })}
                      className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${
                        formData.domesticOption === option.id
                          ? 'bg-gradient-to-br from-cyan-500 to-blue-500 border-cyan-400'
                          : 'bg-white/5 border-white/20 hover:bg-white/10'
                      }`}
                    >
                      <option.icon className="w-6 h-6 text-white" />
                      <span className="text-sm font-medium text-white">{option.label}</span>
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-6 border-t border-white/20 pt-8">
              <h3 className="text-xl font-bold text-white flex items-center gap-3">
                <Info className="w-6 h-6 text-cyan-400" />
                {ar ? 'معلومات التواصل' : 'Contact Information'}
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-white/80 mb-2">{ar ? 'الاسم' : 'Name'}</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-2xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-white/40 transition-all"
                    placeholder={ar ? 'الاسم الكامل' : 'Full Name'}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-white/80 mb-2">{ar ? 'رقم الواتساب' : 'WhatsApp Number'}</label>
                  <input
                    type="tel"
                    required
                    value={formData.whatsappNumber}
                    onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                    className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-2xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-white/40 transition-all"
                    placeholder="+966 50 123 4567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-white/80 mb-2">{ar ? 'البريد الإلكتروني (اختياري)' : 'Email (Optional)'}</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-2xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-white/40 transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full px-8 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-cyan-500/40 transition-all flex items-center justify-center gap-3"
            >
              <Send className="w-6 h-6" />
              {ar ? 'إرسال طلب الحساب' : 'Send Quote Request'}
            </motion.button>
          </form>
        </motion.div>

        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/30"
        >
          <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            {ar ? 'ملاحظة هامة' : 'Important Note'}
          </h3>
          <p className="text-white/70 text-sm">
            {ar 
              ? 'بعد إرسال طلبك، سيقوم فريقنا بحساب التكلفة الدقيقة والتواصل معك خلال 24 ساعة بالعرض التفصيلي.' 
              : 'After submitting your request, our team will calculate the accurate cost and contact you within 24 hours with a detailed quote.'}
          </p>
        </motion.div>
      </div>
    </main>
  );
}
