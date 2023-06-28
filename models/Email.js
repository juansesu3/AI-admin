import { Schema, model, models } from "mongoose";

const EmailSchema = new Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    subject: { type: String, require: true },
    message: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

export const Email = models.Email || model("Email", EmailSchema);
