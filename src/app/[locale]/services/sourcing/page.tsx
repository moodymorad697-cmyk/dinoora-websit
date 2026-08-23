"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Factory, Award, Globe, TrendingUp, Users, Clock, Zap, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

export default function SourcingPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero Section - Enhanced with Visuals */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1920&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0C2340]/95 via-[#1E3A5F]/90 to-[#0C2340]/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,_rgba(212,175,55,0.15),transparent_50%)]" />
          {/* Animated particles */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
            <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-amber-500 rounded-full animate-ping" style={{ animationDuration: '4s' }} />
            <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-amber-300 rounded-full animate-ping" style={{ animationDuration: '2.5s' }} />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 backdrop-blur-sm rounded-full border border-amber-500/20 mb-6 animate-pulse">
              <Search className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium text-amber-400">خدمة التوريد</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              التوريد من الصين
              <span className="block mt-2 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                بخبرة وموثوقية
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
              نجد لك أفضل الموردين والمنتجات في الصين مع التحقق من الجودة والتفاوض على الأسعار
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="bg-slate-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-700 hover:border-amber-500/50 transition-all hover:scale-105">
                <span className="text-amber-400 font-bold">500+</span>
                <span className="text-slate-400 mr-2">مصنع</span>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-700 hover:border-amber-500/50 transition-all hover:scale-105">
                <span className="text-amber-400 font-bold">30+</span>
                <span className="text-slate-400 mr-2">مقاطعة</span>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-700 hover:border-amber-500/50 transition-all hover:scale-105">
                <span className="text-amber-400 font-bold">48 ساعة</span>
                <span className="text-slate-400 mr-2">توصيل</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="../../quote"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-600 to-yellow-500 text-slate-950 rounded-xl font-semibold hover:shadow-xl hover:shadow-amber-500/30 transition-all hover:scale-105 animate-gradient bg-[length:200%_200%]"
              >
                <Zap className="w-5 h-5" />
                اطلب عرض سعر
                <ArrowRight className="w-5 h-5" />
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
              <h3 className="text-4xl font-bold text-white mb-2">25,000+</h3>
              <p className="text-slate-400">منتج تم توريده</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Factory className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">500+</h3>
              <p className="text-slate-400">مصنع موثق</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">48 ساعة</h3>
              <p className="text-slate-400">وقت الاستجابة</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">35%</h3>
              <p className="text-slate-400">توفير التكاليف</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-24 section-logistics">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-4 text-center">
              حلول التوريد الشاملة
            </h2>
            <p className="text-xl text-slate-400 mb-12 text-center max-w-3xl mx-auto">
              من البحث عن المورد المناسب إلى التفاوض على أفضل الأسعار، نتعامل مع كل جوانب توريد المنتجات
            </p>

            {/* Sourcing Images Gallery - Enhanced */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <div className="relative h-72 rounded-2xl overflow-hidden group cursor-pointer">
                <Image 
                  src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80" 
                  alt="مصنع صيني" 
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-4 right-4 left-4">
                  <p className="text-white font-bold text-lg mb-1">مصنع صيني</p>
                  <p className="text-slate-300 text-sm">مصانع موثقة ومعتمدة</p>
                </div>
                <div className="absolute top-4 right-4 bg-amber-500/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-amber-400 text-xs font-medium">Verified</span>
                </div>
              </div>
              <div className="relative h-72 rounded-2xl overflow-hidden group cursor-pointer">
                <Image 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80" 
                  alt="فحص المنتجات" 
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-4 right-4 left-4">
                  <p className="text-white font-bold text-lg mb-1">فحص المنتجات</p>
                  <p className="text-slate-300 text-sm">فحص شامل للجودة</p>
                </div>
                <div className="absolute top-4 right-4 bg-emerald-500/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-emerald-400 text-xs font-medium">Quality</span>
                </div>
              </div>
              <div className="relative h-72 rounded-2xl overflow-hidden group cursor-pointer">
                <Image 
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80" 
                  alt="توريد عالمي" 
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-4 right-4 left-4">
                  <p className="text-white font-bold text-lg mb-1">شحن البضائع</p>
                  <p className="text-slate-300 text-sm">شحن دولي سريع</p>
                </div>
                <div className="absolute top-4 right-4 bg-blue-500/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-blue-400 text-xs font-medium">Global</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-amber-500/50 hover:bg-slate-800 transition-all group hover:scale-105 duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">تحديد الموردين</h3>
                <p className="text-slate-400 mb-4">
                  نحدد ونتحقق من الموردين الموثوقين في جميع أنحاء الصين، لضمان عملك مع شركاء يحققون متطلبات الجودة والكمية.
                </p>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-amber-400" /> قاعدة بيانات شاملة للموردين</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-amber-400" /> التحقق من المصانع والتدقيق</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-amber-400" /> تقييم القدرة الإنتاجية</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-blue-400" /> التحقق من شهادات الجودة</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-green-500/50 hover:bg-slate-800 transition-all group hover:scale-105 duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">التفاوض على الأسعار</h3>
                <p className="text-slate-400 mb-4">
                  يضمن مفاوضونا الخبراء أفضل الأسعار لك مع الحفاظ على معايير الجودة. نستخدم حجم علاقاتنا للحصول على أسعار تنافسية.
                </p>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-400" /> فريق تفاوض محترف</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-400" /> خصومات تعتمد على الحجم</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-400" /> تحليل أسعار السوق</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-400" /> استراتيجيات تحسين التكاليف</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-purple-500/50 hover:bg-slate-800 transition-all group hover:scale-105 duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <ShieldCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">إدارة العينات</h3>
                <p className="text-slate-400 mb-4">
                  نتعامل مع شراء العينات وفحصها وتسليمها لضمان أن المنتجات تلبي مواصفاتك قبل بدء الإنتاج الضخم.
                </p>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-purple-400" /> شراء وتسليم العينات</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-purple-400" /> التحقق من الجودة</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-purple-400" /> مطابقة المواصفات</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-purple-400" /> إدارة عملية الموافقة</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-orange-500/50 hover:bg-slate-800 transition-all group hover:scale-105 duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">إدارة العلاقات</h3>
                <p className="text-slate-400 mb-4">
                  نحافظ على علاقات قوية مع الموردين لضمان جودة متسلمة، تسليم موثوق، ومعالجة أولوية لطلباتك.
                </p>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-400" /> شراكات طويلة الأمد</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-400" /> مواقع إنتاجية ذات أولوية</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-400" /> تواصل منتظم</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-400" /> حل النزاعات</li>
                </ul>
              </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="bg-gradient-to-r from-slate-800/30 to-slate-900/30 rounded-3xl p-12 mb-16 border border-slate-700">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">لماذا تختار خدمات التوريد لدينا؟</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center group">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Factory className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">مصانع موثقة</h3>
                  <p className="text-slate-400">500+ مصنع تم تدقيقهم</p>
                </div>
                <div className="text-center group">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">جودة مضمونة</h3>
                  <p className="text-slate-400">فحص شامل لكل منتج</p>
                </div>
                <div className="text-center group">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Globe className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">تغطية عالمية</h3>
                  <p className="text-slate-400">30 مقاطعة صينية</p>
                </div>
              </div>
            </div>

            {/* Industries We Serve */}
            <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-3xl p-12 border border-slate-700 mb-16">
              <h3 className="text-3xl font-bold mb-8 text-center text-white">الصناعات التي نخدمها</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  "الإلكترونيات", "المنسوجات", "الآلات", "المواد الكيميائية",
                  "الأغذية والمشروبات", "السيارات", "البناء", "الطبية",
                  "السلع الاستهلاكية", "الصناعية", "التكنولوجيا", "الأزياء"
                ].map((industry, index) => (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 text-center border border-slate-700 hover:border-blue-500/50 hover:bg-slate-800 transition-all">
                    <div className="font-semibold text-white">{industry}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-4">جاهز لتوريد منتجاتك؟</h3>
              <p className="text-xl text-slate-400 mb-8">
                ابدأ مع استشارة مجانية ودعنا نجد الموردين المثاليين لعملك
              </p>
              <Link 
                href="../../quote"
                className="inline-flex items-center gap-2 px-12 py-5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all hover:scale-105 animate-gradient bg-[length:200%_200%]"
              >
                <Zap className="w-5 h-5" />
                اطلب عرض سعر مجاني
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
