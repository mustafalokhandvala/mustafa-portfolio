import React from 'react';
import { education } from '../data';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
          Education
        </h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <span className="text-sm text-gray-500 font-medium">{edu.duration}</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
              <p className="text-blue-400 font-medium mb-1">{edu.institution}</p>
              <p className="text-gray-500 text-sm">{edu.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;