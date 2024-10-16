"use client";
import Story from "@/components/About/Story";
import Founder from "@/components/About/Founder";
import Values from "@/components/About/Values";
import Mission from "@/components/About/Mission";
import Team from "@/components/About/Team";
import { useEffect, useState } from "react";
import axios from "axios";

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
        return <div className="container mx-auto px-4 py-8">Loading...</div>;
    }
    
    if (error) {
        return (
            <div className="container mx-auto px-4 py-8 text-red-500">
                {error}
            </div>
        );
    }
    return (
        <div className="container mx-auto px-4 py-8">
            <header className="text-center mb-12">
                <h1 className="text-4xl font-bold text-primary mb-2">
                    Insightful Research Solutions
                </h1>
                <p className="text-xl text-muted-foreground">
                    Illuminating Markets, Empowering Decisions
                </p>
            </header>

            {/* Story section */}
            <Story/>
            {/* Mission and Vision section */}
            <Mission/>
            {/* Founders section */}
            <Founder/>
            {/* Our Team section */}
            <Team team={team}/>
            {/* Values and Culture section */}
            <Values/>
        </div>
    );
}
