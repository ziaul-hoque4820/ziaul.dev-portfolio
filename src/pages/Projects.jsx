import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaGithub, FaExternalLinkAlt, FaTh, FaList } from "react-icons/fa";
import { HiOutlineCode } from "react-icons/hi";
import project1 from "../assets/projects/active-club.jpg";
import project2 from "../assets/projects/food-mockup.jpg";
import project3 from "../assets/projects/job_nest-mockup.png";
import project4 from "../assets/projects/green_hub-mockup.png";
import SectionTitle from "../shared/SectionTitle";
import { Link } from "react-router";

const projects = [
    {
        image: project1,
        name: "Active Club",
        description:
            "Active Club is a full-stack sports club management web application that allows users to view and book courts, participate in activities, and stay informed through announcements. Admins can manage courts, bookings, users, and important updates all in one place.",
        live_link: "https://active-club-cb1de.web.app/",
        github_link: "https://github.com/Elora21y/active-club",
        technologies: ["React", "TailwindCSS", "React-router", "Express.js", "MongoDB", "Firebase"],
    },
    {
        image: project2,
        name: "Fresh Alert",
        description:
            "FreshAlert is a food sharing and management platform designed to reduce food waste by helping users post, find, and claim fresh and nearly expired food items.",
        live_link: "https://food-expiry-tracker-2b052.web.app/",
        github_link: "https://github.com/Elora21y/food-expiry-client",
        technologies: ["React", "TailwindCSS", "Vite", "Express.js", "MongoDB", "Firebase"],
    },
    {
        image: project3,
        name: "Job Nest",
        description:
            "JobNest is an innovative and user-friendly website designed to help job seekers explore a wide variety of job opportunities across multiple companies.",
        live_link: "https://jobnest-web.netlify.app/",
        github_link: "https://github.com/Elora21y/job-nest",
        technologies: ["React", "TailwindCSS", "Firebase", "Vite"],
    },
    {
        image: project4,
        name: "Green Hub",
        description:
            "The goal of GreenHub is to connect gardening enthusiasts, promote sustainable green practices, and create a space where people can learn from each other and grow their own mini green world — whether on a rooftop, balcony, or backyard.",
        live_link: "https://green-hub-21ye.netlify.app/",
        github_link: "https://github.com/Elora21y/green-hub",
        technologies: ["React", "TailwindCSS", "Vite", "Express.js", "MongoDB", "Firebase"],
    },
];

const ProjectsWithToggle = ({ showAll = true }) => {
    const [viewMode, setViewMode] = useState("grid");
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const displayedProjects = showAll ? projects : projects.slice(0, 3);

    return (
        <div id="projects" className="py-12 md:py-16 lg:pb-24 rounded-xl">
            {/* Header */}
            <div className="mb-12">
                <SectionTitle
                    title={showAll ? "All Projects" : "Featured Projects"}
                />

                {/* View Toggle */}
                <div className="flex justify-center gap-3 my-8">
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setViewMode("grid")}
                        className={`px-3 sm:px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${viewMode === "grid"
                            ? "bg-gradient-to-r from-cyan-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/50"
                            : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white border border-gray-700"
                            }`}
                    >
                        <FaTh size={16} />
                        Grid View
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setViewMode("list")}
                        className={`px-3 sm:px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${viewMode === "list"
                            ? "bg-gradient-to-r from-cyan-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/50"
                            : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white border border-gray-700"
                            }`}
                    >
                        <FaList size={16} />
                        List View
                    </motion.button>
                </div>
            </div>

            {/* Projects */}
            <AnimatePresence mode="wait">
                {viewMode === "grid" ? (
                    <motion.div
                        key="grid"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
                    >
                        {displayedProjects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.16 }}
                                className="group bg-gray-900/50 rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-500/70 transition-all duration-400"
                            >
                                {/* Image */}
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                                    />

                                    {/* Hover Overlay (lg) */}
                                    <div className="hidden lg:flex absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 items-end justify-center p-4 gap-5">
                                        <a
                                            href={project.github_link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-cyan-600 rounded-full hover:bg-cyan-500 transition transform hover:scale-110"
                                        >
                                            <FaGithub size={20} className="text-white" />
                                        </a>
                                        <a
                                            href={project.live_link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-cyan-600 rounded-full hover:bg-cyan-500 transition transform hover:scale-110"
                                        >
                                            <FaExternalLinkAlt
                                                size={18}
                                                className="text-white"
                                            />
                                        </a>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5 space-y-3">
                                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition">
                                        {project.name}
                                    </h3>

                                    <p className="text-cyan-400 text-sm line-clamp-3">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="text-xs bg-gray-700/50 text-gray-300 px-3 py-2 rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Mobile Buttons */}
                                    <div className="flex flex-col sm:flex-row lg:hidden gap-4 pt-4">
                                        <a
                                            href={project.github_link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-5 py-3 rounded-sm bg-gray-800 hover:text-cyan-400 border border-gray-600 text-white flex items-center gap-2"
                                        >
                                            <FaGithub size={18} />
                                            View Code
                                        </a>

                                        <motion.a
                                            href={project.live_link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            whileHover={{
                                                boxShadow: "0 0 20px rgba(6, 182, 212, 0.5)"
                                            }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-5 py-3 btn border-cyan-400 bg-gradient-to-r from-cyan-600 to-cyan-400 hover:from-cyan-400 hover:to-cyan-600 hover:text-white text-slate-950 rounded-lg font-bold flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/40 transition-all duration-500"
                                        >
                                            View Project
                                            <motion.div
                                                animate={{ x: [0, 3, 0] }}
                                                transition={{ repeat: Infinity, duration: 2 }}
                                            >
                                                <FaArrowRight size={16} className="font-bold" />
                                            </motion.div>
                                        </motion.a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (
                    <motion.div
                        key="list"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="flex flex-col gap-16 md:gap-20 max-w-7xl mx-auto"
                    >
                        {displayedProjects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className={`flex flex-col md:flex-row ${index % 2 && "md:flex-row-reverse"
                                    } gap-8 lg:gap-12 items-center group`}
                            >
                                {/* Image */}
                                <div className="flex-1 overflow-hidden rounded-2xl border-2 border-gray-700 group-hover:border-cyan-500/70 transition shadow-xl">
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="w-full h-full object-cover group-hover:scale-102 transition-transform"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex-1 space-y-5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-cyan-600/20 flex items-center justify-center">
                                            <HiOutlineCode className="text-cyan-400 text-2xl" />
                                        </div>
                                        <h3 className="text-3xl md:text-4xl font-bold text-white">
                                            {project.name}
                                        </h3>
                                    </div>

                                    <p className="text-cyan-400 leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="text-sm bg-gray-800 text-gray-300 px-4 py-2 rounded-lg border border-gray-700 hover:border-cyan-500 hover:text-cyan-300 transition"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4 pt-4">
                                        <a
                                            href={project.github_link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-5 py-3 rounded-sm bg-gray-800 border hover:text-cyan-400 border-gray-600 text-white flex items-center gap-2"
                                        >
                                            <FaGithub size={18} />
                                            View Code
                                        </a>

                                        <motion.a
                                            href={project.live_link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            whileHover={{
                                                boxShadow: "0 0 20px rgba(6, 182, 212, 0.5)"
                                            }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-5 py-3 btn border-cyan-400 bg-gradient-to-r from-cyan-600 to-cyan-400 hover:from-cyan-400 hover:to-cyan-600 hover:text-white text-slate-950 rounded-lg font-bold flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/40 transition-all duration-500"
                                        >
                                            View Project
                                            <motion.div
                                                animate={{ x: [0, 3, 0] }}
                                                transition={{ repeat: Infinity, duration: 2 }}
                                            >
                                                <FaArrowRight size={16} className="font-bold" />
                                            </motion.div>
                                        </motion.a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {!showAll && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="flex justify-center mt-12"
                >
                    <Link to="/projects">
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{
                                boxShadow: "0 0 20px rgba(6, 182, 212, 0.5)",
                                scale: 1.02
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-4 border-cyan-400 bg-gradient-to-r from-cyan-600 to-cyan-400 hover:from-cyan-400 hover:to-cyan-600 hover:text-white text-slate-950 rounded-lg font-bold flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/40 transition-all duration-200 rounded-tl-2xl rounded-br-2xl cursor-pointer"
                        >
                            View All Projects
                            <motion.div
                                animate={{ x: [0, 3, 0] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                            >
                                <FaArrowRight size={18} className="font-bold" />
                            </motion.div>
                        </motion.button>
                    </Link>
                </motion.div>
            )}
        </div>
    );
};

export default ProjectsWithToggle;