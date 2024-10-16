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
// import { NextResponse } from "next/server";
// import mongoose from 'mongoose';
// import BlogPost from '../path/to/your/BlogPost/model';

// export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
//   const id = params.id;
//   try {
//     // Ensure you have a MongoDB connection established
//     await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

//     // Fetch the specific blog post from the database
//     const blogPost = await BlogPost.findOne({ id: id });

//     if (!blogPost) {
//       return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
//     }

//     return NextResponse.json(blogPost);
//   } catch (error) {
//     console.error('Failed to fetch blog post:', error);
//     return NextResponse.json({ error: 'Failed to fetch blog post' }, { status: 500 });
//   }
// }

export async function POST(request: NextRequest) {
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
