"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { ArrowLeft, Calculator, Send, Package, Truck, DollarSign } from "lucide-react";

export default function CalculatorPage() {
  const locale = useLocale();
  const ar = locale === 'ar';

  const [formData, setFormData] = useState({
    productType: "",
    quantity: "",
    unit: "pieces",
    weightPerUnit: "",
    shippingMethod: "sea",
    destination: "",
    whatsappCountryCode: "+966",
    whatsappNumber: "",
    email: "",
    name: "",
  });

  const [result, setResult] = useState<any>(null);
  const [submitted, setSubmitted] = useState(false);

  const calculateCost = () => {
    const quantity = parseFloat(formData.quantity) || 0;
    const weightPerUnit = parseFloat(formData.weightPerUnit) || 0;
    const totalWeight = quantity * weightPerUnit;

    let shippingCost = 0;
    let estimatedDays = 0;

    if (formData.shippingMethod === "sea") {
      shippingCost = totalWeight * 0.5; // $0.5 per kg for sea
      estimatedDays = 30;
    } else if (formData.shippingMethod === "air") {
      shippingCost = totalWeight * 5; // $5 per kg for air
      estimatedDays = 7;
    } else {
      shippingCost = totalWeight * 2; // $2 per kg for land
      estimatedDays = 15;
    }

    const totalCost = shippingCost;

    setResult({
      totalWeight,
      shippingCost,
      totalCost,
      estimatedDays,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    calculateCost();

    const whatsappNumber = formData.whatsappCountryCode + formData.whatsappNumber;

    const message = ar
      ? `*🧮 حساب تكلفة الاستيراد من موقع دينورا*\n\n*الاسم:* ${formData.name}\n*نوع المنتج:* ${formData.productType}\n*الكمية:* ${formData.quantity} ${formData.unit === 'pieces' ? 'قطعة' : formData.unit === 'kg' ? 'كجم' : 'طن'}\n*الوزن لكل وحدة:* ${formData.weightPerUnit} كجم\n*طريقة الشحن:* ${formData.shippingMethod === 'sea' ? 'بحري' : formData.shippingMethod === 'air' ? 'جوي' : 'بري'}\n*الوجهة:* ${formData.destination}\n*الوزن الإجمالي:* ${result?.totalWeight?.toFixed(2)} كجم\n*تكلفة الشحن التقريبية:* $${result?.shippingCost?.toFixed(2)}\n*الوقت المتوقع:* ${result?.estimatedDays} يوم\n*رقم الواتساب:* ${whatsappNumber}\n*البريد:* ${formData.email}`
      : `*🧮 Import Cost Calculator from Dinoora website*\n\n*Name:* ${formData.name}\n*Product Type:* ${formData.productType}\n*Quantity:* ${formData.quantity} ${formData.unit}\n*Weight per Unit:* ${formData.weightPerUnit} kg\n*Shipping Method:* ${formData.shippingMethod}\n*Destination:* ${formData.destination}\n*Total Weight:* ${result?.totalWeight?.toFixed(2)} kg\n*Estimated Shipping Cost:* $${result?.shippingCost?.toFixed(2)}\n*Estimated Time:* ${result?.estimatedDays} days\n*WhatsApp Number:* ${whatsappNumber}\n*Email:* ${formData.email}`;

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
      <main className="min-h-screen bg-slate-950 text-slate-100 pt-16">
        <div className="max-w-2xl mx-auto px-4 py-24 text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-12 border border-slate-700">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Send className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">{ar ? 'تم الإرسال بنجاح!' : 'Successfully Submitted!'}</h2>
            <p className="text-slate-400 mb-8">{ar ? 'سنتواصل معك قريباً بالعرض التفصيلي' : 'We will contact you soon with detailed quote'}</p>
            <Link
              href={`/${locale}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-500 text-white rounded-full font-semibold hover:shadow-xl hover:shadow-indigo-500/30 transition-all"
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
    <main className="min-h-screen bg-slate-950 text-slate-100 pt-16">
      {/* Header */}
      <div className="bg-slate-900/50 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {ar ? 'العودة للرئيسية' : 'Back to Home'}
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Calculator className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">{ar ? 'حاسبة تكلفة الاستيراد' : 'Import Cost Calculator'}</h1>
          <p className="text-slate-400">{ar ? 'احسب تكلفة استيراد منتجاتك من الصين' : 'Calculate the cost of importing your products from China'}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <h2 className="text-xl font-bold text-white mb-6">{ar ? 'تفاصيل المنتج' : 'Product Details'}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  {ar ? 'نوع المنتج' : 'Product Type'}
                </label>
                <input
                  type="text"
                  required
                  value={formData.productType}
                  onChange={(e) => setFormData({ ...formData, productType: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-slate-500"
                  placeholder={ar ? 'مثال: إلكترونيات، ملابس...' : 'e.g., Electronics, Clothing...'}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    {ar ? 'الكمية' : 'Quantity'}
                  </label>
                  <input
                    type="number"
                    required
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-slate-500"
                    placeholder="100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    {ar ? 'الوحدة' : 'Unit'}
                  </label>
                  <select
                    value={formData.unit}
                    onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white"
                  >
                    <option value="pieces">{ar ? 'قطعة' : 'Pieces'}</option>
                    <option value="kg">{ar ? 'كجم' : 'KG'}</option>
                    <option value="tons">{ar ? 'طن' : 'Tons'}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  {ar ? 'الوزن لكل وحدة (كجم)' : 'Weight per Unit (kg)'}
                </label>
                <input
                  type="number"
                  required
                  value={formData.weightPerUnit}
                  onChange={(e) => setFormData({ ...formData, weightPerUnit: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-slate-500"
                  placeholder="0.5"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  {ar ? 'طريقة الشحن' : 'Shipping Method'}
                </label>
                <select
                  value={formData.shippingMethod}
                  onChange={(e) => setFormData({ ...formData, shippingMethod: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white"
                >
                  <option value="sea">{ar ? 'شحن بحري' : 'Sea Freight'}</option>
                  <option value="air">{ar ? 'شحن جوي' : 'Air Freight'}</option>
                  <option value="land">{ar ? 'شحن بري' : 'Land Freight'}</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  {ar ? 'الوجهة' : 'Destination'}
                </label>
                <input
                  type="text"
                  required
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-slate-500"
                  placeholder={ar ? 'السعودية، الإمارات...' : 'Saudi Arabia, UAE...'}
                />
              </div>

              <div className="border-t border-slate-700 pt-6">
                <h3 className="text-lg font-bold text-white mb-4">{ar ? 'معلومات التواصل' : 'Contact Information'}</h3>
                
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    {ar ? 'الاسم' : 'Name'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-slate-500"
                    placeholder={ar ? 'الاسم الكامل' : 'Full Name'}
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    {ar ? 'رقم الواتساب (مطلوب)' : 'WhatsApp Number (Required)'}
                  </label>
                  <div className="flex gap-2">
                    <select
                      value={formData.whatsappCountryCode}
                      onChange={(e) => setFormData({ ...formData, whatsappCountryCode: e.target.value })}
                      className="w-32 px-3 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white"
                    >
                      <option value="+966">+966</option>
                      <option value="+971">+971</option>
                      <option value="+965">+965</option>
                      <option value="+974">+974</option>
                      <option value="+973">+973</option>
                      <option value="+968">+968</option>
                      <option value="+962">+962</option>
                      <option value="+20">+20</option>
                      <option value="+212">+212</option>
                      <option value="+213">+213</option>
                      <option value="+216">+216</option>
                      <option value="+218">+218</option>
                      <option value="+961">+961</option>
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                      <option value="+61">+61</option>
                      <option value="+7">+7</option>
                      <option value="+380">+380</option>
                      <option value="+55">+55</option>
                      <option value="+27">+27</option>
                      <option value="+234">+234</option>
                    </select>
                    <input
                      type="tel"
                      required
                      value={formData.whatsappNumber}
                      onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                      className="flex-1 px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-slate-500"
                      placeholder="50 123 4567"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    {ar ? 'البريد الإلكتروني' : 'Email'}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-slate-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-500 text-white rounded-lg font-semibold text-lg hover:shadow-xl hover:shadow-indigo-500/30 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                {ar ? 'احسب وأرسل' : 'Calculate & Send'}
              </button>
            </form>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {result && (
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-green-400" />
                  {ar ? 'النتيجة التقريبية' : 'Estimated Result'}
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-slate-900/50 rounded-lg">
                    <span className="text-slate-400">{ar ? 'الوزن الإجمالي' : 'Total Weight'}</span>
                    <span className="text-white font-bold">{result.totalWeight.toFixed(2)} kg</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-slate-900/50 rounded-lg">
                    <span className="text-slate-400">{ar ? 'تكلفة الشحن' : 'Shipping Cost'}</span>
                    <span className="text-green-400 font-bold">${result.shippingCost.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-slate-900/50 rounded-lg">
                    <span className="text-slate-400">{ar ? 'الوقت المتوقع' : 'Estimated Time'}</span>
                    <span className="text-amber-400 font-bold">{result.estimatedDays} {ar ? 'يوم' : 'days'}</span>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-gradient-to-br from-indigo-600/10 to-purple-600/10 rounded-2xl p-8 border border-indigo-500/20">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Package className="w-5 h-5 text-indigo-400" />
                {ar ? 'ملاحظة هامة' : 'Important Note'}
              </h3>
              <p className="text-slate-400 text-sm">
                {ar 
                  ? 'هذه الحسابات تقريبية فقط. التكلفة الفعلية تعتمد على عوامل متعددة مثل حجم البضاعة، الميناء، والخدمات الإضافية المطلوبة. للحصول على عرض دقيق، يرجى التواصل معنا.' 
                  : 'These calculations are approximate only. Actual cost depends on multiple factors such as cargo size, port, and additional services required. For an accurate quote, please contact us.'}
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Truck className="w-5 h-5 text-amber-400" />
                {ar ? 'الخدمات المتضمنة' : 'Included Services'}
              </h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full" />
                  {ar ? 'تخليص جمركي' : 'Customs Clearance'}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full" />
                  {ar ? 'تأمين الشحن' : 'Shipping Insurance'}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full" />
                  {ar ? 'تتبع الشحنة' : 'Shipment Tracking'}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full" />
                  {ar ? 'دعم على مدار الساعة' : '24/7 Support'}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
