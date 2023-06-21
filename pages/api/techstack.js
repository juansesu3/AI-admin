import { mongooseConnect } from "@/lib/mongoose";
import { Technology } from "@/models/Technology";
import { isAdminRequest } from "./auth/[...nextauth]";

const handle = async (req, res) => {
  const { method } = req;

  await mongooseConnect();
  await isAdminRequest(req, res);

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Technology.findOne({ _id: req.query.id }));
    } else {
      res.json(await Technology.find());
    }
  }

  if (method === "POST") {
    const { name, docLink, images } = req.body;

    const technologyDoc = await Technology.create({
      name,
      docLink,
      images,
    });
    res.json(technologyDoc);
  }

  if (method === "PUT") {
    const { name, docLink, images, _id } = req.body;
    await Technology.updateOne({ _id }, { name, docLink, images });
    res.json(true);
  }

  if (method === "DELETE") {
    if (req.query?.id) {
      await Technology.deleteOne({ _id: req.query.id });
      res.json(true);
    }
  }
};

export default handle;
