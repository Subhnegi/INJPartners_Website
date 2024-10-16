import mongoose from "mongoose";

const jobOpeningSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique:true
  },
  department: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true,
    enum: ['Full-time', 'Part-time', 'Contract', 'Internship'] 
  },
  description: {
    type: String,
    required: true
  },
  responsibilities: {
    type: [String],
    required: true
  },
  qualifications: {
    type: [String],
    required: true
  }
}, { timestamps: true });

export const JobOpening = (mongoose.models.JobOpening) || mongoose.model('JobOpening', jobOpeningSchema);
