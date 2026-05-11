import React from 'react';
import { personalInfo } from '../data';

const About = () => {
  return (
    <section id="about" className="py-24 border-b border-outline-variant border-dashed">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3">
          <div className="font-label-caps text-label-caps text-on-surface-variant flex items-center gap-2 mb-4">
            <span>[ SYS.BIO ]</span>
          </div>
          <h2 className="font-display-md text-display-md text-on-surface uppercase">
            &gt; EXECUTE<br />BIO_ROUTINE
          </h2>
        </div>
        <div className="w-full md:w-2/3 flex flex-col gap-6">
          <p className="font-body-lg text-body-lg text-on-surface">
            {personalInfo.summary}
          </p>
          <div className="level-1 p-6 font-body-md text-body-md text-primary font-mono mt-4">
            <span className="text-on-surface-variant mr-4">01</span> STATUS: ACTIVE<br />
            <span className="text-on-surface-variant mr-4">02</span> LOC: {personalInfo.location || "EARTH"}<br />
            <span className="text-on-surface-variant mr-4">03</span> MODE: BUILD
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;