import { db } from "@/dbConfig/dbConfig";
import { FAQCategory } from "@/models/faqcategory.model";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET() {
	await db();
    try {
        const faqs = await FAQCategory.find({});
        return NextResponse.json(faqs);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch FAQs" }, { status: 500 });
    }
}


export async function POST(request: NextRequest) {
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

export async function PUT(request: NextRequest) {
    await db();
    try {
        const { id, ...updateData } = await request.json();
        const updatedFAQCategory = await FAQCategory.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedFAQCategory) {
            return NextResponse.json(
                { error: "FAQ category not found" },
                { status: 404 },
            );
        }
        return NextResponse.json(updatedFAQCategory);
    } catch (error) {
        console.error("Failed to update FAQ category:", error);
        return NextResponse.json(
            { error: "Failed to update FAQ category" },
            { status: 500 },
        );
    }
}

export async function DELETE(request: NextRequest) {
    await db();
    try {
        const { id } = await request.json();
        const deletedFAQCategory = await FAQCategory.findByIdAndDelete(id);
        if (!deletedFAQCategory) {
            return NextResponse.json(
                { error: "FAQ category not found" },
                { status: 404 },
            );
        }
        return NextResponse.json({ message: "FAQ category deleted successfully" });
    } catch (error) {
        console.error("Failed to delete FAQ category:", error);
        return NextResponse.json(
            { error: "Failed to delete FAQ category" },
            { status: 500 },
        );
    }
}