const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;
const models = mongoose.models;

const ArduinoDataSchema = new Schema(
  {
    buttonState: { type: String },
  },
  {
    timestamps: true,
  }
);

const ArduinoData =
  models.ArduinoData || model("ArduinoData", ArduinoDataSchema);

module.exports = ArduinoData;
