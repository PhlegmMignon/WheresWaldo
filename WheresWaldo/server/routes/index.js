var express = require("express");
var router = express.Router();
const Score = require("../models/score");
const Character = require("../models/character");
const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");

/* GET score */
router.post(
  "/getScores",
  asyncHandler(async function (req, res) {
    let scores = await Score.find({ map: req.body.map })
      .sort({ score: 1 })
      .limit(5)
      .exec();

    return res.json(scores);
  })
);

//Post score
router.post("/scores", [
  body("name").trim().isLength({ min: 1 }).escape(),

  asyncHandler(async (req, res) => {
    const errors = validationResult(req);

    console.log(req.body);

    let time = req.body.score.minutes * 60 + req.body.score.seconds;

    const score = new Score({
      map: req.body.map,
      score: time,
      name: req.body.name,
    });

    if (!errors.isEmpty()) {
      res.status(500);
    } else {
      await score.save();
      res.status(200).json({ success: true });
    }
  }),
]);

//Character found validation
router.post(
  "/",
  asyncHandler(async (req, res) => {
    console.log("checking");

    const char = await Character.findOne({
      map: req.body.map,
      name: req.body.charName,
    }).exec();

    if (
      char.Xmin <= req.body.coordinate[0] &&
      req.body.coordinate[0] <= char.Xmax
    ) {
      if (
        char.Ymin <= req.body.coordinate[1] &&
        req.body.coordinate[1] <= char.Ymax
      ) {
        res.status(200).json({ charPosition: req.body.id, found: true });
      }
    } else {
      res.status(200).json({ found: false });
    }
  })
);

module.exports = router;
