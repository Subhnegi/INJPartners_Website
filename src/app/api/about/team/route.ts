import { db } from "@/dbConfig/dbConfig";
import { TeamMember } from "@/models/teammember.model";
import { NextResponse } from "next/server";

export async function GET() {
	await db();
	try {
		const team = await TeamMember.find({});
		return NextResponse.json(team);
	} catch (error) {
		return NextResponse.json({ error: "Failed to fetch team members" }, { status: 500 });
	}
}

// try {
//     // Ensure you have a MongoDB connection established
//     await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

//     // Fetch team members from the database
//     const team = await TeamMember.find({});

//     return NextResponse.json(team);
//   } catch (error) {
//     console.error('Failed to fetch team members:', error);
//     return NextResponse.json({ error: 'Failed to fetch team members' }, { status: 500 });
//   }
// }

// export async function POST(request) {
//   try {
//     const data = await request.json();
//     const newMember = new TeamMember(data);
//     await newMember.save();
//     return NextResponse.json(newMember, { status: 201 });
//   } catch (error) {
//     console.error('Failed to create team member:', error);
//     return NextResponse.json({ error: 'Failed to create team member' }, { status: 500 });
//   }