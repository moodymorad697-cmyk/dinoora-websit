"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Ship, ArrowRight, Anchor, Plane, Truck, Train, Globe, Clock, CheckCircle2, TrendingUp, Zap, Shield, Award } from 'lucide-react';

export default function ShippingPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero Section - Enhanced with Visuals */}
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
              <Ship className="w-4 h-4" />
              الشحن / Shipping
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              حلول الشحن
              <span className="block mt-2 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                العالمية
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
              شحن جوي وبحري وبري إلى أكثر من 50 دولة مع تتبع مباشر وتأمين شامل
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="bg-slate-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-700 hover:border-amber-500/50 transition-all hover:scale-105">
                <span className="text-amber-400 font-bold">50+</span>
                <span className="text-slate-400 mr-2">دولة</span>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-700 hover:border-amber-500/50 transition-all hover:scale-105">
                <span className="text-amber-400 font-bold">4</span>
                <span className="text-slate-400 mr-2">طرق شحن</span>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-700 hover:border-amber-500/50 transition-all hover:scale-105">
                <span className="text-amber-400 font-bold">24/7</span>
                <span className="text-slate-400 mr-2">تتبع مباشر</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#quote"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-600 to-yellow-500 text-slate-950 rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-amber-500/30 transition-all hover:scale-105 animate-gradient bg-[length:200%_200%]"
              >
                <Zap className="w-5 h-5" />
                احسب تكلفة الشحن
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
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">50+</h3>
              <p className="text-slate-400">دولة</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">10,000+</h3>
              <p className="text-slate-400">شحنة</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">Real-time</h3>
              <p className="text-slate-400">تتبع مباشر</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">99%</h3>
              <p className="text-slate-400">معدل التسليم</p>
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Methods */}
      <section className="py-24 section-logistics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">طرق الشحن</h2>
            <p className="text-xl text-slate-400">اختر الطريقة المناسبة لاحتياجاتك</p>
          </div>

          {/* Shipping Images Gallery - Enhanced */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="relative h-72 rounded-2xl overflow-hidden group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80" 
                alt="سفينة حاويات" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-4 right-4 left-4">
                <p className="text-white font-bold text-lg mb-1">سفينة حاويات</p>
                <p className="text-slate-300 text-sm">شحن بحري اقتصادي</p>
              </div>
              <div className="absolute top-4 right-4 bg-blue-500/20 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-blue-400 text-xs font-medium">Ocean</span>
              </div>
            </div>
            <div className="relative h-72 rounded-2xl overflow-hidden group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80" 
                alt="طائرة شحن" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-4 right-4 left-4">
                <p className="text-white font-bold text-lg mb-1">طائرة شحن</p>
                <p className="text-slate-300 text-sm">شحن جوي سريع</p>
              </div>
              <div className="absolute top-4 right-4 bg-sky-500/20 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-sky-400 text-xs font-medium">Air</span>
              </div>
            </div>
            <div className="relative h-72 rounded-2xl overflow-hidden group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80" 
                alt="ميناء الشحن" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-4 right-4 left-4">
                <p className="text-white font-bold text-lg mb-1">ميناء الشحن</p>
                <p className="text-slate-300 text-sm">موانئ عالمية</p>
              </div>
              <div className="absolute top-4 right-4 bg-emerald-500/20 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-emerald-400 text-xs font-medium">Global</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Plane, title: "الشحن الجوي", time: "3-7 أيام", desc: "أسرع طريقة للشحنات العاجلة", color: "from-sky-500 to-blue-500", border: "sky" },
              { icon: Ship, title: "الشحن البحري", time: "20-45 يوم", desc: "الأكثر اقتصاداً للكميات الكبيرة", color: "from-blue-500 to-indigo-500", border: "blue" },
              { icon: Train, title: "الشحن بالقطار", time: "15-20 يوم", desc: "توازن بين السرعة والتكلفة", color: "from-emerald-500 to-teal-500", border: "emerald" },
              { icon: Truck, title: "الشحن البري", time: "5-15 يوم", desc: "للوجهات الإقليمية", color: "from-amber-500 to-orange-500", border: "amber" },
            ].map((method, i) => (
              <div key={i} className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-${method.border}-500/50 hover:bg-slate-800 transition-all group hover:scale-105 duration-300`}>
                <div className={`w-14 h-14 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform`}>
                  <method.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                <div className="text-cyan-400 font-semibold mb-2">{method.time}</div>
                <p className="text-slate-400 text-sm">{method.desc}</p>
              </div>
            ))}
          </div>

          {/* Why Choose Us Section */}
          <div className="bg-gradient-to-r from-slate-800/30 to-slate-900/30 rounded-3xl p-12 mb-16 border border-slate-700">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">لماذا تختار خدمات الشحن لدينا؟</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center group">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">تغطية عالمية</h3>
                <p className="text-slate-400">50+ دولة</p>
              </div>
              <div className="text-center group">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">تأمين شامل</h3>
                <p className="text-slate-400">حماية كاملة للبضائع</p>
              </div>
              <div className="text-center group">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">تتبع مباشر</h3>
                <p className="text-slate-400">رؤية لحظية للشحنات</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">ابدأ شحن بضائعك الآن</h3>
            <p className="text-xl text-slate-400 mb-8">
              احصل على أسعار تنافسية وخدمة موثوقة
            </p>
            <Link 
              href="/#quote"
              className="inline-flex items-center gap-2 px-12 py-5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all hover:scale-105 animate-gradient bg-[length:200%_200%]"
            >
              <Zap className="w-5 h-5" />
              احسب تكلفة الشحن
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
