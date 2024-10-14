import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
const CaseStudies = ({caseStudies}) => {
    return (
        <section>
            <h2 className="text-3xl font-semibold mb-6">Case Studies</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {caseStudies.map((study) => (
                    <Card key={study.id}>
                        <CardContent className="p-0">
                            <Image
                                src={study.image}
                                alt={study.title}
                                width={300}
                                height={200}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <CardTitle className="text-lg mb-2">
                                    {study.title}
                                </CardTitle>
                                <CardDescription className="mb-4">
                                    {study.description}
                                </CardDescription>
                                <Button asChild>
                                    <Link href={`/case-studies/${study.id}`}>
                                        Read More
                                    </Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default CaseStudies;
