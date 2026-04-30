"use client";

import Link from "next/link";
import { Ship, ArrowRight, Anchor, Plane, Truck, Train, Globe, Clock } from 'lucide-react';

export default function ShippingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero Section - Dark Theme */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1920&q=80')" }} />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-blue-950/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,_rgba(59,130,246,0.15),transparent_50%)]" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Ship className="w-4 h-4" />
              الشحن / Shipping
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              حلول الشحن
              <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
                العالمية
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
              شحن جوي وبحري وبري إلى أكثر من 50 دولة مع تتبع مباشر وتأمين شامل
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="bg-slate-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-700">
                <span className="text-cyan-400 font-bold">50+</span>
                <span className="text-slate-400 mr-2">دولة</span>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-700">
                <span className="text-cyan-400 font-bold">4</span>
                <span className="text-slate-400 mr-2">طرق شحن</span>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-700">
                <span className="text-cyan-400 font-bold">24/7</span>
                <span className="text-slate-400 mr-2">تتبع مباشر</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#quote"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-500 text-white rounded-full font-semibold text-lg hover:shadow-xl transition-all"
              >
                احسب تكلفة الشحن
                <ArrowRight className="w-5 h-5" />
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

      {/* Shipping Methods */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">طرق الشحن</h2>
            <p className="text-xl text-slate-400">اختر الطريقة المناسبة لاحتياجاتك</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Plane, title: "الشحن الجوي", time: "3-7 أيام", desc: "أسرع طريقة للشحنات العاجلة", color: "from-sky-500 to-blue-500", border: "sky" },
              { icon: Ship, title: "الشحن البحري", time: "20-45 يوم", desc: "الأكثر اقتصاداً للكميات الكبيرة", color: "from-blue-500 to-indigo-500", border: "blue" },
              { icon: Train, title: "الشحن بالقطار", time: "15-20 يوم", desc: "توازن بين السرعة والتكلفة", color: "from-emerald-500 to-teal-500", border: "emerald" },
              { icon: Truck, title: "الشحن البري", time: "5-15 يوم", desc: "للوجهات الإقليمية", color: "from-amber-500 to-orange-500", border: "amber" },
            ].map((method, i) => (
              <div key={i} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-${method.border}-500/50 hover:bg-slate-800 transition-all group">
                <div className={`w-14 h-14 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <method.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                <div className="text-cyan-400 font-semibold mb-2">{method.time}</div>
                <p className="text-slate-400 text-sm">{method.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
