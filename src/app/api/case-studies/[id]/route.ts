import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
type CaseStudy = {
	id: string;
	title: string;
	description: string;
	image: string;
	client: string;
	overview: string;
	achievements: string[];
	methodology: string[];
	results: {
		category: string;
		before: number;
		after: number;
	}[];
	insights: string[];
};

export async function GET(request: NextRequest, {params}: {params: {id: string}}) {
    const id = params.id;
	// In a real application, this data would come from a database
	const caseStudies = [
		{
			id: "1",
			title: "Retail Giant's Market Expansion",
			description:
				"How we helped a major retailer successfully enter new markets",
			image: "/placeholder.jpg?height=200&width=300",
			client: "MegaMart Retail",
			overview:
				"MegaMart Retail, a leading national chain, sought to expand into new regional markets. Our comprehensive market research and strategy implementation led to a successful expansion and increased market share.",
			achievements: [
				"Successfully entered 3 new regional markets",
				"Achieved 25% market share in new regions within 12 months",
				"Increased overall revenue by 30%",
				"Improved customer satisfaction scores by 15%",
			],
			methodology: [
				"Extensive market analysis of target regions",
				"Competitor landscape mapping",
				"Consumer behavior studies (n=10,000)",
				"Focus groups in 15 cities",
				"Supply chain optimization analysis",
			],
			results: [
				{ category: "Market Share", before: 0, after: 25 },
				{ category: "Revenue (millions)", before: 100, after: 130 },
				{ category: "Customer Satisfaction", before: 75, after: 90 },
				{ category: "Store Count", before: 50, after: 65 },
			],
			insights: [
				"Identified key regional preferences influencing purchasing decisions",
				"Uncovered gaps in competitor offerings in new markets",
				"Recognized the importance of localized marketing strategies",
				"Discovered potential for private label products in new regions",
			],
		},
		{
			id: "2",
			title: "Tech Startup's Product Launch",
			description:
				"Guiding a tech startup to a successful product launch using consumer insights",
			image: "/placeholder.jpg?height=200&width=300",
			client: "InnoTech Solutions",
			overview:
				"InnoTech Solutions, a promising tech startup, needed guidance for their innovative product launch. Our in-depth consumer insights and market analysis led to a highly successful product introduction.",
			achievements: [
				"Exceeded first-year sales projections by 40%",
				"Achieved 85% positive user reviews within 3 months of launch",
				"Secured partnerships with 3 major retailers",
				"Raised $10 million in Series A funding post-launch",
			],
			methodology: [
				"Comprehensive target audience analysis",
				"Product testing with focus groups",
				"Competitive product benchmarking",
				"Social media sentiment analysis",
				"Beta testing program with 1,000 users",
			],
			results: [
				{ category: "Sales (units)", before: 0, after: 100000 },
				{ category: "User Rating", before: 0, after: 4.5 },
				{ category: "Market Awareness", before: 5, after: 60 },
				{ category: "Retailer Partnerships", before: 0, after: 3 },
			],
			insights: [
				"Identified key features that resonated most with target users",
				"Uncovered pricing sweet spot for maximum market penetration",
				"Recognized the importance of user education for product adoption",
				"Discovered untapped market segments for future expansion",
			],
		},
		{
			id: "3",
			title: "FMCG Brand Repositioning",
			description:
				"Revitalizing a struggling FMCG brand through in-depth market analysis",
			image: "/placeholder.jpg?height=200&width=300",
			client: "FreshLife Products",
			overview:
				"FreshLife Products, a once-popular FMCG brand, was facing declining sales and market relevance. Our comprehensive market analysis and repositioning strategy breathed new life into the brand.",
			achievements: [
				"Increased market share from 8% to 15% within 18 months",
				"Boosted sales by 45% year-over-year",
				"Improved brand perception scores by 60%",
				"Successfully launched 3 new product lines",
			],
			methodology: [
				"Extensive consumer surveys (n=20,000)",
				"Brand perception analysis",
				"Product line profitability assessment",
				"Packaging and design testing",
				"Retail placement optimization study",
			],
			results: [
				{ category: "Market Share (%)", before: 8, after: 15 },
				{ category: "Sales Growth (%)", before: -5, after: 45 },
				{ category: "Brand Perception", before: 40, after: 100 },
				{ category: "Product Lines", before: 2, after: 5 },
			],
			insights: [
				"Identified shift in consumer preferences towards eco-friendly products",
				"Uncovered opportunities in the premium segment of the market",
				"Recognized the need for updated packaging to appeal to younger demographics",
				"Discovered potential for subscription-based product offerings",
			],
		},
		{
			id: "4",
			title: "E-commerce Platform Optimization",
			description:
				"Boosting conversion rates through data-driven UX improvements",
			image: "/placeholder.jpg?height=200&width=300",
			client: "ShopEase Online",
			overview:
				"ShopEase Online, a growing e-commerce platform, sought to improve their conversion rates and user experience. Our data-driven analysis and UX recommendations led to significant improvements in key metrics.",
			achievements: [
				"Increased conversion rate by 35%",
				"Reduced cart abandonment rate by 25%",
				"Improved average order value by 20%",
				"Boosted customer retention rate by 30%",
			],
			methodology: [
				"Comprehensive user journey mapping",
				"A/B testing of key pages and features",
				"Heat map and click tracking analysis",
				"User surveys and interviews (n=5,000)",
				"Competitor UX benchmarking",
			],
			results: [
				{ category: "Conversion Rate (%)", before: 2.5, after: 3.4 },
				{ category: "Cart Abandonment (%)", before: 70, after: 52.5 },
				{ category: "Avg Order Value ($)", before: 50, after: 60 },
				{ category: "Customer Retention (%)", before: 40, after: 52 },
			],
			insights: [
				"Identified key pain points in the checkout process",
				"Uncovered the importance of personalized product recommendations",
				"Recognized the impact of improved search functionality on user satisfaction",
				"Discovered the potential of implementing a loyalty program",
			],
		},
		{
			id: "5",
			title: "Global Expansion Strategy",
			description:
				"Developing a successful international expansion plan for a mid-size company",
			image: "/placeholder.jpg?height=200&width=300",
			client: "GrowthTech Solutions",
			overview:
				"GrowthTech Solutions, a successful mid-size tech company, aimed to expand internationally. Our comprehensive global market analysis and expansion strategy paved the way for their successful entry into new markets.",
			achievements: [
				"Successfully entered 5 new countries within 2 years",
				"Increased global revenue by 150%",
				"Established partnerships with 10 international distributors",
				"Achieved profitability in new markets within 18 months",
			],
			methodology: [
				"In-depth analysis of potential target markets",
				"Regulatory and compliance assessment",
				"Cultural adaptation studies",
				"International competitor analysis",
				"Global supply chain optimization",
			],
			results: [
				{ category: "Global Revenue (millions $)", before: 50, after: 125 },
				{ category: "International Markets", before: 1, after: 6 },
				{ category: "Global Workforce", before: 100, after: 250 },
				{ category: "International Partnerships", before: 2, after: 12 },
			],
			insights: [
				"Identified key cultural factors influencing product adoption in different markets",
				"Uncovered opportunities for product localization",
				"Recognized the importance of local partnerships for market penetration",
				"Discovered potential for remote work to facilitate global expansion",
			],
		},
		{
			id: "6",
			title: "Sustainability Initiative Impact",
			description:
				"Measuring and optimizing the impact of a company's sustainability programs",
			image: "/placeholder.jpg?height=200&width=300",
			client: "EcoForward Manufacturing",
			overview:
				"EcoForward Manufacturing, a leader in sustainable manufacturing, sought to measure and optimize the impact of their sustainability initiatives. Our comprehensive analysis helped quantify their efforts and identify areas for improvement.",
			achievements: [
				"Reduced carbon footprint by 40% over 3 years",
				"Increased use of renewable energy by 60%",
				"Improved sustainability rating from B to A- in CDP assessment",
				"Boosted employee engagement in sustainability efforts by 80%",
			],
			methodology: [
				"Comprehensive sustainability audit",
				"Supply chain environmental impact assessment",
				"Employee and stakeholder surveys (n=10,000)",
				"Industry best practices benchmarking",
				"Long-term sustainability ROI analysis",
			],
			results: [
				{
					category: "Carbon Footprint (tons CO2)",
					before: 100000,
					after: 60000,
				},
				{ category: "Renewable Energy Use (%)", before: 20, after: 80 },
				{ category: "CDP Rating", before: 3, after: 4 },
				{ category: "Employee Engagement (%)", before: 40, after: 72 },
			],
			insights: [
				"Identified key areas for immediate impact in reducing carbon footprint",
				"Uncovered potential for circular economy initiatives in manufacturing process",
				"Recognized the importance of employee education in driving sustainability efforts",
				"Discovered the marketing potential of sustainability initiatives for brand image",
			],
		},
	];
    const study = caseStudies.find((service) => service.id === id);
	if (!study) {
		return NextResponse.json({error: "Not Found"}, {status: 404});
	}
	return NextResponse.json(study);
}
