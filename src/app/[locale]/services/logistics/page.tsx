"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Truck, Package, Award, Globe, TrendingUp, Users, Clock, Zap, CheckCircle2, Cpu, Warehouse, ArrowRight, Link2, BarChart3 } from 'lucide-react';

export default function LogisticsPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero Section - Dark Theme with Enhanced Visuals */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1920&q=80')" }} />
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
              <Link2 className="w-4 h-4" />
              اللوجستيات / Logistics
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              حلول اللوجستيات
              <span className="block mt-2 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                الشاملة
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
              إدارة سلسلة التوريد من البداية إلى النهاية وخدمات التنفيذ. نقدم حلول لوجستية مدعومة بالتكنولوجيا.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="bg-slate-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-700 hover:border-amber-500/50 transition-all hover:scale-105">
                <span className="text-amber-400 font-bold">100%</span>
                <span className="text-slate-400 mr-2">الرؤية</span>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-700 hover:border-amber-500/50 transition-all hover:scale-105">
                <span className="text-amber-400 font-bold">AI</span>
                <span className="text-slate-400 mr-2">مدعوم</span>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-700 hover:border-amber-500/50 transition-all hover:scale-105">
                <span className="text-amber-400 font-bold">24/7</span>
                <span className="text-slate-400 mr-2">مراقبة</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="../../quote"
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
              <h3 className="text-4xl font-bold text-white mb-2">10,000+</h3>
              <p className="text-slate-400">شحنة لوجستية</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">30+</h3>
              <p className="text-slate-400">دولة</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">Real-time</h3>
              <p className="text-slate-400">تتبع لحظي</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">40%</h3>
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
              إدارة سلسلة التوريد الكاملة
            </h2>
            <p className="text-xl text-slate-400 mb-12 text-center max-w-3xl mx-auto">
              حلول لوجستية مدعومة بالتكنولوجيا للشركات الحديثة
            </p>

            {/* Logistics Images Gallery - Enhanced */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <div className="relative h-72 rounded-2xl overflow-hidden group cursor-pointer">
                <Image 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80" 
                  alt="سلسلة التوريد" 
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-4 right-4 left-4">
                  <p className="text-white font-bold text-lg mb-1">سلسلة التوريد</p>
                  <p className="text-slate-300 text-sm">تتبع شامل من البداية للنهاية</p>
                </div>
                <div className="absolute top-4 right-4 bg-amber-500/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-amber-400 text-xs font-medium">Real-time</span>
                </div>
              </div>
              <div className="relative h-72 rounded-2xl overflow-hidden group cursor-pointer">
                <Image 
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80" 
                  alt="مستودع لوجستي" 
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-4 right-4 left-4">
                  <p className="text-white font-bold text-lg mb-1">مستودع لوجستي</p>
                  <p className="text-slate-300 text-sm">إدارة ذكية للمخزون</p>
                </div>
                <div className="absolute top-4 right-4 bg-blue-500/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-blue-400 text-xs font-medium">Smart</span>
                </div>
              </div>
              <div className="relative h-72 rounded-2xl overflow-hidden group cursor-pointer">
                <Image 
                  src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80" 
                  alt="شحن عالمي" 
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-4 right-4 left-4">
                  <p className="text-white font-bold text-lg mb-1">شحن لوجستي</p>
                  <p className="text-slate-300 text-sm">شحن دولي متكامل</p>
                </div>
                <div className="absolute top-4 right-4 bg-emerald-500/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-emerald-400 text-xs font-medium">Global</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-amber-500/50 hover:bg-slate-800 transition-all group hover:scale-105 duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <Link2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">إدارة سلسلة التوريد</h3>
                <p className="text-slate-400 mb-4">
                  رؤية وإدارة سلسلة التوريد من البداية إلى النهاية من المورد إلى العميل.
                </p>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-amber-400" /> التتبع الفوري</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-amber-400" /> تحسين المخزون</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-amber-400" /> التنبؤ بالطلب</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-amber-400" /> إدارة المخاطر</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 hover:bg-slate-800 transition-all group hover:scale-105 duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <Package className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">خدمات التنفيذ</h3>
                <p className="text-slate-400 mb-4">
                  تنفيذ الطلبات الكامل بما في ذلك الاختيار والتعبئة والشحن.
                </p>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-blue-400" /> معالجة الطلبات</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-blue-400" /> الاختيار والتعبئة</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-blue-400" /> إدارة المرتجعات</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-blue-400" /> مراقبة الجودة</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-purple-500/50 hover:bg-slate-800 transition-all group hover:scale-105 duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">التحليلات والتقارير</h3>
                <p className="text-slate-400 mb-4">
                  تحليلات متقدمة وتقارير لاتخاذ القرارات المبنية على البيانات.
                </p>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-purple-400" /> مقاييس الأداء</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-purple-400" /> تقارير مخصصة</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-purple-400" /> تحليل الاتجاهات</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-purple-400" /> رؤى تنبؤية</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-orange-500/50 hover:bg-slate-800 transition-all group hover:scale-105 duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">التكامل التكنولوجي</h3>
                <p className="text-slate-400 mb-4">
                  تكامل سلس مع أنظمتك ومنصاتك الحالية.
                </p>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-400" /> تكامل API</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-400" /> أنظمة ERP</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-400" /> منصات التجارة الإلكترونية</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-orange-400" /> حلول مخصصة</li>
                </ul>
              </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="bg-gradient-to-r from-slate-800/30 to-slate-900/30 rounded-3xl p-12 mb-16 border border-slate-700">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">لماذا تختار حلول اللوجستيات لدينا؟</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center group">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Truck className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">تتبع ذكي</h3>
                  <p className="text-slate-400">تتبع لحظي لكل شحنة</p>
                </div>
                <div className="text-center group">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Warehouse className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">مستودعات متعددة</h3>
                  <p className="text-slate-400">شبكة عالمية من المستودعات</p>
                </div>
                <div className="text-center group">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">فريق متخصص</h3>
                  <p className="text-slate-400">خبراء لوجستيين معتمدون</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-4">حسّن سلسلة التوريد الخاصة بك</h3>
              <p className="text-xl text-slate-400 mb-8">
                احصل على حلول لوجستية مدعومة بالتكنولوجيا لعملك
              </p>
              <Link 
                href="../../quote"
                className="inline-flex items-center gap-2 px-12 py-5 bg-gradient-to-r from-blue-600 to-purple-500 text-white rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all hover:scale-105 animate-gradient bg-[length:200%_200%]"
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
