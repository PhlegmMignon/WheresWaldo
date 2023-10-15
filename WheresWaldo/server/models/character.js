const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const subSchema = new mongoose.Schema({
  min: Number,
  max: Number,
});

const CharacterSchema = new Schema({
  name: { type: String, required: true },
  X: [subSchema],
  Y: [subSchema],
  map: { type: String, required: true },
});

CharacterSchema.virtual("url").get(function () {
  return `/${this._id}`;
});

module.exports = mongoose.model("Character", CharacterSchema);
