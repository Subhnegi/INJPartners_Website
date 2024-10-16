import { db } from "@/dbConfig/dbConfig";
import { Project } from "@/models/project.model";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";


export async function GET(request: NextRequest, {params}: {params: {id: string}}) {
    const id = params.id;
	await db();
    try {
        const projects = await Project.findById(id);
        return NextResponse.json(projects);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
    }
}
