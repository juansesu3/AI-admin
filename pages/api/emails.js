import { mongooseConnect } from "@/lib/mongoose";
import { Email } from "@/models/Email";

const handle = async (req, res) => {
  const { method } = req;

  await mongooseConnect();

  if (method === "GET") {
    res.json(await Email.find());
  }
};
export default handle;
