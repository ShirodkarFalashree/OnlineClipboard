// routes/get.js
const express = require("express");
const router = express.Router();
const Clipboard = require("../models/Clipboard");

router.get("/:code", async (req, res) => {
  const data = await Clipboard.findOne({ code: req.params.code });

  if (!data) return res.status(404).json({ msg: "Not found" });

  // check expiry
  if (new Date() > data.expiresAt) {
    await Clipboard.deleteOne({ code: req.params.code });
    return res.status(410).json({ msg: "Expired" });
  }

  res.json(data);
});

module.exports = router;