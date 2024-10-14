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
import Link from "next/link";

const  RecentProjects = ({projects}: {projects: any[]}) => {
    return (
        <section className="py-16 bg-muted">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Recent Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Link key={index} href={`/projects/${project.id}`}>
                        <Card className="cursor-pointer">
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
                                    {project.commment}<br/>
                                    {project.commentBy}
                                </p>
                            </CardFooter>
                        </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RecentProjects;
