import { Schema, model, models } from "mongoose";

const PpCategorySchema = new Schema({
  name: { type: String, required: true },
});
export const PpCategory =
  models?.PpCategory || model("PpCategory", PpCategorySchema);
