import { NextResponse } from "next/server";

export async function GET() {
	const jobOpenings = [
        {
            title: "Senior Research Analyst",
            department: "Market Research",
            location: "New York, NY",
            type: "Full-time",
            description:
                "We're seeking an experienced Research Analyst to lead complex market research projects and deliver actionable insights to our clients.",
            responsibilities: [
                "Design and implement research methodologies",
                "Analyze quantitative and qualitative data",
                "Present findings to clients and stakeholders",
                "Mentor junior team members",
            ],
            qualifications: [
                "5+ years of experience in market research",
                "Strong analytical and statistical skills",
                "Excellent communication and presentation abilities",
                "Proficiency in research tools like SPSS, R, or Python",
            ],
        },
        {
            title: "Data Scientist",
            department: "Data Analytics",
            location: "San Francisco, CA",
            type: "Full-time",
            description:
                "Join our data science team to develop advanced analytics models and drive data-driven decision making for our clients.",
            responsibilities: [
                "Develop and implement machine learning models",
                "Conduct statistical analysis on large datasets",
                "Create data visualizations and dashboards",
                "Collaborate with research teams to integrate data insights",
            ],
            qualifications: [
                "Master's or PhD in Data Science, Statistics, or related field",
                "3+ years of experience in applied data science",
                "Proficiency in Python, R, and SQL",
                "Experience with big data technologies (e.g., Hadoop, Spark)",
            ],
        },
        {
            title: "Project Manager",
            department: "Operations",
            location: "Remote",
            type: "Full-time",
            description:
                "We're looking for a skilled Project Manager to oversee multiple research projects and ensure their successful execution.",
            responsibilities: [
                "Manage project timelines, budgets, and resources",
                "Coordinate with clients and internal teams",
                "Identify and mitigate project risks",
                "Ensure project deliverables meet quality standards",
            ],
            qualifications: [
                "3+ years of project management experience in research or consulting",
                "PMP certification preferred",
                "Strong organizational and leadership skills",
                "Excellent client communication abilities",
            ],
        },
    ];
	return NextResponse.json(jobOpenings);
}