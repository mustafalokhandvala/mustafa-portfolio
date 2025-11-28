import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectDescription = ({ description }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const maxLength = 150;

    if (description.length <= maxLength) {
        return (
            <p className="text-light-muted dark:text-dark-muted mb-6 flex-grow">
                {description}
            </p>
        );
    }

    return (
        <div className="mb-6 flex-grow">
            <p className="text-light-muted dark:text-dark-muted inline">
                {isExpanded ? description : `${description.slice(0, maxLength)}...`}
            </p>
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="ml-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline focus:outline-none"
            >
                {isExpanded ? 'View Less' : 'View More'}
            </button>
        </div>
    );
};

const Projects = ({ projects }) => {
    const [visibleProjects, setVisibleProjects] = useState(6);

    const showMoreProjects = () => {
        setVisibleProjects((prev) => prev + 3);
    };

    return (
        <section id="projects" className="py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-12"
            >
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-light-text dark:text-dark-text">
                    Featured Projects
                </h2>
                <div className="h-1 w-20 bg-primary-600 dark:bg-primary-400 rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                    {projects.slice(0, visibleProjects).map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative bg-white dark:bg-dark-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
                        >
                            <div className="p-6 h-full flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-light-text dark:text-dark-text group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                        {project.name}
                                    </h3>
                                    <div className="flex space-x-3">
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                                                <FaGithub size={20} />
                                            </a>
                                        )}
                                        {project.link && (
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                                                <FaExternalLinkAlt size={18} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <ProjectDescription description={project.description} />

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech && project.tech.split(',').map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-xs font-medium bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 rounded-full"
                                        >
                                            {tech.trim()}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {visibleProjects < projects.length && (
                <div className="mt-12 text-center">
                    <button
                        onClick={showMoreProjects}
                        className="px-8 py-3 bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-700 text-light-text dark:text-dark-text font-medium rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors shadow-sm hover:shadow-md"
                    >
                        Show More Projects
                    </button>
                </div>
            )}
        </section>
    );
};

export default Projects;
