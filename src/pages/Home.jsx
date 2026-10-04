import React, { useState } from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import Hero from '../components/Hero';
import LightboxModal from '../components/LightboxModal';
import RecognitionsSection from '../components/sections/RecognitionsSection';
import CollaborationsSection from '../components/sections/CollaborationsSection';
import MentorshipSection from '../components/sections/MentorshipSection';
import { GALLERY_IMAGES } from '../data/assets';
import {
  COMPANY,
  STATS,
  MARQUEE_ITEMS,
  POSITIONING_BENTO,
  AILA_PHASES,
  STUDENT_DELIVERABLES,
  TESTIMONIALS,
  VISION_ROADMAP,
  TECHNICAL_CAPABILITIES
} from '../data/content';
import {
  ArrowRight,
  Award,
  BookOpen,
  FileText,
  Sparkles,
  CheckCircle2,
  ExternalLink,
  Terminal,
  Compass,
  Cpu,
  Code2,
  Check,
  Copy,
  Briefcase
} from 'lucide-react';

export default function Home() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const [activeCapabilityIndex, setActiveCapabilityIndex] = useState(0);
  const [copiedCode, setCopiedCode] = useState(false);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleCopyCode = (codeText) => {
    navigator.clipboard?.writeText(codeText);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="overflow-hidden">
      {/* REDESIGNED HERO SECTION */}
      <Hero />

      {/* STATS STRIP */}
      <section className="bg-white border-b border-slate-200 py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {STATS.map((stat, idx) => (
              <Reveal key={stat.label} delay={idx * 0.1}>
                <div className="border-l-2 border-[#0284C7] pl-4 sm:pl-6">
                  <div className="font-display font-extrabold text-3xl sm:text-4xl text-[#0B192C] tracking-tight">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-sm font-semibold text-slate-800 mt-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    {stat.highlight}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TRUSTED-BY MARQUEE */}
      <div className="bg-[#F8FAFC] border-b border-slate-200 py-4 overflow-hidden select-none">
        <div className="flex items-center gap-8 animate-marquee whitespace-nowrap">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <div key={i} className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-500">
              <span>{item}</span>
              <span className="text-[#0284C7] font-normal">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* RECOGNITIONS, COLLABORATIONS & MENTORSHIP SECTIONS */}
      <RecognitionsSection isHomePage={true} />
      <CollaborationsSection isHomePage={true} />
      <MentorshipSection isHomePage={true} />

      {/* 01 / POSITIONING: BENTO GRID */}
      <Section
        id="positioning"
        numeral="01 / Positioning"
        badge="Category Redefinition"
        title="Not Another Coding Company."
        highlight="We install AI infrastructure."
        subtitle="Schools buy outcomes, not courses. UpMentor is a new institutional category designed to turn standard classrooms into future-ready intelligence hubs."
        bg="default"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {POSITIONING_BENTO.map((item, idx) => (
            <Reveal key={item.numeral} delay={idx * 0.1} className={item.gridSpan}>
              <Card
                className="h-full flex flex-col justify-between"
                tint={idx === 0 ? 'white' : idx === 3 ? 'blue' : 'white'}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-[#0284C7] bg-[#F0F9FF] px-2.5 py-1 rounded border border-[#0284C7]/20">
                      {item.numeral}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-[#0B192C] tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#0284C7]">
                    {item.tag}
                  </span>
                  <span className="text-xs text-slate-400">UpMentor Standard</span>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 02 / AILA PROGRAM TIMELINE */}
      <Section
        id="aila-curriculum"
        numeral="02 / The Curriculum"
        badge="Flagship Architecture"
        title="AILA: The AI Literacy Accelerator."
        highlight="24 Sessions. 8 Weeks. 3 Phases."
        subtitle="A rigorous multi-week progression moving students systematically from foundational cognitive intuition to real production sprints and portfolio identity."
        bg="white"
      >
        {/* Phase selector tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {AILA_PHASES.map((p, idx) => {
            const isActive = activePhaseIndex === idx;
            return (
              <button
                key={p.phase}
                type="button"
                onClick={() => setActivePhaseIndex(idx)}
                className={`relative p-5 rounded-2xl text-left border transition-all duration-200 cursor-pointer overflow-hidden active:scale-[0.98] ${
                  isActive
                    ? 'border-[#0284C7] bg-white shadow-[0_4px_16px_rgba(2,132,199,0.12),0_1px_3px_rgba(0,0,0,0.05)] ring-2 ring-[#0284C7]/20 -translate-y-0.5'
                    : 'border-slate-200/90 bg-white/70 hover:bg-white hover:border-slate-300 hover:shadow-xs text-slate-700'
                }`}
              >
                {isActive && (
                  <span className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0284C7] to-[#38BDF8]" />
                )}
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                      isActive
                        ? 'text-[#0284C7] bg-[#F0F9FF] border border-[#0284C7]/20'
                        : 'text-slate-500 bg-slate-100'
                    }`}
                  >
                    {p.phase}
                  </span>
                  <span className="text-[11px] text-slate-400 font-semibold">8 Sessions</span>
                </div>
                <div className="font-display font-bold text-lg text-[#0B192C]">
                  {p.title}
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  {idx === 0 ? 'Cognition & Context' : idx === 1 ? 'Client Sprint & Internship' : 'Portfolio & Identity'}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Phase Detail View */}
        <div className="bg-[#F8FAFC] border border-slate-200/90 rounded-2xl p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0284C7]/10 text-[#0284C7] text-xs font-bold">
                {AILA_PHASES[activePhaseIndex].phase} Framework
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0B192C]">
                {AILA_PHASES[activePhaseIndex].title}
              </h3>
              <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                {AILA_PHASES[activePhaseIndex].duration}
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                {AILA_PHASES[activePhaseIndex].summary}
              </p>
              <div className="pt-2">
                <span className="inline-block text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-lg">
                  {AILA_PHASES[activePhaseIndex].outcomeBadge}
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                Core Module Syllabus
              </h4>
              <ul className="space-y-3">
                {AILA_PHASES[activePhaseIndex].curriculum.map((topic, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-[#F0F9FF] text-[#0284C7] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* 03 / CLASSROOM GALLERY (Real Photos mapped over folder) */}
      <Section
        id="classroom-gallery"
        numeral="03 / Field Proof"
        badge="From the Classroom"
        title="Real Classrooms. Real Sprints."
        highlight="No stock visuals."
        subtitle="A look into our on-ground cohorts, student defense showcases, and autonomous flight labs across partner campuses in Odisha."
        bg="default"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((img, idx) => (
            <Reveal key={img.id} delay={idx * 0.08}>
              <div
                onClick={() => openLightbox(idx)}
                className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col h-full"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                    {img.category}
                  </div>
                </div>
                <div className="p-5 flex flex-col justify-between grow">
                  <div>
                    <h3 className="font-display font-bold text-base text-[#0B192C] group-hover:text-[#0284C7] transition-colors">
                      {img.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                      {img.caption}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0284C7]">
                    <span>View full photo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 04 / APPLIED CAPABILITIES & TECHNICAL STACK (AUTHENTIC REDESIGN) */}
      <Section
        id="capabilities"
        numeral="04 / Applied Capabilities"
        badge="Authentic Technical Mastery"
        title="Engineering Capabilities & Technical Stack."
        highlight="Built in code and hardware. Not fake paper."
        subtitle="We evaluate future-readiness by what students can build, debug, and defend. Explore the core competencies, hardware toolchains, and AI frameworks mastered across the 24 sessions."
        bg="white"
      >
        {/* Interactive Capability Selector Tabs */}
        <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-2xl mb-8 overflow-x-auto no-scrollbar">
          {TECHNICAL_CAPABILITIES.map((cap, idx) => {
            const tabIcons = [Terminal, Compass, Cpu, Code2];
            const Icon = tabIcons[idx] || Terminal;
            const isActive = activeCapabilityIndex === idx;
            return (
              <button
                key={cap.id}
                onClick={() => setActiveCapabilityIndex(idx)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                  isActive
                    ? 'bg-white text-[#0B192C] shadow-sm font-bold border border-slate-200/80'
                    : 'text-slate-600 hover:text-[#0B192C] hover:bg-white/60'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#0284C7]' : 'text-slate-400'}`} />
                <span>{cap.tabName}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Capability Interactive Deck */}
        {(() => {
          const cap = TECHNICAL_CAPABILITIES[activeCapabilityIndex];
          return (
            <div className="bg-[#F8FAFC] border border-slate-200/90 rounded-2xl p-6 sm:p-8 lg:p-10 mb-8 shadow-xs">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                {/* Left: Capability Details */}
                <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0284C7]/10 text-[#0284C7] text-xs font-bold mb-3">
                      {cap.badge}
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0B192C] tracking-tight">
                      {cap.title}
                    </h3>
                    <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                      {cap.summary}
                    </p>
                  </div>

                  {/* Core Applied Skills */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7]" />
                      <span>Demonstrated Proficiencies</span>
                    </h4>
                    <ul className="space-y-2">
                      {cap.coreSkills.map((skill, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] mt-2 shrink-0" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Toolchain & Deliverable */}
                  <div className="pt-4 border-t border-slate-200 space-y-3">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                        Toolchain &amp; Technologies
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {cap.toolchain.map((tool) => (
                          <span
                            key={tool}
                            className="px-2.5 py-1 rounded-md text-xs font-medium bg-white text-slate-700 border border-slate-200 shadow-2xs"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200 text-xs text-emerald-900">
                      <span className="font-bold block text-emerald-950 mb-0.5">Tangible Student Artifact:</span>
                      {cap.studentDeliverable}
                    </div>
                  </div>
                </div>

                {/* Right: Interactive Code / Architectural Inspector */}
                <div className="lg:col-span-6 flex flex-col">
                  <div className="bg-[#0B192C] text-slate-200 rounded-xl overflow-hidden border border-slate-800 shadow-xl flex flex-col h-full font-mono text-xs">
                    {/* Header bar */}
                    <div className="px-4 py-3 bg-[#081220] border-b border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                        <span className="text-[11px] text-slate-400 ml-2 font-mono">
                          {cap.id}.spec
                        </span>
                      </div>
                      <button
                        onClick={() => handleCopyCode(cap.sampleCode)}
                        className="flex items-center gap-1.5 text-[11px] text-slate-400 hover:text-white px-2.5 py-1 rounded bg-slate-800/60 hover:bg-slate-800 transition-colors cursor-pointer"
                        title="Copy snippet"
                      >
                        {copiedCode ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-400 font-semibold">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Code Body */}
                    <div className="p-4 sm:p-5 overflow-x-auto text-[11px] sm:text-xs leading-relaxed text-slate-300 grow flex flex-col justify-between">
                      <pre className="font-mono">
                        <code>{cap.sampleCode}</code>
                      </pre>
                      
                      <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
                        <span className="flex items-center gap-1.5 text-emerald-400 font-sans font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Validated in 2026 Academic Cohorts
                        </span>
                        <span className="font-sans">UpMentor Engineering Standard</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}

        {/* 4 Bottom Value Highlights */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="p-4 rounded-xl bg-white border border-slate-200">
            <span className="font-display font-extrabold text-xl text-[#0B192C] block">24 Sessions</span>
            <span className="text-xs text-slate-500 mt-1 block">Integrated inside standard school timetable</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200">
            <span className="font-display font-extrabold text-xl text-[#0284C7] block">Physical Hardware</span>
            <span className="text-xs text-slate-500 mt-1 block">Fixed-wing UAVs, sensor mesh &amp; microcontrollers</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200">
            <span className="font-display font-extrabold text-xl text-emerald-600 block">Standard Rubrics</span>
            <span className="text-xs text-slate-500 mt-1 block">Evaluated across 4 academic dimensions</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200">
            <span className="font-display font-extrabold text-xl text-[#0B192C] block">100% Authentic</span>
            <span className="text-xs text-slate-500 mt-1 block">GitHub repos, live prototypes &amp; oral defense</span>
          </div>
        </div>

        {/* CTA to Credentials Page */}
        <div className="text-center">
          <Button to="/credentials" variant="secondary" size="md">
            <span>Explore Full Competencies &amp; Evaluation Rubrics</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </Section>

      {/* 05 / WHAT STUDENTS WALK AWAY WITH */}
      <Section
        id="deliverables"
        numeral="05 / Outcomes"
        badge="Graduation Assets"
        title="What Students Walk Away With."
        highlight="4 Career-Defining Deliverables."
        subtitle="Unlike generic workshops that hand out empty paper slips, AILA equips high-school students with production artifacts that stand out in university admissions."
        bg="default"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STUDENT_DELIVERABLES.map((del, idx) => {
            const icons = {
              portfolio: BookOpen,
              brief: Briefcase,
              resume: FileText,
              code: Code2
            };
            const IconComp = icons[del.iconType] || BookOpen;

            return (
              <Reveal key={del.title} delay={idx * 0.1}>
                <Card className="h-full flex flex-col justify-between" tint="white">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#F0F9FF] text-[#0284C7] flex items-center justify-center mb-5">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-[#0B192C] mb-2">
                      {del.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {del.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-[#10B981]">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Included in AILA Graduation</span>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* 06 / TESTIMONIALS (Illustrative pilot conversations) */}
      <Section
        id="testimonials"
        numeral="06 / Pilot Feedback"
        badge="School Voices"
        title="What Academic Leaders Are Saying."
        highlight="Direct pilot observations."
        subtitle="Insights from educators, principals, and parents during our initial pilot cohorts across Odisha."
        bg="white"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <Reveal key={t.author} delay={idx * 0.1}>
              <Card className="h-full flex flex-col justify-between" tint="tinted">
                <div>
                  <div className="font-display text-4xl text-[#0284C7] leading-none mb-2">“</div>
                  <p className="text-slate-700 text-sm leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200">
                  <div className="font-display font-bold text-sm text-[#0B192C]">
                    {t.author}
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    {t.role} • {t.location}
                  </div>
                  <div className="mt-2 inline-block text-[11px] font-bold text-[#059669] bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                    {t.metric}
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* Mandatory Illustrative Label as requested in prompt */}
        <div className="mt-8 text-center">
          <span className="inline-block text-xs font-medium text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
            Illustrative feedback from pilot conversations
          </span>
        </div>
      </Section>

      {/* 07 / LONG-TERM ROADMAP */}
      <Section
        id="roadmap"
        numeral="07 / Vision"
        badge="Ecosystem Scale"
        title="Building India's AI Education Standard."
        highlight="The National Roadmap."
        subtitle="From school-first literacy to teacher empowerment and national research initiatives."
        bg="default"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VISION_ROADMAP.map((road, idx) => (
            <Reveal key={road.stage} delay={idx * 0.1}>
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs h-full flex flex-col justify-between">
                <div>
                  <span className="font-mono text-2xl font-bold text-slate-300 block mb-2">
                    {road.stage}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0284C7] bg-[#F0F9FF] px-2 py-0.5 rounded">
                    {road.status}
                  </span>
                  <h3 className="font-display font-bold text-base text-[#0B192C] mt-3 mb-2">
                    {road.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {road.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FINAL CTA BAND */}
      <section className="bg-white border-t border-slate-200 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold mb-4 border border-emerald-200">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Free Principal Demo Available</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#0B192C] tracking-tight">
              Ready to make your school AI-ready?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Schedule a 20-minute leadership briefing or an on-campus awareness session. Experience why CBSE and ICSE schools partner with UpMentor.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                icon={ArrowRight}
                className="shadow-md"
              >
                Book a Demo
              </Button>
              <Button to="/for-schools" variant="secondary" size="lg">
                View Partnership Options
              </Button>
            </div>
            <div className="mt-6 text-xs text-slate-500">
              Direct line: {COMPANY.contact.phones[0]} • WhatsApp: {COMPANY.contact.whatsapp}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={GALLERY_IMAGES}
        currentIndex={lightboxIndex}
        onNavigate={setLightboxIndex}
      />
    </div>
  );
}
