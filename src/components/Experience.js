import React from 'react';
import { experience } from '../data';

const Experience = () => {
  return (
    <section id="experience" className="py-24 border-b border-outline-variant border-dashed">
      <div className="font-label-caps text-label-caps text-on-surface-variant flex items-center gap-2 mb-12">
        <span>[ WORK_HISTORY ]</span>
      </div>

      <div className="relative border-l border-outline-variant border-dashed ml-4 md:ml-8 pl-8 md:pl-12 py-4">
        {experience.map((job, index) => (
          <div key={index} className="mb-16 relative">
            <div className="absolute -left-[41px] md:-left-[57px] top-0 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
              <h3 className="font-headline-md text-headline-md text-primary uppercase">
                {job.role}
              </h3>
              <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest bg-surface-container-lowest px-3 py-1 border border-outline-variant inline-block w-max">
                {job.duration}
              </div>
            </div>
            
            <div className="font-label-caps text-label-caps text-on-surface uppercase tracking-widest mb-6">
              {job.company} {'//'} {job.location}
            </div>

            <div className="space-y-4">
              {job.projects.map((project, pIndex) => (
                <div key={pIndex} className="level-1 p-6">
                  <h4 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                    {project.name}
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;