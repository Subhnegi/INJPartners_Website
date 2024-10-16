import mongoose from "mongoose";

const sectionSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		content: {
			type: [String],
			required: true,
		},
	},
	{ _id: false },
);

const contentSchema = new mongoose.Schema(
	{
		introduction: {
			type: String,
			required: true,
		},
		sections: {
			type: [sectionSchema],
			required: true,
		},
		conclusion: {
			type: String,
			required: true,
		},
	},
	{ _id: false },
);

const blogPostSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			unique:true,
		},
		category: {
			type: String,
			required: true,
		},
		summary: {
			type: String,
			required: true,
		},
		image: {
			type: String,
		},
		date: {
			type: Date,
			required: true,
		},
		author: {
			type: String,
			required: true,
		},
		content: {
			type: contentSchema,
			required: true,
		},
		readingTime: {
			type: Number,
			required: true,
		},
		tags: {
			type: [String],
			required: true,
		},
		relatedPosts: {
			type: [mongoose.Schema.Types.ObjectId],
			ref: "BlogPost",
		},
	},
	{ timestamps: true },
);

export const BlogPost = (mongoose.models.BlogPost) || mongoose.model("BlogPost", blogPostSchema);

