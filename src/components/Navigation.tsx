"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from 'next-intl';
import { 
  Globe, Menu, X, Sparkles, ChevronDown, 
  Search, ShieldCheck, Warehouse, Ship, FileCheck, Package,
  BookOpen, ArrowRight, Phone
} from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const servicesRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations('nav');

  const locale = pathname.split('/')[1] || 'ar';
  const isAr = locale === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress(height > 0 ? (winScroll / height) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) setShowServices(false);
      if (langRef.current && !langRef.current.contains(e.target as Node)) setShowLangMenu(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const switchLocale = (newLocale: string) => {
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname);
    setShowLangMenu(false);
  };

  const serviceItems = [
    { icon: Search, label: isAr ? 'توريد المنتجات' : 'Product Sourcing', desc: isAr ? 'إيجاد أفضل الموردين' : 'Find verified suppliers', href: '/services/sourcing' },
    { icon: ShieldCheck, label: isAr ? 'فحص الجودة' : 'Quality Control', desc: isAr ? 'فحص دقيق قبل الشحن' : 'Rigorous inspections', href: '/services/inspection' },
    { icon: Warehouse, label: isAr ? 'التخزين' : 'Warehousing', desc: isAr ? 'تخزين آمن ومنظم' : 'Secure storage', href: '/services/warehousing' },
    { icon: Ship, label: isAr ? 'الشحن الدولي' : 'Global Shipping', desc: isAr ? 'بحري وجوي وبري' : 'Air, sea & land', href: '/services/shipping' },
    { icon: FileCheck, label: isAr ? 'التخليص الجمركي' : 'Customs Clearance', desc: isAr ? 'إجراءات سلسة' : 'Hassle-free docs', href: '/services/customs' },
    { icon: Package, label: isAr ? 'التوصيل للباب' : 'Door Delivery', desc: isAr ? 'DDP حتى بابك' : 'DDP to your door', href: '/services/logistics' },
  ];

  const navItems = [
    { label: isAr ? 'الرئيسية' : 'Home', href: '/' },
    { label: isAr ? 'لماذا نحن' : 'Why Us', href: '/#features' },
    { label: isAr ? 'العمليات' : 'Operations', href: '/#operations' },
    { label: isAr ? 'المدونة' : 'Blog', href: '/blog' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-slate-950/90 backdrop-blur-2xl border-b border-white/[0.06] shadow-2xl shadow-black/30' 
          : 'bg-gradient-to-b from-slate-950/80 to-transparent'
      }`}>
        {/* Scroll Progress Bar */}
        <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 transition-all duration-150" style={{ width: `${scrollProgress}%` }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[72px]">
            {/* Logo */}
            <Link href={`/${locale}`} className="flex items-center gap-3 group">
              <img
                src="/logo-dinoora.png"
                alt="DINOORA"
                className="h-12 w-auto group-hover:brightness-110 transition-all duration-300"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navItems.map((item, i) => (
                <Link
                  key={i}
                  href={`/${locale}${item.href}`}
                  className="relative px-4 py-2 rounded-lg font-medium text-[13px] text-slate-400 hover:text-white transition-all duration-200 group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full group-hover:w-4/5 transition-all duration-300" />
                </Link>
              ))}
              
              {/* Services Dropdown */}
              <div ref={servicesRef} className="relative">
                <button
                  onClick={() => { setShowServices(!showServices); setShowLangMenu(false); }}
                  className="flex items-center gap-1 px-4 py-2 rounded-lg font-medium text-[13px] text-slate-400 hover:text-white transition-all duration-200"
                >
                  {isAr ? 'الخدمات' : 'Services'}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${showServices ? 'rotate-180' : ''}`} />
                </button>
                
                {showServices && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[520px] bg-slate-900/95 backdrop-blur-2xl rounded-2xl shadow-2xl shadow-black/40 border border-white/[0.08] p-5 grid grid-cols-2 gap-2">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-900/95 border-l border-t border-white/[0.08] rotate-45" />
                    {serviceItems.map((svc, i) => (
                      <Link
                        key={i}
                        href={`/${locale}${svc.href}`}
                        onClick={() => setShowServices(false)}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/[0.04] transition-all group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                          <svc.icon className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">{svc.label}</div>
                          <div className="text-xs text-slate-500 mt-0.5">{svc.desc}</div>
                        </div>
                      </Link>
                    ))}
                    <div className="col-span-2 mt-2 pt-3 border-t border-white/[0.06]">
                      <Link href={`/${locale}/#services`} onClick={() => setShowServices(false)} className="flex items-center justify-center gap-2 text-sm text-blue-400 hover:text-blue-300 font-medium py-2">
                        {isAr ? 'عرض جميع الخدمات' : 'View All Services'}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Separator */}
              <div className="w-px h-5 bg-white/10 mx-2" />
              
              {/* Language Switcher */}
              <div ref={langRef} className="relative">
                <button
                  onClick={() => { setShowLangMenu(!showLangMenu); setShowServices(false); }}
                  className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5"
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase">{locale}</span>
                </button>
                
                {showLangMenu && (
                  <div className="absolute top-full right-0 mt-3 bg-slate-900/95 backdrop-blur-2xl rounded-xl shadow-2xl border border-white/[0.08] py-2 min-w-[150px]">
                    {[
                      { code: 'en', flag: '🇺🇸', name: 'English' },
                      { code: 'ar', flag: '🇸🇦', name: 'العربية' },
                      { code: 'zh', flag: '🇨🇳', name: '中文' },
                    ].map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => switchLocale(lang.code)}
                        className={`w-full text-left px-4 py-2.5 text-sm flex items-center gap-3 hover:bg-white/5 transition-colors ${
                          locale === lang.code ? 'text-blue-400 font-semibold bg-blue-500/[0.08]' : 'text-slate-300'
                        }`}
                      >
                        <span className="text-base">{lang.flag}</span>
                        {lang.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Phone */}
              <a href="tel:+8615587237864" className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors px-3 py-2 rounded-lg hover:bg-white/5">
                <Phone className="w-4 h-4" />
                <span className="text-xs font-medium hidden xl:inline">+86 155 8723 7864</span>
              </a>
              
              {/* CTA Button */}
              <Link 
                href={`/${locale}#quote`}
                className="ml-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5" />
                {t('getQuote')}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white/10 transition-colors"
            >
              <div className="relative w-5 h-4">
                <span className={`absolute left-0 w-5 h-[2px] bg-white rounded-full transition-all duration-300 ${isOpen ? 'top-[7px] rotate-45' : 'top-0'}`} />
                <span className={`absolute left-0 top-[7px] w-5 h-[2px] bg-white rounded-full transition-all duration-300 ${isOpen ? 'opacity-0 scale-0' : 'opacity-100'}`} />
                <span className={`absolute left-0 w-5 h-[2px] bg-white rounded-full transition-all duration-300 ${isOpen ? 'top-[7px] -rotate-45' : 'top-[14px]'}`} />
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[600px] opacity-100 pb-6' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className="pt-3 border-t border-white/[0.06]">
              <div className="flex flex-col gap-0.5">
                {navItems.map((item, i) => (
                  <Link
                    key={i}
                    href={`/${locale}${item.href}`}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between font-medium py-3 px-4 rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.04] transition-all"
                  >
                    {item.label}
                    <ArrowRight className="w-4 h-4 text-slate-600" />
                  </Link>
                ))}
                
                {/* Mobile Services */}
                <div className="px-4 pt-3 pb-1">
                  <div className="text-xs text-slate-600 uppercase tracking-wider font-semibold mb-2">{isAr ? 'الخدمات' : 'Services'}</div>
                  <div className="grid grid-cols-2 gap-2">
                    {serviceItems.slice(0, 4).map((svc, i) => (
                      <Link key={i} href={`/${locale}${svc.href}`} onClick={() => setIsOpen(false)} className="flex items-center gap-2 p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.04] hover:bg-white/[0.06] transition-all">
                        <svc.icon className="w-4 h-4 text-blue-400" />
                        <span className="text-xs font-medium text-slate-300">{svc.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
                
                {/* Mobile Language Switcher */}
                <div className="flex items-center gap-2 pt-4 mt-2 border-t border-white/[0.06] px-4">
                  <Globe className="w-4 h-4 text-slate-500" />
                  {['en', 'ar', 'zh'].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => switchLocale(lang)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                        locale === lang 
                          ? 'bg-blue-500/15 text-blue-400 border border-blue-500/25' 
                          : 'text-slate-500 hover:bg-white/5'
                      }`}
                    >
                      {lang.toUpperCase()}
                    </button>
                  ))}
                </div>

                <Link 
                  href={`/${locale}#quote`}
                  className="mx-4 mt-4 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-2xl font-semibold text-center hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  onClick={() => setIsOpen(false)}
                >
                  <Sparkles className="w-4 h-4" />
                  {t('getQuote')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
