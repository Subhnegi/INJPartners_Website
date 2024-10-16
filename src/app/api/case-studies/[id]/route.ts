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
