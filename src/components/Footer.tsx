"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Phone, MapPin, MessageCircle, ArrowLeft, Sparkles, Send } from "lucide-react";

const FacebookIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const TikTokIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
);

const TelegramIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

export default function Footer() {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'ar';

  return (
    <footer className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #060b18 0%, #020617 50%, #030712 100%)' }}>
      {/* BG Accent */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/[0.06] rounded-full blur-[140px] animate-morph-blob" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-violet-500/[0.05] rounded-full blur-[120px] animate-morph-blob" style={{ animationDelay: '3s' }} />
      <div className="absolute top-[30%] left-[20%] w-[300px] h-[300px] bg-cyan-500/[0.04] rounded-full blur-[100px] animate-morph-blob" style={{ animationDelay: '5s' }} />

      {/* CTA Banner */}
      <div className="relative border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-l from-blue-950/60 via-slate-900/50 to-violet-950/60 rounded-2xl p-8 border border-white/[0.08] backdrop-blur-sm animate-glow-pulse">
            <div>
              <h3 className="text-xl font-extrabold text-white mb-1">جاهز لبدء مشروعك مع الصين؟</h3>
              <p className="text-sm text-slate-400">احصل على استشارة مجانية وعرض سعر خلال 24 ساعة — بدون أي التزام</p>
            </div>
            <div className="flex gap-3">
              <a href={`https://wa.me/8615587237864`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-l from-green-600 to-emerald-500 text-white rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-green-500/30 transition-all hover:-translate-y-0.5">
                <MessageCircle className="w-4 h-4" />
                واتساب مباشر
              </a>
              <Link href={`/${locale}#quote`} className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-l from-blue-600 via-violet-500 to-cyan-500 text-white rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-blue-500/30 transition-all hover:-translate-y-0.5 animate-gradient bg-[length:200%_200%]">
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
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 animate-glow-pulse">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-extrabold text-white tracking-tight">دينورا</span>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed mb-5">
              شريكك الاستراتيجي للتجارة الدولية — من المصنع الصيني حتى مستودعك.
            </p>
            <div className="flex gap-2">
              {[
                { icon: FacebookIcon, href: "https://www.facebook.com/share/17mLtvZn95/?mibextid=wwXIfr", bg: "hover:bg-blue-600" },
                { icon: TikTokIcon, href: "https://www.tiktok.com/@kingmorad0?is_from_webapp=1&sender_device=pc", bg: "hover:bg-slate-600" },
                { icon: TelegramIcon, href: "https://t.me/DINOORACOMPANY", bg: "hover:bg-sky-500" },
                { icon: () => <MessageCircle className="w-4 h-4" />, href: "https://wa.me/8615587237864", bg: "hover:bg-green-600" },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className={`w-8 h-8 bg-white/[0.05] border border-white/[0.08] rounded-lg flex items-center justify-center text-slate-400 hover:text-white ${s.bg} hover:border-transparent transition-all duration-300 hover:scale-110 hover:shadow-lg`}>
                  <s.icon />
                </a>
              ))}
            </div>
          </div>

          {/* الخدمات */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-4">الخدمات</h4>
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
                    <ArrowLeft className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-blue-400" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* روابط */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-4">الشركة</h4>
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
                    <ArrowLeft className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-blue-400" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* التواصل */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-4">تواصل معنا</h4>
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
