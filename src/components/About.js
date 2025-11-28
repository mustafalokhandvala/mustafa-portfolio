import React from 'react';
import { personalInfo } from '../data';
import profileImage from '../assets/profile.png';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full blur opacity-50"></div>
            <img
              src={profileImage}
              alt={personalInfo.name}
              className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-gray-900 shadow-2xl"
            />
          </div>

          <div className="mb-6">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium animate-fade-in-up">
              {personalInfo.title}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Digital Experiences</span> that Matter
          </h1>

          <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto">
            {personalInfo.summary}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all hover:shadow-lg hover:shadow-blue-500/25"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-full font-medium border border-gray-700 transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;