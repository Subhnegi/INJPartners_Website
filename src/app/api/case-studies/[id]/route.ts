import { db } from "@/dbConfig/dbConfig";
import { CaseStudy } from "@/models/casestudy.model";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function GET(request: NextRequest, {params}: {params: {id: string}}) {
    const id = params.id;
	await db();
	try {
		const caseStudies = await CaseStudy.findById(id);
		return NextResponse.json(caseStudies);
	} catch (error) {
		return NextResponse.json({ error: "Failed to fetch case studies" }, { status: 500 });
	}
}

export async function DELETE(request: NextRequest, {params}: {params: {id: string}}) {
    await db();
	const id = params.id;
    try {
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