import React, { useState, useEffect, useRef } from 'react';
import { Card } from './ui/card';
import { GraduationCap, Award, Lightbulb, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import profileImage from 'figma:asset/c3ce8adb114c343409def0884803392992597876.png';

export const About = () => {
  const { isDarkMode } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const highlights = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: '2nd Year CSE Student at SR University',
      gradient: isDarkMode ? 'from-teal-500 to-teal-600' : 'from-blue-500 to-blue-600',
    },
    {
      icon: Award,
      title: 'Certified',
      description: '11+ Professional Certifications including AWS',
      gradient: isDarkMode ? 'from-purple-500 to-purple-600' : 'from-indigo-500 to-indigo-600',
    },
    {
      icon: Lightbulb,
      title: 'Problem Solver',
      description: 'Active in hackathons & collaborative projects',
      gradient: isDarkMode ? 'from-pink-500 to-pink-600' : 'from-blue-600 to-indigo-600',
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`py-24 md:py-[96px] px-4 md:px-6 lg:px-8 relative overflow-hidden transition-all duration-700 ${
        isDarkMode
          ? 'bg-gradient-to-br from-[#111318] via-[#1C1F3A] to-[#111318]'
          : 'bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50'
      }`}
    >
      {/* Top section separator */}
      <div
        className={`absolute top-0 left-0 right-0 h-[1px] transition-opacity duration-700 ${
          isDarkMode ? 'bg-white/5' : 'bg-gray-200/50'
        }`}
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Glassmorphism Blobs with Glow */}
        <div
          className={`absolute w-[500px] h-[500px] rounded-full transition-all duration-[3000ms] animate-blob-morph ${
            isDarkMode
              ? 'bg-gradient-to-br from-[#00C9A7]/25 to-[#00C9A7]/20 blur-[80px]'
              : 'bg-[#A7F3D0]/40 blur-[60px] shadow-2xl'
          }`}
          style={{
            top: '5%',
            left: '8%',
            animationDelay: '0s',
          }}
        />
        <div
          className={`absolute w-[450px] h-[450px] rounded-full transition-all duration-[3000ms] animate-blob-morph ${
            isDarkMode
              ? 'bg-gradient-to-br from-[#FF6B6B]/25 to-[#FF6B6B]/20 blur-[80px]'
              : 'bg-[#FBCFE8]/40 blur-[60px] shadow-2xl'
          }`}
          style={{
            top: '45%',
            right: '5%',
            animationDelay: '2s',
          }}
        />
        <div
          className={`absolute w-[400px] h-[400px] rounded-full transition-all duration-[3000ms] animate-blob-morph ${
            isDarkMode
              ? 'bg-gradient-to-br from-[#A78BFA]/25 to-[#A78BFA]/20 blur-[80px]'
              : 'bg-[#BFDBFE]/40 blur-[60px] shadow-2xl'
          }`}
          style={{
            bottom: '10%',
            left: '20%',
            animationDelay: '4s',
          }}
        />

        {/* Cursor Glow Effect - More Refined and Diffused */}
        <div
          className={`absolute w-[600px] h-[600px] rounded-full transition-opacity duration-500 pointer-events-none ${
            isDarkMode ? 'bg-blue-400/8 blur-[100px]' : 'bg-blue-200/15 blur-[80px]'
          }`}
          style={{
            left: mousePosition.x - 300,
            top: mousePosition.y - 300,
          }}
        />

        {/* Very Light Grain Texture Overlay */}
        <div
          className={`absolute inset-0 mix-blend-overlay pointer-events-none ${
            isDarkMode ? 'opacity-[0.03]' : 'opacity-[0.02]'
          }`}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Floating Particles with Cursor Reaction */}
        {[...Array(20)].map((_, i) => {
          const baseLeft = Math.random() * 100;
          const baseTop = Math.random() * 100;
          const distanceX = mousePosition.x / window.innerWidth * 100 - baseLeft;
          const distanceY = mousePosition.y / window.innerHeight * 100 - baseTop;
          const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
          const pushFactor = Math.max(0, 20 - distance) * 0.3;
          
          return (
            <div
              key={i}
              className={`absolute rounded-full transition-all duration-1000 animate-float-particle ${
                isDarkMode ? 'bg-white/15' : 'bg-gray-300/25'
              }`}
              style={{
                width: `${2 + Math.random() * 3}px`,
                height: `${2 + Math.random() * 3}px`,
                left: `${baseLeft + (distanceX > 0 ? -pushFactor : pushFactor)}%`,
                top: `${baseTop + (distanceY > 0 ? -pushFactor : pushFactor)}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${15 + Math.random() * 10}s`,
              }}
            />
          );
        })}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2
            className={`text-5xl sm:text-6xl mb-6 font-bold transition-colors duration-700 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            About Me
          </h2>
          <div
            className={`w-24 h-1.5 mx-auto rounded-full transition-all duration-700 ${
              isDarkMode
                ? 'bg-gradient-to-r from-[#00C9A7] to-[#A78BFA]'
                : 'bg-gradient-to-r from-blue-600 to-indigo-600'
            }`}
          ></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left Side: Profile Image + My Journey */}
          <div>
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start mb-12">
              <div className="relative group">
                <div
                  className={`absolute -inset-1 rounded-3xl blur transition-all duration-700 ${
                    isDarkMode
                      ? 'bg-gradient-to-r from-[#00C9A7] to-[#A78BFA] opacity-40 group-hover:opacity-60'
                      : 'bg-gradient-to-r from-blue-600 to-indigo-600 opacity-25 group-hover:opacity-40'
                  }`}
                ></div>
                <img
                  src={profileImage}
                  alt="Kolluri Suchith Kumar"
                  className={`relative w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-3xl shadow-2xl border-4 transition-colors duration-700 ${
                    isDarkMode ? 'border-white/20' : 'border-white'
                  }`}
                />
              </div>
            </div>

            {/* Professional Summary */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 border rounded-full mb-6 transition-all duration-700 ${
                isDarkMode
                  ? 'bg-white/5 backdrop-blur-xl border-white/20 text-[#00C9A7]'
                  : 'bg-gradient-to-r from-blue-50 to-blue-100/50 border-blue-200 text-blue-700'
              }`}
            >
              <div
                className={`w-2 h-2 rounded-full animate-pulse ${
                  isDarkMode ? 'bg-[#00C9A7]' : 'bg-blue-600'
                }`}
              ></div>
              <span className="text-sm font-semibold uppercase tracking-wide">
                My Journey
              </span>
            </div>

            <h3
              className={`text-3xl mb-6 font-bold transition-colors duration-700 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Building Scalable Solutions with Purpose
            </h3>
            <p
              className={`text-lg leading-relaxed mb-6 transition-colors duration-700 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              I'm a Computer Science student at SR University with a problem-solving mindset and a passion for building scalable, user-focused systems. I combine strong technical skills in web development with UI/UX awareness and data-driven thinking to create solutions that make a real impact.
            </p>
            <p
              className={`text-lg leading-relaxed mb-6 transition-colors duration-700 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              I leverage modern tools like{' '}
              <span
                className={`font-semibold ${
                  isDarkMode ? 'text-[#00C9A7]' : 'text-blue-600'
                }`}
              >
                Figma
              </span>{' '}
              for design prototyping and{' '}
              <span
                className={`font-semibold ${
                  isDarkMode ? 'text-[#A78BFA]' : 'text-blue-600'
                }`}
              >
                Gamma
              </span>{' '}
              for presentations, ensuring seamless collaboration between design and development. My approach prioritizes clean code, intuitive interfaces, and meaningful user experiences.
            </p>
            <p
              className={`text-lg leading-relaxed transition-colors duration-700 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Whether it's through hackathons, team projects, or self-directed learning, I'm constantly seeking opportunities to grow, collaborate, and contribute to innovative solutions that solve real-world problems.
            </p>
          </div>

          {/* Key Strengths */}
          <div>
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 border rounded-full mb-6 transition-all duration-700 ${
                isDarkMode
                  ? 'bg-white/5 backdrop-blur-xl border-white/20 text-[#A78BFA]'
                  : 'bg-gradient-to-r from-indigo-50 to-indigo-100/50 border-indigo-200 text-indigo-700'
              }`}
            >
              <div
                className={`w-2 h-2 rounded-full animate-pulse ${
                  isDarkMode ? 'bg-[#A78BFA]' : 'bg-indigo-600'
                }`}
              ></div>
              <span className="text-sm font-semibold uppercase tracking-wide">
                Core Strengths
              </span>
            </div>

            <h3
              className={`text-3xl mb-8 font-bold transition-colors duration-700 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              What I Bring
            </h3>
            <ul className="space-y-6">
              {[
                {
                  title: 'Problem-Solving Mindset',
                  description:
                    'Analytical approach to breaking down complex challenges into actionable solutions',
                  color: isDarkMode ? 'from-[#00C9A7] to-teal-500' : 'from-blue-500 to-blue-600',
                },
                {
                  title: 'Scalable Systems Thinking',
                  description:
                    'Focus on building maintainable, efficient architectures that grow with user needs',
                  color: isDarkMode ? 'from-[#00C9A7] to-teal-500' : 'from-blue-500 to-blue-600',
                },
                {
                  title: 'UI/UX Awareness',
                  description:
                    'Deep understanding of user-centered design principles and modern interface patterns',
                  color: isDarkMode ? 'from-[#A78BFA] to-purple-500' : 'from-indigo-500 to-indigo-600',
                },
                {
                  title: 'Data-Driven Decision Making',
                  description:
                    'Using analytics and insights to inform development and optimize user experience',
                  color: isDarkMode ? 'from-[#A78BFA] to-purple-500' : 'from-indigo-500 to-indigo-600',
                },
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div
                    className={`w-8 h-8 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center flex-shrink-0 shadow-md`}
                  >
                    <CheckCircle2 className="text-white" size={18} />
                  </div>
                  <div>
                    <h4
                      className={`text-lg mb-1 font-semibold transition-colors duration-700 ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {item.title}
                    </h4>
                    <p
                      className={`leading-relaxed transition-colors duration-700 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Highlights Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className={`p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 rounded-2xl group ${
                  isDarkMode
                    ? 'bg-white/5 backdrop-blur-xl border-white/10 hover:border-white/20 hover:bg-white/10'
                    : 'bg-white border-gray-100 hover:border-blue-200'
                }`}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="text-white" size={28} />
                </div>
                <h3
                  className={`text-xl mb-3 font-bold transition-colors duration-700 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`leading-relaxed transition-colors duration-700 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {item.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-15px) translateX(5px);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes blob-morph {
          0% {
            transform: scale(1) rotate(0deg);
          }
          50% {
            transform: scale(1.1) rotate(45deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
          }
        }

        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-5px) translateX(5px);
          }
          50% {
            transform: translateY(5px) translateX(-5px);
          }
          75% {
            transform: translateY(-10px) translateX(10px);
          }
        }

        .animate-float {
          animation: float 10s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }

        .animate-blob-morph {
          animation: blob-morph 10s ease-in-out infinite;
        }

        .animate-float-particle {
          animation: float-particle 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};