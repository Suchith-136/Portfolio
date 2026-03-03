import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { FileDown, FileText, ExternalLink, CheckCircle } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const Resume = () => {
  const { isDarkMode } = useTheme();
  
  const resumeHighlights = [
    'Computer Science & Engineering Student',
    '11+ Professional Certifications',
    'Full-Stack Development Experience',
    'Hackathon Participant',
  ];

  return (
    <section id="resume" className={`py-24 md:py-[96px] px-4 md:px-6 lg:px-8 relative overflow-hidden transition-colors duration-700 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-[#111318] via-[#1C1F3A] to-[#111318]'
        : 'bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50'
    }`}>
      {/* Top section separator */}
      <div
        className={`absolute top-0 left-0 right-0 h-[1px] transition-opacity duration-700 ${
          isDarkMode ? 'bg-white/5' : 'bg-gray-200/50'
        }`}
      />

      {/* Decorative Background */}
      <div className={`absolute top-0 left-0 w-96 h-96 rounded-full blur-[120px] transition-colors duration-700 ${
        isDarkMode ? 'bg-indigo-500/15' : 'bg-indigo-100/30'
      }`}></div>
      
      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 px-4 py-2 border rounded-full mb-6 shadow-sm transition-colors duration-700 ${
            isDarkMode 
              ? 'bg-white/5 border-white/20 text-blue-400'
              : 'bg-white border-blue-200 text-blue-700'
          }`}>
            <FileText className={isDarkMode ? 'text-blue-400' : 'text-blue-600'} size={18} />
            <span className="text-sm font-semibold uppercase tracking-wide">Download</span>
          </div>
          <h2 className={`text-5xl sm:text-6xl mb-6 font-bold transition-colors duration-700 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>Resume</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-8"></div>
          <p className={`text-lg max-w-2xl mx-auto leading-relaxed transition-colors duration-700 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Get a comprehensive overview of my experience, skills, and education in a professional ATS-friendly format
          </p>
        </div>

        {/* Resume Preview Card */}
        <Card className={`p-10 border-2 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ${
          isDarkMode
            ? 'bg-white/5 backdrop-blur-xl border-white/10'
            : 'border-gray-100 bg-white'
        }`}>
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            {/* Resume Icon/Preview */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                <FileText className="text-white" size={48} />
              </div>
            </div>

            {/* Resume Details */}
            <div className="flex-1 text-center md:text-left">
              <h3 className={`text-3xl mb-4 font-bold transition-colors duration-700 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Kolluri Suchith Kumar
              </h3>
              <p className={`text-lg mb-6 leading-relaxed transition-colors duration-700 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>Computer Science & Engineering Student</p>

              {/* Resume Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {resumeHighlights.map((highlight, index) => (
                  <div key={index} className={`flex items-center gap-2 transition-colors duration-700 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    <CheckCircle className={isDarkMode ? 'text-blue-400' : 'text-blue-600'} size={18} />
                    <span className="text-sm font-medium">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl shadow-lg shadow-blue-200/50 hover:shadow-xl hover:shadow-blue-300/50 transition-all duration-300"
                  asChild
                >
                  <a href="https://drive.google.com/file/d/1nN7JDvo0IIPD9H9rbvOAxXtj5-wHcEf-/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <FileDown size={20} className="mr-2" />
                    Download Resume
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className={`flex-1 border-2 rounded-xl transition-all duration-300 ${
                    isDarkMode
                      ? 'border-blue-400 text-blue-400 hover:bg-blue-400/10'
                      : 'border-blue-600 text-blue-700 hover:bg-blue-50'
                  }`}
                  asChild
                >
                  <a href="https://drive.google.com/file/d/1nN7JDvo0IIPD9H9rbvOAxXtj5-wHcEf-/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={20} className="mr-2" />
                    View Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className={`mt-8 pt-8 border-t transition-colors duration-700 ${
            isDarkMode ? 'border-white/10' : 'border-gray-200'
          }`}>
            <p className={`text-sm text-center transition-colors duration-700 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              Resume is ATS-friendly and optimized for applicant tracking systems. 
              Last updated: <span className={`font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>February 2026</span>
            </p>
          </div>
        </Card>

        {/* Resume Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            { label: 'Projects', value: '4+' },
            { label: 'Certifications', value: '11+' },
            { label: 'Technologies', value: '15+' },
            { label: 'Experience', value: '2 Years' },
          ].map((stat, index) => (
            <Card
              key={index}
              className={`p-6 text-center border-2 rounded-xl hover:shadow-md transition-all duration-300 ${
                isDarkMode
                  ? 'bg-white/5 backdrop-blur-xl border-white/10 hover:border-white/20'
                  : 'border-gray-100 bg-white hover:border-blue-200'
              }`}
            >
              <p className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>{stat.value}</p>
              <p className={`text-sm font-medium transition-colors duration-700 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};