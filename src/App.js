import React, { Suspense, lazy } from 'react';
import Header from './components/Header';
import BackgroundAnimation from './components/BackgroundAnimation';
import Loading from './components/Loading';
import { personalInfo, skills, portfolioProjects } from './data';

const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));
const Education = lazy(() => import('./components/Education'));

function App() {
  return (
    <>
      <BackgroundAnimation />
      <div className="scroll-progress"></div>
      
      <Header personalInfo={personalInfo} />

      <main className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
        {/* SECTION 1: HERO */}
        <section className="min-h-[870px] flex flex-col md:flex-row items-center pt-24 pb-12 border-b border-outline-variant border-dashed">
          <div className="w-full md:w-[60%] flex flex-col gap-8">
            <div className="font-label-caps text-label-caps text-on-surface-variant flex items-center gap-2">
              <span>[ PORTFOLIO — v2026 ]</span>
              <span className="w-2 h-4 bg-primary animate-pulse"></span>
            </div>
            <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-xl md:text-display-xl text-on-surface uppercase leading-none">
              {personalInfo.name.split(' ')[0]}<br />
              <span className="text-outline-variant">{personalInfo.name.split(' ')[1]}</span>
            </h1>
            <p className="font-body-lg text-body-lg text-primary max-w-xl">
              {personalInfo.title}
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <a href="#projects" className="btn-primary">View Projects</a>
              <a href="/resume.pdf" download="Mustafa_Lokhandwala_Resume.pdf" className="btn-secondary">Download Resume</a>
            </div>
          </div>
          
          <div className="w-full md:w-[40%] mt-12 md:mt-0 relative h-[300px] md:h-[500px] flex items-center justify-center">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxwYXRoIGQ9Ik0wLDE1MCBRNTEsMTAwIDEwMCwxNTAgVDMwMCwxNTAgVDUwMCwxNTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzM4YjJmZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2Utb3BhY2l0eT0iMC41Ii8+PC9zdmc+')] bg-center bg-no-repeat bg-contain opacity-50"></div>
            {/* Abstract waveform replacement */}
            <div className="w-full h-full border border-outline-variant flex items-center justify-center relative overflow-hidden bg-surface-container-lowest">
              <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <div className="w-full h-px bg-outline-variant"></div>
                <div className="w-px h-full bg-outline-variant absolute"></div>
              </div>
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path 
                  className="text-primary" 
                  d="M0,50 L20,50 L30,20 L40,80 L50,50 L80,50 L90,10 L100,50" 
                  fill="none" 
                  filter="drop-shadow(0 0 2px rgba(168,232,255,0.8))" 
                  stroke="currentColor" 
                  strokeWidth="0.5"
                ></path>
              </svg>
            </div>
          </div>
        </section>

        <Suspense fallback={<Loading />}>
          <About />
        </Suspense>

        <Suspense fallback={<Loading />}>
          <Skills skills={skills} />
        </Suspense>

        <Suspense fallback={<Loading />}>
          <Projects projects={portfolioProjects} />
        </Suspense>

        <Suspense fallback={<Loading />}>
          <Experience />
        </Suspense>
        
        <Suspense fallback={<Loading />}>
          <Education />
        </Suspense>

        <Suspense fallback={<Loading />}>
          <Contact personalInfo={personalInfo} />
        </Suspense>
      </main>

      <footer className="bg-surface-lowest border-t border-outline-variant relative overflow-hidden w-full px-margin-mobile md:px-margin-desktop py-12 flex flex-col md:flex-row justify-between items-center gap-gutter max-w-[1280px] mx-auto mt-24">
        <div className="font-headline-sm text-headline-sm text-primary">
            LOKHANDWALA_ENGINEERING
        </div>
        <div className="font-label-sm text-label-sm uppercase tracking-tighter text-on-surface-variant text-center md:text-left">
            ©{new Date().getFullYear()} LOKHANDWALA_ENGINEERING [SIGNAL_STABLE]
        </div>
        <div className="flex gap-6 font-label-sm text-label-sm uppercase tracking-tighter">
          {personalInfo.github && (
            <a className="text-on-surface-variant hover:text-secondary-fixed-dim underline decoration-1 transition-opacity duration-300" href={personalInfo.github} target="_blank" rel="noreferrer">GITHUB</a>
          )}
          {personalInfo.linkedin && (
            <a className="text-on-surface-variant hover:text-secondary-fixed-dim underline decoration-1 transition-opacity duration-300" href={personalInfo.linkedin} target="_blank" rel="noreferrer">LINKEDIN</a>
          )}
          {personalInfo.instagram && (
            <a className="text-on-surface-variant hover:text-secondary-fixed-dim underline decoration-1 transition-opacity duration-300" href={personalInfo.instagram} target="_blank" rel="noreferrer">INSTAGRAM</a>
          )}
          {personalInfo.instagramBusiness && (
            <a className="text-on-surface-variant hover:text-secondary-fixed-dim underline decoration-1 transition-opacity duration-300" href={personalInfo.instagramBusiness} target="_blank" rel="noreferrer">MADEINFLUTTER</a>
          )}
        </div>
      </footer>
    </>
  );
}

export default App;