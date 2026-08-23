"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { Phone, Mail, MapPin, MessageCircle, Clock, Send, ArrowRight, Globe } from 'lucide-react';

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
                      <p className="text-slate-400">
                        maomoody524@gmail.com<br />
                        info@dinoora.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">{locale === 'ar' ? 'رقم الهاتف' : 'Phone'}</h3>
                      <p className="text-slate-400">
                        +86 155 8723 7864<br />
                        {locale === 'ar' ? 'متاح على واتساب' : 'Available on WhatsApp'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">{locale === 'ar' ? 'واتساب' : 'WhatsApp'}</h3>
                      <a href="https://wa.me/8615587237864" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors">
                        +86 155 8723 7864
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
                <a href="https://wa.me/8615587237864" target="_blank" rel="noopener noreferrer" className="flex-1 bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  واتساب
                </a>
                <Link href={`/${locale}/quote`} className="flex-1 bg-amber-600 hover:bg-amber-700 text-slate-950 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
                  <Send className="w-5 h-5" />
                  عرض سعر
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
