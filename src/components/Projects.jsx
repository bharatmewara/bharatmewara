import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectModal = ({ project, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    className="bg-slate-800 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex justify-between items-start mb-6">
                        <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                        <button onClick={onClose} className="text-gray-400 hover:text-white">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="text-lg font-semibold text-blue-400 mb-2">Description</h4>
                            <p className="text-gray-300">{project.description}</p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-blue-400 mb-2">Features</h4>
                            <ul className="text-gray-300 space-y-1">
                                {project.features?.map((feature, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <span className="text-blue-400 mr-2">•</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-blue-400 mb-2">Tech Stack</h4>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack?.map((tech, idx) => (
                                    <span key={idx} className="px-3 py-1 bg-slate-700 text-blue-300 rounded-full text-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {project.clientName && (
                            <div>
                                <h4 className="text-lg font-semibold text-blue-400 mb-2">Client</h4>
                                <p className="text-gray-300">{project.clientName}</p>
                            </div>
                        )}

                        <div className="flex flex-wrap gap-4 pt-4">
                            {project.instagramHandle && (
                                <a href={project.instagramHandle} target="_blank" rel="noopener noreferrer"
                                    className="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-lg transition-colors flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                    Instagram
                                </a>
                            )}
                            {project.linkedinProfile && (
                                <a href={project.linkedinProfile} target="_blank" rel="noopener noreferrer"
                                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                    LinkedIn
                                </a>
                            )}
                            {project.githubLink && (
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                                    className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                    Github
                                </a>
                            )}
                            {project.demoLink && (
                                <a href={project.demoLink} target="_blank" rel="noopener noreferrer"
                                    className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

const ProjectCard = ({ project, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
        >
            <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white text-center px-4">{project.title}</h3>
            </div>

            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="absolute inset-0 bg-slate-900/95 p-6 flex flex-col justify-center"
                    >
                        <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                        <p className="text-gray-300 text-sm mb-4 line-clamp-3">{project.description}</p>

                        <div className="mb-4">
                            <h5 className="text-blue-400 text-xs font-bold uppercase mb-2">Key Features</h5>
                            <ul className="text-gray-400 text-xs space-y-1">
                                {project.features?.slice(0, 2).map((feature, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <span className="mr-1">•</span> {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-wrap gap-1 mb-3">
                            {project.techStack?.slice(0, 3).map((tech, idx) => (
                                <span key={idx} className="px-2 py-1 bg-blue-600 text-white rounded text-xs">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <p className="text-blue-400 text-sm font-medium mt-auto">Click to view details</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);

    const categories = [
        { id: 'web', name: 'Web Development Projects', icon: '🌐' },
        { id: 'app', name: 'Application Development Projects', icon: '📱' },
        { id: 'marketing', name: 'Digital Marketing Achievements', icon: '📈' }
    ];

    const projectsData = {
        web: [
            {
                title: "Athlistar",
                description: "Athlistar.com is a performance-driven platform built to provide personalized shoe consultation, athlete development, and access to sports coaching content. The goal is to help athletes find the right gear, grow within a community, and explore sponsorship opportunities.",
                features: [
                    "Athlete profile management",
                    "Shoe matching system",
                    "Athelete Sponsorship",
                    "Athelete Coaching",
                    "Exclusive Community",
                    "Advanced search and filtering"
                ],
                techStack: ["React", "Firebase", "Authentication", "Firestore", "Tailwind CSS"],
                clientName: "Jishan Ali",
                linkedinProfile: "https://www.linkedin.com/in/alijishan",
                githubLink: "https://github.com/bharatmewara/Athlistar",
                demoLink: "https://athlistar.vercel.app/"
            },
            {
                title: "WonderLust",
                description: "A feature-rich web application designed for travel enthusiasts. Includes secure user authentication, destination sharing, and interactive maps.",
                features: [
                    "User authentication system",
                    "Destination sharing platform",
                    "Interactive maps integration",
                    "Travel planning tools"
                ],
                techStack: ["Node.js", "Express.js", "MongoDB", "EJS"],
                clientName: "Kuldeep Kumar",
                linkedinProfile: "https://www.linkedin.com/in/whokuldeepkumar/",
                githubLink: "https://github.com/bharatmewara/Wonderlust",
                demoLink: "https://wonderlust-one.vercel.app/"
            },
            {
                title: "Biba Ecommerce Store",
                description: "A modern ecommerce platform with advanced shopping features, secure payment integration, and responsive design for optimal user experience.",
                features: [
                    "Product catalog management",
                    "Shopping cart functionality",
                    "Secure payment gateway",
                    "Order tracking system"
                ],
                techStack: ["React", "Node.js", "MongoDB", "Redux"],
                clientName: "Rajveer Sharma",
                linkedinProfile: "https://www.linkedin.com/in/rajveer-sharma-ab325b278/",
                githubLink: "https://github.com/bharatmewara/BibaDemo",
                demoLink: "https://biba-demo.vercel.app/"
            }
        ],
        app: [
            {
                title: "Coming Soon",
                description: "Exciting application development projects are in the pipeline. Stay tuned for innovative mobile and desktop applications.",
                features: [
                    "Cross-platform compatibility",
                    "Modern UI/UX design",
                    "Performance optimization",
                    "Scalable architecture"
                ],
                techStack: ["React Native", "Flutter", "Node.js", "Firebase"]
            }
        ],
        marketing: [
            {
                title: "Abacus Mental Maths",
                description: "Comprehensive digital marketing campaign for mental math education platform, focusing on brand awareness and student enrollment growth.",
                features: [
                    "Social media strategy development",
                    "Content creation",
                    "Engagement rate optimization",
                    "Lead generation campaigns",
                    "Post-campaign analytics"
                ],
                techStack: ["Instagram Marketing", "Content Strategy", "Analytics", "SEO"],
                clientName: "Ranjana Kacholia",
                instagramHandle: "https://www.instagram.com/abacus_mentalmaths/"
            },
            {
                title: "Zzapkart",
                description: "Strategic digital marketing initiatives for e-commerce platform, driving traffic, conversions, and brand recognition in competitive market.",
                features: [
                    "E-commerce marketing strategy",
                    "Social media advertising",
                    "Influencer collaborations",
                    "Performance tracking and optimization"
                ],
                techStack: ["Social Media Marketing", "PPC Campaigns", "Analytics", "Brand Strategy"],
                clientName: "Mridul Sharma",
                instagramHandle: "https://www.instagram.com/zzapkart/"
            }
        ]
    };

    const handleCategorySelect = (categoryId) => {
        setSelectedCategory(categoryId);
    };

    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    const handleBackToCategories = () => {
        setSelectedCategory(null);
    };

    return (
        <section id="projects" className="section-padding bg-slate-900 relative z-10">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-5xl font-bold mb-16 text-center gradient-text"
                >
                    My Projects
                </motion.h2>

                {!selectedCategory ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {categories.map((category, index) => (
                            <motion.div
                                key={category.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer group"
                                onClick={() => handleCategorySelect(category.id)}
                            >
                                <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white text-center group-hover:text-blue-400 transition-colors">
                                    {category.name}
                                </h3>
                                <p className="text-gray-400 text-center mt-4">
                                    {projectsData[category.id].length} Project{projectsData[category.id].length !== 1 ? 's' : ''}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div>
                        <div className="flex items-center mb-8">
                            <button
                                onClick={handleBackToCategories}
                                className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                </svg>
                                Back to Categories
                            </button>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-8">
                            {categories.find(cat => cat.id === selectedCategory)?.name}
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projectsData[selectedCategory].map((project, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <ProjectCard
                                        project={project}
                                        onClick={() => handleProjectClick(project)}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={handleCloseModal}
            />
        </section>
    );
};

export default Projects;