import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import Hero from '../components/Hero';
import LightboxModal from '../components/LightboxModal';
import HomeTrustPreview from '../components/HomeTrustPreview';
import { GALLERY_IMAGES } from '../data/assets';
import {
  COMPANY,
  STATS,
  MARQUEE_ITEMS,
  POSITIONING_BENTO,
  CORE_OFFERINGS,
  TESTIMONIALS,
  VISION_ROADMAP,
} from '../data/content';
import {
  ArrowRight,
  Award,
  Sparkles,
  CheckCircle2,
  ChevronDown,
  ExternalLink,
  Bot,
  Compass,
  ShieldCheck,
} from 'lucide-react';

const offeringIcons = {
  bot: Bot,
  drone: Compass,
  brain: Sparkles,
  shield: ShieldCheck,
};

/* Horizontal swipe rail on mobile (next card peeks in); callers turn it into a grid at md+ */
const RAIL =
  '-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6 ' +
  '[scrollbar-width:none] [&::-webkit-scrollbar]:hidden';

const EASE = [0.16, 1, 0.3, 1];

/* ---------- Compact section shell: one-line eyebrow, inline highlight, subtitle beside the title on desktop ---------- */
function Block({ id, numeral, badge, title, highlight, subtitle, white = false, children }) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 border-b border-slate-200 py-10 sm:py-14 lg:py-16 ${
        white ? 'bg-white' : 'bg-[#F8FAFC]'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <header className="mb-5 sm:mb-8 lg:flex lg:items-end lg:justify-between lg:gap-12">
            <div className="max-w-2xl">
              <div className="mb-2 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider">
                <span className="font-mono text-[#0284C7]">{numeral}</span>
                <span className="h-px w-5 bg-slate-300" />
                <span className="text-slate-500">{badge}</span>
              </div>
              <h2 className="font-display text-[26px] font-extrabold leading-[1.15] tracking-tight text-[#0B192C] sm:text-3xl lg:text-4xl">
                {title} <span className="text-[#0284C7]">{highlight}</span>
              </h2>
            </div>
            <p className="mt-2.5 max-w-md text-[13px] leading-relaxed text-slate-600 sm:text-sm lg:mt-0 lg:pb-1">
              {subtitle}
            </p>
          </header>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

export default function Home() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [activeOfferingIndex, setActiveOfferingIndex] = useState(0);
  const [modulesOpen, setModulesOpen] = useState(false);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const selectOffering = (index) => {
    setActiveOfferingIndex(index);
    setModulesOpen(false);
  };

  const active = CORE_OFFERINGS[activeOfferingIndex];
  const ActiveIcon = offeringIcons[active.iconType] || Bot;

  return (
    <div className="overflow-x-clip">
      {/* HERO */}
      <Hero />

      {/* STATS + TRUSTED-BY MARQUEE (one band) */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="grid grid-cols-2 gap-x-4 gap-y-5 lg:grid-cols-4 lg:gap-10">
            {STATS.map((stat, idx) => (
              <Reveal key={stat.label} delay={idx * 0.06}>
                <div className="border-l-2 border-[#0284C7] pl-3 sm:pl-5">
                  <div className="font-display text-2xl font-extrabold tracking-tight text-[#0B192C] sm:text-4xl">
                    {stat.value}
                    {stat.suffix}
                  </div>
                  <div className="mt-0.5 text-[13px] font-semibold leading-snug text-slate-800 sm:text-sm">
                    {stat.label}
                  </div>
                  <div className="mt-0.5 line-clamp-2 text-[11px] leading-snug text-slate-500 sm:text-xs">
                    {stat.highlight}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="select-none overflow-hidden border-t border-slate-200 bg-[#F8FAFC] py-3">
          <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap motion-reduce:animate-none">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-4 text-[11px] font-bold uppercase tracking-widest text-slate-500 sm:text-xs"
              >
                <span>{item}</span>
                <span className="font-normal text-[#0284C7]">•</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 01 / POSITIONING */}
      <Block
        id="positioning"
        numeral="01 / Positioning"
        badge="Category Redefinition"
        title="Not Another Coding Company."
        highlight="We install AI infrastructure."
        subtitle="Schools buy outcomes, not courses. UpMentor is a new institutional category designed to turn standard classrooms into future-ready intelligence hubs."
      >
        <Reveal>
          <div className={`${RAIL} md:mx-0 md:grid md:grid-cols-12 md:gap-4 md:overflow-visible md:px-0 md:pb-0`}>
            {POSITIONING_BENTO.map((item, idx) => (
              <div
                key={item.numeral}
                className={`w-[82%] shrink-0 snap-start sm:w-[55%] md:w-auto ${item.gridSpan}`}
              >
                <div
                  className={`flex h-full flex-col justify-between rounded-2xl border p-4 shadow-xs sm:p-5 ${
                    idx === 3 ? 'border-[#0284C7]/25 bg-[#F0F9FF]' : 'border-slate-200 bg-white'
                  }`}
                >
                  <div>
                    <div className="mb-3 flex items-center justify-between gap-2">
                      <span className="rounded border border-[#0284C7]/20 bg-[#F0F9FF] px-2 py-0.5 font-mono text-[11px] font-bold text-[#0284C7]">
                        {item.numeral}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 sm:text-[11px]">
                        {item.badge}
                      </span>
                    </div>
                    <h3 className="mb-1.5 font-display text-lg font-bold tracking-tight text-[#0B192C] sm:text-xl lg:text-2xl">
                      {item.title}
                    </h3>
                    <p className="text-[13px] leading-relaxed text-slate-600 sm:text-sm">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                    <span className="text-xs font-semibold text-[#0284C7]">{item.tag}</span>
                    <span className="text-[11px] text-slate-400">UpMentor Standard</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Block>

      {/* 02 / CORE OFFERINGS */}
      <Block
        id="offerings"
        numeral="02 / Core Offerings"
        badge="Institutional Programs"
        title="Four Specialized Lab Offerings."
        highlight="100% hands-on. Zero empty theory."
        subtitle="We partner with schools to establish four rigorous technological pathways—moving students from passive consumers to proactive builders across hardware, aerial robotics, intelligent models, and cyber defense."
        white
      >
        {/* Selector: swipeable pills on mobile, 4 cards on desktop */}
        <div
          role="tablist"
          aria-label="Core offerings"
          className="-mx-4 mb-3 flex gap-2 overflow-x-auto px-4 pb-1 sm:-mx-6 sm:px-6 lg:mx-0 lg:mb-5 lg:grid lg:grid-cols-4 lg:gap-4 lg:overflow-visible lg:px-0 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {CORE_OFFERINGS.map((offering, idx) => {
            const isActive = activeOfferingIndex === idx;
            const Icon = offeringIcons[offering.iconType] || Bot;
            return (
              <button
                key={offering.id}
                role="tab"
                aria-selected={isActive}
                type="button"
                onClick={() => selectOffering(idx)}
                className={`relative flex shrink-0 cursor-pointer items-center gap-2 overflow-hidden rounded-xl border px-3 py-2 text-left transition-all duration-200 active:scale-[0.98] lg:flex-col lg:items-start lg:gap-0 lg:p-4 ${
                  isActive
                    ? 'border-[#0284C7] bg-white shadow-[0_4px_16px_rgba(2,132,199,0.12)] ring-2 ring-[#0284C7]/20 lg:-translate-y-0.5'
                    : 'border-slate-200/90 bg-white/80 text-slate-700 hover:border-slate-300 hover:bg-white'
                }`}
              >
                {isActive && (
                  <span
                    className="absolute inset-x-0 top-0 h-0.5 lg:h-1"
                    style={{ backgroundColor: offering.accentColor }}
                  />
                )}
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg lg:mb-2"
                  style={{ backgroundColor: offering.accentBg, color: offering.accentColor }}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <span className="whitespace-nowrap font-display text-[13px] font-bold leading-snug text-[#0B192C] lg:whitespace-normal lg:text-base">
                  {offering.title}
                </span>
                <span className="mt-1 hidden truncate text-[11px] font-medium text-slate-500 lg:block">
                  {offering.badge}
                </span>
                <span className="absolute right-3 top-3 hidden font-mono text-[11px] font-bold text-slate-400 lg:block">
                  {offering.number}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active offering stage */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="rounded-2xl border border-slate-200/90 bg-[#F8FAFC] p-3 shadow-xs sm:p-6 lg:p-8"
          >
            <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-12 lg:gap-8">
              {/* Photo: first and compact on mobile, right column on desktop */}
              <div className="order-first lg:order-last lg:col-span-5">
                <div className="group relative aspect-[16/9] overflow-hidden rounded-xl border border-slate-200/90 bg-slate-900 shadow-md sm:aspect-[2/1] lg:aspect-auto lg:h-full lg:min-h-[340px] lg:rounded-2xl">
                  <img
                    src={active.image}
                    alt={active.imageAlt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                  <div className="absolute right-2.5 top-2.5 rounded-md border border-white/10 bg-black/60 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur-md sm:text-[11px]">
                    {active.tag}
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-3 text-white sm:p-4 lg:p-5">
                    <div className="font-mono text-[10px] uppercase tracking-wider text-slate-300 sm:text-[11px]">
                      Authentic Campus Environment
                    </div>
                    <div className="mt-0.5 hidden font-display text-base font-bold text-white sm:block lg:text-lg">
                      {active.title}
                    </div>
                    <div className="mt-1.5 flex items-center justify-between border-t border-white/15 pt-1.5 text-[10px] text-slate-300 sm:mt-2.5 sm:pt-2.5 sm:text-[11px]">
                      <span>Board Aligned: CBSE • ICSE</span>
                      <span className="font-semibold text-emerald-300">Verified On-Ground</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Narrative */}
              <div className="flex flex-col gap-4 px-1 pb-1 sm:px-0 sm:pb-0 lg:col-span-7">
                <div>
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span
                      className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-bold"
                      style={{ backgroundColor: active.accentBg, color: active.accentColor }}
                    >
                      <ActiveIcon className="h-3.5 w-3.5" />
                      <span>{active.badge}</span>
                    </span>
                    <span className="font-mono text-[11px] font-semibold text-slate-400 sm:text-xs">
                      Offering {active.number} of 04
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-extrabold tracking-tight text-[#0B192C] sm:text-2xl lg:text-3xl">
                    {active.title}
                  </h3>
                  <p className="mt-0.5 text-xs font-semibold text-[#0284C7] sm:text-sm">{active.tagline}</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-600 sm:text-sm">
                    {active.shortDesc}
                  </p>
                </div>

                {/* Modules: collapsible on mobile, always open from sm up */}
                <div>
                  <button
                    type="button"
                    onClick={() => setModulesOpen((o) => !o)}
                    aria-expanded={modulesOpen}
                    className="mb-2 flex w-full items-center justify-between sm:pointer-events-none sm:cursor-default"
                  >
                    <span className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#0284C7]" />
                      <span>Key Applied Modules &amp; Toolchain</span>
                      <span className="font-mono normal-case text-slate-400 sm:hidden">
                        · {active.highlights.length}
                      </span>
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 text-slate-400 transition-transform sm:hidden ${
                        modulesOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <ul
                    className={`${modulesOpen ? 'grid' : 'hidden'} grid-cols-1 gap-2 sm:grid sm:grid-cols-2`}
                  >
                    {active.highlights.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 rounded-lg border border-slate-200/80 bg-white/70 p-2 text-xs text-slate-700 sm:text-[13px]"
                      >
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: active.accentColor }}
                        />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Artifact + actions */}
                <div className="space-y-3 border-t border-slate-200 pt-3 sm:pt-4">
                  <div className="flex items-start gap-2.5 rounded-xl border border-emerald-200 bg-emerald-50/90 p-3 text-xs text-emerald-900">
                    <Award className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
                    <div>
                      <span className="mb-0.5 block font-bold text-emerald-950">
                        Demonstrated Student Artifact:
                      </span>
                      <span className="leading-snug">{active.deliverable}</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center">
                    <Button
                      to="/contact"
                      variant="primary"
                      size="md"
                      icon={ArrowRight}
                      className="w-full justify-center shadow-sm sm:w-auto"
                    >
                      Book Demo for {active.title}
                    </Button>
                    <Button
                      to="/for-schools"
                      variant="secondary"
                      size="md"
                      className="w-full justify-center sm:w-auto"
                    >
                      Explore Campus Setup
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </Block>

      {/* 03 / CLASSROOM GALLERY */}
      <Block
        id="classroom-gallery"
        numeral="03 / Field Proof"
        badge="From the Classroom"
        title="Real Classrooms. Real Sprints."
        highlight="No stock visuals."
        subtitle="A look into our on-ground cohorts, student defense showcases, and autonomous flight labs across partner campuses in Odisha."
      >
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
          {GALLERY_IMAGES.map((img, idx) => (
            <Reveal key={img.id} delay={(idx % 3) * 0.06}>
              <button
                type="button"
                onClick={() => openLightbox(idx)}
                className="group flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-xl border border-slate-200 bg-white text-left shadow-sm transition-all duration-300 hover:shadow-lg sm:rounded-2xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute right-2 top-2 rounded-md bg-black/60 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur-md sm:right-3 sm:top-3 sm:text-[11px]">
                    {img.category}
                  </div>
                </div>
                <div className="flex grow flex-col justify-between p-3 sm:p-4">
                  <div>
                    <h3 className="line-clamp-2 font-display text-[13px] font-bold leading-snug text-[#0B192C] transition-colors group-hover:text-[#0284C7] sm:text-base">
                      {img.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-[11px] leading-relaxed text-slate-500 sm:mt-1.5 sm:line-clamp-3 sm:text-xs">
                      {img.caption}
                    </p>
                  </div>
                  <div className="mt-3 hidden items-center justify-between border-t border-slate-100 pt-2.5 text-xs font-semibold text-[#0284C7] sm:flex">
                    <span>View full photo</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </Block>

      {/* 04 / TESTIMONIALS */}
      <Block
        id="testimonials"
        numeral="04 / Institutional Feedback"
        badge="School Voices"
        title="What Academic Leaders Are Saying."
        highlight="Direct pilot observations."
        subtitle="Insights from educators, principals, and parents during our initial pilot cohorts across Odisha."
        white
      >
        <Reveal>
          <div className={`${RAIL} md:mx-0 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:px-0 md:pb-0`}>
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.author}
                className="flex w-[85%] shrink-0 snap-start flex-col justify-between rounded-2xl border border-slate-200 bg-[#F8FAFC] p-4 sm:w-[60%] sm:p-5 md:w-auto"
              >
                <blockquote className="flex gap-2">
                  <span className="font-display text-4xl leading-[0.8] text-[#0284C7]" aria-hidden="true">
                    “
                  </span>
                  <p className="text-[13px] italic leading-relaxed text-slate-700 sm:text-sm">{t.quote}</p>
                </blockquote>
                <figcaption className="mt-4 border-t border-slate-200 pt-3">
                  <div className="font-display text-sm font-bold text-[#0B192C]">{t.author}</div>
                  <div className="text-xs font-medium text-slate-500">
                    {t.role} • {t.location}
                  </div>
                  <div className="mt-2 inline-block rounded border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[11px] font-bold text-[#059669]">
                    {t.metric}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>

        <p className="mt-3 text-center text-[11px] font-medium text-slate-400 sm:mt-5 sm:text-xs">
          Illustrative feedback from pilot conversations
        </p>
      </Block>

      {/* RECOGNITION & TRUST */}
      <HomeTrustPreview />

      {/* 05 / ROADMAP */}
      <Block
        id="roadmap"
        numeral="05 / Vision"
        badge="Ecosystem Scale"
        title="Building India's Tech Education Standard."
        highlight="The National Roadmap."
        subtitle="From school-first literacy to teacher empowerment and national research initiatives."
      >
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {VISION_ROADMAP.map((road, idx) => (
            <Reveal key={road.stage} delay={idx * 0.06}>
              <div className="h-full rounded-xl border border-slate-200 bg-white p-3.5 shadow-xs sm:rounded-2xl sm:p-5">
                <div className="mb-2 flex items-center justify-between gap-2">
                  <span className="font-mono text-xl font-bold text-slate-300 sm:text-2xl">{road.stage}</span>
                  <span className="rounded bg-[#F0F9FF] px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#0284C7] sm:px-2 sm:text-[11px]">
                    {road.status}
                  </span>
                </div>
                <h3 className="font-display text-sm font-bold leading-snug text-[#0B192C] sm:text-base">
                  {road.title}
                </h3>
                <p className="mt-1 text-[11px] leading-relaxed text-slate-600 sm:text-xs">{road.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Block>

      {/* FINAL CTA */}
      <section className="bg-white py-10 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800">
              <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
              <span>Free Principal Demo Available</span>
            </div>
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-[#0B192C] sm:text-4xl">
              Ready to make your school AI-ready?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Schedule a 20-minute leadership briefing or an on-campus awareness session. Experience why CBSE and ICSE schools partner with UpMentor.
            </p>
            <div className="mt-6 flex flex-col items-stretch gap-2.5 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                icon={ArrowRight}
                className="w-full justify-center shadow-md sm:w-auto"
              >
                Book a Demo
              </Button>
              <Button to="/for-schools" variant="secondary" size="lg" className="w-full justify-center sm:w-auto">
                View Partnership Options
              </Button>
            </div>
            <p className="mt-4 text-xs text-slate-500">
              Direct line:{' '}
              <a href={`tel:${COMPANY.contact.rawPhones[0]}`} className="font-medium hover:text-[#0284C7]">
                {COMPANY.contact.phones[0]}
              </a>{' '}
              • WhatsApp: {COMPANY.contact.whatsapp}
            </p>
          </Reveal>
        </div>
      </section>

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