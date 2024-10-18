import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-row items-center justify-center px-20 py-5 w-full z-[20] bg-gradient-to-tl from-[#183EC2]  via-[transparent] bg-76%"
        >
            <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
                <motion.div
                    variants={slideInFromTop}
                    className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
                >
                    <SparklesIcon className="text-[#4251f88b] mr-[10px] h-5 w-5" />
                    <h1 className="Welcome-text text-[13px]">
                        Market Researchers
                    </h1>
                </motion.div>

                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="flex flex-col gap-6 mt-6 text-6xl font-bold  max-w-[600px] w-auto h-auto"
                >
                    <span>
                        Expert
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                            {" "}
                            Insights{" "} <br />
                        </span>
                            and Beyond
                    </span>
                </motion.div>

                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="text-lg text-gray-400 my-5 max-w-[600px]"
                >
                    Unlock Market Insights with INJ PARTNERS <br />
                    Data-driven decisions for your business growth
                </motion.p>
                <motion.a
                    variants={slideInFromLeft(1)}
                    className="py-2 button-primary text-center cursor-pointer rounded-lg max-w-[200px]"
                    href="/services"
                >
                    Checkout our services
                </motion.a>
            </div>

            <motion.div
                variants={slideInFromRight(0.8)}
                className="w-[90%] h-[90%] flex justify-center items-center relative rounded-full border-2 border-emerald-300/5 shadow-[0_0_80px_emerald-300] shadow-emerald-300/5"
            >
                <Image
                    src="/graphs.gif"
                    alt="work icons"
                    height={650}
                    width={650}
                    className="rounded-full"
                />
                <div className="absolute inset-0  border-2  rounded-full "/>
            </motion.div>
        </motion.div>
    );
};

const Hero = () => {
    return (
        <div className="relative flex flex-col h-full w-full" id="about-me">
            <HeroContent />
        </div>
    );
};

export default Hero;
