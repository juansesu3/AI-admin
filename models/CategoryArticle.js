import mongoose, { Schema, model, models } from "mongoose";

const CategoryArticleSchema = new Schema({
  name: { type: String, require: true },
  parent: { type: mongoose.Types.ObjectId, ref: "CategoryArticle" },
});

export const CategoryArticle =
  models?.CategoryArticle || model("CategoryArticle", CategoryArticleSchema);
