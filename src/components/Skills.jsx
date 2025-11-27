import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend Excellence",
            skills: [
                { name: "React.js", level: "Expert" },
                { name: "Next.js", level: "Advanced" },
                { name: "TypeScript", level: "Advanced" },
                { name: "Tailwind CSS", level: "Expert" },
                { name: "Redux Toolkit", level: "Advanced" },
                { name: "Framer Motion", level: "Intermediate" },
                { name: "HTML5/CSS3", level: "Expert" }
            ]
        },
        {
            title: "Backend Powerhouse",
            skills: [
                { name: "Node.js", level: "Advanced" },
                { name: "Express.js", level: "Advanced" },
                { name: "GraphQL", level: "Intermediate" },
                { name: "RESTful APIs", level: "Expert" },
                { name: "Socket.io", level: "Intermediate" },
                { name: "Auth (JWT/OAuth)", level: "Advanced" }
            ]
        },
        {
            title: "Database & Cloud",
            skills: [
                { name: "MongoDB", level: "Advanced" },
                { name: "PostgreSQL", level: "Intermediate" },
                { name: "MySQL", level: "Intermediate" },
                { name: "AWS", level: "Intermediate" },
                { name: "Google Cloud", level: "Intermediate" },
                { name: "Docker", level: "Intermediate" }
            ]
        },
        {
            title: "DevOps & Tools",
            skills: [
                { name: "Git/GitHub", level: "Expert" },
                { name: "CI/CD", level: "Intermediate" },
                { name: "Grafana", level: "Intermediate" },
                { name: "Jest/Testing", level: "Intermediate" },
                { name: "Webpack/Vite", level: "Advanced" }
            ]
        }
    ];

    return (
        <section id="skills" className="section-padding bg-slate-900 relative z-10">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-5xl font-bold mb-16 text-center gradient-text"
                >
                    Technical Arsenal
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-900/10"
                        >
                            <h3 className="text-2xl font-bold text-white mb-6 border-b border-slate-700 pb-4 flex items-center">
                                <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full mr-4"></span>
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, idx) => (
                                    <div
                                        key={idx}
                                        className="group relative"
                                    >
                                        <span
                                            className="inline-block bg-slate-700/50 text-blue-100 text-sm font-medium px-4 py-2 rounded-lg border border-slate-600 hover:border-blue-400 hover:bg-blue-900/30 transition-all duration-300 cursor-default"
                                        >
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
