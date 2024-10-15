import { NextResponse } from "next/server";

export async function GET() {
	// In a real application, this data would come from a database
	const projects = [
        {
            id:"1",
            title: "E-commerce Growth Strategy",
            client: "TechGiant Inc.",
            image: "/placeholder.jpg",
            commment: "InsightPulse's analysis was crucial for our success.",
            commentBy: "- Client CEO",
        },
        {   
            id:"2",
            title: "Market Expansion Analysis",
            client: "GreenEnergy Co.",
            image: "/placeholder.jpg",
            commment: "InsightPulse's analysis was crucial for our success.",
            commentBy: "- Client CEO",
        },
        {
            id:"3",
            title: "Market Expansion Analysis",
            client: "GreenEnergy Co.",
            image: "/placeholder.jpg",
            commment: "InsightPulse's analysis was crucial for our success.",
            commentBy: "- Client CEO",
        },
    ];

	return NextResponse.json(projects);
}