import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { db } from "@/dbConfig/dbConfig";
import { Testimonial } from "@/models/testimonial.model";
export async function GET() {
	await db();
	try {
		const testimonials = await Testimonial.find({});
		return NextResponse.json(testimonials);
	} catch (error) {
		return NextResponse.json({ error: "Failed to fetch testimonials" }, { status: 500 });
	}
}

export async function POST(request: NextRequest) {
    await db();
    try {
        const data = await request.json();
        const newTestimonial = new Testimonial(data);
        await newTestimonial.save();
        return NextResponse.json(newTestimonial, { status: 201 });
    } catch (error) {
        console.error("Failed to create testimonial:", error);
        return NextResponse.json(
            { error: "Failed to create testimonial" },
            { status: 500 },
        );
    }
}

export async function PUT(request: NextRequest) {
    await db();
    try {
        const { id, ...updateData } = await request.json();
        const updatedTestimonial = await Testimonial.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedTestimonial) {
            return NextResponse.json(
                { error: "Testimonial not found" },
                { status: 404 },
            );
        }
        return NextResponse.json(updatedTestimonial);
    } catch (error) {
        console.error("Failed to update testimonial:", error);
        return NextResponse.json(
            { error: "Failed to update testimonial" },
            { status: 500 },
        );
    }
}

export async function DELETE(request: NextRequest) {
    await db();
    try {
        const { id } = await request.json();
        const deletedTestimonial = await Testimonial.findByIdAndDelete(id);
        if (!deletedTestimonial) {
            return NextResponse.json(
                { error: "Testimonial not found" },
                { status: 404 },
            );
        }
        return NextResponse.json({ message: "Testimonial deleted successfully" });
    } catch (error) {
        console.error("Failed to delete testimonial:", error);
        return NextResponse.json(
            { error: "Failed to delete testimonial" },
            { status: 500 },
        );
    }
}