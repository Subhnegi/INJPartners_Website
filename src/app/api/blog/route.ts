import { NextResponse } from "next/server";

export async function GET() {
	// In a real application, this data would come from a database
	const blogPosts = [
		{
			id: 1,
			title: "The Rise of AI in Market Research",
			category: "Market Trends",
			summary:
				"Explore how artificial intelligence is revolutionizing the field of market research and what it means for businesses.",
			image: "/placeholder.jpg?height=200&width=300",
			date: "2023-05-15",
			author: "Sarah Chen",
		},
		{
			id: 2,
			title: "Effective Survey Design: Best Practices",
			category: "Research Methodologies",
			summary:
				"Learn the key principles of creating surveys that yield accurate and actionable insights for your business.",
			image: "/placeholder.jpg?height=200&width=300",
			date: "2023-05-10",
			author: "Michael Rodriguez",
		},
		{
			id: 3,
			title: "Sustainability in Consumer Goods: A Growing Trend",
			category: "Industry Insights",
			summary:
				"Discover how sustainability is shaping consumer preferences and driving innovation in the consumer goods sector.",
			image: "/placeholder.jpg?height=200&width=300",
			date: "2023-05-05",
			author: "Emily Watson",
		},
		{
			id: 4,
			title: "The Power of Predictive Analytics in Business Strategy",
			category: "Market Trends",
			summary:
				"Uncover how predictive analytics is helping businesses stay ahead of the curve and make informed decisions.",
			image: "/placeholder.jpg?height=200&width=300",
			date: "2023-04-30",
			author: "David Lee",
		},
		{
			id: 5,
			title: "Ethnographic Research: Understanding Consumers in Their Natural Environment",
			category: "Research Methodologies",
			summary:
				"Explore the benefits and techniques of ethnographic research in gaining deep consumer insights.",
			image: "/placeholder.jpg?height=200&width=300",
			date: "2023-04-25",
			author: "Sophia Martinez",
		},
		{
			id: 6,
			title: "The Impact of 5G on IoT and Smart Devices",
			category: "Industry Insights",
			summary:
				"Analyze how the rollout of 5G networks is transforming the Internet of Things (IoT) and smart device landscape.",
			image: "/placeholder.jpg?height=200&width=300",
			date: "2023-04-20",
			author: "Alex Johnson",
		},
	];

	return NextResponse.json(blogPosts);
}
