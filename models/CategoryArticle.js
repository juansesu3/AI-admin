import { Schema, model, models } from "mongoose";

const CategoryArticleSchema = new Schema({
  name: { type: String, require: true },
});

export const CategoryArticle = models?.CategoryArticle || model('CategoryArticle', CategoryArticleSchema);