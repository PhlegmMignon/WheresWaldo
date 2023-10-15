var express = require("express");
var router = express.Router();
const Score = require("../models/score");
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
      map: req.map,
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
    const char = await Character.find({
      map: req.body.map,
      name: req.body.name,
    }).exec();

    if (char.X[0] <= req.body.x <= char.X[1]) {
      if (char.Y[0] <= req.body.y <= char.Y[1]) {
        res.status(200).json({ found: true });
      }
    }
    res.status(200).json({ found: false });
  })
);

module.exports = router;
