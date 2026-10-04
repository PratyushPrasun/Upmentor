import React from 'react';
import Reveal from '../Reveal';
import Button from '../Button';
import {
  StartupIndiaLogo,
  StartupOdishaLogo,
  McaLogo,
  MsmeLogo
} from '../BrandLogos';
import {
  ShieldCheck,
  Building2,
  CheckCircle2,
  FileText,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { OFFICIAL_RECOGNITIONS } from '../../data/credentialsData';

export default function RecognitionsSection({
  isHomePage = false,
  onOpenCertificate
}) {
  return (
    <section id="recognitions" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-slate-200/80">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold mb-3 border border-emerald-200">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Statutory Compliance &amp; Official Standing</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0B192C] tracking-tight">
                Government Registrations &amp; Recognitions.
              </h2>
              <p className="mt-3 text-base text-slate-600 max-w-3xl leading-relaxed">
                UpMentor Edutech Private Limited operates with comprehensive statutory registration, central and state innovation recognitions, and formal government enterprise accreditations.
              </p>
            </div>

            {isHomePage && (
              <Button
                href="/credentials#recognitions"
                variant="primary"
                size="sm"
                icon={ArrowRight}
                className="shrink-0 self-start md:self-auto shadow-sm"
              >
                View Legal Documents
              </Button>
            )}
          </div>

          {/* 4 Recognition Cards in 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {OFFICIAL_RECOGNITIONS.map((rec, idx) => {
              const renderLogo = () => {
                switch (rec.logoType) {
                  case 'startup-india':
                    return <StartupIndiaLogo className="h-10 w-auto" />;
                  case 'startup-odisha':
                    return <StartupOdishaLogo className="h-10 w-auto" />;
                  case 'mca':
                    return <McaLogo className="h-10 w-auto" />;
                  case 'msme':
                    return <MsmeLogo className="h-10 w-auto" />;
                  default:
                    return null;
                }
              };

              return (
                <div
                  key={rec.id}
                  className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full hover:border-[#0284C7]/50 hover:shadow-md transition-all duration-300 group"
                >
                  <div>
                    {/* Header with Logo and Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200/80">
                      <div className="bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-2xs group-hover:border-slate-300 transition-colors">
                        {renderLogo()}
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white border border-slate-200 text-[#0284C7]">
                        {rec.badge}
                      </span>
                    </div>

                    {/* Title & Issuer */}
                    <div className="mt-5 space-y-2">
                      <h3 className="font-display font-bold text-xl text-[#0B192C]">
                        {rec.title}
                      </h3>
                      <p className="text-xs font-semibold text-slate-500">
                        {rec.issuer} • <span className="text-slate-700">{rec.authority}</span>
                      </p>
                      <p className="text-sm text-slate-600 pt-2 leading-relaxed">
                        {rec.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer with Verified Sector & Action */}
                  <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-600 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                      <span>{rec.verifiedSector}</span>
                    </span>

                    {rec.hasCertificate ? (
                      onOpenCertificate ? (
                        <button
                          type="button"
                          onClick={() => onOpenCertificate(rec.certificateId === 'cert-startup-india' ? 0 : 1)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-50/80 hover:bg-[#0284C7] text-[#0284C7] hover:text-white font-bold text-xs border border-sky-200 hover:border-[#0284C7] transition-all duration-150 shadow-2xs hover:shadow-xs cursor-pointer active:scale-95 group"
                        >
                          <FileText className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
                          <span>Inspect Certificate</span>
                        </button>
                      ) : (
                        <a
                          href="#certificates"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-50/80 hover:bg-[#0284C7] text-[#0284C7] hover:text-white font-bold text-xs border border-sky-200 hover:border-[#0284C7] transition-all duration-150 shadow-2xs hover:shadow-xs cursor-pointer active:scale-95 group"
                        >
                          <span>View Certificate</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                        </a>
                      )
                    ) : (
                      <span className="text-slate-400 font-mono text-[11px] bg-slate-100/70 px-2 py-0.5 rounded border border-slate-200/60">
                        MCA21 / Udyam Registry
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Statutory Assurance Banner */}
          <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#0284C7]" />
              <strong className="text-slate-700">Corporate Identity:</strong> UPMENTOR EDUTECH PRIVATE LIMITED
            </span>
            <span className="text-slate-400 hidden sm:inline">•</span>
            <span>Registered Office: Bhubaneswar, Odisha, India</span>
            <span className="text-slate-400 hidden sm:inline">•</span>
            <span className="text-emerald-700 font-semibold">100% Statutory Compliant</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
