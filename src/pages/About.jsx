import React from "react";
import { MdComputer } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { motion } from "framer-motion";
import bannerImg from "../assets/about-profile.jpg";
import { LuDownload } from "react-icons/lu";
import SectionTitle from "../shared/SectionTitle";

const aboutData = [
    {
        title: "Programming Journey",
        description:
            "My programming journey began after I got admitted to honors. Though I started as a fresher, I was lucky to have guidance from my brother. What started as curiosity soon became passion, I enjoy crafting clean UI and learning something new.",
        icon: <MdComputer size={25} />,
    },
    {
        title: "Education & Creativity",
        description:
            "I’m studying BBA in Accounting at National University of Bangladesh. Alongside studies, I have always loved design, teamwork, sports, arts and crafts. These combine my analytical side with my imagination.",
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
                        href="Elora_Yasmin_CV.pdf"
                        download
                        animate={{ y: [0, -15, 0] }}
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

                
            </div>
        </section>
    );
};

export default About;
