import { db } from "@/dbConfig/dbConfig";
import { CaseStudy } from "@/models/casestudy.model";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
export async function GET() {
	await db();
	try {
		const caseStudies = await CaseStudy.find();
		return NextResponse.json(caseStudies);
	} catch (error) {
		return NextResponse.json({ error: "Failed to fetch case studies" }, { status: 500 });
	}
}

export async function POST(request: NextRequest) {
    await db();
    try {
        const data = await request.json();
        const newCaseStudy = new CaseStudy(data);
        await newCaseStudy.save();
        return NextResponse.json(newCaseStudy, { status: 201 });
    } catch (error) {
        console.error("Failed to create case study:", error);
        return NextResponse.json(
            { error: "Failed to create case study" },
            { status: 500 },
        );
    }
}

export async function PUT(request: NextRequest) {
    await db();
    try {
        const { id, ...updateData } = await request.json();
        const updatedCaseStudy = await CaseStudy.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedCaseStudy) {
            return NextResponse.json(
                { error: "Case study not found" },
                { status: 404 },
            );
        }
        return NextResponse.json(updatedCaseStudy);
    } catch (error) {
        console.error("Failed to update case study:", error);
        return NextResponse.json(
            { error: "Failed to update case study" },
            { status: 500 },
        );
    }
}

export async function DELETE(request: NextRequest) {
    await db();
    try {
        const { id } = await request.json();
        const deletedCaseStudy = await CaseStudy.findByIdAndDelete(id);
        if (!deletedCaseStudy) {
            return NextResponse.json(
                { error: "Case study not found" },
                { status: 404 },
            );
        }
        return NextResponse.json({ message: "Case study deleted successfully" });
    } catch (error) {
        console.error("Failed to delete case study:", error);
        return NextResponse.json(
            { error: "Failed to delete case study" },
            { status: 500 },
        );
    }
}