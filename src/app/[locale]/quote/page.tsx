"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowLeft, Send, Mail, MessageCircle } from "lucide-react";

export default function QuotePage() {
  const t = useTranslations('quote');
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    contact: "",
    contactType: "whatsapp",
    service: "",
    details: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const services = [
    { id: "sourcing", icon: "🔍", title: "Product Sourcing", desc: "Find suppliers & products" },
    { id: "inspection", icon: "✓", title: "Quality Check", desc: "Inspect before shipping" },
    { id: "shipping", icon: "🚢", title: "Shipping Only", desc: "Transport your goods" },
    { id: "complete", icon: "🌐", title: "Complete Service", desc: "From A to Z solution" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Quote requested:", formData);
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
            <h2 className="text-3xl font-bold text-white mb-4">تم الإرسال بنجاح!</h2>
            <p className="text-slate-400 mb-8">سنتواصل معك قريباً</p>
            <Link 
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-500 text-white rounded-full font-semibold hover:shadow-xl hover:shadow-indigo-500/30 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              العودة للرئيسية
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
            href="/" 
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            العودة للرئيسية
          </Link>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">اطلب عرض سعر</h1>
          <p className="text-slate-400">املأ النموذج أدناه للحصول على عرض سعر مخصص</p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-4 mb-12">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${
                step >= s ? 'bg-gradient-to-r from-indigo-600 to-purple-500 text-white' : 'bg-slate-800 text-slate-500'
              }`}>
                {s}
              </div>
              {s < 3 && <div className={`w-16 h-1 rounded ${step > s ? 'bg-gradient-to-r from-indigo-600 to-purple-500' : 'bg-slate-800'}`} />}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700">
          {/* Step 1: Service Selection */}
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-white">اختر الخدمة</h2>
              <p className="text-slate-400">حدد الخدمة التي تحتاجها</p>
              
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

          {/* Step 2: Contact Info */}
          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-white">معلومات الاتصال</h2>
              <p className="text-slate-400">اختر طريقة التواصل المفضلة</p>
              
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
                  <span className="font-semibold text-white">واتساب</span>
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
                  <span className="font-semibold text-white">البريد</span>
                </button>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  {formData.contactType === 'whatsapp' ? 'رقم الواتساب' : 'البريد الإلكتروني'}
                </label>
                <input
                  type={formData.contactType === 'email' ? 'email' : 'tel'}
                  required
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  className="w-full px-4 py-4 border border-slate-700 rounded-xl bg-slate-800/50 focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white text-lg placeholder-slate-500"
                  placeholder={formData.contactType === 'whatsapp' ? '+966 50 123 4567' : 'you@example.com'}
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 py-4 border border-slate-700 rounded-xl font-semibold hover:bg-slate-800 transition-colors text-white"
                >
                  السابق
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  disabled={!formData.contact}
                  className="flex-1 py-4 bg-gradient-to-r from-indigo-600 to-purple-500 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-indigo-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  التالي
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Details */}
          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-white">التفاصيل</h2>
              <p className="text-slate-400">أخبرنا المزيد عن مشروعك</p>
              
              <div>
                <textarea
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-4 border border-slate-700 rounded-xl bg-slate-800/50 focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none text-white placeholder-slate-500"
                  placeholder="اكتب تفاصيل مشروعك هنا..."
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex-1 py-4 border border-slate-700 rounded-xl font-semibold hover:bg-slate-800 transition-colors text-white"
                >
                  السابق
                </button>
                <button
                  type="submit"
                  className="flex-1 py-4 bg-gradient-to-r from-indigo-600 to-purple-500 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-indigo-500/30 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  إرسال
                </button>
              </div>
            </div>
          )}
        </form>

        {/* Quick Info */}
        <div className="mt-12 grid sm:grid-cols-3 gap-6 text-center">
          <div className="p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700">
            <div className="text-2xl font-bold text-white mb-1">24h</div>
            <div className="text-sm text-slate-400">وقت الرد</div>
          </div>
          <div className="p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700">
            <div className="text-2xl font-bold text-white mb-1">0</div>
            <div className="text-sm text-slate-400">التكلفة</div>
          </div>
          <div className="p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700">
            <div className="text-2xl font-bold text-white mb-1">100%</div>
            <div className="text-sm text-slate-400">الالتزام</div>
          </div>
        </div>
      </div>
    </main>
  );
}
