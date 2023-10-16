var express = require("express");
var router = express.Router();
const Score = require("../models/score");
const Character = require("../models/character");
const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");

/* GET score */
router.get(
  "/scores",
  asyncHandler(async function (req, res) {
    let scores = await Score.find(
      { map: "convention" }.sort({ score: 1 }).exec()
    );
    return res.json(scores);
  })
);

//Post score
router.post("/scores", [
  body("name").trim().isLength({ min: 1 }).escape(),

  asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    const score = new Score({
      map: req.body.map,
      score: req.score,
      name: req.body.name,
    });

    if (!errors.isEmpty()) {
      res.status(500);
    } else {
      await score.save();
      res.status(200);
    }
  }),
]);

router.post(
  "/",
  asyncHandler(async (req, res) => {
    console.log(req.body);
    const char = await Character.findOne({
      map: req.body.map,
      name: req.body.charName,
    }).exec();

    console.log(char);

    if (char.Xmin <= req.body.coordinate[0] <= char.Xmax) {
      if (char.Ymin <= req.body.coordinate[1] <= char.Ymax) {
        res.status(200).json({ found: true });
      } else {
        res.status(200).json({ found: false });
      }
    }
  })
);

module.exports = router;
