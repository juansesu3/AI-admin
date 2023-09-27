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
      res.json(await PpCategory.find().populate("parent"));
    }
  }

  if (method === "POST") {
    const { name, parentPpCategory } = req.body;
    const pPCategoryDoc = await PpCategory.create({
      name,
      parent: parentPpCategory || undefined,
    });
    res.json(pPCategoryDoc);
  }

  if (method === "PUT") {
    const { name, parentPpCategory, _id } = req.body;
    const pPCategoryDoc = await PpCategory.updateOne(
      { _id },
      {
        name,
        parent: parentPpCategory || undefined,
      }
    );
    res.json(pPCategoryDoc);
  }
  if (method === "DELETE") {
    const { _id } = req.query;
    await PpCategory.deleteOne({ _id });
    res.json("ok");
  }
};

export default handle;
