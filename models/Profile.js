import { Schema, model, models } from "mongoose";

const ProfileSchema = new Schema({
    username: { type: String, require: true },
  greeting: { type: String, require: true },
  shortIntro: { type: String, require: true },
  introYourSelf: { type: String, require: true },
  experinces: [{ type: String, require: true }],
  education: [{ type: String, require: true }],
  languages: [{ type: String, require: true }],
  skills: [{ type: String, require: true }],
});

export const Profile = models.Profile || model("Profile", ProfileSchema);
