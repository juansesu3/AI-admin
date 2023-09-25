import { mongooseConnect } from "@/lib/mongoose";
import { isAdminRequest } from "./auth/[...nextauth]";
import { PpCategory } from "@/models/PpCategory";

const handle = async (req, res) => {
  const { method } = req;

  await mongooseConnect();
  await isAdminRequest(req, res);
  if (method === "POST") {
    const { name } = req.body;
    const pPCategoryDoc = await PpCategory.create({ name });
    res.json(pPCategoryDoc);
  }
};

export default handle;
