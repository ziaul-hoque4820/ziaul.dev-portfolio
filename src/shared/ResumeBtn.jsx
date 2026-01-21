import React from 'react';
import { motion } from "framer-motion";
import { LuDownload } from 'react-icons/lu';

const ResumeBtn = () => {
    return (
        <motion.a
            href="#"
            download
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ boxShadow: "0 0 20px rgba(6, 182, 212, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="ml-2 btn border-cyan-400 bg-gradient-to-r from-cyan-600 to-cyan-400 hover:from-cyan-400 hover:to-cyan-600 hover:text-white text-slate-950 rounded-lg font-bold flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/40 transition-all duration-500 px-4 py-2"
        >
            Resume
            <motion.div
                animate={{ y: [0, 3, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <LuDownload className="text-lg font-bold" />
            </motion.div>
        </motion.a>
    );
};

export default ResumeBtn;