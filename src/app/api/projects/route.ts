import { db } from "@/dbConfig/dbConfig";
import { Project } from "@/models/project.model";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function GET() {
    await db();
    try {
        const projects = await Project.find();
        return NextResponse.json(projects);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
    }
}

// import type { NextRequest } from "next/server";
// import { NextResponse } from "next/server";
// import mongoose from 'mongoose';
// import Project from '../path/to/your/Project/model';

// export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
//   const id = params.id;
//   try {
//     // Ensure you have a MongoDB connection established
//     await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

//     // Fetch the specific project from the database
//     const project = await Project.findOne({ id: id });

//     if (!project) {
//       return NextResponse.json({ error: 'Project not found' }, { status: 404 });
//     }

//     return NextResponse.json(project);
//   } catch (error) {
//     console.error('Failed to fetch project:', error);
//     return NextResponse.json({ error: 'Failed to fetch project' }, { status: 500 });
//   }
// }

// export async function POST(request: NextRequest) {
//   try {
//     const data = await request.json();
//     const newProject = new Project(data);
//     await newProject.save();
//     return NextResponse.json(newProject, { status: 201 });
//   } catch (error) {
//     console.error('Failed to create project:', error);
//     return NextResponse.json({ error: 'Failed to create project' }, { status: 500 });
//   }
// }