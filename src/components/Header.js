import React, { useState } from 'react';

const Header = ({ personalInfo }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-surface/80 backdrop-blur-md sticky top-0 z-50 flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-[1280px] mx-auto border-b border-outline-variant">
      <div className="font-headline-sm text-headline-sm font-bold text-primary tracking-tighter uppercase">
        {personalInfo?.name ? personalInfo.name.replace(' ', '_') : 'MUSTAFA_LOKHANDWALA'}
      </div>
      
      <div className="hidden md:flex items-center gap-6 font-label-caps text-label-caps tracking-widest uppercase">
        <a className="text-on-surface-variant hover:text-primary transition-colors" href="#about">BIO</a>
        <a className="text-on-surface-variant hover:text-primary transition-colors" href="#skills">SKILLS</a>
        <a className="text-on-surface-variant hover:text-primary transition-colors" href="#projects">PROJECTS</a>
        <a className="text-on-surface-variant hover:text-primary transition-colors" href="#experience">EXPERIENCE</a>
        <a className="text-on-surface-variant hover:text-primary transition-colors" href="#contact">CONTACT</a>
      </div>
      
      <a href="/resume.pdf" download="Mustafa_Lokhandwala_Resume.pdf" className="hidden md:block btn-primary py-2 px-4">DOWNLOAD_CV</a>
      
      <button 
        className="md:hidden text-primary flex items-center justify-center w-10 h-10 border border-primary"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>
          {isOpen ? 'close' : 'menu'}
        </span>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-surface border-b border-outline-variant md:hidden">
          <div className="flex flex-col p-4 gap-4 font-label-caps text-label-caps tracking-widest text-center">
            <a 
              href="#about" 
              className="text-on-surface-variant hover:text-primary py-2"
              onClick={() => setIsOpen(false)}
            >
              BIO
            </a>
            <a 
              href="#skills" 
              className="text-on-surface-variant hover:text-primary py-2"
              onClick={() => setIsOpen(false)}
            >
              SKILLS
            </a>
            <a 
              href="#projects" 
              className="text-on-surface-variant hover:text-primary py-2"
              onClick={() => setIsOpen(false)}
            >
              PROJECTS
            </a>
            <a 
              href="#experience" 
              className="text-on-surface-variant hover:text-primary py-2"
              onClick={() => setIsOpen(false)}
            >
              EXPERIENCE
            </a>
            <a 
              href="#contact" 
              className="text-on-surface-variant hover:text-primary py-2"
              onClick={() => setIsOpen(false)}
            >
              CONTACT
            </a>
            <a 
              href="/resume.pdf" download="Mustafa_Lokhandwala_Resume.pdf" 
              className="btn-primary py-3 px-4 mt-4 w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              DOWNLOAD_CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;