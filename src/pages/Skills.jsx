import React, { useState } from "react";
import { motion } from "framer-motion";

// icons
import html from "../assets/skills/html-icon.png";
import css from "../assets/skills/css-icon.png";
import bootstrap from "../assets/skills/bootstrap.png";
import tailwind from "../assets/skills/tailwind-icon.png";
import js from "../assets/skills/js.png";
import react from "../assets/skills/react-icon.png";
import next from "../assets/skills/nextjs-icon.png";
import mongodb from "../assets/skills/mongodb-icon.png";
import stripe from "../assets/skills/stripe.png";
import jwtToken from "../assets/skills/java-web-token.png";
import express from "../assets/skills/express.js-icon.png";
import nodejs from "../assets/skills/nodejs-icon.png";
import github from "../assets/skills/github-icon.png";
import postman from "../assets/skills/postman.png";
import figma from "../assets/skills/figma-icon.png";
import pixso from "../assets/skills/pixso.png";
import firebase from "../assets/skills/firebase-icon.png";
import SectionTitle from "../shared/SectionTitle";

const skills = [
    { title: "HTML5", icon: html, category: "Frontend", level: 85 },
    { title: "CSS3", icon: css, category: "Frontend", level: 75 },
    { title: "Bootstrap", icon: bootstrap, category: "Frontend", level: 70 },
    { title: "TailwindCSS", icon: tailwind, category: "Frontend", level: 80 },
    { title: "JavaScript", icon: js, category: "Frontend", level: 50 },
    { title: "React.js", icon: react, category: "Frontend", level: 60 },
    { title: "Next.js", icon: next, category: "Frontend", level: 50 },
    { title: "Stripe", icon: stripe, category: "Frontend", level: 50 },
    { title: "MongoDB", icon: mongodb, category: "Backend", level: 50 },
    { title: "Express.js", icon: express, category: "Backend", level: 40 },
    { title: "Node.js", icon: nodejs, category: "Backend", level: 35 },
    { title: "Firebase", icon: firebase, category: "Backend", level: 60 },
    { title: "JWT Token", icon: jwtToken, category: "Backend", level: 50 },
    { title: "Postman", icon: postman, category: "Backend", level: 40 },
    { title: "GitHub", icon: github, category: "Tools", level: 55 },
    { title: "Figma", icon: figma, category: "Tools", level: 50 },
    { title: "Pixso", icon: pixso, category: "Tools", level: 50 },
];

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState("Frontend");

    const categories = ["Frontend", "Backend", "Tools"];

    const filteredSkills = skills.filter((skill) => skill.category === activeCategory);

    return (
        <section
            id="skills"
            className="my-24 md:my-32 text-sm max-w-6xl mx-auto px-4"
        >
            <SectionTitle title={"Skills"} />

            {/* Category Tabs */}
            <div className="flex justify-center items-center gap-3 my-10 flex-wrap">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-6 py-2 cursor-pointer rounded-full text-white font-medium transition-all duration-300 ${activeCategory === category
                            ? "bg-gradient-to-r from-cyan-600 to-cyan-500 shadow-lg shadow-cyan-500/40"
                            : "bg-gray-800 text-secondary hover:bg-gray-700 hover:text-white"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Skills Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-center">
                {filteredSkills.map((skill, index) => (
                    <motion.div
                        key={skill.title}
                        initial={{ opacity: 0.05, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.02 }}
                        className="bg-gray-900/60 p-5 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
                    >
                        <div className="flex items-center gap-4 mb-3">
                            <div className="w-12 h-12 bg-gray-700 rounded-lg p-2 flex items-center justify-center">
                                <img
                                    src={skill.icon}
                                    alt={skill.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-white">{skill.title}</h3>
                                <p className="text-xs text-gray-400">
                                    {skill.level}% Proficiency
                                </p>
                            </div>
                        </div>

                        {/* Progress bar */}
                        <div className="w-full bg-gray-800 rounded-full h-[6px] overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{ duration: 0.8, delay: 0.5 + index * 0.05 }}
                                className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full"
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;