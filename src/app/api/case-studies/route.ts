import { NextResponse } from "next/server";

export async function GET() {
	// In a real application, this data would come from a database
	const featuredCaseStudies = [
		{
			id: 1,
			title: "Retail Giant's Market Expansion",
			description:
				"How we helped a major retailer successfully enter new markets",
			image: "/placeholder.jpg?height=200&width=300",
		},
		{
			id: 2,
			title: "Tech Startup's Product Launch",
			description:
				"Guiding a tech startup to a successful product launch using consumer insights",
			image: "/placeholder.jpg?height=200&width=300",
		},
		{
			id: 3,
			title: "FMCG Brand Repositioning",
			description:
				"Revitalizing a struggling FMCG brand through in-depth market analysis",
			image: "/placeholder.jpg?height=200&width=300",
		},
		{
			id: 4,
			title: "E-commerce Platform Optimization",
			description:
				"Boosting conversion rates through data-driven UX improvements",
			image: "/placeholder.jpg?height=200&width=300",
		},
		{
			id: 5,

			title: "Global Expansion Strategy",
			description:
				"Developing a successful international expansion plan for a mid-size company",
			image: "/placeholder.jpg?height=200&width=300",
		},
		{
			id: 6,
			title: "Sustainability Initiative Impact",
			description:
				"Measuring and optimizing the impact of a company's sustainability programs",
			image: "/placeholder.jpg?height=200&width=300",
		},
	];

	return NextResponse.json(featuredCaseStudies);
}
