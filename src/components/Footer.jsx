import React from 'react';
import { Link } from 'react-router-dom';
import { LOGO } from '../data/assets';
import { COMPANY, NAV_LINKS } from '../data/content';
import { Phone, MessageCircle, MapPin, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { InstagramIcon } from './Icons';

const OFFERINGS = [
  { label: 'Automation Lab', dot: 'bg-[#0284C7]' },
  { label: 'Drone — Scratch to Intermediate', dot: 'bg-[#D97706]' },
  { label: 'AI Literacy', dot: 'bg-[#10B981]' },
  { label: 'Cyber Security Awareness', dot: 'bg-[#8B5CF6]' },
];

const headingCls =
  'font-display font-bold text-[11px] uppercase tracking-wider text-[#0B192C] mb-2.5';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-6">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-4 space-y-2.5">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg overflow-hidden shadow-sm border border-slate-200 bg-white p-1">
                <img src={LOGO.src} alt={LOGO.alt} className="w-full h-full object-contain" />
              </div>
              <div className="leading-tight">
                <span className="font-display font-extrabold text-lg text-[#0B192C] tracking-tight">
                  Up<span className="text-[#0284C7]">Mentor</span>
                </span>
                <span className="block text-[9px] uppercase font-bold tracking-wider text-slate-400">
                  Edutech Pvt. Ltd.
                </span>
              </div>
            </Link>

            <p className="font-display font-bold text-sm text-[#0B192C] tracking-tight">
              "{COMPANY.tagline}"
            </p>

            <p className="text-xs text-slate-500 leading-relaxed">
              {COMPANY.descriptor} Turning schools into AI-ready institutions across Odisha, CBSE, ICSE, and State Boards.
            </p>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Verified School Partnership Model</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className={headingCls}>Navigation</h3>
            <ul className="space-y-1.5 text-xs">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-slate-600 hover:text-[#0284C7] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Offerings */}
          <div className="col-span-1 lg:col-span-3">
            <h3 className={headingCls}>Core Offerings</h3>
            <ul className="space-y-1.5 text-xs text-slate-600">
              {OFFERINGS.map((o) => (
                <li key={o.label} className="flex items-center gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${o.dot}`} />
                  <span>{o.label}</span>
                </li>
              ))}
              <li className="pt-1 text-[11px] text-slate-500">Boards: CBSE • ICSE • State Board</li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="col-span-2 lg:col-span-3">
            <h3 className={headingCls}>Direct Contact</h3>
            <ul className="space-y-1.5 text-xs">
              <li className="text-[11px] text-slate-500">Academic Inquiries:</li>
              <li className="flex flex-wrap gap-x-4 gap-y-1">
                {[0, 1].map((i) => (
                  <a
                    key={i}
                    href={`tel:${COMPANY.contact.rawPhones[i]}`}
                    className="flex items-center gap-1.5 text-slate-700 hover:text-[#0284C7] font-medium"
                  >
                    <Phone className="w-3 h-3 text-[#0284C7]" />
                    <span>{COMPANY.contact.phones[i]}</span>
                  </a>
                ))}
              </li>
              <li>
                <a
                  href={`https://wa.me/${COMPANY.contact.whatsappRaw}?text=${encodeURIComponent(
                    COMPANY.contact.whatsappDefaultMsg
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-700 hover:text-emerald-800 font-semibold"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp: {COMPANY.contact.whatsapp}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={COMPANY.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-700 hover:text-pink-600 font-medium"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-pink-500" />
                  <span>Instagram: {COMPANY.contact.instagram}</span>
                </a>
              </li>
              <li className="flex items-start gap-1.5 text-slate-500 text-[11px]">
                <MapPin className="w-3 h-3 text-slate-400 shrink-0 mt-0.5" />
                <span>{COMPANY.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500">
          <p>© {COMPANY.copyrightYear} {COMPANY.name} All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <span>CBSE · ICSE · State Board Certified Framework</span>
            <span className="text-slate-300">•</span>
            <span>Response within 4 business hours</span>
          </div>
        </div>
      </div>
    </footer>
  );
}