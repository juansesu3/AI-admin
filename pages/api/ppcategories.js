import { mongooseConnect } from "@/lib/mongoose";
import { isAdminRequest } from "./auth/[...nextauth]";
import { PpCategory } from "@/models/PpCategory";

const handle = async (req, res) => {
  const { method } = req;

  await mongooseConnect();
  await isAdminRequest(req, res);

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await PpCategory.findOne({ _id: req.query.id }));
    } else {
      res.json(await PpCategory.find());
    }
  }

  if (method === "POST") {
    const { name, parentPpCategory } = req.body;
    const pPCategoryDoc = await PpCategory.create({ name, parent:parentPpCategory });
    res.json(pPCategoryDoc);
  }
};

export default handle;
