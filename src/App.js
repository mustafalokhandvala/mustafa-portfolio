import React, { useState, useEffect } from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Header from './components/Header';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import BackgroundAnimation from './components/BackgroundAnimation';
import { personalInfo, skills, portfolioProjects } from './data';

import profileImage from './assets/profile.png';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text transition-colors duration-300 relative">
      <BackgroundAnimation />

      <Header
        personalInfo={personalInfo}
        darkMode={darkMode}
        toggleTheme={toggleTheme}
      />

      <main className="container mx-auto px-4 py-8 space-y-20 relative z-10">
        <section id="about" className="pt-20 min-h-[80vh] flex flex-col-reverse md:flex-row items-center justify-between relative gap-12">

          <div className="flex-1 text-left z-10">
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400 dark:from-primary-400 dark:to-primary-200">
              Hi, I'm {personalInfo.name}
            </h1>
            <p className="text-xl md:text-3xl text-light-muted dark:text-dark-muted max-w-2xl mb-8 font-light">
              {personalInfo.title}
            </p>
            <p className="text-lg text-light-text dark:text-dark-text max-w-2xl mb-10 leading-relaxed">
              {personalInfo.summary}
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex space-x-4">
                <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-primary-600 to-blue-600 hover:from-primary-700 hover:to-blue-700 text-white rounded-full font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-primary-500/50">
                  Get in Touch
                </a>
                <a href="#projects" className="px-8 py-3 border border-gray-300 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-400 text-light-text dark:text-dark-text rounded-full font-medium transition-all hover:bg-gray-50 dark:hover:bg-gray-800">
                  View Work
                </a>
              </div>

              <div className="flex items-center space-x-4">
                {personalInfo.linkedin && (
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white dark:bg-dark-card rounded-full shadow-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-all"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={24} />
                  </a>
                )}
                {personalInfo.github && (
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white dark:bg-dark-card rounded-full shadow-md text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:scale-110 transition-all"
                    aria-label="GitHub"
                  >
                    <FaGithub size={24} />
                  </a>
                )}
                {personalInfo.instagram && (
                  <a
                    href={personalInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white dark:bg-dark-card rounded-full shadow-md text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 hover:scale-110 transition-all"
                    aria-label="Instagram"
                  >
                    <FaInstagram size={24} />
                  </a>
                )}
                {personalInfo.instagramBusiness && (
                  <a
                    href={personalInfo.instagramBusiness}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white dark:bg-dark-card rounded-full shadow-md text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 hover:scale-110 transition-all"
                    aria-label="Instagram Business"
                  >
                    <FaInstagram size={24} />
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-center z-10 relative">
            <div className="w-72 h-72 md:w-[450px] md:h-[450px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-blue-600 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
              <img
                src={profileImage}
                alt={personalInfo.name}
                className="rounded-3xl w-full h-full object-cover border-4 border-white dark:border-dark-card shadow-2xl relative z-10"
              />
            </div>
          </div>
        </section>

        <Skills skills={skills} />

        <Projects projects={portfolioProjects} />

        <Contact personalInfo={personalInfo} />
      </main>

      <footer className="py-8 text-center text-light-muted dark:text-dark-muted border-t border-gray-200 dark:border-gray-800 mt-20">
        <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;