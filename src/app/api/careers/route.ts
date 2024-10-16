import { db } from "@/dbConfig/dbConfig";
import { JobOpening } from "@/models/jobopening.model";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function GET() {
    await db();
	try {
		const jobOpenings = await JobOpening.find({});
		return NextResponse.json(jobOpenings);
	} catch (error) {
		return NextResponse.json(
			{ error: "Failed to fetch job openings" },
			{ status: 500 },
		);
	}
}

export async function POST(request: NextRequest) {
    await db();
    try {
        const data = await request.json();
        const newJobOpening = new JobOpening(data);
        await newJobOpening.save();
        return NextResponse.json(newJobOpening, { status: 201 });
    } catch (error) {
        console.error("Failed to create job opening:", error);
        return NextResponse.json(
            { error: "Failed to create job opening" },
            { status: 500 },
        );
    }
}

export async function PUT(request: NextRequest) {
    await db();
    try {
        const { _id, ...updateData } = await request.json();
        const updatedJobOpening = await JobOpening.findByIdAndUpdate(_id, updateData, { new: true });
        if (!updatedJobOpening) {
            return NextResponse.json(
                { error: "Job opening not found" },
                { status: 404 },
            );
        }
        return NextResponse.json(updatedJobOpening);
    } catch (error) {
        console.error("Failed to update job opening:", error);
        return NextResponse.json(
            { error: "Failed to update job opening" },
            { status: 500 },
        );
    }
}

export async function DELETE(request: NextRequest) {
    await db();
    try {
        const { id } = await request.json();
        const deletedJobOpening = await JobOpening.findByIdAndDelete(id);
        if (!deletedJobOpening) {
            return NextResponse.json(
                { error: "Job opening not found" },
                { status: 404 },
            );
        }
        return NextResponse.json({ message: "Job opening deleted successfully" });
    } catch (error) {
        console.error("Failed to delete job opening:", error);
        return NextResponse.json(
            { error: "Failed to delete job opening" },
            { status: 500 },
        );
    }
}
