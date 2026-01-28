import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useNavigation } from "react-router";
import { motion } from "framer-motion";
import { IoReturnUpBack } from "react-icons/io5";
import Loading from "../components/Loading";

const ProjectsLayout = () => {
    const navigate = useNavigate();
    const navigation = useNavigation();

    const isLoading = navigation.state === "loading";
    const [initialLoading, setInitialLoading] = useState(true);
    const [loadingComplete, setLoadingComplete] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoadingComplete(true);

            setTimeout(() => {
                setInitialLoading(false);
            }, 600);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (initialLoading) {
        return <Loading isComplete={loadingComplete} />;
    }

    return (
        <>
            {isLoading && <Loading isComplete={false} />}

            <div className="bg-linear-to-r from-[#0a0a0fec] to-gray-800 min-h-screen relative z-10">
                <div className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-0">
                    {/* Back Button */}
                    <div className="pt-10">
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{
                                boxShadow: "0 0 20px rgba(6, 182, 212, 0.5)",
                                scale: 1.03
                            }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate("/")}
                            className="px-5 py-2 btn-sm md:btn-md rounded-tl-2xl rounded-br-2xl border-cyan-400 bg-gradient-to-r from-cyan-600 to-cyan-400 hover:from-cyan-400 hover:to-cyan-600 hover:text-white text-slate-950 font-bold flex items-center gap-2 shadow-lg shadow-cyan-500/40 transition-all duration-500 md:ml-10"
                        >
                            <motion.div
                                animate={{ x: [-3, 0, -3] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                            >
                                <IoReturnUpBack size={20} className="font-bold" />
                            </motion.div>
                            Go Back
                        </motion.button>
                    </div>

                    {/* Page Content */}
                    <main className="min-h-screen py-6 sm:py-8 md:py-10 lg:py-12 text-sm md:text-base overflow-hidden">
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    );
};

export default ProjectsLayout;
