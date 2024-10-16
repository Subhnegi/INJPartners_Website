import { BlogPost } from "@/models/blogpost.model";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { db } from "@/dbConfig/dbConfig";
export async function GET() {
	await db();
	try {
		const blogPosts = await BlogPost.find({});
		return NextResponse.json(blogPosts);
	} catch (error) {
		return NextResponse.json(
			{ error: "Failed to fetch blogs" },
			{ status: 500 },
		);
	}
}

export async function POST(request: NextRequest) {
    await db();
    try {
        const data = await request.json();
        const newPost = new BlogPost(data);
        await newPost.save();
        return NextResponse.json(newPost, { status: 201 });
    } catch (error) {
        console.error("Failed to create blog post:", error);
        return NextResponse.json(
            { error: "Failed to create blog post" },
            { status: 500 },
        );
    }
}

export async function PUT(request: NextRequest) {
    await db();
    try {
        const { id, ...updateData } = await request.json();
        const updatedPost = await BlogPost.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedPost) {
            return NextResponse.json(
                { error: "Blog post not found" },
                { status: 404 },
            );
        }
        return NextResponse.json(updatedPost);
    } catch (error) {
        console.error("Failed to update blog post:", error);
        return NextResponse.json(
            { error: "Failed to update blog post" },
            { status: 500 },
        );
    }
}

export async function DELETE(request: NextRequest) {
    await db();
    try {
        const { id } = await request.json();
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
