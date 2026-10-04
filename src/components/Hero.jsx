import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Maximize2, Cpu, X, ChevronLeft, ChevronRight, Terminal, Award } from 'lucide-react';
import Button from './Button';

// Real, authentic curriculum photographs sourced from internet repositories
const HERO_SLIDES = [
  {
    id: 'robotics-engineering',
    title: 'Robotics Engineering & Autonomous Systems',
    phase: 'Phase II: Applied Production',
    session: 'Session 14 / 24',
    badge: 'Applied Robotics Lab',
    src: '/hero/real/stem-lab-robotics.jpg',
    alt: 'Engineering students in laboratory working on precision machinery and robotic sensors',
    focus: 'Physical robot assembly, sensory closed-loop feedback & motor controller calibration.',
    tools: ['Microcontrollers', 'Ultrasonic Sensors', 'Python Logic'],
    outcome: 'Working autonomous rover prototype deployed in on-campus arena sprint'
  },
  {
    id: 'ai-code-sprint',
    title: 'Collaborative AI & Context Engineering',
    phase: 'Phase I: Cognitive Intuition',
    session: 'Session 08 / 24',
    badge: 'Cognitive Sprint',
    src: '/hero/real/student-teamwork-classroom.jpg',
    alt: 'Students collaborating together on laptop and code monitor',
    focus: 'Multi-turn prompt architecture, hallucination auditing & ethical reasoning chains.',
    tools: ['LLM Architectures', 'Context Windows', 'Bias Auditing'],
    outcome: 'Structured prompt system & audited dataset documentation asset'
  },
  {
    id: 'edge-hardware',
    title: 'Microcontroller & Sensor Circuits',
    phase: 'Phase II: Applied Production',
    session: 'Session 18 / 24',
    badge: 'Hardware Track',
    src: '/hero/real/arduino-robotics-circuit.jpg',
    alt: 'Macro photo of authentic Arduino Uno microcontroller circuit board',
    focus: 'Direct physical computing, breadboard circuit wiring & sensory bus telemetry.',
    tools: ['Arduino Uno', 'Sensor Arrays', 'Serial Telemetry'],
    outcome: 'Functional multi-sensor environmental telemetry circuit board'
  },
  {
    id: 'production-pipeline',
    title: 'Python Pipelines & Production Sprints',
    phase: 'Phase III: Identity & Assets',
    session: 'Session 22 / 24',
    badge: 'Software Lab',
    src: '/hero/real/coding-terminal-workspace.jpg',
    alt: 'Clean workspace with laptop running code editor and terminal',
    focus: 'Production scripts, algorithm verification & student portfolio repository builds.',
    tools: ['Python 3.12', 'Jupyter Lab', 'Git Portfolio'],
    outcome: 'Verified personal GitHub project codebase ready for university applications'
  }
];

// Magnetic Button Wrapper for elevated tactile interaction
function MagneticButton({ children, className = '' }) {
  const buttonRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 14, stiffness: 160, mass: 0.1 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = (e.clientX - centerX) * 0.18;
    const distanceY = (e.clientY - centerY) * 0.18;
    x.set(distanceX);
    y.set(distanceY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: smoothX, y: smoothY }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [inspectModalOpen, setInspectModalOpen] = useState(false);
  const containerRef = useRef(null);

  // Preload real photos on mount to ensure smooth crossfade
  useEffect(() => {
    HERO_SLIDES.forEach((slide) => {
      const img = new Image();
      img.src = slide.src;
    });
  }, []);

  // Automatic image change every 7.5 seconds (7500ms) - comfortable, unhurried cadence
  useEffect(() => {
    if (isPaused || inspectModalOpen) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7500);

    return () => clearInterval(timer);
  }, [isPaused, inspectModalOpen, currentSlide]);

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  // Subtle mouse coordinates for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springOptions = { damping: 25, stiffness: 120 };
  const smoothMouseX = useSpring(mouseX, springOptions);
  const smoothMouseY = useSpring(mouseY, springOptions);

  // Gentle, restrained 3D tilt
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [1.5, -1.5]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-2, 2]);
  const translateX = useTransform(smoothMouseX, [-0.5, 0.5], [-4, 4]);
  const translateY = useTransform(smoothMouseY, [-0.5, 0.5], [-3, 3]);

  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }, [mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
    setIsPaused(false);
  }, [mouseX, mouseY]);

  // Handle ESC key for inspect modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setInspectModalOpen(false);
    };
    if (inspectModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [inspectModalOpen]);

  const active = HERO_SLIDES[currentSlide];

  return (
    <>
      <section
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-14 lg:pb-22 bg-[#F8FAFC] border-b border-slate-200/80 pattern-grid overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* LEFT COLUMN: Editorial Narrative (Dominant & Balanced) */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              
              {/* Status & Framework Pill */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200/90 shadow-2xs text-[11px] font-semibold text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  <span className="text-[#0284C7] font-bold">AILA 2026</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-slate-600 font-medium">CBSE / ICSE / State Board Curriculum</span>
                </div>
              </motion.div>

              {/* Refined Heading Hierarchy (Compact & Authoritative) */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0B192C] tracking-tight leading-[1.15] max-w-xl">
                  Build <span className="text-[#0284C7] font-semibold">AI-Ready</span> Humans.
                  <span className="block text-slate-600 font-medium text-lg sm:text-xl lg:text-[22px] mt-1.5 tracking-normal">
                    Structured AI literacy infrastructure for school campuses.
                  </span>
                </h1>
              </motion.div>

              {/* Concise Value Narrative */}
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-lg"
              >
                A structured 24-session curriculum integrated directly into your school timetable.
                Turn your campus into an applied AI hub—delivering cognitive prompt mastery,
                autonomous robotics, and student portfolios with zero teacher burden.
              </motion.p>

              {/* Balanced CTA Cluster */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap items-center gap-3.5 pt-1"
              >
                <MagneticButton>
                  <Button
                    to="/contact"
                    variant="primary"
                    size="md"
                    icon={ArrowRight}
                    className="shadow-md"
                  >
                    Partner Your School
                  </Button>
                </MagneticButton>

                <Button
                  onClick={() => {
                    document.getElementById('aila-curriculum')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  variant="secondary"
                  size="md"
                >
                  Explore 24-Session Syllabus
                </Button>
              </motion.div>

              {/* Authentic Institutional Proof Points */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.24 }}
                className="pt-3 border-t border-slate-200/60 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 text-xs text-slate-600 font-medium"
              >
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                  <span>Zero teacher workload</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                  <span>8-week timetable delivery</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                  <span>Hands-on hardware &amp; AI</span>
                </div>
              </motion.div>

            </div>

            {/* RIGHT COLUMN: Redesigned Detailed Curriculum Card with Real Images */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-[420px] relative">
                
                {/* Subtle corner badge for real cohort delivery */}
                <div className="absolute -top-3.5 -left-2 z-20 hidden sm:flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md shadow-xs border border-slate-200/90 text-[11px] font-semibold text-slate-700">
                  <Cpu className="w-3 h-3 text-[#0284C7]" />
                  <span>Real In-School Cohort</span>
                </div>

                {/* Main Card with subtle 3D tilt */}
                <motion.div
                  style={{
                    rotateX,
                    rotateY,
                    x: translateX,
                    y: translateY,
                    transformPerspective: 1000
                  }}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  className="relative rounded-2xl bg-white border border-slate-200/90 shadow-md overflow-hidden group transition-shadow duration-300 hover:shadow-lg"
                >
                  {/* Architectural Top Bar with Session Tag & Subtle Slide Navigation */}
                  <div className="px-3.5 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-white select-none">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] shrink-0 animate-pulse" />
                      <span className="font-mono text-[10px] font-semibold tracking-wider text-slate-300 uppercase truncate">
                        {active.phase}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0 ml-2">
                      {/* Tactile manual navigation buttons */}
                      <button
                        type="button"
                        onClick={goToPrev}
                        className="w-6 h-6 flex items-center justify-center rounded-lg bg-slate-800/90 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/70 shadow-2xs hover:shadow-xs transition-all duration-150 cursor-pointer active:scale-90"
                        title="Previous Module"
                        aria-label="Previous Slide"
                      >
                        <ChevronLeft className="w-3.5 h-3.5" />
                      </button>
                      <span className="font-mono text-[10px] text-slate-400 px-1 font-semibold select-none">
                        0{currentSlide + 1} / 0{HERO_SLIDES.length}
                      </span>
                      <button
                        type="button"
                        onClick={goToNext}
                        className="w-6 h-6 flex items-center justify-center rounded-lg bg-slate-800/90 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/70 shadow-2xs hover:shadow-xs transition-all duration-150 cursor-pointer active:scale-90"
                        title="Next Module"
                        aria-label="Next Slide"
                      >
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        type="button"
                        onClick={() => setInspectModalOpen(true)}
                        className="w-6 h-6 flex items-center justify-center rounded-lg bg-slate-800/90 hover:bg-[#0284C7] text-slate-300 hover:text-white border border-slate-700/70 shadow-2xs hover:shadow-xs transition-all duration-150 cursor-pointer ml-1 active:scale-90"
                        title="View Full Resolution"
                        aria-label="Inspect Full Image"
                      >
                        <Maximize2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Real Photo Viewport with Smooth Crossfade */}
                  <div
                    onClick={() => setInspectModalOpen(true)}
                    className="relative aspect-[16/10] overflow-hidden bg-slate-950 cursor-pointer"
                  >
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={active.id}
                        src={active.src}
                        alt={active.alt}
                        initial={{ opacity: 0, scale: 1.02 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        loading="eager"
                        onError={(e) => {
                          e.target.src = '/hero/real/stem-lab-robotics.jpg';
                        }}
                      />
                    </AnimatePresence>

                    {/* Gradient Scrim for photo readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

                    {/* Badge & Session indicator in photo */}
                    <div className="absolute top-2.5 left-3 flex items-center gap-1.5 pointer-events-none">
                      <span className="text-[10px] font-semibold text-white bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded border border-white/10">
                        {active.badge}
                      </span>
                      <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950/70 px-2 py-0.5 rounded border border-emerald-500/20">
                        {active.session}
                      </span>
                    </div>

                    {/* Photo Title Overlay */}
                    <div className="absolute bottom-2.5 left-3 right-3 text-white pointer-events-none">
                      <h2 className="font-semibold text-xs sm:text-sm tracking-tight text-white truncate drop-shadow-xs">
                        {active.title}
                      </h2>
                    </div>
                  </div>

                  {/* Rich Curriculum Details Section (Integrated Inside the Card) */}
                  <div className="p-3.5 bg-white border-t border-slate-100 space-y-2.5">
                    {/* Curriculum Focus Sentence */}
                    <p className="text-xs text-slate-600 leading-snug">
                      {active.focus}
                    </p>

                    {/* Hardware & Tools Row */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                      <span className="text-[10px] font-mono font-bold uppercase text-slate-400 mr-0.5">
                        Tools:
                      </span>
                      {active.tools.map((tool) => (
                        <span
                          key={tool}
                          className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-700 border border-slate-200/80"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    {/* Student Deliverable Asset */}
                    <div className="pt-2 border-t border-slate-100 flex items-start gap-2">
                      <Award className="w-3.5 h-3.5 text-[#0284C7] shrink-0 mt-0.5" />
                      <div className="text-[11px] text-slate-700 font-medium leading-tight">
                        <span className="text-[#0284C7] font-semibold">Student Deliverable: </span>
                        {active.outcome}
                      </div>
                    </div>
                  </div>

                </motion.div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* High-Resolution Inspection Modal */}
      {inspectModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setInspectModalOpen(false)}
        >
          <div
            className="relative max-w-3xl w-full bg-slate-900 rounded-xl overflow-hidden border border-slate-800 shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header bar */}
            <div className="px-4 py-3 border-b border-slate-800 flex items-center justify-between text-white">
              <div className="min-w-0 pr-4">
                <span className="text-[10px] font-mono text-[#0284C7] font-semibold block uppercase truncate">
                  {active.phase} • {active.session}
                </span>
                <h3 className="font-display text-sm font-bold text-white mt-0.5 truncate">
                  {active.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setInspectModalOpen(false)}
                className="w-8 h-8 rounded-lg bg-slate-800/90 hover:bg-rose-500/20 hover:text-rose-300 hover:border-rose-500/30 border border-slate-700/80 flex items-center justify-center text-slate-400 transition-all duration-150 cursor-pointer shrink-0 active:scale-90"
                aria-label="Close Preview"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* High-res Image */}
            <div className="relative aspect-[16/10] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={active.src}
                alt={active.alt}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Footer with caption */}
            <div className="px-4 py-2.5 bg-slate-950 border-t border-slate-800/80 text-xs text-slate-300">
              <p>{active.focus}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
