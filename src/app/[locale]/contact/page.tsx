"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from 'next-intl';

export default function ContactPage() {
  const t = useTranslations('contact');
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
    alert("Thank you for your message! We will get back to you within 24 hours.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1920')] bg-cover bg-center"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/" className="inline-block text-blue-300 hover:text-white mb-6 transition-colors">
              ← Back to Home
            </Link>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Get in touch with our team for expert China trade solutions
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <span className="text-blue-300 font-semibold">24/7</span> Support
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <span className="text-blue-300 font-semibold">Fast</span> Response
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <span className="text-blue-300 font-semibold">Expert</span> Team
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-b from-background to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+966 50 123 4567"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="quote">Request a Quote</option>
                      <option value="sourcing">Product Sourcing</option>
                      <option value="shipping">Shipping Inquiry</option>
                      <option value="customs">Customs Clearance</option>
                      <option value="support">General Inquiry</option>
                      <option value="partnership">Partnership Opportunity</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Please tell us about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">
                    Contact Information
                  </h2>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">📍</div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Head Office</h3>
                        <p className="text-gray-600">
                          Riyadh, Saudi Arabia<br />
                          Olaya Street, Business District
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="text-3xl">📧</div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                        <p className="text-gray-600">
                          info@chinatrade.com<br />
                          support@chinatrade.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="text-3xl">📞</div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                        <p className="text-gray-600">
                          +966 50 123 4567<br />
                          +966 11 234 5678
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="text-3xl">💬</div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">WhatsApp</h3>
                        <p className="text-gray-600">
                          +966 50 123 4567
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="text-3xl">⏰</div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Business Hours</h3>
                        <p className="text-gray-600">
                          Sunday - Thursday: 9:00 AM - 6:00 PM<br />
                          Friday - Saturday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* China Offices */}
                <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">🇨🇳 China Offices</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-1">Shenzhen</h4>
                      <p className="text-blue-100 text-sm">Electronics Hub</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Guangzhou</h4>
                      <p className="text-blue-100 text-sm">Manufacturing Center</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Shanghai</h4>
                      <p className="text-blue-100 text-sm">Port City</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Changsha</h4>
                      <p className="text-blue-100 text-sm">Emerging Hub</p>
                    </div>
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
