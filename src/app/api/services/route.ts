import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { db } from "@/dbConfig/dbConfig";
import { Service} from "@/models/service.model";

export async function GET() {
    await db();
	try {
		const services = await Service.find({});
		return NextResponse.json(services);
	} catch (error) {
		return NextResponse.json({ error: "Failed to fetch services" }, { status: 500 });
	}
}

export async function POST(request: NextRequest) {
    await db();
    try {
        const data = await request.json();
        const newService = new Service(data);
        await newService.save();
        return NextResponse.json(newService, { status: 201 });
    } catch (error) {
        console.error("Failed to create service:", error);
        return NextResponse.json(
            { error: "Failed to create service" },
            { status: 500 },
        );
    }
}

export async function PUT(request: NextRequest) {
    await db();
    try {
        const { id, ...updateData } = await request.json();
        const updatedService = await Service.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedService) {
            return NextResponse.json(
                { error: "Service not found" },
                { status: 404 },
            );
        }
        return NextResponse.json(updatedService);
    } catch (error) {
        console.error("Failed to update service:", error);
        return NextResponse.json(
            { error: "Failed to update service" },
            { status: 500 },
        );
    }
}

export async function DELETE(request: NextRequest) {
    await db();
    try {
        const { id } = await request.json();
        const deletedService = await Service.findByIdAndDelete(id);
        if (!deletedService) {
            return NextResponse.json(
                { error: "Service not found" },
                { status: 404 },
            );
        }
        return NextResponse.json({ message: "Service deleted successfully" });
    } catch (error) {
        console.error("Failed to delete service:", error);
        return NextResponse.json(
            { error: "Failed to delete service" },
            { status: 500 },
        );
    }
}