import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LOGO } from '../data/assets';
import { NAV_LINKS } from '../data/content';
import Button from './Button';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80'
          : 'bg-[#F8FAFC]/90 backdrop-blur-sm border-b border-slate-200/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo & Brand Identity */}
          <Link to="/" className="flex items-center gap-3 group" aria-label="UpMentor Homepage">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden shadow-xs border border-slate-200 bg-white p-1 transition-transform group-hover:scale-105">
              <img
                src={LOGO.src}
                alt={LOGO.alt}
                className="w-full h-full object-contain"
                loading="eager"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg sm:text-xl text-[#0B192C] tracking-tight leading-none">
                Up<span className="text-[#0284C7]">Mentor</span>
              </span>
              <span className="text-[10px] font-semibold text-slate-500 tracking-wider uppercase mt-1">
                AI Infrastructure
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5" aria-label="Main Navigation">
            {NAV_LINKS.filter((l) => l.path !== '/contact').map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all relative ${
                    isActive
                      ? 'text-[#0284C7] bg-[#F0F9FF] font-semibold'
                      : 'text-slate-600 hover:text-[#0B192C] hover:bg-slate-100/70'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-3 right-3 h-0.5 bg-[#0284C7] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Primary Action Button */}
          <div className="hidden md:flex items-center">
            <Button
              to="/contact"
              variant="primary"
              size="sm"
              icon={ArrowUpRight}
              className="shadow-sm"
            >
              Book a Demo
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <Button to="/contact" variant="primary" size="xs">
              Demo
            </Button>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl border border-slate-200/80 bg-white hover:bg-slate-50 text-slate-700 hover:text-[#0B192C] shadow-2xs hover:shadow-xs transition-all active:scale-95 cursor-pointer focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-5 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-[#F0F9FF] text-[#0284C7]'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100">
            <Button
              to="/contact"
              variant="primary"
              size="md"
              icon={ArrowUpRight}
              className="w-full justify-center"
            >
              Book a Demo for Your School
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
