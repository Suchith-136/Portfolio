import React from 'react';
import { Card } from './ui/card';
import { Mail, Linkedin, Github, MessageCircle } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const Contact = () => {
  const { isDarkMode } = useTheme();

  return (
    <section id="contact" className={`py-24 md:py-[96px] px-4 md:px-6 lg:px-8 relative overflow-hidden transition-colors duration-700 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-[#0F1117] via-[#1A1D2E] to-[#0F1117]'
        : 'bg-white'
    }`}>
      {/* Top section separator */}
      <div
        className={`absolute top-0 left-0 right-0 h-[1px] transition-opacity duration-700 ${
          isDarkMode ? 'bg-white/5' : 'bg-gray-200/50'
        }`}
      />

      {/* Decorative Background */}
      <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px] transition-colors duration-700 ${
        isDarkMode ? 'bg-blue-500/15' : 'bg-blue-100/30'
      }`}></div>
      <div className={`absolute bottom-0 left-0 w-96 h-96 rounded-full blur-[120px] transition-colors duration-700 ${
        isDarkMode ? 'bg-indigo-500/15' : 'bg-indigo-100/30'
      }`}></div>
      
      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className={`inline-flex items-center gap-2 px-4 py-2 border rounded-full mb-6 shadow-sm transition-colors duration-700 ${
            isDarkMode 
              ? 'bg-white/5 border-white/20 text-blue-400'
              : 'bg-white border-blue-200 text-blue-700'
          }`}>
            <MessageCircle className={isDarkMode ? 'text-blue-400' : 'text-blue-600'} size={18} />
            <span className="text-sm font-semibold uppercase tracking-wide">Get In Touch</span>
          </div>
          <h2 className={`text-5xl sm:text-6xl mb-6 font-bold transition-colors duration-700 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Let's Work Together
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-8"></div>
          <p className={`text-lg max-w-2xl mx-auto leading-relaxed transition-colors duration-700 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            I'm always open to discussing new opportunities, projects, or just having a chat about technology. 
            Feel free to reach out!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className={`p-8 border-2 rounded-2xl shadow-lg transition-colors duration-700 ${
              isDarkMode
                ? 'bg-white/5 backdrop-blur-xl border-white/10'
                : 'border-gray-100 bg-white'
            }`}>
              <h3 className={`text-2xl mb-6 font-bold transition-colors duration-700 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Contact Information</h3>
              
              {/* Email */}
              <a
                href="mailto:kollurisuchithkumar4@gmail.com"
                className={`flex items-center gap-4 p-5 rounded-xl border-2 transition-all duration-300 mb-4 group ${
                  isDarkMode
                    ? 'bg-white/5 border-transparent hover:border-white/20 hover:bg-white/10'
                    : 'bg-gradient-to-r from-gray-50 to-white hover:from-blue-50 hover:to-white border-transparent hover:border-blue-200'
                }`}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <p className={`text-sm font-semibold uppercase tracking-wide mb-1 transition-colors duration-700 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>Email</p>
                  <p className={`font-medium transition-colors ${
                    isDarkMode 
                      ? 'text-gray-300 group-hover:text-blue-400' 
                      : 'text-gray-900 group-hover:text-blue-600'
                  }`}>
                    kollurisuchithkumar4@gmail.com
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/k-suchith-kumar-685a49313"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-5 rounded-xl border-2 transition-all duration-300 mb-4 group ${
                  isDarkMode
                    ? 'bg-white/5 border-transparent hover:border-white/20 hover:bg-white/10'
                    : 'bg-gradient-to-r from-gray-50 to-white hover:from-blue-50 hover:to-white border-transparent hover:border-blue-200'
                }`}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <Linkedin className="text-white" size={24} />
                </div>
                <div>
                  <p className={`text-sm font-semibold uppercase tracking-wide mb-1 transition-colors duration-700 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>LinkedIn</p>
                  <p className={`font-medium transition-colors ${
                    isDarkMode 
                      ? 'text-gray-300 group-hover:text-blue-400' 
                      : 'text-gray-900 group-hover:text-blue-600'
                  }`}>
                    k-suchith-kumar-685a49313
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Suchith-136"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-5 rounded-xl border-2 transition-all duration-300 group ${
                  isDarkMode
                    ? 'bg-white/5 border-transparent hover:border-white/20 hover:bg-white/10'
                    : 'bg-gradient-to-r from-gray-50 to-white hover:from-indigo-50 hover:to-white border-transparent hover:border-indigo-200'
                }`}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <Github className="text-white" size={24} />
                </div>
                <div>
                  <p className={`text-sm font-semibold uppercase tracking-wide mb-1 transition-colors duration-700 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>GitHub</p>
                  <p className={`font-medium transition-colors ${
                    isDarkMode 
                      ? 'text-gray-300 group-hover:text-indigo-400' 
                      : 'text-gray-900 group-hover:text-indigo-600'
                  }`}>
                    Suchith-136
                  </p>
                </div>
              </a>
            </Card>

            {/* Quick Response Info */}
            <Card className={`p-8 border-2 rounded-2xl shadow-lg transition-colors duration-700 ${
              isDarkMode
                ? 'bg-blue-400/10 border-blue-400/30'
                : 'border-blue-200 bg-gradient-to-br from-blue-50 to-white'
            }`}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                  <MessageCircle className="text-white" size={24} />
                </div>
                <div>
                  <h4 className={`text-lg font-bold mb-2 transition-colors duration-700 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Quick Response</h4>
                  <p className={`leading-relaxed transition-colors duration-700 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    I typically respond within 24-48 hours. For urgent matters, feel free to reach out via LinkedIn or email directly.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};