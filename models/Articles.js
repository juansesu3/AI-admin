import { Schema, model, models } from "mongoose";

const ArticleSchema = new Schema({
  title: { type: String, require: true },
  summary: { type: String, require: true },
  content: { type: String, require: true },
  author: { type: String, require: true },
  imgAuthor: { type: String, require: true },
});

export const Article = models.Article || model("Article", ArticleSchema);
