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

  if (method === "PUT") {
    const { title, description, linkCode, linkDeploy, _id } = req.body;
    await Proyect.updateOne(
      { _id },
      { title, description, linkCode, linkDeploy }
    );
    res.json(true);
  }
  if (method === "DELETE") {

    if (req.query?.id) {
      await Proyect.deleteOne({_id:req.query.id });
      res.json(true);
    }

  }

};

export default handle;
