import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    image: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
export const User = models.User || model("User", UserSchema);
