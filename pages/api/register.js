import { mongooseConnect } from "@/lib/mongoose";
import { User } from "@/models/user";
import bcrypt from "bcryptjs";
import { isAdminRequest } from "./auth/[...nextauth]";

const handle = async (req, res) => {
  await mongooseConnect();
  await isAdminRequest(req,res)
  const { method } = req;

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await User.findOne({ _id: req.query.id }));
    } else {
      res.json(await User.find());
    }
  }

  if (method === "POST") {
    const { name, email, password, image } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
   
    const userDoc = await User.create({
      name,
      email,
      password: hashedPassword,
      image,
    });
    res.json(userDoc);
  }
};

export default handle;