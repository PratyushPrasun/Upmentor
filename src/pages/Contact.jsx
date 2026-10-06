import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import { COMPANY } from '../data/content';
import {
  Phone,
  MessageCircle,
  Clock,
  CheckCircle2,
  Calendar,
  School,
  User,
  ShieldCheck,
  Send,
  AlertCircle
} from 'lucide-react';
import { InstagramIcon } from '../components/Icons';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [audience, setAudience] = useState('school'); // 'school' | 'parent'
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // School Form Data
  const [schoolData, setSchoolData] = useState({
    schoolName: '',
    board: 'CBSE',
    city: '',
    name: '',
    designation: '',
    phone: '',
    email: '',
    studentCount: '100-250',
    interest: 'Free demo session',
    preferredDateTime: '',
    message: '',
    honeypot: '' // spam bot catcher
  });

  // Parent Form Data
  const [parentData, setParentData] = useState({
    parentName: '',
    phone: '',
    email: '',
    childName: '',
    grade: 'Grade 9',
    schoolName: '',
    city: '',
    interest: 'Want it in my child’s school',
    message: '',
    recommendSchool: true,
    honeypot: ''
  });

  const validatePhone = (num) => {
    const cleaned = num.replace(/\D/g, '');
    return cleaned.length >= 10;
  };

  const validateEmail = (mail) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
  };

  const handleSchoolSubmit = async (e) => {
    e.preventDefault();
    if (schoolData.honeypot) return; // bot detected

    const newErrors = {};
    if (!schoolData.schoolName.trim()) newErrors.schoolName = 'School name is required';
    if (!schoolData.name.trim()) newErrors.name = 'Your name is required';
    if (!schoolData.designation.trim()) newErrors.designation = 'Designation is required';
    if (!schoolData.city.trim()) newErrors.city = 'City or district is required';
    if (!validatePhone(schoolData.phone)) newErrors.phone = 'Valid 10-digit mobile number required';
    if (!validateEmail(schoolData.email)) newErrors.email = 'Valid official email address required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const endpoint = import.meta.env.VITE_CONTACT_API_URL || null;
      if (endpoint) {
        await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type: 'school_demo_request', ...schoolData })
        });
      } else {
        // Fallback simulation
        await new Promise((r) => setTimeout(r, 800));
      }

      setSubmitted(true);
      confetti({ particleCount: 70, spread: 70, origin: { y: 0.6 } });
    } catch (err) {
      console.error('Submission error:', err);
      setErrors({ form: 'Network error. Please call or WhatsApp us directly.' });
    } finally {
      setLoading(false);
    }
  };

  const handleParentSubmit = async (e) => {
    e.preventDefault();
    if (parentData.honeypot) return;

    const newErrors = {};
    if (!parentData.parentName.trim()) newErrors.parentName = 'Parent name is required';
    if (!parentData.childName.trim()) newErrors.childName = 'Child name is required';
    if (!parentData.schoolName.trim()) newErrors.schoolName = 'Current school name is required';
    if (!validatePhone(parentData.phone)) newErrors.phone = 'Valid 10-digit phone required';
    if (!validateEmail(parentData.email)) newErrors.email = 'Valid email required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const endpoint = import.meta.env.VITE_CONTACT_API_URL || null;
      if (endpoint) {
        await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type: 'parent_inquiry', ...parentData })
        });
      } else {
        await new Promise((r) => setTimeout(r, 800));
      }

      setSubmitted(true);
      confetti({ particleCount: 70, spread: 70, origin: { y: 0.6 } });
    } catch (err) {
      console.error('Submission error:', err);
      setErrors({ form: 'Network error. Please call or WhatsApp us directly.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Editorial Header */}
      <section className="pt-24 pb-14 sm:pt-30 sm:pb-20 bg-[#F8FAFC] border-b border-slate-200/80 pattern-grid">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-[#0284C7] text-xs font-bold mb-4 shadow-xs">
              <Calendar className="w-3.5 h-3.5 text-[#10B981]" />
              <span>Schedule an Academic Consultation</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-[#0B192C] tracking-tight">
              Book a Demo &amp; Start the Conversation.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              Choose your profile below. We tailor our academic presentation and consultation to your exact role.
            </p>

            {/* Segmented Control / Audience Toggle */}
            <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-slate-200/60 backdrop-blur-md border border-slate-200 shadow-inner">
              <button
                type="button"
                onClick={() => {
                  setAudience('school');
                  setSubmitted(false);
                  setErrors({});
                }}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-display font-bold text-sm transition-all duration-200 cursor-pointer active:scale-95 ${
                  audience === 'school'
                    ? 'bg-gradient-to-b from-[#132238] to-[#0B192C] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_2px_8px_rgba(11,25,44,0.25)] border border-[#1E2E45]'
                    : 'text-slate-600 hover:text-[#0B192C] hover:bg-white/50'
                }`}
              >
                <School className="w-4 h-4" />
                <span>I'm a School / Principal</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setAudience('parent');
                  setSubmitted(false);
                  setErrors({});
                }}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-display font-bold text-sm transition-all duration-200 cursor-pointer active:scale-95 ${
                  audience === 'parent'
                    ? 'bg-gradient-to-b from-[#132238] to-[#0B192C] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_2px_8px_rgba(11,25,44,0.25)] border border-[#1E2E45]'
                    : 'text-slate-600 hover:text-[#0B192C] hover:bg-white/50'
                }`}
              >
                <User className="w-4 h-4" />
                <span>I'm a Parent</span>
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Main Form & Contact Section */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
            
            {/* Form Column (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="bg-[#F8FAFC] border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 px-4 space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0B192C]">
                      Request Received Successfully!
                    </h3>
                    <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out to UpMentor Edutech. Our academic partnership team will contact you within{' '}
                      <span className="font-semibold text-[#0B192C]">{COMPANY.contact.responseTime}</span> to confirm your session schedule.
                    </p>
                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <Button
                        onClick={() => {
                          setSubmitted(false);
                          setSchoolData({
                            schoolName: '',
                            board: 'CBSE',
                            city: '',
                            name: '',
                            designation: '',
                            phone: '',
                            email: '',
                            studentCount: '100-250',
                            interest: 'Free demo session',
                            preferredDateTime: '',
                            message: '',
                            honeypot: ''
                          });
                        }}
                        variant="secondary"
                        size="md"
                      >
                        Submit Another Inquiry
                      </Button>
                      <Button
                        href={`https://wa.me/${COMPANY.contact.whatsappRaw}?text=${encodeURIComponent(
                          COMPANY.contact.whatsappDefaultMsg
                        )}`}
                        variant="accent"
                        size="md"
                        icon={MessageCircle}
                        iconPosition="left"
                      >
                        Instant WhatsApp Follow-up
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <AnimatePresence mode="wait">
                    {audience === 'school' ? (
                      <motion.form
                        key="school-form"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.25 }}
                        onSubmit={handleSchoolSubmit}
                        className="space-y-5"
                      >
                        {/* Hidden Honeypot */}
                        <input
                          type="text"
                          name="website_hp"
                          value={schoolData.honeypot}
                          onChange={(e) => setSchoolData({ ...schoolData, honeypot: e.target.value })}
                          className="hidden"
                          tabIndex={-1}
                          autoComplete="off"
                        />

                        <div className="border-b border-slate-200 pb-4 mb-2">
                          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0284C7]">
                            School Leadership Form
                          </span>
                          <h2 className="font-display font-bold text-2xl text-[#0B192C] mt-1">
                            Partner Your School with UpMentor
                          </h2>
                          <p className="text-xs text-slate-500 mt-1">
                            Schedule a free leadership presentation or campus pilot cohort.
                          </p>
                        </div>

                        {errors.form && (
                          <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                            <AlertCircle className="w-4 h-4 shrink-0" />
                            <span>{errors.form}</span>
                          </div>
                        )}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">
                              School Name <span className="text-rose-500">*</span>
                            </label>
                            <input
                              type="text"
                              value={schoolData.schoolName}
                              onChange={(e) => setSchoolData({ ...schoolData, schoolName: e.target.value })}
                              placeholder="e.g. DAV Public School"
                              className={`w-full px-3.5 py-2.5 rounded-xl border text-sm bg-white outline-none transition-all ${
                                errors.schoolName ? 'border-rose-400 ring-1 ring-rose-300' : 'border-slate-300 focus:border-[#0284C7]'
                              }`}
                            />
                            {errors.schoolName && <p className="text-[11px] text-rose-500 mt-1">{errors.schoolName}</p>}
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">
                              Board Affiliation <span className="text-rose-500">*</span>
                            </label>
                            <select
                              value={schoolData.board}
                              onChange={(e) => setSchoolData({ ...schoolData, board: e.target.value })}
                              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white outline-none focus:border-[#0284C7]"
                            >
                              <option value="CBSE">CBSE Board</option>
                              <option value="ICSE">ICSE / ISC Board</option>
                              <option value="State Board">Odisha State Board</option>
                              <option value="Other">Other / Autonomous</option>
                            </select>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">
                              Your Name <span className="text-rose-500">*</span>
                            </label>
                            <input
                              type="text"
                              value={schoolData.name}
                              onChange={(e) => setSchoolData({ ...schoolData, name: e.target.value })}
                              placeholder="Full Name"
                              className={`w-full px-3.5 py-2.5 rounded-xl border text-sm bg-white outline-none transition-all ${
                                errors.name ? 'border-rose-400 ring-1 ring-rose-300' : 'border-slate-300 focus:border-[#0284C7]'
                              }`}
                            />
                            {errors.name && <p className="text-[11px] text-rose-500 mt-1">{errors.name}</p>}
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">
                              Designation <span className="text-rose-500">*</span>
                            </label>
                            <input
                              type="text"
                              value={schoolData.designation}
                              onChange={(e) => setSchoolData({ ...schoolData, designation: e.target.value })}
                              placeholder="e.g. Principal / Academic Director"
                              className={`w-full px-3.5 py-2.5 rounded-xl border text-sm bg-white outline-none transition-all ${
                                errors.designation ? 'border-rose-400 ring-1 ring-rose-300' : 'border-slate-300 focus:border-[#0284C7]'
                              }`}
                            />
                            {errors.designation && <p className="text-[11px] text-rose-500 mt-1">{errors.designation}</p>}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">
                              City / District <span className="text-rose-500">*</span>
                            </label>
                            <input
                              type="text"
                              value={schoolData.city}
                              onChange={(e) => setSchoolData({ ...schoolData, city: e.target.value })}
                              placeholder="e.g. Bhubaneswar"
                              className={`w-full px-3.5 py-2.5 rounded-xl border text-sm bg-white outline-none transition-all ${
                                errors.city ? 'border-rose-400 ring-1 ring-rose-300' : 'border-slate-300 focus:border-[#0284C7]'
                              }`}
                            />
                            {errors.city && <p className="text-[11px] text-rose-500 mt-1">{errors.city}</p>}
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">
                              Phone Number <span className="text-rose-500">*</span>
                            </label>
                            <input
                              type="tel"
                              value={schoolData.phone}
                              onChange={(e) => setSchoolData({ ...schoolData, phone: e.target.value })}
                              placeholder="10-digit Mobile"
                              className={`w-full px-3.5 py-2.5 rounded-xl border text-sm bg-white outline-none transition-all ${
                                errors.phone ? 'border-rose-400 ring-1 ring-rose-300' : 'border-slate-300 focus:border-[#0284C7]'
                              }`}
                            />
                            {errors.phone && <p className="text-[11px] text-rose-500 mt-1">{errors.phone}</p>}
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">
                              Email Address <span className="text-rose-500">*</span>
                            </label>
                            <input
                              type="email"
                              value={schoolData.email}
                              onChange={(e) => setSchoolData({ ...schoolData, email: e.target.value })}
                              placeholder="official@school.edu"
                              className={`w-full px-3.5 py-2.5 rounded-xl border text-sm bg-white outline-none transition-all ${
                                errors.email ? 'border-rose-400 ring-1 ring-rose-300' : 'border-slate-300 focus:border-[#0284C7]'
                              }`}
                            />
                            {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">
                              Primary Interest
                            </label>
                            <select
                              value={schoolData.interest}
                              onChange={(e) => setSchoolData({ ...schoolData, interest: e.target.value })}
                              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white outline-none focus:border-[#0284C7]"
                            >
                              <option value="Free demo session">Free Demo Session</option>
                              <option value="AI awareness workshop">AI Awareness Workshop for Teachers</option>
                              <option value="Pilot program">Pilot Program (1 Class Cohort)</option>
                              <option value="Full rollout">Full Institutional Rollout</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">
                              Approximate Students (Grades 8-12)
                            </label>
                            <select
                              value={schoolData.studentCount}
                              onChange={(e) => setSchoolData({ ...schoolData, studentCount: e.target.value })}
                              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white outline-none focus:border-[#0284C7]"
                            >
                              <option value="50-100">50 – 100 Students</option>
                              <option value="100-250">100 – 250 Students</option>
                              <option value="250-500">250 – 500 Students</option>
                              <option value="500+">500+ Students</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Preferred Date &amp; Time for Consultation
                          </label>
                          <input
                            type="text"
                            value={schoolData.preferredDateTime}
                            onChange={(e) => setSchoolData({ ...schoolData, preferredDateTime: e.target.value })}
                            placeholder="e.g. Next Tuesday morning, 11:00 AM"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white outline-none focus:border-[#0284C7]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Additional Message / Specific Requirements
                          </label>
                          <textarea
                            rows={3}
                            value={schoolData.message}
                            onChange={(e) => setSchoolData({ ...schoolData, message: e.target.value })}
                            placeholder="Tell us about your current computer lab setup or upcoming school calendar windows..."
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white outline-none focus:border-[#0284C7]"
                          />
                        </div>

                        <Button
                          type="submit"
                          variant="primary"
                          size="lg"
                          loading={loading}
                          icon={Send}
                          iconPosition="left"
                          className="w-full cursor-pointer shadow-md"
                        >
                          Request School Demo Consultation
                        </Button>
                      </motion.form>
                    ) : (
                      <motion.form
                        key="parent-form"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.25 }}
                        onSubmit={handleParentSubmit}
                        className="space-y-5"
                      >
                        <input
                          type="text"
                          name="website_hp"
                          value={parentData.honeypot}
                          onChange={(e) => setParentData({ ...parentData, honeypot: e.target.value })}
                          className="hidden"
                          tabIndex={-1}
                          autoComplete="off"
                        />

                        <div className="border-b border-slate-200 pb-4 mb-2">
                          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#059669]">
                            Parent Inquiry Form
                          </span>
                          <h2 className="font-display font-bold text-2xl text-[#0B192C] mt-1">
                            Future-Proof Your Child
                          </h2>
                          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                            UpMentor programs are delivered directly through partner schools. Tell us about your child and school so we can facilitate institutional partnership or inform you of upcoming regional cohorts.
                          </p>
                        </div>

                        {errors.form && (
                          <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                            <AlertCircle className="w-4 h-4 shrink-0" />
                            <span>{errors.form}</span>
                          </div>
                        )}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">
                              Parent's Name <span className="text-rose-500">*</span>
                            </label>
                            <input
                              type="text"
                              value={parentData.parentName}
                              onChange={(e) => setParentData({ ...parentData, parentName: e.target.value })}
                              placeholder="Your Full Name"
                              className={`w-full px-3.5 py-2.5 rounded-xl border text-sm bg-white outline-none transition-all ${
                                errors.parentName ? 'border-rose-400 ring-1 ring-rose-300' : 'border-slate-300 focus:border-[#0284C7]'
                              }`}
                            />
                            {errors.parentName && <p className="text-[11px] text-rose-500 mt-1">{errors.parentName}</p>}
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">
                              Child's Name <span className="text-rose-500">*</span>
                            </label>
                            <input
                              type="text"
                              value={parentData.childName}
                              onChange={(e) => setParentData({ ...parentData, childName: e.target.value })}
                              placeholder="Child's Full Name"
                              className={`w-full px-3.5 py-2.5 rounded-xl border text-sm bg-white outline-none transition-all ${
                                errors.childName ? 'border-rose-400 ring-1 ring-rose-300' : 'border-slate-300 focus:border-[#0284C7]'
                              }`}
                            />
                            {errors.childName && <p className="text-[11px] text-rose-500 mt-1">{errors.childName}</p>}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">
                              Current Grade / Class
                            </label>
                            <select
                              value={parentData.grade}
                              onChange={(e) => setParentData({ ...parentData, grade: e.target.value })}
                              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white outline-none focus:border-[#0284C7]"
                            >
                              <option value="Grade 8">Grade 8</option>
                              <option value="Grade 9">Grade 9</option>
                              <option value="Grade 10">Grade 10</option>
                              <option value="Grade 11">Grade 11</option>
                              <option value="Grade 12">Grade 12</option>
                              <option value="Junior College">Junior College</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">
                              Current School Name <span className="text-rose-500">*</span>
                            </label>
                            <input
                              type="text"
                              value={parentData.schoolName}
                              onChange={(e) => setParentData({ ...parentData, schoolName: e.target.value })}
                              placeholder="e.g. DPS Kalinga"
                              className={`w-full px-3.5 py-2.5 rounded-xl border text-sm bg-white outline-none transition-all ${
                                errors.schoolName ? 'border-rose-400 ring-1 ring-rose-300' : 'border-slate-300 focus:border-[#0284C7]'
                              }`}
                            />
                            {errors.schoolName && <p className="text-[11px] text-rose-500 mt-1">{errors.schoolName}</p>}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">
                              City / District
                            </label>
                            <input
                              type="text"
                              value={parentData.city}
                              onChange={(e) => setParentData({ ...parentData, city: e.target.value })}
                              placeholder="e.g. Cuttack"
                              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white outline-none focus:border-[#0284C7]"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">
                              Mobile Number <span className="text-rose-500">*</span>
                            </label>
                            <input
                              type="tel"
                              value={parentData.phone}
                              onChange={(e) => setParentData({ ...parentData, phone: e.target.value })}
                              placeholder="10-digit number"
                              className={`w-full px-3.5 py-2.5 rounded-xl border text-sm bg-white outline-none transition-all ${
                                errors.phone ? 'border-rose-400 ring-1 ring-rose-300' : 'border-slate-300 focus:border-[#0284C7]'
                              }`}
                            />
                            {errors.phone && <p className="text-[11px] text-rose-500 mt-1">{errors.phone}</p>}
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">
                              Email <span className="text-rose-500">*</span>
                            </label>
                            <input
                              type="email"
                              value={parentData.email}
                              onChange={(e) => setParentData({ ...parentData, email: e.target.value })}
                              placeholder="parent@email.com"
                              className={`w-full px-3.5 py-2.5 rounded-xl border text-sm bg-white outline-none transition-all ${
                                errors.email ? 'border-rose-400 ring-1 ring-rose-300' : 'border-slate-300 focus:border-[#0284C7]'
                              }`}
                            />
                            {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>}
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Primary Goal
                          </label>
                          <select
                            value={parentData.interest}
                            onChange={(e) => setParentData({ ...parentData, interest: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white outline-none focus:border-[#0284C7]"
                          >
                            <option value="Want it in my child’s school">I want UpMentor in my child’s school</option>
                            <option value="Learn about curriculum">Learn about practical lab programs</option>
                            <option value="General query">General parent query</option>
                          </select>
                        </div>

                        <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
                          <input
                            type="checkbox"
                            id="recommend-chk"
                            checked={parentData.recommendSchool}
                            onChange={(e) => setParentData({ ...parentData, recommendSchool: e.target.checked })}
                            className="mt-1 h-4 w-4 text-[#0284C7] rounded border-slate-300 focus:ring-[#0284C7]"
                          />
                          <label htmlFor="recommend-chk" className="text-xs text-emerald-950 font-medium cursor-pointer">
                            <span className="font-bold block">Recommend UpMentor to my child's school</span>
                            We will discreetly reach out to your school's principal with an institutional briefing pack.
                          </label>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">
                            Questions / Remarks
                          </label>
                          <textarea
                            rows={3}
                            value={parentData.message}
                            onChange={(e) => setParentData({ ...parentData, message: e.target.value })}
                            placeholder="Any specific interests, questions on board exam balance, or portfolio goals..."
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white outline-none focus:border-[#0284C7]"
                          />
                        </div>

                        <Button
                          type="submit"
                          variant="accent"
                          size="lg"
                          loading={loading}
                          icon={Send}
                          iconPosition="left"
                          className="w-full cursor-pointer shadow-md"
                        >
                          Submit Parent Inquiry
                        </Button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                )}
              </div>
            </div>

            {/* Side Information Column (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Dynamic Side Copy based on Audience */}
              <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 shadow-xs">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0284C7] block mb-2">
                  {audience === 'school' ? 'For Leadership' : 'For Families'}
                </span>
                <h3 className="font-display font-bold text-xl text-[#0B192C]">
                  {audience === 'school'
                    ? 'Why schools schedule a demo before commitment'
                    : 'UpMentor transforms college & career trajectories'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {audience === 'school'
                    ? 'Our demo is not a sales pitch. It is a live walkthrough of our curriculum, hardware kits, rubric frameworks, and how your existing computer lab seamlessly powers student projects.'
                    : 'High school is the most strategic time to build verifiable technical capability. Students create live portfolios, master ethical guidelines, and build tangible projects that university admissions value.'}
                </p>
              </div>

              {/* What Happens Next: 3-Step Mini-Timeline */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
                <h4 className="font-display font-bold text-base text-[#0B192C] mb-4 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#0284C7]" />
                  <span>What Happens Next</span>
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#F0F9FF] text-[#0284C7] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <span className="font-semibold text-xs text-[#0B192C] block">Direct Consultation Call</span>
                      <span className="text-xs text-slate-500">We call within 4 business hours to understand your campus schedule.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#F0F9FF] text-[#0284C7] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <span className="font-semibold text-xs text-[#0B192C] block">Curriculum &amp; Workbook Preview</span>
                      <span className="text-xs text-slate-500">We share sample student workbooks and evaluation rubrics.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </span>
                    <div>
                      <span className="font-semibold text-xs text-[#0B192C] block">On-Campus Demo Masterclass</span>
                      <span className="text-xs text-slate-500">We deliver a 45-minute live AI session for teachers and management.</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#059669]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Guaranteed response within 4 business hours</span>
                </div>
              </div>

              {/* Direct Channels Cards */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
                <h4 className="font-display font-bold text-sm uppercase tracking-wider text-slate-400">
                  Direct Institutional Lines
                </h4>

                <div className="space-y-2.5 text-sm">
                  <a
                    href={`tel:${COMPANY.contact.rawPhones[0]}`}
                    className="flex items-center justify-between p-3 rounded-xl border border-slate-200 hover:border-[#0284C7] hover:bg-[#F0F9FF] transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-[#0284C7]" />
                      <span className="font-semibold text-[#0B192C]">{COMPANY.contact.phones[0]}</span>
                    </div>
                    <span className="text-xs text-slate-400 group-hover:text-[#0284C7]">Call now</span>
                  </a>

                  <a
                    href={`tel:${COMPANY.contact.rawPhones[1]}`}
                    className="flex items-center justify-between p-3 rounded-xl border border-slate-200 hover:border-[#0284C7] hover:bg-[#F0F9FF] transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-[#0284C7]" />
                      <span className="font-semibold text-[#0B192C]">{COMPANY.contact.phones[1]}</span>
                    </div>
                    <span className="text-xs text-slate-400 group-hover:text-[#0284C7]">Call now</span>
                  </a>

                  <a
                    href={`https://wa.me/${COMPANY.contact.whatsappRaw}?text=${encodeURIComponent(
                      COMPANY.contact.whatsappDefaultMsg
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl border border-emerald-200 bg-emerald-50/50 hover:bg-emerald-50 transition-all text-emerald-900 group"
                  >
                    <div className="flex items-center gap-3">
                      <MessageCircle className="w-4 h-4 text-emerald-600" />
                      <span className="font-semibold">{COMPANY.contact.whatsapp}</span>
                    </div>
                    <span className="text-xs text-emerald-700 font-bold group-hover:underline">WhatsApp</span>
                  </a>

                  <a
                    href={COMPANY.contact.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl border border-slate-200 hover:border-pink-300 hover:bg-pink-50/30 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <InstagramIcon className="w-4 h-4 text-pink-500" />
                      <span className="font-semibold text-[#0B192C]">{COMPANY.contact.instagram}</span>
                    </div>
                    <span className="text-xs text-slate-400 group-hover:text-pink-600">Follow</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
