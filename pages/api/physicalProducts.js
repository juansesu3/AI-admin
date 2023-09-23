import { PhysicalProduct } from "@/models/PhysicalProduct";

const { mongooseConnect } = require("@/lib/mongoose");
const { isAdminRequest } = require("./auth/[...nextauth]");

const handle = async (req, res) => {
  const { method } = req;

  await mongooseConnect();
  await isAdminRequest(req, res);
  if (method === "GET") {
    if (req.query?.id) {
      res.json(await PhysicalProduct.findOne({ _id: req.query.id }));
    } else {
      res.json(await PhysicalProduct.find());
    }
  }

  if (method === "POST") {
    const { name, description, price, images, stock } = req.body;
    const PhysicalProductDoc = await PhysicalProduct.create({
      name,
      description,
      price,
      images,
      stock,
    });
    res.json(PhysicalProductDoc);
  }
};
export default handle;
