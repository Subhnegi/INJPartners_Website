"use client";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion"; // Import Framer Motion

interface ServiceDetail {
    id: string;
    title: string;
    description: string;
    image: string;
    benefits: string[];
    methodologies: string[];
}

export default function SingleServicePage({
    params,
}: {
    params: { id: string };
}) {
    const [service, setService] = useState<ServiceDetail | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const id = params.id;

    useEffect(() => {
        const fetchService = async () => {
            try {
                const response = await axios.get<ServiceDetail>(
                    `/api/services/${id}`
                );
                setService(response.data);
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch services. Please try again later.");
                setLoading(false);
            }
        };

        fetchService();
    }, [id]);

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

    if (!service) {
        return (
            <div className="container mx-auto px-4 py-8">Service not found</div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <Link
                href="/services"
                className="inline-flex items-center text-primary hover:underline mb-6"
            >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Services
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div className="grid gap-8 md:grid-cols-2">
                    <div>
                        <motion.h1
                            className="text-4xl font-bold text-primary mb-4"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            {service.title}
                        </motion.h1>
                        <motion.p
                            className="text-xl text-muted-foreground mb-6"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        >
                            {service.description}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                        >
                            <Image
                                src={service.image}
                                alt={service.title}
                                width={800}
                                height={400}
                                className="rounded-lg object-cover w-full"
                            />
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                        className="space-y-6"
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle>Key Benefits</CardTitle>
                                <CardDescription>
                                    How this service can help your business
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {service.benefits.map((benefit, index) => (
                                        <li key={index} className="flex items-start">
                                            <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Our Methodologies</CardTitle>
                                <CardDescription>
                                    The techniques we use to gather insights
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc list-inside space-y-2">
                                    {service.methodologies.map((methodology, index) => (
                                        <li key={index}>{methodology}</li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>

                        <Button size="lg" className="w-full">
                            Request a Consultation
                        </Button>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}
