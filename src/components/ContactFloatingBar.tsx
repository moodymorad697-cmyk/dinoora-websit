"use client";

import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";
import { useState } from "react";

// TikTok Icon Component
const TikTokIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
);

// Facebook Icon Component  
const FacebookIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

// Instagram Icon Component
const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

// WeChat Icon Component
const WeChatIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178A1.17 1.17 0 014.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 01.598.082l1.584.926a.272.272 0 00.14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 01-.023-.156.49.49 0 01.201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088-.018-.002-.036-.003-.054-.003h-.012l-.34-.03zm-2.002 2.885c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.97-.982z"/>
  </svg>
);

// Telegram Icon Component
const TelegramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

export default function ContactFloatingBar() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Contact Info
  const phone = "008615587237864";
  const whatsapp = "8615587237864";
  const email = "maomoody524@gmail.com";
  const address = "Room 201, 2nd Floor, Building 2, No. 37, Daoge Tang Village, Jiangdong Street, Yiwu City, Jinhua City, Zhejiang Province";
  const mapsLink = "https://maps.google.com/?q=Yiwu+City+Zhejiang+Province+China";
  const facebookLink = "https://www.facebook.com/share/17mLtvZn95/?mibextid=wwXIfr";
  const tiktokLink = "https://www.tiktok.com/@kingmorad0?is_from_webapp=1&sender_device=pc";
  const instagramLink = "https://www.tiktok.com/@kingmorad0"; // Using TikTok as placeholder
  const telegramLink = "https://t.me/DINOORACOMPANY";

  const contactItems = [
    {
      icon: Phone,
      label: "الهاتف",
      sublabel: phone,
      href: `tel:${phone}`,
      color: "from-blue-600 to-blue-400",
      bgColor: "bg-blue-500"
    },
    {
      icon: MessageCircle,
      label: "واتساب",
      sublabel: "محادثة مباشرة",
      href: `https://wa.me/${whatsapp}`,
      color: "from-green-600 to-green-400",
      bgColor: "bg-green-500"
    },
    {
      icon: Mail,
      label: "البريد",
      sublabel: email,
      href: `mailto:${email}`,
      color: "from-red-600 to-red-400",
      bgColor: "bg-red-500"
    },
    {
      icon: MapPin,
      label: "الموقع",
      sublabel: "Yiwu, China",
      href: mapsLink,
      color: "from-purple-600 to-purple-400",
      bgColor: "bg-purple-500",
      isExternal: true
    }
  ];

  // WeChat ID (same as phone number without country code prefix)
  const wechatId = whatsapp;

  const socialItems = [
    {
      icon: FacebookIcon,
      label: "فيسبوك",
      href: facebookLink,
      color: "bg-blue-600"
    },
    {
      icon: TikTokIcon,
      label: "تيك توك",
      href: tiktokLink,
      color: "bg-slate-800"
    },
    {
      icon: InstagramIcon,
      label: "انستجرام",
      href: instagramLink,
      color: "bg-gradient-to-br from-purple-600 to-pink-500"
    },
    {
      icon: TelegramIcon,
      label: "تليجرام",
      href: telegramLink,
      color: "bg-sky-500"
    },
    {
      icon: WeChatIcon,
      label: "ويتشات",
      href: `weixin://dl/chat?${whatsapp}`,
      color: "bg-green-600"
    }
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="fixed bottom-6 left-6 z-50 lg:hidden w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full shadow-2xl flex items-center justify-center text-white"
      >
        <Phone className="w-6 h-6" />
      </button>

      {/* Desktop Floating Bar - Right Side */}
      <div className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-2.5">
        {contactItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target={item.isExternal ? "_blank" : undefined}
            rel={item.isExternal ? "noopener noreferrer" : undefined}
            className="group relative flex items-center justify-end"
          >
            <div className="absolute right-full mr-3 px-3 py-1.5 bg-slate-900/95 backdrop-blur-sm text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap border border-white/10 shadow-xl translate-x-2 group-hover:translate-x-0">
              <div className="font-bold">{item.label}</div>
              <div className="text-[10px] text-slate-400">{item.sublabel}</div>
            </div>
            <div className={`w-11 h-11 ${item.bgColor} rounded-xl flex items-center justify-center text-white shadow-lg shadow-black/30 hover:scale-110 hover:shadow-xl transition-all duration-300`}>
              <item.icon className="w-4.5 h-4.5" />
            </div>
          </a>
        ))}
      </div>

      {/* Desktop Social Bar - Left Side */}
      <div className="fixed left-5 bottom-6 z-40 hidden lg:flex flex-col gap-2">
        {socialItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center"
          >
            <div className="absolute left-full ml-3 px-3 py-1.5 bg-slate-900/95 backdrop-blur-sm text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap border border-white/10 shadow-xl -translate-x-2 group-hover:translate-x-0">
              {item.label}
            </div>
            <div className={`w-10 h-10 ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg shadow-black/30 hover:scale-110 transition-all duration-300`}>
              <item.icon />
            </div>
          </a>
        ))}
      </div>

      {/* Mobile Expanded Menu */}
      {isExpanded && (
        <div className="fixed inset-0 bg-slate-950/95 z-50 lg:hidden flex flex-col items-center justify-center p-6">
          <button
            onClick={() => setIsExpanded(false)}
            className="absolute top-6 right-6 w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-white"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <h2 className="text-2xl font-bold text-white mb-8">تواصل معنا</h2>

          <div className="grid grid-cols-2 gap-4 w-full max-w-sm mb-8">
            {contactItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.isExternal ? "_blank" : undefined}
                rel={item.isExternal ? "noopener noreferrer" : undefined}
                className={`flex flex-col items-center gap-3 p-6 bg-slate-900 rounded-2xl border border-slate-800 hover:border-slate-600 transition-all`}
              >
                <div className={`w-14 h-14 ${item.bgColor} rounded-full flex items-center justify-center text-white`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <div className="text-center">
                  <div className="text-white font-medium">{item.label}</div>
                  <div className="text-xs text-slate-400 mt-1">{item.sublabel}</div>
                </div>
              </a>
            ))}
          </div>

          <div className="flex gap-4">
            {socialItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-14 h-14 ${item.color} rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform`}
              >
                <item.icon />
              </a>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="flex items-start gap-3 bg-slate-900 p-4 rounded-xl border border-slate-800 max-w-sm">
              <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
              <span className="text-slate-300 text-sm text-right">{address}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
