
import { NextResponse, NextRequest } from "next/server";

type ServiceDetail = {
	id: string;
	title: string;
	description: string;
	image: string;
	benefits: string[];
	methodologies: string[];
};

export async function GET(request, {params}: {params: {id: string}}) {
    const id = params.id;
	const services=[
        {
            id: "1",
            title: "Consumer Behavior Analysis",
            image: "/placeholder.jpg",
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
            image: "/placeholder.jpg",
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
            image: "/placeholder.jpg",
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
	const service = services.find((service) => service.id === id);
	if (!service) {
		return NextResponse.json({error: "Not Found"}, {status: 404});
	}
	return NextResponse.json(service);
}
