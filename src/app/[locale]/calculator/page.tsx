"use client";

import React, { useState } from "react";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Calculator, ArrowRight, Package, CheckCircle2, Send } from "lucide-react";

export default function ImportCalculatorPage() {
  const locale = useLocale();
  const ar = locale === "ar";

  const [formData, setFormData] = useState({
    productCategory: "",
    productDetails: "",
    quantity: "",
    destination: "",
    port: "",
    shippingMethod: "",
    weight: "",
    whatsapp: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const content = ar ? {
    title: "احسب قيمة منتجك مجاناً مع دينورا",
    description: "احصل على تقدير دقيق لتكلفة استيراد منتجاتك من الصين",
    intro: "أدخل تفاصيل منتجك وسيقوم فريقنا بحساب التكلفة الكاملة وإرسالها إليك عبر الواتساب. خدمة مجانية من دينورا.",
    productCategory: "فئة المنتج",
    productDetails: "تفاصيل المنتج",
    quantity: "الكمية",
    destination: "الوجهة",
    port: "الميناء",
    shippingMethod: "طريقة الشحن",
    weight: "الوزن (كيلو)",
    whatsapp: "رقم الواتساب",
    submit: "إرسال الطلب",
    successTitle: "تم إرسال طلبك بنجاح!",
    successMessage: "سوف يصلك السعر الكامل لمنتجك على الواتساب خلال 24 ساعة. شكراً لتواصلك معنا.",
    productCategories: ["إلكترونيات", "ملابس", "أدوات طبية", "أقمشة", "طاقة شمسية", "أجهزة منزلية", "أخرى"],
    destinations: [
      { value: "saudi", label: "السعودية", port: "جدة، الدمام، الرياض" },
      { value: "uae", label: "الإمارات", port: "دبي، أبوظبي، الشارقة" },
      { value: "kuwait", label: "الكويت", port: "الكويت، الشعيبة" },
      { value: "qatar", label: "قطر", port: "الدوحة" },
      { value: "bahrain", label: "البحرين", port: "المنامة" },
      { value: "oman", label: "عمان", port: "صلالة، مسقط" },
      { value: "jordan", label: "الأردن", port: "عمان، العقبة" },
      { value: "iraq", label: "العراق", port: "البصرة، بغداد" },
      { value: "algeria", label: "الجزائر", port: "الجزائر، وهران" },
      { value: "morocco", label: "المغرب", port: "الدار البيضاء، طنجة" },
      { value: "tunisia", label: "تونس", port: "تونس، صفاقس" },
      { value: "egypt", label: "مصر", port: "الإسكندرية، بورسعيد" },
      { value: "lebanon", label: "لبنان", port: "بيروت" },
      { value: "libya", label: "ليبيا", port: "طرابلس، بنغازي" },
      { value: "sudan", label: "السودان", port: "الخرطوم، بورتسودان" },
      { value: "yemen", label: "اليمن", port: "عدن، الحديدة" }
    ],
    shippingMethods: ["بحري", "جوي"],
    placeholders: {
      productDetails: "مثال: هواتف سامسونج، كاميرات، أجهزة لابتوب...",
      quantity: "مثال: 50 هاتف، 100 قطعة...",
      weight: "مثال: 500 كيلو، 1000 كيلو...",
      whatsapp: "مثال: +966500000000"
    }
  } : {
    title: "Calculate Your Product Value for Free with Dinoora",
    description: "Get an accurate estimate of the cost of importing your products from China",
    intro: "Enter your product details and our team will calculate the full cost and send it to you via WhatsApp. Free service from Dinoora.",
    productCategory: "Product Category",
    productDetails: "Product Details",
    quantity: "Quantity",
    destination: "Destination",
    port: "Port",
    shippingMethod: "Shipping Method",
    weight: "Weight (kg)",
    whatsapp: "WhatsApp Number",
    submit: "Submit Request",
    successTitle: "Your Request Has Been Sent Successfully!",
    successMessage: "The full price of your product will be sent to you via WhatsApp within 24 hours. Thank you for contacting us.",
    productCategories: ["Electronics", "Clothing", "Medical Supplies", "Textiles", "Solar Energy", "Home Appliances", "Other"],
    destinations: [
      { value: "saudi", label: "Saudi Arabia", port: "Jeddah, Dammam, Riyadh" },
      { value: "uae", label: "UAE", port: "Dubai, Abu Dhabi, Sharjah" },
      { value: "kuwait", label: "Kuwait", port: "Kuwait, Shuaiba" },
      { value: "qatar", label: "Qatar", port: "Doha" },
      { value: "bahrain", label: "Bahrain", port: "Manama" },
      { value: "oman", label: "Oman", port: "Salalah, Muscat" },
      { value: "jordan", label: "Jordan", port: "Amman, Aqaba" },
      { value: "iraq", label: "Iraq", port: "Basra, Baghdad" },
      { value: "algeria", label: "Algeria", port: "Algiers, Oran" },
      { value: "morocco", label: "Morocco", port: "Casablanca, Tangier" },
      { value: "tunisia", label: "Tunisia", port: "Tunis, Sfax" },
      { value: "egypt", label: "Egypt", port: "Alexandria, Port Said" },
      { value: "lebanon", label: "Lebanon", port: "Beirut" },
      { value: "libya", label: "Libya", port: "Tripoli, Benghazi" },
      { value: "sudan", label: "Sudan", port: "Khartoum, Port Sudan" },
      { value: "yemen", label: "Yemen", port: "Aden, Hodeidah" }
    ],
    shippingMethods: ["Sea Freight", "Air Freight"],
    placeholders: {
      productDetails: "e.g., Samsung phones, cameras, laptops...",
      quantity: "e.g., 50 phones, 100 pieces...",
      weight: "e.g., 500 kg, 1000 kg...",
      whatsapp: "e.g., +966500000000"
    }
  };

  const selectedDestination = content.destinations.find(d => d.value === formData.destination);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch('/api/send-calculator-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          destination: selectedDestination?.label || formData.destination,
          locale
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        setError(ar ? "فشل إرسال الطلب. يرجى المحاولة مرة أخرى." : "Failed to send request. Please try again.");
      }
    } catch (err) {
      setError(ar ? "حدث خطأ. يرجى المحاولة مرة أخرى." : "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 py-24">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px]" />
        </div>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Calculator className="h-6 w-6 text-cyan-400" />
              <span className="text-cyan-400 font-semibold">{ar ? "أدوات مجانية" : "Free Tools"}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              {content.title}
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-4xl">
              {content.intro}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calculator Form Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
          {!submitted ? (
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Product Category */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-300">
                    {content.productCategory}
                  </label>
                  <select
                    value={formData.productCategory}
                    onChange={(e) => setFormData({ ...formData, productCategory: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-cyan-500 focus:outline-none"
                  >
                    <option value="">{ar ? "اختر فئة المنتج" : "Select Product Category"}</option>
                    {content.productCategories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                {/* Product Details */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-300">
                    {content.productDetails}
                  </label>
                  <textarea
                    value={formData.productDetails}
                    onChange={(e) => setFormData({ ...formData, productDetails: e.target.value })}
                    required
                    rows={3}
                    placeholder={content.placeholders.productDetails}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-cyan-500 focus:outline-none resize-none"
                  />
                </div>

                {/* Quantity */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-300">
                    {content.quantity}
                  </label>
                  <input
                    type="text"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    required
                    placeholder={content.placeholders.quantity}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-cyan-500 focus:outline-none"
                  />
                </div>

                {/* Destination */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-300">
                    {content.destination}
                  </label>
                  <select
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-cyan-500 focus:outline-none"
                  >
                    <option value="">{ar ? "اختر الوجهة" : "Select Destination"}</option>
                    {content.destinations.map((dest) => (
                      <option key={dest.value} value={dest.value}>{dest.label}</option>
                    ))}
                  </select>
                </div>

                {/* Port */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-300">
                    {content.port}
                  </label>
                  <input
                    type="text"
                    value={formData.port}
                    onChange={(e) => setFormData({ ...formData, port: e.target.value })}
                    placeholder={selectedDestination?.port || ar ? "أدخل الميناء" : "Enter Port"}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-cyan-500 focus:outline-none"
                  />
                  {selectedDestination && !formData.port && (
                    <p className="mt-2 text-sm text-slate-400">
                      {ar ? "المواني المتاحة:" : "Available Ports:"} {selectedDestination.port}
                    </p>
                  )}
                </div>

                {/* Shipping Method */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-300">
                    {content.shippingMethod}
                  </label>
                  <select
                    value={formData.shippingMethod}
                    onChange={(e) => setFormData({ ...formData, shippingMethod: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-cyan-500 focus:outline-none"
                  >
                    <option value="">{ar ? "اختر طريقة الشحن" : "Select Shipping Method"}</option>
                    {content.shippingMethods.map((method) => (
                      <option key={method} value={method}>{method}</option>
                    ))}
                  </select>
                </div>

                {/* Weight */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-300">
                    {content.weight}
                  </label>
                  <input
                    type="text"
                    value={formData.weight}
                    onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                    required
                    placeholder={content.placeholders.weight}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-cyan-500 focus:outline-none"
                  />
                </div>

                {/* WhatsApp */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-300">
                    {content.whatsapp}
                  </label>
                  <input
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    required
                    placeholder={content.placeholders.whatsapp}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-cyan-500 focus:outline-none"
                  />
                </div>

                {error && (
                  <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-center">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {loading ? (
                    <>
                      {ar ? "جاري الإرسال..." : "Sending..."}
                      <Send className="h-5 w-5 animate-pulse" />
                    </>
                  ) : (
                    <>
                      {content.submit}
                      <Send className="h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gradient-to-br from-green-500/10 to-cyan-500/10 border border-green-500/30 rounded-3xl p-8 md:p-12 text-center"
            >
              <div className="h-20 w-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-10 w-10 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-green-400">{content.successTitle}</h3>
              <p className="text-slate-300 leading-relaxed">{content.successMessage}</p>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}
