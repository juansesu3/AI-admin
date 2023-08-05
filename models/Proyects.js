import mongoose, { Schema, model, models } from "mongoose";

const ProyectSchema = new Schema(
  {
    title: { type: String, require: true },
    description: { type: String, require: true },
    selectedTech: { type: [mongoose.Types.ObjectId], ref: "Technology" },
    linkCode: { type: String, require: true },
    linkDeploy: { type: String, require: true },
    images: [{ type: String, require: true }],
    about: { type: String, require: true },
    client: { type: String, require: true },
    service: { type: String, require: true },
    proyectType: { type: String, require: true },
    releaseDate: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

export const Proyect = models.Proyect || model("Proyect", ProyectSchema);
