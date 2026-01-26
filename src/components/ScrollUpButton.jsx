import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { IoArrowUp } from "react-icons/io5";

const ScrollUpButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const buttonRef = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 300, damping: 20 });
    const springY = useSpring(y, { stiffness: 300, damping: 20 });

    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight =
                document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / scrollHeight) * 100;
            setScrollProgress(progress);
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Magnetic effect
    const handleMouseMove = (e) => {
        const rect = buttonRef.current.getBoundingClientRect();
        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;
        x.set(offsetX * 0.3);
        y.set(offsetY * 0.3);
    };

    const resetPosition = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.6 }}
                    className="fixed right-6 bottom-6 z-50"
                >
                    <motion.button
                        ref={buttonRef}
                        style={{ x: springX, y: springY }}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={resetPosition}
                        onClick={scrollToTop}
                        whileTap={{ scale: 0.85 }}
                        whileHover={{ scale: 1.15 }}
                        className="relative p-4 rounded-full bg-gradient-to-r from-cyan-600 to-cyan-400
                       text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.6)]
                       hover:shadow-[0_0_50px_rgba(34,211,238,0.9)]
                       transition-all duration-300 group cursor-pointer"
                    >
                        {/* Glow Pulse */}
                        <span className="absolute inset-0 rounded-full animate-ping bg-cyan-400/30"></span>

                        {/* Progress Circle */}
                        <svg
                            className="absolute inset-0 -rotate-90"
                            width="100%"
                            height="100%"
                        >
                            <circle
                                cx="50%"
                                cy="50%"
                                r="45%"
                                stroke="rgba(255,255,255,0.15)"
                                strokeWidth="2"
                                fill="none"
                            />
                            <circle
                                cx="50%"
                                cy="50%"
                                r="45%"
                                stroke="white"
                                strokeWidth="2"
                                fill="none"
                                strokeDasharray={2 * Math.PI * 20}
                                strokeDashoffset={
                                    2 * Math.PI * 20 * (1 - scrollProgress / 100)
                                }
                                strokeLinecap="round"
                            />
                        </svg>

                        {/* Icon */}
                        <IoArrowUp
                            size={22}
                            className="relative z-10 transition-transform duration-300
                         group-hover:-translate-y-1"
                        />

                        {/* Tooltip */}
                        <span className="absolute -top-10 left-1/2 -translate-x-1/2
                             bg-slate-900 text-white text-xs px-2 py-1 rounded-md
                             opacity-0 group-hover:opacity-100 transition">
                            {Math.round(scrollProgress)}%
                        </span>
                    </motion.button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ScrollUpButton;
