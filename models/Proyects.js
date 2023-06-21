import mongoose, { Schema, model, models } from "mongoose";

const ProyectSchema = new Schema({
  title: { type: String, require: true },
  description: { type: String, require: true },
  selectedTech: { type: [mongoose.Types.ObjectId], ref: "Technology" },
  linkCode: { type: String, require: true },
  linkDeploy: { type: String, require: true },
  images: [{ type: [String], require: true }],
});

export const Proyect = models.Proyect || model('Proyect', ProyectSchema);
