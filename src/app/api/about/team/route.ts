import { NextResponse } from "next/server";
type Team = {
	id: string;
	name: string;
	role: string;
	bio: string;
	imageUrl: string;
};

type TeamData = {
	team: Team[];
};

export async function GET() {
	const team= [
		{
			id: "1",
			name: "Dr. Emily Watson",
			role: "Lead Research Analyst",
			bio: "Specializing in consumer behavior and market trends, Emily brings academic rigor to our research methodologies.",
			imageUrl: "/placeholder.jpg",
		},
		{
			id: "2",
			name: "Alex Johnson",
			role: "Data Scientist",
			bio: "Alex's expertise in machine learning and predictive modeling helps uncover hidden patterns in complex datasets.",
			imageUrl: "/placeholder.jpg",
		},
		{
			id: "3",
			name: "Sophia Martinez",
			role: "Industry Specialist",
			bio: "With a background in multiple industries, Sophia provides valuable context and insights to our research projects.",
			imageUrl: "/placeholder.jpg",
		},
	];
	return NextResponse.json(team);
}

