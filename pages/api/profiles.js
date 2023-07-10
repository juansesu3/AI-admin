import { Profile } from "@/models/Profile";
import axios from "axios";

const { mongooseConnect } = require("@/lib/mongoose");

const handle = async (req, res) => {
  await mongooseConnect();
  const { method } = req;

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Profile.findOne({ _id: req.query.id }));
    } else {
      res.json(await Profile.find());
    }
  }

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

  if (method === "PUT") {
    const {
      username,
      greeting,
      shortIntro,
      introYourSelf,
      experinces,
      education,
      languages,
      skills,
      _id,
    } = req.body;
    await Profile.updateOne(
      { _id },
      {
        username,
        greeting,
        shortIntro,
        introYourSelf,
        experinces,
        education,
        languages,
        skills,
      }
    );
    res.json(true);
  }
};
export default handle;
