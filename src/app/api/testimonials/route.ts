import { NextResponse } from "next/server";

export async function GET() {
	// In a real application, this data would come from a database
	const testimonials = [
		{
			id: "1",
			name: "Sarah Johnson",
			role: "CEO, TechInnovate",
			testimonial:
				"InsightPulse's market analysis was instrumental in our successful product launch. Their insights helped us identify key market opportunities we hadn't considered.",
		},
		{
			id: "2",
			name: "Michael Chen",
			role: "Marketing Director, GreenLife",
			testimonial:
				"The depth of consumer behavior analysis provided by InsightPulse transformed our marketing strategy. We've seen a 40% increase in customer engagement since implementing their recommendations.",
		},
		{
			id: "3",
			name: "Emily Rodriguez",
			role: "Strategy Lead, FutureFinance",
			testimonial:
				"Working with InsightPulse has been a game-changer for our business. Their trend forecasting capabilities have helped us stay ahead of the curve in a rapidly evolving industry.",
		},
	];

	return NextResponse.json(testimonials);
}
