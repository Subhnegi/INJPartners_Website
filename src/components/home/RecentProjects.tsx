import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
const  RecentProjects = () => {
    return (
        <section className="py-16 bg-muted">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Recent Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            title: "E-commerce Growth Strategy",
                            client: "TechGiant Inc.",
                            image: "/placeholder.jpg",
                        },
                        {
                            title: "Market Expansion Analysis",
                            client: "GreenEnergy Co.",
                            image: "/placeholder.jpg",
                        },
                        {
                            title: "Market Expansion Analysis",
                            client: "GreenEnergy Co.",
                            image: "/placeholder.jpg",
                        },
                    ].map((project, index) => (
                        <Card key={index}>
                            <CardHeader>
                                <CardTitle>{project.title}</CardTitle>
                                <CardDescription>
                                    {project.client}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={500}
                                    height={200}
                                    className="rounded-md"
                                />
                            </CardContent>
                            <CardFooter>
                                <p className="italic">
                                    "InsightPulse's analysis was crucial for our
                                    success." - Client CEO
                                </p>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RecentProjects;
