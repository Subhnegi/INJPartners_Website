import mongoose from "mongoose";

const resultSchema = new mongoose.Schema(
	{
		category: {
			type: String,
			required: true,
		},
		before: {
			type: Number,
			required: true,
		},
		after: {
			type: Number,
			required: true,
		},
	},
	{ _id: false },
);

const caseStudySchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			unique: true,
		},
		description: {
			type: String,
			required: true,
		},
		image: {
			type: String,
		},
		client: {
			type: String,
			required: true,
		},
		overview: {
			type: String,
			required: true,
		},
		achievements: {
			type: [String],
			required: true,
		},
		methodology: {
			type: [String],
			required: true,
		},
		results: {
			type: [resultSchema],
			required: true,
		},
		insights: {
			type: [String],
			required: true,
		},
	},
	{ timestamps: true },
);

export const CaseStudy = (mongoose.models.CaseStudy) || mongoose.model("CaseStudy", caseStudySchema);
