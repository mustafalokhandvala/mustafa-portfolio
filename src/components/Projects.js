import React, { useState } from 'react';

const ProjectDescription = ({ description }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const maxLength = 150;

    if (description.length <= maxLength) {
        return (
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">
                {description}
            </p>
        );
    }

    return (
        <div className="mb-6 flex-grow">
            <p className="font-body-md text-body-md text-on-surface-variant inline">
                {isExpanded ? description : `${description.slice(0, maxLength)}...`}
            </p>
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="ml-2 font-label-sm text-label-sm uppercase text-primary hover:text-white transition-colors focus:outline-none"
            >
                {isExpanded ? '[ LESS ]' : '[ MORE ]'}
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
        <section id="projects" className="py-24 border-b border-outline-variant border-dashed">
            <div className="font-label-caps text-label-caps text-on-surface-variant flex items-center gap-2 mb-12">
                <span>[ PROJECT_DIRECTORY ]</span>
            </div>

            <div className="level-1 p-4 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.slice(0, visibleProjects).map((project, index) => (
                        <div key={index} className="level-2 p-6 flex flex-col hover:border-primary transition-colors duration-300 relative group">
                            <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                                    terminal
                                </span>
                            </div>
                            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 uppercase">
                                {project.name}
                            </h3>
                            <div className="flex gap-4 mb-4">
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="font-label-sm text-label-sm text-primary hover:text-white uppercase tracking-widest flex items-center gap-1">
                                        <span className="material-symbols-outlined text-[14px]">code</span> src
                                    </a>
                                )}
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="font-label-sm text-label-sm text-primary hover:text-white uppercase tracking-widest flex items-center gap-1">
                                        <span className="material-symbols-outlined text-[14px]">open_in_new</span> view
                                    </a>
                                )}
                            </div>
                            
                            <ProjectDescription description={project.description} />
                            
                            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-outline-variant">
                                {project.tech && project.tech.split(',').map((tech, i) => (
                                    <span key={i} className="chip">
                                        {tech.trim()}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {visibleProjects < projects.length && (
                    <div className="mt-12 text-center border-t border-outline-variant border-dashed pt-8">
                        <button
                            onClick={showMoreProjects}
                            className="btn-secondary"
                        >
                            LOAD_MORE_RECORDS
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
