import { mongooseConnect } from "@/lib/mongoose";
import { Proyect } from "@/models/Proyects";
import { isAdminRequest } from "./auth/[...nextauth]";

const handle = async (req, res) => {
  const { method } = req;

  await mongooseConnect();
  await isAdminRequest(req, res);

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Proyect.findOne({ _id: req.query.id }));
    } else {
      res.json(await Proyect.find());
    }
  }

  if (method === "POST") {
    const { title, description, selectedTech, linkCode, linkDeploy, images } =
      req.body;
    const proyectDoc = await Proyect.create({
      title,
      description,
      selectedTech,
      linkCode,
      linkDeploy,
      images,
    });
    res.json(proyectDoc);
  }

  if (method === "PUT") {
    const {
      title,
      description,
      selectedTech,
      linkCode,
      linkDeploy,
      images,
      _id,
    } = req.body;
    await Proyect.updateOne(
      { _id },
      { title, description, selectedTech, linkCode, linkDeploy, images }
    );
    res.json(true);
  }
  if (method === "DELETE") {
    if (req.query?.id) {
      await Proyect.deleteOne({ _id: req.query.id });
      res.json(true);
    }
  }
};

export default handle;
