import { NextResponse } from "next/server";

export interface Project {
	id: string;
	title: string;
	client: string;
	industry: string;
	duration: string;
	date: string;
	overview: string;
	challenges: string[];
	solutions: string[];
	results: string[];
	testimonial: {
		quote: string;
		author: string;
		position: string;
	};
	image: string;
	slug: string;
}

export async function GET(request, {params}: {params: {id: string}}) {
    const id = params.id;
	// In a real application, this data would come from a database
	const projects: Project[] = [
		{
			id: "1",
			title: "E-commerce Growth Strategy",
			client: "TechGiant Inc.",
			industry: "Technology",
			duration: "6 months",
			date: "2023-01-15",
			overview:
				"Developed and implemented a comprehensive e-commerce growth strategy for TechGiant Inc., resulting in a 150% increase in online sales within 6 months.",
			challenges: [
				"Highly competitive e-commerce landscape",
				"Limited brand recognition in certain market segments",
				"Inefficient conversion funnel",
			],
			solutions: [
				"Conducted in-depth market analysis and competitor benchmarking",
				"Developed targeted marketing campaigns for underperforming segments",
				"Optimized the user journey and checkout process",
			],
			results: [
				"150% increase in online sales",
				"40% improvement in conversion rate",
				"60% increase in average order value",
			],
			testimonial: {
				quote:
					"InsightPulse's strategy transformed our e-commerce performance. Their data-driven approach and actionable insights were invaluable.",
				author: "Jane Doe",
				position: "CEO, TechGiant Inc.",
			},
			image: "/placeholder.jpg",
			slug: "e-commerce-growth-strategy",
		},
		{
			id: "2",
			title: "Market Expansion Analysis",
			client: "GreenEnergy Co.",
			industry: "Renewable Energy",
			duration: "4 months",
			date: "2023-03-01",
			overview:
				"Conducted a comprehensive market expansion analysis for GreenEnergy Co., identifying key opportunities in three new geographical markets.",
			challenges: [
				"Complex regulatory environments in target markets",
				"Strong local competitors with established presence",
				"Varying consumer attitudes towards renewable energy",
			],
			solutions: [
				"Performed detailed regulatory analysis and risk assessment",
				"Developed market entry strategies tailored to each target market",
				"Conducted extensive consumer research to inform product positioning",
			],
			results: [
				"Successful entry into 2 out of 3 identified markets",
				"30% market share achieved in the first year of operations",
				"50% increase in overall company revenue",
			],
			testimonial: {
				quote:
					"InsightPulse's market expansion analysis was crucial for our international growth. Their insights helped us navigate complex markets with confidence.",
				author: "Michael Green",
				position: "COO, GreenEnergy Co.",
			},
			image: "/placeholder.jpg",
			slug: "market-expansion-analysis",
		},
		{
			id: "3",
			title: "Consumer Behavior Study",
			client: "FashionForward",
			industry: "Retail",
			duration: "3 months",
			date: "2023-05-10",
			overview:
				"Conducted an in-depth consumer behavior study for FashionForward, leading to the development of a new product line and improved customer retention strategies.",
			challenges: [
				"Rapidly changing fashion trends",
				"High customer churn rate",
				"Increasing competition from online-only retailers",
			],
			solutions: [
				"Implemented advanced data analytics to identify emerging fashion trends",
				"Developed a personalized customer engagement program",
				"Created an omnichannel retail strategy to compete with online retailers",
			],
			results: [
				"40% increase in customer retention rate",
				"25% growth in average customer lifetime value",
				"Successful launch of a new product line with 200% ROI in the first quarter",
			],
			testimonial: {
				quote:
					"The consumer behavior insights provided by InsightPulse were eye-opening. It completely changed how we approach our product development and customer engagement.",
				author: "Sarah Style",
				position: "CMO, FashionForward",
			},
			image: "/placeholder.jpg",
			slug: "consumer-behavior-study",
		},
	];
    const project = projects.find((project) => project.id === id);
	if (!project) {
		return NextResponse.json({error: "Not Found"}, {status: 404});
	}
	return NextResponse.json(project);
}
