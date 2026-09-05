"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { Phone, Mail, MapPin, MessageCircle, Clock, Send, ArrowRight, Globe, QrCode } from 'lucide-react';

// Social Media Icons
const FacebookIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export default function ContactPage() {
  const locale = useLocale();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(locale === 'ar' ? "شكراً لتواصلك معنا! سنرد عليك خلال 24 ساعة." : "Thank you for contacting us! We will respond within 24 hours.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero Section */}
      <section className="relative py-32 section-logistics overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1920')] bg-cover bg-center"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-sm font-medium mb-6">
              <MessageCircle className="w-4 h-4" />
              <span>{locale === 'ar' ? 'تواصل معنا' : 'Contact Us'}</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              {locale === 'ar' ? 'تواصل معنا' : 'Contact Us'}
              <span className="block mt-2 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                {locale === 'ar' ? 'نحن هنا لمساعدتك' : 'We Are Here to Help'}
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
              {locale === 'ar' ? 'فريقنا الخبير جاهز للإجابة على جميع استفساراتك حول التجارة مع الصين' : 'Our expert team is ready to answer all your inquiries about China trade'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-slate-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-700">
                <span className="text-amber-400 font-bold">24/7</span>
                <span className="text-slate-400 mr-2">{locale === 'ar' ? 'دعم متواصل' : 'Ongoing Support'}</span>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-700">
                <span className="text-amber-400 font-bold">{locale === 'ar' ? 'سريع' : 'Fast'}</span>
                <span className="text-slate-400 mr-2">{locale === 'ar' ? 'استجابة فورية' : 'Instant Response'}</span>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-700">
                <span className="text-amber-400 font-bold">{locale === 'ar' ? 'خبراء' : 'Experts'}</span>
                <span className="text-slate-400 mr-2">{locale === 'ar' ? 'فريق متخصص' : 'Specialized Team'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 section-logistics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold text-white mb-8">
                {locale === 'ar' ? 'أرسل لنا رسالة' : 'Send Us a Message'}
              </h2>

              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    {locale === 'ar' ? 'الاسم الكامل *' : 'Full Name *'}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-slate-500"
                    placeholder={locale === 'ar' ? 'الاسم الكامل' : 'Full Name'}
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    {locale === 'ar' ? 'البريد الإلكتروني *' : 'Email *'}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-slate-500"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    {locale === 'ar' ? 'رقم الهاتف *' : 'Phone Number *'}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-slate-500"
                    placeholder={locale === 'ar' ? '+966 50 123 4567' : '+966 50 123 4567'}
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    {locale === 'ar' ? 'اسم الشركة' : 'Company Name'}
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-slate-500"
                    placeholder={locale === 'ar' ? 'اسم الشركة' : 'Company Name'}
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    {locale === 'ar' ? 'الموضوع *' : 'Subject *'}
                  </label>
                  <select
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white"
                  >
                    <option value="">{locale === 'ar' ? 'اختر الموضوع' : 'Select Subject'}</option>
                    <option value="quote">{locale === 'ar' ? 'طلب عرض سعر' : 'Request Quote'}</option>
                    <option value="sourcing">{locale === 'ar' ? 'توريد المنتجات' : 'Product Sourcing'}</option>
                    <option value="shipping">{locale === 'ar' ? 'استفسار شحن' : 'Shipping Inquiry'}</option>
                    <option value="customs">{locale === 'ar' ? 'التخليص الجمركي' : 'Customs Clearance'}</option>
                    <option value="support">{locale === 'ar' ? 'استفسار عام' : 'General Inquiry'}</option>
                    <option value="partnership">{locale === 'ar' ? 'فرصة شراكة' : 'Partnership Opportunity'}</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    {locale === 'ar' ? 'الرسالة *' : 'Message *'}
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-slate-500"
                    placeholder={locale === 'ar' ? 'أخبرنا عن استفسارك...' : 'Tell us about your inquiry...'}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-amber-600 to-yellow-500 text-slate-950 rounded-lg font-semibold text-lg hover:shadow-xl hover:shadow-amber-500/30 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  {locale === 'ar' ? 'إرسال الرسالة' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
                <h2 className="text-3xl font-bold text-white mb-8">
                  {locale === 'ar' ? 'معلومات التواصل' : 'Contact Information'}
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">{locale === 'ar' ? 'المقر الرئيسي' : 'Headquarters'}</h3>
                      <p className="text-slate-400">
                        {locale === 'ar' ? 'إيوو، مقاطعة تشجيانغ، الصين' : 'Yiwu, Zhejiang Province, China'}<br />
                        {locale === 'ar' ? 'منطقة الأعمال التجارية' : 'Commercial Business District'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">{locale === 'ar' ? 'البريد الإلكتروني' : 'Email'}</h3>
                      <div className="text-slate-400 space-y-1">
                        <a href="mailto:info@dinooratrade.com" className="hover:text-amber-400 transition-colors">info@dinooratrade.com</a><br />
                        <a href="mailto:sales@dinooratrade.co" className="hover:text-amber-400 transition-colors">sales@dinooratrade.co</a><br />
                        <a href="mailto:support@dinooratrade.com" className="hover:text-amber-400 transition-colors">support@dinooratrade.com</a><br />
                        <a href="mailto:contact@dinooratrade.com" className="hover:text-amber-400 transition-colors">contact@dinooratrade.com</a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">{locale === 'ar' ? 'واتساب' : 'WhatsApp'}</h3>
                      <a href="https://wa.me/8619589468539" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors">
                        +86 195 8946 8539
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">{locale === 'ar' ? 'ساعات العمل' : 'Working Hours'}</h3>
                      <p className="text-slate-400">
                        {locale === 'ar' ? 'الأحد - الخميس: 9:00 صباحاً - 6:00 مساءً' : 'Sunday - Thursday: 9:00 AM - 6:00 PM'}<br />
                        {locale === 'ar' ? 'الجمعة - السبت: مغلق' : 'Friday - Saturday: Closed'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* China Offices */}
              <div className="bg-gradient-to-br from-[#0C2340] to-[#1E3A5F] rounded-2xl p-8 border border-amber-500/20">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Globe className="w-6 h-6 text-amber-400" />
                  مكاتبنا في الصين
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full" />
                    <div>
                      <h4 className="font-semibold text-white">إيوو</h4>
                      <p className="text-slate-400 text-sm">مقرنا الرئيسي</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full" />
                    <div>
                      <h4 className="font-semibold text-white">شانغهاي</h4>
                      <p className="text-slate-400 text-sm">ميناء الشحن</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full" />
                    <div>
                      <h4 className="font-semibold text-white">شنتشن</h4>
                      <p className="text-slate-400 text-sm">مركز الإلكترونيات</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full" />
                    <div>
                      <h4 className="font-semibold text-white">قوانغتشو</h4>
                      <p className="text-slate-400 text-sm">مركز التصنيع</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex gap-3">
                <a href="https://wa.me/8619589468539" target="_blank" rel="noopener noreferrer" className="flex-1 bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  واتساب
                </a>
                <Link href={`/${locale}/quote`} className="flex-1 bg-amber-600 hover:bg-amber-700 text-slate-950 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
                  <Send className="w-5 h-5" />
                  عرض سعر
                </Link>
              </div>

              {/* Social Media */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6">{locale === 'ar' ? 'تابعنا على' : 'Follow Us'}</h3>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/share/17mLtvZn95/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-700 hover:bg-blue-600 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all">
                    <FacebookIcon />
                  </a>
                  <a href="https://instagram.com/dinoora_trade" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-700 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all">
                    <InstagramIcon />
                  </a>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-700 hover:bg-blue-700 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all">
                    <LinkedinIcon />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-700 hover:bg-sky-500 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all">
                    <TwitterIcon />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-700 hover:bg-red-600 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all">
                    <YoutubeIcon />
                  </a>
                </div>
              </div>

              {/* QR Codes */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <QrCode className="w-6 h-6 text-amber-400" />
                  {locale === 'ar' ? 'امسح للتواصل' : 'Scan to Connect'}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 flex flex-col items-center">
                    <div className="w-32 h-32 bg-slate-200 rounded-lg mb-2 flex items-center justify-center">
                      <QrCode className="w-20 h-20 text-slate-400" />
                    </div>
                    <span className="text-slate-800 text-sm font-semibold">WhatsApp</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 flex flex-col items-center">
                    <div className="w-32 h-32 bg-slate-200 rounded-lg mb-2 flex items-center justify-center">
                      <QrCode className="w-20 h-20 text-slate-400" />
                    </div>
                    <span className="text-slate-800 text-sm font-semibold">WeChat</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
