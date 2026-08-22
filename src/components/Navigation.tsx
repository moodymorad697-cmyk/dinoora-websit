"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { 
  ChevronDown, Search, ShieldCheck, Warehouse, Ship, FileCheck, Package,
  ArrowLeft, Phone, Sparkles, MessageCircle, Globe
} from 'lucide-react';

export default function Navigation() {
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const servicesRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'ar';
  const targetLocale = locale === 'ar' ? 'en' : 'ar';

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

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) setShowServices(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const serviceItems = [
    { icon: Search, label: t('services.sourcing'), desc: t('services.sourcingDesc'), href: '/services/sourcing' },
    { icon: ShieldCheck, label: t('services.inspection'), desc: t('services.inspectionDesc'), href: '/services/inspection' },
    { icon: Warehouse, label: t('services.warehousing'), desc: t('services.warehousingDesc'), href: '/services/warehousing' },
    { icon: Ship, label: t('services.shipping'), desc: t('services.shippingDesc'), href: '/services/shipping' },
    { icon: FileCheck, label: t('services.customs'), desc: t('services.customsDesc'), href: '/services/customs' },
    { icon: Package, label: t('services.logistics'), desc: t('services.logisticsDesc'), href: '/services/logistics' },
  ];

  const navItems = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.about'), href: '/about' },
    { label: t('nav.track'), href: '/track' },
    { label: t('nav.contact'), href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled
        ? 'bg-slate-900/95 backdrop-blur-2xl border-b border-indigo-500/20 shadow-2xl shadow-indigo-500/10'
        : 'bg-gradient-to-b from-slate-900/90 to-transparent'
    }`}>
      <div className="absolute bottom-0 right-0 h-[2px] bg-gradient-to-l from-indigo-500 via-purple-500 via-pink-500 to-indigo-500 transition-all duration-150 opacity-90 animate-gradient-shift bg-[length:200%_100%]" style={{ width: `${scrollProgress}%` }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[76px]">

          <Link href={`/${locale}`} className="flex items-center gap-3 group">
            <div className="relative h-16 w-16">
              <Image
                src="/logo-dinoora.png"
                alt="دينورا"
                width={64}
                height={64}
                className="h-16 w-16 object-contain brightness-110 drop-shadow-xl transition-all duration-300 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-2 rounded-full bg-cyan-300/10 blur-xl" />
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item, i) => (
              <Link
                key={i}
                href={`/${locale}${item.href}`}
                className="relative px-4 py-2 rounded-lg font-semibold text-[13px] text-slate-400 hover:text-white transition-all duration-300 group"
              >
                {item.label}
                <span className="absolute bottom-0 right-1/2 translate-x-1/2 w-0 h-[2px] bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 rounded-full group-hover:w-3/4 transition-all duration-300 animate-gradient-shift bg-[length:200%_100%]" />
              </Link>
            ))}

            <div ref={servicesRef} className="relative">
              <button
                onClick={() => setShowServices(!showServices)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg font-semibold text-[13px] text-slate-400 hover:text-white transition-all duration-300"
              >
                {t('nav.services')}
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showServices ? 'rotate-180' : ''}`} />
              </button>

              {showServices && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[560px] rounded-3xl shadow-2xl shadow-indigo-500/10 border border-indigo-500/20 p-6 grid grid-cols-2 gap-3 animate-scale-in" style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.98), rgba(3,7,18,0.99))', backdropFilter: 'blur(25px)' }}>
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 border-r border-b border-indigo-500/20" style={{ background: 'rgba(15,23,42,0.98)' }} />
                  {serviceItems.map((svc, i) => (
                    <Link
                      key={i}
                      href={`/${locale}${svc.href}`}
                      onClick={() => setShowServices(false)}
                      className="flex items-start gap-3 p-4 rounded-2xl hover:bg-white/[0.06] transition-all duration-300 group hover:scale-[1.02]"
                    >
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500/15 to-purple-500/10 flex items-center justify-center flex-shrink-0 group-hover:from-indigo-500/25 group-hover:to-purple-500/15 transition-all border border-indigo-500/10 group-hover:border-indigo-500/20">
                        <svc.icon className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">{svc.label}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{svc.desc}</div>
                      </div>
                    </Link>
                  ))}
                  <div className="col-span-2 mt-2 pt-3 border-t border-white/[0.08]">
                    <Link href={`/${locale}/#services`} onClick={() => setShowServices(false)} className="flex items-center justify-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 font-bold py-2 transition-colors group">
                      {t('services.viewAll')}
                      <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div className="w-px h-6 bg-white/10 mx-3" />

            <Link
              href={`/${targetLocale}${pathname.replace(/^\/(ar|en|zh)/, '')}`}
              className="flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-all duration-300 px-3 py-2 rounded-xl hover:bg-indigo-500/5"
            >
              <Globe className="w-4 h-4" />
              <span className="text-xs font-bold hidden xl:inline">{targetLocale === 'en' ? 'English' : 'العربية'}</span>
            </Link>

            <Link
              href={`/${locale}#quote`}
              className="mr-3 px-5 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-bold text-xs hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-1.5 animate-gradient-shift bg-[length:200%_200%]"
            >
              <Sparkles className="w-4 h-4" />
              {t('nav.getQuote')}
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-11 h-11 flex items-center justify-center rounded-xl hover:bg-white/10 transition-colors"
          >
            <div className="relative w-5 h-4">
              <span className={`absolute right-0 w-5 h-[2px] bg-white rounded-full transition-all duration-300 ${isOpen ? 'top-[7px] rotate-45' : 'top-0'}`} />
              <span className={`absolute right-0 top-[7px] w-5 h-[2px] bg-white rounded-full transition-all duration-300 ${isOpen ? 'opacity-0 scale-0' : 'opacity-100'}`} />
              <span className={`absolute right-0 w-5 h-[2px] bg-white rounded-full transition-all duration-300 ${isOpen ? 'top-[7px] -rotate-45' : 'top-[14px]'}`} />
            </div>
          </button>
        </div>

        <div className={`lg:hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[700px] opacity-100 pb-6' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="pt-4 border-t border-white/[0.06]">
            <div className="flex flex-col gap-1">
              {navItems.map((item, i) => (
                <Link
                  key={i}
                  href={`/${locale}${item.href}`}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between font-bold py-3.5 px-5 rounded-2xl text-slate-300 hover:text-white hover:bg-white/[0.04] transition-all"
                >
                  {item.label}
                  <ArrowLeft className="w-4 h-4 text-slate-600" />
                </Link>
              ))}
              
              <div className="px-5 pt-4 pb-2">
                <div className="text-xs text-blue-400 font-bold mb-3">الخدمات</div>
                <div className="grid grid-cols-2 gap-2">
                  {serviceItems.slice(0, 4).map((svc, i) => (
                    <Link key={i} href={`/${locale}${svc.href}`} onClick={() => setIsOpen(false)} className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.06] transition-all">
                      <svc.icon className="w-4 h-4 text-blue-400" />
                      <span className="text-xs font-bold text-slate-300">{svc.label}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link 
                href={`/${locale}#quote`}
                className="mx-5 mt-4 px-6 py-4 bg-gradient-to-l from-blue-600 to-cyan-500 text-white rounded-2xl font-bold text-center hover:shadow-lg transition-all flex items-center justify-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <Sparkles className="w-4 h-4" />
                احصل على عرض سعر
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
