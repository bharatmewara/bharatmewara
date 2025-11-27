import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
    const mountainsY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]); // Fixed/Slow
    const planetsY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]); // Medium
    const starsY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]); // Slow

    return (
        <div
            ref={ref}
            className="relative w-full h-screen overflow-hidden flex items-center justify-center"
            style={{
                background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)'
            }}
        >
            {/* Stars Layer */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: 'url(/stars.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',
                    y: starsY
                }}
            />

            {/* Sun Layer */}
            <motion.div
                className="absolute inset-0 z-10"
                style={{
                    backgroundImage: 'url(/sun.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',
                    y: backgroundY
                }}
            />

            {/* Planets Layer */}
            <motion.div
                className="absolute inset-0 z-20"
                style={{
                    backgroundImage: 'url(/planets.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',
                    y: planetsY
                }}
            />

            {/* Mountains Layer */}
            <motion.div
                className="absolute inset-0 z-30"
                style={{
                    backgroundImage: 'url(/mountains.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',
                    y: mountainsY
                }}
            />

            {/* Content Layer */}
            <motion.div
                className="relative z-40 text-center px-4"
                style={{ y: textY }}
            >
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg"
                >
                    Bharat Mewara
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-3xl text-blue-200 font-light"
                >
                    Full Stack Developer | MERN Stack Specialist
                </motion.p>
            </motion.div>

            {/* Gradient Overlay for smooth transition to next section */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0f172a] to-transparent z-50" />
        </div>
    );
};

export default Hero;
