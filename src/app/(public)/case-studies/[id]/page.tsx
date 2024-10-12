"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const chartData = {
    labels: ["Awareness", "Consideration", "Preference", "Purchase Intent"],
    datasets: [
        {
            label: "Before",
            data: [30, 20, 15, 10],
            backgroundColor: "rgba(147, 197, 253, 0.8)",
        },
        {
            label: "After",
            data: [80, 60, 50, 40],
            backgroundColor: "rgba(59, 130, 246, 0.8)",
        },
    ],
};

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
            stacked: false,
        },
        y: {
            stacked: false,
        },
    },
};

export default function CaseStudyPage() {
    return (
        <div className="min-h-screen bg-background">
            <header className="bg-primary text-primary-foreground py-6">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold">
                        MarketInsight Research
                    </h1>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12">
                <h2 className="text-4xl font-bold mb-8">
                    Case Study: Revitalizing Brand X
                </h2>

                <Card className="mb-12">
                    <CardHeader>
                        <CardTitle>Project Overview</CardTitle>
                        <CardDescription>
                            How we helped Brand X increase market share by 35%
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4">
                            Brand X, a leading consumer electronics company, was
                            facing declining market share and brand relevance.
                            Our comprehensive market research and strategy
                            implementation led to a significant turnaround in
                            their market position.
                        </p>
                        <h3 className="text-2xl font-semibold mb-2">
                            Key Achievements:
                        </h3>
                        <ul className="list-disc pl-6 mb-4">
                            <li>Increased brand awareness by 50%</li>
                            <li>Boosted customer engagement by 75%</li>
                            <li>Improved product satisfaction scores by 40%</li>
                            <li>
                                Grew market share from 15% to 50% in 12 months
                            </li>
                        </ul>
                    </CardContent>
                </Card>

                <Card className="mb-12">
                    <CardHeader>
                        <CardTitle>Research Methodology</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ol className="list-decimal pl-6">
                            <li className="mb-2">
                                Comprehensive market analysis
                            </li>
                            <li className="mb-2">
                                In-depth consumer surveys (n=5000)
                            </li>
                            <li className="mb-2">
                                Focus groups in 10 major cities
                            </li>
                            <li className="mb-2">Competitor benchmarking</li>
                            <li>Social media sentiment analysis</li>
                        </ol>
                    </CardContent>
                </Card>

                <Card className="mb-12">
                    <CardHeader>
                        <CardTitle>Results</CardTitle>
                        <CardDescription>
                            Before and After Campaign Metrics
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[400px]">
                            <Bar data={chartData} options={chartOptions} />
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Key Insights</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc pl-6">
                            <li className="mb-2">
                                Identified a gap in the market for eco-friendly
                                electronics
                            </li>
                            <li className="mb-2">
                                Discovered untapped potential in the 25-34 age
                                demographic
                            </li>
                            <li className="mb-2">
                                Uncovered customer pain points in after-sales
                                service
                            </li>
                            <li>
                                Recognized the growing importance of social
                                media influencers in purchase decisions
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </main>

            <section className="bg-secondary py-12">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Ready to transform your market position?
                    </h2>
                    <p className="mb-8">
                        Let's discuss how our research can drive your business
                        growth.
                    </p>
                    <Button size="lg">
                        Contact Us <ArrowRight className="ml-2" />
                    </Button>
                </div>
            </section>
        </div>
    );
}
