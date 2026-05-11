"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from 'next-intl';
import { Globe, Menu, X, ChevronDown, Search, Ship, Warehouse, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations('nav');

  const locale = pathname.split('/')[1] || 'en';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Determine active section
      const sections = ['hero', 'services', 'workflow', 'why-us', 'industries', 'knowledge', 'quote'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const switchLocale = (newLocale: string) => {
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname);
    setShowLangMenu(false);
  };

  const navItems = [
    { id: 'hero', label: 'الرئيسية', href: '/' },
    { id: 'sourcing', label: 'التوريد', href: '/services/sourcing' },
    { id: 'shipping', label: 'الشحن', href: '/services/shipping' },
    { id: 'warehousing', label: 'التخزين', href: '/services/warehousing' },
    { id: 'inspection', label: 'فحص الجودة', href: '/services/inspection' },
    { id: 'about', label: 'من نحن', href: '/about' },
  ];


  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/98 backdrop-blur-md shadow-lg border-b border-gray-100' : 'bg-white/80 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-32">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 hover:scale-110 transition-all duration-300 drop-shadow-2xl"
          >
            <img
              src="/logo-dinoora.png"
              alt="DINOORA"
              className="h-[104px] w-auto drop-shadow-xl"
            />
          </button>

          {/* Desktop Navigation - Quick Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`/${locale}${item.href}`}
                className="px-4 py-2 rounded-lg font-medium text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-all"
              >
                {item.label}
              </Link>
            ))}
            
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="flex items-center gap-1.5 text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-gray-50"
              >
                <Globe className="w-5 h-5" />
                <span className="text-sm font-medium uppercase">{locale}</span>
              </button>
              
              {showLangMenu && (
                <div className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[140px]">
                  {['en', 'ar', 'zh'].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => switchLocale(lang)}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                        locale === lang ? 'text-blue-600 font-semibold bg-blue-50' : 'text-gray-700'
                      }`}
                    >
                      {lang === 'en' && 'English'}
                      {lang === 'ar' && 'العربية'}
                      {lang === 'zh' && '中文'}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <Link 
              href={`/${locale}#quote`}
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-blue-500/30 transition-all"
            >
              اطلب عرض سعر
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-slate-800 bg-slate-950">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={`/${locale}${item.href}`}
                  className="text-left font-medium py-3 px-4 rounded-lg text-gray-400 hover:text-white hover:bg-white/5"
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="flex items-center gap-2 pt-4 mt-2 border-t border-gray-100 px-4">
                <span className="text-sm text-gray-500">{t('language')}:</span>
                {['en', 'ar', 'zh'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => switchLocale(lang)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                      locale === lang 
                        ? 'bg-gray-900 text-white' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>

              <Link 
                href={`/${locale}/quote`}
                className="mx-4 mt-4 px-6 py-3 bg-gray-900 text-white rounded-full font-semibold text-center hover:bg-gray-800 transition-all"
                onClick={() => setIsOpen(false)}
              >
                {t('getQuote')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
