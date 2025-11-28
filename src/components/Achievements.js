import React from 'react';
import { achievements } from '../data';

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
          Key Achievements
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 border border-gray-700 shadow-xl">
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mr-6 group-hover:bg-blue-500 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-lg text-gray-300 pt-2 group-hover:text-white transition-colors">
                    {achievement}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;