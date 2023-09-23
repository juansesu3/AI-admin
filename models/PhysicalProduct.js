import { Schema, model, models } from "mongoose";

const PhysicalProductSchema = new Schema(
  {
    name: { type: String, require: true },
    description: { type: String, require: true },
    images: [{ type: String }],
    //category: { type: mongoose.Types.ObjectId, ref: "Category" },
    price: { type: String, require: true },
    stock: { type: String, require: true },
    //properties: { type: Object },
  },
  {
    timestamps: true,
  }
);

export const PhysicalProduct =
  models.PhysicalProduct || model("PhysicalProduct", PhysicalProductSchema);
