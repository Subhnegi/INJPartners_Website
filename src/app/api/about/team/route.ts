import { db } from "@/dbConfig/dbConfig";
import { TeamMember } from "@/models/teammember.model";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET() {
	await db();
	try {
		const team = await TeamMember.find({});
		return NextResponse.json(team);
	} catch (error) {
		return NextResponse.json(
			{ error: "Failed to fetch team members" },
			{ status: 500 },
		);
	}
}

export async function POST(request: NextRequest) {
    await db();
    try {
        const data = await request.json();
        const newMember = new TeamMember(data);
        await newMember.save();
        return NextResponse.json(newMember, { status: 201 });
    } catch (error) {
        console.error("Failed to create team member:", error);
        return NextResponse.json(
            { error: "Failed to create team member" },
            { status: 500 },
        );
    }
}

export async function PUT(request: NextRequest) {
    await db();
    try {
        const { _id, ...updateData } = await request.json();
        const updatedMember = await TeamMember.findByIdAndUpdate(_id, updateData, { new: true });
        if (!updatedMember) {
            return NextResponse.json(
                { error: "Team member not found" },
                { status: 404 },
            );
        }
        return NextResponse.json(updatedMember);
    } catch (error) {
        console.error("Failed to update team member:", error);
        return NextResponse.json(
            { error: "Failed to update team member" },
            { status: 500 },
        );
    }
}

export async function DELETE(request: NextRequest) {
    await db();
    try {
        const { id } = await request.json();
        const deletedMember = await TeamMember.findByIdAndDelete(id);
        if (!deletedMember) {
            return NextResponse.json(
                { error: "Team member not found" },
                { status: 404 },
            );
        }
        return NextResponse.json({ message: "Team member deleted successfully" });
    } catch (error) {
        console.error("Failed to delete team member:", error);
        return NextResponse.json(
            { error: "Failed to delete team member" },
            { status: 500 },
        );
    }
}
