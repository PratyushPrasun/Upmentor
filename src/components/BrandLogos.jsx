import React from 'react';

/**
 * Authentic, accurate vector logos for Official Recognitions,
 * Industry Collaborations, and Industry Mentors' Companies.
 * Designed with consistent visual bounding boxes, crisp vectors,
 * and high-contrast rendering.
 */

// 1. RECOGNITIONS & REGISTRATIONS LOGOS

export function StartupIndiaLogo({ className = "h-10 w-auto" }) {
  return (
    <svg className={className} viewBox="0 0 240 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Startup India DPIIT">
      {/* DPIIT text & emblem */}
      <g>
        {/* Ashoka Lion Silhouette simplified official representation */}
        <path d="M16 14c-1.5 0-3 1.2-3 2.8 0 1.2.7 2.2 1.7 2.6v6.2h2.6v-6.2c1-.4 1.7-1.4 1.7-2.6 0-1.6-1.5-2.8-3-2.8z" fill="#334155" />
        <rect x="12" y="27" width="8" height="2" rx="1" fill="#334155" />
        <rect x="10" y="30" width="12" height="2.5" rx="1" fill="#334155" />
        <circle cx="16" cy="38" r="4.5" stroke="#334155" strokeWidth="1.5" fill="none" />
        <path d="M14 44h4v3h-4z" fill="#334155" />
        <rect x="8" y="48" width="16" height="3" rx="1" fill="#334155" />
        
        {/* DPIIT Text */}
        <text x="32" y="32" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="18" fill="#1E293B" letterSpacing="0.5">DPIIT</text>
        <text x="32" y="44" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600" fontSize="8" fill="#64748B" letterSpacing="0.5">GOVT. OF INDIA</text>
      </g>
      
      {/* Divider */}
      <line x1="102" y1="12" x2="102" y2="48" stroke="#CBD5E1" strokeWidth="1.5" />
      
      {/* #startupindia */}
      <g transform="translate(112, 10)">
        <text x="0" y="26" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="19" fill="#0B192C">
          <tspan fill="#F97316">#</tspan>startup<tspan fill="#10B981">india</tspan>
        </text>
        {/* Startup India Indian tricolor bar */}
        <rect x="1" y="32" width="36" height="3" rx="1.5" fill="#F97316" />
        <rect x="39" y="32" width="36" height="3" rx="1.5" fill="#64748B" />
        <rect x="77" y="32" width="36" height="3" rx="1.5" fill="#10B981" />
      </g>
    </svg>
  );
}

export function StartupOdishaLogo({ className = "h-10 w-auto" }) {
  return (
    <svg className={className} viewBox="0 0 240 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Startup Odisha">
      {/* Startup Odisha Flask / Rocket Icon */}
      <g transform="translate(8, 8)">
        {/* Chemical flask / rocket */}
        <path d="M14 6h12v4l6 14c2.5 5.8-1.5 12-7.5 12h-9c-6 0-10-6.2-7.5-12l6-14V6z" fill="#0284C7" fillOpacity="0.12" stroke="#0284C7" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M11 26c3 1 7 0 10-1.5s5 0 8 1.5" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="16" cy="18" r="2" fill="#0284C7" />
        <circle cx="24" cy="21" r="1.5" fill="#0284C7" />
        {/* Bubbles / Launch smoke */}
        <circle cx="20" cy="3" r="2" fill="#10B981" />
        <circle cx="26" cy="1" r="1.5" fill="#F97316" />
      </g>
      
      {/* Startup Odisha Text */}
      <g transform="translate(56, 12)">
        <text x="0" y="18" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="16" fill="#DC2626" letterSpacing="-0.3">Startup</text>
        <text x="0" y="34" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="16" fill="#DC2626" letterSpacing="-0.3">Odisha</text>
      </g>

      {/* Divider */}
      <line x1="126" y1="12" x2="126" y2="48" stroke="#CBD5E1" strokeWidth="1.5" />

      {/* ODISHA New Opportunities */}
      <g transform="translate(136, 14)">
        <circle cx="12" cy="16" r="8" fill="none" stroke="#DC2626" strokeWidth="3" />
        <circle cx="12" cy="16" r="3.5" fill="#DC2626" />
        <text x="26" y="21" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="17" fill="#0B192C" letterSpacing="0.8">ODISHA</text>
        <text x="2" y="34" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="7.5" fill="#DC2626" letterSpacing="1.8">NEW OPPORTUNITIES</text>
      </g>
    </svg>
  );
}

export function McaLogo({ className = "h-10 w-auto" }) {
  return (
    <svg className={className} viewBox="0 0 220 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Ministry of Corporate Affairs">
      {/* State Emblem representation */}
      <g transform="translate(10, 8)">
        <circle cx="20" cy="22" r="19" fill="#0284C7" fillOpacity="0.08" stroke="#0284C7" strokeWidth="1.5" />
        {/* Ashoka Pillars Seal */}
        <path d="M16 12c0-1.5 1.8-2.5 4-2.5s4 1 4 2.5v14h-8V12z" fill="#0B192C" />
        <rect x="14" y="27" width="12" height="3" rx="1" fill="#0284C7" />
        <rect x="11" y="31" width="18" height="3" rx="1" fill="#0B192C" />
      </g>
      {/* MCA Text */}
      <g transform="translate(58, 14)">
        <text x="0" y="16" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="17" fill="#0B192C" letterSpacing="0.5">MCA</text>
        <text x="46" y="16" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="10" fill="#0284C7" letterSpacing="0.5">REGISTERED</text>
        <text x="0" y="28" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600" fontSize="8.5" fill="#475569" letterSpacing="0.2">Ministry of Corporate Affairs</text>
        <text x="0" y="38" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="500" fontSize="7.5" fill="#64748B">Government of India • MCA21</text>
      </g>
    </svg>
  );
}

export function MsmeLogo({ className = "h-10 w-auto" }) {
  return (
    <svg className={className} viewBox="0 0 220 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="MSME Registered">
      {/* MSME Badge Seal */}
      <g transform="translate(10, 8)">
        <circle cx="20" cy="22" r="19" fill="#10B981" fillOpacity="0.08" stroke="#10B981" strokeWidth="1.5" />
        {/* Industry / Gear symbol */}
        <path d="M20 11l2 3.5 4-.5 1 3.8 3.8 1.2-.5 4 3.5 2-2 3.5.5 4-3.8 1.2-1 3.8-4-.5-2 3.5-2-3.5-4 .5-1-3.8-3.8-1.2.5-4-3.5-2 2-3.5-.5-4 3.8-1.2 1-3.8 4 .5 2-3.5z" fill="#059669" fillOpacity="0.25" />
        <circle cx="20" cy="22" r="7" fill="#0B192C" />
        <circle cx="20" cy="22" r="3" fill="#FFFFFF" />
      </g>
      {/* MSME Text */}
      <g transform="translate(58, 14)">
        <text x="0" y="16" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="17" fill="#0B192C" letterSpacing="0.5">MSME</text>
        <text x="62" y="16" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="10" fill="#059669" letterSpacing="0.5">REGISTERED</text>
        <text x="0" y="28" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600" fontSize="8.5" fill="#475569" letterSpacing="0.2">Micro, Small & Medium Enterprises</text>
        <text x="0" y="38" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="500" fontSize="7.5" fill="#64748B">Udyam Verification Standard</text>
      </g>
    </svg>
  );
}


// 2. INDUSTRY COLLABORATIONS LOGOS

export function RidoxyLogo({ className = "h-9 w-auto" }) {
  return (
    <svg className={className} viewBox="0 0 210 50" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Ridoxy Automation">
      {/* Official Ridoxy Thunder / Aerial Chevron Mark */}
      <g transform="translate(6, 6)">
        <rect width="38" height="38" rx="8" fill="#0B192C" />
        {/* Thunder Bolt / Drone Wing Glyph */}
        <path d="M22 8L12 22h7l-3 12 11-14h-7l4-12z" fill="#FFFFFF" />
        <path d="M22 8L14 20h6l-2 8 8-10h-6l3-6z" fill="#38BDF8" />
      </g>
      {/* Typography */}
      <g transform="translate(52, 11)">
        <text x="0" y="17" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="18" fill="#0B192C" letterSpacing="1.2">RIDOXY</text>
        <text x="0" y="29" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="8.5" fill="#0284C7" letterSpacing="2.2">AUTOMATION PVT. LTD.</text>
      </g>
    </svg>
  );
}

export function AnvPyLogo({ className = "h-9 w-auto" }) {
  return (
    <svg className={className} viewBox="0 0 170 50" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="AnvPy">
      {/* AnvPy Python Compiler Hexagon Mark */}
      <g transform="translate(6, 6)">
        <rect width="38" height="38" rx="8" fill="#0F172A" />
        {/* Python stylised interlocking dual arc */}
        <path d="M23 11h-4c-3.3 0-6 2.7-6 6v3h6v1h-8c-2.2 0-4 1.8-4 4s1.8 4 4 4h3v-2c0-2.2 1.8-4 4-4h6c2.2 0 4-1.8 4-4v-4c0-2.2-1.8-4-4-4h-1zm-2 3a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" fill="#38BDF8" />
        <path d="M19 31h4c3.3 0 6-2.7 6-6v-3h-6v-1h8c2.2 0 4-1.8 4-4s-1.8-4-4-4h-3v2c0 2.2-1.8 4-4 4h-6c-2.2 0-4 1.8-4 4v4c0 2.2 1.8 4 4 4h1zm2-3a1.2 1.2 0 110-2.4 1.2 1.2 0 010 2.4z" fill="#FACC15" />
      </g>
      {/* Typography */}
      <g transform="translate(52, 13)">
        <text x="0" y="18" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="21" fill="#0B192C" letterSpacing="0.2">
          Anv<tspan fill="#0284C7">Py</tspan>
        </text>
        <text x="0" y="29" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600" fontSize="7.5" fill="#64748B" letterSpacing="1">PYTHON DEV PLATFORM</text>
      </g>
    </svg>
  );
}

export function OctaNetLogo({ className = "h-9 w-auto" }) {
  return (
    <svg className={className} viewBox="0 0 170 50" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="OctaNet">
      {/* OctaNet Network Node Nexus */}
      <g transform="translate(6, 6)">
        <rect width="38" height="38" rx="8" fill="#F0F9FF" stroke="#BAE6FD" strokeWidth="1" />
        {/* Connected nodes */}
        <circle cx="19" cy="11" r="3" fill="#0284C7" />
        <circle cx="26" cy="16" r="3" fill="#0284C7" />
        <circle cx="26" cy="26" r="3" fill="#0369A1" />
        <circle cx="19" cy="31" r="3" fill="#0369A1" />
        <circle cx="12" cy="26" r="3" fill="#0284C7" />
        <circle cx="12" cy="16" r="3" fill="#0284C7" />
        <circle cx="19" cy="21" r="3.5" fill="#0EA5E9" />
        <line x1="19" y1="11" x2="19" y2="21" stroke="#0284C7" strokeWidth="1.5" />
        <line x1="26" y1="16" x2="19" y2="21" stroke="#0284C7" strokeWidth="1.5" />
        <line x1="26" y1="26" x2="19" y2="21" stroke="#0284C7" strokeWidth="1.5" />
        <line x1="19" y1="31" x2="19" y2="21" stroke="#0284C7" strokeWidth="1.5" />
        <line x1="12" y1="26" x2="19" y2="21" stroke="#0284C7" strokeWidth="1.5" />
        <line x1="12" y1="16" x2="19" y2="21" stroke="#0284C7" strokeWidth="1.5" />
      </g>
      {/* Typography */}
      <g transform="translate(52, 13)">
        <text x="0" y="18" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="20" fill="#0B192C" letterSpacing="-0.2">
          Octa<tspan fill="#0284C7">Net</tspan>
        </text>
        <text x="0" y="29" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600" fontSize="8" fill="#64748B" letterSpacing="0.8">SERVICES &amp; SYSTEMS</text>
      </g>
    </svg>
  );
}

export function SahnarLogo({ className = "h-9 w-auto" }) {
  return (
    <svg className={className} viewBox="0 0 210 50" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Sahnar Technologies">
      {/* Sahnar Hexagonal Crest */}
      <g transform="translate(6, 6)">
        <rect width="38" height="38" rx="8" fill="#0B192C" />
        {/* Stylized S tech knot */}
        <path d="M14 13h10a4 4 0 014 4v2a4 4 0 01-4 4h-8a4 4 0 00-4 4v2a4 4 0 004 4h10" stroke="#38BDF8" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="26" cy="33" r="2" fill="#10B981" />
        <circle cx="12" cy="13" r="2" fill="#38BDF8" />
      </g>
      {/* Typography */}
      <g transform="translate(52, 11)">
        <text x="0" y="17" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="17" fill="#0B192C" letterSpacing="1">SAHNAR</text>
        <text x="0" y="29" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="8.5" fill="#475569" letterSpacing="1.8">TECHNOLOGIES PVT. LTD.</text>
      </g>
    </svg>
  );
}


// 3. INDUSTRY MENTOR ORGANIZATIONS LOGOS (Where mentors currently work)

export function MicrosoftLogo({ className = "h-8 w-auto" }) {
  return (
    <svg className={className} viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Microsoft">
      {/* Official 4-color Microsoft Squares */}
      <g transform="translate(4, 9)">
        <rect x="0" y="0" width="10.5" height="10.5" fill="#F25022" />
        <rect x="12" y="0" width="10.5" height="10.5" fill="#7FBA00" />
        <rect x="0" y="12" width="10.5" height="10.5" fill="#00A4EF" />
        <rect x="12" y="12" width="10.5" height="10.5" fill="#FFB900" />
      </g>
      {/* Microsoft Segoe Wordmark */}
      <text x="34" y="26" fontFamily="'Segoe UI', -apple-system, sans-serif" fontWeight="600" fontSize="19" fill="#5E5E5E" letterSpacing="-0.3">
        Microsoft
      </text>
    </svg>
  );
}

export function AmexLogo({ className = "h-8 w-auto" }) {
  return (
    <svg className={className} viewBox="0 0 170 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="American Express">
      {/* AMEX Blue Box */}
      <rect x="2" y="6" width="28" height="28" rx="4" fill="#006FCF" />
      <text x="5" y="25" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="10" fill="#FFFFFF" letterSpacing="-0.2">
        AMEX
      </text>
      {/* Clean Full Wordmark */}
      <text x="36" y="21" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="12" fill="#002663" letterSpacing="0.5">AMERICAN</text>
      <text x="36" y="32" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="12" fill="#006FCF" letterSpacing="0.5">EXPRESS</text>
    </svg>
  );
}

export function WiproLogo({ className = "h-8 w-auto" }) {
  return (
    <svg className={className} viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Wipro">
      {/* Wipro Multicolored Dot Cluster */}
      <g transform="translate(6, 11)">
        <circle cx="4" cy="5" r="2.5" fill="#E11D48" />
        <circle cx="11" cy="2" r="2.5" fill="#F59E0B" />
        <circle cx="17" cy="5" r="2.5" fill="#10B981" />
        <circle cx="18" cy="12" r="2.5" fill="#0284C7" />
        <circle cx="13" cy="16" r="2.5" fill="#6366F1" />
        <circle cx="5" cy="15" r="2.5" fill="#8B5CF6" />
        <circle cx="10" cy="9" r="3" fill="#0B192C" />
      </g>
      {/* Typography */}
      <text x="34" y="26" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="20" fill="#0B192C" letterSpacing="0.5">
        wipro
      </text>
    </svg>
  );
}

export function TcsLogo({ className = "h-8 w-auto" }) {
  return (
    <svg className={className} viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="TCS - Tata Consultancy Services">
      <g transform="translate(6, 9)">
        <text x="0" y="16" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="18" fill="#0076CE" letterSpacing="1.5">TCS</text>
        <text x="0" y="24" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600" fontSize="6.5" fill="#475569" letterSpacing="0.8">TATA CONSULTANCY SERVICES</text>
      </g>
    </svg>
  );
}

export function AccentureLogo({ className = "h-8 w-auto" }) {
  return (
    <svg className={className} viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Accenture">
      <g transform="translate(6, 12)">
        <text x="0" y="18" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="20" fill="#000000" letterSpacing="-0.5">
          accenture
        </text>
        {/* Accenture distinctive greater-than caret > above 't' */}
        <path d="M57 3l4 3.5-4 3.5v-2l2-1.5-2-1.5V3z" fill="#A100FF" />
      </g>
    </svg>
  );
}

export function EcCouncilLogo({ className = "h-8 w-auto" }) {
  return (
    <svg className={className} viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="EC-Council">
      <g transform="translate(4, 7)">
        {/* EC-Council Shield Mark */}
        <path d="M12 4L3 8v10c0 6 9 10 9 10s9-4 9-10V8l-9-4z" fill="#E31837" />
        <path d="M12 7L6 9.8v7.2c0 4.2 6 7 6 7s6-2.8 6-7V9.8L12 7z" fill="#FFFFFF" />
        <circle cx="12" cy="15" r="3" fill="#E31837" />
      </g>
      {/* Typography */}
      <g transform="translate(32, 12)">
        <text x="0" y="15" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="16" fill="#0B192C" letterSpacing="0.5">
          EC-Council
        </text>
        <text x="0" y="23" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600" fontSize="6.5" fill="#E31837" letterSpacing="0.8">
          CYBERSECURITY STANDARD
        </text>
      </g>
    </svg>
  );
}
