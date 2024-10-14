import { NextResponse } from "next/server";

type Service = {
	id: string;
	title: string;
	content: string;
	icon: string;
    methodologies: string[];
    benefits: string[];
};

type ServicesData = {
	services: Service[];
};

export async function GET() {
	const services=[
        {
            id: "1",
            title: "Consumer Behavior Analysis",
            icon: "Users",
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
        },
        {
            id: "2",
            title: "Competitive Intelligence",
            icon: "BarChart2",
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
        },
        {
            id: "3",
            title: "Trend Forecasting",
            icon: "TrendingUp",
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
        },
    ];
	return NextResponse.json(services);
}
