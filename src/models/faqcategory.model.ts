import mongoose from "mongoose";
const questionSchema = new mongoose.Schema(
	{
		q: {
			type: String,
			required: true,
		},
		a: {
			type: String,
			required: true,
		},
	},
	{ _id: false },
);

// Schema for FAQ categories
const faqCategorySchema = new mongoose.Schema(
	{
		category: {
			type: String,
			required: true,
		},
		questions: {
			type: [questionSchema],
			required: true,
		},
	},
	{ timestamps: true },
);

export const FAQCategory = (mongoose.models.FAQCategory) ||mongoose.model("FAQCategory", faqCategorySchema);

