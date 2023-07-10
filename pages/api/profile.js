import { Profile } from "@/models/Profile";
import axios from "axios";

const { mongooseConnect } = require("@/lib/mongoose");

const handle = async (req, res) => {
  await mongooseConnect();
  const { method } = req;

  if (method === "POST") {
    const {
      username,
      greeting,
      shortIntro,
      introYourSelf,
      experinces,
      education,
      languages,
      skills,
    } = req.body;

    const profileDoc = await Profile.create({
      username,
      greeting,
      shortIntro,
      introYourSelf,
      experinces,
      education,
      languages,
      skills,
    });
    res.json(profileDoc);
  }
};
export default handle;
