"use client";
import { useState, useEffect } from 'react'
import axios from 'axios'
import CaseStudies from "@/components/Services/CaseStudies";
import OurOffer from "@/components/Services/OurOffer";
import Pyramid from '@/components/Loaders/Pyramid';
interface Service {
	_id: string;
	title: string;
	content: string;
	icon: string;
    methodologies: string[];
    benefits: string[];
};
  
interface CaseStudy {
    _id: string;
    title: string;
    description: string;
    overview: string;
    achievements: string[];
    methodology: string[];
    insights: string[];
}
export default function ServicesPage() {
    const [services, setServices] = useState<Service[]>([]);
    const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await axios< Service[] >(
                    "/api/services"
                );
                setServices(response.data);
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch services. Please try again later.");
                setLoading(false);
            }
        };
        const fetchStudies = async () => {
            try {
                const res = await axios<CaseStudy[]>(
                    "/api/case-studies"
                );
                setCaseStudies(res.data);
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch services. Please try again later.");
                setLoading(false);
            }
        };

        fetchServices();
        fetchStudies();
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
        <div className="container mx-auto px-4 py-8">
            <header className="text-center mb-12">
                <h1 className="text-4xl font-bold text-primary mb-2">
                    Our <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Services</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                    Empowering Your Business with Data-Driven Insights
                </p>
            </header>
            {/* What We Offer section */}
            <OurOffer services={services} />

            {/* Case Studies section */}
            <CaseStudies caseStudies={caseStudies}/>
        </div>
    );
}
