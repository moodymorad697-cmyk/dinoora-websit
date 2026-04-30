"use client";

import Link from "next/link";
import { ShieldCheck, Microscope, Factory, ClipboardCheck, CheckCircle2, Award, AlertTriangle, FileCheck } from 'lucide-react';

export default function InspectionPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero Section - Dark Theme */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80')" }} />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-emerald-950/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,_rgba(16,185,129,0.15),transparent_50%)]" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4" />
              فحص الجودة / Inspection
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              فحص الجودة
              <span className="block mt-2 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                الشامل
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
              ضمان جودة المنتجات مع فحوصات شاملة وتدقيق المصانع. فرقنا الخبراء تتحقق من الامتثال لمواصفاتك.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="bg-slate-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-700">
                <span className="text-emerald-400 font-bold">100%</span>
                <span className="text-slate-400 mr-2">تغطية الفحص</span>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-700">
                <span className="text-emerald-400 font-bold">50+</span>
                <span className="text-slate-400 mr-2">مفتش معتمد</span>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-700">
                <span className="text-emerald-400 font-bold">99.5%</span>
                <span className="text-slate-400 mr-2">معدل الدقة</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#quote"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-500 text-white rounded-full font-semibold text-lg hover:shadow-xl transition-all"
              >
                اطلب عرض سعر
              </Link>
              <Link 
                href="/"
                className="inline-flex items-center justify-center px-8 py-4 bg-slate-800 text-white border-2 border-slate-700 rounded-xl font-semibold hover:bg-slate-700 hover:border-slate-600 transition-all"
              >
                العودة للرئيسية
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-4 text-center">
              مراقبة الجودة الشاملة
            </h2>
            <p className="text-xl text-slate-400 mb-12 text-center max-w-3xl mx-auto">
              من ما قبل الإنتاج إلى التسليم النهائي، نضمن أن منتجاتك تلبي أعلى معايير الجودة
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-emerald-500/50 hover:bg-slate-800 transition-all group">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <ClipboardCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">فحص ما قبل الشحن</h3>
                <p className="text-slate-400 mb-4">
                  فحص شامل للمنتجات النهائية قبل الشحن لضمان أنها تلبي مواصفاتك ومعايير الجودة.
                </p>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-400" /> التحقق من كمية المنتج</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-400" /> فحص مواصفات الجودة</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-400" /> فحص التغليف</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-400" /> تقرير فحص مفصل</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 hover:bg-slate-800 transition-all group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Factory className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">تدقيق المصانع</h3>
                <p className="text-slate-400 mb-4">
                  تدقيق شامل للمصانع لتقييم القدرات الإنتاجية وأنظمة الجودة والامتثال للمعايير الدولية.
                </p>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-blue-400" /> تقييم القدرة الإنتاجية</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-blue-400" /> تقييم نظام الجودة</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-blue-400" /> التحقق من الامتثال</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-blue-400" /> تقييم المخاطر</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-purple-500/50 hover:bg-slate-800 transition-all group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Microscope className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">المراقبة أثناء الإنتاج</h3>
                <p className="text-slate-400 mb-4">
                  مراقبة فورية أثناء الإنتاج لاكتشاف مشاكل الجودة مبكراً وضمان إخراج متسق طوال التصنيع.
                </p>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-purple-400" /> مراقبة خط الإنتاج</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-purple-400" /> فحص المواد الخام</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-purple-400" /> مراقبة جودة العملية</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-purple-400" /> تقارير تقدم منتظمة</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-orange-500/50 hover:bg-slate-800 transition-all group">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <FileCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">الإشراف على التحميل</h3>
                <p className="text-slate-400 mb-4">
                  الإشراف على تحميل الحاويات لضمان الكمية الصحيحة والتغليف المناسب والتعامل الآمن أثناء الشحن.
                </p>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-400" /> فحص الحاوية</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-400" /> الإشراف على التحميل</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-400" /> التحقق من الختم</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-400" /> فحص الوثائق</li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-4">ضمن جودة منتجاتك</h3>
              <p className="text-xl text-slate-400 mb-8">
                احصل على خدمات فحص شاملة لحماية استثمارك وضمان رضا العملاء
              </p>
              <Link 
                href="/#quote"
                className="inline-flex items-center gap-2 px-12 py-5 bg-gradient-to-r from-emerald-600 to-teal-500 text-white rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-emerald-500/30 transition-all"
              >
                اطلب عرض سعر
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
