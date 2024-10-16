
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { db } from "@/dbConfig/dbConfig";
import { Service} from "@/models/service.model";
export async function GET(request: NextRequest, {params}: {params: {id: string}}) {
    const id = params.id;
    await db();
	try {
		const services = await Service.findById(id);
		return NextResponse.json(services);
	} catch (error) {
		NextResponse.json({ error: "Failed to fetch services" }, { status: 500 });
	}
}
