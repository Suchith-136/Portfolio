import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const Footer = () => {
  const { isDarkMode } = useTheme();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={`py-16 px-4 md:px-6 lg:px-8 relative overflow-hidden transition-colors duration-700 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-[#0A0C14] via-[#0F1117] to-[#0A0C14]' 
        : 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
    } text-white`}>
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Column */}
          <div>
            <h3 className="text-2xl mb-4 font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Kolluri Suchith Kumar
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Computer Science student passionate about building scalable, user-focused web solutions 
              and solving real-world problems through clean, maintainable code.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl mb-6 font-bold">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Projects', 'Skills', 'Certifications', 'Resume', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-blue-400 group-hover:w-4 transition-all duration-300"></span>
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h3 className="text-xl mb-6 font-bold">Connect With Me</h3>
            <div className="flex gap-4 mb-6">
              <a 
                href="https://github.com/Suchith-136"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-600 transition-all duration-300 hover:scale-110 shadow-lg group"
                aria-label="GitHub"
              >
                <Github size={20} className="group-hover:text-white transition-colors" />
              </a>
              <a 
                href="https://www.linkedin.com/in/k-suchith-kumar-685a49313"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-600 transition-all duration-300 hover:scale-110 shadow-lg group"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="group-hover:text-white transition-colors" />
              </a>
              <a 
                href="mailto:kollurisuchithkumar4@gmail.com"
                className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-indigo-500 hover:to-indigo-600 transition-all duration-300 hover:scale-110 shadow-lg group"
                aria-label="Email"
              >
                <Mail size={20} className="group-hover:text-white transition-colors" />
              </a>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              <span className="font-semibold text-blue-400">Email:</span><br />
              kollurisuchithkumar4@gmail.com
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Kolluri Suchith Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};