const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
  name: { type: String, required: true },
  Xmin: { type: Number, required: true },
  Xmax: { type: Number, required: true },
  Ymin: { type: Number, required: true },
  Ymax: { type: Number, required: true },
  map: { type: String, required: true },
});

CharacterSchema.virtual("url").get(function () {
  return `/${this._id}`;
});

module.exports = mongoose.model("Character", CharacterSchema);

//lyff x: 1121-1185 y: 1786-1941
//zim x:2291-2350  y: 220-321
//kon x: 1741-1830 y: 1654-1827
