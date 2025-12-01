import React from 'react';
import { motion } from 'framer-motion';
import { companies } from '../data';
import { FaBriefcase } from 'react-icons/fa';

const Companies = () => {
    return (
        <section id="companies" className="py-20 bg-gradient-to-b from-light-bg to-gray-50 dark:from-dark-bg dark:to-gray-900 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-400 dark:to-blue-400">
                        Companies I've Worked With
                    </h2>
                    <p className="text-light-muted dark:text-dark-muted text-lg max-w-2xl mx-auto">
                        Proud to have contributed to these amazing organizations
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {companies.map((company, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="bg-white dark:bg-dark-card rounded-2xl p-8 border border-gray-200 dark:border-gray-800 hover:border-primary-500 dark:hover:border-primary-400 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-2 h-full">
                                {/* Company Icon */}
                                <div className="mb-6 relative">
                                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary-600 to-blue-600 dark:from-primary-500 dark:to-blue-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        {company.icon}
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <FaBriefcase className="text-primary-600 dark:text-primary-400 text-sm" />
                                    </div>
                                </div>

                                {/* Company Info */}
                                <div className="text-center">
                                    <h3 className="text-xl font-bold text-light-text dark:text-white mb-2">
                                        {company.name}
                                    </h3>
                                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                                        {company.role}
                                    </p>
                                    <p className="text-sm text-light-muted dark:text-dark-muted mb-4">
                                        {company.duration}
                                    </p>
                                    <p className="text-sm text-light-text dark:text-gray-300 leading-relaxed">
                                        {company.description}
                                    </p>
                                </div>

                                {/* Decorative gradient on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-blue-500/5 dark:from-primary-500/10 dark:to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats section */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <div className="text-center p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700">
                        <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">8+</div>
                        <div className="text-light-muted dark:text-dark-muted">Years Experience</div>
                    </div>
                    <div className="text-center p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700">
                        <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">3</div>
                        <div className="text-light-muted dark:text-dark-muted">Companies</div>
                    </div>
                    <div className="text-center p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700">
                        <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">100K+</div>
                        <div className="text-light-muted dark:text-dark-muted">Users Served</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Companies;
