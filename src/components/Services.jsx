import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
    const services = [
        {
            title: "Web Development",
            description: "Custom websites built for performance and scalability. From simple landing pages to complex web applications.",
            icon: (
                <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            technologies: ["MERN Stack", "WordPress", "Wix", "Next.js"]
        },
        {
            title: "App Development",
            description: "Cross-platform mobile applications that provide seamless user experiences on both iOS and Android devices.",
            icon: (
                <svg className="w-12 h-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            ),
            technologies: ["Flutter", "React Native", "Expo"]
        },
        {
            title: "Digital Marketing",
            description: "Strategic marketing solutions to grow your online presence, reach your target audience, and drive conversions.",
            icon: (
                <svg className="w-12 h-12 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
            ),
            technologies: ["SEO", "Social Media", "Analytics", "Content Strategy"]
        }
    ];

    return (
        <section id="services" className="section-padding bg-slate-900 relative z-10">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-5xl font-bold mb-16 text-center gradient-text"
                >
                    Services Offered
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group"
                        >
                            <div className="mb-6 bg-slate-900/50 w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-gray-300 mb-6 leading-relaxed">
                                {service.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {service.technologies.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="text-xs font-semibold inline-block py-1 px-3 uppercase rounded-full text-slate-300 bg-slate-700/50 border border-slate-600"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
