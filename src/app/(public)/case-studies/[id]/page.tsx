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
    ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useEffect, useState } from "react";
import axios from "axios";
import Pyramid from "@/components/Loaders/Pyramid";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

interface StudyResult {
    category: string;
    before: number;
    after: number;
}

interface CaseStudy {
    _id: string;
    title: string;
    description: string;
    overview: string;
    achievements: string[];
    methodology: string[];
    results: StudyResult[];
    insights: string[];
}

export default function CaseStudyPage({ params }: { params: { id: string } }) {
    const [study, setStudy] = useState<CaseStudy | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const id = params.id;

    useEffect(() => {
        const fetchStudy = async () => {
            try {
                const response = await axios.get<CaseStudy>(
                    `/api/case-studies/${id}`
                );
                setStudy(response.data);
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch case study. Please try again later.");
                setLoading(false);
            }
        };
        fetchStudy();
    }, [id]);

    if (loading) {
        return <div className="container flex justify-center items-center h-screen"><Pyramid/></div>;
    }

    if (error) {
        return (
            <div className="container mx-auto px-4 py-8 text-red-500">
                {error}
            </div>
        );
    }

    if (!study) {
        return (
            <div className="container mx-auto px-4 py-8">
                Case study not found
            </div>
        );
    }

    const chartData = {
        labels: study.results.map((result) => result.category),
        datasets: [
            {
                label: "Before",
                data: study.results.map((result) => result.before),
                backgroundColor: "rgba(147, 197, 253, 0.8)",
            },
            {
                label: "After",
                data: study.results.map((result) => result.after),
                backgroundColor: "rgba(59, 130, 246, 0.8)",
            },
        ],
    };

    const chartOptions: ChartOptions<"bar"> = {
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

    return (
        <div className="min-h-screen bg-background">
            <header className="bg-primary text-primary-foreground py-6">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold">
                        MarketInsight <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Research</span>
                    </h1>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12">
                <h2 className="text-4xl font-bold mb-8">
                    Case Study: {study.title}
                </h2>

                <Card className="mb-12 border-[#4251f88b]">
                    <CardHeader>
                        <CardTitle>Project Overview</CardTitle>
                        <CardDescription>{study.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4">{study.overview}</p>
                        <h3 className="text-2xl font-semibold mb-2">
                            Key Achievements:
                        </h3>
                        <ul className="list-disc pl-6 mb-4">
                            {study.achievements.map((achievement, index) => (
                                <li key={index}>{achievement}</li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>

                <Card className="mb-12 border-[#4251f88b]">
                    <CardHeader>
                        <CardTitle>Research Methodology</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ol className="list-decimal pl-6">
                            {study.methodology.map((method, index) => (
                                <li key={index} className="mb-2">
                                    {method}
                                </li>
                            ))}
                        </ol>
                    </CardContent>
                </Card>

                <Card className="mb-12 border-[#4251f88b]">
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

                <Card className="border-[#4251f88b]">
                    <CardHeader>
                        <CardTitle>Key Insights</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc pl-6">
                            {study.insights.map((insight, index) => (
                                <li key={index}>{insight}</li>
                            ))}
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
