import type React from "react";
import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface JobOpening {
    title: string;
    department: string;
    type: string;
    description: string;
    responsibilities: string[];
    qualifications: string[];
}

interface OpeningsProps {
    jobOpenings: JobOpening[];
}

const Openings: React.FC<OpeningsProps> = ({ jobOpenings }) => {
    return (
        <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">Current Openings</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {jobOpenings.map((job, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <div>
                                    <CardTitle>{job.title}</CardTitle>
                                    <CardDescription>
                                        {job.department}
                                    </CardDescription>
                                </div>
                                <Badge>{job.type}</Badge>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4">{job.description}</p>
                            <div className="mb-4">
                                <h4 className="font-semibold mb-2">
                                    Responsibilities:
                                </h4>
                                <ul className="list-disc list-inside">
                                    {job.responsibilities.map((resp, i) => (
                                        <li key={i}>{resp}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">
                                    Qualifications:
                                </h4>
                                <ul className="list-disc list-inside">
                                    {job.qualifications.map((qual, i) => (
                                        <li key={i}>{qual}</li>
                                    ))}
                                </ul>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button asChild>
                                <Link href="/careers/apply">Apply Now</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default Openings;