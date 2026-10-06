import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  GraduationCap,
  Users,
  Cpu,
  Brain,
  Shield,
  Play,
} from 'lucide-react';

/* ---------- Custom icons ---------- */
function RobotArmIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20h16" />
      <path d="M6 20v-2a2 2 0 0 1 2-2h1" />
      <circle cx="9" cy="16" r="1.5" />
      <path d="M10 15l4.5-6.5" />
      <circle cx="14.5" cy="8.5" r="1.5" />
      <path d="M15.5 7.5L19 10" />
      <path d="M18 12.5l2 1.5" />
      <path d="M20 9.5l1.5 2" />
    </svg>
  );
}

function DroneIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="6" height="6" rx="1.5" />
      <line x1="12" y1="9" x2="6" y2="4.5" />
      <line x1="12" y1="15" x2="6" y2="19.5" />
      <line x1="12" y1="9" x2="18" y2="4.5" />
      <line x1="12" y1="15" x2="18" y2="19.5" />
      <ellipse cx="6" cy="4.5" rx="3.5" ry="1.5" />
      <ellipse cx="18" cy="4.5" rx="3.5" ry="1.5" />
      <ellipse cx="6" cy="19.5" rx="3.5" ry="1.5" />
      <ellipse cx="18" cy="19.5" rx="3.5" ry="1.5" />
    </svg>
  );
}

/* ---------- Data ---------- */
const SLIDE_MS = 7000;

const HERO_SLIDES = [
  {
    id: 'automation-lab',
    title: 'Automation Lab & Embedded Systems',
    shortLabel: 'Automation Lab',
    badge: 'Hardware & Automation',
    icon: RobotArmIcon,
    src: '/hero/real/stem-lab-robotics.jpg',
    alt: 'Engineering students in laboratory working on precision machinery and robotic sensors',
    focus: 'Physical robot assembly, sensory closed-loop feedback & microcontroller calibration.',
  },
  {
    id: 'drone-engineering',
    title: 'Drone Engineering & Autonomous Flight',
    shortLabel: 'Drone Engineering',
    badge: 'Aviation Track',
    icon: DroneIcon,
    src: '/um1.jpeg',
    alt: 'Student showcasing custom aerial UAV and telemetry hardware',
    focus: 'Fixed-wing and multi-rotor assembly, flight controller telemetry, and autonomous flight logging.',
  },
  {
    id: 'ai-literacy',
    title: 'AI Literacy & Cognitive Architecture',
    shortLabel: 'AI Literacy',
    badge: 'Cognitive Intelligence',
    icon: Brain,
    src: '/hero/real/student-teamwork-classroom.jpg',
    alt: 'Students collaborating together on AI models and code in modern classroom',
    focus: 'Multi-turn prompt architecture, hallucination auditing, LLM context engineering & ethical reasoning chains.',
  },
  {
    id: 'cyber-security',
    title: 'Cyber Security Awareness & Digital Defense',
    shortLabel: 'Cyber Security',
    badge: 'Defense Track',
    icon: Shield,
    src: '/hero/real/coding-terminal-workspace.jpg',
    alt: 'Clean workspace with laptop running code editor and cybersecurity terminal',
    focus: 'Threat modeling, network protocol inspection, social engineering defense, and safe institutional computing.',
  },
];

const FEATURES = [
  { icon: GraduationCap, label: 'Zero teacher workload', tone: 'text-emerald-600 bg-emerald-50' },
  { icon: Users, label: 'Structured lab delivery', tone: 'text-[#0284C7] bg-sky-50' },
  { icon: Cpu, label: 'Hands-on hardware & AI', tone: 'text-purple-600 bg-purple-50' },
];

const EASE = [0.16, 1, 0.3, 1];
const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: EASE },
});

const scrollToOfferings = () =>
  document.getElementById('offerings')?.scrollIntoView({ behavior: 'smooth' });

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [offset, setOffset] = useState(118); // space above the hero (strip + navbar)
  const sectionRef = useRef(null);

  const active = HERO_SLIDES[current];
  const next = () => setCurrent((p) => (p + 1) % HERO_SLIDES.length);

  // Measure everything above the hero so it fills exactly the rest of the screen
  useEffect(() => {
    const measure = () => {
      if (!sectionRef.current) return;
      const top = sectionRef.current.getBoundingClientRect().top + window.scrollY;
      setOffset(Math.round(top));
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  // Preload photos
  useEffect(() => {
    HERO_SLIDES.forEach((s) => {
      const img = new Image();
      img.src = s.src;
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ '--hero-offset': `${offset}px` }}
      className="pattern-grid relative flex overflow-hidden border-b border-slate-200/80 bg-[#F8FAFC]
        lg:h-[calc(100svh-var(--hero-offset))] lg:max-h-[900px] lg:min-h-[600px] lg:items-center"
    >
      <style>{`@keyframes heroProgress { from { transform: scaleX(0) } to { transform: scaleX(1) } }`}</style>

      {/* One quiet wash of colour behind the image */}
      <div className="pointer-events-none absolute -right-40 top-0 h-[520px] w-[520px] rounded-full bg-sky-100/50 blur-[100px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:h-full lg:px-8 lg:py-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:h-full lg:grid-cols-12 lg:gap-10 xl:gap-16">
          {/* ================= LEFT ================= */}
          <div className="lg:col-span-6">
            {/* Eyebrow */}
            <motion.div {...rise(0)} className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 shrink-0 bg-[#0284C7]" />
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0284C7] sm:text-xs">
                Future-Ready Campuses
                <span className="mx-2 text-slate-300">/</span>
                <span className="font-semibold text-slate-500">CBSE · ICSE · State Board</span>
              </p>
            </motion.div>

            {/* Headline: two lines, sized by screen height so it never pushes the layout */}
            <motion.h1
              {...rise(0.06)}
              className="font-display text-[40px] font-black leading-[1.05] tracking-tight text-[#0B192C] sm:text-6xl lg:text-[clamp(40px,min(7.6vh,5vw),68px)]"
            >
              Build{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#0284C7]">AI-Ready</span>
                <motion.svg
                  className="absolute -bottom-1 left-0 z-0 h-3 w-full overflow-visible sm:h-4"
                  viewBox="0 0 200 14"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <motion.path
                    d="M2 9 C 40 3, 90 2, 140 6 S 190 8, 198 5"
                    stroke="#7DD3FC"
                    strokeWidth="9"
                    strokeLinecap="round"
                    strokeOpacity="0.55"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.9, delay: 0.7, ease: 'easeOut' }}
                  />
                </motion.svg>
              </span>
              <br />
              Humans<span className="text-[#0284C7]">.</span>
            </motion.h1>

            <motion.h2
              {...rise(0.12)}
              className="mt-4 max-w-lg text-lg font-bold leading-snug text-slate-800 sm:text-xl"
            >
              Structured tech &amp; AI infrastructure for school campuses.
            </motion.h2>

            <motion.p
              {...rise(0.16)}
              className="mt-2.5 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-[15px]"
            >
              Turn your campus into an applied innovation hub. UpMentor installs four specialized pathways—Automation Lab, Drone Engineering, AI Literacy, and Cyber Security Awareness—with zero teacher burden.
            </motion.p>

            {/* CTAs */}
            <motion.div {...rise(0.22)} className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#0B192C] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition-all duration-200 hover:bg-[#13294B] hover:shadow-xl hover:shadow-slate-900/20 active:scale-95"
              >
                <span>Partner Your School</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <button
                type="button"
                onClick={scrollToOfferings}
                className="group inline-flex items-center gap-3 rounded-full border border-slate-300 bg-transparent py-2 pl-6 pr-2.5 text-sm font-semibold text-slate-800 transition-all duration-200 hover:border-[#0284C7] hover:bg-white active:scale-95"
              >
                <span>Explore Core Offerings</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-[#0284C7] transition-colors duration-200 group-hover:bg-[#0284C7] group-hover:text-white">
                  <Play className="ml-0.5 h-3.5 w-3.5 fill-current" />
                </span>
              </button>
            </motion.div>

            {/* Features: compact row, hidden on short desktop screens to protect the fit */}
            <motion.ul
              {...rise(0.3)}
              className="mt-7 flex flex-wrap gap-x-6 gap-y-3 border-t border-slate-200 pt-5 lg:[@media(max-height:780px)]:hidden"
            >
              {FEATURES.map(({ icon: Icon, label, tone }) => (
                <li key={label} className="flex items-center gap-2.5">
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${tone}`}>
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-[13px] font-semibold leading-snug text-slate-700">{label}</span>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* ================= RIGHT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
            className="lg:col-span-6 lg:h-full"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Column is a flex stack: photo takes whatever height is left, tabs sit below */}
            <div className="relative mx-auto flex w-full max-w-[540px] flex-col lg:ml-auto lg:h-full lg:max-h-[500px] lg:pt-20">
              {/* Photo wrapper */}
              <div className="relative aspect-[4/4.2] sm:aspect-[4/3.6] lg:aspect-auto lg:min-h-0 lg:flex-1">
                {/* Handwritten note: one line, above the photo so it never covers the badge */}
                <div className="pointer-events-none absolute -top-8 left-3 z-20 hidden -rotate-3 items-center gap-1.5 xl:flex lg:[@media(max-height:760px)]:hidden">
                  <span className="font-handwriting text-xl font-bold text-[#0284C7]">
                    Real skills, brighter futures
                  </span>
                  <svg className="mt-3 h-6 w-8 text-[#0284C7]" viewBox="0 0 40 28" fill="none">
                    <path d="M3 4 C 14 2, 26 8, 34 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M27 18 L 35 22 L 36 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {/* Offset outline frame */}
                <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[28px] rounded-tr-[100px] border border-[#0284C7]/30 sm:translate-x-4 sm:translate-y-4" />

                {/* Photo */}
                <div className="absolute inset-0 overflow-hidden rounded-[28px] rounded-tr-[100px] bg-slate-900 shadow-2xl shadow-slate-900/20">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={active.id}
                      src={active.src}
                      alt={active.alt}
                      initial={{ opacity: 0, scale: 1.08 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        opacity: { duration: 0.45 },
                        scale: { duration: SLIDE_MS / 1000, ease: 'linear' },
                      }}
                      className="h-full w-full object-cover object-center"
                      loading="eager"
                      onError={(e) => {
                        e.target.src = '/hero/real/stem-lab-robotics.jpg';
                      }}
                    />
                  </AnimatePresence>

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B192C]/80 via-[#0B192C]/10 to-transparent" />

                  {/* Badge */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active.id}
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute left-4 top-4 z-10 inline-flex items-center gap-2 rounded-full bg-white/90 py-1.5 pl-2 pr-3.5 shadow-sm backdrop-blur-md"
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0B192C] text-sky-300">
                        <active.icon className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-[11px] font-bold text-[#0B192C]">{active.badge}</span>
                    </motion.div>
                  </AnimatePresence>

                  {/* Caption card */}
                  <div className="absolute inset-x-3 bottom-3 z-20 sm:inset-x-4 sm:bottom-4">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={active.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.35, ease: EASE }}
                        className="flex items-center gap-3.5 rounded-2xl bg-white/95 p-3 shadow-xl shadow-slate-900/15 backdrop-blur-md"
                      >
                        <span className="font-mono text-2xl font-black leading-none tracking-tighter text-[#0284C7]">
                          {String(current + 1).padStart(2, '0')}
                        </span>
                        <span className="h-9 w-px bg-slate-200" />
                        <div className="min-w-0 flex-1">
                          <h3 className="truncate text-[13px] font-bold tracking-tight text-[#0B192C]">
                            {active.title}
                          </h3>
                          <p className="mt-0.5 line-clamp-1 text-[11px] leading-snug text-slate-500 sm:line-clamp-2">
                            {active.focus}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={scrollToOfferings}
                          className="group flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0B192C] text-white transition-all hover:bg-[#0284C7] active:scale-90"
                          title="Explore Offering"
                          aria-label="Explore Offering"
                        >
                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </button>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Tabs with progress bars */}
              <div
                role="tablist"
                aria-label="Core offerings"
                className="relative mt-7 grid shrink-0 grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-4 lg:mt-6"
              >
                {HERO_SLIDES.map((slide, idx) => {
                  const isActive = idx === current;
                  const TabIcon = slide.icon;
                  return (
                    <button
                      key={slide.id}
                      role="tab"
                      aria-selected={isActive}
                      type="button"
                      onClick={() => setCurrent(idx)}
                      className="group text-left"
                    >
                      <span className="relative block h-[3px] overflow-hidden rounded-full bg-slate-200">
                        {isActive && (
                          <span
                            key={`${slide.id}-${current}`}
                            onAnimationEnd={next}
                            className="absolute inset-0 origin-left rounded-full bg-[#0284C7]"
                            style={{
                              animation: `heroProgress ${SLIDE_MS}ms linear forwards`,
                              animationPlayState: paused ? 'paused' : 'running',
                            }}
                          />
                        )}
                      </span>
                      <span
                        className={`mt-2 flex items-center gap-1.5 text-[11px] font-semibold transition-colors duration-200 sm:text-xs ${
                          isActive ? 'text-[#0B192C]' : 'text-slate-400 group-hover:text-slate-600'
                        }`}
                      >
                        <TabIcon className={`h-3.5 w-3.5 shrink-0 ${isActive ? 'text-[#0284C7]' : ''}`} />
                        <span className="truncate">{slide.shortLabel}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}