import React from "react";
import bannerImg from "../assets/Profile.jpg";
import { motion } from "framer-motion";
import ResumeBtn from "../shared/ResumeBtn";
import { HiOutlineMail } from "react-icons/hi";
import { Typewriter } from "react-simple-typewriter";
import { LuArrowRight } from "react-icons/lu";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const socials = [
    {
        href: "https://www.linkedin.com/in/ziaul-hoque-patwary-a0a546324/",
        icon: FaLinkedin,
    },
    {
        href: "https://www.facebook.com/profile.php?id=61581156689224",
        icon: FaFacebook,
    },
    {
        href: "https://github.com/ziaul-hoque4820",
        icon: BsGithub,
    },
];

const Banner = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row justify-between gap-16 md:gap-26 items-center rounded-lg p-2 py-16 sm:px-4 md:px-10 xl:px-15 bg-transparent overflow-hidden">

            {/* Content Side */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center lg:text-left space-y-6 max-w-2xl relative z-10"
            >
                <div className="space-y-3">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-3xl font-bold"
                    >
                        <span className="text-slate-300 text-xl sm:text-2xl md:text-3xl font-medium">
                            Hello! Meet
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-cyan-400 via-sky-200 to-cyan-500 bg-clip-text text-transparent text-4xl md:text-5xl xl:text-6xl font-black my-4 md:my-2 lg:my-4 lg:ml-10 inline-block drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                            Ziaul Hoque
                        </span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-2xl sm:text-[26px] md:text-4xl font-semibold text-cyan-400 h-12 lg:h-14 italic"
                    >
                        <Typewriter
                            words={[
                                "Web Developer",
                                "React Developer",
                                "MERN Stack Developer",
                                "Frontend Developer",
                                "UI/UX Designer",
                            ]}
                            loop={0}
                            cursor
                            cursorStyle="_"
                            typeSpeed={70}
                            deleteSpeed={40}
                            delaySpeed={1500}
                        />
                    </motion.div>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-slate-400 text-base xl:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 xl:pb-4"
                >
                    I am a Frontend Developer who loves transforming ideas into clean,
                    responsive, and user-focused web experiences. I enjoy crafting modern
                    interfaces with <span className="text-cyan-400 font-medium">React</span> and the <span className="text-cyan-400 font-medium">MERN stack</span>. And also exploring <span className="text-cyan-400 font-medium">Next.js</span>
                </motion.p>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="flex flex-wrap gap-4 justify-center lg:justify-start items-center"
                >
                    <a
                        href="#projects"
                        className="group btn border-cyan-500/50 hover:border-cyan-400 rounded-lg font-bold transition-all duration-300 flex items-center gap-2 bg-cyan-500/5 hover:bg-cyan-500/10 text-cyan-400 px-6 py-3"
                    >
                        View Projects
                        <LuArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </a>

                    <ResumeBtn />
                </motion.div>

                {/* Socials */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex gap-5 justify-center lg:justify-start"
                >
                    {socials.map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -5, scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 rounded-xl bg-slate-900 border border-cyan-500/20 text-cyan-400 transition-all duration-300 shadow-[0_0_10px_rgba(34,211,238,0.1)] hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:border-cyan-400"
                        >
                            <social.icon size={22} />
                        </motion.a>
                    ))}
                </motion.div>
            </motion.div>

            {/* Image Side with Interactive Effects */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative group"
            >
                {/* Background Glow Effect */}
                <div className="absolute -inset-4 bg-cyan-500/20 rounded-full blur-3xl group-hover:bg-cyan-500/30 transition-all duration-500 animate-pulse" />

                {/* Animated Rings */}
                <div className="absolute inset-0 -z-10">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-[-20px] rounded-full border-2 border-dashed border-cyan-500/20"
                    />
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-[-40px] rounded-full border border-cyan-500/10"
                    />
                </div>

                {/* Profile Image Container */}
                <div className="w-64 h-64 md:w-80 md:h-80 xl:w-96 xl:h-96 rounded-full p-2 bg-gradient-to-b from-cyan-500/50 to-transparent shadow-[0_0_50px_rgba(34,211,238,0.2)]">
                    <img
                        src={bannerImg || "https://i.postimg.cc/B6m09Vs0/linkdin-profile-photo.jpg"}
                        alt="Ziaul"
                        className="rounded-full w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500 border-4 border-slate-900"
                    />
                </div>

                {/* Floating Contact Badge */}
                <motion.a
                    href="#contacts"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-2 -right-2 md:bottom-4 md:right-4 btn bg-slate-900 border border-cyan-500/50 hover:border-cyan-400 text-cyan-400 rounded-2xl shadow-xl backdrop-blur-md px-6 py-2 flex items-center gap-2 group overflow-hidden"
                >
                    <div className="absolute inset-0 bg-cyan-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <HiOutlineMail size={20} className="relative z-10" />
                    <span className="relative z-10 font-bold">Hire Me</span>
                </motion.a>
            </motion.div>
        </div>
    );
};

export default Banner;