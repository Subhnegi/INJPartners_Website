"use client";
import Form from "@/components/Contact/Form";
import Address from "@/components/Contact/Address";
import FAQs from "@/components/Contact/FAQs";
import { useEffect, useState } from "react";
import axios from "axios";
import Pyramid from "@/components/Loaders/Pyramid";

interface FAQ {
    question: string;
    answer: string;
}

export default function ContactPage() {
    const [faqs, setFaqs] = useState<FAQ[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchFAQs = async () => {
            try {
                const response = await axios("/api/faqs");
                setFaqs(response.data);
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch FAQs. Please try again later.");
                setLoading(false);
            }
        };
        fetchFAQs();
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
                    Contact <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Us</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                    Get in touch with our expert team
                </p>
            </header>

            <div className="grid gap-8 md:grid-cols-2">
                {/* Contact form */}
                <Form />
                {/* Address */}
                <Address />
            </div>

            {/* FAQs */}
            <FAQs faqs={faqs} />
        </div>
    );
}
