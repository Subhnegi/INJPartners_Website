"use client";
import Form from "@/components/Contact/Form";
import Address from "@/components/Contact/Address";
import FAQs from "@/components/Contact/FAQs";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ContactPage() {
    const [faqs, setFaqs] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
    const fetchStudy = async () => {
        try {
            const response = await axios<{ services: any[] }>(
                `/api/faqs`
            );
            setFaqs(response.data);
            setLoading(false);
        } catch (err) {
            setError("Failed to fetch services. Please try again later.");
            setLoading(false);
        }
    };
    fetchStudy();
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
                    Contact Us
                </h1>
                <p className="text-xl text-muted-foreground">
                    Get in touch with our expert team
                </p>
            </header>

            <div className="grid gap-8 md:grid-cols-2">
                {/* Contact form */}
                <Form/>
                {/* Address */}
                <Address/>
            </div>

            {/* FAQs */}
            <FAQs faqs={faqs}/>
        </div>
    );
}
