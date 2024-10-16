import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { db } from "@/dbConfig/dbConfig";
import { BlogPost } from "@/models/blogpost.model";

export async function GET(
	request: NextRequest,
	{ params }: { params: { id: string } },
) {
	await db();
	const id = params.id;
	try {
		const post = await BlogPost.findById(id);
		return NextResponse.json(post);
	} catch (error) {
		return NextResponse.json({ error: "Failed to fetch blog post" }, { status: 500 });
	}
	
}
