import React from 'react';
import { experience } from '../data';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
          Professional Journey
        </h2>

        <div className="max-w-4xl mx-auto space-y-12">
          {experience.map((job, index) => (
            <div
              key={index}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-gray-800 transform -translate-x-1/2"></div>

              <div className={`md:flex items-start justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900 transform -translate-x-[5px] md:-translate-x-1/2 mt-1.5 z-10"></div>

                <div className="md:w-[45%] mb-8 md:mb-0">
                  <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                    <div className="flex flex-col mb-4">
                      <h3 className="text-xl font-bold text-white">{job.role}</h3>
                      <span className="text-blue-400 font-medium">{job.company}</span>
                      <div className="flex justify-between text-sm text-gray-500 mt-2">
                        <span>{job.duration}</span>
                        <span>{job.location}</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {job.projects.map((project, pIndex) => (
                        <div key={pIndex} className="bg-gray-900/50 p-4 rounded-lg">
                          <h4 className="text-gray-200 font-semibold mb-2">{project.name}</h4>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="md:w-[45%]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;