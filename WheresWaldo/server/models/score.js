const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ScoreSchema = new Schema({
  score: { type: Number, required: true },
  map: { type: String, required: true },
  name: { type: String, required: true },
});

// ScoreInstanceSchema.virtual("score_formatted").get(function () {
//   //
// });

module.exports = mongoose.model("Score", ScoreSchema);
