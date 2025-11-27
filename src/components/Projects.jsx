import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectSlideshow = ({ images, title }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="relative h-48 group overflow-hidden bg-slate-800">
            <AnimatePresence mode='wait'>
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt={`${title} screenshot ${currentIndex + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover"
                />
            </AnimatePresence>

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-60"></div>

            {/* Navigation Buttons - Only show if more than 1 image */}
            {images.length > 1 && (
                <>
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
                        aria-label="Previous image"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
                        aria-label="Next image"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Dots Indicator */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1.5">
                        {images.map((_, idx) => (
                            <div
                                key={idx}
                                className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === currentIndex ? 'bg-white' : 'bg-white/40'
                                    }`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

const Projects = () => {
    const projects = [
        {
            title: "Athlistar",
            description: "A comprehensive platform for athletes to showcase their profiles and connect with opportunities. Built with modern web technologies to ensure high performance and scalability.",
            tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
            gitLink: "https://github.com/bharatmewara/Athlistar",
            demoLink: "#",
            featured: true,
            images: [
                "./Projects/Athlistar/banner.png", // Shoe/Sport
                "./Projects/Athlistar/1.png", // Dashboard
                "./Projects/Athlistar/2.png",  // Athlete
                "./Projects/Athlistar/3.png",  // Athlete
                "./Projects/Athlistar/4.png",  // Athlete
                "./Projects/Athlistar/5.png"  // Athlete
            ]
        },
        {
            title: "WonderLust",
            description: "A feature-rich web application designed for travel enthusiasts. Includes secure user authentication, destination sharing, and interactive maps.",
            tags: ["Node.js", "Express.js", "MongoDB", "Auth"],
            gitLink: "https://github.com/bharatmewara/Wonderlust",
            demoLink: "#",
            featured: false,
            images: [
                "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Travel
                "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Map/Location
                "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"  // Landscape
            ]
        },
        {
            title: "Self-Portfolio",
            description: "This responsive portfolio website featuring advanced parallax animations, dark mode aesthetics, and mobile-first design principles.",
            tags: ["React", "Framer Motion", "Tailwind CSS"],
            gitLink: "https://github.com/bharatmewara/animated-portfolio",
            demoLink: "#",
            featured: false,
            images: [
                "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Code/Portfolio
                "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Code screen
                "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"  // Modern desk
            ]
        }
    ];

    return (
        <section id="projects" className="section-padding bg-slate-900 relative z-10">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-5xl font-bold mb-16 text-center gradient-text"
                >
                    Featured Projects
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group flex flex-col ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
                        >
                            <ProjectSlideshow images={project.images} title={project.title} />

                            <div className="p-8 flex-1 flex flex-col">
                                <div className="mb-4">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h3>
                                </div>

                                <p className="text-gray-300 mb-6 flex-1 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-4 mb-6">
                                    <a
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium text-sm"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        <span>Live Demo</span>
                                    </a>
                                    <a
                                        href={project.gitLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors font-medium text-sm"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                        </svg>
                                        <span>GitHub Repo</span>
                                    </a>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="text-xs font-semibold inline-block py-1 px-3 uppercase rounded-full text-blue-200 bg-blue-900/40 border border-blue-900/50"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
