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
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { month, client, hours, description } = req.body;

    try {
      const newTime = new Time({
        month,
        client,
        hours,
        description,
        user: req.user.id
      });

      const time = await newTime.save();

      res.json(time);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route        PUT api/time/:id
// @desc         Update time
// @access       Private
router.put("/:id", auth, async (req, res) => {
  const { month, client, hours, description } = req.body;

  //Build Time Object
  const timeFields = {};
  if (month) timeFields.month = month;
  if (client) timeFields.client = client;
  if (hours) timeFields.hours = hours;
  if (description) timeFields.description = description;

  try {
    let time = await Time.findById(req.params.id);

    if (!time) return res.status(404).json({ msg: "Time not found" });

    // Make sure user owns time entry
    if (time.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    time = await Time.findByIdAndUpdate(
      req.params.id,
      { $set: timeFields },
      { new: true }
    );

    res.json(time);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// @route        DELETE api/time/:id
// @desc         Delete time
// @access       Private
router.delete("/:id", auth, async (req, res) => {
  try {
    let time = await Time.findById(req.params.id);

    if (!time) return res.status(404).json({ msg: "Time not found" });

    // Make sure user owns time entry
    if (time.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    await Time.findByIdAndRemove(req.params.id);

    res.json({ msg: "Contact Removed" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
