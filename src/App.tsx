import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

/**
 * Main Portfolio Application
 * 
 * Modern, clean, and recruiter-focused portfolio showcasing 
 * Kolluri Suchith Kumar's professional profile, projects, skills, and contact information.
 * 
 * Features:
 * - Mobile-first responsive design
 * - Clean visual hierarchy
 * - Professional project storytelling
 * - Highly accessible contact information
 * - Minimal, modern aesthetic with blue accent theme
 */
export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        {/* Fixed Navigation Bar */}
        <Navigation />

        {/* Main Content Sections */}
        <main>
          {/* Hero Section - Landing page with value-driven headline */}
          <Hero />

          {/* About Section - Professional summary focused on problem-solving and scalability */}
          <About />

          {/* Projects Section - Detailed project showcases including new projects */}
          <Projects />

          {/* Skills Section - Technical and soft skills with tools */}
          <Skills />

          {/* Certifications Section - Professional certifications and hackathon */}
          <Certifications />

          {/* Resume Section - Professional resume download */}
          <Resume />

          {/* Contact Section - Contact information and form */}
          <Contact />
        </main>

        {/* Footer - Links and copyright */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}