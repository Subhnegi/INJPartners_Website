import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
		icon: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		methodologies: [
			{
				type: String,
			},
		],
		benefits: [
			{
				type: String,
			},
		],
	},
	{
		timestamps: true,
	},
);

export const Service =
	(mongoose.models.Service )|| mongoose.model("Service", ServiceSchema);
