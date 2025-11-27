import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            title: "Technical Consultant – Application Engineering",
            company: "Current",
            period: "May 2024 – Present",
            description: "Leading technical initiatives and consulting on application architecture to drive efficiency and scalability. Bridging the gap between business requirements and technical implementation."
        },
        {
            title: "Full Stack Developer",
            company: "Craact Technology",
            period: "Sept 2020 – Oct 2023",
            description: "Spearheaded full-cycle development of key web applications. Achieved a 30% improvement in UI performance through strategic implementation of lazy loading and code splitting. Collaborated with cross-functional teams to deliver robust solutions on time."
        },
        {
            title: "Frontend Developer Intern",
            company: "Digilogious",
            period: "May 2020 - Aug 2020",
            description: "Contributed to the development of responsive user interfaces. Gained hands-on experience with modern frontend libraries and best practices in web development."
        },
        {
            title: "Digital Marketing Manager",
            company: "Tradefixa",
            period: "Aug 2019 – Jan 2020",
            description: "Managed digital marketing campaigns to increase brand visibility and user engagement. Leveraged analytics to optimize marketing strategies."
        }
    ];

    return (
        <section id="experience" className="section-padding bg-slate-900 relative z-10">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-5xl font-bold mb-16 text-center gradient-text"
                >
                    Professional Journey
                </motion.h2>

                <div className="relative border-l-2 border-slate-700 ml-3 md:ml-6 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="mb-10 ml-8 md:ml-12 relative group"
                        >
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-slate-900 border-2 border-blue-500 rounded-full -left-[2.35rem] md:-left-[3.35rem] group-hover:bg-blue-500 transition-colors duration-300">
                                <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:bg-white transition-colors duration-300"></div>
                            </span>
                            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/10">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                        {exp.title}
                                    </h3>
                                    <span className="text-sm font-medium text-blue-300 bg-blue-900/30 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
                                        {exp.period}
                                    </span>
                                </div>
                                <h4 className="text-lg text-gray-400 mb-4 font-medium">{exp.company}</h4>
                                <p className="text-gray-300 leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
