import React, { useState, useEffect } from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
import resume from '../assets/resume.pdf';

const Header = ({ personalInfo, darkMode, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const homeUrl = window.location.hostname === 'localhost' ? '/' : 'https://mustafalokhandvala.github.io/mustafa-portfolio/';

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? 'bg-light-bg/80 dark:bg-dark-bg/80 backdrop-blur-md shadow-lg'
        : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href={homeUrl} className="flex items-center gap-2">
          <img src={logo} alt={personalInfo.name} className="h-10 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-light-text dark:text-dark-text hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}

          <div className="flex items-center space-x-4 border-l border-gray-300 dark:border-gray-700 pl-6">
            <a
              href={resume}
              download="Resume.pdf"
              className="px-5 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-full transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Download CV
            </a>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-primary-600 dark:text-primary-400"
              aria-label="Toggle Theme"
            >
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>

            {personalInfo.linkedin && (
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-light-text dark:text-dark-text hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <FaLinkedin size={20} />
              </a>
            )}
            {personalInfo.github && (
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-light-text dark:text-dark-text hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <FaGithub size={20} />
              </a>
            )}
            {personalInfo.instagram && (
              <a href={personalInfo.instagram} target="_blank" rel="noopener noreferrer" className="text-light-text dark:text-dark-text hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
                <FaInstagram size={20} />
              </a>
            )}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-light-text dark:text-dark-text"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-light-bg dark:bg-dark-bg border-t border-gray-200 dark:border-gray-800"
          >
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-light-text dark:text-dark-text hover:text-primary-600 dark:hover:text-primary-400 font-medium"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={resume}
                download="Resume.pdf"
                className="text-primary-600 dark:text-primary-400 font-medium"
              >
                Download CV
              </a>
              <div className="flex items-center space-x-6 pt-4 border-t border-gray-200 dark:border-gray-800">
                <button
                  onClick={toggleTheme}
                  className="flex items-center space-x-2 text-light-text dark:text-dark-text"
                >
                  {darkMode ? <FaSun /> : <FaMoon />}
                  <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;