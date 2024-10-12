import React from "react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
const KeyBenefits = () => {
    return (
        <section className="py-16 bg-muted">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Why Choose InsightPulse?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Data-Driven Insights",
                            description:
                                "We leverage advanced analytics to provide actionable insights that drive business growth.",
                        },
                        {
                            title: "Industry Expertise",
                            description:
                                "Our team of seasoned researchers brings deep knowledge across various sectors.",
                        },
                        {
                            title: "Customized Solutions",
                            description:
                                "We tailor our research methodologies to meet your specific business needs and goals.",
                        },
                    ].map((benefit, index) => (
                        <Card
                            key={index}
                            className="flex flex-col items-center text-center"
                        >
                            <CardHeader>
                                <CardTitle>{benefit.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>{benefit.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KeyBenefits;
