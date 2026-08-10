"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Mail, Phone, MapPin, MessageCircle, ArrowLeft, Sparkles, Send } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'ar';

  return (
    <footer className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)' }}>
      {/* BG Accent */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/[0.06] rounded-full blur-[140px] animate-float" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/[0.05] rounded-full blur-[120px] animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute top-[30%] left-[20%] w-[300px] h-[300px] bg-pink-600/[0.04] rounded-full blur-[100px] animate-float" style={{ animationDelay: '5s' }} />

      {/* CTA Banner */}
      <div className="relative border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-indigo-950/60 via-purple-900/50 to-indigo-950/60 rounded-2xl p-8 border border-indigo-500/20 backdrop-blur-sm">
            <div>
              <h3 className="text-xl font-extrabold text-white mb-1">جاهز لبدء مشروعك مع الصين؟</h3>
              <p className="text-sm text-slate-400">احصل على استشارة مجانية وعرض سعر خلال 24 ساعة — بدون أي التزام</p>
            </div>
            <div className="flex gap-3">
              <a href={`https://wa.me/8615587237864`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-green-500/30 transition-all hover:-translate-y-0.5">
                <MessageCircle className="w-4 h-4" />
                واتساب مباشر
              </a>
              <Link href={`/${locale}#quote`} className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-indigo-500/30 transition-all hover:-translate-y-0.5 animate-gradient-shift bg-[length:200%_200%]">
                <Send className="w-4 h-4" />
                طلب عرض سعر
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid - Compact */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative h-28 w-auto">
                <Image
                  src="/logo-dinoora.png"
                  alt="دينورا"
                  width={112}
                  height={112}
                  className="brightness-110 drop-shadow-xl shadow-indigo-500/25"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/35 to-purple-500/35 rounded-full blur-2xl opacity-60" />
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              شريكك الاستراتيجي للتجارة الدولية — من المصنع الصيني حتى مستودعك.
            </p>
          </div>

          {/* الخدمات */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-4">الخدمات</h4>
            <ul className="space-y-2.5">
              {[
                { label: "توريد المنتجات", href: "/services/sourcing" },
                { label: "فحص الجودة", href: "/services/inspection" },
                { label: "التخزين والتجميع", href: "/services/warehousing" },
                { label: "الشحن الدولي", href: "/services/shipping" },
                { label: "التخليص الجمركي", href: "/services/customs" },
                { label: "توصيل DDP", href: "/services/logistics" },
              ].map((item, i) => (
                <li key={i}>
                  <Link href={`/${locale}${item.href}`} className="text-slate-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1.5 group">
                    <ArrowLeft className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-indigo-400" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* روابط */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">الشركة</h4>
            <ul className="space-y-2.5">
              {[
                { label: "الرئيسية", href: "/" },
                { label: "لماذا نحن", href: "/#features" },
                { label: "العمليات", href: "/#operations" },
                { label: "المدونة", href: "/blog" },
                { label: "سياسة الخصوصية", href: "/privacy" },
                { label: "الشروط والأحكام", href: "/terms" },
              ].map((item, i) => (
                <li key={i}>
                  <Link href={`/${locale}${item.href}`} className="text-slate-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1.5 group">
                    <ArrowLeft className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-amber-400" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* التواصل */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">تواصل معنا</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://wa.me/8615587237864" className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors group">
                  <Phone className="w-4 h-4 text-green-400" />
                  <span className="text-sm">+86 155 8723 7864</span>
                </a>
              </li>
              <li>
                <a href="mailto:maomoody524@gmail.com" className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors group">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">maomoody524@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="https://maps.google.com/?q=Yiwu+City+Zhejiang+Province+China" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2.5 text-slate-400 hover:text-white transition-colors group">
                  <MapPin className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">إيوو، تشجيانغ، الصين</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} دينورا للتجارة الدولية. جميع الحقوق محفوظة.
          </p>
          <p className="text-slate-700 text-xs">
            مقر الشركة: إيوو، مقاطعة تشجيانغ، الصين
          </p>
        </div>
      </div>
    </footer>
  );
}
