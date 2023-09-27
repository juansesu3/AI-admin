import mongoose, { Schema, model, models } from "mongoose";

const PpCategorySchema = new Schema({
  name: { type: String, required: true },
  parent: { type: mongoose.Types.ObjectId, ref: 'PpCategory' },
});
export const PpCategory =
  models?.PpCategory || model("PpCategory", PpCategorySchema);
