"use client";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import KeyBenefits from "@/components/home/KeyBenefits";
import OurExpertise from "@/components/home/OurExpertise";
import RecentProjects from "@/components/home/RecentProjects";
import ClientTestimonials from "@/components/home/ClientTestimonials";
import Blog from "@/components/home/Blog";
import NewsletterSignup from "@/components/home/NewsletterSignup";
import { useEffect, useState } from "react";
import axios from "axios";
interface Service {
	id: string;
	title: string;
	content: string;
	icon: string;
    methodologies: string[];
    benefits: string[];
};
interface BlogPost {
    id: string;
    title: string;
    summary: string;
    category: string;
    image: string;
    author: string;
    date: string;
}

interface Project{
    id: string;
    title: string; 
    client: string;
    image: string;
    commment: string;
    commentBy: string;
}

interface Testimonials{
        id:string;
        name:string;
        role:string;
        testimonial:string;
}

export default function HomePage() {


    const [testimonials, setTestimonials] = useState<Testimonials[]>([]);
    const [blogContent, setBlogContent] = useState<BlogPost[]>([]);
    const [projects, setProjects] = useState<Project[]>([]);
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                setLoading(true)
                const res = await axios("http://localhost:3000/api/testimonials");
                setTestimonials(res.data);
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch testimonials. Please try again later.");
                setLoading(false);
            }
        };
        const fetchBlogs = async () => {
            try {
                setLoading(true)
                const res = await axios("http://localhost:3000/api/blog");
                setBlogContent(res.data);
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch blogs. Please try again later.");
                setLoading(false);
            }
        };

        const fetchProjects = async () => {
            try {
                setLoading(true)
                const res = await axios("http://localhost:3000/api/projects");
                setProjects(res.data);
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch products. Please try again later.");
                setLoading(false);
            }
        };

        const fetchServices = async () => {
            try {
                setLoading(true)
                const response = await axios<Service[] >(
                    "/api/services"
                );
                setServices(response.data);
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch services. Please try again later.");
                setLoading(false);
            }
        };

        fetchServices();
        fetchTestimonials();
        fetchBlogs();
        fetchProjects();
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
        <div className="flex flex-col min-h-screen">
            {/* Banner Section */}
            <Hero/>
            {/* Services Overview */}
            <Services services={services}/>
            {/* Key Benefits */}
            <KeyBenefits/>
            {/* Our Expertise */}
            <OurExpertise/>
            {/* Recent Projects */}
            <RecentProjects projects={projects}/>
            {/* Client Testimonials */}
            <ClientTestimonials testimonials={testimonials}/>
            {/* Blog Section */}
            <Blog blogContent={blogContent}/>
            {/* Newsletter Signup */}
            <NewsletterSignup/>
        </div>
    );
}
