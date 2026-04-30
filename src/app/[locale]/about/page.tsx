"use client";

import Link from "next/link";
import { Target, Eye, Heart, Zap, CheckCircle2, Award, Users, Globe } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero Section - Dark Theme */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1920&q=80')" }} />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-indigo-950/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,_rgba(99,102,241,0.15),transparent_50%)]" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-medium mb-6">
              <Globe className="w-4 h-4" />
              من نحن / About Us
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              عن دينورا
              <span className="block mt-2 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                شريكك الموثوق
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
              شريكك الموثوق لتجارة الصين، يخدم أسواق الشرق الأوسط بحلول شاملة من البداية للنهاية
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="bg-slate-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-700">
                <span className="text-indigo-400 font-bold">10+</span>
                <span className="text-slate-400 mr-2">سنوات خبرة</span>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-700">
                <span className="text-indigo-400 font-bold">5000+</span>
                <span className="text-slate-400 mr-2">عميل سعيد</span>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-700">
                <span className="text-indigo-400 font-bold">50+</span>
                <span className="text-slate-400 mr-2">دولة</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#quote"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-500 text-white rounded-full font-semibold text-lg hover:shadow-xl transition-all"
              >
                تواصل معنا
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-4 text-center">
              قصتنا
            </h2>
            <p className="text-xl text-slate-400 mb-12 text-center max-w-3xl mx-auto">
              سد الفجوة بين المصنعين الصينيين والشركات في الشرق الأوسط
            </p>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-indigo-500/50 hover:bg-slate-800 transition-all group">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">مهمتنا</h3>
                <p className="text-slate-400 mb-4">
                  جعل تجارة الصين متاحة وشفافة وفعالة للشركات من جميع الأحجام. نؤمن ببناء شراكات طويلة الأمد بناءً على الثقة والجودة والنجاح المتبادل.
                </p>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-400" /> تسعير شفاف</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-400" /> ضمان الجودة</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-400" /> التركيز على نجاح العميل</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-indigo-400" /> شراكات طويلة الأمد</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-purple-500/50 hover:bg-slate-800 transition-all group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">رؤيتنا</h3>
                <p className="text-slate-400 mb-4">
                  أن نكون المزود الرائد لحلول تجارة الصين في الشرق الأوسط، معروفون بالتميز والابتكار والالتزام الراسخ بنجاح العملاء.
                </p>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-purple-400" /> قيادة السوق</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-purple-400" /> مدفوع بالابتكار</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-purple-400" /> التميز في الخدمة</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-purple-400" /> وصول عالمي</li>
                </ul>
              </div>
            </div>

            {/* Values */}
            <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 rounded-3xl p-12 border border-slate-700 mb-16">
              <h3 className="text-3xl font-bold mb-8 text-center text-white">قيمنا الأساسية</h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { icon: Heart, title: "الثقة", desc: "بناء علاقات دائمة", color: "from-red-500 to-pink-500" },
                  { icon: Award, title: "الجودة", desc: "التميز في كل شيء", color: "from-amber-500 to-orange-500" },
                  { icon: Globe, title: "العالمية", desc: "حلول عالمية", color: "from-blue-500 to-cyan-500" },
                  { icon: Zap, title: "الكفاءة", desc: "خدمة سريعة وموثوقة", color: "from-yellow-500 to-amber-500" }
                ].map((value, index) => (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-slate-700 hover:border-indigo-500/50 hover:bg-slate-800 transition-all">
                    <div className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <value.icon className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="font-bold text-lg mb-2 text-white">{value.title}</h4>
                    <p className="text-sm text-slate-400">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-4">كن شريكاً لنا</h3>
              <p className="text-xl text-slate-400 mb-8">
                جرب الفرق في دينورا في حلول تجارة الصين
              </p>
              <Link 
                href="/#quote"
                className="inline-flex items-center gap-2 px-12 py-5 bg-gradient-to-r from-indigo-600 to-purple-500 text-white rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-indigo-500/30 transition-all"
              >
                تواصل معنا
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
