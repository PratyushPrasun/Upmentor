import React from 'react';
import Reveal from '../Reveal';
import {
  FileCheck2,
  Eye,
  ExternalLink,
  Download,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { GENUINE_CERTIFICATES } from '../../data/credentialsData';

export default function CertificatesSection({ onOpenLightbox }) {
  return (
    <section id="certificates" className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-slate-200/80">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold mb-3 border border-emerald-200">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Legal Documentation</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0B192C] tracking-tight">
                Genuine Certificates of Recognition.
              </h2>
              <p className="mt-3 text-base text-slate-600 max-w-3xl leading-relaxed">
                Inspect the authentic recognition certificates issued to UPMENTOR EDUTECH PRIVATE LIMITED by the Government of India (DPIIT) and the Government of Odisha (MSME Department).
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Direct Government Issuance</span>
            </div>
          </div>

          {/* Certificate Cards (2 Columns) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {GENUINE_CERTIFICATES.map((cert, idx) => (
              <div
                key={cert.id}
                className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group"
              >
                <div>
                  {/* Top Bar with Badge */}
                  <div className="px-6 py-4 bg-slate-50/80 border-b border-slate-100 flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 text-xs font-bold text-slate-800">
                      <FileCheck2 className="w-4 h-4 text-[#10B981]" />
                      <span>{cert.highlight}</span>
                    </div>
                    <span className="text-[11px] font-mono font-bold text-[#0284C7] bg-[#F0F9FF] px-2.5 py-0.5 rounded border border-[#0284C7]/20">
                      Ref: {cert.certificateNumber}
                    </span>
                  </div>

                  {/* Certificate Interactive Preview Card */}
                  <div
                    onClick={() => onOpenLightbox && onOpenLightbox(idx)}
                    className="relative aspect-16/10 bg-slate-100 overflow-hidden cursor-pointer border-b border-slate-200"
                    title="Click to inspect certificate in high resolution"
                  >
                    <img
                      src={cert.previewImage}
                      alt={cert.title}
                      loading="lazy"
                      className="w-full h-full object-cover sm:object-contain bg-white transition-transform duration-500 group-hover:scale-102"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-xs">
                      <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/95 backdrop-blur-md text-[#0B192C] text-xs font-bold shadow-[0_8px_20px_rgba(0,0,0,0.25)] border border-white/50 transform transition-transform duration-200 group-hover:scale-105">
                        <Eye className="w-4 h-4 text-[#0284C7]" />
                        <span>Inspect Full Certificate</span>
                      </span>
                    </div>
                  </div>

                  {/* Certificate Details */}
                  <div className="p-6 sm:p-8 space-y-4">
                    <div>
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-[#0B192C]">
                        {cert.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                        {cert.issuer}
                      </p>
                    </div>

                    {/* Metadata Table */}
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      {cert.details.map((detail) => (
                        <div
                          key={detail.label}
                          className="p-3 rounded-xl bg-[#F8FAFC] border border-slate-100"
                        >
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                            {detail.label}
                          </span>
                          <span className="text-xs font-semibold text-slate-800 block mt-0.5">
                            {detail.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Certificate Action Footer */}
                <div className="px-6 py-4 sm:px-8 bg-slate-50 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => onOpenLightbox && onOpenLightbox(idx)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-50 text-[#0284C7] hover:bg-[#0284C7] hover:text-white font-bold text-xs border border-sky-200 hover:border-[#0284C7] transition-all duration-150 cursor-pointer shadow-2xs hover:shadow-xs active:scale-95 group"
                  >
                    <Eye className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
                    <span>Enlarge &amp; Zoom</span>
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={cert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-300/90 text-xs font-semibold text-slate-700 hover:text-[#0B192C] hover:border-slate-400 hover:bg-slate-50 transition-all shadow-2xs hover:shadow-xs active:scale-95"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-[#0284C7]" />
                      <span>Open Official PDF</span>
                    </a>
                    <a
                      href={cert.pdfUrl}
                      download
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-b from-[#0284C7] to-[#0369A1] text-xs font-semibold text-white border border-[#38BDF8]/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_2px_6px_rgba(2,132,199,0.25)] hover:from-[#0369A1] hover:to-[#075985] hover:shadow-[0_4px_12px_rgba(2,132,199,0.35)] transition-all active:scale-95"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Genuine Guarantee Callout */}
          <div className="mt-8 text-center">
            <p className="text-xs text-slate-500 max-w-xl mx-auto flex items-center justify-center gap-2 bg-white border border-slate-200 py-2.5 px-4 rounded-full shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-[#10B981] shrink-0" />
              <span>
                All documents shown are genuine certificates issued to UPMENTOR EDUTECH PRIVATE LIMITED.
              </span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
