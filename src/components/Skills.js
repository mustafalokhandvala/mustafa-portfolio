import React from 'react';
import { motion } from 'framer-motion';

const Skills = ({ skills }) => {
  // If skills is an object (categories), flatten it or display by category
  // If it's an array, display as is.
  // Based on previous file, it seemed to be an object.
  // Let's handle both or assume object based on data.js check (which I will do next, but for now I'll write a safe version)

  const skillsList = Array.isArray(skills) ? skills : Object.values(skills).flat();

  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-light-text dark:text-dark-text">
          Skills & Expertise
        </h2>
        <div className="h-1 w-20 bg-primary-600 dark:bg-primary-400 rounded-full"></div>
      </motion.div>

      <div className="flex flex-wrap gap-4">
        {skillsList.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 bg-white dark:bg-dark-card rounded-full shadow-sm border border-gray-100 dark:border-gray-800 text-light-text dark:text-dark-text font-medium hover:border-primary-500 dark:hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-default"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;