import React, { useState } from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import {
  PARTNERSHIP_STEPS,
  SCHOOL_DELIVERABLES,
  SCHOOL_FAQS,
  COMPANY
} from '../data/content';
import {
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  Laptop,
  Users,
  Calendar,
  Layers,
  Sparkles,
  ShieldCheck,
  Award,
  Phone
} from 'lucide-react';

export default function ForSchools() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const OUTCOMES = [
    {
      title: 'Elevated Student Engagement',
      desc: 'Students transition from passive consumer screen time to proactive prompt architecture, problem solving, and building scientific prototypes.'
    },
    {
      title: 'Documented Academic Path',
      desc: 'A structured 24-session curriculum mapped to CBSE, ICSE, and State Board guidelines with zero disruption to regular board preparation.'
    },
    {
      title: 'Institutional Preeminence',
      desc: 'Brand your school as an AI-Ready Institution. Attract forward-thinking parents who prioritize future-readiness over rote coaching.'
    },
    {
      title: 'Zero Faculty Workload',
      desc: 'UpMentor provides trained mentors, printed student workbooks, and automated evaluation rubrics. Your teachers observe and upskill without administrative burden.'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Leadership Hero */}
      <section className="pt-24 pb-20 sm:pt-30 sm:pb-28 bg-[#F8FAFC] border-b border-slate-200/80 pattern-grid">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-[#0284C7] text-xs font-bold mb-6 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-[#10B981]" />
              <span>For Principals, Trustees &amp; School Management</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-[#0B192C] tracking-tight leading-[1.12]">
              Turn your campus into an <br />
              <span className="italic font-normal text-[#0284C7]">AI-Ready Institution.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Equip your students with verifiable AI literacy. UpMentor provides the turnkey curriculum, printed workbooks, industry mentors, and rigorous capstone evaluation rubrics.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                icon={ArrowRight}
                className="shadow-md"
              >
                Book a Free School Demo
              </Button>
              <Button
                onClick={() => {
                  document.getElementById('partnership-steps')?.scrollIntoView({ behavior: 'smooth' });
                }}
                variant="secondary"
                size="lg"
              >
                View Partnership Process
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Board Alignment Banner */}
      <div className="bg-white border-b border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <span className="font-display font-bold text-base text-[#0B192C]">
                Boards Supported Across Odisha &amp; India:
              </span>
              <span className="text-xs text-slate-500 block sm:inline sm:ml-2">
                Curriculum mapped to NEP 2020 and future-ready frameworks
              </span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
              {['CBSE Affiliated', 'ICSE / ISC Boards', 'Odisha State Board', 'Autonomous Colleges'].map((b) => (
                <span
                  key={b}
                  className="px-3 py-1 rounded-md bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Why Schools Partner With UpMentor (4 Outcomes) */}
      <Section
        numeral="01 / Institutional Value"
        badge="Measurable Outcomes"
        title="Why Academic Leaders Partner With UpMentor."
        subtitle="Tangible intellectual growth that enhances school reputation and parent trust."
        bg="default"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {OUTCOMES.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.1}>
              <Card className="h-full flex flex-col justify-between" tint="white">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rounded-lg bg-[#F0F9FF] text-[#0284C7] flex items-center justify-center font-bold text-sm">
                      {idx + 1}
                    </span>
                    <h3 className="font-display font-bold text-xl text-[#0B192C]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Delivery Format Specs */}
      <Section
        numeral="02 / Operational Blueprint"
        badge="Classroom Delivery Format"
        title="Designed for Academic Schedules."
        subtitle="Seamless integration into existing computer labs with zero disruption to core board exams."
        bg="white"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Reveal delay={0.1}>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 h-full">
              <Calendar className="w-8 h-8 text-[#0284C7] mb-4" />
              <h4 className="font-display font-bold text-lg text-[#0B192C]">Flexible Timetable Format</h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Scheduled during regular computer periods, activity periods, or dedicated weekend lab blocks.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 h-full">
              <Users className="w-8 h-8 text-[#10B981] mb-4" />
              <h4 className="font-display font-bold text-lg text-[#0B192C]">Small Cohort Mentorship</h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Trained UpMentor instructors manage student batches ensuring individual context engineering review.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 h-full">
              <Laptop className="w-8 h-8 text-[#0284C7] mb-4" />
              <h4 className="font-display font-bold text-lg text-[#0B192C]">Standard Lab Laptops</h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Runs on standard school computer systems and modern web browsers. No expensive GPU servers needed.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 h-full">
              <Layers className="w-8 h-8 text-[#0B192C] mb-4" />
              <h4 className="font-display font-bold text-lg text-[#0B192C]">Phase Sprints</h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Graduates progress from Cognition to Real Client Sprints to live verified graduation portfolios.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* The 5-Step Partnership Model */}
      <Section
        id="partnership-steps"
        numeral="03 / Roadmap"
        badge="Structured Rollout"
        title="The School Partnership Model."
        highlight="Step by Step."
        subtitle="A clear, documented transition process from first leadership conversation to final student certification."
        bg="default"
      >
        <div className="space-y-4 max-w-4xl mx-auto">
          {PARTNERSHIP_STEPS.map((step, idx) => (
            <Reveal key={step.step} delay={idx * 0.08}>
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-xs flex flex-col sm:flex-row items-start sm:items-center gap-5 transition-all hover:border-[#0284C7]">
                <div className="w-12 h-12 rounded-xl bg-[#F0F9FF] text-[#0284C7] border border-[#0284C7]/20 flex items-center justify-center font-mono font-bold text-lg shrink-0">
                  {step.step}
                </div>
                <div className="grow">
                  <h3 className="font-display font-bold text-lg text-[#0B192C]">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="hidden sm:block shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* What the School Receives (Checklist / Table) */}
      <Section
        numeral="04 / Institutional Deliverables"
        badge="Included in Partnership"
        title="What Your School Receives."
        subtitle="Everything needed for a gold-standard academic deployment."
        bg="white"
      >
        <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-white">
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-slate-400">
                    Institutional Asset
                  </th>
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-slate-400">
                    Specification &amp; Description
                  </th>
                  <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-slate-400 text-right">
                    Inclusion
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                {SCHOOL_DELIVERABLES.map((row, idx) => (
                  <tr key={row.item} className="hover:bg-white transition-colors">
                    <td className="py-4 px-6 font-display font-bold text-[#0B192C]">
                      {row.item}
                    </td>
                    <td className="py-4 px-6 text-slate-600 text-xs sm:text-sm">
                      {row.desc}
                    </td>
                    <td className="py-4 px-6 text-right">
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Provided Turnkey
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* FAQ Accordion for Management */}
      <Section
        id="school-faqs"
        numeral="05 / Management FAQs"
        badge="Clarity & Governance"
        title="Frequently Asked Questions."
        highlight="For School Principals &amp; Trustees."
        subtitle="Addressing operational considerations, teacher engagement, timing, and data security."
        bg="default"
      >
        <div className="max-w-3xl mx-auto space-y-4">
          {SCHOOL_FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={faq.q}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 font-display font-bold text-base sm:text-lg text-[#0B192C] hover:text-[#0284C7] focus:outline-none cursor-pointer transition-colors duration-200 group"
                >
                  <span className="flex items-center gap-3.5">
                    <span
                      className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-200 shrink-0 ${
                        isOpen
                          ? 'bg-[#0284C7] text-white shadow-xs'
                          : 'bg-sky-50 text-[#0284C7] group-hover:bg-sky-100'
                      }`}
                    >
                      <HelpCircle className="w-4 h-4" />
                    </span>
                    <span className="transition-colors group-hover:text-[#0284C7]">{faq.q}</span>
                  </span>
                  <span
                    className={`w-8 h-8 rounded-xl flex items-center justify-center border transition-all duration-200 shrink-0 ${
                      isOpen
                        ? 'bg-sky-100 text-[#0284C7] border-sky-200 rotate-180'
                        : 'bg-slate-50 text-slate-400 border-slate-200 group-hover:text-slate-600 group-hover:border-slate-300'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-600 border-t border-slate-100 leading-relaxed bg-[#F8FAFC]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Section>

      {/* Final Action */}
      <section className="py-20 bg-white border-t border-slate-200 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0B192C] tracking-tight">
              Request a free demo session for your leadership team.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              We conduct a 45-minute on-campus or virtual masterclass showcasing our practical modules and live student exercises.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                icon={ArrowRight}
                className="shadow-md"
              >
                Book a Free School Demo
              </Button>
              <Button
                href={`tel:${COMPANY.contact.rawPhones[0]}`}
                variant="secondary"
                size="lg"
                icon={Phone}
                iconPosition="left"
                className="shadow-xs"
              >
                Call: {COMPANY.contact.phones[0]}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
