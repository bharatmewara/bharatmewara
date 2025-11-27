import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Jishan Ali",
            project: "Athlistar (Shoe Matching Platform)",
            headline: "Solves a complex problem with an intuitive interface.",
            text: "Working with Bharat on Athlistar was a game-changer. I needed a specific algorithm to match athletes with the perfect shoe based on their sport and foot type, and Bharat translated that logic into a seamless, quick-form experience. The matching engine is fast, and the user flow is incredibly smooth. He didn't just build a website; he built a solution that athletes actually enjoy using.",
            rating: 5,
            image: "https://ui-avatars.com/api/?name=Jishan+Ali&background=0D8ABC&color=fff&rounded=true"
        },
        {
            name: "Kuldeep Kumar",
            project: "Wonderlust (Airbnb Replica)",
            headline: "Pixel-perfect implementation with robust backend logic.",
            text: "I challenged Bharat to build Wonderlust, a fully functional replica of a major booking platform, and he delivered beyond expectations. He handled everything from the complex search filters to the secure booking flow. The attention to detail in the UI is fantastic—it feels just like using a top-tier commercial app. His full-stack skills (especially with the MERN stack) really shine here.",
            rating: 5,
            image: "https://ui-avatars.com/api/?name=Kuldeep+Kumar&background=10B981&color=fff&rounded=true"
        },
        {
            name: "Senior Tech Recruiter",
            project: "Portfolio Review",
            headline: "A strong display of Full Stack capability.",
            text: "Bharat's portfolio is a testament to his clean coding practices and design sense. The way he presents complex projects like Athlistar and Wonderlust makes it easy to assess his technical depth immediately. A very well-structured and interactive personal brand statement.",
            rating: 5,
            image: "https://ui-avatars.com/api/?name=Tech+Recruiter&background=6366F1&color=fff&rounded=true"
        }
    ];

    const StarRating = ({ rating }) => {
        return (
            <div className="flex space-x-1">
                {[...Array(5)].map((_, index) => (
                    <svg
                        key={index}
                        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-600'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
            </div>
        );
    };

    return (
        <section id="testimonials" className="py-20 bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                        Client Testimonials
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        What people are saying about my work and collaboration.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors duration-300"
                        >
                            <div className="flex items-center space-x-4 mb-6">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full border-2 border-blue-500"
                                />
                                <div>
                                    <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                                    <p className="text-sm text-blue-400">{testimonial.project}</p>
                                </div>
                            </div>

                            <div className="mb-4">
                                <StarRating rating={testimonial.rating} />
                            </div>

                            <h4 className="text-lg font-semibold text-gray-200 mb-3 italic">
                                "{testimonial.headline}"
                            </h4>

                            <p className="text-gray-400 leading-relaxed text-sm">
                                "{testimonial.text}"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
