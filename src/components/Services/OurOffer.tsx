import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart2, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const offerings = [
    {
        id: 1,
        title: "Consumer Behavior Analysis",
        icon: Users,
        content:
            "Uncover the driving forces behind consumerdecisions. Our advanced analytics tools and methodologies provide deep insights into purchasing patterns, preferences, and motivations.",
        methodologies: [
            "Surveys and Questionnaires",
            "Focus Groups",
            "Social Media Listening",
            "Purchase Data Analysis",
        ],
        benefits: [
            "Targeted Marketing Strategies",
            "Improved Product Development",
            "Enhanced Customer Experience",
        ],
        slug: "consumer-behavior-analysis",
    },
    {
        id: 2,
        title: "Competitive Intelligence",
        icon: BarChart2,
        content:
            "Stay ahead of the competition with our comprehensive competitive intelligence. Our AI-powered tools analyze consumer behavior and market trends to provide insights and recommendations.",
        methodologies: [
            "Market Share Analysis",
            "SWOT Analysis",
            "Competitor Benchmarking",
            "Patent and Innovation Tracking",
        ],
        benefits: [
            "Informed Strategic Planning",
            "Identification of Market Opportunities",
            "Risk Mitigation",
        ],
        slug: "competitive-intelligence",
    },
    {
        id: 3,
        title: "Trend Forecasting",
        icon: TrendingUp,
        content:
            "Anticipate future market trends and consumer behaviors. Our trend forecasting service combines data analytics, expert insights, and AI-powered predictive models to help you stay ahead of the curve.",
        methodologies: [
            "Time Series Analysis",
            "Scenario Planning",
            "Delphi Method",
            "AI and Machine Learning Models",
        ],
        benefits: [
            "Proactive Business Strategy",
            "Innovation Opportunities",
            "Long-term Growth Planning",
        ],
        slug: "trend-forecasting",
    },
];

const OurOffer = () => {
    return (
        <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">What We Offer</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {offerings.map((offer) => (
                    <Card key={offer.id}>
                        <CardHeader>
                            <offer.icon className="w-10 h-10 text-primary mb-4" />
                            <CardTitle>{offer.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4">{offer.content}</p>
                            <h4 className="font-semibold mb-2">
                                Methodologies:
                            </h4>
                            <ul className="list-disc list-inside mb-4">
                                {offer.methodologies.map((method) => (
                                    <li key={method}>{method}</li>
                                ))}
                            </ul>
                            <h4 className="font-semibold mb-2">Benefits:</h4>
                            <ul className="list-disc list-inside mb-4">
                                {offer.benefits.map((benefit) => (
                                    <li key={benefit}>{benefit}</li>
                                ))}
                            </ul>
                            <Button asChild>
                                <Link href={`/services/${offer.slug}`}>
                                    Read More
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default OurOffer;
