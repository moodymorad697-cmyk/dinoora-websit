"use client";

import Link from "next/link";
import { Search, ArrowRight, CheckCircle2, Globe, ShieldCheck, TrendingUp, Users, Clock } from 'lucide-react';

export default function SourcingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1920&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-blue-950/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,_rgba(59,130,246,0.15),transparent_50%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 backdrop-blur-sm rounded-full border border-blue-500/20 mb-6">
            <Search className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-400">خدمة التوريد</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            التوريد من الصين
            <span className="block mt-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              بخبرة وموثوقية
            </span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            نجد لك أفضل الموردين والمنتجات في الصين مع التحقق من الجودة والتفاوض على الأسعار
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/#quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/30 transition-all"
            >
              اطلب عرض سعر
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
      </section>

      {/* Service Details */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-4 text-center">
              حلول التوريد الشاملة
            </h2>
            <p className="text-xl text-slate-400 mb-12 text-center max-w-3xl mx-auto">
              من البحث عن المورد المناسب إلى التفاوض على أفضل الأسعار، نتعامل مع كل جوانب توريد المنتجات
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 hover:bg-slate-800 transition-all group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">تحديد الموردين</h3>
                <p className="text-slate-400 mb-4">
                  نحدد ونتحقق من الموردين الموثوقين في جميع أنحاء الصين، لضمان عملك مع شركاء يحققون متطلبات الجودة والكمية.
                </p>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-blue-400" /> قاعدة بيانات شاملة للموردين</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-blue-400" /> التحقق من المصانع والتدقيق</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-blue-400" /> تقييم القدرة الإنتاجية</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-blue-400" /> التحقق من شهادات الجودة</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-green-500/50 hover:bg-slate-800 transition-all group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-purple-500/50 hover:bg-slate-800 transition-all group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-orange-500/50 hover:bg-slate-800 transition-all group">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
                href="/#quote"
                className="inline-flex items-center gap-2 px-12 py-5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all"
              >
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
