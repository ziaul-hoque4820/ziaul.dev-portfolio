import React from "react";
import { MdComputer } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { motion } from "framer-motion";
import bannerImg from "../assets/about-profile.jpg";
import { LuDownload } from "react-icons/lu";
import SectionTitle from "../shared/SectionTitle";

const aboutData = [
    {
        title: "Accounting to FinTech Journey",
        description:
            "I completed my BBA in Accounting from National University and gained one year of audit experience from ICAB, working with both local and multinational companies. This exposure inspired me to bridge accounting knowledge with technology and explore FinTech solutions.",
        icon: <MdComputer size={25} />,
    },
    {
        title: "Web Engineering & Vision",
        description:
            "I started programming during my undergraduate years and gradually chose web engineering as my career path. With hands-on experience in MERN stack, I aim to build FinTech products where accounting expertise and audit insights add real business value.",
        icon: <PiStudentBold size={25} />,
    },
];


const About = () => {
    return (
        <section
            id="about"
            className="my-10 md:my-14 lg:my-24 text-sm py-6 max-w-6xl mx-auto px-4"
        >
            <div className="grid lg:grid-cols-[450px_1fr] items-center gap-16">

                {/* Mobile Only Title */}
                <div className="block lg:hidden text-center mb-6">
                    <SectionTitle title={"About Me"} />
                </div>

                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="relative block"
                >
                    {/* Floating CV Button */}
                    <motion.a
                        href="#"
                        download
                        animate={{ y: [0, -25, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-6 -right-6 z-20 btn border-0 bg-gradient-to-r from-cyan-600 to-cyan-500 rounded-full shadow-lg shadow-cyan-500/40 text-slate-950 font-bold whitespace-nowrap transition-all duration-300 flex items-center gap-2 px-6 py-3 hover:scale-105 active:scale-95"
                    >
                        My CV <LuDownload className="text-lg" />
                    </motion.a>

                    {/* Image Decorative Frame */}
                    <div className="relative group">
                        <div className="absolute -inset-2 bg-gradient-to-br from-cyan-500/30 to-transparent rounded-4xl rounded-tl-[80px] blur-sm group-hover:blur-md transition-all duration-500" />
                        <div className="relative bg-slate-900 border border-cyan-500/20 rounded-4xl rounded-tl-[80px] p-3 shadow-2xl shadow-cyan-500/10">
                            <img
                                src={bannerImg || "https://i.postimg.cc/qq7NbXzR/cv-img-ziaul.jpg"}
                                alt="Ziaul"
                                className="rounded-4xl rounded-tl-[70px] object-cover w-full h-[500px] grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Content Section */}
                <div className="space-y-8">

                    {/* Desktop Only Title */}
                    <div className="hidden lg:block">
                        <SectionTitle title={"About Me"} />
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-slate-400 md:text-lg leading-relaxed text-center lg:text-left"
                    >
                        I’m a <span className="text-cyan-400 font-medium">Web Engineer</span> with a strong background in
                        <span className="text-cyan-400 font-medium"> Accounting</span> and
                        <span className="text-cyan-400 font-medium"> audit</span>, experienced through ICAB. I build
                        scalable, user-focused applications using
                        <span className="text-cyan-400 font-medium"> React</span> and the
                        <span className="text-cyan-400 font-medium"> MERN stack</span>, aiming to create impactful
                        <span className="text-cyan-400 font-medium"> FinTech solutions</span>.
                    </motion.p>


                    {/* Info Cards */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {aboutData.map((data, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                                className="relative group p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 shadow-xl shadow-cyan-500/5"
                            >
                                {/* Icon Circle */}
                                <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                                    {data.icon}
                                </div>

                                <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors">
                                    {data.title}
                                </h3>

                                <p className="text-slate-400 leading-relaxed text-sm">
                                    {data.description}
                                </p>

                                {/* Decorative Corner */}
                                <div className="absolute top-0 right-0 w-8 h-8 bg-cyan-500/5 rounded-tr-2xl rounded-bl-full" />
                            </motion.div>
                        ))}
                    </div>

                    {/* Mobile CV Button */}
                    <div className="flex lg:hidden justify-center pt-4">
                        <motion.a
                            href="#"
                            download
                            className="btn border-0 bg-gradient-to-r from-cyan-600 to-cyan-500 rounded-full shadow-lg shadow-cyan-500/40 text-slate-950 font-bold px-10 py-4 flex items-center gap-2 hover:scale-105 active:scale-95 transition-transform"
                        >
                            My CV <LuDownload className="text-xl" />
                        </motion.a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
