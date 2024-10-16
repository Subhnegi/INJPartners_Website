import { NextResponse } from "next/server";
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