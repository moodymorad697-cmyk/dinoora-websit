"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

// Social Media Icons as SVG components
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

const TikTokIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
);

export default function Footer() {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'en';
  const t = useTranslations('footer');

  // Contact Info
  const whatsappNumber = "008615587237864";
  const addressChina = "Room 201, 2nd Floor, Building 2, No. 37, Daoge Tang Village, Jiangdong Street, Yiwu City, Jinhua City, Zhejiang Province";
  const mapsLink = "https://maps.google.com/?q=Yiwu+City+Zhejiang+Province+China";
  const facebookLink = "https://www.facebook.com/share/17mLtvZn95/?mibextid=wwXIfr";
  const tiktokLink = "https://www.tiktok.com/@kingmorad0?is_from_webapp=1&sender_device=pc";

  return (
    <footer className="text-slate-100" style={{ background: 'linear-gradient(180deg, #0a0f1e 0%, #020617 100%)' }}>
      {/* Map Section */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">موقعنا في الصين</h3>
              <p className="text-slate-400 mb-4">مكتبنا الرئيسي في مدينة إيوو، مركز التجارة الدولية في الصين</p>
              <div className="flex items-start gap-3 bg-slate-900 p-4 rounded-xl border border-slate-800">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm">{addressChina}</span>
              </div>
              <a 
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-500 transition-colors"
              >
                <MapPin className="w-4 h-4" />
                عرض على الخريطة
              </a>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden border border-slate-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109210.82350339014!2d120.02444695!3d29.3060032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34496d74769753e1%3A0x5e9c7f8e5e5c5e5c!2sYiwu%2C%20Jinhua%2C%20Zhejiang%2C%20China!5e0!3m2!1sen!2s!4v1699999999999!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand & Social */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <div>
                <div className="text-lg font-bold text-white">دينورا</div>
                <div className="text-xs text-slate-400">حلول التجارة العالمية</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {t('tagline')}
            </p>
            
            {/* Social Media Icons */}
            <div className="flex gap-3">
              <a 
                href={facebookLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a 
                href={tiktokLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-700 hover:text-white transition-all"
                aria-label="TikTok"
              >
                <TikTokIcon />
              </a>
              <a 
                href={`https://wa.me/${whatsappNumber.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:bg-green-600 hover:text-white transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">
              {t('contact')}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-white text-sm font-medium">واتساب / WhatsApp</div>
                  <a href={`https://wa.me/${whatsappNumber.replace(/\D/g, '')}`} className="text-slate-400 text-sm hover:text-white transition-colors">
                    {whatsappNumber}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-white text-sm font-medium">البريد الإلكتروني</div>
                  <a href="mailto:maomoody524@gmail.com" className="text-slate-400 text-sm hover:text-white transition-colors">maomoody524@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-white text-sm font-medium">العنوان</div>
                  <span className="text-slate-400 text-sm">Yiwu, Zhejiang, China</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">
              {t('services')}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href={`/${locale}/services/sourcing`} className="text-slate-300 hover:text-white transition-colors text-sm">
                  {t('sourcing')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services/shipping`} className="text-slate-300 hover:text-white transition-colors text-sm">
                  {t('shipping')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services/warehousing`} className="text-slate-300 hover:text-white transition-colors text-sm">
                  {t('warehousing')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services/inspection`} className="text-slate-300 hover:text-white transition-colors text-sm">
                  {t('inspection')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Dinoora. {t('rights')}
          </p>
          <div className="flex gap-6">
            <Link href={`/${locale}/privacy`} className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
              {t('privacy')}
            </Link>
            <Link href={`/${locale}/terms`} className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
              {t('terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
