import React from 'react';
import Reveal from '../Reveal';
import Button from '../Button';
import {
  RidoxyLogo,
  AnvPyLogo,
  OctaNetLogo,
  SahnarLogo
} from '../BrandLogos';
import {
  Layers,
  Sparkles,
  ArrowRight,
  Cpu,
  Terminal,
  Network,
  Code2
} from 'lucide-react';
import { INDUSTRY_COLLABORATIONS } from '../../data/credentialsData';

export default function CollaborationsSection({ isHomePage = false }) {
  const getCollabIcon = (id) => {
    switch (id) {
      case 'ridoxy':
        return Cpu;
      case 'anvpy':
        return Terminal;
      case 'octanet':
        return Network;
      case 'sahnar':
        return Code2;
      default:
        return Layers;
    }
  };

  const renderLogo = (logoType) => {
    switch (logoType) {
      case 'ridoxy':
        return <RidoxyLogo className="h-9 w-auto" />;
      case 'anvpy':
        return <AnvPyLogo className="h-9 w-auto" />;
      case 'octanet':
        return <OctaNetLogo className="h-9 w-auto" />;
      case 'sahnar':
        return <SahnarLogo className="h-9 w-auto" />;
      default:
        return null;
    }
  };

  return (
    <section id="collaborations" className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-slate-200/80">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0284C7]/10 text-[#0284C7] text-xs font-bold mb-3 border border-[#0284C7]/20">
                <Layers className="w-3.5 h-3.5" />
                <span>Technical Ecosystem &amp; Industry Input</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0B192C] tracking-tight">
                Industry Collaborations.
              </h2>
              <p className="mt-3 text-base text-slate-600 max-w-3xl leading-relaxed">
                We collaborate with specialized aviation, software compilation, and network infrastructure firms to give secondary school students exposure to real industrial hardware, flight telemetry, and production codebases.
              </p>
            </div>

            {isHomePage && (
              <Button
                href="/credentials#collaborations"
                variant="secondary"
                size="sm"
                icon={ArrowRight}
                className="shrink-0 self-start md:self-auto"
              >
                Explore Technical Tracks
              </Button>
            )}
          </div>

          {/* 4 Collaborations Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {INDUSTRY_COLLABORATIONS.map((collab, idx) => {
              const IconComp = getCollabIcon(collab.id);

              return (
                <div
                  key={collab.id}
                  className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full shadow-xs hover:shadow-xl hover:border-[#0284C7]/50 transition-all duration-300 group"
                >
                  <div>
                    {/* Logo & Category Bar */}
                    <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                      <div className="py-1">
                        {renderLogo(collab.logoType)}
                      </div>
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200">
                        Industry Collaboration
                      </span>
                    </div>

                    {/* Domain & Focus */}
                    <div className="mt-5 space-y-3">
                      <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284C7] bg-[#F0F9FF] px-2.5 py-1 rounded-md border border-[#0284C7]/20">
                        <IconComp className="w-3.5 h-3.5" />
                        <span>{collab.domain}</span>
                      </div>

                      <h3 className="font-display font-bold text-lg text-[#0B192C]">
                        {collab.name}
                      </h3>

                      <p className="text-sm text-slate-600 leading-relaxed">
                        {collab.focus}
                      </p>

                      <div className="mt-4 p-4 rounded-xl bg-[#F8FAFC] border border-slate-100 text-xs">
                        <span className="font-bold text-slate-800 block mb-1">
                          Practical Collaboration Scope:
                        </span>
                        <p className="text-slate-600 leading-relaxed">
                          {collab.collaborationScope}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1.5 font-medium text-slate-700">
                      <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
                      <span>Live Problem Sprints</span>
                    </span>
                    <span className="text-slate-400 font-medium">Applied Engineering Input</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Neutral Clarity Note */}
          <div className="mt-8 text-center">
            <span className="inline-block text-xs text-slate-400 bg-white border border-slate-200 px-4 py-1.5 rounded-full">
              Industry collaborations provide technical curriculum input, hardware benchmarks, and simulated project problem statements.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
