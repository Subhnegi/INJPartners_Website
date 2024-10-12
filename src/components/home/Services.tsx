import React from "react";
import {
    BarChart3,
    LineChart,
    TrendingUp,
} from "lucide-react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const Services = () => {
    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Our Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: BarChart3,
                            title: "Consumer Behavior Analysis",
                            description:
                                "Understand your customers' needs and preferences",
                        },
                        {
                            icon: TrendingUp,
                            title: "Competitive Intelligence",
                            description:
                                "Stay ahead of market trends and competitors",
                        },
                        {
                            icon: LineChart,
                            title: "Trend Forecasting",
                            description:
                                "Predict future market shifts and opportunities",
                        },
                    ].map((service, index) => (
                        <Card
                            key={index}
                            className="flex flex-col items-center text-center"
                        >
                            <CardHeader>
                                <service.icon className="w-12 h-12 text-primary mb-4" />
                                <CardTitle>{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>{service.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
