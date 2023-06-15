import { mongooseConnect } from "@/lib/mongoose";
import { Proyect } from "@/models/Proyects";

const handle = async (req, res) => {
  const { method } = req;

  await mongooseConnect();

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Proyect.findOne({ _id: req.query.id }));
    } else {
      res.json(await Proyect.find());
    }
  }

  if (method === "POST") {
    const { title, description, linkCode, linkDeploy } = req.body;
    const proyectDoc = await Proyect.create({
      title,
      description,
      linkCode,
      linkDeploy,
    });
    res.json(proyectDoc);
  }
};

export default handle;
