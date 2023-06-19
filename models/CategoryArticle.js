import mongoose, { Schema, model, models } from "mongoose";

const CategoryArticleSchema = new Schema({
  name: { type: String, require: true },
  parent: { type: mongoose.Types.ObjectId, ref: "CategoryArticle" },
  topics: [{type: Object, }],
});

export const CategoryArticle =
  models?.CategoryArticle || model("CategoryArticle", CategoryArticleSchema);
