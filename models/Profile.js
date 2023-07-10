import { Schema, model, models } from "mongoose";

const ProfileSchema = new Schema({
  username: { type: String, require: true },
  greeting: { type: String, require: true },
  shortIntro: { type: String, require: true },
  introYourSelf: { type: String, require: true },
  experinces: [{ type: Object, require: true }],
  education: [{ type: Object, require: true }],
  languages: [{ type: Object, require: true }],
  skills: [{ type: Object, require: true }],
},{
  timestamps:true
});

export const Profile = models.Profile || model("Profile", ProfileSchema);
