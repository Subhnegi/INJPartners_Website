import mongoose from "mongoose";

// Schema for testimonial
const testimonialSchema = new mongoose.Schema(
	{
		quote: {
			type: String,
		},
		author: {
			type: String,
			required: true,
		},
		position: {
			type: String,
			required: true,
		},
	},
	{ _id: false },
);

// Schema for projects
const projectSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			unique: true,
		},
		client: {
			type: String,
			required: true,
		},
		industry: {
			type: String,
			required: true,
		},
		duration: {
			type: String,
			required: true,
		},
		date: {
			type: Date,
			required: true,
		},
		overview: {
			type: String,
			required: true,
		},
		challenges: {
			type: [String],
			required: true,
		},
		solutions: {
			type: [String],
			required: true,
		},
		results: {
			type: [String],
			required: true,
		},
		testimonial: {
			type: testimonialSchema,
			required: true,
		},
		image: {
			type: String,
		}
	},
	{ timestamps: true },
);

export const Project = (mongoose.models.Project) || mongoose.model("Project", projectSchema);

