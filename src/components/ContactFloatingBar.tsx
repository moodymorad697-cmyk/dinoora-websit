"use client";

import { MapPin } from "lucide-react";
import { useState } from "react";

export default function ContactFloatingBar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const address = "Room 201, 2nd Floor, Building 2, No. 37, Daoge Tang Village, Jiangdong Street, Yiwu City, Jinhua City, Zhejiang Province";
  const mapsLink = "https://maps.google.com/?q=Yiwu+City+Zhejiang+Province+China";

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="fixed bottom-6 left-6 z-50 lg:hidden w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full shadow-2xl flex items-center justify-center text-white"
      >
        <MapPin className="w-6 h-6" />
      </button>

      {/* Desktop Floating Bar - Right Side */}
      <div className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-2.5">
        <a
          href="https://maps.google.com/?q=Yiwu+City+Zhejiang+Province+China"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-end"
        >
          <div className="absolute right-full mr-3 px-3 py-1.5 bg-slate-900/95 backdrop-blur-sm text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap border border-white/10 shadow-xl translate-x-2 group-hover:translate-x-0">
            <div className="font-bold">الموقع</div>
            <div className="text-[10px] text-slate-400">Yiwu, China</div>
          </div>
          <div className="w-11 h-11 bg-purple-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-black/30 hover:scale-110 hover:shadow-xl transition-all duration-300">
            <MapPin className="w-4.5 h-4.5" />
          </div>
        </a>
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

          <div className="w-full max-w-sm mb-8">
            <a
              href="https://maps.google.com/?q=Yiwu+City+Zhejiang+Province+China"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 bg-slate-900 rounded-2xl border border-slate-800 hover:border-slate-600 transition-all"
            >
              <div className="w-14 h-14 bg-purple-500 rounded-full flex items-center justify-center text-white">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="text-center">
                <div className="text-white font-medium">الموقع</div>
                <div className="text-xs text-slate-400 mt-1">Yiwu, China</div>
              </div>
            </a>
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
