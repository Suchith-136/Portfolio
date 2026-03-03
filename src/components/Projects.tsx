import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github, CheckCircle, Rocket, Search, BarChart3, Users } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const Projects = () => {
  const { isDarkMode } = useTheme();
  
  const projects = [
    {
      title: 'Lost & Found Portal',
      problem: 'Manual lost item reporting system lacked tracking and transparency',
      techStack: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
      features: [
        'User authentication and authorization',
        'Item listing with status tracking',
        'Advanced search and filter functionality',
        'Real-time notifications',
      ],
      liveLink: 'https://lostfoundtheifportal.netlify.app/',
      codeLink: 'https://github.com/Suchith-136',
      icon: Search,
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Traffic Data Analytics Dashboard',
      problem: 'Raw traffic data was difficult to interpret for decision-making',
      techStack: ['React', 'Chart.js', 'Tailwind CSS', 'REST API'],
      features: [
        'Interactive data visualization charts',
        'Real-time data filtering and sorting',
        'Multiple chart types (line, bar, pie)',
        'Export functionality for reports',
      ],
      liveLink: 'https://dashboardtraffic.netlify.app/',
      codeLink: 'https://github.com/Suchith-136',
      icon: BarChart3,
      gradient: 'from-indigo-500 to-indigo-600',
    },
    {
      title: 'Gravitas\'25 Hackathon',
      problem: 'Participated in hackathon to solve real-world problems under time constraints',
      techStack: ['Python', 'Team Collaboration', 'Problem Solving'],
      features: [
        'Collaborated with team members effectively',
        'Delivered working prototype within deadline',
        'Applied critical thinking and adaptability',
      ],
      liveLink: null,
      codeLink: null,
      icon: Users,
      gradient: 'from-blue-600 to-indigo-600',
    },
    {
      title: 'Learning Projects',
      problem: 'Self-directed learning through building practical applications',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Java', 'C'],
      features: [
        'Built foundational web projects',
        'Practiced algorithm problem-solving',
        'Explored AWS cloud services',
      ],
      liveLink: null,
      codeLink: 'https://github.com/Suchith-136',
      icon: Rocket,
      gradient: 'from-blue-500 to-cyan-600',
    },
  ];

  return (
    <section id="projects" className={`py-24 md:py-[96px] px-4 md:px-6 lg:px-8 relative overflow-hidden transition-colors duration-700 ${
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
      <div className={`absolute bottom-0 left-0 w-96 h-96 rounded-full blur-[120px] transition-colors duration-700 ${
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
            <Rocket className={isDarkMode ? 'text-blue-400' : 'text-blue-600'} size={18} />
            <span className="text-sm font-semibold uppercase tracking-wide">My Work</span>
          </div>
          <h2 className={`text-5xl sm:text-6xl mb-6 font-bold transition-colors duration-700 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>Projects</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-8"></div>
          <p className={`text-lg max-w-2xl mx-auto leading-relaxed transition-colors duration-700 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Real-world solutions built with modern technologies, showcasing problem-solving skills and technical expertise
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card
                key={index}
                className={`p-8 flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 rounded-2xl group ${
                  isDarkMode
                    ? 'bg-white/5 backdrop-blur-xl border-white/10 hover:border-white/20'
                    : 'border-gray-100 hover:border-blue-200 bg-white'
                }`}
              >
                {/* Icon and Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    <Icon className="text-white" size={26} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold leading-tight transition-colors duration-700 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>{project.title}</h3>
                  </div>
                </div>

                {/* Gradient Top Border */}
                <div className={`w-full h-1 bg-gradient-to-r ${project.gradient} rounded-full mb-6`}></div>

                {/* Problem Statement */}
                <div className="mb-6">
                  <h4 className={`text-sm uppercase tracking-wide mb-2 font-bold transition-colors duration-700 ${
                    isDarkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    Problem
                  </h4>
                  <p className={`leading-relaxed transition-colors duration-700 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {project.problem}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className={`text-sm uppercase tracking-wide mb-3 font-bold transition-colors duration-700 ${
                    isDarkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className={`rounded-lg px-3 py-1.5 font-medium transition-colors duration-700 ${
                          isDarkMode
                            ? 'bg-blue-400/10 text-blue-400 border border-blue-400/30'
                            : 'bg-blue-50 text-blue-700 border border-blue-200'
                        }`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Feature Highlights */}
                <div className="mb-8 flex-grow">
                  <h4 className={`text-sm uppercase tracking-wide mb-4 font-bold transition-colors duration-700 ${
                    isDarkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className={`flex items-start gap-3 transition-colors duration-700 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        <CheckCircle className={isDarkMode ? 'text-blue-400' : 'text-blue-600'} size={18} />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  {project.liveLink && (
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl shadow-md shadow-blue-200/50 hover:shadow-lg transition-all"
                      asChild
                    >
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        View Live
                      </a>
                    </Button>
                  )}
                  {project.codeLink && (
                    <Button
                      size="sm"
                      variant="outline"
                      className={`flex-1 border-2 rounded-xl transition-all ${
                        isDarkMode
                          ? 'border-blue-400 text-blue-400 hover:bg-blue-400/10'
                          : 'border-blue-600 text-blue-700 hover:bg-blue-50'
                      }`}
                      asChild
                    >
                      <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        View Code
                      </a>
                    </Button>
                  )}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <Card className={`p-10 border-2 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
            isDarkMode
              ? 'bg-white/5 backdrop-blur-xl border-white/10'
              : 'border-gray-100 bg-gradient-to-br from-white to-blue-50/30'
          }`}>
            <div className={`inline-flex items-center gap-2 px-4 py-2 border rounded-full mb-6 transition-colors duration-700 ${
              isDarkMode
                ? 'bg-blue-400/10 border-blue-400/30'
                : 'bg-blue-50 border-blue-200'
            }`}>
              <div className={`w-2 h-2 rounded-full animate-pulse ${
                isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
              }`}></div>
              <span className={`text-sm font-semibold uppercase tracking-wide ${
                isDarkMode ? 'text-blue-400' : 'text-blue-700'
              }`}>Coming Soon</span>
            </div>
            <h3 className={`text-3xl mb-4 font-bold transition-colors duration-700 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>More Projects in the Works</h3>
            <p className={`leading-relaxed max-w-2xl mx-auto mb-8 text-lg transition-colors duration-700 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              I'm constantly working on new projects and learning new technologies. 
              Check out my GitHub profile for more repositories and contributions, 
              or reach out to discuss potential collaborations.
            </p>
            <Button
              size="lg"
              variant="outline"
              className={`border-2 rounded-xl px-8 transition-all ${
                isDarkMode
                  ? 'border-blue-400 text-blue-400 hover:bg-blue-400/10'
                  : 'border-blue-600 text-blue-700 hover:bg-blue-50'
              }`}
              asChild
            >
              <a href="https://github.com/Suchith-136" target="_blank" rel="noopener noreferrer">
                <Github size={20} className="mr-2" />
                View GitHub Profile
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};