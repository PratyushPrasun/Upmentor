import React from 'react';
import Reveal from '../Reveal';
import Button from '../Button';
import {
  MicrosoftLogo,
  AmexLogo,
  WiproLogo,
  TcsLogo,
  AccentureLogo,
  EcCouncilLogo
} from '../BrandLogos';
import {
  Users2,
  CheckCircle2,
  Info,
  ArrowRight,
  ShieldCheck,
  Award,
  TerminalSquare,
  GraduationCap
} from 'lucide-react';
import { MENTOR_ORGANIZATIONS } from '../../data/credentialsData';

export default function MentorshipSection({ isHomePage = false }) {
  const renderLogo = (logoType) => {
    switch (logoType) {
      case 'microsoft':
        return <MicrosoftLogo className="h-7 w-auto" />;
      case 'amex':
        return <AmexLogo className="h-7 w-auto" />;
      case 'wipro':
        return <WiproLogo className="h-7 w-auto" />;
      case 'tcs':
        return <TcsLogo className="h-7 w-auto" />;
      case 'accenture':
        return <AccentureLogo className="h-7 w-auto" />;
      case 'eccouncil':
        return <EcCouncilLogo className="h-7 w-auto" />;
      default:
        return null;
    }
  };

  return (
    <section id="mentorship" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-slate-200/80">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-[#0284C7] text-xs font-bold mb-3 border border-sky-200">
                <Users2 className="w-3.5 h-3.5" />
                <span>Global Practitioner Network</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0B192C] tracking-tight">
                Our Industry Mentorship Network.
              </h2>
              <p className="mt-3 text-base text-slate-600 max-w-3xl leading-relaxed">
                High-school students are guided, evaluated, and reviewed by experienced engineering practitioners and technology leaders currently working at global industry organizations.
              </p>
            </div>

            {isHomePage && (
              <Button
                href="/credentials#mentorship"
                variant="primary"
                size="sm"
                icon={ArrowRight}
                className="shrink-0 self-start md:self-auto shadow-sm"
              >
                View Mentorship Standards
              </Button>
            )}
          </div>

          {/* Authentic Relationship Clarification Callout */}
          <div className="mb-10 p-5 sm:p-6 rounded-2xl bg-[#F0F9FF] border border-[#0284C7]/20 flex items-start gap-4">
            <Info className="w-5 h-5 text-[#0284C7] shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              <span className="font-bold text-[#0B192C] block text-sm sm:text-base mb-1">
                Organizations Where Our Industry Mentors Currently Work:
              </span>
              Our industry mentors currently work at leading technology and enterprise organizations including{' '}
              <strong className="text-slate-900 font-semibold">
                Microsoft, American Express, Wipro, TCS, Accenture, and EC-Council
              </strong>
              . They participate in syllabus review, conduct milestone evaluations, and provide direct feedback on student project code, architecture, and oral technical defense.
            </div>
          </div>

          {/* 6 Organization Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MENTOR_ORGANIZATIONS.map((org, idx) => (
              <div
                key={org.id}
                className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 flex flex-col justify-between h-full hover:border-[#0284C7] hover:bg-white hover:shadow-md transition-all duration-300 group"
              >
                <div>
                  {/* Logo Container */}
                  <div className="h-14 flex items-center justify-between border-b border-slate-200/80 pb-4">
                    <div className="py-1">
                      {renderLogo(org.logoType)}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-white px-2 py-0.5 rounded border border-slate-200">
                      Practitioner Base
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="mt-4 space-y-2">
                    <span className="text-[11px] font-bold text-[#0284C7] block">
                      {org.domain}
                    </span>
                    <h3 className="font-display font-bold text-base text-[#0B192C]">
                      Mentors from {org.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {org.description}
                    </p>
                  </div>
                </div>

                {/* Footer Tag */}
                <div className="mt-5 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px]">
                  <span className="font-semibold text-slate-600 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Technical Defense Panel</span>
                  </span>
                  <span className="text-slate-400">Oral Review</span>
                </div>
              </div>
            ))}
          </div>

          {/* 3 Pillars of Practitioner Engagement */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#0284C7] mb-3">
                <TerminalSquare className="w-4 h-4" />
              </div>
              <h4 className="font-display font-bold text-sm text-[#0B192C]">
                Rigorous Code Audits
              </h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Mentors inspect student GitHub repositories for modular architecture, prompt security, and testing hygiene.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-emerald-600 mb-3">
                <Award className="w-4 h-4" />
              </div>
              <h4 className="font-display font-bold text-sm text-[#0B192C]">
                Formal Oral Defense
              </h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Students present and defend their capstone builds before experienced industry professionals before graduation.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-indigo-600 mb-3">
                <GraduationCap className="w-4 h-4" />
              </div>
              <h4 className="font-display font-bold text-sm text-[#0B192C]">
                ATS-Ready Technical Resumes
              </h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Mentors help high-schoolers translate raw project hours into clear, credible bullet points for university dossiers.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
