"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Microscope, Factory, ClipboardCheck, CheckCircle2, Award, AlertTriangle, FileCheck, TrendingUp, Users, Clock, Zap } from 'lucide-react';

export default function InspectionPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero Section - Dark Theme with Enhanced Visuals */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80')" }} />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0C2340]/95 via-[#1E3A5F]/90 to-[#0C2340]/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,_rgba(212,175,55,0.15),transparent_50%)]" />
          {/* Animated particles */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
            <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-amber-500 rounded-full animate-ping" style={{ animationDuration: '4s' }} />
            <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-amber-300 rounded-full animate-ping" style={{ animationDuration: '2.5s' }} />
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-sm font-medium mb-6 animate-pulse">
              <ShieldCheck className="w-4 h-4" />
              فحص الجودة / Inspection
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              فحص الجودة
              <span className="block mt-2 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                الشامل
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
              ضمان جودة المنتجات مع فحوصات شاملة وتدقيق المصانع. فرقنا الخبراء تتحقق من الامتثال لمواصفاتك.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="bg-slate-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-700 hover:border-amber-500/50 transition-all hover:scale-105">
                <span className="text-amber-400 font-bold">100%</span>
                <span className="text-slate-400 mr-2">تغطية الفحص</span>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-700 hover:border-amber-500/50 transition-all hover:scale-105">
                <span className="text-amber-400 font-bold">50+</span>
                <span className="text-slate-400 mr-2">مفتش معتمد</span>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-700 hover:border-amber-500/50 transition-all hover:scale-105">
                <span className="text-amber-400 font-bold">99.5%</span>
                <span className="text-slate-400 mr-2">معدل الدقة</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#quote"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-600 to-yellow-500 text-slate-950 rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-amber-500/30 transition-all hover:scale-105 animate-gradient bg-[length:200%_200%]"
              >
                <Zap className="w-5 h-5" />
                اطلب عرض سعر
              </Link>
              <Link 
                href="/"
                className="inline-flex items-center justify-center px-8 py-4 bg-slate-800 text-white border-2 border-slate-700 rounded-xl font-semibold hover:bg-slate-700 hover:border-slate-600 transition-all hover:scale-105"
              >
                العودة للرئيسية
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-r from-slate-900/50 to-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">15,000+</h3>
              <p className="text-slate-400">شحنة تم فحصها</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">500+</h3>
              <p className="text-slate-400">عميل راضٍ</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">24 ساعة</h3>
              <p className="text-slate-400">وقت الاستجابة</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">98%</h3>
              <p className="text-slate-400">معدل الرضا</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-24 section-logistics">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-4 text-center">
              مراقبة الجودة الشاملة
            </h2>
            <p className="text-xl text-slate-400 mb-12 text-center max-w-3xl mx-auto">
              من ما قبل الإنتاج إلى التسليم النهائي، نضمن أن منتجاتك تلبي أعلى معايير الجودة
            </p>

            {/* Inspection Images Gallery - Enhanced */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <div className="relative h-72 rounded-2xl overflow-hidden group cursor-pointer">
                <Image 
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80" 
                  alt="فحص المنتجات" 
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-4 right-4 left-4">
                  <p className="text-white font-bold text-lg mb-1">فحص المنتجات</p>
                  <p className="text-slate-300 text-sm">فحص دقيق لكل منتج</p>
                </div>
                <div className="absolute top-4 right-4 bg-amber-500/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-amber-400 text-xs font-medium">AQL Level II</span>
                </div>
              </div>
              <div className="relative h-72 rounded-2xl overflow-hidden group cursor-pointer">
                <Image 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80" 
                  alt="تدقيق المصانع" 
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-4 right-4 left-4">
                  <p className="text-white font-bold text-lg mb-1">تدقيق المصانع</p>
                  <p className="text-slate-300 text-sm">تقييم شامل للمصانع</p>
                </div>
                <div className="absolute top-4 right-4 bg-emerald-500/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-emerald-400 text-xs font-medium">ISO 9001</span>
                </div>
              </div>
              <div className="relative h-72 rounded-2xl overflow-hidden group cursor-pointer">
                <Image 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80" 
                  alt="تقارير الجودة" 
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-4 right-4 left-4">
                  <p className="text-white font-bold text-lg mb-1">فحص الجودة</p>
                  <p className="text-slate-300 text-sm">معايير دولية</p>
                </div>
                <div className="absolute top-4 right-4 bg-blue-500/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-blue-400 text-xs font-medium">CE / FDA</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-amber-500/50 hover:bg-slate-800 transition-all group hover:scale-105 duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
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

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 hover:bg-slate-800 transition-all group hover:scale-105 duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
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

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-purple-500/50 hover:bg-slate-800 transition-all group hover:scale-105 duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
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

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-orange-500/50 hover:bg-slate-800 transition-all group hover:scale-105 duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
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

            {/* Why Choose Us Section */}
            <div className="bg-gradient-to-r from-slate-800/30 to-slate-900/30 rounded-3xl p-12 mb-16 border border-slate-700">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">لماذا تختار خدمات فحص الجودة لدينا؟</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center group">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">مفتشون معتمدون</h3>
                  <p className="text-slate-400">فريق من المفتشين المعتمدين دولياً بخبرة واسعة</p>
                </div>
                <div className="text-center group">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <AlertTriangle className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">كشف المشاكل مبكراً</h3>
                  <p className="text-slate-400">نكتشف المشاكل قبل الشحن لتوفير الوقت والتكلفة</p>
                </div>
                <div className="text-center group">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <FileCheck className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">تقارير مفصلة</h3>
                  <p className="text-slate-400">تقارير شاملة مع صور وفيديوهات لكل فحص</p>
                </div>
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
                className="inline-flex items-center gap-2 px-12 py-5 bg-gradient-to-r from-emerald-600 to-teal-500 text-white rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-emerald-500/30 transition-all hover:scale-105 animate-gradient bg-[length:200%_200%]"
              >
                <Zap className="w-5 h-5" />
                اطلب عرض سعر
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
