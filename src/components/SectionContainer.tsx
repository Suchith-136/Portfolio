import React from 'react';

interface SectionContainerProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
  isDarkMode: boolean;
}

/**
 * Standardized section container following design system guidelines:
 * - 96px (12rem) vertical padding
 * - 1200px max-width container
 * - Consistent background alternation for visual rhythm
 * - Section separators with subtle dividers
 */
export const SectionContainer: React.FC<SectionContainerProps> = ({
  id,
  children,
  className = '',
  variant = 'primary',
  isDarkMode,
}) => {
  // Background variants for section alternation
  const backgroundVariants = {
    primary: isDarkMode
      ? 'bg-gradient-to-br from-[#0A0C14] via-[#111420] to-[#0A0C14]' // Deep navy/charcoal
      : 'bg-white',
    secondary: isDarkMode
      ? 'bg-gradient-to-br from-[#111318] via-[#1C1F3A] to-[#111318]' // Slightly lighter navy
      : 'bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50',
    tertiary: isDarkMode
      ? 'bg-gradient-to-br from-[#0F1117] via-[#1A1D2E] to-[#0F1117]' // Dark navy
      : 'bg-gradient-to-br from-white via-slate-50 to-white',
    quaternary: isDarkMode
      ? 'bg-gradient-to-br from-[#0D0F1A] via-[#161929] to-[#0D0F1A]' // Deep blue-black
      : 'bg-gradient-to-br from-blue-50/20 via-white to-blue-50/20',
  };

  return (
    <section
      id={id}
      className={`py-24 md:py-[96px] px-4 md:px-6 lg:px-8 relative overflow-hidden transition-colors duration-700 ${backgroundVariants[variant]} ${className}`}
    >
      {/* Subtle top divider for section separation */}
      <div
        className={`absolute top-0 left-0 right-0 h-[1px] transition-opacity duration-700 ${
          isDarkMode ? 'bg-white/5' : 'bg-gray-200/50'
        }`}
      />
      
      {/* Content with max-width container (1200px) */}
      <div className="max-w-[1200px] mx-auto relative z-10">
        {children}
      </div>
    </section>
  );
};
