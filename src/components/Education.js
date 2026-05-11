import React from 'react';
import { education } from '../data';

const Education = () => {
  return (
    <section id="education" className="py-24 border-b border-outline-variant border-dashed">
      <div className="font-label-caps text-label-caps text-on-surface-variant flex items-center gap-2 mb-12">
        <span>[ ACADEMIC_RECORDS ]</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {education.map((edu, index) => (
          <div
            key={index}
            className="level-1 p-8 hover:border-primary transition-colors duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="text-primary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>school</span>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">{edu.duration}</span>
            </div>

            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 uppercase">{edu.degree}</h3>
            <p className="font-body-md text-body-md text-primary mb-1 uppercase">{edu.institution}</p>
            <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">{edu.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;