import React, { useEffect, useRef, useState } from "react";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaRegUser, FaPaperPlane } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import toast from "react-hot-toast";
import { useForm } from "@formspree/react";
import { motion } from "framer-motion";
import contact from "/public/contact.json";
import Lottie from "lottie-react";
import SectionTitle from "../shared/SectionTitle";

const Contacts = () => {
    const formRef = useRef();
    const [state, handleSubmit] = useForm("xgoagrvy");
    const [focusedField, setFocusedField] = useState(null);

    useEffect(() => {
        if (state.succeeded) {
            toast.success("Thanks for messaging!");
            formRef.current.reset();
        }
    }, [state.succeeded]);

    const contactInfo = [
        {
            icon: <RiWhatsappFill size={23} />,
            text: "+880 1891547609",
            link: "https://wa.me/8801891547609",
        },
        {
            icon: <MdMarkEmailUnread size={22} />,
            text: "ziaul.dev@gmail.com",
        },
    ];

    return (
        <section id="contacts" className="py-10 md:py-14 lg:py-20 max-w-6xl mx-auto px-4">
            <SectionTitle title={"Contacts"} />
            <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12 py-5">
                {/* Left: Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ amount: 0.5 }}
                    className="flex flex-col gap-6 text-secondary-content items-center md:items-start justify-center flex-1"
                >
                    {/* Title */}
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-300 to-cyan-600 bg-clip-text text-transparent mb-2">
                            Let's Connect
                        </h2>
                        <p className="text-gray-400 text-sm md:text-base">
                            Feel free to reach out for collaborations or just a friendly chat
                        </p>
                    </div>

                    {/* Contact Info Cards */}
                    <div className="flex flex-col gap-3 w-full max-w-md">
                        {contactInfo.map((info, index) => (
                            <motion.a
                                key={index}
                                href={info.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.4 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 group"
                            >
                                <span className="text-cyan-400">{info.icon}</span>
                                <span className="text-gray-300 group-hover:text-white transition-colors text-sm md:text-base">
                                    {info.text}
                                </span>
                            </motion.a>
                        ))}
                    </div>

                    {/* Lottie Animation */}
                    <Lottie
                        animationData={contact}
                        loop={true}
                        className="w-64 md:w-80 lg:w-96"
                    />
                </motion.div>

                {/* Divider */}
                <div className="divider lg:divider-horizontal"></div>

                {/* Right: Contact Form */}
                <motion.form
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ amount: 0.5 }}
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5 flex-1 max-w-lg w-full bg-gray-800/30 p-6 md:p-8 rounded-2xl border border-gray-700 shadow-md shadow-cyan-500/20"
                >
                    <h3 className="text-xl md:text-2xl xl:text-3xl font-semibold text-white mb-4">
                        Send a Message
                    </h3>

                    {/* Name Input */}
                    <div className="relative">
                        <label className="text-sm text-gray-400 mb-2 block">Your Name</label>
                        <div className="relative">
                            <FaRegUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                name="name"
                                placeholder="e.g. Ziaul Hoque"
                                required
                                onFocus={() => setFocusedField("name")}
                                onBlur={() => setFocusedField(null)}
                                className={`w-full pl-12 pr-4 py-3 bg-gray-900 border rounded-lg text-white placeholder:text-gray-500 focus:outline-none transition-all duration-300 ${focusedField === "name"
                                    ? "border-cyan-500 shadow-lg shadow-cyan-500/20"
                                    : "border-gray-700"
                                    }`}
                            />
                        </div>
                    </div>

                    {/* Email Input */}
                    <div className="relative">
                        <label className="text-sm text-gray-400 mb-2 block">Your Email</label>
                        <div className="relative">
                            <MdMarkEmailUnread
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                                size={20}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="e.g. ziaul.dev@gmail.com"
                                required
                                onFocus={() => setFocusedField("email")}
                                onBlur={() => setFocusedField(null)}
                                className={`w-full pl-12 pr-4 py-3 bg-gray-900 border rounded-lg text-white placeholder:text-gray-500 focus:outline-none transition-all duration-300 ${focusedField === "email"
                                    ? "border-cyan-500 shadow-lg shadow-cyan-500/20"
                                    : "border-gray-700"
                                    }`}
                            />
                        </div>
                    </div>

                    {/* Message Textarea */}
                    <div className="relative">
                        <label className="text-sm text-gray-400 mb-2 block">Your Message</label>
                        <textarea
                            name="message"
                            placeholder="Tell me about your project..."
                            rows="5"
                            required
                            onFocus={() => setFocusedField("message")}
                            onBlur={() => setFocusedField(null)}
                            className={`w-full px-4 py-3 bg-gray-900 border rounded-lg text-white placeholder:text-gray-500 focus:outline-none resize-none transition-all duration-300 ${focusedField === "message"
                                ? "border-cyan-500 shadow-lg shadow-cyan-500/20"
                                : "border-gray-700"
                                }`}
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <motion.button
                        type="submit"
                        disabled={state.submitting}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.96 }}
                        transition={{ type: "spring", stiffness: 260 }}
                        className="w-full btn border-cyan-400 bg-gradient-to-r from-cyan-600 to-cyan-400 hover:from-cyan-400 hover:to-cyan-600 hover:text-white text-slate-950 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-cyan-500/40 transition-all duration-500 px-8 py-4 disabled:opacity-60disabled:cursor-not-allowed"
                    >
                        {state.submitting ? (
                            <>
                                <span className="loading loading-spinner loading-sm" />
                                Sending...
                            </>
                        ) : (
                            <>
                                Send Message
                                <FaPaperPlane size={16} />
                            </>
                        )}
                    </motion.button>


                </motion.form>
            </div>
        </section>
    );
};

export default Contacts;
