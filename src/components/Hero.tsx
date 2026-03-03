import React from 'react';
import { Button } from './ui/button';
import { Github, Linkedin, Mail, Code2, Sparkles } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const Hero = () => {
  const { isDarkMode } = useTheme();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center pt-24 pb-24 px-4 md:px-6 lg:px-8 relative overflow-hidden transition-colors duration-700 ${
        isDarkMode
          ? 'bg-gradient-to-br from-[#0A0C14] via-[#1C1F3A] to-[#0D0F1A]'
          : 'bg-gradient-to-br from-white via-blue-50/40 to-indigo-50/30'
      }`}
    >
      {/* Decorative Elements - Refined and Subtle */}
      <div className={`absolute top-20 right-10 w-[500px] h-[500px] rounded-full blur-[120px] transition-colors duration-700 ${
        isDarkMode ? 'bg-blue-500/15' : 'bg-blue-200/30'
      }`}></div>
      <div className={`absolute bottom-20 left-10 w-[600px] h-[600px] rounded-full blur-[120px] transition-colors duration-700 ${
        isDarkMode ? 'bg-indigo-500/15' : 'bg-indigo-200/30'
      }`}></div>
      
      <div className="max-w-[1200px] mx-auto text-center relative z-10 w-full">
        {/* Badge */}
        <div className={`inline-flex items-center gap-2 px-4 py-2.5 border-2 rounded-full mb-8 shadow-sm transition-colors duration-700 ${
          isDarkMode 
            ? 'bg-white/5 backdrop-blur-xl border-white/20 text-gray-300' 
            : 'bg-white/90 backdrop-blur-sm border-blue-200/60 text-gray-700'
        }`}>
          <Sparkles className={isDarkMode ? 'text-blue-400' : 'text-blue-600'} size={16} />
          <span className="text-sm font-semibold">Available for opportunities</span>
        </div>

        {/* Main Headline - Value-driven */}
        <h1 className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-6 font-bold leading-tight transition-colors duration-700 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Suchith kumar</span></h1>

        {/* Subheading */}
        <p className={`text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed transition-colors duration-700 ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          Computer Science student passionate about creating intuitive interfaces and solving complex problems through clean, maintainable code.
        </p>

        {/* CTA Buttons - Consistent 12px radius, proper spacing */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            size="lg"
            onClick={() => scrollToSection('projects')}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-6 text-lg rounded-xl shadow-[0_10px_15px_-3px_rgba(37,99,235,0.3)] hover:shadow-[0_20px_25px_-5px_rgba(37,99,235,0.4)] transition-all duration-300"
          >
            <Code2 size={20} className="mr-2" />
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('contact')}
            className={`border-2 px-8 py-6 text-lg rounded-xl transition-all duration-300 ${
              isDarkMode
                ? 'border-blue-400 text-blue-400 hover:bg-blue-400/10'
                : 'border-blue-600 text-blue-700 hover:bg-blue-50'
            }`}
          >
            <Mail size={20} className="mr-2" />
            Contact Me
          </Button>
        </div>

        {/* Social Icons - Consistent 12px radius */}
        <div className="flex gap-4 justify-center">
          <a
            href="https://github.com/Suchith-136"
            target="_blank"
            rel="noopener noreferrer"
            className={`w-14 h-14 flex items-center justify-center rounded-xl border-2 transition-all duration-300 shadow-sm hover:shadow-md group ${
              isDarkMode
                ? 'bg-white/5 border-white/20 hover:border-blue-400 hover:bg-blue-400/10'
                : 'bg-white border-gray-200 hover:border-blue-600 hover:bg-gradient-to-br hover:from-blue-50 hover:to-white'
            }`}
            aria-label="GitHub"
          >
            <Github className={`transition-colors ${
              isDarkMode ? 'text-gray-300 group-hover:text-blue-400' : 'text-gray-700 group-hover:text-blue-600'
            }`} size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/k-suchith-kumar-685a49313"
            target="_blank"
            rel="noopener noreferrer"
            className={`w-14 h-14 flex items-center justify-center rounded-xl border-2 transition-all duration-300 shadow-sm hover:shadow-md group ${
              isDarkMode
                ? 'bg-white/5 border-white/20 hover:border-blue-400 hover:bg-blue-400/10'
                : 'bg-white border-gray-200 hover:border-blue-600 hover:bg-gradient-to-br hover:from-blue-50 hover:to-white'
            }`}
            aria-label="LinkedIn"
          >
            <Linkedin className={`transition-colors ${
              isDarkMode ? 'text-gray-300 group-hover:text-blue-400' : 'text-gray-700 group-hover:text-blue-600'
            }`} size={24} />
          </a>
          <a
            href="mailto:kollurisuchithkumar4@gmail.com"
            className={`w-14 h-14 flex items-center justify-center rounded-xl border-2 transition-all duration-300 shadow-sm hover:shadow-md group ${
              isDarkMode
                ? 'bg-white/5 border-white/20 hover:border-blue-400 hover:bg-blue-400/10'
                : 'bg-white border-gray-200 hover:border-blue-600 hover:bg-gradient-to-br hover:from-blue-50 hover:to-white'
            }`}
            aria-label="Email"
          >
            <Mail className={`transition-colors ${
              isDarkMode ? 'text-gray-300 group-hover:text-blue-400' : 'text-gray-700 group-hover:text-blue-600'
            }`} size={24} />
          </a>
        </div>
      </div>

      {/* Bottom section separator */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-[1px] transition-opacity duration-700 ${
          isDarkMode ? 'bg-white/5' : 'bg-gray-200/50'
        }`}
      />
    </section>
  );
};