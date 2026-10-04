import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'right',
  disabled = false,
  loading = false,
  type = 'button',
  shimmer = true,
  ...props
}) {
  const baseClasses =
    'relative inline-flex items-center justify-center font-semibold tracking-tight select-none cursor-pointer whitespace-nowrap overflow-hidden transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] active:translate-y-px disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed group';

  const sizeClasses = {
    xs: 'text-xs px-3 py-1.5 gap-1.5 rounded-lg',
    sm: 'text-xs sm:text-sm px-4 py-2 gap-1.5 rounded-xl',
    md: 'text-sm px-5 py-2.5 gap-2 rounded-xl',
    lg: 'text-base px-6 py-3 gap-2.5 rounded-xl',
    xl: 'text-base sm:text-lg px-7 py-4 gap-3 rounded-2xl'
  };

  const variantClasses = {
    // Ultra-premium Obsidian Navy with specular top rim highlight and ambient shadow
    primary:
      'bg-gradient-to-b from-[#132238] to-[#0B192C] text-white border border-[#1E2E45] shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_2px_6px_rgba(11,25,44,0.2),0_6px_18px_-2px_rgba(11,25,44,0.28)] hover:from-[#1A2D4A] hover:to-[#0F2036] hover:border-[#2C4160] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_4px_12px_rgba(11,25,44,0.28),0_10px_24px_-3px_rgba(11,25,44,0.38)] hover:-translate-y-0.5 focus-visible:ring-[#0284C7]',

    // Radiant Electric AI Blue with luminous glow
    blue:
      'bg-gradient-to-b from-[#0284C7] to-[#0369A1] text-white border border-[#38BDF8]/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_2px_8px_rgba(2,132,199,0.25),0_6px_20px_-2px_rgba(2,132,199,0.35)] hover:from-[#0369A1] hover:to-[#075985] hover:border-[#38BDF8]/60 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_4px_14px_rgba(2,132,199,0.35),0_10px_26px_-3px_rgba(2,132,199,0.48)] hover:-translate-y-0.5 focus-visible:ring-[#0284C7]',

    // Energetic Mint/Emerald with vivid depth
    accent:
      'bg-gradient-to-b from-[#10B981] to-[#059669] text-white border border-[#34D399]/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_2px_8px_rgba(16,185,129,0.25),0_6px_20px_-2px_rgba(16,185,129,0.35)] hover:from-[#059669] hover:to-[#047857] hover:border-[#34D399]/60 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_4px_14px_rgba(16,185,129,0.35),0_10px_26px_-3px_rgba(16,185,129,0.48)] hover:-translate-y-0.5 focus-visible:ring-[#10B981]',

    // Pristine Ivory/White Card with crisp border and subtle elevation
    secondary:
      'bg-gradient-to-b from-white to-[#F8FAFC] text-[#0B192C] border border-slate-200/90 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_2px_6px_rgba(0,0,0,0.03)] hover:bg-white hover:border-slate-300 hover:shadow-[0_4px_14px_rgba(11,25,44,0.08)] hover:-translate-y-0.5 focus-visible:ring-slate-400',

    // Sleek Refined Frosted Outline
    outline:
      'bg-white/70 backdrop-blur-xs text-[#0B192C] border border-slate-300/90 shadow-2xs hover:bg-white hover:border-[#0284C7] hover:text-[#0284C7] hover:shadow-xs hover:-translate-y-0.5 focus-visible:ring-[#0284C7]',

    // Ghost
    ghost:
      'bg-transparent text-slate-700 hover:text-[#0B192C] hover:bg-slate-100/80 focus-visible:ring-slate-300',

    // Dark Frosted Glass for overlays and dark cards
    glass:
      'bg-slate-900/80 backdrop-blur-md text-white border border-slate-700/80 hover:bg-slate-800 hover:border-slate-600 shadow-sm hover:shadow-md hover:-translate-y-0.5 focus-visible:ring-slate-400'
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size] || sizeClasses.md} ${
    variantClasses[variant] || variantClasses.primary
  } ${className}`;

  const isLightVariant = variant === 'secondary' || variant === 'outline' || variant === 'ghost';

  const innerContent = (
    <>
      {/* Specular sheen sweep effect on hover */}
      {shimmer && !disabled && (
        <span
          className={`pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 transition-transform ease-out ${
            isLightVariant
              ? 'bg-gradient-to-r from-transparent via-slate-400/10 to-transparent'
              : 'bg-gradient-to-r from-transparent via-white/20 to-transparent'
          }`}
          aria-hidden="true"
        />
      )}

      {/* Button content layout */}
      <span className="relative z-10 inline-flex items-center justify-center gap-2">
        {loading ? (
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin shrink-0" />
        ) : Icon && iconPosition === 'left' ? (
          <Icon className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:-translate-x-0.5" />
        ) : null}

        <span className="inline-flex items-center gap-1.5">{children}</span>

        {!loading && Icon && iconPosition === 'right' && (
          <Icon className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />
        )}
      </span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {innerContent}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {innerContent}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={combinedClasses}
      {...props}
    >
      {innerContent}
    </button>
  );
}
