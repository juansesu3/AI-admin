import { Schema, model, models } from "mongoose";

const TechnologySchema = new Schema({
  name: { type: String, require: true },
  docLink: { type: String, require: true },
  images: [{ type: [String], require: true }],
});
export const Technology =
  models.Technology || model("Technology", TechnologySchema);
