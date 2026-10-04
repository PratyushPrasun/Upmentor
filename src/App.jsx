import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop';
import { LOGO } from './data/assets';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const ForSchools = lazy(() => import('./pages/ForSchools'));
const Credentials = lazy(() => import('./pages/Credentials'));
const Contact = lazy(() => import('./pages/Contact'));

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-3">
      <div className="w-10 h-10 rounded-xl overflow-hidden shadow-sm border border-slate-200 p-1 animate-pulse">
        <img src={LOGO.src} alt={LOGO.alt} className="w-full h-full object-contain" />
      </div>
      <span className="text-xs font-mono font-semibold text-slate-400">Loading UpMentor...</span>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0B192C]">
        <Navbar />
        <main className="flex-1">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/for-schools" element={<ForSchools />} />
              <Route path="/credentials" element={<Credentials />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/book-demo" element={<Navigate to="/contact" replace />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </BrowserRouter>
  );
}
