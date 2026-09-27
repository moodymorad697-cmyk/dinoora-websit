"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { ArrowLeft, Send, Mail, MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/config/contact";

export default function QuotePage() {
  const locale = useLocale();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    contact: "",
    contactType: "whatsapp",
    service: "",
    product: "",
    quantity: "",
    country: "",
    port: "",
    shippingMethod: "",
    services: [] as string[],
    details: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const services = [
    { id: "sourcing", icon: "🔍", title: locale === 'ar' ? "توريد المنتجات" : "Product Sourcing", desc: locale === 'ar' ? "البحث عن الموردين والمنتجات" : "Find suppliers & products" },
    { id: "inspection", icon: "✓", title: locale === 'ar' ? "فحص الجودة" : "Quality Check", desc: locale === 'ar' ? "فحص قبل الشحن" : "Inspect before shipping" },
    { id: "shipping", icon: "🚢", title: locale === 'ar' ? "شحن فقط" : "Shipping Only", desc: locale === 'ar' ? "نقل بضائعك" : "Transport your goods" },
    { id: "complete", icon: "🌐", title: locale === 'ar' ? "خدمة كاملة" : "Complete Service", desc: locale === 'ar' ? "حل من أ إلى ز" : "From A to Z solution" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const serviceNames: Record<string, string> = {
      sourcing: locale === 'ar' ? 'توريد المنتجات' : 'Product Sourcing',
      inspection: locale === 'ar' ? 'فحص الجودة' : 'Quality Check',
      shipping: locale === 'ar' ? 'شحن فقط' : 'Shipping Only',
      complete: locale === 'ar' ? 'خدمة كاملة' : 'Complete Service',
    };
    
    const serviceLabels: Record<string, string> = {
      sourcing: locale === 'ar' ? 'البحث عن الموردين' : 'Supplier Search',
      inspection: locale === 'ar' ? 'فحص الجودة' : 'Quality Inspection',
      storage: locale === 'ar' ? 'التخزين في الصين' : 'Storage in China',
      shipping: locale === 'ar' ? 'تنسيق الشحن' : 'Shipping Coordination',
    };
    
    const selectedServices = formData.services.map(s => serviceLabels[s]).join(', ');
    
    const message = locale === 'ar'
      ? `*طلب عرض تجارة وشحن جديد من موقع دينورا*\n\n*الخدمة:* ${serviceNames[formData.service]}\n*المنتج:* ${formData.product}\n*الكمية:* ${formData.quantity}\n*البلد:* ${formData.country}\n*ميناء الوصول:* ${formData.port}\n*طريقة الشحن:* ${formData.shippingMethod}\n*الخدمات المطلوبة:* ${selectedServices}\n*طريقة التواصل:* ${formData.contactType === 'whatsapp' ? 'واتساب' : 'البريد الإلكتروني'}\n*معلومات التواصل:* ${formData.contact}\n*التفاصيل:* ${formData.details}`
      : `*New trade and shipping quote request from Dinoora website*\n\n*Service:* ${serviceNames[formData.service]}\n*Product:* ${formData.product}\n*Quantity:* ${formData.quantity}\n*Country:* ${formData.country}\n*Port of Arrival:* ${formData.port}\n*Shipping Method:* ${formData.shippingMethod}\n*Required Services:* ${selectedServices}\n*Contact Method:* ${formData.contactType === 'whatsapp' ? 'WhatsApp' : 'Email'}\n*Contact Info:* ${formData.contact}\n*Details:* ${formData.details}`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `${WHATSAPP_LINK}?text=${encodedMessage}`;
    
    // Open WhatsApp with the message
    window.open(whatsappUrl, '_blank');
    
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-slate-950 text-slate-100 pt-16">
        <div className="max-w-2xl mx-auto px-4 py-24 text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-12 border border-slate-700">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Send className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">{locale === 'ar' ? 'تم الإرسال بنجاح!' : 'Successfully Submitted!'}</h2>
            <p className="text-slate-400 mb-8">{locale === 'ar' ? 'سنتواصل معك قريباً' : 'We will contact you soon'}</p>
            <Link
              href={`/${locale}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-500 text-white rounded-full font-semibold hover:shadow-xl hover:shadow-indigo-500/30 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              {locale === 'ar' ? 'العودة للرئيسية' : 'Back to Home'}
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 pt-16">
      {/* Header */}
      <div className="bg-slate-900/50 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {locale === 'ar' ? 'العودة للرئيسية' : 'Back to Home'}
          </Link>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">{locale === 'ar' ? 'اطلب عرض تجارة وشحن' : 'Request Trade and Shipping Quote'}</h1>
          <p className="text-slate-400">{locale === 'ar' ? 'املأ النموذج أدناه للحصول على عرض سعر مخصص' : 'Fill out the form below to get a custom quote'}</p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-4 mb-12">
          {[1, 2, 3, 4, 5].map((s) => (
            <div key={s} className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${
                step >= s ? 'bg-gradient-to-r from-indigo-600 to-purple-500 text-white' : 'bg-slate-800 text-slate-500'
              }`}>
                {s}
              </div>
              {s < 5 && <div className={`w-16 h-1 rounded ${step > s ? 'bg-gradient-to-r from-indigo-600 to-purple-500' : 'bg-slate-800'}`} />}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700">
          {/* Step 1: Service Selection */}
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-white">{locale === 'ar' ? 'اختر الخدمة' : 'Select Service'}</h2>
              <p className="text-slate-400">{locale === 'ar' ? 'حدد الخدمة التي تحتاجها' : 'Select the service you need'}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => {
                      setFormData({ ...formData, service: service.id });
                      setStep(2);
                    }}
                    className={`p-6 rounded-2xl border-2 text-left transition-all hover:shadow-lg ${
                      formData.service === service.id 
                        ? 'border-indigo-500 bg-slate-800' 
                        : 'border-slate-700 hover:border-slate-600 bg-slate-800/50'
                    }`}
                  >
                    <div className="text-3xl mb-3">{service.icon}</div>
                    <h3 className="font-bold text-white mb-1">{service.title}</h3>
                    <p className="text-sm text-slate-400">{service.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Product Details */}
          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-white">{locale === 'ar' ? 'تفاصيل المنتج' : 'Product Details'}</h2>
              <p className="text-slate-400">{locale === 'ar' ? 'أخبرنا عن المنتج الذي تريد استيراده' : 'Tell us about the product you want to import'}</p>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  {locale === 'ar' ? 'المنتج' : 'Product'} *
                </label>
                <input
                  type="text"
                  name="product"
                  required
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-slate-500"
                  placeholder={locale === 'ar' ? 'مثال: إلكترونيات، ملابس، معدات...' : 'e.g., Electronics, Clothing, Equipment...'}
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  {locale === 'ar' ? 'الكمية' : 'Quantity'} *
                </label>
                <input
                  type="text"
                  name="quantity"
                  required
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-slate-500"
                  placeholder={locale === 'ar' ? 'مثال: 100 قطعة، 500 كجم...' : 'e.g., 100 pieces, 500 kg...'}
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  {locale === 'ar' ? 'البلد' : 'Country'} *
                </label>
                <input
                  type="text"
                  name="country"
                  required
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-slate-500"
                  placeholder={locale === 'ar' ? 'السعودية، الإمارات، مصر...' : 'Saudi Arabia, UAE, Egypt...'}
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  {locale === 'ar' ? 'ميناء الوصول' : 'Port of Arrival'} *
                </label>
                <input
                  type="text"
                  name="port"
                  required
                  value={formData.port}
                  onChange={(e) => setFormData({ ...formData, port: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-slate-500"
                  placeholder={locale === 'ar' ? 'مثال: جدة، دبي، الإسكندرية...' : 'e.g., Jeddah, Dubai, Alexandria...'}
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  {locale === 'ar' ? 'طريقة الشحن' : 'Shipping Method'} *
                </label>
                <select
                  name="shippingMethod"
                  required
                  value={formData.shippingMethod}
                  onChange={(e) => setFormData({ ...formData, shippingMethod: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white"
                >
                  <option value="">{locale === 'ar' ? 'اختر طريقة الشحن' : 'Select Shipping Method'}</option>
                  <option value="sea">{locale === 'ar' ? 'شحن بحري' : 'Sea Freight'}</option>
                  <option value="air">{locale === 'ar' ? 'شحن جوي' : 'Air Freight'}</option>
                  <option value="land">{locale === 'ar' ? 'شحن بري' : 'Land Freight'}</option>
                </select>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 py-3 px-6 bg-slate-800 text-slate-300 rounded-lg font-semibold hover:bg-slate-700 transition-all"
                >
                  {locale === 'ar' ? 'السابق' : 'Previous'}
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="flex-1 py-3 px-6 bg-gradient-to-r from-indigo-600 to-purple-500 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-indigo-500/30 transition-all"
                >
                  {locale === 'ar' ? 'التالي' : 'Next'}
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Service Selection */}
          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-white">{locale === 'ar' ? 'الخدمات المطلوبة' : 'Required Services'}</h2>
              <p className="text-slate-400">{locale === 'ar' ? 'اختر الخدمات التي تحتاجها' : 'Select the services you need'}</p>

              <div className="space-y-4">
                <label className="flex items-center gap-4 p-4 bg-slate-900/50 border border-slate-700 rounded-lg cursor-pointer hover:border-indigo-500 transition-all">
                  <input
                    type="checkbox"
                    checked={formData.services.includes('sourcing')}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setFormData({ ...formData, services: [...formData.services, 'sourcing'] });
                      } else {
                        setFormData({ ...formData, services: formData.services.filter(s => s !== 'sourcing') });
                      }
                    }}
                    className="w-5 h-5 rounded border-slate-600 text-indigo-600 focus:ring-indigo-500"
                  />
                  <div>
                    <div className="font-semibold text-white">{locale === 'ar' ? 'البحث عن الموردين' : 'Supplier Search'}</div>
                    <div className="text-sm text-slate-400">{locale === 'ar' ? 'نبحث لك عن المورد المناسب في الصين' : 'We search for the right supplier in China'}</div>
                  </div>
                </label>

                <label className="flex items-center gap-4 p-4 bg-slate-900/50 border border-slate-700 rounded-lg cursor-pointer hover:border-indigo-500 transition-all">
                  <input
                    type="checkbox"
                    checked={formData.services.includes('inspection')}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setFormData({ ...formData, services: [...formData.services, 'inspection'] });
                      } else {
                        setFormData({ ...formData, services: formData.services.filter(s => s !== 'inspection') });
                      }
                    }}
                    className="w-5 h-5 rounded border-slate-600 text-indigo-600 focus:ring-indigo-500"
                  />
                  <div>
                    <div className="font-semibold text-white">{locale === 'ar' ? 'فحص الجودة' : 'Quality Inspection'}</div>
                    <div className="text-sm text-slate-400">{locale === 'ar' ? 'فحص وتوثيق قبل الشحن' : 'Inspection and documentation before shipping'}</div>
                  </div>
                </label>

                <label className="flex items-center gap-4 p-4 bg-slate-900/50 border border-slate-700 rounded-lg cursor-pointer hover:border-indigo-500 transition-all">
                  <input
                    type="checkbox"
                    checked={formData.services.includes('storage')}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setFormData({ ...formData, services: [...formData.services, 'storage'] });
                      } else {
                        setFormData({ ...formData, services: formData.services.filter(s => s !== 'storage') });
                      }
                    }}
                    className="w-5 h-5 rounded border-slate-600 text-indigo-600 focus:ring-indigo-500"
                  />
                  <div>
                    <div className="font-semibold text-white">{locale === 'ar' ? 'التخزين في الصين' : 'Storage in China'}</div>
                    <div className="text-sm text-slate-400">{locale === 'ar' ? 'تجميع وتخزين شحناتك في الصين' : 'Consolidate and store your shipments in China'}</div>
                  </div>
                </label>

                <label className="flex items-center gap-4 p-4 bg-slate-900/50 border border-slate-700 rounded-lg cursor-pointer hover:border-indigo-500 transition-all">
                  <input
                    type="checkbox"
                    checked={formData.services.includes('shipping')}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setFormData({ ...formData, services: [...formData.services, 'shipping'] });
                      } else {
                        setFormData({ ...formData, services: formData.services.filter(s => s !== 'shipping') });
                      }
                    }}
                    className="w-5 h-5 rounded border-slate-600 text-indigo-600 focus:ring-indigo-500"
                  />
                  <div>
                    <div className="font-semibold text-white">{locale === 'ar' ? 'تنسيق الشحن' : 'Shipping Coordination'}</div>
                    <div className="text-sm text-slate-400">{locale === 'ar' ? 'تنسيق الشحن من الصين إلى بلدك' : 'Coordinate shipping from China to your country'}</div>
                  </div>
                </label>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex-1 py-3 px-6 bg-slate-800 text-slate-300 rounded-lg font-semibold hover:bg-slate-700 transition-all"
                >
                  {locale === 'ar' ? 'السابق' : 'Previous'}
                </button>
                <button
                  type="button"
                  onClick={() => setStep(4)}
                  className="flex-1 py-3 px-6 bg-gradient-to-r from-indigo-600 to-purple-500 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-indigo-500/30 transition-all"
                >
                  {locale === 'ar' ? 'التالي' : 'Next'}
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Contact Info */}
          {step === 4 && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-white">{locale === 'ar' ? 'معلومات الاتصال' : 'Contact Information'}</h2>
              <p className="text-slate-400">{locale === 'ar' ? 'اختر طريقة التواصل المفضلة' : 'Choose your preferred contact method'}</p>

              <div className="flex gap-4 mb-6">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, contactType: 'whatsapp' })}
                  className={`flex-1 py-4 px-6 rounded-xl border-2 flex items-center justify-center gap-3 transition-all ${
                    formData.contactType === 'whatsapp'
                      ? 'border-green-500 bg-green-500/10'
                      : 'border-slate-700 hover:border-slate-600 bg-slate-800/50'
                  }`}
                >
                  <MessageCircle className="w-5 h-5 text-green-400" />
                  <span className="font-semibold text-white">{locale === 'ar' ? 'واتساب' : 'WhatsApp'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, contactType: 'email' })}
                  className={`flex-1 py-4 px-6 rounded-xl border-2 flex items-center justify-center gap-3 transition-all ${
                    formData.contactType === 'email' 
                      ? 'border-blue-500 bg-blue-500/10' 
                      : 'border-slate-700 hover:border-slate-600 bg-slate-800/50'
                  }`}
                >
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="font-semibold text-white">{locale === 'ar' ? 'البريد الإلكتروني' : 'Email'}</span>
                </button>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  {formData.contactType === 'whatsapp' ? (locale === 'ar' ? 'رقم واتساب' : 'WhatsApp Number') : (locale === 'ar' ? 'البريد الإلكتروني' : 'Email')} *
                </label>
                <input
                  type={formData.contactType === 'whatsapp' ? 'tel' : 'email'}
                  name="contact"
                  required
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-slate-500"
                  placeholder={formData.contactType === 'whatsapp' ? '+966 50 123 4567' : 'your@email.com'}
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="flex-1 py-3 px-6 bg-slate-800 text-slate-300 rounded-lg font-semibold hover:bg-slate-700 transition-all"
                >
                  {locale === 'ar' ? 'السابق' : 'Previous'}
                </button>
                <button
                  type="button"
                  onClick={() => setStep(5)}
                  className="flex-1 py-3 px-6 bg-gradient-to-r from-indigo-600 to-purple-500 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-indigo-500/30 transition-all"
                >
                  {locale === 'ar' ? 'التالي' : 'Next'}
                </button>
              </div>
            </div>
          )}

          {/* Step 5: Details */}
          {step === 5 && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-white">{locale === 'ar' ? 'تفاصيل إضافية' : 'Additional Details'}</h2>
              <p className="text-slate-400">{locale === 'ar' ? 'أخبرنا المزيد عن احتياجاتك' : 'Tell us more about your needs'}</p>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  {locale === 'ar' ? 'التفاصيل' : 'Details'} *
                </label>
                <textarea
                  name="details"
                  required
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-slate-500"
                  placeholder={locale === 'ar' ? 'أخبرنا عن المنتجات التي تحتاجها، الكميات، المواصفات...' : 'Tell us about the products you need, quantities, specifications...'}
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setStep(4)}
                  className="flex-1 py-3 px-6 bg-slate-800 text-slate-300 rounded-lg font-semibold hover:bg-slate-700 transition-all"
                >
                  {locale === 'ar' ? 'السابق' : 'Previous'}
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 px-6 bg-gradient-to-r from-indigo-600 to-purple-500 text-white rounded-lg font-semibold hover:shadow-xl hover:shadow-indigo-500/30 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  {locale === 'ar' ? 'إرسال الطلب' : 'Submit Request'}
                </button>
              </div>
            </div>
          )}
        </form>

        {/* Quick Info */}
        <div className="mt-12 grid sm:grid-cols-3 gap-6 text-center">
          <div className="p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700">
            <div className="text-2xl font-bold text-white mb-1">24h</div>
            <div className="text-sm text-slate-400">{locale === 'ar' ? 'وقت الرد' : 'Response Time'}</div>
          </div>
          <div className="p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700">
            <div className="text-2xl font-bold text-white mb-1">0</div>
            <div className="text-sm text-slate-400">{locale === 'ar' ? 'التكلفة' : 'Cost'}</div>
          </div>
          <div className="p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700">
            <div className="text-2xl font-bold text-white mb-1">100%</div>
            <div className="text-sm text-slate-400">{locale === 'ar' ? 'الالتزام' : 'Commitment'}</div>
          </div>
        </div>
      </div>
    </main>
  );
}
