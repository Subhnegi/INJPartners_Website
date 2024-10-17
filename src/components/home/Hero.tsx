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
// const Hero = () => {
//     return (
//         <div>
//             <section className="bg-gradient-to-r from-primary to-primary-foreground text-white py-20">
//                 <div className="container mx-auto text-center">
//                     <h1 className="text-4xl font-bold mb-4">
//                         Unlock Market Insights with INJ PARTNERS
//                     </h1>
//                     <p className="text-xl mb-8">
//                         Data-driven decisions for your business growth
//                     </p>
//                     <Button asChild size="lg">
//                         <Link href="/services">Explore Our Services</Link>
//                     </Button>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Hero;
const HeroContent = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-row items-center justify-center px-20 py-5 w-full z-[20]"
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
                className="w-full h-full flex justify-center items-center"
            >
                <Image
                    src="/graphs.gif"
                    alt="work icons"
                    height={650}
                    width={650}
                />
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
