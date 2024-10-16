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
export async function POST(request: NextRequest) {
    await db();
    try {
        const data = await request.json();
        const newProject = new Project(data);
        await newProject.save();
        return NextResponse.json(newProject, { status: 201 });
    } catch (error) {
        console.error("Failed to create project:", error);
        return NextResponse.json(
            { error: "Failed to create project" },
            { status: 500 },
        );
    }
}

export async function PUT(request: NextRequest) {
    await db();
    try {
        const { id, ...updateData } = await request.json();
        const updatedProject = await Project.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedProject) {
            return NextResponse.json(
                { error: "Project not found" },
                { status: 404 },
            );
        }
        return NextResponse.json(updatedProject);
    } catch (error) {
        console.error("Failed to update project:", error);
        return NextResponse.json(
            { error: "Failed to update project" },
            { status: 500 },
        );
    }
}

export async function DELETE(request: NextRequest) {
    await db();
    try {
        const { id } = await request.json();
        const deletedProject = await Project.findByIdAndDelete(id);
        if (!deletedProject) {
            return NextResponse.json(
                { error: "Project not found" },
                { status: 404 },
            );
        }
        return NextResponse.json({ message: "Project deleted successfully" });
    } catch (error) {
        console.error("Failed to delete project:", error);
        return NextResponse.json(
            { error: "Failed to delete project" },
            { status: 500 },
        );
    }
}