import React from 'react';

export default function Card({
  children,
  className = '',
  hoverEffect = true,
  tint = 'white', // 'white', 'tinted', 'blue', 'green'
  border = true,
  padding = 'p-6 sm:p-8',
  ...props
}) {
  const tintClasses = {
    white: 'bg-white',
    tinted: 'bg-slate-50/70',
    blue: 'bg-[#F0F9FF]/80',
    green: 'bg-[#F0FDF4]/80'
  };

  const borderClass = border ? 'border border-slate-200/90' : '';
  const hoverClass = hoverEffect ? 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-slate-300' : '';

  return (
    <div
      className={`rounded-2xl ${tintClasses[tint] || tintClasses.white} ${borderClass} ${padding} ${hoverClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
