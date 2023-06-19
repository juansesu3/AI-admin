import { mongooseConnect } from "@/lib/mongoose";
import { Technology } from "@/models/Technology";

const handle = async (req, res) => {
  const { method } = req;

  await mongooseConnect();

  if (method === "GET") {
    res.json(await Technology.find());
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
};

export default handle;
