import React from "react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { BarChart2, Users, TrendingUp } from "lucide-react";

const OurOffer = () => {
    return (
        <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">What We Offer</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader>
                        <Users className="w-10 h-10 text-primary mb-4" />
                        <CardTitle>Consumer Behavior Analysis</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4">
                            Uncover the driving forces behind consumer
                            decisions. Our advanced analytics tools and
                            methodologies provide deep insights into purchasing
                            patterns, preferences, and motivations.
                        </p>
                        <h4 className="font-semibold mb-2">Methodologies:</h4>
                        <ul className="list-disc list-inside mb-4">
                            <li>Surveys and Questionnaires</li>
                            <li>Focus Groups</li>
                            <li>Social Media Listening</li>
                            <li>Purchase Data Analysis</li>
                        </ul>
                        <h4 className="font-semibold mb-2">Benefits:</h4>
                        <ul className="list-disc list-inside">
                            <li>Targeted Marketing Strategies</li>
                            <li>Improved Product Development</li>
                            <li>Enhanced Customer Experience</li>
                        </ul>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <BarChart2 className="w-10 h-10 text-primary mb-4" />
                        <CardTitle>Competitive Intelligence</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4">
                            Stay ahead of the competition with our comprehensive
                            competitive intelligence services. We analyze market
                            dynamics, competitor strategies, and industry trends
                            to give you a competitive edge.
                        </p>
                        <h4 className="font-semibold mb-2">Tools:</h4>
                        <ul className="list-disc list-inside mb-4">
                            <li>Market Share Analysis</li>
                            <li>SWOT Analysis</li>
                            <li>Competitor Benchmarking</li>
                            <li>Patent and Innovation Tracking</li>
                        </ul>
                        <h4 className="font-semibold mb-2">Benefits:</h4>
                        <ul className="list-disc list-inside">
                            <li>Informed Strategic Planning</li>
                            <li>Identification of Market Opportunities</li>
                            <li>Risk Mitigation</li>
                        </ul>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <TrendingUp className="w-10 h-10 text-primary mb-4" />
                        <CardTitle>Trend Forecasting</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4">
                            Anticipate future market trends and consumer
                            behaviors. Our trend forecasting service combines
                            data analytics, expert insights, and AI-powered
                            predictive models to help you stay ahead of the
                            curve.
                        </p>
                        <h4 className="font-semibold mb-2">Methodologies:</h4>
                        <ul className="list-disc list-inside mb-4">
                            <li>Time Series Analysis</li>
                            <li>Scenario Planning</li>
                            <li>Delphi Method</li>
                            <li>AI and Machine Learning Models</li>
                        </ul>
                        <h4 className="font-semibold mb-2">Benefits:</h4>
                        <ul className="list-disc list-inside">
                            <li>Proactive Business Strategy</li>
                            <li>Innovation Opportunities</li>
                            <li>Long-term Growth Planning</li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export default OurOffer;
