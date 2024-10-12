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
const CaseStudies = () => {
    return (
        <section>
            <h2 className="text-3xl font-semibold mb-6">Case Studies</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                    {
                        title: "Retail Giant's Market Expansion",
                        description:
                            "How we helped a major retailer successfully enter new markets",
                        image: "/placeholder.jpg?height=200&width=300",
                        slug: "retail-market-expansion",
                    },
                    {
                        title: "Tech Startup's Product Launch",
                        description:
                            "Guiding a tech startup to a successful product launch using consumer insights",
                        image: "/placeholder.jpg?height=200&width=300",
                        slug: "tech-startup-product-launch",
                    },
                    {
                        title: "FMCG Brand Repositioning",
                        description:
                            "Revitalizing a struggling FMCG brand through in-depth market analysis",
                        image: "/placeholder.jpg?height=200&width=300",
                        slug: "fmcg-brand-repositioning",
                    },
                    {
                        title: "E-commerce Platform Optimization",
                        description:
                            "Boosting conversion rates through data-driven UX improvements",
                        image: "/placeholder.jpg?height=200&width=300",
                        slug: "ecommerce-platform-optimization",
                    },
                    {
                        title: "Global Expansion Strategy",
                        description:
                            "Developing a successful international expansion plan for a mid-size company",
                        image: "/placeholder.jpg?height=200&width=300",
                        slug: "global-expansion-strategy",
                    },
                    {
                        title: "Sustainability Initiative Impact",
                        description:
                            "Measuring and optimizing the impact of a company's sustainability programs",
                        image: "/placeholder.jpg?height=200&width=300",
                        slug: "sustainability-initiative-impact",
                    },
                ].map((study, index) => (
                    <Card key={index}>
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
                                    <Link href={`/case-studies/${study.slug}`}>
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
