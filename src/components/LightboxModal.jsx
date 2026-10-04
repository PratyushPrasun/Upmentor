import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw, ShieldCheck, FileText, ExternalLink, Download } from 'lucide-react';

export default function LightboxModal({
  isOpen,
  onClose,
  items = [],
  currentIndex = 0,
  onNavigate
}) {
  const [scale, setScale] = useState(1);

  const currentItem = items[currentIndex];

  const handlePrev = useCallback(() => {
    setScale(1);
    if (onNavigate) {
      onNavigate((currentIndex - 1 + items.length) % items.length);
    }
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    setScale(1);
    if (onNavigate) {
      onNavigate((currentIndex + 1) % items.length);
    }
  }, [currentIndex, items.length, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handlePrev, handleNext]);

  useEffect(() => {
    setScale(1);
  }, [currentIndex, isOpen]);

  if (!isOpen || !currentItem) return null;

  const isCertificate = Boolean(currentItem.pdfUrl || currentItem.certificateNumber);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Top Bar Controls */}
      <div className="absolute top-4 inset-x-4 sm:inset-x-8 flex items-center justify-between text-white z-20">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono bg-white/10 px-2.5 py-1 rounded-md text-white/80">
            {currentIndex + 1} / {items.length}
          </span>
          {currentItem.status && (
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-500/30">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{currentItem.status}</span>
            </span>
          )}
          {isCertificate && (
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 bg-sky-950/60 px-2.5 py-1 rounded-md border border-sky-500/30">
              <FileText className="w-3.5 h-3.5" />
              <span>Official Government Document</span>
            </span>
          )}
        </div>

        {/* Zoom controls & Close */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {currentItem.pdfUrl && (
            <a
              href={currentItem.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-b from-[#0284C7] to-[#0369A1] hover:from-[#0369A1] hover:to-[#075985] text-xs font-semibold text-white border border-[#38BDF8]/40 shadow-xs active:scale-95 transition-all mr-2"
              title="Open Official PDF in New Tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Open Official PDF</span>
            </a>
          )}
          <button
            type="button"
            onClick={() => setScale((s) => Math.max(0.6, s - 0.25))}
            className="w-8 h-8 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white/90 hover:text-white flex items-center justify-center transition-all duration-150 cursor-pointer active:scale-90 shadow-2xs"
            title="Zoom Out"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => setScale(1)}
            className="w-8 h-8 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white/90 hover:text-white flex items-center justify-center transition-all duration-150 cursor-pointer active:scale-90 shadow-2xs"
            title="Reset Zoom"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => setScale((s) => Math.min(2.5, s + 0.25))}
            className="w-8 h-8 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white/90 hover:text-white flex items-center justify-center transition-all duration-150 cursor-pointer active:scale-90 shadow-2xs"
            title="Zoom In"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-white/15 hover:bg-rose-600/90 border border-white/20 hover:border-rose-400 text-white flex items-center justify-center transition-all duration-150 cursor-pointer active:scale-90 shadow-2xs ml-1 sm:ml-2"
            title="Close Lightbox (Esc)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Prev Navigation Button */}
      {items.length > 1 && (
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous image"
          className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white/90 hover:text-white border border-white/20 hover:border-white/40 backdrop-blur-md flex items-center justify-center transition-all duration-200 shadow-xl hover:scale-105 active:scale-95 z-20 cursor-pointer focus:outline-none"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      )}

      {/* Next Navigation Button */}
      {items.length > 1 && (
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next image"
          className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white/90 hover:text-white border border-white/20 hover:border-white/40 backdrop-blur-md flex items-center justify-center transition-all duration-200 shadow-xl hover:scale-105 active:scale-95 z-20 cursor-pointer focus:outline-none"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      )}

      {/* Center Image Container */}
      <div className="relative max-w-5xl max-h-[82vh] w-full p-4 flex flex-col items-center justify-center overflow-hidden">
        <div
          className="transition-transform duration-200 ease-out origin-center flex items-center justify-center max-h-[66vh] overflow-auto"
          style={{ transform: `scale(${scale})` }}
        >
          <img
            src={currentItem.src || currentItem.previewImage}
            alt={currentItem.alt || currentItem.title || 'Certificate Preview'}
            className="max-h-[65vh] max-w-full w-auto object-contain rounded-xl shadow-2xl bg-white border border-slate-700/50"
          />
        </div>

        {/* Caption Card at Bottom */}
        <div className="mt-4 max-w-3xl w-full text-center text-white bg-slate-900/90 backdrop-blur-md px-6 py-3.5 rounded-2xl border border-white/10 shadow-xl">
          <h4 className="font-display font-bold text-base sm:text-lg text-slate-100">
            {currentItem.title || 'Official Document'}
          </h4>
          {currentItem.caption && (
            <p className="mt-1 text-xs sm:text-sm text-slate-300">
              {currentItem.caption}
            </p>
          )}
          {currentItem.issuer && (
            <p className="mt-1 text-xs text-sky-300 font-medium">
              {currentItem.issuer}
              {currentItem.certificateNumber ? ` • Ref: ${currentItem.certificateNumber}` : ''}
              {currentItem.dateOfIssue ? ` • Issued: ${currentItem.dateOfIssue}` : ''}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
