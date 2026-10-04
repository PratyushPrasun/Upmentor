import React, { useState } from 'react';
import { COMPANY } from '../data/content';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${COMPANY.contact.whatsappRaw}?text=${encodeURIComponent(
    COMPANY.contact.whatsappDefaultMsg
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Optional Dismissible Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2.5 bg-white/95 backdrop-blur-md text-slate-800 text-xs font-semibold py-2 px-3.5 rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-slate-200/90 animate-in fade-in slide-in-from-right-4">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Chat with UpMentor Team</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="w-5 h-5 ml-0.5 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors cursor-pointer active:scale-90 focus:outline-none"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open WhatsApp chat with UpMentor"
        className="relative group flex items-center justify-center w-14 h-14 bg-gradient-to-b from-[#28e06d] to-[#1ebe5d] text-white rounded-full border border-emerald-400/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_4px_16px_rgba(37,211,102,0.4),0_10px_28px_-4px_rgba(37,211,102,0.35)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_6px_22px_rgba(37,211,102,0.55),0_14px_34px_-4px_rgba(37,211,102,0.45)] hover:scale-105 active:scale-95 transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/40"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 group-hover:opacity-0 pointer-events-none" />
        <MessageCircle className="w-7 h-7 fill-white stroke-none transition-transform duration-200 group-hover:scale-110" />
      </a>
    </div>
  );
}
