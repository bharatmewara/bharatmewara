import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section-padding bg-slate-900 relative z-10">
            <div className="max-w-5xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-5xl font-bold mb-12 text-center gradient-text"
                >
                    About Me
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-30 animate-pulse"></div>
                        <img
                            src="/Profile/Bharat_Mewara.png"
                            alt="Bharat Mewara"
                            className="relative rounded-2xl shadow-2xl w-full object-cover border border-slate-700 hover:border-blue-400 transition-colors duration-300"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-semibold text-white">
                            Transforming Ideas into <span className="text-blue-400">Digital Reality</span>
                        </h3>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            I am a seasoned Full Stack Developer with over 3 years of hands-on experience in architecting and deploying scalable web applications. My expertise lies in the MERN Stack, where I blend technical precision with creative problem-solving to deliver high-performance solutions.
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            Beyond just coding, I focus on the entire product lifecycle—from conceptualization to deployment. I am passionate about optimizing user experiences, ensuring code maintainability, and driving business growth through technology. Whether it's a complex enterprise platform or a sleek consumer app, I bring a commitment to excellence and innovation.
                        </p>
                        <div className="pt-4">
                            <a href="#contact" className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1">
                                Let's Collaborate
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
