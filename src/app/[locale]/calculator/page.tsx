"use client";

import React, { useState } from "react";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Calculator, ArrowRight, Package, Truck, FileText, CheckCircle2 } from "lucide-react";

export default function ImportCalculatorPage() {
  const locale = useLocale();
  const ar = locale === "ar";

  const [formData, setFormData] = useState({
    productType: "",
    quantity: "",
    unit: "pcs",
    origin: "china",
    destination: "",
    shippingMethod: "sea",
    value: ""
  });

  const [result, setResult] = useState<any>(null);

  const content = ar ? {
    title: "حاسبة تكلفة الاستيراد من الصين",
    description: "احسب تكلفة استيراد منتجاتك من الصين بدقة",
    intro: "استخدم حاسبة تكلفة الاستيراد المجانية للحصول على تقدير دقيق لتكلفة استيراد منتجاتك من الصين. أدخل تفاصيل منتجك وستحصل على تقدير يشمل تكلفة المنتج، الشحن، الجمارك، والرسوم الإضافية.",
    productType: "نوع المنتج",
    quantity: "الكمية",
    unit: "الوحدة",
    origin: "مصدر المنتج",
    destination: "الوجهة",
    shippingMethod: "طريقة الشحن",
    value: "قيمة المنتج (USD)",
    calculate: "احسب التكلفة",
    resultTitle: "تقدير التكلفة",
    productCost: "تكلفة المنتج",
    shippingCost: "تكلفة الشحن",
    customsCost: "تكلفة الجمارك",
    additionalFees: "رسوم إضافية",
    totalCost: "التكلفة الإجمالية",
    getQuote: "احصل على عرض سعر دقيق",
    note: "ملاحظة: هذه تقديرات تقريبية. للحصول على عرض سعر دقيق، تواصل معنا.",
    productTypes: ["إلكترونيات", "ملابس", "أدوات طبية", "أقمشة", "طاقة شمسية", "أخرى"],
    destinations: ["السعودية", "الإمارات", "الكويت", "قطر", "البحرين", "عمان", "الأردن", "العراق", "الجزائر", "المغرب", "تونس", "مصر"],
    shippingMethods: ["بحري (Sea)", "جوي (Air)"]
  } : {
    title: "Import Cost Calculator from China",
    description: "Calculate the cost of importing your products from China accurately",
    intro: "Use our free import cost calculator to get an accurate estimate of the cost of importing your products from China. Enter your product details and you'll get an estimate including product cost, shipping, customs, and additional fees.",
    productType: "Product Type",
    quantity: "Quantity",
    unit: "Unit",
    origin: "Product Origin",
    destination: "Destination",
    shippingMethod: "Shipping Method",
    value: "Product Value (USD)",
    calculate: "Calculate Cost",
    resultTitle: "Cost Estimate",
    productCost: "Product Cost",
    shippingCost: "Shipping Cost",
    customsCost: "Customs Cost",
    additionalFees: "Additional Fees",
    totalCost: "Total Cost",
    getQuote: "Get Accurate Quote",
    note: "Note: These are approximate estimates. For an accurate quote, contact us.",
    productTypes: ["Electronics", "Clothing", "Medical Supplies", "Textiles", "Solar Energy", "Other"],
    destinations: ["Saudi Arabia", "UAE", "Kuwait", "Qatar", "Bahrain", "Oman", "Jordan", "Iraq", "Algeria", "Morocco", "Tunisia", "Egypt"],
    shippingMethods: ["Sea Freight", "Air Freight"]
  };

  const calculateCost = () => {
    const productValue = parseFloat(formData.value) || 0;
    const quantity = parseFloat(formData.quantity) || 0;
    const totalProductValue = productValue * quantity;

    // Shipping cost estimation (simplified)
    let shippingCost = 0;
    if (formData.shippingMethod === "sea") {
      shippingCost = quantity * 2; // $2 per unit for sea freight
    } else {
      shippingCost = quantity * 8; // $8 per unit for air freight
    }

    // Customs cost estimation (5-15% based on destination)
    const customsRate = 0.1; // 10% average
    const customsCost = (totalProductValue + shippingCost) * customsRate;

    // Additional fees (handling, documentation, etc.)
    const additionalFees = (totalProductValue + shippingCost) * 0.05; // 5%

    const totalCost = totalProductValue + shippingCost + customsCost + additionalFees;

    setResult({
      productCost: totalProductValue,
      shippingCost,
      customsCost,
      additionalFees,
      totalCost
    });
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

      {/* Calculator Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Product Type */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-300">
                  {content.productType}
                </label>
                <select
                  value={formData.productType}
                  onChange={(e) => setFormData({ ...formData, productType: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-cyan-500 focus:outline-none"
                >
                  <option value="">{ar ? "اختر نوع المنتج" : "Select Product Type"}</option>
                  {content.productTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-300">
                  {content.quantity}
                </label>
                <input
                  type="number"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  placeholder={ar ? "أدخل الكمية" : "Enter Quantity"}
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
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-cyan-500 focus:outline-none"
                >
                  <option value="">{ar ? "اختر الوجهة" : "Select Destination"}</option>
                  {content.destinations.map((dest) => (
                    <option key={dest} value={dest}>{dest}</option>
                  ))}
                </select>
              </div>

              {/* Shipping Method */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-300">
                  {content.shippingMethod}
                </label>
                <select
                  value={formData.shippingMethod}
                  onChange={(e) => setFormData({ ...formData, shippingMethod: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-cyan-500 focus:outline-none"
                >
                  {content.shippingMethods.map((method) => (
                    <option key={method} value={method.includes("Sea") ? "sea" : "air"}>{method}</option>
                  ))}
                </select>
              </div>

              {/* Product Value */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold mb-2 text-slate-300">
                  {content.value}
                </label>
                <input
                  type="number"
                  value={formData.value}
                  onChange={(e) => setFormData({ ...formData, value: e.target.value })}
                  placeholder={ar ? "أدخل قيمة المنتج بالدولار" : "Enter product value in USD"}
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white focus:border-cyan-500 focus:outline-none"
                />
              </div>
            </div>

            <button
              onClick={calculateCost}
              className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
            >
              {content.calculate}
              <Calculator className="h-5 w-5" />
            </button>

            {/* Result */}
            {result && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl"
              >
                <h3 className="text-2xl font-bold mb-6 text-cyan-400">{content.resultTitle}</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-slate-700">
                    <span className="flex items-center gap-2 text-slate-300">
                      <Package className="h-4 w-4" />
                      {content.productCost}
                    </span>
                    <span className="font-bold">${result.productCost.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-700">
                    <span className="flex items-center gap-2 text-slate-300">
                      <Truck className="h-4 w-4" />
                      {content.shippingCost}
                    </span>
                    <span className="font-bold">${result.shippingCost.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-700">
                    <span className="flex items-center gap-2 text-slate-300">
                      <FileText className="h-4 w-4" />
                      {content.customsCost}
                    </span>
                    <span className="font-bold">${result.customsCost.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-700">
                    <span className="flex items-center gap-2 text-slate-300">
                      <CheckCircle2 className="h-4 w-4" />
                      {content.additionalFees}
                    </span>
                    <span className="font-bold">${result.additionalFees.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center py-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl px-4">
                    <span className="text-xl font-bold">{content.totalCost}</span>
                    <span className="text-2xl font-black text-cyan-400">${result.totalCost.toFixed(2)}</span>
                  </div>
                </div>
                <p className="mt-6 text-sm text-slate-400 text-center">{content.note}</p>
                <a
                  href={`/${locale}/quote`}
                  className="mt-6 block w-full py-4 bg-white text-cyan-600 font-bold rounded-xl hover:bg-slate-100 transition text-center"
                >
                  {content.getQuote}
                  <ArrowRight className={`inline h-5 w-5 ${ar ? "mr-2 rotate-180" : "ml-2"}`} />
                </a>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
