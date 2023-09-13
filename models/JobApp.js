import { Schema, model, models } from "mongoose";

const JobAppSchema = new Schema(
  {
    company: { type: String, require: true },
    jobName: { type: String, require: true },
    requirements: { type: String, require: true },
    jobDescription: { type: String, require: true },
    jobContacts: { type: String, require: true },
    jobtype: { type: String, require: true },
    seconState: { type: String },
  },
  {
    timestamps: true,
  }
);

export const JobApp = models.JobApp || model("JobApp", JobAppSchema);
