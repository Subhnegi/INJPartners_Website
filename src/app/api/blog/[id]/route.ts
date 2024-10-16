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
export async function DELETE(request: NextRequest, { params }: { params: { id: string }}) {
    await db();
	console.log( params.id)
    try {
        const id = params.id;
        const deletedPost = await BlogPost.findByIdAndDelete(id);
        if (!deletedPost) {
            return NextResponse.json(
                { error: "Blog post not found" },
                { status: 404 },
            );
        }
        return NextResponse.json({ message: "Blog post deleted successfully" });
    } catch (error) {
        console.error("Failed to delete blog post:", error);
        return NextResponse.json(
            { error: "Failed to delete blog post" },
            { status: 500 },
        );
    }
}