import React from 'react';
import { Card } from './ui/card';
import { ExternalLink, Award, Trophy, Calendar } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const Certifications = () => {
  const { isDarkMode } = useTheme();
  
  const certifications = [
    {
      title: 'AWS Academy Graduate - Cloud Foundations',
      issuer: 'Amazon Web Services (AWS)',
      year: '2024',
      credentialLink: '#',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Career Essentials in Generative AI',
      issuer: 'Microsoft & LinkedIn',
      year: '2024',
      credentialLink: '#',
      gradient: 'from-indigo-500 to-indigo-600',
    },
    {
      title: 'Cybersecurity Essentials',
      issuer: 'Cisco Networking Academy',
      year: '2024',
      credentialLink: '#',
      gradient: 'from-cyan-500 to-cyan-600',
    },
    {
      title: 'Python Essentials 1',
      issuer: 'Cisco Networking Academy',
      year: '2024',
      credentialLink: '#',
      gradient: 'from-blue-600 to-indigo-600',
    },
  ];

  return (
    <section id="certifications" className={`py-24 md:py-[96px] px-4 md:px-6 lg:px-8 relative overflow-hidden transition-colors duration-700 ${
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
      <div className={`absolute top-0 left-0 w-96 h-96 rounded-full blur-[120px] transition-colors duration-700 ${
        isDarkMode ? 'bg-blue-500/15' : 'bg-blue-100/30'
      }`}></div>
      
      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className={`inline-flex items-center gap-2 px-4 py-2 border rounded-full mb-6 shadow-sm transition-colors duration-700 ${
            isDarkMode 
              ? 'bg-white/5 border-white/20 text-blue-400'
              : 'bg-white border-blue-200 text-blue-700'
          }`}>
            <Award className={isDarkMode ? 'text-blue-400' : 'text-blue-600'} size={18} />
            <span className="text-sm font-semibold uppercase tracking-wide">Achievements</span>
          </div>
          <h2 className={`text-5xl sm:text-6xl mb-6 font-bold transition-colors duration-700 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>Certifications</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-8"></div>
          <p className={`text-lg max-w-2xl mx-auto leading-relaxed transition-colors duration-700 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Professional certifications demonstrating commitment to continuous learning and technical expertise
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className={`p-6 border-2 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group ${
                isDarkMode
                  ? 'bg-white/5 backdrop-blur-xl border-white/10 hover:border-white/20'
                  : 'border-gray-100 bg-white hover:border-blue-200'
              }`}
            >
              <div className="flex flex-col h-full">
                {/* Gradient Top Border */}
                <div className={`w-full h-1 bg-gradient-to-r ${cert.gradient} rounded-full mb-5`}></div>

                {/* Icon */}
                <div className={`w-14 h-14 bg-gradient-to-br ${cert.gradient} rounded-xl flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <Award className="text-white" size={26} />
                </div>

                {/* Certification Details */}
                <h3 className={`text-lg mb-3 leading-tight font-bold transition-colors duration-700 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {cert.title}
                </h3>
                <p className={`text-sm mb-2 font-medium transition-colors duration-700 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>{cert.issuer}</p>
                <div className="flex items-center gap-2 mb-5">
                  <Calendar className={isDarkMode ? 'text-gray-400' : 'text-gray-400'} size={14} />
                  <p className={`text-sm transition-colors duration-700 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>{cert.year}</p>
                </div>

                {/* Credential Link */}
                <a
                  href={cert.credentialLink}
                  className={`mt-auto flex items-center gap-2 text-sm font-semibold transition-colors group/link ${
                    isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                  }`}
                >
                  View Credential
                  <ExternalLink size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </Card>
          ))}
        </div>

        {/* Hackathon Participation */}
        <Card className={`p-10 border-2 rounded-2xl hover:shadow-xl transition-all duration-300 ${
          isDarkMode
            ? 'bg-white/5 backdrop-blur-xl border-white/10 hover:border-white/20'
            : 'border-gray-100 bg-gradient-to-br from-white to-blue-50/30 hover:border-blue-200'
        }`}>
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
              <Trophy className="text-white" size={40} />
            </div>
            <div className="flex-1">
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 border rounded-full mb-4 transition-colors duration-700 ${
                isDarkMode
                  ? 'bg-blue-400/10 border-blue-400/30'
                  : 'bg-blue-100 border-blue-200'
              }`}>
                <div className={`w-2 h-2 rounded-full ${
                  isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
                }`}></div>
                <span className={`text-xs font-bold uppercase tracking-wide ${
                  isDarkMode ? 'text-blue-400' : 'text-blue-700'
                }`}>Event Participation</span>
              </div>
              <h3 className={`text-3xl mb-4 font-bold transition-colors duration-700 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Hackathon Experience</h3>
              <p className={`leading-relaxed text-lg mb-4 transition-colors duration-700 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Participated in <span className={`font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>Gravitas'25</span> hackathon, 
                collaborating with team members to develop innovative solutions under time constraints.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Team Collaboration', 'Fast-Paced Environment', 'Innovation'].map((tag, idx) => (
                  <span
                    key={idx}
                    className={`px-4 py-2 border rounded-lg text-sm font-medium transition-colors duration-700 ${
                      isDarkMode
                        ? 'bg-white/5 border-white/20 text-gray-300'
                        : 'bg-white border-gray-200 text-gray-700'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};