import { db } from "@/dbConfig/dbConfig";
import { CaseStudy } from "@/models/casestudy.model";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
export async function GET() {
	await db();
	try {
		const caseStudies = await CaseStudy.find();
		return NextResponse.json(caseStudies);
	} catch (error) {
		return NextResponse.json({ error: "Failed to fetch case studies" }, { status: 500 });
	}
}
// import type { NextRequest } from "next/server";
// import { NextResponse } from "next/server";
// import mongoose from 'mongoose';
// import CaseStudy from '../path/to/your/CaseStudy/model';

// export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
//   const id = params.id;
//   try {
//     // Ensure you have a MongoDB connection established
//     await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

//     // Fetch the specific case study from the database
//     const caseStudy = await CaseStudy.findOne({ id: id });

//     if (!caseStudy) {
//       return NextResponse.json({ error: 'Case study not found' }, { status: 404 });
//     }

//     return NextResponse.json(caseStudy);
//   } catch (error) {
//     console.error('Failed to fetch case study:', error);
//     return NextResponse.json({ error: 'Failed to fetch case study' }, { status: 500 });
//   }
// }

// export async function POST(request: NextRequest) {
//   try {
//     const data = await request.json();
//     const newCaseStudy = new CaseStudy(data);
//     await newCaseStudy.save();
//     return NextResponse.json(newCaseStudy, { status: 201 });
//   } catch (error) {
//     console.error('Failed to create case study:', error);
//     return NextResponse.json({ error: 'Failed to create case study' }, { status: 500 });
//   }
// }