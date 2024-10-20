"use client";
import Story from "@/components/About/Story";
import Founder from "@/components/About/Founder";
import Values from "@/components/About/Values";
import Mission from "@/components/About/Mission";
import Team from "@/components/About/Team";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion"; // Import Framer Motion
import Pyramid from "@/components/Loaders/Pyramid";

interface TeamMember {
    _id: string;
    name: string;
    role: string;
    bio: string;
    imageUrl: string;
}

export default function About() {
    const [team, setTeam] = useState<TeamMember[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null); 

    useEffect(() => {
        const fetchTeam = async () => {
            try {
                const res = await axios("/api/about/team");
                setTeam(res.data);
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch team. Please try again later.");
                setLoading(false);
            }
        };
        fetchTeam();
    }, []);

    if (loading) {
        return <div className="container flex justify-center items-center h-screen"><Pyramid/></div>;
    }
    
    if (error) {
        return (
            <div className="container mx-auto px-4 py-8 text-red-500">
                {error}
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }} // Start invisible
            animate={{ opacity: 1 }} // Animate to visible
            transition={{ duration: 0.5 }} // Duration of the animation
            className="container mx-auto px-4 py-8"
        >
            <header className="text-center mb-12">
                <h1 className="text-4xl font-bold text-primary mb-2">
                    INJ <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Partners</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                    Illuminating Markets, Empowering Decisions
                </p>
            </header>

            {/* Story section */}
            <motion.div
                initial={{ y: 20, opacity: 0 }} // Start slightly below and invisible
                animate={{ y: 0, opacity: 1 }} // Animate to original position and visible
                transition={{ duration: 0.3 }} // Duration of animation
            >
                <Story />
            </motion.div>

            {/* Mission and Vision section */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                <Mission />
            </motion.div>

            {/* Founders section */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                <Founder />
            </motion.div>

            {/* Our Team section */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                <Team team={team} />
            </motion.div>

            {/* Values and Culture section */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                <Values />
            </motion.div>
        </motion.div>
    );
}
