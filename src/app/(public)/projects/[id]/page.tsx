import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
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

// This would typically come from a database or API
const getProjectDetails = async (id: string) => {
    // Simulating an API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const projects = {
        "1": {
            id: "1",
            title: "E-commerce Growth Strategy for TechGiant Inc.",
            client: "TechGiant Inc.",
            industry: "Technology",
            duration: "6 months",
            date: "2023-01-15",
            overview:
                "Developed and implemented a comprehensive e-commerce growth strategy for TechGiant Inc., resulting in a 150% increase in online sales within 6 months.",
            challenges: [
                "Highly competitive e-commerce landscape",
                "Limited brand recognition in certain market segments",
                "Inefficient conversion funnel",
            ],
            solutions: [
                "Conducted in-depth market analysis and competitor benchmarking",
                "Developed targeted marketing campaigns for underperforming segments",
                "Optimized the user journey and checkout process",
            ],
            results: [
                "150% increase in online sales",
                "40% improvement in conversion rate",
                "60% increase in average order value",
            ],
            testimonial: {
                quote: "InsightPulse's strategy transformed our e-commerce performance. Their data-driven approach and actionable insights were invaluable.",
                author: "Jane Doe",
                position: "CEO, TechGiant Inc.",
            },
            image: "/placeholder.jpg?height=400&width=600",
        },
    };

    if (!(id in projects)) {
        return null;
    }

    return projects[id as keyof typeof projects];
};

export async function generateMetadata({
    params,
}: {
    params: { id: string };
}): Promise<Metadata> {
    const project = await getProjectDetails(params.id);

    if (!project) {
        return {
            title: "Project Not Found",
        };
    }

    return {
        title: `${project.title} | InsightPulse Case Study`,
        description: project.overview,
    };
}

export default async function ProjectPage({
    params,
}: {
    params: { id: string };
}) {
    const project = await getProjectDetails(params.id);

    if (!project) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-6">
                <Badge variant="secondary" className="mb-2">
                    Case Study
                </Badge>
                <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
                <div className="flex items-center text-muted-foreground">
                    <span>{project.client}</span>
                    <ChevronRight className="w-4 h-4 mx-2" />
                    <span>{project.industry}</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card>
                    <CardHeader className="flex flex-row items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <CardTitle>Project Duration</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>{project.duration}</p>
                        <p className="text-sm text-muted-foreground">
                            Started: {project.date}
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center space-x-2">
                        <BarChart className="w-4 h-4" />
                        <CardTitle>Key Metric</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold">150%</p>
                        <p className="text-sm text-muted-foreground">
                            Increase in online sales
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <CardTitle>Team Size</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>5 Consultants</p>
                        <p className="text-sm text-muted-foreground">
                            Cross-functional team
                        </p>
                    </CardContent>
                </Card>
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
                <div>
                    <Card>
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
                    <Card className="mt-6">
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

            <Card className="mb-8">
                <CardHeader>
                    <CardTitle className="flex items-center">
                        <Target className="w-5 h-5 mr-2" />
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

            <Card className="bg-primary text-primary-foreground">
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
