import { db } from "@/dbConfig/dbConfig";
import { FAQCategory } from "@/models/faqcategory.model";
import { NextResponse } from "next/server";

export async function GET() {
	await db();
    try {
        const faqs = await FAQCategory.find({});
        return NextResponse.json(faqs);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch FAQs" }, { status: 500 });
    }
}

// import { NextResponse } from "next/server";
// import mongoose from 'mongoose';
// import FAQCategory from '../path/to/your/FAQCategory/model';

// export async function GET() {
//   try {
//     // Ensure you have a MongoDB connection established
//     await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

//     // Fetch all FAQ categories from the database
//     const faqs = await FAQCategory.find({});

//     return NextResponse.json(faqs);
//   } catch (error) {
//     console.error('Failed to fetch FAQs:', error);
//     return NextResponse.json({ error: 'Failed to fetch FAQs' }, { status: 500 });
//   }
// }

export async function POST(request: Request) {
    await db();
	try {
		const data = await request.json();
		const newFAQCategory = new FAQCategory(data);
		await newFAQCategory.save();
		return NextResponse.json(newFAQCategory, { status: 201 });
	} catch (error) {
		console.error("Failed to create FAQ category:", error);
		return NextResponse.json(
			{ error: "Failed to create FAQ category" },
			{ status: 500 },
		);
	}
}
