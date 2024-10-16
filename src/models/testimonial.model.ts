import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		role: {
			type: String,
			required: true,
		},
		testimonial: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true },
);

export const Testimonial = (mongoose.models.Testimonial) ||
mongoose.model("Testimonial", testimonialSchema);

