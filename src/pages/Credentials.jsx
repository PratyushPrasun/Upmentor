import React, { useState } from 'react';
import Reveal from '../components/Reveal';
import LightboxModal from '../components/LightboxModal';
import RecognitionsSection from '../components/sections/RecognitionsSection';
import CollaborationsSection from '../components/sections/CollaborationsSection';
import MentorshipSection from '../components/sections/MentorshipSection';
import CertificatesSection from '../components/sections/CertificatesSection';
import Button from '../components/Button';
import { COMPANY } from '../data/content';
import { GENUINE_CERTIFICATES } from '../data/credentialsData';
import {
  ShieldCheck,
  Building2,
  Layers,
  Users2,
  Award,
  ArrowRight,
  MessageCircle,
  Mail,
  Phone
} from 'lucide-react';

export default function Credentials() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Prepare items for LightboxModal
  const certificateLightboxItems = GENUINE_CERTIFICATES.map((cert) => ({
    src: cert.previewImage,
    previewImage: cert.previewImage,
    pdfUrl: cert.pdfUrl,
    title: cert.title,
    caption: `${cert.issuer} • Issued to ${cert.recognizedEntity}`,
    issuer: cert.issuer,
    certificateNumber: cert.certificateNumber,
    dateOfIssue: cert.dateOfIssue,
    status: 'Official Government Document'
  }));

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="overflow-hidden">
      {/* 00 / EDITORIAL HERO HEADER */}
      <section className="pt-16 pb-16 sm:pt-24 sm:pb-24 bg-[#F8FAFC] border-b border-slate-200/80 pattern-grid">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-[#0284C7] text-xs font-bold mb-6 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-[#10B981]" />
              <span>Institutional Governance &amp; Official Recognition</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-[#0B192C] tracking-tight leading-[1.12]">
              Credibility built on reality. <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#0284C7]">Recognised. Collaborative. Mentored.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              UpMentor Edutech operates with complete statutory compliance, official government recognitions, active industry collaborations, and an elite mentorship network spanning the world&apos;s leading tech organizations.
            </p>

            {/* Quick Hierarchy Anchor Bar */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs font-semibold">
              <a
                href="#recognitions"
                className="px-4 py-2.5 rounded-xl bg-white border border-slate-200/90 text-slate-700 hover:border-[#0284C7] hover:text-[#0284C7] hover:bg-[#F0F9FF]/60 hover:shadow-xs hover:-translate-y-0.5 active:scale-95 transition-all duration-150 inline-flex items-center gap-2 shadow-2xs group"
              >
                <Building2 className="w-3.5 h-3.5 text-[#0284C7] transition-transform group-hover:scale-110" />
                <span>01. Registrations &amp; Recognitions</span>
              </a>
              <a
                href="#collaborations"
                className="px-4 py-2.5 rounded-xl bg-white border border-slate-200/90 text-slate-700 hover:border-[#0284C7] hover:text-[#0284C7] hover:bg-[#F0F9FF]/60 hover:shadow-xs hover:-translate-y-0.5 active:scale-95 transition-all duration-150 inline-flex items-center gap-2 shadow-2xs group"
              >
                <Layers className="w-3.5 h-3.5 text-[#0284C7] transition-transform group-hover:scale-110" />
                <span>02. Industry Collaborations</span>
              </a>
              <a
                href="#mentorship"
                className="px-4 py-2.5 rounded-xl bg-white border border-slate-200/90 text-slate-700 hover:border-[#0284C7] hover:text-[#0284C7] hover:bg-[#F0F9FF]/60 hover:shadow-xs hover:-translate-y-0.5 active:scale-95 transition-all duration-150 inline-flex items-center gap-2 shadow-2xs group"
              >
                <Users2 className="w-3.5 h-3.5 text-[#0284C7] transition-transform group-hover:scale-110" />
                <span>03. Mentorship Network</span>
              </a>
              <a
                href="#certificates"
                className="px-4 py-2.5 rounded-xl bg-white border border-slate-200/90 text-slate-700 hover:border-[#10B981] hover:text-[#10B981] hover:bg-emerald-50/60 hover:shadow-xs hover:-translate-y-0.5 active:scale-95 transition-all duration-150 inline-flex items-center gap-2 shadow-2xs group"
              >
                <Award className="w-3.5 h-3.5 text-[#10B981] transition-transform group-hover:scale-110" />
                <span>04. Genuine Certificates</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 01 / REGISTRATIONS & RECOGNITIONS */}
      <RecognitionsSection onOpenCertificate={openLightbox} />

      {/* 02 / INDUSTRY COLLABORATIONS */}
      <CollaborationsSection />

      {/* 03 / INDUSTRY MENTORSHIP NETWORK */}
      <MentorshipSection />

      {/* 04 / GENUINE CERTIFICATES & RECOGNITION DOCUMENTS */}
      <CertificatesSection onOpenLightbox={openLightbox} />

      {/* 05 / LEADERSHIP & DIRECT VERIFICATION INQUIRIES */}
      <section className="bg-white border-t border-slate-200 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div className="bg-[#F8FAFC] border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-xs">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold mb-4">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Direct Institutional Inquiries</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0B192C] tracking-tight">
                Academic Leadership &amp; Board Inquiries.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
                School principals, university admissions officers, and prospective academic partners are invited to contact our leadership directly for comprehensive program documentation, curriculum rubrics, or official verification dossiers.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  to="/contact"
                  variant="primary"
                  size="lg"
                  icon={ArrowRight}
                  className="shadow-md"
                >
                  Schedule Leadership Briefing
                </Button>
                <Button
                  href={`https://wa.me/${COMPANY.contact.whatsappRaw}?text=${encodeURIComponent(
                    COMPANY.contact.whatsappDefaultMsg
                  )}`}
                  variant="secondary"
                  size="lg"
                  icon={MessageCircle}
                  iconPosition="left"
                  className="shadow-xs"
                >
                  WhatsApp: {COMPANY.contact.whatsapp}
                </Button>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#0284C7]" />
                  <span>{COMPANY.contact.email}</span>
                </span>
                <span className="text-slate-300">•</span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#0284C7]" />
                  <span>{COMPANY.contact.phones[0]}</span>
                </span>
                <span className="text-slate-300">•</span>
                <span>Response within 4 business hours</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Lightbox Modal for Certificate Inspection */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={certificateLightboxItems}
        currentIndex={lightboxIndex}
        onNavigate={setLightboxIndex}
      />
    </div>
  );
}
