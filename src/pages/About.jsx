import React from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import { COMPANY, VISION_ROADMAP } from '../data/content';
import { ArrowRight, CheckCircle2, Shield, Brain, Target, Building2, Sparkles } from 'lucide-react';

export default function About() {
  const VALUES = [
    {
      title: 'Responsible AI',
      desc: 'Instilling ethical restraint, bias vigilance, and data privacy before allowing automated generation.',
      icon: Shield
    },
    {
      title: 'Critical Thinking',
      desc: 'Teaching students to rigorously interrogate AI outputs rather than accepting answers passively.',
      icon: Brain
    },
    {
      title: 'Practical Outcomes',
      desc: 'Evaluating student progress strictly on functional prototypes, live portfolios, and verified workbooks.',
      icon: Target
    },
    {
      title: 'School-First Governance',
      desc: 'Designing every lesson to integrate within formal school timetables without burdening existing faculty.',
      icon: Building2
    }
  ];

  const DIFFERENTIATORS = [
    {
      num: '01',
      title: 'Infrastructure, Not One-Off Workshops',
      desc: 'Typical vendors run 2-hour robotic or scratch coding demonstrations that vanish the following Monday. UpMentor embeds a complete 8-week institutional system with printed student workbooks, lesson pacing, and faculty alignment.'
    },
    {
      num: '02',
      title: 'Cognition Before Code',
      desc: 'Most coding platforms teach syntax that LLMs can generate in three seconds. We teach prompt architecture, context engineering, source cross-examination, and mathematical intuition—skills that stay relevant for decades.'
    },
    {
      num: '03',
      title: 'Real Industry Client Sprints',
      desc: 'During Phase II, students tackle genuine operational problems assigned by real commercial partners. They experience true team deadlines, client feedback, and professional problem solving.'
    },
    {
      num: '04',
      title: 'Verifiable Proof of Capability',
      desc: 'No empty certificates of participation. Every UpMentor graduate carries an evaluated engineering dossier, an ATS-compliant resume, and a public GitHub/web portfolio.'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Editorial Header */}
      <section className="pt-16 pb-20 sm:pt-24 sm:pb-28 bg-[#F8FAFC] border-b border-slate-200/80 pattern-grid">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0F9FF] border border-[#0284C7]/20 text-[#0284C7] text-xs font-bold mb-6">
              About UpMentor Edutech Pvt. Ltd.
            </div>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-[#0B192C] tracking-tight leading-[1.12]">
              A future-readiness company. <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#0284C7]">Not another certification platform.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We partner with CBSE, ICSE, and State Board schools across Odisha and India to turn classrooms into AI-ready institutions. We build intellectual capability that outlasts ephemeral software trends.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Vision & Mission: Two Large Editorial Blocks */}
      <Section
        numeral="01 / Foundation"
        badge="Institutional Purpose"
        title="Our Vision &amp; Mission."
        subtitle="Creating the benchmark for Indian AI education before students enter higher education or the global workforce."
        bg="white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Reveal delay={0.1}>
            <div className="bg-[#F8FAFC] border-2 border-slate-200/90 rounded-2xl p-8 sm:p-10 h-full flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0284C7] block mb-3">
                  The Vision
                </span>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0B192C] mb-4">
                  Make every Indian student AI-literate before college or work.
                </h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  We envision an India where high-schoolers from every tier of town possess the cognitive fluency to orchestrate artificial intelligence responsibly, competitively, and creatively—establishing UpMentor as India's trusted standard education partner.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-200 flex items-center gap-2 text-xs font-bold text-[#0284C7]">
                <span>Standardised across Odisha and Nationally</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="bg-[#F0FDF4]/60 border-2 border-emerald-200/80 rounded-2xl p-8 sm:p-10 h-full flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#059669] block mb-3">
                  The Mission
                </span>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0B192C] mb-4">
                  Turn schools into AI-ready institutions, not coding clubs.
                </h3>
                <p className="text-slate-700 text-base leading-relaxed">
                  We deliver structured, turnkey AI literacy infrastructure directly inside school campuses. We provide physical workbooks, rigorous evaluation rubrics, certified classroom mentors, and verified digital credentials with zero operational friction for school leadership.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-emerald-200/60 flex items-center gap-2 text-xs font-bold text-[#059669]">
                <span>School-First • Teacher-Aligned • Output-Driven</span>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* What Actually Sets UpMentor Apart (4 Points) */}
      <Section
        numeral="02 / Differentiators"
        badge="Distinct Architecture"
        title="What Actually Sets UpMentor Apart."
        subtitle="Why school trustees and principals choose our structured infrastructure over traditional workshop vendors."
        bg="default"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {DIFFERENTIATORS.map((diff, idx) => (
            <Reveal key={diff.num} delay={idx * 0.1}>
              <Card className="h-full" tint="white">
                <span className="font-mono text-xs font-bold text-[#0284C7] bg-[#F0F9FF] px-2.5 py-1 rounded border border-[#0284C7]/20">
                  {diff.num}
                </span>
                <h3 className="font-display font-bold text-xl text-[#0B192C] mt-4 mb-2">
                  {diff.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {diff.desc}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Our Approach: Cognition -> Production -> Identity (Visual Process) */}
      <Section
        numeral="03 / Methodology"
        badge="The Pedagogical Engine"
        title="Our Three-Phase Process."
        highlight="From Mental Model to Identity."
        subtitle="A deliberate learning progression designed to instill deep intellectual resilience."
        bg="white"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <Reveal delay={0.1}>
            <div className="relative p-6 sm:p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200 h-full">
              <span className="font-mono text-3xl font-extrabold text-[#0284C7] block mb-2">
                01
              </span>
              <span className="text-xs uppercase font-bold tracking-wider text-[#0284C7] bg-[#F0F9FF] px-2.5 py-1 rounded">
                Cognition
              </span>
              <h3 className="font-display font-bold text-2xl text-[#0B192C] mt-4 mb-2">
                Thinking With AI
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Deconstructing how models reason. Mastering few-shot prompts, chain-of-thought logic, hallucination detection, and context engineering.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="relative p-6 sm:p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200 h-full">
              <span className="font-mono text-3xl font-extrabold text-[#10B981] block mb-2">
                02
              </span>
              <span className="text-xs uppercase font-bold tracking-wider text-[#059669] bg-emerald-50 px-2.5 py-1 rounded">
                Production
              </span>
              <h3 className="font-display font-bold text-2xl text-[#0B192C] mt-4 mb-2">
                Real Client Sprint
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Applying models to science research, humanities synthesis, and live corporate problem statements under an industry mentor's supervision.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="relative p-6 sm:p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200 h-full">
              <span className="font-mono text-3xl font-extrabold text-[#0B192C] block mb-2">
                03
              </span>
              <span className="text-xs uppercase font-bold tracking-wider text-slate-700 bg-slate-100 px-2.5 py-1 rounded">
                Identity
              </span>
              <h3 className="font-display font-bold text-2xl text-[#0B192C] mt-4 mb-2">
                Verifiable Assets
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Publishing a live public project portfolio, defending client sprint capstones, and developing an ethical, AI-proof personal brand.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Values Strip */}
      <Section
        numeral="04 / Core Values"
        badge="Operating Principles"
        title="What Guides Our Work."
        subtitle="Uncompromising academic standards that separate UpMentor from commercial edtech hype."
        bg="default"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((val, idx) => {
            const Icon = val.icon;
            return (
              <Reveal key={val.title} delay={idx * 0.1}>
                <Card className="h-full flex flex-col justify-between" tint="white">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#0B192C] flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[#0284C7]" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-[#0B192C] mb-2">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Easy-to-fill, commented-out founders/team block as explicitly requested */}
      {/* 
      ========================================================================
      FOUNDERS & LEADERSHIP TEAM SECTION (Uncomment and customize as needed)
      ========================================================================
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="font-mono text-xs uppercase tracking-wider text-[#0284C7] font-semibold bg-[#F0F9FF] px-2.5 py-1 rounded-md">
              05 / Leadership
            </span>
            <h2 className="text-3xl font-extrabold text-[#0B192C] mt-3">Founding Team &amp; Academic Advisory</h2>
            <p className="text-slate-600 mt-2">Built by engineers, educators, and researchers committed to Indian future-readiness.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <div className="aspect-square bg-slate-200 rounded-xl mb-4 overflow-hidden">
                <img src="/team/founder-1.jpg" alt="Founder" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-lg text-[#0B192C]">Founder Name</h3>
              <p className="text-xs text-[#0284C7] font-semibold">Chief Executive &amp; AI Architect</p>
              <p className="text-xs text-slate-600 mt-2">Background in robotics, large language models, and secondary curriculum design.</p>
            </div>
            
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <div className="aspect-square bg-slate-200 rounded-xl mb-4 overflow-hidden">
                <img src="/team/academic-head.jpg" alt="Academic Head" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-lg text-[#0B192C]">Academic Lead Name</h3>
              <p className="text-xs text-[#0284C7] font-semibold">Head of Pedagogy &amp; Institutional Governance</p>
              <p className="text-xs text-slate-600 mt-2">Former CBSE curriculum advisor with 15+ years in secondary education leadership.</p>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* CTA Section */}
      <section className="py-20 bg-white border-t border-slate-200 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0B192C] tracking-tight">
              Bring UpMentor to your campus.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              We work directly with school principals, trustees, and management committees across Odisha and India.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                icon={ArrowRight}
                className="shadow-md"
              >
                Book a School Demo
              </Button>
              <Button to="/for-schools" variant="secondary" size="lg">
                Explore School Partnership Details
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
