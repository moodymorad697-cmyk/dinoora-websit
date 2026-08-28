"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { Mail, Phone, MapPin, MessageCircle, ArrowLeft, Sparkles, Send } from "lucide-react";

// Social Media Icons
const FacebookIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export default function Footer() {
  const t = useTranslations();
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'ar';
  const serviceLabel = (key: string, fallback: string) => locale === 'zh' ? t(`services.${key}.title`) : t(`footer.${key}`, { defaultValue: fallback });

  return (
    <footer className="relative overflow-hidden border-t border-white/10" style={{ background: 'linear-gradient(180deg, #102a43 0%, #07111f 100%)' }}>
      {/* BG Accent */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/[0.06] rounded-full blur-[140px] animate-float" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/[0.05] rounded-full blur-[120px] animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute top-[30%] left-[20%] w-[300px] h-[300px] bg-pink-600/[0.04] rounded-full blur-[100px] animate-float" style={{ animationDelay: '5s' }} />

      {/* CTA Banner */}
      <div className="relative border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-indigo-950/60 via-purple-900/50 to-indigo-950/60 rounded-2xl p-8 border border-indigo-500/20 backdrop-blur-sm">
            <div>
              <h3 className="text-xl font-extrabold text-white mb-1">{t('cta.title')}</h3>
              <p className="text-sm text-slate-400">{t('cta.subtitle', { defaultValue: locale === 'zh' ? '告诉我们您的需求，我们将处理其余事项。' : 'Tell us what you need. We will handle the rest.' })}</p>
            </div>
            <div className="flex gap-3">
              <a href={`https://wa.me/8615587237864`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-green-500/30 transition-all hover:-translate-y-0.5">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <Link href={`/${locale}/quote`} className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-indigo-500/30 transition-all hover:-translate-y-0.5 animate-gradient-shift bg-[length:200%_200%]">
                <Send className="w-4 h-4" />
                {t('nav.getQuote')}
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
              <div className="relative h-16 w-16">
                <Image
                  src="/logo-dinoora.png"
                  alt="دينورا"
                  width={64}
                  height={64}
                  className="h-16 w-16 object-contain brightness-110 drop-shadow-xl"
                />
                <div className="absolute inset-2 rounded-full bg-cyan-300/10 blur-xl" />
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">{t('footer.tagline')}</p>
          </div>

          {/* الخدمات */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2.5">
              {[
                { label: serviceLabel('sourcing', 'Sourcing'), href: "/services/sourcing" },
                { label: serviceLabel('inspection', 'Inspection'), href: "/services/inspection" },
                { label: serviceLabel('warehousing', 'Warehousing'), href: "/services/warehousing" },
                { label: serviceLabel('shipping', 'Shipping'), href: "/services/shipping" },
                { label: locale === 'zh' ? t('services.customs.title') : t('services.customs', { defaultValue: 'Customs' }), href: "/services/customs" },
                { label: locale === 'zh' ? t('services.logistics.title') : t('services.logistics', { defaultValue: 'Logistics' }), href: "/services/logistics" },
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
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2.5">
              {[
                { label: t('footer.home', { defaultValue: locale === 'zh' ? '首页' : 'Home' }), href: "/" },
                { label: t('footer.about', { defaultValue: locale === 'zh' ? '关于我们' : 'About' }), href: "/about" },
                { label: t('nav.track'), href: "/track" },
                { label: t('nav.contact'), href: "/contact" },
                { label: t('footer.privacy'), href: "/privacy" },
                { label: t('footer.terms'), href: "/terms" },
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
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://wa.me/8619589468539" className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors group">
                  <Phone className="w-4 h-4 text-green-400" />
                  <span className="text-sm">+86 195 8946 8539</span>
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
            
            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              <a href="https://www.facebook.com/share/17mLtvZn95/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 hover:scale-110">
                <FacebookIcon />
              </a>
              <a href="https://instagram.com/dinoora_trade" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-slate-800 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 hover:scale-110">
                <InstagramIcon />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-slate-800 hover:bg-blue-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 hover:scale-110">
                <LinkedinIcon />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-slate-800 hover:bg-sky-500 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 hover:scale-110">
                <TwitterIcon />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-slate-800 hover:bg-red-600 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 hover:scale-110">
                <YoutubeIcon />
              </a>
            </div>
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
