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
type Data = [{
    
}];
export default function SingleServicePage({params}:{params:{id:string}}) {
    const [service, setService] = useState<Data[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const id=params.id;
    useEffect(() => {
    const fetchService = async () => {
        try {
            const response = await axios<{ services: Data[] }>(
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
            <Link
                href="/services"
                className="inline-flex items-center text-primary hover:underline mb-6"
            >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Services
            </Link>

            {<div className="grid gap-8 md:grid-cols-2">
                <div>
                    <h1 className="text-4xl font-bold text-primary mb-4">
                        {service.title}
                    </h1>
                    <p className="text-xl text-muted-foreground mb-6">
                        {service.description}
                    </p>
                    <Image
                        src={service.image}
                        alt={service.title}
                        width={800}
                        height={400}
                        className="rounded-lg object-cover w-full"
                    />
                </div>

                <div className="space-y-6">
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
                                    <li
                                        key={index}
                                        className="flex items-start"
                                    >
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
                                {service.methodologies.map(
                                    (methodology, index) => (
                                        <li key={index}>{methodology}</li>
                                    )
                                )}
                            </ul>
                        </CardContent>
                    </Card>

                    <Button size="lg" className="w-full">
                        Request a Consultation
                    </Button>
                </div>
            </div>}
        </div>
    );
}
