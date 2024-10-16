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
