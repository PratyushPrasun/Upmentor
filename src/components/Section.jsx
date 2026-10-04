import React from 'react';
import Reveal from './Reveal';

export default function Section({
  id,
  numeral,
  badge,
  title,
  highlight,
  subtitle,
  children,
  className = '',
  bg = 'default', // 'default' (#F8FAFC), 'white' (#FFFFFF), 'muted' (#F1F5F9)
  hairline = true,
  centered = false,
  containerClassName = ''
}) {
  const bgClasses = {
    default: 'bg-[#F8FAFC]',
    white: 'bg-white',
    muted: 'bg-slate-50'
  };

  return (
    <section
      id={id}
      className={`relative py-16 sm:py-24 ${bgClasses[bg] || bgClasses.default} ${
        hairline ? 'border-b border-slate-200/80' : ''
      } ${className}`}
    >
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}>
        {(numeral || badge || title || subtitle) && (
          <div className={`mb-12 sm:mb-16 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'}`}>
            <Reveal>
              <div className={`flex items-center gap-3 mb-3 ${centered ? 'justify-center' : ''}`}>
                {numeral && (
                  <span className="font-mono text-xs uppercase tracking-wider text-[#0284C7] font-semibold bg-[#F0F9FF] px-2.5 py-1 rounded-md border border-[#0284C7]/20">
                    {numeral}
                  </span>
                )}
                {badge && (
                  <span className="text-xs uppercase font-bold tracking-widest text-[#059669] bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/60">
                    {badge}
                  </span>
                )}
              </div>
            </Reveal>

            {title && (
              <Reveal delay={0.1}>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B192C] tracking-tight leading-[1.15]">
                  {title} {highlight && <span className="italic font-normal text-[#0284C7]">{highlight}</span>}
                </h2>
              </Reveal>
            )}

            {subtitle && (
              <Reveal delay={0.2}>
                <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                  {subtitle}
                </p>
              </Reveal>
            )}
          </div>
        )}

        {children}
      </div>
    </section>
  );
}
