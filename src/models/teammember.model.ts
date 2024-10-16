import mongoose, {Schema} from "mongoose"

const teamMemberSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		role: {
			type: String,
			required: true,
		},
		bio: {
			type: String,
			required: true,
		},
		imageUrl: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true },
);

export const TeamMember = (mongoose.models.TeamMember) || mongoose.model("TeamMember", teamMemberSchema);

