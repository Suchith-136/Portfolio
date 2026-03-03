import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Code, Server, Wrench, Heart, Users, Target, Palette } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const Skills = () => {
  const { isDarkMode } = useTheme();
  
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Tailwind CSS'],
      gradient: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100/50',
    },
    {
      title: 'Backend & Languages',
      icon: Server,
      skills: ['Python', 'Java', 'C Programming', 'Node.js', 'Problem Solving', 'Data Structures'],
      gradient: 'from-indigo-500 to-indigo-600',
      bgColor: 'from-indigo-50 to-indigo-100/50',
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      skills: ['Git & GitHub', 'AWS', 'Figma', 'Gamma', 'GitHub Copilot', 'VS Code'],
      gradient: 'from-cyan-500 to-cyan-600',
      bgColor: 'from-cyan-50 to-cyan-100/50',
    },
  ];

  const softSkills = [
    { name: 'Communication', icon: Users },
    { name: 'Teamwork & Collaboration', icon: Heart },
    { name: 'Problem Solving', icon: Target },
    { name: 'Analytical Thinking', icon: Code },
    { name: 'UI/UX Awareness', icon: Palette },
    { name: 'Adaptability', icon: Wrench },
  ];

  return (
    <section id="skills" className={`py-24 md:py-[96px] px-4 md:px-6 lg:px-8 relative overflow-hidden transition-colors duration-700 ${
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
      <div className={`absolute top-20 right-0 w-96 h-96 rounded-full blur-[120px] transition-colors duration-700 ${
        isDarkMode ? 'bg-indigo-500/15' : 'bg-indigo-100/30'
      }`}></div>
      <div className={`absolute bottom-20 left-0 w-96 h-96 rounded-full blur-[120px] transition-colors duration-700 ${
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
            <Code className={isDarkMode ? 'text-blue-400' : 'text-blue-600'} size={18} />
            <span className="text-sm font-semibold uppercase tracking-wide">Expertise</span>
          </div>
          <h2 className={`text-5xl sm:text-6xl mb-6 font-bold transition-colors duration-700 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>Skills</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-8"></div>
          <p className={`text-lg max-w-2xl mx-auto leading-relaxed transition-colors duration-700 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Technical expertise and interpersonal skills that drive effective collaboration and innovation
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className={`p-8 border-2 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group ${
                  isDarkMode
                    ? 'bg-white/5 backdrop-blur-xl border-white/10 hover:border-white/20'
                    : 'border-gray-100 bg-white hover:border-blue-200'
                }`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-white" size={26} />
                  </div>
                  <h3 className={`text-2xl font-bold transition-colors duration-700 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className={`rounded-lg px-3 py-2 font-medium hover:scale-105 transition-transform ${
                        isDarkMode
                          ? 'bg-white/10 text-gray-300 border border-white/20'
                          : `bg-gradient-to-r ${category.bgColor} text-gray-700 border border-gray-200`
                      }`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Soft Skills */}
        <Card className={`p-6 border-2 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
          isDarkMode
            ? 'bg-white/5 backdrop-blur-xl border-white/10'
            : 'border-gray-100 bg-gradient-to-br from-white to-blue-50/20'
        }`}>
          <div className="text-center mb-6">
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 border rounded-full mb-3 transition-colors duration-700 ${
              isDarkMode
                ? 'bg-blue-400/10 border-blue-400/30 text-blue-400'
                : 'bg-blue-50 border-blue-200 text-blue-700'
            }`}>
              <Heart className={isDarkMode ? 'text-blue-400' : 'text-blue-600'} size={16} />
              <span className="text-xs font-semibold uppercase tracking-wide">Interpersonal</span>
            </div>
            <h3 className={`text-xl font-bold transition-colors duration-700 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Soft Skills</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className={`flex items-center gap-2 p-3 rounded-xl border-2 hover:shadow-md transition-all duration-300 group ${
                    isDarkMode
                      ? 'bg-white/5 border-white/10 hover:border-white/20'
                      : 'bg-white border-gray-100 hover:border-blue-200'
                  }`}
                >
                  <div className={`w-8 h-8 bg-gradient-to-br rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0 ${
                    isDarkMode ? 'from-blue-400/20 to-blue-500/20' : 'from-blue-100 to-blue-200'
                  }`}>
                    <Icon className={isDarkMode ? 'text-blue-400' : 'text-blue-600'} size={16} />
                  </div>
                  <span className={`text-sm font-medium transition-colors duration-700 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>{skill.name}</span>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </section>
  );
};