"use client"
import Image from "next/image";
import { ChevronRight, Calendar, BarChart, Users, Target } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import axios from "axios";
import Pyramid from "@/components/Loaders/Pyramid";
import { Tilt } from "react-tilt";

interface Project {
	_id: string;
	title: string;
	client: string;
	industry: string;
	duration: string;
	date: string;
	overview: string;
	challenges: string[];
	solutions: string[];
	results: string[];
	testimonial: {
		quote: string;
		author: string;
		position: string;
	};
	image: string;
	slug: string;
}

export default function ProjectPage({
    params,
}: {
    params: { id: string };
}) {
    const [project, setProject] = useState<Project>({} as Project);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const id = params.id;

    useEffect(() => {
        const fetchService = async () => {
            try {
                const response = await axios.get<Project>(
                    `/api/projects/${id}`
                );
                setProject(response.data);
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch services. Please try again later.");
                setLoading(false);
            }
        };

        fetchService();
    }, [id]);

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

    if (!project) {
        return (
            <div className="container mx-auto px-4 py-8">Service not found</div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-6">
                <Badge variant="secondary" className="mb-2">
                    Project
                </Badge>
                <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
                <div className="flex items-center text-muted-foreground">
                    <span>{project.client}</span>
                    <ChevronRight className="w-4 h-4 mx-2" />
                    <span>{project.industry}</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
<Tilt>
                <Card className="border-[#4251f88b]">
                    <CardHeader className="flex flex-row items-center space-x-2">
                        <Calendar className="w-4 h-4 text-[#4251f88b]" />
                        <CardTitle>Project Duration</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>{project.duration}</p>
                        <p className="text-sm text-muted-foreground">
                            Started: {project.date}
                        </p>
                    </CardContent>
                </Card>
                </Tilt>
                <Tilt>
                <Card className="border-[#4251f88b]">
                    <CardHeader className="flex flex-row items-center space-x-2">
                        <BarChart className="w-4 h-4 text-[#4251f88b]" />
                        <CardTitle>Key Metric</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold">150%</p>
                        <p className="text-sm text-muted-foreground">
                            Increase in online sales
                        </p>
                    </CardContent>
                </Card>
                </Tilt>
                <Tilt>
                <Card className="border-[#4251f88b]">
                    <CardHeader className="flex flex-row items-center space-x-2">
                        <Users className="w-4 h-4 text-[#4251f88b]" />
                        <CardTitle>Team Size</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>5 Consultants</p>
                        <p className="text-sm text-muted-foreground">
                            Cross-functional team
                        </p>
                    </CardContent>
                </Card>
                </Tilt>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                    <h2 className="text-2xl font-semibold mb-4">
                        Project Overview
                    </h2>
                    <p className="mb-4">{project.overview}</p>
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="rounded-lg"
                    />
                </div>
                <div className="py-32">
                    <Card className=" border-[#4251f88b]">
                        <CardHeader>
                            <CardTitle>Challenges</CardTitle>
                            <CardDescription>
                                Key obstacles we faced
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc pl-5 space-y-2">
                                {project.challenges.map((challenge, index) => (
                                    <li key={index}>{challenge}</li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                    <Card className="mt-6 border-[#4251f88b]">
                        <CardHeader>
                            <CardTitle>Our Approach</CardTitle>
                            <CardDescription>
                                Solutions we implemented
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc pl-5 space-y-2">
                                {project.solutions.map((solution, index) => (
                                    <li key={index}>{solution}</li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <Card className="mb-8 border-[#4251f88b]">
                <CardHeader>
                    <CardTitle className="flex items-center">
                        <Target className="w-5 h-5 mr-2 text-[#4251f88b]" />
                        Results Achieved
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                        {project.results.map((result, index) => (
                            <li key={index}>{result}</li>
                        ))}
                    </ul>
                </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground border-[#4251f88b]">
                <CardHeader>
                    <CardTitle>Client Testimonial</CardTitle>
                </CardHeader>
                <CardContent>
                    <blockquote className="italic mb-2">
                        "{project.testimonial.quote}"
                    </blockquote>
                    <p className="font-semibold">
                        {project.testimonial.author}
                    </p>
                    <p className="text-sm">{project.testimonial.position}</p>
                </CardContent>
            </Card>

            <div className="mt-8 text-center">
                <Button size="lg">Request a Consultation</Button>
            </div>
        </div>
    );
}
