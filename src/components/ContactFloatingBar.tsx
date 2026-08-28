"use client";

import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";
import { useState } from "react";

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

export default function ContactFloatingBar() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Contact Info
  const phone = "008619589468539";
  const whatsapp = "8619589468539";
  const email = "maomoody524@gmail.com";
  const address = "Room 201, 2nd Floor, Building 2, No. 37, Daoge Tang Village, Jiangdong Street, Yiwu City, Jinhua City, Zhejiang Province";
  const mapsLink = "https://maps.google.com/?q=Yiwu+City+Zhejiang+Province+China";

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

  // Social Icons
  const socialIcons = [
    { icon: FacebookIcon, href: "https://www.facebook.com/share/17mLtvZn95/?mibextid=wwXIfr", color: "hover:bg-blue-600" },
    { icon: InstagramIcon, href: "https://instagram.com/dinoora_trade", color: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500" },
    { icon: LinkedinIcon, href: "https://www.linkedin.com", color: "hover:bg-blue-700" },
    { icon: TwitterIcon, href: "https://twitter.com", color: "hover:bg-sky-500" },
    { icon: YoutubeIcon, href: "https://youtube.com", color: "hover:bg-red-600" }
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
        {socialIcons.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center"
          >
            <div className="absolute left-full ml-3 px-3 py-1.5 bg-slate-900/95 backdrop-blur-sm text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap border border-white/10 shadow-xl -translate-x-2 group-hover:translate-x-0">
              Social
            </div>
            <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 shadow-lg shadow-black/30 hover:scale-110 transition-all duration-300 hover:text-white">
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
            {socialIcons.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:scale-110 transition-transform hover:text-white"
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
