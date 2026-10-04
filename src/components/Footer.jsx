import React from 'react';
import { Link } from 'react-router-dom';
import { LOGO } from '../data/assets';
import { COMPANY, NAV_LINKS } from '../data/content';
import { Phone, MessageCircle, Mail, MapPin, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-white p-1">
                <img src={LOGO.src} alt={LOGO.alt} className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="font-display font-extrabold text-xl text-[#0B192C] tracking-tight">
                  Up<span className="text-[#0284C7]">Mentor</span>
                </span>
                <span className="block text-[10px] uppercase font-bold tracking-wider text-slate-400">
                  Edutech Pvt. Ltd.
                </span>
              </div>
            </Link>

            <p className="font-display font-bold text-lg text-[#0B192C] tracking-tight">
              "{COMPANY.tagline}"
            </p>

            <p className="text-sm text-slate-500 leading-relaxed">
              {COMPANY.descriptor} Turning schools into AI-ready institutions across Odisha, CBSE, ICSE, and State Boards.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Verified School Partnership Model</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="font-display font-bold text-xs uppercase tracking-wider text-[#0B192C] mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-600 hover:text-[#0284C7] transition-colors inline-flex items-center gap-1"
                  >
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Program Framework */}
          <div className="lg:col-span-3">
            <h3 className="font-display font-bold text-xs uppercase tracking-wider text-[#0B192C] mb-4">
              AILA Program
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="font-mono text-xs text-[#0284C7] font-semibold mt-0.5">I</span>
                <span>AI Cognition &amp; Context Engineering</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono text-xs text-[#0284C7] font-semibold mt-0.5">II</span>
                <span>AI Production &amp; Real Client Sprint</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono text-xs text-[#0284C7] font-semibold mt-0.5">III</span>
                <span>AI Identity &amp; Digital Portfolio</span>
              </li>
              <li className="pt-2 text-xs text-slate-500">
                Boards: CBSE • ICSE • Odisha State Board
              </li>
            </ul>
          </div>

          {/* Direct Communication */}
          <div className="lg:col-span-3">
            <h3 className="font-display font-bold text-xs uppercase tracking-wider text-[#0B192C] mb-4">
              Direct Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <div className="text-xs text-slate-500 mb-0.5">Academic Inquiries:</div>
                <div className="flex flex-col gap-1">
                  <a
                    href={`tel:${COMPANY.contact.rawPhones[0]}`}
                    className="flex items-center gap-2 text-slate-700 hover:text-[#0284C7] font-medium"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#0284C7]" />
                    <span>{COMPANY.contact.phones[0]}</span>
                  </a>
                  <a
                    href={`tel:${COMPANY.contact.rawPhones[1]}`}
                    className="flex items-center gap-2 text-slate-700 hover:text-[#0284C7] font-medium"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#0284C7]" />
                    <span>{COMPANY.contact.phones[1]}</span>
                  </a>
                </div>
              </li>

              <li className="pt-1">
                <a
                  href={`https://wa.me/${COMPANY.contact.whatsappRaw}?text=${encodeURIComponent(
                    COMPANY.contact.whatsappDefaultMsg
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 font-semibold"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp: {COMPANY.contact.whatsapp}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>

              <li>
                <a
                  href={COMPANY.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-700 hover:text-pink-600 font-medium"
                >
                  <InstagramIcon className="w-4 h-4 text-pink-500" />
                  <span>Instagram: {COMPANY.contact.instagram}</span>
                </a>
              </li>

              <li className="flex items-center gap-2 text-slate-500 text-xs pt-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>{COMPANY.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {COMPANY.copyrightYear} {COMPANY.name} All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>CBSE · ICSE · State Board Certified Framework</span>
            <span className="text-slate-300">•</span>
            <span>Response within 4 business hours</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
