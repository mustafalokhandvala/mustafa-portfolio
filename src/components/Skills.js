import React from 'react';

const Skills = ({ skills }) => {
  const skillsList = Array.isArray(skills) ? skills : Object.values(skills).flat();

  return (
    <section id="skills" className="py-24 border-b border-outline-variant border-dashed">
      <div className="font-label-caps text-label-caps text-on-surface-variant flex items-center gap-2 mb-12">
        <span>[ TECHNICAL_CAPABILITIES ]</span>
      </div>
      
      <div className="level-2 p-8 md:p-12">
        <h3 className="font-headline-md text-headline-md text-on-surface mb-8 uppercase tracking-widest border-b border-outline-variant pb-4">
          Core Proficiencies
        </h3>
        <div className="flex flex-wrap gap-3">
          {skillsList.map((skill, index) => (
            <div
              key={index}
              className="chip hover:bg-primary hover:text-black hover:border-primary transition-colors cursor-default"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;