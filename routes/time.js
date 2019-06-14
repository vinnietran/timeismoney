const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator/check");

const User = require("../models/User");
const Time = require("../models/Time");

// @route        GET api/time
// @desc         GET all users time
// @access       Private
router.get("/", auth, async (req, res) => {
  try {
    const time = await Time.find({ user: req.user.id }).sort({ date: -1 });
    res.json(time);
  } catch (error) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route        POST api/time
// @desc         Add users time
// @access       Private
router.post(
  "/",
  [
    auth,
    [
      check("month", "Month is a required")
        .not()
        .isEmpty(),
      check("client", "Client is a required")
        .not()
        .isEmpty(),
      check("hours", "Hours is a required")
        .not()
        .isEmpty(),
      check("description", "Month is a required")
        .not()
        .isEmpty()
    ]
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  }
);

// @route        PUT api/time/:id
// @desc         Update time
// @access       Private
router.put("/:id", (req, res) => {
  res.send("Update users logged time");
});

// @route        DELETE api/time/:id
// @desc         Delete time
// @access       Private
router.put("/:id", (req, res) => {
  res.send("Delete time");
});

module.exports = router;
