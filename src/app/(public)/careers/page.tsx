"use client";
import type React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { Button } from "@/components/ui/button";
import Openings from "@/components/Careers/Openings";
import Benefits from "@/components/Careers/Benefits";

interface JobOpening {
    _id: string;
    title: string;
    department: string;
    location: string;
    description: string;
    responsibilities: string[];
    qualifications: string[];
    type: string; // Adding this based on the Openings component requirements
}

const CareersPage: React.FC = () => {
    const [jobOpenings, setJobOpenings] = useState<JobOpening[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchJobOpenings = async () => {
            try {
                const response = await axios.get<JobOpening[]>("/api/careers");
                setJobOpenings(response.data);
                setLoading(false);
            } catch (err) {
                setError(
                    "Failed to fetch job openings. Please try again later."
                );
                setLoading(false);
            }
        };
        fetchJobOpenings();
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
                    Join Our Team
                </h1>
                <p className="text-xl text-muted-foreground">
                    Shape the Future of Market Research with Us
                </p>
            </header>
            <Openings jobOpenings={jobOpenings} />
            <Benefits />
            <div className="text-center mt-12">
                <h3 className="text-2xl font-semibold mb-4">
                    Ready to Make an Impact?
                </h3>
                <p className="mb-6">
                    Join our team of passionate researchers and innovators.
                    Apply now or reach out to learn more!
                </p>
                <div className="space-x-4">
                    <Button asChild>
                        <Link href="/careers/apply">Apply Now</Link>
                    </Button>
                    <Button variant="outline" asChild>
                        <Link href="/contact">
                            Contact Us
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CareersPage;